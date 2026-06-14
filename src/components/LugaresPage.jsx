import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarShared from './NavbarShared'
import './LugaresPage.css';

const lugaresEstaticos = [
  { id: 'cristo-redentor', nome: 'Cristo Redentor', cidade: 'Rio de Janeiro - RJ', categoria: 'Monumento', descricao: 'Uma das Sete Maravilhas do Mundo Moderno, símbolo do Brasil e ponto mais visitado do país.', imagem: '/images/geral/cr-rj.webp' },
  { id: 'pao-de-acucar', nome: 'Pão de Açúcar', cidade: 'Rio de Janeiro - RJ', categoria: 'Lugar Paradisíaco', descricao: 'Complexo de morros com vista panorâmica deslumbrante acessado por teleférico histórico.', imagem: '/images/geral/pao-rj.jpg' },
  { id: 'cataratas-iguacu', nome: 'Cataratas do Iguaçu', cidade: 'Foz do Iguaçu - PR', categoria: 'Natureza', descricao: "Considerada uma das maiores quedas d'água do mundo, Patrimônio Natural da Humanidade pela UNESCO.", imagem: '/images/geral/cata-xx.jpg' },
  { id: 'pelourinho', nome: 'Pelourinho', cidade: 'Salvador - BA', categoria: 'Cultura', descricao: 'Centro histórico de Salvador com arquitetura colonial colorida, berço da cultura afro-brasileira.', imagem: '/images/geral/pelo-xx.jpg' },
  { id: 'fernando-noronha', nome: 'Fernando de Noronha', cidade: 'Pernambuco - PE', categoria: 'Lugar Paradisíaco', descricao: 'Arquipélago paradisíaco com praias eleitas as mais belas do mundo e rica vida marinha.', imagem: '/images/geral/fe-pe.jpg' },
  { id: 'pantanal', nome: 'Pantanal', cidade: 'Mato Grosso - MT', categoria: 'Natureza', descricao: 'Maior planície inundável do planeta e santuário de biodiversidade reconhecido mundialmente.', imagem: '/images/geral/pant-xx.webp' },
];

const API_URL = import.meta.env.VITE_API_URL;

function LugaresPage() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [locaisBanco, setLocaisBanco] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/locais`)
      .then(r => r.ok ? r.json() : [])
      .then(data => setLocaisBanco(Array.isArray(data) ? data : []))
      .catch(() => {});
  }, []);
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
      <NavbarShared darkMode={darkMode} toggleDarkMode={toggleDarkMode} paginaAtual={window.location.pathname} />

      {/* ── HERO ── */}
      <header className="lp-header">
        <h1>Destinos em Destaque</h1>
        <p>Os lugares mais visitados e admirados do Brasil pelos usuários do GADYS.</p>
      </header>

      {/* ── GRID ── */}
      <main className="lp-grid">
        {lugaresEstaticos.map((lugar, i) => (
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
        {locaisBanco.filter(l => l.status === 'ATIVO').map((lugar, i) => (
          <div key={`banco-${lugar.id}`} className="lp-card" style={{ animationDelay: `${(lugaresEstaticos.length + i) * 0.08}s` }}>
            <div className="lp-card-image-container">
              {lugar.imagemUrl
                ? <img src={lugar.imagemUrl} alt={lugar.nome} className="lp-card-image" />
                : <div className="lp-card-image" style={{ background: 'linear-gradient(135deg,#667eea,#764ba2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>🗺️</div>
              }
            </div>
            <div className="lp-card-content">
              <h2 className="lp-card-title">{lugar.nome}</h2>
              <p className="lp-card-category">{lugar.subcategoria} • {lugar.estado}</p>
              <p className="lp-card-description">{lugar.descricao?.slice(0, 140)}{lugar.descricao?.length > 140 ? '...' : ''}</p>
              <button className="lp-btn" onClick={() => navigate(`/local/${lugar.id}`)}>Saiba mais</button>
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
