import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarShared from './NavbarShared';

const MinasGerais = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = ['/images/geral/mg.webp', '/images/geral/mg1.jpg'];

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
    styleSheet.innerText = `
      .feature-section-animate { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
      .feature-section-animate.is-visible { opacity: 1; transform: translateY(0); }
      .feature-image-container { overflow: hidden; border-radius: 15px; }
      .feature-image { transition: transform 0.4s ease; }
      .feature-image-container:hover .feature-image { transform: scale(1.05); }
    `;
    document.head.appendChild(styleSheet);
    const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); } }), { threshold: 0.2 });
    document.querySelectorAll('.feature-section-animate').forEach(s => observer.observe(s));
    return () => { document.head.removeChild(styleSheet); };
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
    featureText: { flex: '1 1 400px' },
    h2: { fontFamily: `'Georgia', serif`, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: darkMode ? '#d4a84b' : '#7a4a00', marginBottom: '1.5rem', fontWeight: 400 },
    pWithBorder: { fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: 1.8, color: darkMode ? '#adb5bd' : '#495057', paddingLeft: '1.5rem', borderLeft: `3px solid ${darkMode ? '#c8860a' : '#7a4a00'}` },
    ctaContainer: { textAlign: 'center', background: darkMode ? '#161b22' : '#f8f9fa', padding: '6rem 2rem' },
    ctaButton: { background: 'linear-gradient(45deg, #7a4a00, #c8860a)', color: 'white', border: 'none', padding: '1.2rem 3.5rem', borderRadius: '50px', cursor: 'pointer', fontSize: '1.25rem', fontWeight: 'bold', transition: 'transform 0.3s ease, box-shadow 0.3s ease', boxShadow: '0 5px 20px rgba(122,74,0,0.4)', display: 'inline-block' },
    footer: { background: '#0d1117', color: '#8b949e', textAlign: 'center', padding: '2.5rem' },
  };

  if (isLoading) return <div style={{ ...styles.page, ...styles.loadingContainer }}>Carregando...</div>;

  return (
    <div style={styles.page}>
      <NavbarShared darkMode={darkMode} toggleDarkMode={toggleDarkMode} paginaAtual={window.location.pathname} />
      <main>
        <section style={styles.hero}>
          {images.map((img, i) => <div key={i} style={{ ...styles.heroSlide, backgroundImage: `url(${img})`, opacity: i === currentImageIndex ? 1 : 0 }} />)}
          <div style={styles.gradientOverlay} />
          <div style={styles.heroContent}>
            <h1 style={styles.h1}>Minas Gerais: Ouro, Pedra e Sabor</h1>
            <p style={styles.heroP}>Terra do barroco, do queijo artesanal e do pão de queijo. Minas Gerais guarda cidades históricas tombadas pela UNESCO, cachoeiras escondidas e uma hospitalidade que aquece qualquer viajante.</p>
          </div>
        </section>

        <section style={styles.featureSection} className="feature-section-animate">
          <div style={styles.featureImageContainer} className="feature-image-container">
            <img src="/images/geral/mg2.jpg" alt="Ouro Preto MG" style={styles.featureImage} className="feature-image" />
          </div>
          <div style={styles.featureText}>
            <h2 style={styles.h2}>Cidades Históricas do Ouro</h2>
            <p style={styles.pWithBorder}>Ouro Preto, Tiradentes, Diamantina e Mariana formam um roteiro único de arquitetura barroca, igrejas douradas e ruas de pedra que contam a história do ciclo do ouro no Brasil. Ouro Preto é Patrimônio Mundial da UNESCO desde 1980.</p>
          </div>
        </section>

        <section style={{ ...styles.featureSection, flexDirection: 'row-reverse' }} className="feature-section-animate">
          <div style={styles.featureImageContainer} className="feature-image-container">
            <img src="/images/geral/mg3.jpg" alt="Natureza de Minas Gerais" style={styles.featureImage} className="feature-image" />
          </div>
          <div style={styles.featureText}>
            <h2 style={styles.h2}>Natureza das Gerais</h2>
            <p style={styles.pWithBorder}>A Serra do Cipó, o Parque Nacional da Canastra e a Chapada Diamantina mineira guardam cachoeiras, trilhas e uma biodiversidade extraordinária. As nascentes do Rio São Francisco ficam na Serra da Canastra, a 500 km de Belo Horizonte.</p>
          </div>
        </section>

        <section style={styles.featureSection} className="feature-section-animate">
          <div style={styles.featureImageContainer} className="feature-image-container">
            <img src="/images/geral/mg-comida.jpg" alt="Gastronomia mineira" style={styles.featureImage} className="feature-image" />
          </div>
          <div style={styles.featureText}>
            <h2 style={styles.h2}>A Melhor Cozinha do Brasil</h2>
            <p style={styles.pWithBorder}>O feijão tropeiro, o frango com quiabo, o tutu à mineira, o pão de queijo e o queijo artesanal da Serra da Canastra fazem da culinária mineira uma das mais amadas do Brasil. Comer em Minas é um ritual de afeto e tradição.</p>
          </div>
        </section>

        <section style={styles.ctaContainer}>
          <button style={styles.ctaButton} onClick={() => navigate('/mg-pontos')}
            onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.05)'; }}
            onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; }}>
            Explore Minas Gerais
          </button>
        </section>
      </main>
      <footer style={styles.footer}><p>&copy; 2025 GADYS. Descubra Minas Gerais.</p></footer>
    </div>
  );
};

export default MinasGerais;
