import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './AdminPanel.css'
import './components/EditarLocal.css'
import AvaliacoesComentarios from './components/AvaliacoesComentarios'

const CLOUD_NAME = 'dybpie9aa'
const UPLOAD_PRESET = 'gadys_tcc'

let _sid = 0
const suid = () => ++_sid

const ImageSlot = ({ slot, uploading, large, onUpload, onRemove, canRemove }) => {
  const ref = useRef()
  return (
    <div className="editor-slot-wrapper">
      <div
        className={`editor-image-thumb ${large ? 'editor-image-large' : ''}`}
        style={{ backgroundImage: slot.url ? `url(${slot.url})` : 'none', cursor: 'pointer' }}
        onClick={() => ref.current.click()}
      >
        {uploading ? <span>⏳</span> : <span>{slot.url ? '🔄' : '+ Foto'}</span>}
        <input ref={ref} type="file" accept="image/*" style={{ display: 'none' }} onChange={e => onUpload(e, slot.id)} />
      </div>
      {canRemove && <button type="button" className="editor-slot-remove" onClick={() => onRemove(slot.id)}>×</button>}
    </div>
  )
}

const ImagemUploader = ({ url, onChange }) => {
  const ref = useRef()
  const [uploading, setUploading] = useState(false)
  const handleUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    setUploading(true)
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', UPLOAD_PRESET)
    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, { method: 'POST', body: data })
      const json = await res.json()
      onChange(json.secure_url)
    } catch { alert('Erro ao fazer upload.') }
    finally { setUploading(false) }
  }
  return (
    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
      <div onClick={() => ref.current.click()} style={{
        width: '120px', height: '80px', borderRadius: '8px', cursor: 'pointer',
        border: '2px dashed rgba(56,189,248,0.4)', backgroundSize: 'cover',
        backgroundPosition: 'center', backgroundImage: url ? `url(${url})` : 'none',
        backgroundColor: 'rgba(255,255,255,0.04)', display: 'flex',
        alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        fontSize: '0.75rem', color: '#38BDF8'
      }}>
        {uploading ? '⏳' : url ? '🔄' : '+ foto'}
        <input ref={ref} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleUpload} />
      </div>
      <input className="editor-inline-input" value={url || ''} onChange={e => onChange(e.target.value)} placeholder="ou cole uma URL..." style={{ flex: 1 }} />
    </div>
  )
}

