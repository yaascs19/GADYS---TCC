import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './AdicionarLocal.css'

function AdicionarLocal() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true')
  const navigate = useNavigate()
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
  const isAdmin = (localStorage.getItem('userType') || '').toUpperCase() === 'ADM'
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ nome: '', subcategoria: '', estado: '', endereco: '', descricao: '' })
  const [enderecoGeradoIA, setEnderecoGeradoIA] = useState(false)
  const [buscandoEndereco, setBuscandoEndereco] = useState(false)
  const [imagem, setImagem] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const CLOUD_NAME = 'dybpie9aa'
  const UPLOAD_PRESET = 'gadys_tcc'
  const sanitize = (str) => (str || '').replace(/<[^>]*>/g, '').trim()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (name === 'endereco') setEnderecoGeradoIA(false)
  }

  const buscarEnderecoIA = async () => {
    if (!formData.nome || !formData.estado) return
    setBuscandoEndereco(true)
    try {
      const query = `${formData.nome}, ${formData.estado}, Brasil`
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1&addressdetails=1&countrycodes=br`,
        { headers: { 'Accept-Language': 'pt-BR', 'User-Agent': 'GADYS-TCC/1.0' } }
      )
      const data = await res.json()
      if (data.length > 0) {
        const addr = data[0].address
        const partes = [
          addr.road || addr.pedestrian || addr.path,
          addr.house_number,
          addr.suburb || addr.neighbourhood,
          addr.city || addr.town || addr.village,
          addr.state_code || addr.state
        ].filter(Boolean)
        const endereco = partes.join(', ')
        setFormData(prev => ({ ...prev, endereco }))
        setEnderecoGeradoIA(true)
      }
    } catch {}
    finally { setBuscandoEndereco(false) }
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    setUploading(true)
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', UPLOAD_PRESET)
    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, { method: 'POST', body: data })
      const json = await res.json()
      setImagem(json.secure_url)
    } catch { alert('Erro ao fazer upload da imagem.') }
    finally { setUploading(false) }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const sugestaoData = {
        nome: sanitize(formData.nome),
        descricao: sanitize(formData.descricao),
        endereco: sanitize(formData.endereco),
        estado: formData.estado,
        subcategoria: formData.subcategoria,
        imagemUrl: imagem || null,
        enviadoPor: localStorage.getItem('userName') || 'Usuário Anônimo',
        usuarioId: localStorage.getItem('usuarioId') || null,
      }
      const API_URL = import.meta.env.VITE_API_URL || 'https://gadys-backend.onrender.com'
      await axios.post(`${API_URL}/api/sugestoes`, sugestaoData)
      setShowSuccess(true)
      setFormData({ nome: '', subcategoria: '', estado: '', endereco: '', descricao: '' })
      setImagem(null)
      window.scrollTo(0, 0)
    } catch (error) {
      alert(error.response?.data?.mensagem || 'Erro ao enviar a sugestão.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={`adicionar-local-page ${darkMode ? 'dark' : ''}`}>

      {!isLoggedIn && (
        <div className="login-modal">
          <div className="login-modal-content">
            <h3>Acesso Restrito</h3>
            <p>Para sugerir um local, você precisa estar logado.</p>
            <div className="login-modal-actions">
              <button onClick={() => navigate('/login')} className="login-button">Fazer Login</button>
              <button onClick={() => navigate('/')} className="back-button">Voltar</button>
            </div>
          </div>
        </div>
      )}

      <header style={{ background: darkMode ? 'rgba(15,12,41,0.95)' : '#1a237e', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img onClick={() => navigate('/')} style={{ cursor: 'pointer', height: '40px', background: 'linear-gradient(135deg,#667eea,#764ba2)', borderRadius: '50%', padding: '8px' }} src="/images/logos/logo.png" alt="GADYS" />
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
        <ul style={{ position: 'fixed', top: 0, right: menuOpen ? 0 : '-100%', width: '300px', height: '100vh', background: darkMode ? 'rgba(15,12,41,0.95)' : '#1a237e', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', justifyContent: 'flex-start', margin: 0, padding: '2rem 0', listStyle: 'none', transition: 'right 0.3s ease', zIndex: 1001, overflowY: 'auto' }}>
          {[{ label: 'Início', path: '/' }, { label: 'Lugares', path: '/lugares' }, { label: 'Mapa', path: '/mapa' }, { label: 'Meu Perfil', path: '/perfil' }, { label: 'Sobre', path: '/sobre' }, { label: 'Contato', path: '/contato' }].map(({ label, path }) => (
            <li key={path}>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate(path); setMenuOpen(false) }} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '5px', display: 'block' }}>{label}</a>
            </li>
          ))}
          <li><a href="#" onClick={(e) => { e.preventDefault(); setMenuOpen(false) }} style={{ color: '#ccc', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '5px', display: 'block', cursor: 'default' }}>✏️ Sugerir Local (atual)</a></li>
          {isAdmin && (
            <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/painel-adm'); setMenuOpen(false) }} style={{ color: '#ffd700', textDecoration: 'none', padding: '0.5rem 1rem', fontWeight: '700', borderRadius: '5px', display: 'block' }}>⚙️ Painel Admin</a></li>
          )}
        </ul>
      </header>

      <main style={{ maxWidth: '680px', margin: '0 auto', padding: '2.5rem 1rem' }}>
        <div className="form-column-main">

          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ marginTop: '0.5rem' }}>Sugerir um Local</h1>
            <p className="form-intro">Conhece um lugar incrível no Brasil? Conta pra gente! Nossa equipe vai analisar e publicar no site.</p>
          </div>

          {showSuccess && (
            <div className="success-message">
              ✅ Sugestão enviada com sucesso! Nossa equipe vai analisar e publicar em breve. Obrigado!
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Nome do Local *</label>
              <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} required className="form-input" placeholder="Ex: Cachoeira do Véu de Noiva" />
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Estado *</label>
                <select name="estado" value={formData.estado} onChange={handleInputChange} required className="form-select">
                  <option value="">Selecione</option>
                  {[['AC','Acre'],['AL','Alagoas'],['AP','Amapá'],['AM','Amazonas'],['BA','Bahia'],['CE','Ceará'],['DF','Distrito Federal'],['ES','Espírito Santo'],['GO','Goiás'],['MA','Maranhão'],['MT','Mato Grosso'],['MS','Mato Grosso do Sul'],['MG','Minas Gerais'],['PA','Pará'],['PB','Paraíba'],['PR','Paraná'],['PE','Pernambuco'],['PI','Piauí'],['RJ','Rio de Janeiro'],['RN','Rio Grande do Norte'],['RS','Rio Grande do Sul'],['RO','Rondônia'],['RR','Roraima'],['SC','Santa Catarina'],['SP','São Paulo'],['SE','Sergipe'],['TO','Tocantins']].map(([v,l]) => <option key={v} value={v}>{l}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Categoria *</label>
                <select name="subcategoria" value={formData.subcategoria} onChange={handleInputChange} required className="form-select">
                  <option value="">Selecione</option>
                  <option value="Monumentos">Monumento</option>
                  <option value="Lugar Paradísíaco">Lugar Paradisíaco</option>
                  <option value="Restaurantes">Restaurante</option>
                  <option value="Costume Cultural">Costume Cultural</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Endereço *</label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input type="text" name="endereco" value={formData.endereco} onChange={handleInputChange} required className="form-input" placeholder="Ex: Av. das Cataratas, km 18, Foz do Iguaçu - PR" style={{ flex: 1 }} />
                <button type="button" onClick={buscarEnderecoIA} disabled={buscandoEndereco || !formData.nome || !formData.estado} className="submit-button"
                  style={{ width: 'auto', padding: '0 1rem', marginTop: 0, fontSize: '0.8rem', whiteSpace: 'nowrap', opacity: (!formData.nome || !formData.estado) ? 0.5 : 1 }}>
                  {buscandoEndereco ? 'Buscando...' : 'Buscar endereço'}
                </button>
              </div>
              {enderecoGeradoIA && (
                <small style={{ color: '#10b981', marginTop: '0.3rem', display: 'block' }}>
                  Endereço encontrado automaticamente — verifique se está correto.
                </small>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">Por que esse lugar é especial? *</label>
              <textarea name="descricao" value={formData.descricao} onChange={handleInputChange} required className="form-textarea" placeholder="Conte um pouco sobre o lugar, o que ele tem de único..." style={{ minHeight: '140px' }} />
            </div>

            <div className="form-group">
              <label className="form-label">Foto do Local <span style={{ color: '#999', fontWeight: 400 }}>(opcional)</span></label>
              <label className="image-upload-placeholder" style={{ aspectRatio: '16/5', backgroundImage: imagem ? `url(${imagem})` : 'none', borderRadius: '12px' }}>
                {uploading && <div className="uploading-overlay">Enviando...</div>}
                {!imagem && !uploading && (
                  <div style={{ textAlign: 'center', color: '#999' }}>
                    <div style={{ fontSize: '0.9rem' }}>Clique para adicionar uma foto</div>
                  </div>
                )}
                {imagem && !uploading && (
                  <div style={{ position: 'absolute', bottom: '8px', right: '8px', background: 'rgba(0,0,0,0.6)', color: 'white', borderRadius: '8px', padding: '4px 10px', fontSize: '0.8rem', cursor: 'pointer' }}
                    onClick={(e) => { e.preventDefault(); setImagem(null) }}>✕ Remover</div>
                )}
                <input type="file" accept="image/*" onChange={handleImageUpload} />
              </label>
            </div>

            <button type="submit" disabled={loading} className="submit-button">
              {loading ? 'Enviando...' : 'Enviar Sugestão'}
            </button>
            <Link to="/" style={{ display: 'block', textAlign: 'center', marginTop: '1.5rem', color: darkMode ? '#aaa' : '#666', textDecoration: 'none' }}>
              ← Voltar para a Home
            </Link>
          </form>
        </div>
      </main>
    </div>
  )
}

export default AdicionarLocal
