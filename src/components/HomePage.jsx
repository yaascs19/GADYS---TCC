import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import NavbarShared from './NavbarShared'

function HomePage() {
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })
  const [menuOpen, setMenuOpen] = useState(false)
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
      <NavbarShared darkMode={darkMode} toggleDarkMode={toggleDarkMode} paginaAtual="/" />

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