function PreviewAbas({ conteudo, setConteudo, modal, setModal, localPublicadoId, onPublicar, onFechar }) {
  const [aba, setAba] = useState('sobre')
  const [editando, setEditando] = useState(false)
  const [uploadingId, setUploadingId] = useState(null)
  const abas = ['sobre', 'visite', 'fotos', 'avaliacoes']
  const labels = { sobre: 'Sobre', visite: 'Visite', fotos: 'Fotos', avaliacoes: 'Avaliações' }

  // slots de imagem (lateral + galeria)
  const [slots, setSlots] = useState(() => {
    const imgs = modal.imagemUrl ? modal.imagemUrl.split(',').map(u => u.trim()).filter(Boolean) : []
    return imgs.length > 0 ? imgs.map(url => ({ id: suid(), url })) : [{ id: suid(), url: '' }]
  })

  const [heroUrl, setHeroUrl] = useState(modal.imagemUrlHero || modal.imagemUrl?.split(',')[0] || '')
  const [lateralUrl, setLateralUrl] = useState(modal.imagemUrlLateral || '')

  // sincroniza slots -> modal.imagemUrl
  useEffect(() => {
    setModal(prev => ({ ...prev, imagemUrl: slots.map(s => s.url).filter(Boolean).join(',') }))
  }, [slots])

  useEffect(() => { setModal(prev => ({ ...prev, imagemUrlHero: heroUrl })) }, [heroUrl])
  useEffect(() => { setModal(prev => ({ ...prev, imagemUrlLateral: lateralUrl })) }, [lateralUrl])

  const handleImageUpload = async (e, slotId) => {
    const file = e.target.files[0]
    if (!file) return
    setUploadingId(slotId)
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', UPLOAD_PRESET)
    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, { method: 'POST', body: data })
      const json = await res.json()
      setSlots(prev => prev.map(s => s.id === slotId ? { ...s, url: json.secure_url } : s))
    } catch { alert('Erro ao fazer upload.') }
    finally { setUploadingId(null) }
  }

  const cardStyle = { background: '#2d2d4e', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem', borderLeft: '4px solid #38BDF8' }
  return (
    <div style={{ padding: '0 2rem' }}>
      {editando && (
        <div className="editor-toolbar" style={{ position: 'sticky', top: 0, zIndex: 200 }}>
          <span className="editor-toolbar-label">✏️ Modo Edição — Preview IA</span>
          <div className="editor-toolbar-actions">
            <button className="editor-btn-save" onClick={() => setEditando(false)}>✓ Concluído</button>
            {onPublicar && <button className="editor-btn-approve" onClick={onPublicar}>✓ Publicar Local</button>}
            {onFechar && <button className="editor-btn-cancel" onClick={onFechar}>Fechar</button>}
          </div>
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'flex-end', borderBottom: '1px solid #2d2d4e', marginBottom: '0' }}>
        <nav style={{ display: 'flex', gap: '1.5rem', flex: 1 }}>
          {abas.map(a => (
            <button key={a} onClick={() => setAba(a)} style={{
              fontSize: '1rem', fontWeight: 500, background: 'transparent', border: 'none',
              cursor: 'pointer', padding: '0.5rem 1rem 1rem',
              color: aba === a ? '#fff' : '#A9B4C2',
              borderBottom: aba === a ? '3px solid #38BDF8' : '3px solid transparent',
              transition: 'color 0.3s', fontFamily: 'inherit'
            }}>{labels[a]}</button>
          ))}
        </nav>
        {aba !== 'avaliacoes' && (
          <button onClick={() => setEditando(!editando)} style={{
            marginBottom: '0.5rem', padding: '0.4rem 1rem', borderRadius: '8px',
            border: '1px solid rgba(56,189,248,0.4)',
            background: editando ? '#38BDF8' : 'transparent',
            color: editando ? '#0d1117' : '#38BDF8',
            cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600
          }}>{editando ? '✕ Sair da Edição' : '✏️ Editar'}</button>
        )}
      </div>

      {/* ABA SOBRE */}
      {aba === 'sobre' && (
        <section style={{ marginBottom: '3rem', paddingTop: '2rem' }}>
          {editando ? (
            <>
              <label style={{ display: 'block', fontSize: '0.75rem', color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem', marginTop: '0.5rem' }}>Título</label>
              <input className="editor-inline-input" style={{ fontSize: '1.4rem', fontWeight: 600, color: '#fff', marginBottom: '1rem' }} value={conteudo.titulo || ''} onChange={e => setConteudo({ ...conteudo, titulo: e.target.value })} placeholder="Título" />
              <label style={{ display: 'block', fontSize: '0.75rem', color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Descrição</label>
              <textarea className="editor-inline-textarea" value={conteudo.descricao || ''} onChange={e => setConteudo({ ...conteudo, descricao: e.target.value })} placeholder="Descrição..." rows={3} />
              <label style={{ display: 'block', fontSize: '0.75rem', color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>História</label>
              <textarea className="editor-inline-textarea" value={conteudo.historia || ''} onChange={e => setConteudo({ ...conteudo, historia: e.target.value })} placeholder="História..." rows={4} />
              <label style={{ display: 'block', fontSize: '0.75rem', color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Curiosidades</label>
              <textarea className="editor-inline-textarea" value={conteudo.curiosidades || ''} onChange={e => setConteudo({ ...conteudo, curiosidades: e.target.value })} placeholder="Curiosidades..." rows={3} />
              <label style={{ display: 'block', fontSize: '0.75rem', color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Estado</label>
              <input className="editor-inline-input" value={modal.estado || ''} onChange={e => setModal({ ...modal, estado: e.target.value })} placeholder="Estado" style={{ marginBottom: '1rem' }} />
              <label style={{ display: 'block', fontSize: '0.75rem', color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Endereço</label>
              <input className="editor-inline-input" value={modal.endereco || ''} onChange={e => setModal({ ...modal, endereco: e.target.value })} placeholder="Endereço" style={{ marginBottom: '1rem' }} />
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Imagem Hero</label>
                <ImagemUploader url={modal.imagemUrlHero || ''} onChange={url => setModal({ ...modal, imagemUrlHero: url })} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Imagens Laterais</label>
                {(modal.imagensLateraisSobre || [modal.imagemUrlLateral].filter(Boolean)).map((url, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <div style={{ flex: 1 }}><ImagemUploader url={url} onChange={u => { const arr = [...(modal.imagensLateraisSobre || [modal.imagemUrlLateral].filter(Boolean))]; arr[i] = u; setModal({ ...modal, imagensLateraisSobre: arr, imagemUrlLateral: arr[0] || '' }) }} /></div>
                    <button type="button" className="editor-slot-remove" onClick={() => { const arr = (modal.imagensLateraisSobre || [modal.imagemUrlLateral].filter(Boolean)).filter((_, j) => j !== i); setModal({ ...modal, imagensLateraisSobre: arr, imagemUrlLateral: arr[0] || '' }) }}>×</button>
                  </div>
                ))}
                <button type="button" className="editor-slot-add-bottom" onClick={() => setModal({ ...modal, imagensLateraisSobre: [...(modal.imagensLateraisSobre || [modal.imagemUrlLateral].filter(Boolean)), ''] })}>+ imagem</button>
              </div>
            </>
          ) : (
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '3rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '1.5', minWidth: '300px' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#fff', marginBottom: '1.5rem' }}>Sobre o Local</h2>
                <p style={{ lineHeight: 1.7, fontWeight: 300, marginBottom: '1.5rem' }}>{conteudo.descricao}</p>
                <p style={{ lineHeight: 1.7, fontWeight: 300 }}>{conteudo.historia}</p>
                <div style={{ marginTop: '2rem' }}>
                  <div style={{ background: '#2d2d4e', padding: '1rem', borderRadius: '6px', marginBottom: '0.8rem', borderLeft: '3px solid #38BDF8' }}>
                    <strong style={{ color: '#fff' }}>Estado:</strong> {modal.estado}
                  </div>
                  {modal.endereco && (
                    <div style={{ background: '#2d2d4e', padding: '1rem', borderRadius: '6px', borderLeft: '3px solid #38BDF8' }}>
                      <strong style={{ color: '#fff' }}>Endereço:</strong> {modal.endereco}
                    </div>
                  )}
                </div>
                <div style={{ marginTop: '2rem', ...cardStyle }}>
                  <h3 style={{ color: '#fff', margin: '0 0 0.75rem', fontSize: '1.1rem' }}>Curiosidades</h3>
                  <p style={{ margin: 0, lineHeight: 1.7, fontWeight: 300 }}>{conteudo.curiosidades}</p>
                </div>
              </div>
              <div style={{ flex: 1, minWidth: '280px' }}>
                {(modal.imagemUrlLateral || modal.imagemUrl)
                  ? <img src={(modal.imagemUrlLateral || modal.imagemUrl.split(',')[0]).trim()} alt={conteudo.titulo} style={{ width: '100%', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }} />
                  : null
                }
              </div>
            </div>
          )}
        </section>
      )}

      {/* ABA VISITE */}
      {aba === 'visite' && (
        <section style={{ marginBottom: '3rem', paddingTop: '2rem' }}>
          {editando ? (
            <>
              <label style={{ display: 'block', fontSize: '0.75rem', color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem', marginTop: '0.5rem' }}>Horário</label>
              <textarea className="editor-inline-textarea" value={conteudo.horario || ''} onChange={e => setConteudo({ ...conteudo, horario: e.target.value })} placeholder="Horário de funcionamento..." rows={2} />
              <label style={{ display: 'block', fontSize: '0.75rem', color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Preço</label>
              <input className="editor-inline-input" value={conteudo.preco || ''} onChange={e => setConteudo({ ...conteudo, preco: e.target.value })} placeholder="Preço / entrada" style={{ marginBottom: '1.5rem' }} />
              <div style={{ marginTop: '1.5rem' }}>
                <label style={{ fontSize: '0.75rem', color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.75rem' }}>Hotéis</label>
                {(conteudo.hosteis || []).map((h, i) => (
                  <div key={i} style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <label style={{ fontSize: '0.7rem', color: '#A9B4C2' }}>HOTEL {i+1}</label>
                      <button type="button" className="editor-slot-remove" onClick={() => setConteudo({ ...conteudo, hosteis: conteudo.hosteis.filter((_, j) => j !== i) })}>×</button>
                    </div>
                    {['nome','nota','contato','site'].map(f => (
                      <input key={f} className="editor-inline-input" placeholder={f} value={h[f] || ''}
                        onChange={e => { const arr = [...(conteudo.hosteis||[])]; arr[i] = { ...arr[i], [f]: e.target.value }; setConteudo({ ...conteudo, hosteis: arr }) }}
                        style={{ marginBottom: '0.4rem' }} />
                    ))}
                  </div>
                ))}
                <button type="button" className="editor-slot-add-bottom" onClick={() => setConteudo({ ...conteudo, hosteis: [...(conteudo.hosteis || []), { nome: '', nota: 4.5, contato: '', site: '' }] })}>+ hotel</button>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <label style={{ fontSize: '0.75rem', color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.75rem' }}>Imagens Laterais (Visite)</label>
                {(modal.imagensLateraisVisite || []).map((url, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <div style={{ flex: 1 }}><ImagemUploader url={url} onChange={u => { const arr = [...(modal.imagensLateraisVisite || [])]; arr[i] = u; setModal({ ...modal, imagensLateraisVisite: arr }) }} /></div>
                    <button type="button" className="editor-slot-remove" onClick={() => { const arr = (modal.imagensLateraisVisite || []).filter((_, j) => j !== i); setModal({ ...modal, imagensLateraisVisite: arr }) }}>×</button>
                  </div>
                ))}
                <button type="button" className="editor-slot-add-bottom" onClick={() => setModal({ ...modal, imagensLateraisVisite: [...(modal.imagensLateraisVisite || []), ''] })}>+ imagem</button>
              </div>
            </>
          ) : (
            <>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#fff', marginBottom: '2rem' }}>Informações Práticas</h2>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '3rem', flexWrap: 'wrap' }}>
                <div style={{ flex: '1.5', minWidth: '300px' }}>
                  {[
                    { titulo: 'Horário de Funcionamento', texto: conteudo.horario },
                    { titulo: 'Preço / Entrada', texto: conteudo.preco },
                    { titulo: 'Localização', texto: modal.endereco || modal.estado },
                  ].filter(c => c.texto).map((card, i) => (
                    <div key={i} style={cardStyle}>
                      <h3 style={{ color: '#fff', margin: '0 0 0.5rem', fontSize: '1.1rem' }}>{card.titulo}</h3>
                      <p style={{ margin: 0, lineHeight: 1.6, fontWeight: 300 }}>{card.texto}</p>
                    </div>
                  ))}
                </div>
                <div style={{ flex: 1, minWidth: '280px' }}>
                  {(modal.imagensLateraisVisite || []).filter(Boolean).map((url, i) => (
                    <img key={i} src={url} alt={conteudo.titulo} style={{ width: '100%', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.3)', marginBottom: '0.75rem' }} />
                  ))}
                </div>
              </div>
              {conteudo.hosteis?.length > 0 && (
                <div style={{ marginTop: '2.5rem', borderTop: '1px solid #2d2d4e', paddingTop: '2.5rem' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#fff', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '2px solid #2d2d4e' }}>Hotéis</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.5rem' }}>
                    {conteudo.hosteis.map((h, i) => (
                      <div key={i} style={{ background: '#2d2d4e', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                          <a href={h.site} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, fontSize: '1rem', color: '#fff', textDecoration: 'none' }}>{h.nome}</a>
                          <span style={{ color: '#FFD700', fontWeight: 700 }}>{h.nota} ★</span>
                        </div>
                        <span style={{ fontFamily: 'monospace', background: '#1a1a2e', padding: '0.3rem 0.7rem', borderRadius: '4px', fontSize: '0.85rem', color: '#E0E1DD', display: 'block' }}>{h.contato}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </section>
      )}

      {/* ABA FOTOS */}
      {aba === 'fotos' && (
        <section style={{ marginBottom: '3rem', paddingTop: '2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, color: '#fff', marginBottom: '1rem' }}>Fotos</h2>
          {editando && (
            <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
              <label style={{ fontSize: '0.75rem', color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.75rem' }}>Fotos</label>
              {slots.map((slot, i) => (
                <div key={slot.id} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <div style={{ flex: 1 }}><ImagemUploader url={slot.url} onChange={u => setSlots(prev => prev.map(s => s.id === slot.id ? { ...s, url: u } : s))} /></div>
                  <button type="button" className="editor-slot-remove" onClick={() => setSlots(prev => prev.filter(s => s.id !== slot.id))}>×</button>
                </div>
              ))}
              <button type="button" className="editor-slot-add-bottom" onClick={() => setSlots(prev => [...prev, { id: suid(), url: '' }])}>+ foto</button>
            </div>
          )}
          {slots.filter(s => s.url).length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1rem' }}>
              {slots.filter(s => s.url).map((s, i) => (
                <div key={s.id} style={{ overflow: 'hidden', borderRadius: '8px', boxShadow: '0 8px 20px rgba(0,0,0,0.25)', aspectRatio: '4/3' }}>
                  <img src={s.url} alt={`Foto ${i+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          ) : (
            <p style={{ color: '#A9B4C2', fontStyle: 'italic' }}>Nenhuma foto ainda.</p>
          )}
        </section>
      )}

      {/* ABA AVALIAÇÕES */}
      {aba === 'avaliacoes' && (
        <section style={{ marginBottom: '3rem', paddingTop: '2rem' }}>
          {localPublicadoId
            ? <AvaliacoesComentarios localId={localPublicadoId} />
            : <p style={{ color: '#A9B4C2', fontStyle: 'italic', textAlign: 'center', padding: '3rem 0' }}>
                Publique o local primeiro para habilitar avaliações.
              </p>
          }
        </section>
      )}
    </div>
  )
}

function AdminPanel() {
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true')
  const [menuOpen, setMenuOpen] = useState(false)
  const [expandedCard, setExpandedCard] = useState(null)
  const [activeTab, setActiveTab] = useState('sugestoes')
  const [userAccess, setUserAccess] = useState([])
  const [rankings, setRankings] = useState([])
  const [comments, setComments] = useState({})
  const [showAddUserModal, setShowAddUserModal] = useState(false)
  const [newUser, setNewUser] = useState({ userName: '', email: '', senha: '', userType: 'usuario' })
  const [siteLocations, setSiteLocations] = useState([])
  const [trashedLocations, setTrashedLocations] = useState([])
  const [contactMessages, setContactMessages] = useState([])
  const [sugestoes, setSugestoes] = useState([])
  const [investigarModal, setInvestigarModal] = useState(null)
  const [investigarLoading, setInvestigarLoading] = useState(false)
  const [investigarConteudo, setInvestigarConteudo] = useState(null)
  const [localPublicadoId, setLocalPublicadoId] = useState(null)
  const [locationFilter, setLocationFilter] = useState('')
  const [editingLocation, setEditingLocation] = useState(null)
  const [showEditModal, setShowEditModal] = useState(false)
  const [toast, setToast] = useState(null)
  const [confirmModal, setConfirmModal] = useState(null)

  const CATEGORIAS_FIXAS = ['Monumentos', 'Lugar Paradísíaco', 'Restaurantes', 'Costume Cultural']
  const [categoriasCustomCriadas, setCategoriasCustomCriadas] = useState([])

  const isCategoriaCustom = (sub) => sub && !CATEGORIAS_FIXAS.includes(sub) && !categoriasCustomCriadas.includes(sub)

  const handleCriarCategoria = async (nome, estado) => {
    try {
      const res = await fetch(`${API_URL}/api/categorias`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, estado })
      })
      if (res.ok) {
        showToast(`Categoria "${nome}" criada para ${estado}!`, 'success')
        setCategoriasCustomCriadas(prev => [...prev, nome])
      } else { const d = await res.json(); showToast(d || 'Erro ao criar categoria.') }
    } catch { showToast('Erro de conexão.') }
  }

  const ICONS = { success: '✓', error: '✕', info: 'ℹ' }

  const maskEmail = (email) => {
    if (!email) return ''
    const [user, domain] = email.split('@')
    return `${user.slice(0, 2)}***@${domain}`
  }

  const showToast = (message, type = 'error') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 4000)
  }

  const showConfirm = (message, onConfirm) => {
    setConfirmModal({ message, onConfirm })
  }
  
  const API_URL = import.meta.env.VITE_API_URL;

  const loadUsers = async () => {
    try {
      const response = await fetch(`${API_URL}/api/usuarios`)
      if (response.ok) {
        const users = await response.json()
        setUserAccess(users)
      } else {
        console.error('Erro ao carregar usuários do servidor')
        setUserAccess([])
      }
    } catch (error) {
      console.error('Erro de conexão ao carregar usuários:', error)
      setUserAccess([])
    }
  }

  const loadRanking = async () => {
    try {
      const response = await fetch(`${API_URL}/api/ranking`)
      if (response.ok) {
        const ranking = await response.json()
        setRankings(ranking)
      } else {
        console.error('Erro ao carregar ranking do servidor')
      }
    } catch (error) {
      console.error('Erro de conexão ao carregar ranking:', error)
    }
  }

  const loadComments = async () => {
    try {
      const response = await fetch(`${API_URL}/api/comentarios/all`)
      if (response.ok) {
        const commentsData = await response.json()
        setComments(commentsData)
      } else {
        console.error('Erro ao carregar comentários do servidor')
      }
    } catch (error) {
      console.error('Erro de conexão ao carregar comentários:', error)
    }
  }

  const loadSiteLocations = async () => {
    try {
      const response = await fetch(`${API_URL}/api/locais`)
      if (response.ok) {
        const locais = await response.json()
        setSiteLocations(locais.filter(l => l.status !== 'PENDENTE' && l.status !== 'LIXEIRA'))
      } else {
        console.error('Erro ao carregar locais do site do servidor')
        setSiteLocations([])
      }
    } catch (error) {
      console.error('Erro de conexão ao carregar locais do site:', error)
      setSiteLocations([])
    }
  }

  const loadTrashedLocations = async () => {
    try {
      const response = await fetch(`${API_URL}/api/locais/lixeira`)
      if (response.ok) {
        const lixeira = await response.json()
        setTrashedLocations(lixeira)
      } else {
        console.error('Erro ao carregar lixeira do servidor')
        setTrashedLocations([])
      }
    } catch (error) {
      console.error('Erro de conexão ao carregar lixeira:', error)
      setTrashedLocations([])
    }
  }

  const handleInvestigar = async (sugestao) => {
    setInvestigarModal(sugestao)
    setLocalPublicadoId(null)

    // Se tem rascunho salvo, carrega sem chamar a IA
    if (sugestao.rascunhoConteudo) {
      try {
        const rascunho = JSON.parse(sugestao.rascunhoConteudo)
        const { _modal, ...conteudo } = rascunho
        if (_modal) setInvestigarModal(prev => ({ ...prev, ..._modal }))
        setInvestigarConteudo(conteudo)
        setInvestigarLoading(false)
        return
      } catch {}
    }

    setInvestigarConteudo(null)
    setInvestigarLoading(true)
    try {
      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${import.meta.env.VITE_GROQ_KEY}` },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          response_format: { type: 'json_object' },
          messages: [
            { role: 'system', content: 'Voce e um especialista em turismo brasileiro. Responda APENAS com um JSON valido, sem texto fora do JSON, sem markdown, sem emojis, sem asteriscos, sem bullets. Use acentuacao correta em portugues brasileiro em todos os campos de texto.' },
            { role: 'user', content: `Pesquise sobre o local turistico "${sugestao.nome}" em ${sugestao.estado}, Brasil. Retorne um JSON com exatamente estas chaves: titulo, cidade (nome correto da cidade com acentuacao em portugues, ex: "São Paulo", "Manaus"), descricao, historia, curiosidades, horario, preco, coordenadas (formato "lat,lng" com coordenadas reais do local), hosteis (array com 3 objetos, cada um com: nome, nota (numero de 4.0 a 5.0), contato (telefone brasileiro), site (url real)).` }
          ]
        })
      })
      if (!res.ok) {
        const errData = await res.json().catch(() => ({}))
        console.error('Groq error:', res.status, errData)
        setInvestigarConteudo({ erro: `Erro da IA: ${errData?.error?.message || res.status}` })
        return
      }
      const data = await res.json()
      const text = data?.choices?.[0]?.message?.content || ''
      try {
        const parsed = JSON.parse(text)
        // normaliza chave hosteis (Groq pode retornar hostels, hoteis, hotels, etc)
        const hosteis = parsed.hosteis || parsed.hostels || parsed.hoteis || parsed.hotels || parsed.hospedagem || []
        setInvestigarConteudo({ ...parsed, hosteis })
      } catch {
        setInvestigarConteudo({ erro: 'Resposta da IA em formato invalido. Tente novamente.' })
      }
    } catch (e) {
      console.error('Erro ao chamar Groq:', e)
      setInvestigarConteudo({ erro: 'Erro ao conectar com a IA: ' + e.message })
    } finally {
      setInvestigarLoading(false)
    }
  }

  const handleSalvarRascunho = async () => {
    if (!investigarConteudo || !investigarModal) return
    try {
      const payload = {
        ...investigarConteudo,
        _modal: {
          imagemUrlHero: investigarModal.imagemUrlHero,
          imagemUrlLateral: investigarModal.imagemUrlLateral,
          imagensLateraisSobre: investigarModal.imagensLateraisSobre,
          imagensLateraisVisite: investigarModal.imagensLateraisVisite,
          imagemUrl: investigarModal.imagemUrl,
          endereco: investigarModal.endereco,
          estado: investigarModal.estado,
        }
      }
      const res = await fetch(`${API_URL}/api/sugestoes/${investigarModal.id}/rascunho`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rascunhoConteudo: JSON.stringify(payload) })
      })
      if (res.ok) {
        showToast('Rascunho salvo!', 'success')
        loadSugestoes()
      } else showToast('Erro ao salvar rascunho.')
    } catch { showToast('Erro de conexão.') }
  }

  const handlePublicarLocal = async () => {
    if (!investigarConteudo || !investigarModal) return
    try {
      const informacoesAdicionais = JSON.stringify({
        secoes: {
          sobre: {
            label: 'Sobre',
            titulo: investigarConteudo.titulo || investigarModal.nome,
            texto: investigarConteudo.descricao,
            imagem: (investigarModal.imagensLateraisSobre || [investigarModal.imagemUrlHero, investigarModal.imagemUrlLateral].filter(Boolean))[0] || '',
            subsecoes: [
              investigarConteudo.historia ? { titulo: 'Hist\u00f3ria', texto: investigarConteudo.historia } : null,
              investigarConteudo.curiosidades ? { titulo: 'Curiosidades', texto: investigarConteudo.curiosidades } : null,
            ].filter(Boolean),
          },
          visite: {
            label: 'Visite',
            titulo: 'Informa\u00e7\u00f5es Pr\u00e1ticas',
            texto: '',
            imagem: (investigarModal.imagensLateraisVisite || [])[0] || '',
            subsecoes: [
              investigarConteudo.horario ? { titulo: 'Hor\u00e1rio de Funcionamento', texto: investigarConteudo.horario } : null,
              investigarConteudo.preco ? { titulo: 'Pre\u00e7o / Entrada', texto: investigarConteudo.preco } : null,
              investigarModal.endereco ? { titulo: 'Localiza\u00e7\u00e3o', texto: investigarModal.endereco } : null,
            ].filter(Boolean),
            recomendacoes: (investigarConteudo.hosteis?.length > 0)
              ? [{ titulo: 'Hot\u00e9is', itens: investigarConteudo.hosteis }]
              : [],
          },
          fotos: { label: 'Fotos' },
          avaliacoes: { label: 'Avalia\u00e7\u00f5es' },
        }
      })

      const response = await fetch(`${API_URL}/api/locais`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: investigarConteudo.titulo || investigarModal.nome,
          descricao: investigarConteudo.descricao,
          cidade: investigarConteudo.cidade || '',
          estado: investigarModal.estado,
          endereco: investigarModal.endereco,
          subcategoria: investigarModal.subcategoria || 'Lugar Paradisiaco',
          categoria: 'lugares-visitar',
          horarioFuncionamento: investigarConteudo.horario,
          preco: investigarConteudo.preco,
          informacoesAdicionais,
          imagemUrl: [
            investigarModal.imagemUrlHero || '',
            ...(investigarModal.imagensLateraisSobre || [investigarModal.imagemUrlLateral].filter(Boolean)),
            ...(investigarModal.imagemUrl ? investigarModal.imagemUrl.split(',').map(u => u.trim()) : []),
            ...(investigarModal.imagensLateraisVisite || []),
          ].filter(Boolean).filter((v, i, a) => a.indexOf(v) === i).join(',') || null,
          coordenadas: investigarConteudo.coordenadas || investigarModal.coordenadas || null,
          enviadoPor: investigarModal.enviadoPor || 'GADYS'
        })
      })
      if (response.ok) {
        const local = await response.json()
        await fetch(`${API_URL}/api/locais/aprovar/${local.id}`, { method: 'POST' })
        await fetch(`${API_URL}/api/sugestoes/${investigarModal.id}/analisar`, { method: 'POST' })
        showToast('Local publicado com sucesso!', 'success')
        setLocalPublicadoId(local.id)
        loadSugestoes()
        loadSiteLocations()
      } else {
        showToast('Erro ao publicar local.')
      }
    } catch {
      showToast('Erro de conexao.')
    }
  }

    const loadSugestoes = async () => {
    try {
      const response = await fetch(`${API_URL}/api/sugestoes`)
      if (response.ok) setSugestoes(await response.json())
    } catch (error) { console.error('Erro ao carregar sugestões:', error) }
  }

  const handleAnalisarSugestao = async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/sugestoes/${id}/analisar`, { method: 'POST' })
      if (response.ok) { showToast('Sugestão marcada como analisada!', 'success'); loadSugestoes() }
      else showToast('Erro ao atualizar sugestão')
    } catch { showToast('Erro de conexão.') }
  }

  const handleDescartarSugestao = (id) => {
    showConfirm('Descartar esta sugestão?', async () => {
      try {
        const response = await fetch(`${API_URL}/api/sugestoes/${id}/descartar`, { method: 'POST' })
        if (response.ok) { showToast('Sugestão descartada!', 'success'); loadSugestoes() }
        else showToast('Erro ao descartar sugestão')
      } catch { showToast('Erro de conexão.') }
    })
  }

  const loadContactMessages = async () => {
    try {
        const response = await fetch(`${API_URL}/api/contato`);
        if(response.ok) {
            const messages = await response.json();
            setContactMessages(messages);
        } else {
            console.error("Erro ao carregar mensagens de contato");
            setContactMessages([]);
        }
    } catch (error) {
        console.error('Erro de conexão ao carregar mensagens:', error)
        setContactMessages([]);
    }
  }

  useEffect(() => {
    loadUsers()
    loadRanking()
    loadComments()
    loadSiteLocations()
    loadTrashedLocations()
    loadContactMessages()
    loadSugestoes()
  }, [])

  const handleRemoveLocation = (id) => {
    showConfirm('Tem certeza que deseja excluir este local permanentemente? Esta ação não pode ser desfeita!', async () => {
      try {
        const response = await fetch(`${API_URL}/api/locais/${id}`, { method: 'DELETE' })
        if (response.ok) {
          showToast('Local excluído com sucesso!', 'success')
          loadSiteLocations()
        } else {
          showToast('Erro ao excluir local')
        }
      } catch (error) {
        showToast('Erro de conexão. Tente novamente.')
      }
    })
  }

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  const handleRemoveUser = (userId) => {
    showConfirm('Tem certeza que deseja excluir este usuário?', async () => {
      try {
        const response = await fetch(`${API_URL}/api/usuarios/${userId}`, {
          method: 'DELETE'
        })
        if (response.ok) {
          showToast('Usuário excluído com sucesso!', 'success')
          loadUsers()
        } else {
          showToast('Erro ao excluir usuário')
        }
      } catch (error) {
        console.error('Erro de conexão ao excluir usuário:', error)
        showToast('Erro de conexão. Tente novamente.')
      }
    })
  }

  const handleToggleUsuario = async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/usuarios/${id}/inativar`, { method: 'POST' })
      if (response.ok) {
        setUserAccess(prev => prev.map(u => u.id === id ? { ...u, ativo: u.ativo === 'INATIVO' ? 'ATIVO' : 'INATIVO' } : u))
      } else {
        showToast('Erro ao alterar status do usuário')
      }
    } catch (error) {
      showToast('Erro de conexão. Tente novamente.')
    }
  }

  const [togglingLocal, setTogglingLocal] = useState(null)

  const handleToggleLocal = async (location) => {
    try {
      setTogglingLocal(location.id)
      const response = await fetch(`${API_URL}/api/locais/${location.id}/inativar`, { method: 'POST' })
      if (response.ok) {
        loadSiteLocations()
      } else {
        showToast('Erro ao alterar status do local')
      }
    } catch (error) {
      showToast('Erro de conexão. Tente novamente.')
    } finally {
      setTogglingLocal(null)
    }
  }

  const handleAddUser = async (e) => {
    e.preventDefault()
    if (newUser.userName.trim() && newUser.email.trim() && newUser.senha.trim()) {
      try {
        const response = await fetch(`${API_URL}/api/usuarios`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nome: newUser.userName,
            email: newUser.email,
            senha: newUser.senha,
            tipoUsuario: newUser.userType.toUpperCase()
          })
        })
        
        if (response.ok) {
          setNewUser({ userName: '', email: '', senha: '', userType: 'usuario' })
          setShowAddUserModal(false)
          showToast('Usuário cadastrado com sucesso!', 'success')
          loadUsers()
        } else {
          const error = await response.json()
          showToast(error.error || 'Erro ao cadastrar usuário')
        }
      } catch (error) {
        showToast('Erro de conexão com o servidor')
      }
    } else {
      showToast('Por favor, preencha todos os campos obrigatórios (Nome, Email e Senha)!')
    }
  }

  const handleRestoreLocation = (id) => {
    showConfirm('Tem certeza que deseja restaurar este local?', async () => {
      try {
        const response = await fetch(`${API_URL}/api/locais/restaurar/${id}`, {
          method: 'POST'
        });
        if (response.ok) {
          showToast('Local restaurado com sucesso!', 'success')
          loadTrashedLocations();
          loadSiteLocations();
        } else {
          showToast('Erro ao restaurar o local.')
        }
      } catch (error) {
        console.error('Erro de conexão ao restaurar local:', error)
        showToast('Erro de conexão. Tente novamente.')
      }
    })
  }

  const handlePermanentDelete = (id) => {
    showConfirm('Tem certeza que deseja excluir permanentemente este local? Esta ação não pode ser desfeita!', async () => {
      try {
        const response = await fetch(`${API_URL}/api/locais/${id}`, { method: 'DELETE' });
        if (response.ok) {
          showToast('Local excluído permanentemente!', 'success')
          loadTrashedLocations();
        } else {
          showToast('Erro ao excluir o local permanentemente.')
        }
      } catch (error) {
        showToast('Erro de conexão. Tente novamente.')
      }
    })
  }


  const handleSaveEdit = async () => {
    if (editingLocation) {
        try {
            const response = await fetch(`${API_URL}/api/locais/${editingLocation.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editingLocation)
            });

            if (response.ok) {
                setShowEditModal(false)
                setEditingLocation(null)
                showToast('Local editado com sucesso! Agora você pode aprová-lo.', 'success')
                loadSiteLocations();
            } else {
                showToast('Erro ao salvar edição do local.')
            }
        } catch (error) {
            console.error('Erro de conexão ao salvar edição:', error);
            showToast('Erro de conexão. Tente novamente.')
        }
    }
  }
  
  const [replyModal, setReplyModal] = useState(null)
  const [replyText, setReplyText] = useState('')

  const responderMensagem = (id) => {
    setReplyModal(id)
    setReplyText('')
  }

  const handleSendReply = async () => {
    if (!replyText.trim()) return
    try {
      const response = await fetch(`${API_URL}/api/contato/${replyModal}/responder`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(replyText.trim())
      })
      if (response.ok) {
        showToast('Resposta enviada com sucesso!', 'success')
        setReplyModal(null)
        loadContactMessages()
      } else {
        showToast('Erro ao enviar resposta.')
      }
    } catch (error) {
      console.error('Erro de conexão ao responder mensagem:', error)
      showToast('Erro de conexão. Tente novamente.')
    }
  }

  return (
    <div style={{ overflowX: 'hidden', width: '100%' }}>
      {toast && (
        <div className={`admin-toast admin-toast--${toast.type}`}>
          <span className="admin-toast-icon">{ICONS[toast.type]}</span>
          <span>{toast.message}</span>
          <button className="admin-toast-close" onClick={() => setToast(null)}>×</button>
        </div>
      )}

      {confirmModal && (
        <div className="modal-overlay" onClick={() => setConfirmModal(null)}>
          <div className="modal-content modal-confirm" onClick={e => e.stopPropagation()}>
            <p>{confirmModal.message}</p>
            <div className="modal-actions">
              <button className="reject-btn" onClick={() => { confirmModal.onConfirm(); setConfirmModal(null) }}>Confirmar</button>
              <button className="expand-btn" onClick={() => setConfirmModal(null)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {investigarModal && (
        <div className="modal-overlay" onClick={() => { setInvestigarModal(null); setInvestigarConteudo(null); setLocalPublicadoId(null) }}>
          <div onClick={e => e.stopPropagation()} style={{
            width: '95vw', maxWidth: '1000px', maxHeight: '92vh', overflowY: 'auto',
            borderRadius: '16px', boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
            backgroundColor: '#1a1a2e', color: '#E0E1DD',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          }}>

            {/* ── HEADER HERO ── */}
            <div style={{
              position: 'relative', height: '320px', display: 'flex',
              flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
              textAlign: 'center', overflow: 'hidden', marginBottom: 0,
              borderRadius: '16px 16px 0 0'
            }}>
              <div style={{
                position: 'absolute', inset: 0, zIndex: 1,
                background: (investigarModal.imagemUrlHero || investigarModal.imagemUrl)
                  ? `url(${(investigarModal.imagemUrlHero || investigarModal.imagemUrl.split(',')[0]).trim()}) center/cover`
                  : 'linear-gradient(135deg,#1a4a2e,#0d2b1a)'
              }} />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)', zIndex: 2 }} />
              <div style={{ position: 'relative', zIndex: 3 }}>
                <h1 style={{ fontSize: '2.8rem', fontWeight: 700, color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.5)', margin: '0 0 0.5rem' }}>
                  {investigarLoading ? investigarModal.nome : (investigarConteudo?.titulo || investigarModal.nome)}
                </h1>
                <p style={{ fontSize: '1.1rem', fontWeight: 300, color: 'rgba(255,255,255,0.85)', margin: '0 0 1rem', textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>
                  {investigarConteudo?.descricao?.split('.')[0] || investigarModal.estado}
                </p>
                <span style={{ background: 'rgba(56,189,248,0.25)', border: '1px solid rgba(56,189,248,0.5)', color: '#38BDF8', padding: '4px 16px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600 }}>
                  PREVIEW
                </span>
              </div>
            </div>

            {investigarLoading && (
              <div style={{ textAlign: 'center', padding: '4rem', color: '#A9B4C2' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤖</div>
                <p style={{ margin: 0 }}>Gerando conteúdo com IA...</p>
              </div>
            )}

            {investigarConteudo?.erro && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#f43f5e' }}>{investigarConteudo.erro}</div>
            )}

            {investigarConteudo && !investigarConteudo.erro && (
              <PreviewAbas
                conteudo={investigarConteudo}
                setConteudo={setInvestigarConteudo}
                modal={investigarModal}
                setModal={setInvestigarModal}
                localPublicadoId={localPublicadoId}
                onPublicar={handlePublicarLocal}
                onFechar={() => { setInvestigarModal(null); setInvestigarConteudo(null); setLocalPublicadoId(null) }}
              />
            )}

            {/* RODAPÉ */}
            <div style={{ display: 'flex', gap: '0.75rem', padding: '1.5rem 2rem', borderTop: '1px solid #2d2d4e', marginTop: investigarConteudo && !investigarConteudo.erro ? 0 : '1rem', flexWrap: 'wrap' }}>
              {investigarConteudo && !investigarConteudo.erro && (
                <>
                  <button className="editor-btn-save" onClick={handleSalvarRascunho}>
                    Salvar Rascunho
                  </button>
                  <button className="approve-btn" style={{ flex: 1 }} onClick={handlePublicarLocal}>
                    Publicar Local
                  </button>
                </>
              )}
              <button className="expand-btn" onClick={() => { setInvestigarModal(null); setInvestigarConteudo(null); setLocalPublicadoId(null) }}>Fechar</button>
            </div>

          </div>
        </div>
      )}

      {replyModal && (
        <div className="modal-overlay" onClick={() => setReplyModal(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>Responder Mensagem</h2>
            <div className="form-group">
              <label>Resposta:</label>
              <textarea
                value={replyText}
                onChange={e => setReplyText(e.target.value)}
                rows="5"
                placeholder="Digite sua resposta..."
              />
            </div>
            <div className="modal-actions">
              <button className="approve-btn" onClick={handleSendReply}>Enviar</button>
              <button className="reject-btn" onClick={() => setReplyModal(null)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
      <header style={{
        background: darkMode ? 'rgba(15,12,41,0.95)' : '#1a237e',
        padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', position: 'sticky', top: 0, zIndex: 100,
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img onClick={() => navigate('/')} style={{cursor:'pointer', height:'40px', background:'linear-gradient(135deg,#667eea,#764ba2)', borderRadius:'50%', padding:'8px'}} src="/images/logos/logo.png" alt="GADYS" />
          <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white' }}>GADYS</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={() => { const n = !darkMode; setDarkMode(n); localStorage.setItem('darkMode', n) }} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}>
            {darkMode ? '☀️' : '🌙'}
          </button>
          <div style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer', zIndex: 1002 }} onClick={() => setMenuOpen(!menuOpen)}>
            <span style={{ width: '25px', height: '3px', background: 'white', margin: '3px 0' }} />
            <span style={{ width: '25px', height: '3px', background: 'white', margin: '3px 0' }} />
            <span style={{ width: '25px', height: '3px', background: 'white', margin: '3px 0' }} />
          </div>
        </div>
        {menuOpen && <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000 }} onClick={() => setMenuOpen(false)} />}
        <ul style={{
          position: 'fixed', top: 0, right: menuOpen ? 0 : '-100%', width: '300px', height: '100vh',
          background: darkMode ? 'rgba(15,12,41,0.95)' : '#1a237e',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', justifyContent: 'flex-start',
          margin: 0, padding: '2rem 0', listStyle: 'none', transition: 'right 0.3s ease', zIndex: 1001, overflowY: 'auto'
        }}>
          {[
            { label: 'Início', path: '/' },
            { label: 'Lugares', path: '/lugares' },
            { label: 'Mapa', path: '/mapa' },
            { label: 'Dê sugestões', path: '/adicionar-local' },
            { label: 'Meu Perfil', path: '/perfil' },
            { label: 'Sobre', path: '/sobre' },
            { label: 'Contato', path: '/contato' },
          ].map(({ label, path }) => (
            <li key={path}>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate(path); setMenuOpen(false) }}
                style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '5px', display: 'block' }}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); setMenuOpen(false) }}
              style={{ color: '#ffd700', textDecoration: 'none', padding: '0.5rem 1rem', fontWeight: '700', borderRadius: '5px', display: 'block' }}>
              Painel Admin (atual)
            </a>
          </li>
        </ul>
      </header>
    <div className={`admin-panel ${darkMode ? '' : 'light-mode'}`}>
      <div className="admin-header">
        <h1>Painel Administrativo</h1>
        <div className="admin-tabs">
          <button 
            className={`tab-btn ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            Usuários ({userAccess.length})
          </button>
          <button 
            className={`tab-btn ${activeTab === 'ranking' ? 'active' : ''}`}
            onClick={() => setActiveTab('ranking')}
          >
            Ranking
          </button>
          <button 
            className={`tab-btn ${activeTab === 'locations' ? 'active' : ''}`}
            onClick={() => setActiveTab('locations')}
          >
            Locais ({siteLocations.length})
          </button>
          <button 
            className={`tab-btn ${activeTab === 'messages' ? 'active' : ''}`}
            onClick={() => setActiveTab('messages')}
          >
            Mensagens ({contactMessages.filter(m => m.status === 'nova').length})
          </button>
          <button 
            className={`tab-btn ${activeTab === 'sugestoes' ? 'active' : ''}`}
            onClick={() => setActiveTab('sugestoes')}
          >
            Sugestões ({sugestoes.filter(s => s.status === 'PENDENTE' || s.status === 'RASCUNHO').length})
          </button>
        </div>
      </div>
      
      {activeTab === 'users' && (
        <div className="action-button-container">
          <button 
            onClick={() => setShowAddUserModal(true)}
            className="primary-action-btn"
          >
            + Cadastrar Usuário
          </button>
        </div>
      )}
      
      {activeTab === 'locations' && (
        <div className="filter-container">
          <select 
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="filter-select"
          >
            <option value="">Todas as categorias</option>
            <option value="Monumentos">Monumentos</option>
            <option value="Lugar Paradísíaco">Lugar Paradísíaco</option>
            <option value="Restaurantes">Restaurantes</option>
            <option value="Costume Cultural">Costume Cultural</option>
          </select>
        </div>
      )}
      
      <div className="admin-grid">
        {activeTab === 'addLocal' && (
          <div className="action-button-container">
            <button 
              onClick={() => window.open('/adicionar-locais.html', '_blank')}
              className="primary-action-btn"
            >
              + Adicionar Local
            </button>
          </div>
        )}
        
        {activeTab === 'ranking' && (rankings.length === 0 ? (
            <div className="empty-state-message">
              <p>Nenhuma avaliação encontrada ainda.</p>
            </div>
          ) : (
            rankings.map((local, index) => (
              <div key={index} className="admin-card" style={{ borderTop: `3px solid ${index === 0 ? '#f59e0b' : index === 1 ? '#9ca3af' : index === 2 ? '#b45309' : '#667eea'}` }}>
                <div className="card-header">
                  <h3>{local.nome}</h3>
                  <span className={`category-badge ${index === 0 ? 'gold' : index === 1 ? 'silver' : index === 2 ? 'bronze' : ''}`}
                    style={{ background: index === 0 ? 'rgba(245,158,11,0.15)' : index === 1 ? 'rgba(156,163,175,0.15)' : index === 2 ? 'rgba(180,83,9,0.15)' : 'rgba(102,126,234,0.15)',
                      color: index === 0 ? '#f59e0b' : index === 1 ? '#9ca3af' : index === 2 ? '#b45309' : '#667eea',
                      fontWeight: '700', fontSize: '0.85rem' }}>
                    {index + 1}º lugar
                  </span>
                </div>
                <div className="card-info">
                  <p><strong>Cidade:</strong> {local.cidade}, {local.estado}</p>
                  <p><strong>Média:</strong> {local.media.toFixed(1)} / 5.0</p>
                  <div style={{ display: 'flex', gap: '2px', margin: '0.3rem 0' }}>
                    {[1,2,3,4,5].map(s => (
                      <span key={s} style={{ fontSize: '1.1rem', color: s <= Math.round(local.media) ? '#f59e0b' : '#d1d5db' }}>★</span>
                    ))}
                  </div>
                  <p><strong>Total de avaliações:</strong> {local.totalAvaliacoes}</p>
                </div>
              </div>
            ))
          ))}

        {activeTab === 'locations' && (siteLocations.length === 0 ? (
          <div className="empty-state-message"><p>Nenhum local cadastrado no site.</p></div>
        ) : siteLocations
          .filter(location => {
            if (!locationFilter) return true;
            const categoria = location.subcategoria || location.category;
            return categoria === locationFilter;
          })
          .map((location, index) => (
          <div key={location.id || index} className="admin-card">
            <div className="card-header">
              <h3>{location.nome || location.name}</h3>
              <span className={`category-badge ${location.status}`}>{location.status}</span>
            </div>
            
            <div className="card-info">
              <p><strong>Cidade:</strong> {location.cidade || location.city}, {location.estado}</p>
              <p><strong>Categoria:</strong> {location.subcategoria || location.category}</p>
            </div>

            <div className="card-actions">
              <button
                className="expand-btn"
                onClick={() => {
                  const deUsuario = location.enviadoPor && !['Admin', 'GADYS', 'admin'].includes(location.enviadoPor);
                  navigate(deUsuario ? `/local/${location.id}` : `/admin/editar-local/${location.id}`);
                }}
              >
                {location.enviadoPor && !['Admin', 'GADYS', 'admin'].includes(location.enviadoPor) ? 'Ver' : 'Editar'}
              </button>
              <button 
                className={location.status === 'INATIVO' ? 'approve-btn' : 'reject-btn'}
                onClick={() => handleToggleLocal(location)}
                disabled={togglingLocal === location.id}
                style={{ background: location.status === 'INATIVO' ? undefined : 'rgba(255,165,0,0.15)', color: location.status === 'INATIVO' ? undefined : 'orange', borderColor: location.status === 'INATIVO' ? undefined : 'rgba(255,165,0,0.4)' }}
              >
                {togglingLocal === location.id ? '...' : location.status === 'INATIVO' ? 'Ativar' : 'Inativar'}
              </button>
              <button 
                className="reject-btn"
                onClick={() => handleRemoveLocation(location.id)}
              >
                Excluir
              </button>
            </div>
          </div>
        )))}
        
        {activeTab === 'users' && (userAccess.length === 0 ? (
            <div className="empty-state-message"><p>Nenhum usuário cadastrado.</p></div>
        ) : userAccess.map((user, index) => (
          <div key={index} className={`admin-card ${expandedCard === `user-${index}` ? 'expanded' : ''}`}>
            <div className="card-header">
              <h3>{user.nome || user.userName || 'Usuário'}</h3>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span className={`category-badge ${user.tipoUsuario === 'adm' ? 'ADM' : 'USUARIO'}`}>
                  {user.tipoUsuario === 'adm' ? 'Admin' : 'Usuário'}
                </span>
                <span className={`category-badge ${user.ativo === 'INATIVO' ? 'INATIVO' : 'ATIVO'}`}>
                  {user.ativo === 'INATIVO' ? 'Inativo' : 'Ativo'}
                </span>
              </div>
            </div>
            
            <div className="card-info">
              <p><strong>Email:</strong> {maskEmail(user.email)}</p>
              <p><strong>Cadastrado em:</strong> {user.dataCadastro ? new Date(user.dataCadastro).toLocaleDateString('pt-BR') : 'N/A'}</p>
              <p><strong>Último acesso:</strong> {user.ultimoAcesso ? new Date(user.ultimoAcesso).toLocaleString('pt-BR') : 'Nunca'}</p>
              <p><strong>Total de acessos:</strong> {user.totalAcessos ?? 0}</p>
              <p><strong>IP:</strong> {user.ipAcesso || 'N/A'}</p>
            </div>

            <div className="card-actions">
              <button 
                className={user.ativo === 'INATIVO' ? 'approve-btn' : 'expand-btn'}
                onClick={() => handleToggleUsuario(user.id)}
              >
                {user.ativo === 'INATIVO' ? 'Ativar' : 'Inativar'}
              </button>
              <button 
                className="reject-btn"
                onClick={() => handleRemoveUser(user.id, index)}
              >
                Excluir
              </button>
            </div>
          </div>
        )))}
        
        {activeTab === 'trash' && (trashedLocations.length === 0 ? (
            <div className="empty-state-message"><p>A lixeira está vazia.</p></div>
        ) : trashedLocations.map((location, index) => (
          <div key={location.id || index} className="admin-card">
            <div className="card-header">
              <h3>{location.nome || location.name}</h3>
              <span className="category-badge INATIVO">{location.subcategoria || location.category}</span>
            </div>
            
            <div className="card-info">
              <p><strong>Cidade:</strong> {location.cidade || location.city}</p>
              <p><strong>Excluído em:</strong> {new Date(location.trashedAt).toLocaleDateString()}</p>
            </div>

            <div className="card-actions">
              <button 
                className="approve-btn"
                onClick={() => handleRestoreLocation(location.id)}
              >
                Restaurar
              </button>
              <button 
                className="reject-btn"
                onClick={() => handlePermanentDelete(location.id)}
              >
                Excluir Permanentemente
              </button>
            </div>
          </div>
        )))}
        
        {activeTab === 'sugestoes' && (sugestoes.filter(s => s.status === 'PENDENTE' || s.status === 'RASCUNHO').length === 0 ? (
          <div className="empty-state-message"><p>Nenhuma sugestão pendente.</p></div>
        ) : sugestoes.filter(s => s.status === 'PENDENTE' || s.status === 'RASCUNHO').map(s => (
          <div key={s.id} className="admin-card">
            <div className="card-header">
              <h3>{s.nome}</h3>
              <span className="category-badge PENDENTE">{s.subcategoria}</span>
            </div>
            <div className="card-info">
              <p><strong>Estado:</strong> {s.estado}</p>
              {isCategoriaCustom(s.subcategoria) && (
                <div style={{ margin: '0.5rem 0', padding: '0.6rem 0.9rem', background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.4)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.85rem', color: '#fbbf24' }}>⚠️ Categoria <strong>"{s.subcategoria}"</strong> não existe no site</span>
                  <button
                    onClick={() => handleCriarCategoria(s.subcategoria, s.estado)}
                    style={{ background: '#fbbf24', color: '#000', border: 'none', borderRadius: '6px', padding: '0.3rem 0.75rem', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}
                  >+ Criar categoria</button>
                </div>
              )}
              <p><strong>Endereço:</strong> {s.endereco}
                {(() => {
                  const end = (s.endereco || '').trim()
                  const invalido = !end || end.length < 5 || /^[^a-zA-ZÀ-ÿ]+$/.test(end) || /^(n[aã]o sei|nao|\.|\?|lala|xxx|teste|aaa|bbb|ccc|ddd)/i.test(end)
                  return invalido ? <span style={{ marginLeft: '0.5rem', background: 'rgba(239,68,68,0.15)', color: '#ef4444', borderRadius: '6px', padding: '2px 8px', fontSize: '0.75rem', fontWeight: '600' }}>Endereço inválido</span> : null
                })()}
              </p>
              <p><strong>Enviado por:</strong> {s.enviadoPor}</p>
              <p><strong>Data:</strong> {s.dataCriacao ? new Date(s.dataCriacao).toLocaleDateString('pt-BR') : 'N/A'}</p>
            </div>
            <div className="card-info" style={{ marginTop: '0.5rem' }}>
              <p><strong>Descrição:</strong> {s.descricao}</p>
            </div>
            {s.imagemUrl && (
              <img src={s.imagemUrl} alt={s.nome} style={{ width: '100%', borderRadius: '8px', marginTop: '0.75rem', maxHeight: '180px', objectFit: 'cover' }} />
            )}
            <div className="card-actions">
              <button className="expand-btn" onClick={() => handleInvestigar(s)} style={{ position: 'relative' }}>
                {s.rascunhoConteudo && (
                  <span style={{ position: 'absolute', top: '-6px', right: '-6px', background: '#f59e0b', borderRadius: '50%', width: '12px', height: '12px', display: 'block' }} title="Tem rascunho salvo" />
                )}
                {s.rascunhoConteudo ? 'Continuar Edição' : 'Investigar com IA'}
              </button>
              <button className="reject-btn" onClick={() => handleDescartarSugestao(s.id)}>Descartar</button>
            </div>
          </div>
        )))}

        {activeTab === 'messages' && (contactMessages.filter(message => message.status === 'nova').length === 0 ? (
          <div className="empty-state-message"><p>Nenhuma mensagem nova.</p></div>
        ) : contactMessages.filter(message => message.status === 'nova').map((message) => (
          <div key={message.id} className={`admin-card ${expandedCard === message.id ? 'expanded' : ''}`}>
            <div className="card-header">
              <h3>{message.nome}</h3>
              <span className={`category-badge ${message.status === 'nova' ? 'nova' : ''}`}>{message.status}</span>
            </div>
            
            <div className="card-info">
              <p><strong>Email:</strong> {message.email}</p>
              <p><strong>Assunto:</strong> {message.assunto}</p>
              <p><strong>Data:</strong> {new Date(message.data).toLocaleString()}</p>
            </div>

            {expandedCard === message.id && (
              <div className="card-details">
                <p><strong>Mensagem:</strong></p>
                <div className="message-content-box">
                  {message.mensagem}
                </div>
              </div>
            )}

            <div className="card-actions">
              <button 
                className="expand-btn"
                onClick={() => toggleExpand(message.id)}
              >
                {expandedCard === message.id ? 'Recolher' : 'Ver Mensagem'}
              </button>
              <button 
                className="approve-btn"
                onClick={() => responderMensagem(message.id)}
              >
                Responder
              </button>
            </div>
          </div>
        )))}
      </div>
      
      {showAddUserModal && (
        <div className="modal-overlay" onClick={() => setShowAddUserModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Cadastrar Novo Usuário</h2>
            <form onSubmit={handleAddUser} className="add-user-form">
                <div className="form-group">
                    <label>Nome:</label>
                    <input type="text" value={newUser.userName} onChange={e => setNewUser({...newUser, userName: e.target.value})} required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" value={newUser.email} onChange={e => setNewUser({...newUser, email: e.target.value})} required />
                </div>
                <div className="form-group">
                    <label>Senha:</label>
                    <input type="password" value={newUser.senha} onChange={e => setNewUser({...newUser, senha: e.target.value})} required />
                </div>
                <div className="form-group">
                    <label>Tipo:</label>
                    <select value={newUser.userType} onChange={e => setNewUser({...newUser, userType: e.target.value})}>
                        <option value="usuario">Usuário</option>
                        <option value="adm">Administrador</option>
                    </select>
                </div>
                <div className="modal-actions">
                    <button type="submit" className="approve-btn">Cadastrar</button>
                    <button type="button" className="reject-btn" onClick={() => setShowAddUserModal(false)}>Cancelar</button>
                </div>
            </form>
          </div>
        </div>
      )}
      
      {showEditModal && editingLocation && (
        <div className="modal-overlay" onClick={() => setShowEditModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Editar Local</h2>
            <div className="edit-form">
              <div className="form-group">
                <label>Nome:</label>
                <input 
                  type="text" 
                  value={editingLocation.nome || ''} 
                  onChange={(e) => setEditingLocation({...editingLocation, nome: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Cidade:</label>
                <input 
                  type="text" 
                  value={editingLocation.cidade || ''} 
                  onChange={(e) => setEditingLocation({...editingLocation, cidade: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Categoria:</label>
                <select 
                  value={editingLocation.subcategoria || ''} 
                  onChange={(e) => setEditingLocation({...editingLocation, subcategoria: e.target.value})}
                >
                  <option value="Monumentos">Monumentos</option>
                  <option value="Lugar Paradísíaco">Lugar Paradísíaco</option>
                  <option value="Restaurantes">Restaurantes</option>
                  <option value="Costume Cultural">Costume Cultural</option>
                </select>
              </div>
              <div className="form-group">
                <label>Descrição:</label>
                <textarea 
                  value={editingLocation.descricao || ''} 
                  onChange={(e) => setEditingLocation({...editingLocation, descricao: e.target.value})}
                  rows="4"
                />
              </div>
              <div className="form-group">
                <label>Localização:</label>
                <input 
                  type="text" 
                  value={editingLocation.localizacao || ''} 
                  onChange={(e) => setEditingLocation({...editingLocation, localizacao: e.target.value})}
                />
              </div>
              <div className="modal-actions">
                <button className="approve-btn" onClick={() => {
                  handleSaveEdit()
                  handleApprove(editingLocation.id)
                }}>Salvar e Aprovar</button>
                <button className="reject-btn" onClick={() => setShowEditModal(false)}>Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default AdminPanel
