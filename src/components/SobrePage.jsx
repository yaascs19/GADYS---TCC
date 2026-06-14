import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarShared from './NavbarShared'
import './ContatoPage.css';

function SobrePage() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
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
      <NavbarShared darkMode={darkMode} toggleDarkMode={toggleDarkMode} paginaAtual={window.location.pathname} />

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
