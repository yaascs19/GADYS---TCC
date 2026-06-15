import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavbarShared from './NavbarShared'
import './PerfilPage.css'

const CLOUD_NAME = 'dybpie9aa'
const UPLOAD_PRESET = 'gadys_tcc'
const ICONS = { success: '✓', error: '✕', info: 'ℹ' }

function PerfilPage() {
  const navigate = useNavigate()
  const isAdmin = (localStorage.getItem('userType') || '').toUpperCase() === 'ADM'
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true')
  const [toast, setToast] = useState(null)

  const showToast = (message, type = 'error') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 4000)
  }

  if (localStorage.getItem('isLoggedIn') !== 'true') {
    return (
      <div className="login-modal">
        <div className="login-modal-content">
          <h3>Acesso Restrito</h3>
          <p>Para acessar seu perfil, você precisa estar logado.</p>
          <div className="login-modal-actions">
            <button onClick={() => navigate('/login')} className="login-button">Fazer Login</button>
            <button onClick={() => navigate('/')} className="back-button">Voltar</button>
          </div>
        </div>
      </div>
    )
  }
  const [profileData, setProfileData] = useState(() => {
    const usuarioId = localStorage.getItem('usuarioId')
    const saved = JSON.parse(localStorage.getItem(`profileData_${usuarioId}`))
    return saved || {
      nome: localStorage.getItem('userName') || 'Usuário',
      email: localStorage.getItem('userEmail') || '',
      foto: null
    }
  })
  const [showPhotoOptions, setShowPhotoOptions] = useState(false)
  const [urlInput, setUrlInput] = useState('')
  const [showEditModal, setShowEditModal] = useState(false)
  const [tempProfileData, setTempProfileData] = useState(profileData)
  const [userStats, setUserStats] = useState({ locaisAdicionados: 0, avaliacoes: 0, comentarios: 0 })
  const [meusLocais, setMeusLocais] = useState([])
  const [mensagensRespondidas, setMensagensRespondidas] = useState([])
  const [mostrarTodosLocais, setMostrarTodosLocais] = useState(false)

  const saveProfile = (data) => {
    const usuarioId = localStorage.getItem('usuarioId')
    localStorage.setItem(`profileData_${usuarioId}`, JSON.stringify(data))
  }

  const API_URL = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '')

  const toggleTheme = () => {
    const n = !darkMode
    setDarkMode(n)
    localStorage.setItem('darkMode', n.toString())
  }

  useEffect(() => {
    const usuarioId = localStorage.getItem('usuarioId')
    if (usuarioId && API_URL) {
      fetch(`${API_URL}/api/usuarios/${usuarioId}`)
        .then(r => r.json())
        .then(usuario => {
          if (usuario?.email) {
            localStorage.setItem('userEmail', usuario.email)
            setProfileData(prev => ({ ...prev, email: usuario.email, foto: usuario.fotoPerfil || prev.foto }))
          }
        })
        .catch(() => {})
    }
  }, [])

  useEffect(() => {
    const usuarioId = localStorage.getItem('usuarioId')
    const userName = localStorage.getItem('userName')

    fetch(`${API_URL}/api/locais`)
      .then(r => r.json())
      .then(async locais => {
        const meus = locais.filter(l =>
          isAdmin ? l.enviadoPor === 'GADYS' : l.enviadoPor === userName
        )
        const meusComImagem = await Promise.all(
          meus.map(async l => {
            if (l.imagemUrl) return l
            try {
              const res = await fetch(`${API_URL}/api/locais/${l.id}`)
              const detalhe = await res.json()
              return { ...l, imagemUrl: detalhe.imagemUrl || detalhe.imagem_url || null }
            } catch { return l }
          })
        )
        setMeusLocais(meusComImagem)
        const aprovados = meusComImagem.filter(l => l.status === 'ATIVO')
        setUserStats(prev => ({ ...prev, locaisAdicionados: aprovados.length }))
      })
      .catch(() => {})

    if (usuarioId) {
      fetch(`${API_URL}/api/avaliacoes/usuario/${usuarioId}`)
        .then(r => r.json())
        .then(avaliacoes => setUserStats(prev => ({ ...prev, avaliacoes: avaliacoes.length })))
        .catch(() => {})

      fetch(`${API_URL}/api/comentarios/usuario/${usuarioId}`)
        .then(r => r.json())
        .then(comentarios => setUserStats(prev => ({ ...prev, comentarios: comentarios.length })))
        .catch(() => {})
    }
  }, [])

  useEffect(() => {
    if (API_URL) {
      const userEmail = localStorage.getItem('userEmail')
      const userName = localStorage.getItem('userName')
      fetch(`${API_URL}/api/contato`)
        .then(r => r.json())
        .then(msgs => {
          const respondidas = msgs.filter(m =>
            (m.email === userEmail || m.nome === userName) &&
            m.status === 'respondida' && m.resposta
          ).map(m => ({
            ...m,
            resposta: (() => {
              try { return JSON.parse(m.resposta).resposta || m.resposta } catch { return m.resposta }
            })()
          }))
          setMensagensRespondidas(respondidas)
        })
        .catch(() => {})
    }
  }, [])

  const saveFotoBackend = async (foto) => {
    const usuarioId = localStorage.getItem('usuarioId')
    if (!usuarioId) return
    try {
      await fetch(`${API_URL}/api/usuarios/${usuarioId}/foto`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fotoPerfil: foto })
      })
    } catch {}
  }

  const handlePhotoChange = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', UPLOAD_PRESET)
    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, { method: 'POST', body: data })
      const json = await res.json()
      const newData = { ...profileData, foto: json.secure_url }
      setProfileData(newData)
      saveProfile(newData)
      saveFotoBackend(json.secure_url)
      setShowPhotoOptions(false)
    } catch { showToast('Erro ao fazer upload da foto.') }
  }

  const handleEmojiSelect = (emoji) => {
    const newData = { ...profileData, foto: emoji }
    setProfileData(newData)
    saveProfile(newData)
    saveFotoBackend(emoji)
    setShowPhotoOptions(false)
  }

  const handleUrlSubmit = () => {
    if (urlInput.trim()) {
      const newData = { ...profileData, foto: urlInput.trim() }
      setProfileData(newData)
      saveProfile(newData)
      saveFotoBackend(urlInput.trim())
      setUrlInput('')
      setShowPhotoOptions(false)
    }
  }

  const isUrl = (str) => str && str.match(/^(https?:\/\/|\/)/)

  return (
    <div className={`perfil-page ${darkMode ? 'dark' : 'light'}`}>

      {toast && (
        <div className={`perfil-toast perfil-toast--${toast.type}`}>
          <span className="perfil-toast-icon">{ICONS[toast.type]}</span>
          <span>{toast.message}</span>
          <button className="perfil-toast-close" onClick={() => setToast(null)}>×</button>
        </div>
      )}
      <NavbarShared darkMode={darkMode} toggleDarkMode={toggleTheme} paginaAtual={window.location.pathname} />

      <main className="perfil-main">
        <div className="profile-sidebar">
          <div className="profile-picture-container">
            <div
              className={`profile-picture ${!profileData.foto ? 'sem-foto' : ''}`}
              style={{ backgroundImage: isUrl(profileData.foto) ? `url(${profileData.foto})` : 'none' }}
            >
              {!profileData.foto && '👤'}
              {profileData.foto && !isUrl(profileData.foto) && profileData.foto}
            </div>
            <button onClick={() => setShowPhotoOptions(!showPhotoOptions)} className="change-picture-button">📷</button>
          </div>

          {showPhotoOptions && (
            <div className="photo-options">
              <input type="file" accept="image/*" onChange={handlePhotoChange} id="photoInput" style={{ display: 'none' }} />
              <button onClick={() => document.getElementById('photoInput').click()}>Escolher Foto</button>
              <div className="emoji-options">
                {['😊', '😎', '🤓', '😍'].map(emoji => (
                  <button key={emoji} onClick={() => handleEmojiSelect(emoji)}>{emoji}</button>
                ))}
              </div>
              <input type="url" placeholder="URL da imagem" value={urlInput} onChange={(e) => setUrlInput(e.target.value)} />
              <button onClick={handleUrlSubmit}>Usar URL</button>
            </div>
          )}

          <div className="profile-info">
            <h2>{profileData.nome}</h2>
            <p className="email">{profileData.email}</p>
          </div>
          <div className="profile-actions">
            <button onClick={() => { setTempProfileData(profileData); setShowEditModal(true) }} className="edit-profile-button">Editar Perfil</button>
            <button onClick={() => { localStorage.removeItem('isLoggedIn'); localStorage.removeItem('userType'); localStorage.removeItem('userName'); navigate('/') }} className="logout-button">Sair</button>
          </div>
        </div>

        <div className="main-content">
          <div className="stats-card">
            <h3 className="card-header">Minhas Estatísticas</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <p className="stat-value">{userStats.avaliacoes}</p>
                <p className="stat-label">Avaliações Feitas</p>
              </div>
              <div className="stat-item">
                <p className="stat-value">{userStats.comentarios}</p>
                <p className="stat-label">Comentários Feitos</p>
              </div>
            </div>
          </div>

          <div className="actions-card">
            <h3 className="card-header">Ações Rápidas</h3>
            <div className="actions-grid">
              <Link to="/adicionar-local" className="action-button add-place-button">Dê sugestões</Link>
              <Link to="#" className="action-button my-reviews-button">Minhas Avaliações</Link>
              <Link to="/" className="action-button home-page-button">Página Inicial</Link>
            </div>
          </div>

          {meusLocais.length > 0 && (
            <div className="stats-card">
              <h3 className="card-header">Meus Locais</h3>
              <div className="meus-locais-lista">
                {(mostrarTodosLocais ? meusLocais : meusLocais.slice(0, 5)).map(local => (
                  <div key={local.id} className="meu-local-item" onClick={() => navigate(local.rotaFrontend || `/local/${local.id}`)}>
                    <div className="meu-local-img" style={{ backgroundImage: local.imagemUrl ? `url(${local.imagemUrl.split(',')[0]})` : 'none' }} />
                    <div className="meu-local-info">
                      <strong>{local.nome}</strong>
                      <span>{local.cidade}{local.estado ? `, ${local.estado}` : ''}</span>
                      <span className={`meu-local-status ${local.status}`}>{local.status}</span>
                    </div>
                  </div>
                ))}
              </div>
              {meusLocais.length > 5 && (
                <button
                  onClick={() => setMostrarTodosLocais(!mostrarTodosLocais)}
                  className="ver-mais-btn"
                >
                  {mostrarTodosLocais ? 'Ver menos' : `Ver mais (${meusLocais.length - 5})`}
                </button>
              )}
            </div>
          )}

          {mensagensRespondidas.length > 0 && (
            <div className="stats-card">
              <h3 className="card-header">Respostas do Suporte</h3>
              <div className="mensagens-respondidas-lista">
                {mensagensRespondidas.map(msg => (
                  <div key={msg.id} className="mensagem-respondida-item">
                    <div className="mensagem-respondida-header">
                      <strong>{msg.assunto || 'Sem assunto'}</strong>
                      <span className="mensagem-data">{new Date(msg.data).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="mensagem-respondida-body">
                      <p className="mensagem-original"><span>Sua mensagem:</span> {msg.mensagem}</p>
                      <p className="mensagem-resposta"><span>Resposta:</span> <span style={{ whiteSpace: 'pre-wrap' }}>{msg.resposta}</span></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {showEditModal && (
        <div className="edit-modal">
          <div className="edit-modal-content">
            <h3>Editar Perfil</h3>
            <input type="text" value={tempProfileData.nome} onChange={(e) => setTempProfileData({...tempProfileData, nome: e.target.value})} placeholder="Nome" />
            <input type="email" value={tempProfileData.email} onChange={(e) => setTempProfileData({...tempProfileData, email: e.target.value})} placeholder="Email" />
            <input type="password" value={tempProfileData.novaSenha || ''} onChange={(e) => setTempProfileData({...tempProfileData, novaSenha: e.target.value})} placeholder="Nova Senha (opcional)" />
            <div className="edit-modal-actions">
              <button
                onClick={async () => {
                  try {
                    const usuarioId = localStorage.getItem('usuarioId')
                    const { data: usuarioAtual } = await axios.get(`${API_URL}/api/usuarios/${usuarioId}`)
                    await axios.put(`${API_URL}/api/usuarios/${usuarioId}`, {
                      nome: tempProfileData.nome,
                      email: tempProfileData.email,
                      senha: tempProfileData.novaSenha?.trim() ? tempProfileData.novaSenha : usuarioAtual.senha
                    })
                    setProfileData(tempProfileData)
                    saveProfile(tempProfileData)
                    localStorage.setItem('userName', tempProfileData.nome)
                    setShowEditModal(false)
                    showToast('Dados salvos com sucesso!', 'success')
                  } catch { showToast('Erro ao salvar. Tente novamente.') }
                }}
                className="save-button"
              >Salvar</button>
              <button onClick={() => setShowEditModal(false)} className="cancel-button">Cancelar</button>
            </div>
          </div>
        </div>
      )}

      <footer className="perfil-footer">
        <p>&copy; {new Date().getFullYear()} GADYS. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default PerfilPage
