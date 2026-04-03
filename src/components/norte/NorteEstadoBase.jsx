import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const NorteEstadoBase = ({ config }) => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  useEffect(() => {
    const firstImage = new Image();
    firstImage.src = config.images[0];
    firstImage.onload = () => {
      setIsLoading(false);
      config.images.slice(1).forEach(src => { const img = new Image(); img.src = src; });
    };
    firstImage.onerror = () => setIsLoading(false);
  }, [config.images]);

  useEffect(() => {
    if (isLoading) return;
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % config.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isLoading, config.images.length]);

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
    sections.forEach(s => observer.observe(s));
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

  const nl = (c) => ({ color: c, textDecoration: 'none', padding: '0.5rem 1rem', display: 'block' });

  if (isLoading) return <div style={{...styles.page, ...styles.loadingContainer}}>Carregando...</div>;

  return (
    <div style={styles.page}>
      <header className="header" style={{ background: darkMode ? 'rgba(15,12,41,0.8)' : '#FFFFFF', backdropFilter: 'blur(30px)', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100, borderBottom: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e0e0e0' }}>
        <nav className="nav" style={{ display: 'contents' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img src="/images/logos/logo.png" alt="GADYS" className="logo" style={{height: '40px'}} />
            <span style={{ fontSize: '1.5rem', fontWeight: '700', letterSpacing: '1px', color: darkMode ? 'white' : '#2c3e50' }}>GADYS</span>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <button onClick={(e) => { e.preventDefault(); toggleDarkMode(); }} style={{background: 'none', border: 'none', color: darkMode ? 'white' : '#2c3e50', fontSize: '1.5rem', cursor: 'pointer'}}>{darkMode ? '☀️' : '🌙'}</button>
            <div className="hamburger" onClick={() => document.querySelector('.nav-links').classList.toggle('active')}>
              <span style={{backgroundColor: darkMode ? 'white' : '#667eea'}}></span>
              <span style={{backgroundColor: darkMode ? 'white' : '#764ba2'}}></span>
              <span style={{backgroundColor: darkMode ? 'white' : '#667eea'}}></span>
            </div>
          </div>
          <div className="nav-overlay" onClick={() => document.querySelector('.nav-links').classList.remove('active')}></div>
          <ul className="nav-links" style={{background: darkMode ? 'rgba(15,12,41,0.79)' : 'white', paddingTop: '5rem', justifyContent: 'flex-start', gap: '2rem'}}>
            <li><Link to="/" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={{color: darkMode ? 'white' : '#2c3e50'}}>Início</Link></li>
            <li className="dropdown">
              <a href="#" onClick={(e) => e.preventDefault()} style={{color: darkMode ? 'white' : '#2c3e50'}}>Estados Brasileiros ▼</a>
              <div className="dropdown-content" style={{backgroundColor: darkMode ? 'rgb(252,252,252)' : '#f9f9f9', border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid #ddd'}}>
                <Link to="/acre" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={nl(darkMode ? 'white' : 'black')}>Acre</Link>
                <Link to="/amapa" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={nl(darkMode ? 'white' : 'black')}>Amapá</Link>
                <Link to="/amazonas-estado" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={nl(darkMode ? 'white' : 'black')}>Amazonas</Link>
                <Link to="/ceara" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={nl(darkMode ? 'white' : 'black')}>Ceará</Link>
                <Link to="/espirito-santo" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={nl(darkMode ? 'white' : 'black')}>Espírito Santo</Link>
                <Link to="/minas-gerais" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={nl(darkMode ? 'white' : 'black')}>Minas Gerais</Link>
                <Link to="/para" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={nl(darkMode ? 'white' : 'black')}>Pará</Link>
                <Link to="/rio-de-janeiro" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={nl(darkMode ? 'white' : 'black')}>Rio de Janeiro</Link>
                <Link to="/rondonia" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={nl(darkMode ? 'white' : 'black')}>Rondônia</Link>
                <Link to="/roraima" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={nl(darkMode ? 'white' : 'black')}>Roraima</Link>
                <Link to="/sao-paulo" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={nl(darkMode ? 'white' : 'black')}>São Paulo</Link>
                <Link to="/tocantins" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={nl(darkMode ? 'white' : 'black')}>Tocantins</Link>
              </div>
            </li>
            <li><a href="#" onClick={() => { navigate('/lugares'); document.querySelector('.nav-links').classList.remove('active'); }} style={{color: darkMode ? 'white' : '#2c3e50'}}>Lugares</a></li>
            <li><a href="#" onClick={() => { navigate('/mapa'); document.querySelector('.nav-links').classList.remove('active'); }} style={{color: darkMode ? 'white' : '#2c3e50'}}>Mapa</a></li>
            <li><a href="#" onClick={() => { navigate('/adicionar-local'); document.querySelector('.nav-links').classList.remove('active'); }} style={{color: darkMode ? 'white' : '#2c3e50'}}>Adicionar Local</a></li>
            {localStorage.getItem('userType') === 'adm' && (<li><a href="#" onClick={() => { navigate('/painel-adm'); document.querySelector('.nav-links').classList.remove('active'); }} style={{color: darkMode ? 'white' : '#2c3e50'}}>Administração</a></li>)}
            <li><a href="#" onClick={() => { navigate('/perfil'); document.querySelector('.nav-links').classList.remove('active'); }} style={{color: darkMode ? 'white' : '#2c3e50'}}>Meu Perfil</a></li>
            <li><a href="#" onClick={() => { navigate('/sobre'); document.querySelector('.nav-links').classList.remove('active'); }} style={{color: darkMode ? 'white' : '#2c3e50'}}>Sobre</a></li>
            <li><a href="#" onClick={() => { navigate('/contato'); document.querySelector('.nav-links').classList.remove('active'); }} style={{color: darkMode ? 'white' : '#2c3e50'}}>Contato</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section style={styles.hero}>
          {config.images.map((img, index) => (
            <div key={index} style={{ ...styles.heroSlide, backgroundImage: `url(${img})`, opacity: index === currentImageIndex ? 1 : 0 }} />
          ))}
          <div style={styles.gradientOverlay}></div>
          <div style={styles.heroContent}>
            <h1 style={styles.h1}>{config.heroTitulo}</h1>
            <p style={styles.heroP}>{config.heroSubtitulo}</p>
          </div>
        </section>

        {config.secoes.map((secao, index) => (
          <section key={index} style={{ ...styles.featureSection, ...(index % 2 !== 0 ? { flexDirection: 'row-reverse' } : {}) }} className="feature-section-animate">
            <div style={styles.featureImageContainer} className="feature-image-container">
              <img src={secao.imagem} alt={secao.altImagem} style={styles.featureImage} className="feature-image" />
            </div>
            <div style={styles.featureText}>
              <h2 style={styles.h2}>{secao.titulo}</h2>
              <p style={styles.pWithBorder}>{secao.texto}</p>
            </div>
          </section>
        ))}

        <section style={styles.ctaContainer}>
          <button style={styles.ctaButton} onClick={() => navigate(config.ctaRota)}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(27,94,32,0.6)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 5px 20px rgba(27,94,32,0.4)'; }}>
            {config.ctaTexto}
          </button>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2025 GADYS. {config.footerTexto}</p>
      </footer>
    </div>
  );
};

export default NorteEstadoBase;
