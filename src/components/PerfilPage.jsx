import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './PerfilPage.css'

function PerfilPage() {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true'
  })
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })
  
  const [editMode, setEditMode] = useState(false)
  const [profileData, setProfileData] = useState(() => {
    const savedProfile = JSON.parse(localStorage.getItem('profileData'))
    const userName = localStorage.getItem('userName')
    const userEmail = localStorage.getItem('userEmail')
    
    return savedProfile || {
      nome: userName || 'Usuário',
      email: userEmail || 'usuario@email.com',
      telefone: '(11) 99999-9999',
      cidade: 'São Paulo, SP',
      foto: null
    }
  })
  
  const [showPhotoOptions, setShowPhotoOptions] = useState(false)
  const [urlInput, setUrlInput] = useState('')
  const [showEditModal, setShowEditModal] = useState(false)
  const [tempProfileData, setTempProfileData] = useState(profileData)
  const [loading, setLoading] = useState(false)
  const [userStats, setUserStats] = useState({
    locaisAdicionados: 0,
    avaliacoes: 0,
    comentarios: 0
  })

  const toggleTheme = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
  }

  const fetchUserProfile = async () => {
    try {
      setLoading(true)
      const token = localStorage.getItem('token')
      if (!token) return

      const response = await axios.get('https://glorious-tribble-pjqg5xgqg9rp36jvx-8080.app.github.dev/api/auth/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.data.sucesso) {
        const userData = response.data.usuario
        setProfileData({
          nome: userData.nome,
          email: userData.email,
          telefone: userData.telefone || '(11) 99999-9999',
          cidade: userData.cidade || 'São Paulo, SP',
          foto: userData.foto || null
        })
      }
    } catch (error) {
      console.error('Erro ao buscar perfil:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchUserStats = async () => {
    try {
      const token = localStorage.getItem('token')
      if (!token) return

      const [locaisRes, avaliacoesRes, comentariosRes] = await Promise.all([
        axios.get('https://glorious-tribble-pjqg5xgqg9rp36jvx-8080.app.github.dev/api/locais/usuario', {
          headers: { 'Authorization': `Bearer ${token}` }
        }),
        axios.get('https://glorious-tribble-pjqg5xgqg9rp36jvx-8080.app.github.dev/api/avaliacoes/usuario', {
          headers: { 'Authorization': `Bearer ${token}` }
        }),
        axios.get('https://glorious-tribble-pjqg5xgqg9rp36jvx-8080.app.github.dev/api/comentarios/usuario', {
          headers: { 'Authorization': `Bearer ${token}` }
        })
      ])

      setUserStats({
        locaisAdicionados: locaisRes.data?.length || 0,
        avaliacoes: avaliacoesRes.data?.length || 0,
        comentarios: comentariosRes.data?.length || 0
      })
    } catch (error) {
      console.error('Erro ao buscar estatísticas:', error)
    }
  }
  
  const handlePhotoChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const newData = { ...profileData, foto: e.target.result }
        setProfileData(newData)
        localStorage.setItem('profileData', JSON.stringify(newData))
        setShowPhotoOptions(false)
      }
      reader.readAsDataURL(file)
    }
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
  
  const handleSave = () => {
    localStorage.setItem('profileData', JSON.stringify(profileData))
    setEditMode(false)
    alert('Dados salvos com sucesso!')
  }

  useEffect(() => {
    if (!isLoggedIn) {
      setShowLoginModal(true)
    } else {
      fetchUserProfile()
      fetchUserStats()
    }
  }, [isLoggedIn])

  if (showLoginModal && !isLoggedIn) {
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

  return (
    <div className={`perfil-page ${darkMode ? 'dark' : 'light'}`}>
      <header className="perfil-header">
        <Link to="/"><h1>GADYS</h1></Link>
        <div className="header-actions">
          <button onClick={toggleTheme} className="theme-toggle">{darkMode ? '☀️' : '🌙'}</button>
          <Link to="/"><button className="back-button">Voltar</button></Link>
        </div>
      </header>

      <main className="perfil-main">
        <div className="profile-sidebar">
          <div className="profile-picture-container">
            <div className="profile-picture" style={{ backgroundImage: profileData.foto ? `url(${profileData.foto})` : 'none' }}>
              {!profileData.foto && '👤'}
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
            <button onClick={() => { setTempProfileData(profileData); setShowEditModal(true); }} className="edit-profile-button">Editar Perfil</button>
            <button onClick={() => { localStorage.removeItem('isLoggedIn'); localStorage.removeItem('userType'); localStorage.removeItem('userName'); navigate('/'); }} className="logout-button">Sair</button>
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
              <Link to="/adicionar-locais.html" className="action-button add-place-button">Adicionar Local</Link>
              <Link to="#" className="action-button my-reviews-button">Minhas Avaliações</Link>
              <Link to="/" className="action-button home-page-button">Página Inicial</Link>
            </div>
          </div>
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
                    const RAW_API_URL = import.meta.env.VITE_API_URL
                    const API_URL = RAW_API_URL.replace(/\/$/, '')
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
                  } catch (error) {
                    alert('Erro ao salvar. Tente novamente.')
                    console.error(error)
                  }
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
