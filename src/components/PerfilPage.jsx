import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './PerfilPage.css'

const CLOUD_NAME = 'dybpie9aa'
const UPLOAD_PRESET = 'gadys_tcc'

function PerfilPage() {
  const navigate = useNavigate()
  const isAdmin = (localStorage.getItem('userType') || '').toUpperCase() === 'ADM'
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true')
  const [profileData, setProfileData] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('profileData'))
    return saved || {
      nome: localStorage.getItem('userName') || 'Usuário',
      email: localStorage.getItem('userEmail') || 'usuario@email.com',
      foto: null
    }
  })
  const [showPhotoOptions, setShowPhotoOptions] = useState(false)
  const [urlInput, setUrlInput] = useState('')
  const [showEditModal, setShowEditModal] = useState(false)
  const [tempProfileData, setTempProfileData] = useState(profileData)
  const [userStats, setUserStats] = useState({ locaisAdicionados: 0, avaliacoes: 0, comentarios: 0 })
  const [meusLocais, setMeusLocais] = useState([])

  const API_URL = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '')

  const toggleTheme = () => {
    const n = !darkMode
    setDarkMode(n)
    localStorage.setItem('darkMode', n.toString())
  }

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') !== 'true') { navigate('/login'); return }
    const userName = localStorage.getItem('userName')
    const usuarioId = localStorage.getItem('usuarioId')
    fetch(`${API_URL}/api/locais`)
      .then(r => r.json())
      .then(locais => {
        const meus = locais.filter(l =>
          l.enviadoPor === userName ||
          l.enviadoPor === 'Admin' ||
          l.enviadoPor === 'GADYS' ||
          String(l.criadoPor) === String(usuarioId)
        )
        setMeusLocais(meus)
        setUserStats(prev => ({ ...prev, locaisAdicionados: meus.length }))
      })
      .catch(() => {})
  }, [])

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
      localStorage.setItem('profileData', JSON.stringify(newData))
      setShowPhotoOptions(false)
    } catch { alert('Erro ao fazer upload da foto.') }
  }

  const handleEmojiSelect = (emoji) => {
    const newData = { ...profileData, foto: emoji }
    setProfileData(newData)
    localStorage.setItem('profileData', JSON.stringify(newData))
    setShowPhotoOptions(false)
  }

  const handleUrlSubmit = () => {
    if (urlInput.trim()) {
      const newData = { ...profileData, foto: urlInput.trim() }
      setProfileData(newData)
      localStorage.setItem('profileData', JSON.stringify(newData))
      setUrlInput('')
      setShowPhotoOptions(false)
    }
  }

  const isUrl = (str) => str && str.match(/^(https?:\/\/|\/)/)

  return (
    <div className={`perfil-page ${darkMode ? 'dark' : 'light'}`}>
      <header style={{
        background: darkMode ? 'rgba(15,12,41,0.95)' : '#1a237e',
        padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', position: 'sticky', top: 0, zIndex: 100,
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src="/images/logos/logo.png" alt="GADYS" style={{ height: '40px', background: 'linear-gradient(135deg, #667eea, #764ba2)', borderRadius: '50%', padding: '8px' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white' }}>GADYS</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={toggleTheme} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}>
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
            { label: 'Adicionar Local', path: '/adicionar-local' },
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
              style={{ color: '#ccc', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '5px', display: 'block', cursor: 'default' }}>
              👤 Meu Perfil (atual)
            </a>
          </li>
          {isAdmin && (
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/painel-adm'); setMenuOpen(false) }}
                style={{ color: '#ffd700', textDecoration: 'none', padding: '0.5rem 1rem', fontWeight: '700', borderRadius: '5px', display: 'block' }}>
                ⚙️ Painel Admin
              </a>
            </li>
          )}
        </ul>
      </header>

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
                <p className="stat-value">{userStats.locaisAdicionados}</p>
                <p className="stat-label">Locais Adicionados</p>
              </div>
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
              <Link to="/adicionar-local" className="action-button add-place-button">Adicionar Local</Link>
              <Link to="#" className="action-button my-reviews-button">Minhas Avaliações</Link>
              <Link to="/" className="action-button home-page-button">Página Inicial</Link>
            </div>
          </div>

          {meusLocais.length > 0 && (
            <div className="stats-card">
              <h3 className="card-header">Meus Locais</h3>
              <div className="meus-locais-lista">
                {meusLocais.map(local => (
                  <div key={local.id} className="meu-local-item" onClick={() => navigate(`/local/${local.id}`)}>
                    <div className="meu-local-img" style={{ backgroundImage: local.imagemUrl ? `url(${local.imagemUrl.split(',')[0]})` : 'none' }} />
                    <div className="meu-local-info">
                      <strong>{local.nome}</strong>
                      <span>{local.cidade}{local.estado ? `, ${local.estado}` : ''}</span>
                      <span className={`meu-local-status ${local.status}`}>{local.status}</span>
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
                    localStorage.setItem('profileData', JSON.stringify(tempProfileData))
                    localStorage.setItem('userName', tempProfileData.nome)
                    setShowEditModal(false)
                    alert('Dados salvos com sucesso!')
                  } catch { alert('Erro ao salvar. Tente novamente.') }
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
