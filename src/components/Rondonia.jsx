import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Rondonia = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/images/geral/amazonas2.jpg',
    '/images/geral/amazonas1.avif',
    '/images/geral/oam.jpg',
    '/images/geral/amazonas3.1.jpg',
  ];

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  useEffect(() => {
    const firstImage = new Image();
    firstImage.src = images[0];
    firstImage.onload = () => { setIsLoading(false); images.slice(1).forEach(src => { const img = new Image(); img.src = src; }); };
    firstImage.onerror = () => setIsLoading(false);
  }, [images]);

  useEffect(() => {
    if (isLoading) return;
    const interval = setInterval(() => setCurrentImageIndex(prev => (prev + 1) % images.length), 5000);
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
            <img onClick={() => navigate('/')} style={{cursor:'pointer'}} src="/images/logos/logo.png" alt="GADYS" className="logo" style={{height: '40px'}} />
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
          {images.map((img, index) => (<div key={index} style={{ ...styles.heroSlide, backgroundImage: `url(${img})`, opacity: index === currentImageIndex ? 1 : 0 }} />))}
          <div style={styles.gradientOverlay}></div>
          <div style={styles.heroContent}>
            <h1 style={styles.h1}>Rondônia: Porta da Amazônia</h1>
            <p style={styles.heroP}>Um estado de fronteiras, onde a floresta amazônica encontra o cerrado e a cultura indígena se mistura com a força do sertanejo.</p>
          </div>
        </section>

        <section style={styles.featureSection} className="feature-section-animate">
          <div style={styles.featureImageContainer} className="feature-image-container">
            <img src="/images/geral/amazonas2.jpg" alt="Natureza de Rondônia" style={styles.featureImage} className="feature-image" />
          </div>
          <div style={styles.featureText}>
            <h2 style={styles.h2}>Natureza de Fronteira</h2>
            <p style={styles.pWithBorder}>Rondônia é um estado de transição entre a Amazônia e o Cerrado, resultando em uma biodiversidade única. O Parque Nacional da Serra da Cutia e a Reserva Biológica do Jaru são santuários naturais que abrigam espécies raras e paisagens de tirar o fôlego.</p>
          </div>
        </section>

        <section style={{...styles.featureSection, flexDirection: 'row-reverse'}} className="feature-section-animate">
          <div style={styles.featureImageContainer} className="feature-image-container">
            <img src="/images/geral/amazonas1.avif" alt="Cultura indígena de Rondônia" style={styles.featureImage} className="feature-image" />
          </div>
          <div style={styles.featureText}>
            <h2 style={styles.h2}>Povos e Culturas</h2>
            <p style={styles.pWithBorder}>Rondônia abriga mais de 50 povos indígenas, tornando-o um dos estados com maior diversidade étnica do Brasil. A cultura rondoniense é uma mistura vibrante de tradições indígenas, nordestinas e sulistas.</p>
          </div>
        </section>

        <section style={styles.featureSection} className="feature-section-animate">
          <div style={styles.featureImageContainer} className="feature-image-container">
            <img src="/images/geral/oam.jpg" alt="Rio Madeira em Porto Velho" style={styles.featureImage} className="feature-image" />
          </div>
          <div style={styles.featureText}>
            <h2 style={styles.h2}>Rio Madeira e Porto Velho</h2>
            <p style={styles.pWithBorder}>O Rio Madeira, um dos maiores afluentes do Amazonas, é a espinha dorsal de Rondônia. Porto Velho guarda a história da Estrada de Ferro Madeira-Mamoré, conhecida como "Ferrovia do Diabo", um dos projetos de engenharia mais audaciosos da história brasileira.</p>
          </div>
        </section>

        <section style={styles.ctaContainer}>
          <button style={styles.ctaButton} onClick={() => navigate('/rondonia-pontos')}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(27,94,32,0.6)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 5px 20px rgba(27,94,32,0.4)'; }}>
            Explore Rondônia
          </button>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2025 GADYS. Descubra Rondônia.</p>
      </footer>
    </div>
  );
};

export default Rondonia;
