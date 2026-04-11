import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LugaresPage.css'; // Import the CSS file

function LugaresPage() {
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })

  const toggleTheme = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
  }

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      .nav-links.active {
        right: 0 !important;
      }
      .nav-overlay.active {
        opacity: 1 !important;
        visibility: visible !important;
      }
      .nav-links li:hover .dropdown-content {
        display: block !important;
      }
    `
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  const lugares = [
    {
      nome: 'Cristo Redentor',
      cidade: 'Rio de Janeiro - RJ',
      descricao: 'Uma das Sete Maravilhas do Mundo Moderno',
      imagem: '/cristo.jpg'
    },
    {
      nome: 'Pão de Açúcar',
      cidade: 'Rio de Janeiro - RJ',
      descricao: 'Cartão postal do Rio de Janeiro',
      imagem: '/pao.jpg'
    },
    {
      nome: 'Cataratas do Iguaçu',
      cidade: 'Foz do Iguaçu - PR',
      descricao: "Uma das maiores quedas d'água do mundo",
      imagem: '/cata.jpg'
    },
    {
      nome: 'Pelourinho',
      cidade: 'Salvador - BA',
      descricao: 'Centro histórico de Salvador',
      imagem: '/pelo.jpg'
    },
    {
      nome: 'Fernando de Noronha',
      cidade: 'Pernambuco - PE',
      descricao: 'Paraíso ecológico brasileiro',
      imagem: '/fer.jpg'
    },
    {
      nome: 'Pantanal',
      cidade: 'Mato Grosso - MT',
      descricao: 'Maior planície alagável do mundo',
      imagem: '/pan.jpg'
    }
  ]

  return (
    <div className={`lugares-page ${darkMode ? 'dark' : ''}`}>
      <div className="background-gradient" />

      <header className="lugares-header">
        <div className="lugares-logo-container">
          <img src="/images/logos/logo.png" alt="GADYS" className="lugares-logo" />
          <span className="lugares-title-header">GADYS</span>
        </div>
        <div className="lugares-header-actions">
          <button onClick={toggleTheme} className="theme-toggle-button">
            {darkMode ? '☀️' : '🌙'}
          </button>
          <div style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer', zIndex: 1002 }} onClick={() => document.querySelector('.nav-links').classList.toggle('active')}>
            <span style={{ width: '25px', height: '3px', background: 'white', margin: '3px 0', transition: '0.3s' }} />
            <span style={{ width: '25px', height: '3px', background: 'white', margin: '3px 0', transition: '0.3s' }} />
            <span style={{ width: '25px', height: '3px', background: 'white', margin: '3px 0', transition: '0.3s' }} />
          </div>
        </div>
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0, 0, 0, 0.5)', zIndex: 1000, opacity: 0, visibility: 'hidden', transition: 'all 0.3s ease' }} className="nav-overlay" onClick={() => document.querySelector('.nav-links').classList.remove('active')} />
        <ul className="nav-links" style={{ position: 'fixed', top: 0, right: '-100%', width: '300px', height: '100vh', background: '#1a237e', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '2rem', margin: 0, padding: '4rem 0', listStyle: 'none', transition: 'right 0.3s ease', zIndex: 1001, overflowY: 'scroll', boxShadow: '-5px 0 15px rgba(0,0,0,0.1)' }}>
        <li><Link to="/" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem' }}>Início</Link></li>
        <li><a href="#" style={{ color: '#ccc', textDecoration: 'none', padding: '0.5rem 1rem', cursor: 'not-allowed' }}>Lugares (atual)</a></li>
        <li><Link to="/mapa" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem' }}>Mapa</Link></li>
        <li><Link to="/adicionar-local" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem' }}>Adicionar Local</Link></li>
        <li><Link to="/perfil" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem' }}>Meu Perfil</Link></li>
        <li><Link to="/sobre" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem' }}>Sobre</Link></li>
        <li><Link to="/contato" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem' }}>Contato</Link></li>
      </ul>
      </header>

      <main className="lugares-main">
        <section className="hero-section">
          <h1 className="hero-title">
            Lugares Mais Visitados
          </h1>
          <p className="hero-subtitle">
            Descubra os destinos mais procurados pelos turistas<br />
            <span className="hero-subtitle-highlight">Explore as maravilhas do Brasil</span>
          </p>
        </section>

        <section className="lugares-grid-section">
          <div className="lugares-grid">
            {lugares.map((lugar, index) => (
              <div key={index} className="lugar-card">
                <img src={lugar.imagem} alt={lugar.nome} className="lugar-card-image" />
                <div className="lugar-card-content">
                  <h3 className="lugar-card-title">{lugar.nome}</h3>
                  <p className="lugar-card-city">{lugar.cidade}</p>
                  <p className="lugar-card-description">{lugar.descricao}</p>
                  <Link to={
                    lugar.nome === 'Cristo Redentor' ? '/cristo-redentor' :
                    lugar.nome === 'Pão de Açúcar' ? '/pao-de-acucar' :
                    lugar.nome === 'Cataratas do Iguaçu' ? '/cataratas-iguacu' :
                    lugar.nome === 'Pelourinho' ? '/pelourinho' :
                    lugar.nome === 'Fernando de Noronha' ? '/fernando-noronha' :
                    lugar.nome === 'Pantanal' ? '/pantanal' : '#'}
                    className="lugar-card-link">
                    Visitar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="actions-section">
          <div className="actions-container">
            <Link to="/" className="action-link action-link-primary">
              Voltar ao Início
            </Link>
            <Link to="/mapa" className="action-link action-link-secondary">
              Ver no Mapa
            </Link>
          </div>
        </section>
      </main>

      <footer className="lugares-footer">
        <p>&copy; 2025 GADYS. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default LugaresPage
