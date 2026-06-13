import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Acre = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/images/geral/amazonas1.avif',
    '/images/geral/amazonas2.jpg',
    '/images/geral/amazonas3.1.jpg',
    '/images/geral/oam.jpg',
  ];

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  useEffect(() => {
    const firstImage = new Image();
    firstImage.src = images[0];
    firstImage.onload = () => {
      setIsLoading(false);
      images.slice(1).forEach(src => { const img = new Image(); img.src = src; });
    };
    firstImage.onerror = () => setIsLoading(false);
  }, [images]);

  useEffect(() => {
    if (isLoading) return;
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isLoading, images.length]);

  useEffect(() => {
    if (isLoading) return;
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
      .feature-section-animate { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
      .feature-section-animate.is-visible { opacity: 1; transform: translateY(0); }
      .feature-image-container { overflow: hidden; border-radius: 15px; }
      .feature-image { transition: transform 0.4s ease; }
      .feature-image-container:hover .feature-image { transform: scale(1.05); }
    `;
    document.head.appendChild(styleSheet);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
    }, { threshold: 0.2 });
    const sections = document.querySelectorAll('.feature-section-animate');
    sections.forEach(section => observer.observe(section));
    return () => { document.head.removeChild(styleSheet); sections.forEach(s => observer.unobserve(s)); };
  }, [isLoading]);

  const styles = {
    page: { fontFamily: `'Source Sans Pro', sans-serif`, color: darkMode ? '#e6edf3' : '#24292f', background: darkMode ? '#0d1117' : '#ffffff', overflowX: 'hidden' },
    loadingContainer: { height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem' },
    hero: { position: 'relative', color: 'white', padding: '12rem 2rem', textAlign: 'center', overflow: 'hidden', minHeight: '600px' },
    heroSlide: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', transition: 'opacity 1.2s ease-in-out', zIndex: 1 },
    heroContent: { position: 'relative', zIndex: 3 },
    gradientOverlay: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6))', zIndex: 2 },
    h1: { fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, textShadow: '0 4px 10px rgba(0,0,0,0.8)', letterSpacing: '1px', marginBottom: '1rem' },
    heroP: { fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', maxWidth: '800px', margin: '0 auto', fontWeight: 300, opacity: 0.9 },
    featureSection: { display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', maxWidth: '1200px', margin: '6rem auto', padding: '0 2rem', gap: '4rem' },
    featureImageContainer: { flex: '1 1 400px', minWidth: '300px', borderRadius: '15px', boxShadow: darkMode ? '0 10px 30px rgba(0,0,0,0.4)' : '0 10px 30px rgba(0,0,0,0.1)', overflow: 'hidden' },
    featureImage: { width: '100%', height: 'auto', display: 'block', objectFit: 'cover', transition: 'transform 0.4s ease' },
    featureText: { flex: '1 1 400px', position: 'relative' },
    h2: { fontFamily: `'Georgia', serif`, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: darkMode ? '#c69f68' : '#b5651d', marginBottom: '1.5rem', fontWeight: 400 },
    pWithBorder: { fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: 1.8, color: darkMode ? '#adb5bd' : '#495057', paddingLeft: '1.5rem', borderLeft: `3px solid ${darkMode ? '#2e7d32' : '#1b5e20'}` },
    ctaContainer: { textAlign: 'center', background: darkMode ? '#161b22' : '#f8f9fa', padding: '6rem 2rem' },
    ctaButton: { background: 'linear-gradient(45deg, #1b5e20, #2e7d32)', color: 'white', border: 'none', padding: '1.2rem 3.5rem', borderRadius: '50px', cursor: 'pointer', fontSize: '1.25rem', fontWeight: 'bold', transition: 'transform 0.3s ease, box-shadow 0.3s ease', boxShadow: '0 5px 20px rgba(27,94,32,0.4)', display: 'inline-block' },
    footer: { background: '#0d1117', color: '#8b949e', textAlign: 'center', padding: '2.5rem' },
  };

  const navLink = (color) => ({ color, textDecoration: 'none', padding: '0.5rem 1rem', display: 'block' });

  if (isLoading) return <div style={{...styles.page, ...styles.loadingContainer}}>Carregando...</div>;

  return (
    <div style={styles.page}>
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
            { label: 'Lugares', path: '/lugares' },
            { label: 'Mapa', path: '/mapa' },
            { label: 'Dê sugestões', path: '/adicionar-local' },
            { label: 'Meu Perfil', path: '/perfil' },
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
          {(localStorage.getItem('userType') || '').toUpperCase() === 'ADM' && (
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/painel-adm'); setMenuOpen(false) }}
                style={{ color: '#ffd700', textDecoration: 'none', padding: '0.5rem 1rem', fontWeight: '700', borderRadius: '5px', display: 'block' }}>
                Painel Admin
              </a>
            </li>
          )}
        </ul>
      </header>

            <main>
        <section style={styles.hero}>
          {images.map((img, index) => (
            <div key={index} style={{ ...styles.heroSlide, backgroundImage: `url(${img})`, opacity: index === currentImageIndex ? 1 : 0 }} />
          ))}
          <div style={styles.gradientOverlay}></div>
          <div style={styles.heroContent}>
            <h1 style={styles.h1}>Acre: A Joia Escondida da Amazônia</h1>
            <p style={styles.heroP}>O estado mais ocidental do Brasil, berço de Chico Mendes e guardião de uma das florestas mais preservadas do planeta.</p>
          </div>
        </section>

        <section style={styles.featureSection} className="feature-section-animate">
          <div style={styles.featureImageContainer} className="feature-image-container">
            <img src="/images/geral/amazonas1.avif" alt="Floresta amazônica no Acre" style={styles.featureImage} className="feature-image" />
          </div>
          <div style={styles.featureText}>
            <h2 style={styles.h2}>Natureza Intocada</h2>
            <p style={styles.pWithBorder}>O Acre abriga uma das maiores extensões de floresta amazônica preservada do Brasil. Com mais de 87% do território coberto por floresta nativa, o estado é um santuário de biodiversidade, com espécies endêmicas e ecossistemas únicos que encantam pesquisadores e ecoturistas do mundo inteiro.</p>
          </div>
        </section>

        <section style={{...styles.featureSection, flexDirection: 'row-reverse'}} className="feature-section-animate">
          <div style={styles.featureImageContainer} className="feature-image-container">
            <img src="/images/geral/amazonas2.jpg" alt="Cultura acreana" style={styles.featureImage} className="feature-image" />
          </div>
          <div style={styles.featureText}>
            <h2 style={styles.h2}>Cultura e Resistência</h2>
            <p style={styles.pWithBorder}>O Acre é a terra de Chico Mendes, o seringueiro que se tornou símbolo mundial da luta pela preservação ambiental. A cultura acreana é uma rica mistura de tradições indígenas, nordestinas e bolivianas, expressa no artesanato, na culinária e nas festas populares.</p>
          </div>
        </section>

        <section style={styles.featureSection} className="feature-section-animate">
          <div style={styles.featureImageContainer} className="feature-image-container">
            <img src="/images/geral/amazonas3.1.jpg" alt="Rio Acre em Rio Branco" style={styles.featureImage} className="feature-image" />
          </div>
          <div style={styles.featureText}>
            <h2 style={styles.h2}>Rio Acre e Seus Encantos</h2>
            <p style={styles.pWithBorder}>O Rio Acre é a alma de Rio Branco, a capital do estado. Suas margens abrigam parques, praias fluviais e o famoso Calçadão da Gameleira, onde moradores e turistas se reúnem para apreciar o pôr do sol sobre as águas.</p>
          </div>
        </section>

        <section style={styles.ctaContainer}>
          <button style={styles.ctaButton} onClick={() => navigate('/acre-pontos')}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(27,94,32,0.6)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 5px 20px rgba(27,94,32,0.4)'; }}>
            Explore o Acre
          </button>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2025 GADYS. Descubra o Acre.</p>
      </footer>
    </div>
  );
};

export default Acre;
