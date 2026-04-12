import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ContatoPage.css';

function SobrePage() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionsRef = useRef([]);
  const isAdmin = (localStorage.getItem('userType') || '').toUpperCase() === 'ADM';
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem('darkMode', next.toString());
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.1 }
    );
    sectionsRef.current.forEach(s => s && observer.observe(s));
    return () => sectionsRef.current.forEach(s => s && observer.unobserve(s));
  }, []);

  return (
    <div className={`contato-page${darkMode ? ' dark' : ''}`}>

      {/* NAVBAR PADRONIZADA */}
      <header style={{
        background: darkMode ? 'rgba(15,12,41,0.95)' : '#1a237e',
        padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', position: 'sticky', top: 0, zIndex: 100,
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img onClick={() => navigate('/')} style={{cursor:'pointer'}} src="/images/logos/logo.png" alt="GADYS" style={{ height: '40px', background: 'linear-gradient(135deg, #667eea, #764ba2)', borderRadius: '50%', padding: '8px' }} />
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
            { label: 'Adicionar Local', path: '/adicionar-local' },
            { label: isLoggedIn ? 'Meu Perfil' : 'Entrar', path: isLoggedIn ? '/perfil' : '/login' },
            { label: 'Contato', path: '/contato' },
          ].map(({ label, path }) => (
            <li key={path}>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate(path); setMenuOpen(false) }}
                style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '5px', display: 'block' }}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}
              style={{ color: '#ccc', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '5px', display: 'block', cursor: 'default' }}>
              Sobre (atual)
            </a>
          </li>
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

      {/* HERO */}
      <header className="contato-hero">
        <h1>Mais que um guia, uma janela para a alma do Brasil.</h1>
        <p>Conheça a história, a filosofia e as pessoas por trás do GADYS.</p>
      </header>

      <main className="contato-main">

        {/* SEÇÃO 1 */}
        <section ref={el => sectionsRef.current[0] = el} style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }} className="sobre-grid">
            <div>
              <h2 style={{ fontFamily: 'Lora, serif', fontSize: '1.8rem', color: darkMode ? '#e2e8f0' : 'var(--modern-headings)', marginBottom: '1rem' }}>O Ponto de Partida</h2>
              <p style={{ lineHeight: 1.8, color: 'inherit' }}>O GADYS nasceu de uma inquietação: como podemos ir além do turismo superficial? Impulsionados pela paixão por descobrir e pela vontade de compartilhar, criamos uma plataforma que não apenas aponta destinos, mas conta as histórias, celebra as culturas e revela a verdadeira essência de cada lugar.</p>
            </div>
            <div>
              <img src="/images/geral/img-sobre.webp" alt="Sobre o GADYS" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </section>

        {/* SEÇÃO 2 */}
        <section ref={el => sectionsRef.current[1] = el} style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }} className="sobre-grid">
            <div>
              <img src="/images/geral/img-sobre2.webp" alt="Nossa Filosofia" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
            </div>
            <div>
              <h2 style={{ fontFamily: 'Lora, serif', fontSize: '1.8rem', color: darkMode ? '#e2e8f0' : 'var(--modern-headings)', marginBottom: '1rem' }}>Nossa Filosofia</h2>
              <p style={{ lineHeight: 1.8, color: 'inherit' }}>Acreditamos no poder do turismo consciente. Para nós, viajar é uma oportunidade de crescimento, conexão e respeito. Por isso, nosso foco está em promover experiências autênticas que beneficiem tanto os viajantes quanto as comunidades locais, incentivando a sustentabilidade e a preservação do nosso imenso patrimônio.</p>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section ref={el => sectionsRef.current[2] = el} style={{ marginBottom: '4rem' }}>
          <div className="contato-info-grid">
            {[
              { valor: '500+', label: 'Destinos Catalogados' },
              { valor: '27', label: 'Estados Cobertos' },
              { valor: '10k+', label: 'Viajantes Atendidos' },
              { valor: '100%', label: 'Feito com Paixão' },
            ].map(({ valor, label }) => (
              <div key={label} className="contato-info-card">
                <h3 style={{ fontSize: '2rem', color: 'var(--modern-primary)', marginBottom: '0.25rem' }}>{valor}</h3>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section ref={el => sectionsRef.current[3] = el} style={{ textAlign: 'center', padding: '3rem 0' }}>
          <h2 style={{ fontFamily: 'Lora, serif', fontSize: '2rem', marginBottom: '1.5rem' }}>Sua jornada começa agora.</h2>
          <Link to="/lugares" className="contato-submit-btn" style={{ display: 'inline-block', width: 'auto', padding: '1rem 3rem', textDecoration: 'none' }}>
            Explorar Destinos
          </Link>
        </section>

      </main>

      <footer className="contato-footer">
        <p>&copy; {new Date().getFullYear()} GADYS. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default SobrePage;
