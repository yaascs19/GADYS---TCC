import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ESTADOS = [
  { label: 'Acre', path: '/acre' },
  { label: 'Amapá', path: '/amapa' },
  { label: 'Amazonas', path: '/amazonas' },
  { label: 'Ceará', path: '/ceara' },
  { label: 'Espírito Santo', path: '/espirito-santo' },
  { label: 'Minas Gerais', path: '/minas-gerais' },
  { label: 'Pará', path: '/para' },
  { label: 'Rio de Janeiro', path: '/rio-de-janeiro' },
  { label: 'Rondônia', path: '/rondonia' },
  { label: 'Roraima', path: '/roraima' },
  { label: 'São Paulo', path: '/sao-paulo' },
  { label: 'Tocantins', path: '/tocantins' },
]

const LINKS = [
  { label: 'Início', path: '/' },
  { label: 'Lugares', path: '/lugares' },
  { label: 'Mapa', path: '/mapa' },
  { label: 'Dê sugestões', path: '/adicionar-local' },
  { label: 'Meu Perfil', path: '/perfil' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Contato', path: '/contato' },
]

export default function NavbarShared({ darkMode, toggleDarkMode, paginaAtual }) {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [estadosOpen, setEstadosOpen] = useState(false)
  const isAdmin = (localStorage.getItem('userType') || '').toUpperCase() === 'ADM'

  const bg = darkMode ? 'rgba(15,12,41,0.95)' : '#1a237e'

  return (
    <header style={{ background: bg, padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <img onClick={() => navigate('/')} style={{ cursor: 'pointer', height: '40px', background: 'linear-gradient(135deg,#667eea,#764ba2)', borderRadius: '50%', padding: '8px' }} src="/images/logos/logo.png" alt="GADYS" />
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {toggleDarkMode && (
          <button onClick={toggleDarkMode} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer', zIndex: 1002 }} onClick={() => setMenuOpen(!menuOpen)}>
          <span style={{ width: '25px', height: '3px', background: 'white', margin: '3px 0' }} />
          <span style={{ width: '25px', height: '3px', background: 'white', margin: '3px 0' }} />
          <span style={{ width: '25px', height: '3px', background: 'white', margin: '3px 0' }} />
        </div>
      </div>

      {menuOpen && <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000 }} onClick={() => { setMenuOpen(false); setEstadosOpen(false) }} />}

      <ul style={{
        position: 'fixed', top: 0, right: menuOpen ? 0 : '-100%', width: '300px', height: '100vh',
        background: bg, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem',
        justifyContent: 'flex-start', margin: 0, padding: '2rem 0', listStyle: 'none',
        transition: 'right 0.3s ease', zIndex: 1001, overflowY: 'auto'
      }}>
        {LINKS.map(({ label, path }) => (
          <li key={path} style={{ width: '100%', textAlign: 'center' }}>
            <a href="#" onClick={(e) => { e.preventDefault(); navigate(path); setMenuOpen(false) }}
              style={{ color: paginaAtual === path ? '#38BDF8' : 'white', textDecoration: 'none', padding: '0.6rem 1rem', borderRadius: '5px', display: 'block', fontWeight: paginaAtual === path ? 700 : 400 }}>
              {label}
            </a>
          </li>
        ))}

        {/* DROPDOWN ESTADOS */}
        <li style={{ width: '100%', textAlign: 'center' }}>
          <button onClick={() => setEstadosOpen(!estadosOpen)} style={{
            width: '100%', background: 'none', border: 'none', color: 'white', cursor: 'pointer',
            padding: '0.6rem 1rem', fontSize: '1rem', fontFamily: 'inherit'
          }}>
            Estados Brasileiros {estadosOpen ? '▲' : '▼'}
          </button>
          {estadosOpen && (
            <ul style={{ listStyle: 'none', margin: 0, padding: '0.25rem 0', background: 'rgba(255,255,255,0.07)', borderRadius: '8px', marginInline: '1rem' }}>
              {ESTADOS.map(({ label, path }) => (
                <li key={path}>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigate(path); setMenuOpen(false); setEstadosOpen(false) }}
                    style={{ color: '#e0e0ff', textDecoration: 'none', padding: '0.45rem 1rem', display: 'block', fontSize: '0.9rem' }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>

        {isAdmin && (
          <li style={{ width: '100%', textAlign: 'center' }}>
            <a href="#" onClick={(e) => { e.preventDefault(); navigate('/painel-adm'); setMenuOpen(false) }}
              style={{ color: '#ffd700', textDecoration: 'none', padding: '0.6rem 1rem', fontWeight: '700', borderRadius: '5px', display: 'block' }}>
              ⚙️ Painel Admin
            </a>
          </li>
        )}
      </ul>
    </header>
  )
}
