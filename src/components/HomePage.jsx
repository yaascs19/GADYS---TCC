import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })
  const [isLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true'
  })

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      const slides = document.querySelectorAll('.carousel-slide')
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
  }, [])

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`} style={{
      background: darkMode ? 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)' : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      color: darkMode ? 'white' : '#2c3e50',
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
      minHeight: '100vh',
      overflowX: 'hidden'
    }}>
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
          <button onClick={toggleDarkMode} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}>
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
          {(localStorage.getItem('userType') || '').toUpperCase() === 'ADM' && (
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/painel-adm'); setMenuOpen(false) }}
                style={{ color: '#ffd700', textDecoration: 'none', padding: '0.5rem 1rem', fontWeight: '700', borderRadius: '5px', display: 'block' }}>
                Painel Admin
              </a>
            </li>
          )}
        </ul>
      </header>

            <main className="main">
        <section className="hero">
          <div className="carousel">
            <div className="carousel-slide active">
              <div className="hero-content">
                {isLoggedIn && localStorage.getItem('userName') && (
                  <div className="welcome-box">
                    <h3>Bem-vindo(a), {localStorage.getItem('userName') || 'Usuário'}!</h3>
                    <p>Tipo de acesso: {(localStorage.getItem('userType') || '').toUpperCase() === 'ADM' ? 'Administrador' : 'Usuário'}</p>
                  </div>
                )}
                <h2>Descubra Lugares Incríveis</h2>
                <p>Explore pontos de interesse únicos e encontre experiências inesquecíveis</p>
                <button className="cta-button" onClick={() => navigate('/lugares')}>Começar Exploração</button>
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
                    <p>Tipo de acesso: {(localStorage.getItem('userType') || '').toUpperCase() === 'ADM' ? 'Administrador' : 'Usuário'}</p>
                  </div>
                )}
                <h2>Descubra Lugares Incríveis</h2>
                <p>Explore pontos de interesse únicos e encontre experiências inesquecíveis</p>
                <button className="cta-button" onClick={() => navigate('/lugares')}>Começar Exploração</button>
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
                    <p>Tipo de acesso: {(localStorage.getItem('userType') || '').toUpperCase() === 'ADM' ? 'Administrador' : 'Usuário'}</p>
                  </div>
                )}
                <h2>Descubra Lugares Incríveis</h2>
                <p>Explore pontos de interesse únicos e encontre experiências inesquecíveis</p>
                <button className="cta-button" onClick={() => navigate('/lugares')}>Começar Exploração</button>
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

export default HomePage