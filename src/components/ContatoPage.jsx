import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ContatoPage.css';

const API_URL = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');
const ICONS = { success: '✓', error: '✕' };

function ContatoPage() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const isAdmin = (localStorage.getItem('userType') || '').toUpperCase() === 'ADM';
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const [form, setForm] = useState({ nome: '', email: '', assunto: '', mensagem: '' });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem('darkMode', next.toString());
  };

  const closeMenu = () => document.querySelector('.nav-links')?.classList.remove('active');

  const showToast = (message, type = 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API_URL}/api/mensagens`, form);
      showToast('Mensagem enviada com sucesso!', 'success');
      setForm({ nome: '', email: '', assunto: '', mensagem: '' });
    } catch {
      showToast('Erro ao enviar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`contato-page${darkMode ? ' dark' : ''}`}>

      {toast && (
        <div className={`contato-toast contato-toast--${toast.type}`}>
          <span>{ICONS[toast.type]}</span>
          <span>{toast.message}</span>
          <button onClick={() => setToast(null)}>×</button>
        </div>
      )}

      {/* ── NAVBAR ── */}
      <header className="contato-navbar">
        <nav className="nav">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img src="/images/logos/logo.png" alt="GADYS" className="logo"
              style={{ height: '40px', background: 'linear-gradient(135deg,#667eea,#764ba2)', borderRadius: '50%', padding: '8px' }} />
            <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white' }}>GADYS</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button onClick={toggleDarkMode} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}>
              {darkMode ? '☀️' : '🌙'}
            </button>
            <div className="hamburger" onClick={() => document.querySelector('.nav-links')?.classList.toggle('active')}>
              <span /><span /><span />
            </div>
          </div>
          <div className="nav-overlay" onClick={closeMenu} />
          <ul className="nav-links" style={{ paddingTop: '5rem', justifyContent: 'flex-start', gap: '2rem' }}>
            <li><Link to="/" onClick={closeMenu} style={{ color: 'white' }}>Início</Link></li>
            <li><Link to="/lugares" onClick={closeMenu} style={{ color: 'white' }}>Lugares</Link></li>
            <li><Link to="/mapa" onClick={closeMenu} style={{ color: 'white' }}>Mapa</Link></li>
            <li><Link to="/adicionar-local" onClick={closeMenu} style={{ color: 'white' }}>Adicionar Local</Link></li>
            {isAdmin && <li><Link to="/painel-adm" onClick={closeMenu} style={{ color: '#ffd700', fontWeight: '700' }}>⚙️ Administração</Link></li>}
            <li>{isLoggedIn
              ? <Link to="/perfil" onClick={closeMenu} style={{ color: 'white' }}>Meu Perfil</Link>
              : <Link to="/login" onClick={closeMenu} style={{ color: 'white' }}>Entrar</Link>}
            </li>
            <li><Link to="/sobre" onClick={closeMenu} style={{ color: 'white' }}>Sobre</Link></li>
            <li><a href="#" onClick={(e) => e.preventDefault()} style={{ color: '#ccc', cursor: 'not-allowed' }}>Contato (atual)</a></li>
          </ul>
        </nav>
      </header>

      {/* ── HERO ── */}
      <header className="contato-hero">
        <h1>Entre em Contato</h1>
        <p>Tem dúvidas, sugestões ou quer fazer parte da nossa história? Fale com a gente.</p>
      </header>

      <main className="contato-main">

        {/* ── INFO CARDS ── */}
        <div className="contato-info-grid">
          <div className="contato-info-card">
            <span className="contato-info-icon">✉️</span>
            <h3>E-mail</h3>
            <p>contato@gadys.com.br</p>
          </div>
          <div className="contato-info-card">
            <span className="contato-info-icon">📞</span>
            <h3>Telefone</h3>
            <p>(11) 99999-9999</p>
          </div>
          <div className="contato-info-card">
            <span className="contato-info-icon">📍</span>
            <h3>Localização</h3>
            <p>São Paulo — SP, Brasil</p>
          </div>
          <div className="contato-info-card">
            <span className="contato-info-icon">🕐</span>
            <h3>Atendimento</h3>
            <p>Seg–Sex, 9h às 18h</p>
          </div>
        </div>

        {/* ── FORMULÁRIO + REDES ── */}
        <div className="contato-content-grid">

          <form className="contato-form" onSubmit={handleSubmit}>
            <h2>Envie uma Mensagem</h2>
            <div className="contato-form-row">
              <div className="contato-field">
                <label>Nome</label>
                <input type="text" placeholder="Seu nome" value={form.nome}
                  onChange={e => setForm({ ...form, nome: e.target.value })} required />
              </div>
              <div className="contato-field">
                <label>E-mail</label>
                <input type="email" placeholder="seu@email.com" value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })} required />
              </div>
            </div>
            <div className="contato-field">
              <label>Assunto</label>
              <input type="text" placeholder="Assunto da mensagem" value={form.assunto}
                onChange={e => setForm({ ...form, assunto: e.target.value })} />
            </div>
            <div className="contato-field">
              <label>Mensagem</label>
              <textarea rows="6" placeholder="Escreva sua mensagem..." value={form.mensagem}
                onChange={e => setForm({ ...form, mensagem: e.target.value })} required />
            </div>
            <button type="submit" className="contato-submit-btn" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>

          <div className="contato-social">
            <h2>Redes Sociais</h2>
            <p>Siga a GADYS e fique por dentro dos melhores destinos do Brasil.</p>
            <div className="contato-social-grid">
              {[
                { name: 'Instagram', handle: '@gadys_brasil', icon: '📷', color: '#E4405F' },
                { name: 'Facebook',  handle: '/gadys.brasil', icon: '👥', color: '#1877F2' },
                { name: 'Twitter',   handle: '@gadys_br',     icon: '🐦', color: '#1DA1F2' },
                { name: 'YouTube',   handle: '/gadys-brasil', icon: '📺', color: '#FF0000' },
              ].map(s => (
                <div key={s.name} className="contato-social-card" style={{ '--social-color': s.color }}>
                  <span className="social-icon">{s.icon}</span>
                  <strong>{s.name}</strong>
                  <span>{s.handle}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <footer className="contato-footer">
        <p>&copy; 2025 GADYS. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}

export default ContatoPage;
