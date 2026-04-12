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
      <header className="lp-navbar">
        <nav className="nav">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img onClick={() => navigate('/')} style={{cursor:'pointer'}} src="/images/logos/logo.png" alt="GADYS" className="logo"
              style={{ height: '40px', background: 'linear-gradient(135deg,#667eea,#764ba2)', borderRadius: '50%', padding: '8px' }} />
            <span style={{ fontSize: '1.5rem', fontWeight: '700', letterSpacing: '1px', color: 'white' }}>GADYS</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button onClick={toggleDarkMode}
              style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}>
              {darkMode ? '☀️' : '🌙'}
            </button>
            <div className="hamburger" onClick={() => document.querySelector('.nav-links')?.classList.toggle('active')}>
              <span /><span /><span />
            </div>
          </div>

          <div className="nav-overlay" onClick={closeMenu} />

          <ul className="nav-links" style={{ paddingTop: '5rem', justifyContent: 'flex-start', gap: '2rem' }}>
            <li><Link to="/" onClick={closeMenu} style={{ color: 'white' }}>Início</Link></li>
            <li className="dropdown">
              <a href="#" style={{ color: 'white' }}>Estados Brasileiros ▼</a>
              <div className="dropdown-content">
                <Link to="/acre" onClick={closeMenu}>Acre</Link>
                <Link to="/amapa" onClick={closeMenu}>Amapá</Link>
                <Link to="/amazonas-estado" onClick={closeMenu}>Amazonas</Link>
                <Link to="/ceara" onClick={closeMenu}>Ceará</Link>
                <Link to="/espirito-santo" onClick={closeMenu}>Espírito Santo</Link>
                <Link to="/minas-gerais" onClick={closeMenu}>Minas Gerais</Link>
                <Link to="/para" onClick={closeMenu}>Pará</Link>
                <Link to="/rio-de-janeiro" onClick={closeMenu}>Rio de Janeiro</Link>
                <Link to="/rondonia" onClick={closeMenu}>Rondônia</Link>
                <Link to="/roraima" onClick={closeMenu}>Roraima</Link>
                <Link to="/sao-paulo" onClick={closeMenu}>São Paulo</Link>
                <Link to="/tocantins" onClick={closeMenu}>Tocantins</Link>
              </div>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} style={{ color: '#ccc', cursor: 'not-allowed' }}>
                Lugares (atual)
              </a>
            </li>
            <li><Link to="/mapa" onClick={closeMenu} style={{ color: 'white' }}>Mapa</Link></li>
            <li><Link to="/adicionar-local" onClick={closeMenu} style={{ color: 'white' }}>Adicionar Local</Link></li>
            {isAdmin && (
              <li>
                <Link to="/painel-adm" onClick={closeMenu} style={{ color: '#ffd700', fontWeight: '700' }}>
                  ⚙️ Administração
                </Link>
              </li>
            )}
            <li>
              {isLoggedIn
                ? <Link to="/perfil" onClick={closeMenu} style={{ color: 'white' }}>Meu Perfil</Link>
                : <Link to="/login" onClick={closeMenu} style={{ color: 'white' }}>Entrar</Link>
              }
            </li>
            <li><Link to="/sobre" onClick={closeMenu} style={{ color: 'white' }}>Sobre</Link></li>
            <li><Link to="/contato" onClick={closeMenu} style={{ color: 'white' }}>Contato</Link></li>
          </ul>
        </nav>
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
