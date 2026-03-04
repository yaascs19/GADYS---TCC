import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function MonumentosSaoPaulo() {
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })

  const monumentos = [
    {
      nome: 'Monumento à Independência',
      desc: 'Marco histórico da independência do Brasil, localizado no Ipiranga',
      detalhes: 'Construído em 1922, abriga o Museu Paulista e marca o local do Grito da Independência',
      img: '/images/monumentos/independencia.webp',
      localizacao: 'Ipiranga, São Paulo'
    },
    {
      nome: 'Teatro Municipal',
      desc: 'Majestoso teatro inaugurado em 1911, símbolo cultural da cidade',
      detalhes: 'Inspirado na Ópera de Paris, palco da Semana de Arte Moderna de 1922',
      img: '/images/geral/Teatro_Municipal_de_São_Paulo_8.jpg',
      localizacao: 'Centro de São Paulo'
    },
    {
      nome: 'Catedral da Sé',
      desc: 'Imponente catedral neogótica, uma das maiores do mundo',
      detalhes: 'Construída entre 1913 e 1954, possui torres de 92 metros de altura',
      img: '/images/monumentos/Catedral_Sé.jpg',
      localizacao: 'Praça da Sé, Centro'
    },
    {
      nome: 'Edifício Copan',
      desc: 'Ícone da arquitetura moderna brasileira projetado por Oscar Niemeyer',
      detalhes: 'Inaugurado em 1966, é um dos maiores edifícios residenciais do mundo',
      img: '/images/monumentos/copan.webp',
      localizacao: 'Centro de São Paulo'
    },
    {
      nome: 'Estação da Luz',
      desc: 'Estação ferroviária histórica com arquitetura vitoriana',
      detalhes: 'Inaugurada em 1901, hoje abriga a Pinacoteca do Estado',
      img: '/images/monumentos/luz.jpg',
      localizacao: 'Bom Retiro, São Paulo'
    },
    {
      nome: 'Mercado Municipal',
      desc: 'Mercado histórico famoso por sua arquitetura e gastronomia',
      detalhes: 'Inaugurado em 1933, conhecido pelos vitrais e pela diversidade gastronômica',
      img: '/images/monumentos/mercadaosp.jpg',
      localizacao: 'Centro de São Paulo'
    }
  ]

  const toggleTheme = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    
    // Atualizar favicon
    document.querySelectorAll('link[rel="icon"]').forEach(link => link.remove())
    const favicon = document.createElement('link')
    favicon.rel = 'icon'
    favicon.type = 'image/png'
    favicon.href = '/logo.png'
    document.head.appendChild(favicon)
    
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

  return (
    <div style={{
      minHeight: '100vh',
      background: darkMode ? 'linear-gradient(135deg, #2d0a0a 0%, #4d1414 50%, #5d1a1a 100%)' : 'linear-gradient(135deg, #ffe8e8 0%, #ffcccb 100%)',
      color: darkMode ? '#ffe8e8' : '#8B0000',
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
      position: 'relative',
      overflowX: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: darkMode ? 'radial-gradient(circle at 20% 80%, rgba(220, 20, 60, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 0, 0, 0.15) 0%, transparent 50%)' : 'radial-gradient(circle at 20% 80%, rgba(220, 20, 60, 0.1) 0%, transparent 50%)',
        zIndex: 1
      }} />

      <header style={{
        background: darkMode ? 'rgba(45, 10, 10, 0.8)' : '#8B0000',
        backdropFilter: 'blur(30px)',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        borderBottom: '1px solid rgba(220, 20, 60, 0.3)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img 
            src="/images/logos/logo.png" 
            alt="GADYS" 
            style={{
              height: '45px',
              background: 'linear-gradient(135deg, #DC143C, #B22222)',
              borderRadius: '50%',
              padding: '8px'
            }}
          />
          <span style={{ fontSize: '1.5rem', fontWeight: '700', letterSpacing: '1px', color: 'white' }}>GADYS</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            onClick={toggleTheme}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              fontSize: '1.2rem',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '10px',
              transition: 'all 0.3s'
            }}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
              zIndex: 1002
            }}
            onClick={() => document.querySelector('.nav-links').classList.toggle('active')}
          >
            <span style={{
              width: '25px',
              height: '3px',
              background: 'white',
              margin: '3px 0',
              transition: '0.3s'
            }} />
            <span style={{
              width: '25px',
              height: '3px',
              background: 'white',
              margin: '3px 0',
              transition: '0.3s'
            }} />
            <span style={{
              width: '25px',
              height: '3px',
              background: 'white',
              margin: '3px 0',
              transition: '0.3s'
            }} />
          </div>
        </div>
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
            opacity: 0,
            visibility: 'hidden',
            transition: 'all 0.3s ease'
          }}
          className="nav-overlay"
          onClick={() => document.querySelector('.nav-links').classList.remove('active')}
        />
        <ul 
          className="nav-links"
          style={{
            position: 'fixed',
            top: 0,
            right: '-100%',
            width: '300px',
            height: '100vh',
            background: '#8B0000',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '2rem',
            margin: 0,
            padding: '4rem 0',
            listStyle: 'none',
            transition: 'right 0.3s ease',
            zIndex: 1001,
            overflowY: 'scroll',
            boxShadow: '-5px 0 15px rgba(0,0,0,0.1)'
          }}
        >
          <li><Link to="/" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem' }}>Início</Link></li>
          <li><Link to="/sao-paulo" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem' }}>São Paulo</Link></li>
          <li><a href="#" style={{ color: '#ccc', textDecoration: 'none', padding: '0.5rem 1rem', cursor: 'not-allowed' }}>Monumentos (atual)</a></li>
          <li><Link to="/lugares" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem' }}>Lugares</Link></li>
          <li><Link to="/mapa" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem' }}>Mapa</Link></li>
          <li><Link to="/perfil" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem' }}>Meu Perfil</Link></li>
          <li><Link to="/sobre" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem' }}>Sobre</Link></li>
          <li><Link to="/contato" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem' }}>Contato</Link></li>
        </ul>
      </header>

      <main style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 10
      }}>
        <section style={{
          textAlign: 'center',
          padding: '8rem 0 6rem',
          background: darkMode ? 'linear-gradient(135deg, rgba(220, 20, 60, 0.1) 0%, rgba(139, 0, 0, 0.05) 100%)' : 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)',
          borderRadius: '0 0 50px 50px',
          marginBottom: '6rem'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #DC143C 0%, #B22222 50%, #8B0000 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '2rem',
            letterSpacing: '-3px',
            lineHeight: '1.1'
          }}>
            Monumentos de São Paulo
          </h1>
          
          <p style={{
            fontSize: '1.4rem',
            opacity: 0.8,
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontWeight: '300'
          }}>
            Patrimônios históricos que contam a rica história paulistana
          </p>
        </section>

        <section style={{
          background: 'linear-gradient(135deg, rgba(220, 20, 60, 0.1) 0%, rgba(139, 0, 0, 0.1) 100%)',
          padding: '5rem 4rem',
          borderRadius: '30px',
          marginBottom: '6rem',
          border: '1px solid rgba(220, 20, 60, 0.2)',
          boxShadow: '0 30px 60px rgba(220, 20, 60, 0.1)'
        }}>
          <h2 style={{ 
            fontSize: '3rem', 
            marginBottom: '4rem', 
            textAlign: 'center',
            fontWeight: '700'
          }}>Monumentos Históricos</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '3rem'
          }}>
            {monumentos.map((monumento, index) => (
              <div
                key={index}
                style={{
                  background: darkMode ? 'linear-gradient(135deg, rgba(45, 10, 10, 0.8) 0%, rgba(77, 20, 20, 0.6) 100%)' : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255, 232, 232, 0.7) 100%)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(220, 20, 60, 0.1)',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(220, 20, 60, 0.2)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(220, 20, 60, 0.1)'
                }}
              >
                <img 
                  src={monumento.img}
                  alt={monumento.nome}
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ padding: '2rem' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '1rem',
                    color: '#DC143C',
                    fontWeight: '700'
                  }}>
                    {monumento.nome}
                  </h3>
                  <p style={{
                    opacity: 0.8,
                    lineHeight: 1.6,
                    marginBottom: '1rem'
                  }}>
                    {monumento.desc}
                  </p>
                  <p style={{
                    fontSize: '0.9rem',
                    opacity: 0.7,
                    marginBottom: '1rem',
                    fontStyle: 'italic'
                  }}>
                    {monumento.detalhes}
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '1.5rem',
                    color: '#DC143C',
                    fontSize: '0.9rem'
                  }}>
                    📍 {monumento.localizacao}
                  </div>
                  <button 
                    onClick={() => {
                      if (monumento.nome === 'Monumento à Independência') {
                        navigate('/monumento-independencia')
                      } else if (monumento.nome === 'Teatro Municipal') {
                        navigate('/teatro-municipal-sp')
                      } else if (monumento.nome === 'Catedral da Sé') {
                        navigate('/catedral-se')
                      } else if (monumento.nome === 'Edifício Copan') {
                        navigate('/edificio-copan')
                      } else if (monumento.nome === 'Estação da Luz') {
                        navigate('/estacao-luz')
                      } else if (monumento.nome === 'Mercado Municipal') {
                        navigate('/mercado-municipal-sp')
                      }
                    }}
                    style={{
                      background: 'linear-gradient(135deg, #DC143C 0%, #B22222 100%)',
                      color: 'white',
                      border: 'none',
                      padding: '0.8rem 2rem',
                      borderRadius: '25px',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: '600',
                      transition: 'all 0.3s'
                    }}
                  >
                    Saiba Mais
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{
          textAlign: 'center',
          padding: '4rem 0 6rem'
        }}>
          <div style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link 
              to="/sao-paulo"
              style={{
                background: 'linear-gradient(135deg, #DC143C 0%, #B22222 100%)',
                color: 'white',
                border: 'none',
                padding: '1.5rem 3rem',
                borderRadius: '50px',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: '600',
                transition: 'all 0.3s',
                textDecoration: 'none'
              }}
            >
              Voltar a São Paulo
            </Link>
            
            <Link 
              to="/mapa"
              style={{
                background: 'transparent',
                color: darkMode ? '#ffe8e8' : '#8B0000',
                border: '2px solid #DC143C',
                padding: '1.5rem 3rem',
                borderRadius: '50px',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: '600',
                transition: 'all 0.3s',
                textDecoration: 'none'
              }}
            >
              Ver no Mapa
            </Link>
          </div>
        </section>
      </main>

      <footer style={{
        background: darkMode ? 'rgba(45, 10, 10, 0.9)' : 'rgba(139, 0, 0, 0.9)',
        textAlign: 'center',
        padding: '3rem',
        borderTop: '1px solid rgba(220, 20, 60, 0.3)',
        position: 'relative',
        zIndex: 10
      }}>
        <p style={{ opacity: 0.7, fontSize: '1rem', color: 'white' }}>&copy; 2025 GADYS. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default MonumentosSaoPaulo