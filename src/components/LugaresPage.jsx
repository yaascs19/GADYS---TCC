import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LugaresPage.css';

const lugares = [
  { id: 'cristo-redentor', nome: 'Cristo Redentor', cidade: 'Rio de Janeiro - RJ', categoria: 'Monumento', descricao: 'Uma das Sete Maravilhas do Mundo Moderno, símbolo do Brasil e ponto mais visitado do país.', imagem: '/images/geral/cr-rj.webp' },
  { id: 'pao-de-acucar', nome: 'Pão de Açúcar', cidade: 'Rio de Janeiro - RJ', categoria: 'Lugar Paradisíaco', descricao: 'Complexo de morros com vista panorâmica deslumbrante acessado por teleférico histórico.', imagem: '/images/geral/pao-rj.jpg' },
  { id: 'cataratas-iguacu', nome: 'Cataratas do Iguaçu', cidade: 'Foz do Iguaçu - PR', categoria: 'Natureza', descricao: "Considerada uma das maiores quedas d'água do mundo, Patrimônio Natural da Humanidade pela UNESCO.", imagem: '/images/geral/cata-xx.jpg' },
  { id: 'pelourinho', nome: 'Pelourinho', cidade: 'Salvador - BA', categoria: 'Cultura', descricao: 'Centro histórico de Salvador com arquitetura colonial colorida, berço da cultura afro-brasileira.', imagem: '/images/geral/pelo-xx.jpg' },
  { id: 'fernando-noronha', nome: 'Fernando de Noronha', cidade: 'Pernambuco - PE', categoria: 'Lugar Paradisíaco', descricao: 'Arquipélago paradisíaco com praias eleitas as mais belas do mundo e rica vida marinha.', imagem: '/images/geral/fe-pe.jpg' },
  { id: 'pantanal', nome: 'Pantanal', cidade: 'Mato Grosso - MT', categoria: 'Natureza', descricao: 'Maior planície inundável do planeta e santuário de biodiversidade reconhecido mundialmente.', imagem: '/images/geral/pant-xx.webp' },
];

function LugaresPage() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [menuOpen, setMenuOpen] = useState(false);
  const isAdmin = (localStorage.getItem('userType') || '').toUpperCase() === 'ADM';
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem('darkMode', next.toString());
  };

  const closeMenu = () => document.querySelector('.nav-links')?.classList.remove('active');

  return (
    <div className={`lp-page${darkMode ? ' lp-dark' : ''}`}>

      {/* ── NAVBAR ── */}
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
            { label: 'Mapa', path: '/mapa' },
            { label: 'Dê sugestões', path: '/adicionar-local' },
            { label: isLoggedIn ? 'Meu Perfil' : 'Entrar', path: isLoggedIn ? '/perfil' : '/login' },
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
          <li><a href="#" onClick={(e) => e.preventDefault()} style={{ color: '#ccc', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '5px', display: 'block', cursor: 'default' }}>Lugares (atual)</a></li>
          {isAdmin && (
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/painel-adm'); setMenuOpen(false) }}
                style={{ color: '#ffd700', textDecoration: 'none', padding: '0.5rem 1rem', fontWeight: '700', borderRadius: '5px', display: 'block' }}>
                Painel Admin
              </a>
            </li>
          )}
        </ul>
      </header>

      {/* ── HERO ── */}
      <header className="lp-header">
        <h1>Destinos em Destaque</h1>
        <p>Os lugares mais visitados e admirados do Brasil pelos usuários do GADYS.</p>
      </header>

      {/* ── GRID ── */}
      <main className="lp-grid">
        {lugares.map((lugar, i) => (
          <div key={lugar.id} className="lp-card" style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="lp-card-image-container">
              <img src={lugar.imagem} alt={lugar.nome} className="lp-card-image" />
            </div>
            <div className="lp-card-content">
              <h2 className="lp-card-title">{lugar.nome}</h2>
              <p className="lp-card-category">{lugar.categoria} • {lugar.cidade}</p>
              <p className="lp-card-description">{lugar.descricao}</p>
              <button className="lp-btn" onClick={() => navigate(`/${lugar.id}`)}>Saiba mais</button>
            </div>
          </div>
        ))}
      </main>

      <footer className="lp-footer">
        <p>&copy; 2025 GADYS. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}

export default LugaresPage;
