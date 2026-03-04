import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Bahia() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })
  const [secaoAtiva, setSecaoAtiva] = useState('lugares')
  const [categoriaAtiva, setCategoriaAtiva] = useState('todos')
  
  const atrativos = {
    monumentos: [
      { nome: 'Pelourinho', desc: 'Centro histórico colonial com arquitetura preservada', img: 'pelourinho.jpg', horario: '24 horas', preco: 'Gratuito' },
      { nome: 'Elevador Lacerda', desc: 'Elevador histórico conectando cidade alta e baixa', img: 'elevador-lacerda.jpg', horario: 'Diário: 6h-23h', preco: 'R$ 0,15' },
      { nome: 'Igreja do Bonfim', desc: 'Igreja famosa pelas fitinhas do Senhor do Bonfim', img: 'bonfim.jpg', horario: 'Ter-Dom: 6h30-18h', preco: 'Gratuito' },
      { nome: 'Farol da Barra', desc: 'Primeiro farol do Brasil com museu náutico', img: 'farol-barra.jpg', horario: 'Ter-Dom: 9h-18h', preco: 'R$ 10,00' },
      { nome: 'Casa de Jorge Amado', desc: 'Museu dedicado ao escritor baiano', img: 'casa-jorge-amado.jpg', horario: 'Ter-Sáb: 10h-18h', preco: 'R$ 5,00' },
      { nome: 'Teatro Castro Alves', desc: 'Principal teatro da Bahia com arquitetura moderna', img: 'teatro-castro-alves.jpg', horario: 'Conforme programação', preco: 'Variável' }
    ],
    natureza: [
      { nome: 'Praia do Forte', desc: 'Praia paradisíaca com projeto Tamar', img: 'praia-forte.jpg', horario: '24 horas', preco: 'Gratuito' },
      { nome: 'Chapada Diamantina', desc: 'Parque nacional com cachoeiras e grutas', img: 'chapada-diamantina.jpg', horario: 'Diário: 8h-17h', preco: 'R$ 25,00' },
      { nome: 'Morro de São Paulo', desc: 'Ilha paradisíaca sem carros', img: 'morro-sao-paulo.jpg', horario: '24 horas', preco: 'Gratuito' },
      { nome: 'Praia de Itacaré', desc: 'Praia com ondas perfeitas para surf', img: 'itacare.jpg', horario: '24 horas', preco: 'Gratuito' },
      { nome: 'Parque Nacional Marinho de Abrolhos', desc: 'Santuário das baleias jubarte', img: 'abrolhos.jpg', horario: 'Tours programados', preco: 'R$ 200-400' },
      { nome: 'Cachoeira da Fumaça', desc: 'Segunda maior cachoeira do Brasil', img: 'cachoeira-fumaca.jpg', horario: 'Diário: 8h-16h', preco: 'R$ 25,00' }
    ],
    cultura: [
      { nome: 'Carnaval de Salvador', desc: 'Maior festa de rua do mundo com trios elétricos', img: 'carnaval-salvador.jpg', horario: 'Fevereiro/Março', preco: 'R$ 80-1000' },
      { nome: 'Axé Music', desc: 'Ritmo musical nascido na Bahia nos anos 80', img: 'axe-music.jpg', horario: 'Shows variados', preco: 'R$ 40-200' },
      { nome: 'Capoeira', desc: 'Arte marcial afro-brasileira patrimônio da humanidade', img: 'capoeira.jpg', horario: 'Rodas permanentes', preco: 'Gratuito a R$ 30' },
      { nome: 'Candomblé', desc: 'Religião afro-brasileira com terreiros históricos', img: 'candomble.jpg', horario: 'Cerimônias específicas', preco: 'Gratuito' },
      { nome: 'Festa de Iemanjá', desc: 'Celebração à rainha do mar em 2 de fevereiro', img: 'iemanja.jpg', horario: '2 de fevereiro', preco: 'Gratuito' },
      { nome: 'Lavagem do Bonfim', desc: 'Festa religiosa tradicional em janeiro', img: 'lavagem-bonfim.jpg', horario: 'Janeiro', preco: 'Gratuito' }
    ],
    gastronomia: [
      { nome: 'Acarajé', desc: 'Bolinho de feijão fradinho frito no dendê', img: 'acaraje.jpg', horario: 'Disponível sempre', preco: 'R$ 8-15' },
      { nome: 'Moqueca Baiana', desc: 'Prato típico com peixe, dendê e leite de coco', img: 'moqueca-baiana.jpg', horario: 'Restaurantes', preco: 'R$ 35-80' },
      { nome: 'Vatapá', desc: 'Creme à base de pão, camarão e dendê', img: 'vatapa.jpg', horario: 'Disponível sempre', preco: 'R$ 12-25' },
      { nome: 'Caruru', desc: 'Prato com quiabo, camarão seco e dendê', img: 'caruru.jpg', horario: 'Disponível sempre', preco: 'R$ 10-20' },
      { nome: 'Cocada', desc: 'Doce tradicional feito com coco e açúcar', img: 'cocada.jpg', horario: 'Disponível sempre', preco: 'R$ 3-8' },
      { nome: 'Caipirinha de Cajá', desc: 'Drink típico baiano com fruta regional', img: 'caipirinha-caja.jpg', horario: 'Bares e restaurantes', preco: 'R$ 12-25' }
    ]
  }

  const toggleTheme = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
  }

  useEffect(() => {
    window.scrollTo(0, 0)
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
      background: darkMode ? 'linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)' : 'linear-gradient(135deg, #fff3e0 0%, #ffcc80 100%)',
      color: darkMode ? '#e3f2fd' : '#bf360c',
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
        background: darkMode ? 'radial-gradient(circle at 20% 80%, rgba(255, 152, 0, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 193, 7, 0.15) 0%, transparent 50%)' : 'radial-gradient(circle at 20% 80%, rgba(255, 152, 0, 0.1) 0%, transparent 50%)',
        zIndex: 1
      }} />

      <header style={{
        background: darkMode ? 'rgba(13, 27, 42, 0.8)' : '#ff6f00',
        backdropFilter: 'blur(30px)',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        borderBottom: '1px solid rgba(255, 152, 0, 0.3)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img 
            src="/images/logos/logo.png" 
            alt="GADYS" 
            style={{
              height: '45px',
              background: 'linear-gradient(135deg, #ff6f00, #ffb74d)',
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
            background: '#ff6f00',
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
          <li><a href="#" style={{ color: '#ccc', textDecoration: 'none', padding: '0.5rem 1rem', cursor: 'not-allowed' }}>Bahia (atual)</a></li>
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
          background: `url('/bahia.jpg') center 20%/cover no-repeat, ${darkMode ? 'linear-gradient(135deg, rgba(255, 152, 0, 0.8) 0%, rgba(255, 193, 7, 0.7) 100%)' : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)'}`,
          borderRadius: '0 0 50px 50px',
          marginBottom: '6rem',
          position: 'relative'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #ff6f00 0%, #ffb74d 50%, #ffc107 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '2rem',
            letterSpacing: '-3px',
            lineHeight: '1.1'
          }}>
            Bahia
          </h1>
          
          <p style={{
            fontSize: '1.4rem',
            opacity: 0.8,
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontWeight: '300'
          }}>
            Terra da Alegria<br />
            <span style={{ color: '#ff6f00', fontWeight: '500' }}>Berço da cultura afro-brasileira</span>
          </p>
        </section>

        <section style={{
          background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 193, 7, 0.1) 100%)',
          padding: '5rem 4rem',
          borderRadius: '30px',
          marginBottom: '6rem',
          border: '1px solid rgba(255, 152, 0, 0.2)',
          boxShadow: '0 30px 60px rgba(255, 152, 0, 0.1)'
        }}>
          <h2 style={{ 
            fontSize: '3rem', 
            marginBottom: '3rem', 
            textAlign: 'center',
            fontWeight: '700'
          }}>O Estado da Bahia</h2>
          <p style={{ 
            fontSize: '1.2rem', 
            lineHeight: 1.8, 
            textAlign: 'center',
            opacity: 0.9,
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            A Bahia é um estado localizado na região Nordeste do Brasil, conhecido como berço da cultura afro-brasileira. 
            Salvador, sua capital, foi a primeira capital do Brasil e preserva o maior conjunto arquitetônico colonial 
            da América Latina. O estado é famoso pelo Carnaval, capoeira, culinária única e hospitalidade do povo baiano.
          </p>
        </section>

        <section style={{
          background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 193, 7, 0.1) 100%)',
          padding: '5rem 4rem',
          borderRadius: '30px',
          marginBottom: '6rem',
          border: '1px solid rgba(255, 152, 0, 0.2)',
          boxShadow: '0 30px 60px rgba(255, 152, 0, 0.1)'
        }}>
          <h2 style={{ 
            fontSize: '3rem', 
            marginBottom: '4rem',
            textAlign: 'center',
            fontWeight: '700'
          }}>Explore por Categoria</h2>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {[
              { key: 'lugares', name: 'Lugares para Visitar', desc: 'Destinos físicos para explorar' },
              { key: 'curiosidades', name: 'Curiosidades', desc: 'Cultura e gastronomia local' }
            ].map((secao) => (
              <button
                key={secao.key}
                onClick={() => {
                  setSecaoAtiva(secao.key)
                  setCategoriaAtiva('todos')
                }}
                style={{
                  background: secaoAtiva === secao.key 
                    ? 'linear-gradient(135deg, #e65100, #ff6f00)'
                    : 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  border: secaoAtiva === secao.key ? '2px solid #ff6f00' : '2px solid transparent',
                  padding: '1.5rem 2.5rem',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  textAlign: 'center',
                  minWidth: '200px'
                }}
              >
                <div>{secao.name}</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.8, marginTop: '0.5rem' }}>{secao.desc}</div>
              </button>
            ))}
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
            marginBottom: '4rem'
          }}>
            {(secaoAtiva === 'lugares' ? [
              { key: 'monumentos', name: '🏛️ Monumentos', desc: 'Patrimônios históricos' },
              { key: 'natureza', name: '🏖️ Natureza', desc: 'Praias e parques' }
            ] : [
              { key: 'cultura', name: '🎭 Cultura', desc: 'Tradições e festivais' },
              { key: 'gastronomia', name: '🍽️ Gastronomia', desc: 'Sabores baianos' }
            ]).map((categoria) => (
              <div key={categoria.key} style={{
                background: darkMode ? 'linear-gradient(135deg, rgba(255, 152, 0, 0.2) 0%, rgba(255, 193, 7, 0.1) 100%)' : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255, 243, 224, 0.7) 100%)',
                padding: '2rem',
                borderRadius: '20px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s',
                border: '1px solid rgba(255, 152, 0, 0.3)',
                minWidth: '200px',
                maxWidth: '250px'
              }}
              onClick={() => setCategoriaAtiva(categoria.key)}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 152, 0, 0.3)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  marginBottom: '1rem',
                  color: '#ff6f00'
                }}>{categoria.name}</h3>
                <p style={{
                  fontSize: '0.9rem',
                  opacity: 0.8,
                  lineHeight: 1.4
                }}>{categoria.desc}</p>
              </div>
            ))}
          </div>
          
          <p style={{ 
            fontSize: '1.2rem', 
            lineHeight: 1.8,
            textAlign: 'center',
            opacity: 0.9,
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            A Bahia recebe mais de 3 milhões de turistas por ano, sendo o terceiro destino turístico mais visitado do Brasil. 
            Explore cada categoria para descobrir as riquezas desta terra única.
          </p>
        </section>

        {categoriaAtiva !== 'todos' && atrativos[categoriaAtiva] && (
          <section style={{
            background: darkMode ? 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 193, 7, 0.05) 100%)' : 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.5) 100%)',
            padding: '5rem 4rem',
            borderRadius: '30px',
            marginBottom: '6rem',
            border: '1px solid rgba(255, 152, 0, 0.2)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '3rem'
            }}>
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: '700'
              }}>
                {secaoAtiva === 'lugares' ? 'Lugares para Visitar' : 'Curiosidades'} - 
                {categoriaAtiva === 'monumentos' && '🏛️ Monumentos'}
                {categoriaAtiva === 'natureza' && '🏖️ Natureza'}
                {categoriaAtiva === 'cultura' && '🎭 Cultura'}
                {categoriaAtiva === 'gastronomia' && '🍽️ Gastronomia'}
              </h2>
              <button
                onClick={() => setCategoriaAtiva('todos')}
                style={{
                  background: 'transparent',
                  border: '2px solid #ff6f00',
                  color: '#ff6f00',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '600',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#ff6f00'
                  e.target.style.color = 'white'
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent'
                  e.target.style.color = '#ff6f00'
                }}
              >
                Ver Todas
              </button>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {atrativos[categoriaAtiva]?.map((atrativo, index) => (
                <div key={index} style={{
                  background: darkMode ? 'linear-gradient(135deg, rgba(13, 27, 42, 0.8) 0%, rgba(27, 38, 59, 0.6) 100%)' : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255, 243, 224, 0.7) 100%)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(255, 152, 0, 0.1)',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 152, 0, 0.2)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 152, 0, 0.1)'
                }}>
                  <img 
                    src={atrativo.img}
                    alt={atrativo.nome}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ padding: '2rem' }}>
                    <h3 style={{
                      fontSize: '1.4rem',
                      marginBottom: '1rem',
                      color: '#ff6f00',
                      fontWeight: '600'
                    }}>{atrativo.nome}</h3>
                    <p style={{
                      opacity: 0.8,
                      lineHeight: 1.6,
                      marginBottom: '1.5rem'
                    }}>{atrativo.desc}</p>
                    <button style={{
                      background: 'linear-gradient(135deg, #ff6f00 0%, #ffb74d 100%)',
                      color: 'white',
                      border: 'none',
                      padding: '0.8rem 2rem',
                      borderRadius: '25px',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: '600',
                      transition: 'all 0.3s'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'scale(1.05)'
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'scale(1)'
                    }}>
                      Explorar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ 
            fontSize: '3rem', 
            marginBottom: '4rem', 
            textAlign: 'center',
            fontWeight: '700'
          }}>Principais Atrativos</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '3rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {[
              { title: 'Pelourinho', desc: 'Centro histórico patrimônio da humanidade', color: '#ff6f00' },
              { title: 'Carnaval de Salvador', desc: 'Maior festa de rua do mundo', color: '#ffb74d' },
              { title: 'Chapada Diamantina', desc: 'Paraíso natural com cachoeiras', color: '#ffc107' },
              { title: 'Acarajé', desc: 'Patrimônio cultural imaterial', color: '#ffcc80' }
            ].map((item, index) => (
              <div 
                key={index}
                style={{
                  background: darkMode ? 'linear-gradient(135deg, rgba(13, 27, 42, 0.8) 0%, rgba(27, 38, 59, 0.6) 100%)' : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255, 243, 224, 0.7) 100%)',
                  padding: '3rem 2rem',
                  borderRadius: '25px',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 152, 0, 0.2)',
                  boxShadow: '0 20px 40px rgba(255, 152, 0, 0.1)',
                  transform: 'translateY(0)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 40px 80px rgba(255, 152, 0, 0.2)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 152, 0, 0.1)'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${item.color}, transparent)`
                }} />

                <h3 style={{ 
                  fontSize: '1.8rem', 
                  marginBottom: '1.5rem',
                  fontWeight: '600',
                  color: item.color
                }}>{item.title}</h3>
                <p style={{ 
                  opacity: 0.8,
                  lineHeight: 1.6,
                  fontSize: '1.1rem'
                }}>{item.desc}</p>
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
              to="/"
              style={{
                background: 'linear-gradient(135deg, #ff6f00 0%, #ffb74d 100%)',
                color: 'white',
                border: 'none',
                padding: '1.5rem 3rem',
                borderRadius: '50px',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: '600',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 15px 35px rgba(255, 111, 0, 0.4)',
                letterSpacing: '0.5px',
                textDecoration: 'none'
              }}
            >
              Voltar ao Início
            </Link>
            
            <Link 
              to="/lugares"
              style={{
                background: 'transparent',
                color: darkMode ? '#e3f2fd' : '#bf360c',
                border: darkMode ? '2px solid rgba(255, 152, 0, 0.5)' : '2px solid rgba(255, 152, 0, 0.7)',
                padding: '1.5rem 3rem',
                borderRadius: '50px',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: '600',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: 'blur(10px)',
                letterSpacing: '0.5px',
                textDecoration: 'none'
              }}
            >
              Explorar Lugares
            </Link>
          </div>
        </section>
      </main>

      <footer style={{
        background: darkMode ? 'rgba(13, 27, 42, 0.9)' : 'rgba(255, 111, 0, 0.9)',
        textAlign: 'center',
        padding: '3rem',
        borderTop: '1px solid rgba(255, 152, 0, 0.3)',
        position: 'relative',
        zIndex: 10
      }}>
        <p style={{ opacity: 0.7, fontSize: '1rem', color: 'white' }}>&copy; 2025 GADYS. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default Bahia