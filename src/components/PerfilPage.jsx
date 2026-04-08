import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

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
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center',
        justifyContent: 'center', zIndex: 10000
      }}>
        <div style={{
          background: darkMode ? '#2a2a2a' : '#fff', padding: '2rem',
          borderRadius: '15px', maxWidth: '400px', width: '90%', textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)', borderTop: '5px solid #3498db'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#3498db', fontSize: '1.5rem' }}>Acesso Restrito</h3>
          <p style={{ marginBottom: '2rem', color: darkMode ? '#ccc' : '#666', lineHeight: '1.6' }}>
            Para acessar seu perfil, você precisa estar logado.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button 
              onClick={() => navigate('/login')}
              style={{
                background: '#3498db', color: 'white', border: 'none', padding: '0.75rem 1.5rem',
                borderRadius: '8px', cursor: 'pointer', fontWeight: '600', transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.background = '#2980b9'}
              onMouseLeave={(e) => e.target.style.background = '#3498db'}
            >
              Fazer Login
            </button>
            <button 
              onClick={() => navigate('/')}
              style={{
                background: '#e0e0e0', color: '#333', border: 'none', padding: '0.75rem 1.5rem',
                borderRadius: '8px', cursor: 'pointer', fontWeight: '600', transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.background = '#bdbdbd'}
              onMouseLeave={(e) => e.target.style.background = '#e0e0e0'}
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: darkMode ? '#1c1c1c' : '#f4f7f6',
      color: darkMode ? '#e0e0e0' : '#333',
      fontFamily: "'Roboto', sans-serif",
      padding: '2rem'
    }}>
      <header style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '3rem', paddingBottom: '1.5rem', borderBottom: `1px solid ${darkMode ? '#333' : '#ddd'}`
      }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#3498db' }}>
            GADYS
          </h1>
        </Link>
        <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
          <button 
            onClick={toggleTheme}
            style={{
              background: 'transparent', border: 'none', color: darkMode ? '#fff' : '#000',
              fontSize: '1.5rem', cursor: 'pointer'
            }}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <Link to="/"><button style={{background: '#3498db', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px'}}>Voltar</button></Link>
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'flex-start'
        }}>
          {/* Coluna da Esquerda: Perfil e Ações */}
          <div style={{
            background: darkMode ? '#2a2a2a' : '#fff', borderRadius: '15px',
            padding: '2rem', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
          }}>
            <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1.5rem' }}>
              <div style={{
                width: '150px', height: '150px', borderRadius: '50%',
                background: profileData.foto ? `url(${profileData.foto})` : '#3498db',
                backgroundSize: 'cover', backgroundPosition: 'center',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '5rem', color: 'white', border: `4px solid ${darkMode ? '#333' : '#eee'}`
              }}>
                {!profileData.foto && '👤'}
              </div>
              <button
                onClick={() => setShowPhotoOptions(!showPhotoOptions)}
                style={{
                  position: 'absolute', bottom: '5px', right: '5px', background: '#fff',
                  border: '1px solid #ccc', borderRadius: '50%', width: '40px', height: '40px',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem', boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}
              >
                📷
              </button>
            </div>
            {showPhotoOptions && (
              <div style={{ background: darkMode ? '#333' : '#f9f9f9', padding: '1rem', borderRadius: '10px', marginTop: '-1rem', marginBottom: '1rem' }}>
                <input type="file" accept="image/*" onChange={handlePhotoChange} id="photoInput" style={{ display: 'none' }} />
                <button onClick={() => document.getElementById('photoInput').click()} style={{width: '100%', padding: '0.5rem', marginBottom: '0.5rem'}}>Escolher Foto</button>
                <div style={{display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '0.5rem'}}>
                  {['😊', '😎', '🤓', '😍'].map(emoji => (
                    <button key={emoji} onClick={() => handleEmojiSelect(emoji)} style={{fontSize: '1.5rem', background: 'none', border: '1px solid #ccc', borderRadius: '5px'}}>{emoji}</button>
                  ))}
                </div>
                <input type="url" placeholder="URL da imagem" value={urlInput} onChange={(e) => setUrlInput(e.target.value)} style={{width: 'calc(100% - 1rem)', padding: '0.5rem', marginBottom: '0.5rem'}}/>
                <button onClick={handleUrlSubmit} style={{width: '100%', padding: '0.5rem'}}>Usar URL</button>
              </div>
            )}
            <h2 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '0.5rem' }}>{profileData.nome}</h2>
            <p style={{ color: '#3498db', marginBottom: '1.5rem' }}>{profileData.email}</p>
            <button
              onClick={() => { setTempProfileData(profileData); setShowEditModal(true); }}
              style={{
                width: '100%', background: '#3498db', color: 'white', border: 'none',
                padding: '0.8rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold',
                marginBottom: '1rem', transition: 'background 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.background = '#2980b9'}
              onMouseLeave={(e) => e.target.style.background = '#3498db'}
            >
              Editar Perfil
            </button>
            <button
              onClick={() => {
                localStorage.removeItem('isLoggedIn'); localStorage.removeItem('userType');
                localStorage.removeItem('userName'); navigate('/');
              }}
              style={{
                width: '100%', background: '#e74c3c', color: 'white', border: 'none',
                padding: '0.8rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold',
                transition: 'background 0.3s'
              }}
               onMouseEnter={(e) => e.target.style.background = '#c0392b'}
              onMouseLeave={(e) => e.target.style.background = '#e74c3c'}
            >
              Sair
            </button>
          </div>

          {/* Coluna da Direita: Detalhes e Estatísticas */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{
              background: darkMode ? '#2a2a2a' : '#fff', borderRadius: '15px',
              padding: '2rem', boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', borderBottom: `2px solid #3498db`, paddingBottom: '0.5rem' }}>Minhas Estatísticas</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}>
                <div style={{textAlign: 'center', background: darkMode ? '#333' : '#f9f9f9', padding: '1rem', borderRadius: '10px'}}>
                  <p style={{fontSize: '2rem', fontWeight: 'bold', color: '#3498db'}}>{userStats.locaisAdicionados}</p>
                  <p style={{color: darkMode ? '#aaa' : '#666'}}>Locais Adicionados</p>
                </div>
                 <div style={{textAlign: 'center', background: darkMode ? '#333' : '#f9f9f9', padding: '1rem', borderRadius: '10px'}}>
                  <p style={{fontSize: '2rem', fontWeight: 'bold', color: '#3498db'}}>{userStats.avaliacoes}</p>
                  <p style={{color: darkMode ? '#aaa' : '#666'}}>Avaliações Feitas</p>
                </div>
                 <div style={{textAlign: 'center', background: darkMode ? '#333' : '#f9f9f9', padding: '1rem', borderRadius: '10px'}}>
                  <p style={{fontSize: '2rem', fontWeight: 'bold', color: '#3498db'}}>{userStats.comentarios}</p>
                  <p style={{color: darkMode ? '#aaa' : '#666'}}>Comentários Feitos</p>
                </div>
              </div>
            </div>

            <div style={{
              background: darkMode ? '#2a2a2a' : '#fff', borderRadius: '15px',
              padding: '2rem', boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', borderBottom: `2px solid #3498db`, paddingBottom: '0.5rem' }}>Ações Rápidas</h3>
              <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
                  <Link to="/adicionar-locais.html" style={{textDecoration: 'none'}}>
                    <button style={{background: '#2ecc71', color: 'white', border: 'none', padding: '0.8rem 1.2rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold'}}>Adicionar Local</button>
                  </Link>
                   <Link to="#" style={{textDecoration: 'none'}}>
                    <button style={{background: '#9b59b6', color: 'white', border: 'none', padding: '0.8rem 1.2rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold'}}>Minhas Avaliações</button>
                  </Link>
                   <Link to="/" style={{textDecoration: 'none'}}>
                    <button style={{background: '#f1c40f', color: 'white', border: 'none', padding: '0.8rem 1.2rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold'}}>Página Inicial</button>
                  </Link>
              </div>
            </div>
          </div>
        </div>

        {showEditModal && (
          <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center',
            justifyContent: 'center', zIndex: 10000
          }}>
            <div style={{
              background: darkMode ? '#333' : 'white', padding: '2.5rem',
              borderRadius: '15px', maxWidth: '450px', width: '90%',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}>
              <h3 style={{ marginBottom: '2rem', textAlign: 'center', color: '#3498db', fontSize: '1.8rem' }}>Editar Perfil</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <input type="text" value={tempProfileData.nome} onChange={(e) => setTempProfileData({...tempProfileData, nome: e.target.value})} placeholder="Nome" style={{width: '100%', padding: '0.8rem', borderRadius: '8px', border: `1px solid ${darkMode ? '#555' : '#ccc'}`, background: darkMode ? '#444' : '#fff', color: darkMode ? '#fff' : '#000'}} />
                <input type="email" value={tempProfileData.email} onChange={(e) => setTempProfileData({...tempProfileData, email: e.target.value})} placeholder="Email" style={{width: '100%', padding: '0.8rem', borderRadius: '8px', border: `1px solid ${darkMode ? '#555' : '#ccc'}`, background: darkMode ? '#444' : '#fff', color: darkMode ? '#fff' : '#000'}} />
                <input type="password" value={tempProfileData.novaSenha || ''} onChange={(e) => setTempProfileData({...tempProfileData, novaSenha: e.target.value})} placeholder="Nova Senha (opcional)" style={{width: '100%', padding: '0.8rem', borderRadius: '8px', border: `1px solid ${darkMode ? '#555' : '#ccc'}`, background: darkMode ? '#444' : '#fff', color: darkMode ? '#fff' : '#000'}} />
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem' }}>
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
                  style={{
                    flex: 1, background: '#3498db', color: 'white', border: 'none',
                    padding: '0.8rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold'
                  }}
                >
                  Salvar
                </button>
                <button
                  onClick={() => setShowEditModal(false)}
                  style={{
                    flex: 1, background: '#ccc', color: '#333', border: 'none',
                    padding: '0.8rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold'
                  }}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer style={{
        textAlign: 'center', padding: '2rem 0', marginTop: '4rem',
        borderTop: `1px solid ${darkMode ? '#333' : '#ddd'}`, color: darkMode ? '#888' : '#666'
      }}>
        <p>&copy; {new Date().getFullYear()} GADYS. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default PerfilPage
