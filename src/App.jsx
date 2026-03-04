import { useEffect, useState } from 'react'
import './App.css'
import { updateFavicon } from './utils/favicon'
import Login from './Login'
import AdminPanel from './AdminPanel'
import Home from './components/Home'
import Amazonas from './components/Amazonas'
import RioDeJaneiro from './components/RioDeJaneiro'
import Lugares from './components/Lugares'
import SobrePage from './components/SobrePage'
import ContatoPage from './components/ContatoPage'
import PerfilPage from './components/PerfilPage'
import MapaPage from './components/MapaPage'
import LugaresPage from './components/LugaresPage'
import CristoRedentor from './components/CristoRedentor'
import Para from './components/Para'
import DestinosPara from './components/DestinosPara'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true'
  })
  
  const [currentPage, setCurrentPage] = useState(() => {
    // Sempre iniciar na página home
    return 'home'
  })
  
  const [userType, setUserType] = useState(() => {
    return localStorage.getItem('userType') || 'usuario'
  })
  
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })

  const handleLogin = async (loginUserType, userName) => {
    setIsLoggedIn(true)
    setUserType(loginUserType)
    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('userType', loginUserType)
    localStorage.setItem('userName', userName)
    
    try {
      await fetch('http://localhost:3001/api/usuarios/acesso', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: userName,
          tipoUsuario: loginUserType
        })
      })
    } catch (error) {
      const userAccess = JSON.parse(localStorage.getItem('userAccess')) || []
      const existingUser = userAccess.find(user => user.userName === userName)
      
      if (existingUser) {
        existingUser.lastAccess = new Date().toLocaleString('pt-BR')
        existingUser.accessCount += 1
      } else {
        userAccess.push({
          userName: userName,
          userType: loginUserType,
          lastAccess: new Date().toLocaleString('pt-BR'),
          accessCount: 1,
          ip: 'localhost'
        })
      }
      
      localStorage.setItem('userAccess', JSON.stringify(userAccess))
    }
    
    setCurrentPage('home')
  }

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserType('usuario')
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userType')
    localStorage.removeItem('userName')
    setCurrentPage('login')
  }

  useEffect(() => {
    updateFavicon()
    if (currentPage === 'login') return

    const timer = setTimeout(() => {
      const slides = document.querySelectorAll('.carousel-slide')
      const dots = document.querySelectorAll('.nav-dot')
      let currentSlide = 0
      let autoSlideInterval

      const showSlide = (index) => {
        if (slides.length === 0) return
        
        slides.forEach(slide => slide.classList.remove('active'))
        document.querySelectorAll('.nav-dot').forEach(dot => dot.classList.remove('active'))
        
        if (slides[index]) {
          slides[index].classList.add('active')
          document.querySelectorAll(`[data-slide="${index}"]`).forEach(dot => {
            dot.classList.add('active')
          })
        }
      }

      const startAutoSlide = () => {
        autoSlideInterval = setInterval(() => {
          currentSlide = (currentSlide + 1) % slides.length
          showSlide(currentSlide)
        }, 2000)
      }

      const stopAutoSlide = () => {
        if (autoSlideInterval) {
          clearInterval(autoSlideInterval)
        }
      }

      document.querySelectorAll('.nav-dot').forEach(dot => {
        dot.addEventListener('click', (e) => {
          e.preventDefault()
          stopAutoSlide()
          const targetSlide = parseInt(dot.getAttribute('data-slide'))
          currentSlide = targetSlide
          showSlide(currentSlide)
          startAutoSlide()
        })
      })

      if (slides.length > 0) {
        startAutoSlide()
      }

      return () => {
        stopAutoSlide()
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [isLoggedIn, currentPage, userType])

  if (currentPage === 'sobrepage') {
    return <SobrePage setCurrentPage={setCurrentPage} />
  }
  
  if (currentPage === 'contatopage') {
    return <ContatoPage setCurrentPage={setCurrentPage} />
  }
  
  if (currentPage === 'perfilpage') {
    return <PerfilPage setCurrentPage={setCurrentPage} />
  }
  
  if (currentPage === 'mapapage') {
    return <MapaPage setCurrentPage={setCurrentPage} />
  }
  
  if (currentPage === 'lugarespage') {
    return <LugaresPage setCurrentPage={setCurrentPage} />
  }
  
  if (currentPage === 'cristoredentor') {
    return <CristoRedentor setCurrentPage={setCurrentPage} />
  }
  
  if (currentPage === 'riodejaneiro') {
    return <RioDeJaneiro setCurrentPage={setCurrentPage} />
  }
  
  if (currentPage === 'para') {
    return <Para setCurrentPage={setCurrentPage} />
  }

  if (currentPage === 'destinospara') {
    return <DestinosPara />
  }
  
  if (currentPage === 'login') {
    return <Login onLogin={handleLogin} />
  }

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`} style={{
      background: darkMode ? 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)' : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      color: darkMode ? 'white' : '#2c3e50',
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
      minHeight: '100vh',
      overflowX: 'hidden'
    }}>
      <header className="header" style={{
        background: darkMode ? 'rgba(15, 12, 41, 0.8)' : '#1a237e',
        backdropFilter: 'blur(30px)',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <nav className="nav" style={{ display: 'contents' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img src="/images/logos/logo.png" alt="GADYS" className="logo" style={{height: '40px', background: 'linear-gradient(135deg, #667eea, #764ba2)', borderRadius: '50%', padding: '8px'}} />
            <span style={{ fontSize: '1.5rem', fontWeight: '700', letterSpacing: '1px', color: 'white' }}>GADYS</span>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <button 
              onClick={(e) => {e.preventDefault(); toggleDarkMode()}} 
              style={{background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer'}}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            <div className="hamburger" onClick={() => document.querySelector('.nav-links').classList.toggle('active')}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="nav-overlay" onClick={() => document.querySelector('.nav-links').classList.remove('active')}></div>
          <ul className="nav-links" style={{paddingTop: '5rem', justifyContent: 'flex-start', gap: '2rem'}}>
            <li><a href="#" style={{color: '#ccc', cursor: 'not-allowed'}} onClick={(e) => e.preventDefault()}>Início (atual)</a></li>
            <li><a href="#">Acre</a></li>
            <li><a href="#">Alagoas</a></li>
            <li><a href="#">Amapá</a></li>
            <li><a href="/amazonas.html">Amazonas</a></li>
            <li><a href="#">Ceará</a></li>
            <li><a href="#">Distrito Federal</a></li>
            <li><a href="#">Espírito Santo</a></li>
            <li><a href="#">Goiás</a></li>
            <li><a href="#">Maranhão</a></li>
            <li><a href="#">Mato Grosso</a></li>
            <li><a href="#">Mato Grosso do Sul</a></li>
            <li><a href="#">Minas Gerais</a></li>
            <li><a href="#" onClick={(e) => {e.preventDefault(); console.log('Clicou Pará'); setCurrentPage('para'); document.querySelector('.nav-links').classList.remove('active')}}>Pará</a></li>
            <li><a href="#" onClick={(e) => {e.preventDefault(); console.log('Clicou Destinos Pará'); setCurrentPage('destinospara'); document.querySelector('.nav-links').classList.remove('active')}}>Destinos do Pará</a></li>
            <li><a href="#">Paraíba</a></li>
            <li><a href="#">Paraná</a></li>
            <li><a href="#">Pernambuco</a></li>
            <li><a href="#">Piauí</a></li>
            <li><a href="#" onClick={(e) => {e.preventDefault(); console.log('Clicou Rio de Janeiro'); setCurrentPage('riodejaneiro'); document.querySelector('.nav-links').classList.remove('active')}}>Rio de Janeiro</a></li>
            <li><a href="#">Rio Grande do Norte</a></li>
            <li><a href="#">Rio Grande do Sul</a></li>
            <li><a href="#">Rondônia</a></li>
            <li><a href="#">Roraima</a></li>
            <li><a href="#">Santa Catarina</a></li>
            <li><a href="#">São Paulo</a></li>
            <li><a href="#">Sergipe</a></li>
            <li><a href="#">Tocantins</a></li>
            
            <li><a href="#" onClick={() => {setCurrentPage('lugarespage'); document.querySelector('.nav-links').classList.remove('active')}}>Lugares</a></li>
            <li><a href="#" onClick={() => {setCurrentPage('mapapage'); document.querySelector('.nav-links').classList.remove('active')}}>Mapa</a></li>
            <li><a href="#" onClick={(e) => {e.preventDefault(); if (!localStorage.getItem('isLoggedIn')) setCurrentPage('login'); else window.location.href='/adicionar-locais.html'; document.querySelector('.nav-links').classList.remove('active')}}>Adicionar Local</a></li>
            <li><a href="#" onClick={() => {setCurrentPage('perfilpage'); document.querySelector('.nav-links').classList.remove('active')}}>Meu Perfil</a></li>
            <li><a href="#" onClick={() => {setCurrentPage('sobrepage'); document.querySelector('.nav-links').classList.remove('active')}}>Sobre</a></li>
            <li><a href="#" onClick={() => {setCurrentPage('contatopage'); document.querySelector('.nav-links').classList.remove('active')}}>Contato</a></li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <div className="carousel">
            <div className="carousel-slide active">
              <div className="hero-content">
                {isLoggedIn && localStorage.getItem('userName') && (
                  <div className="welcome-box">
                    <h3>Bem-vindo(a), {localStorage.getItem('userName') || 'Usuário'}!</h3>
                    <p>Tipo de acesso: {localStorage.getItem('userType') === 'adm' ? 'Administrador' : 'Usuário'}</p>
                  </div>
                )}
                <h2>Descubra Lugares Incríveis</h2>
                <p>Explore pontos de interesse únicos e encontre experiências inesquecíveis</p>
                <button className="cta-button" onClick={() => setCurrentPage('lugarespage')}>Começar Exploração</button>
                <div className="carousel-nav">
                  <span className="nav-dot active" data-slide="0"></span>
                  <span className="nav-dot" data-slide="1"></span>
                  <span className="nav-dot" data-slide="2"></span>
                </div>
              </div>
            </div>
            <div className="carousel-slide">
              <div className="hero-content">
                {isLoggedIn && localStorage.getItem('userName') && (
                  <div className="welcome-box">
                    <h3>Bem-vindo(a), {localStorage.getItem('userName') || 'Usuário'}!</h3>
                    <p>Tipo de acesso: {localStorage.getItem('userType') === 'adm' ? 'Administrador' : 'Usuário'}</p>
                  </div>
                )}
                <h2>Descubra Lugares Incríveis</h2>
                <p>Explore pontos de interesse únicos e encontre experiências inesquecíveis</p>
                <button className="cta-button" onClick={() => setCurrentPage('lugarespage')}>Começar Exploração</button>
                <div className="carousel-nav">
                  <span className="nav-dot" data-slide="0"></span>
                  <span className="nav-dot active" data-slide="1"></span>
                  <span className="nav-dot" data-slide="2"></span>
                </div>
              </div>
            </div>
            <div className="carousel-slide">
              <div className="hero-content">
                {isLoggedIn && localStorage.getItem('userName') && (
                  <div className="welcome-box">
                    <h3>Bem-vindo(a), {localStorage.getItem('userName') || 'Usuário'}!</h3>
                    <p>Tipo de acesso: {localStorage.getItem('userType') === 'adm' ? 'Administrador' : 'Usuário'}</p>
                  </div>
                )}
                <h2>Descubra Lugares Incríveis</h2>
                <p>Explore pontos de interesse únicos e encontre experiências inesquecíveis</p>
                <button className="cta-button" onClick={() => setCurrentPage('lugarespage')}>Começar Exploração</button>
                <div className="carousel-nav">
                  <span className="nav-dot" data-slide="0"></span>
                  <span className="nav-dot" data-slide="1"></span>
                  <span className="nav-dot active" data-slide="2"></span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 GADYS. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App
