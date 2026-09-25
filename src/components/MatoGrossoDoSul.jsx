import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarShared from './NavbarShared';

const MatoGrossoDoSul = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/images/natureza/pantanal.jpeg',
    '/images/natureza/bonito.jpeg',
    '/images/geral/pant-xx.webp',
    '/images/geral/pi-natureza.jpg',
  ];

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem('darkMode', next.toString());
  };

  useEffect(() => {
    const img = new Image();
    img.src = images[0];
    img.onload = () => {
      setIsLoading(false);
      images.slice(1).forEach(src => { const i = new Image(); i.src = src; });
    };
    img.onerror = () => setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isLoading) return;
    const t = setInterval(() => setCurrentImageIndex(p => (p + 1) % images.length), 5000);
    return () => clearInterval(t);
  }, [isLoading, images.length]);

  useEffect(() => {
    if (isLoading) return;
    const style = document.createElement('style');
    style.innerText = `
      .ms-feat-animate { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
      .ms-feat-animate.is-visible { opacity: 1; transform: translateY(0); }
      .ms-feat-img-wrap { overflow: hidden; border-radius: 15px; }
      .ms-feat-img { transition: transform 0.4s ease; }
      .ms-feat-img-wrap:hover .ms-feat-img { transform: scale(1.05); }
    `;
    document.head.appendChild(style);
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); } }),
      { threshold: 0.2 }
    );
    const sections = document.querySelectorAll('.ms-feat-animate');
    sections.forEach(s => observer.observe(s));
    return () => { document.head.removeChild(style); sections.forEach(s => observer.unobserve(s)); };
  }, [isLoading]);

  const s = {
    page: { fontFamily: `'Source Sans Pro', sans-serif`, color: darkMode ? '#e6edf3' : '#24292f', background: darkMode ? '#0d1117' : '#ffffff', overflowX: 'hidden' },
    loading: { height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem' },
    hero: { position: 'relative', color: 'white', padding: '12rem 2rem', textAlign: 'center', overflow: 'hidden', minHeight: '600px' },
    slide: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', transition: 'opacity 1.2s ease-in-out', zIndex: 1 },
    heroContent: { position: 'relative', zIndex: 3 },
    overlay: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6))', zIndex: 2 },
    h1: { fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, textShadow: '0 4px 10px rgba(0,0,0,0.8)', letterSpacing: '1px', marginBottom: '1rem' },
    heroP: { fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', maxWidth: '800px', margin: '0 auto', fontWeight: 300, opacity: 0.9 },
    section: { display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', maxWidth: '1200px', margin: '6rem auto', padding: '0 2rem', gap: '4rem' },
    imgWrap: { flex: '1 1 400px', minWidth: '300px', borderRadius: '15px', boxShadow: darkMode ? '0 10px 30px rgba(0,0,0,0.4)' : '0 10px 30px rgba(0,0,0,0.1)', overflow: 'hidden' },
    img: { width: '100%', height: 'auto', display: 'block', objectFit: 'cover', transition: 'transform 0.4s ease' },
    text: { flex: '1 1 400px', position: 'relative' },
    h2: { fontFamily: `'Georgia', serif`, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: darkMode ? '#a5d6a7' : '#2e7d32', marginBottom: '1.5rem', fontWeight: 400 },
    p: { fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: 1.8, color: darkMode ? '#adb5bd' : '#495057', paddingLeft: '1.5rem', borderLeft: '3px solid #558b2f' },
    cta: { textAlign: 'center', background: darkMode ? '#161b22' : '#f8f9fa', padding: '6rem 2rem' },
    ctaBtn: { background: 'linear-gradient(45deg, #558b2f, #33691e)', color: 'white', border: 'none', padding: '1.2rem 3.5rem', borderRadius: '50px', cursor: 'pointer', fontSize: '1.25rem', fontWeight: 'bold', transition: 'transform 0.3s ease, box-shadow 0.3s ease', boxShadow: '0 5px 20px rgba(85,139,47,0.4)', display: 'inline-block' },
    footer: { background: '#0d1117', color: '#8b949e', textAlign: 'center', padding: '2.5rem' },
  };

  if (isLoading) return <div style={{ ...s.page, ...s.loading }}>Carregando...</div>;

  return (
    <div style={s.page}>
      <NavbarShared darkMode={darkMode} toggleDarkMode={toggleDarkMode} paginaAtual={window.location.pathname} />

      <main>
        <section style={s.hero}>
          {images.map((img, i) => (
            <div key={i} style={{ ...s.slide, backgroundImage: `url(${img})`, opacity: i === currentImageIndex ? 1 : 0 }} />
          ))}
          <div style={s.overlay} />
          <div style={s.heroContent}>
            <h1 style={s.h1}>Mato Grosso do Sul: Natureza em Estado Puro</h1>
            <p style={s.heroP}>Do Pantanal, maior planície alagável do planeta, às águas cristalinas de Bonito, Mato Grosso do Sul é o destino do ecoturismo brasileiro — um santuário de biodiversidade que encanta e surpreende a cada visita.</p>
          </div>
        </section>

        <section style={s.section} className="ms-feat-animate">
          <div style={s.imgWrap} className="ms-feat-img-wrap">
            <img src="/images/natureza/pantanal.jpeg" alt="Pantanal" style={s.img} className="ms-feat-img" />
          </div>
          <div style={s.text}>
            <h2 style={s.h2}>O Pantanal, Patrimônio da Humanidade</h2>
            <p style={s.p}>O Pantanal é a maior planície inundável do planeta e um dos ecossistemas mais ricos em biodiversidade do mundo. Reconhecido como Patrimônio Natural da Humanidade pela UNESCO, abriga onças-pintadas, capivaras, tuiuiús e mais de 650 espécies de aves em uma paisagem de beleza incomparável.</p>
          </div>
        </section>

        <section style={{ ...s.section, flexDirection: 'row-reverse' }} className="ms-feat-animate">
          <div style={s.imgWrap} className="ms-feat-img-wrap">
            <img src="/images/natureza/bonito.jpeg" alt="Bonito" style={s.img} className="ms-feat-img" />
          </div>
          <div style={s.text}>
            <h2 style={s.h2}>Bonito, Capital do Ecoturismo</h2>
            <p style={s.p}>Bonito é referência mundial em ecoturismo sustentável. Suas águas cristalinas, rios de visibilidade única, grutas e cachoeiras formam um cenário de rara beleza. A flutuação no Rio da Prata e as grutas do Lago Azul são experiências que ficam para sempre na memória.</p>
          </div>
        </section>

        <section style={s.section} className="ms-feat-animate">
          <div style={s.imgWrap} className="ms-feat-img-wrap">
            <img src="/images/geral/pant-xx.webp" alt="Fauna do Pantanal" style={s.img} className="ms-feat-img" />
          </div>
          <div style={s.text}>
            <h2 style={s.h2}>Biodiversidade Única</h2>
            <p style={s.p}>Mato Grosso do Sul concentra três biomas — Pantanal, Cerrado e Mata Atlântica — criando uma diversidade de fauna e flora sem igual no Brasil. Das onças-pintadas do Pantanal às araras-azuis do Cerrado, o estado é um paraíso para amantes da natureza e do turismo de aventura.</p>
          </div>
        </section>

        <section style={s.cta}>
          <button
            style={s.ctaBtn}
            onClick={() => navigate('/ms-pontos')}
            onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.05)'; }}
            onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; }}
          >
            Conheça os Destinos
          </button>
        </section>
      </main>

      <footer style={s.footer}>
        <p>&copy; 2025 GADYS. Feito com a energia de Mato Grosso do Sul.</p>
      </footer>
    </div>
  );
};

export default MatoGrossoDoSul;
