import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarShared from './NavbarShared';

const Sergipe = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/images/geral/se-xingo.jpg',
    '/images/geral/se-aracaju.jpg',
    '/images/geral/se-laranjeiras.jpg',
    '/images/geral/se-mangue.jpg',
  ];

  const toggleDarkMode = () => {
    const n = !darkMode;
    setDarkMode(n);
    localStorage.setItem('darkMode', n.toString());
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
    const interval = setInterval(() => {
      setCurrentImageIndex(p => (p + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isLoading, images.length]);

  useEffect(() => {
    if (isLoading) return;
    const style = document.createElement('style');
    style.innerText = `.fsa{opacity:0;transform:translateY(30px);transition:opacity .8s ease-out,transform .8s ease-out}.fsa.vis{opacity:1;transform:translateY(0)}.fic{overflow:hidden;border-radius:15px}.fi{transition:transform .4s ease}.fic:hover .fi{transform:scale(1.05)}`;
    document.head.appendChild(style);
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); } });
    }, { threshold: 0.2 });
    document.querySelectorAll('.fsa').forEach(el => obs.observe(el));
    return () => { document.head.removeChild(style); };
  }, [isLoading]);

  const s = {
    page: { fontFamily: `'Source Sans Pro', sans-serif`, color: darkMode ? '#e6edf3' : '#24292f', background: darkMode ? '#0d1117' : '#ffffff', overflowX: 'hidden' },
    hero: { position: 'relative', color: 'white', padding: '12rem 2rem', textAlign: 'center', overflow: 'hidden', minHeight: '600px' },
    heroSlide: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', transition: 'opacity 1.2s ease-in-out', zIndex: 1 },
    overlay: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6))', zIndex: 2 },
    heroContent: { position: 'relative', zIndex: 3 },
    h1: { fontSize: 'clamp(2.5rem,5vw,4.5rem)', fontWeight: 900, textShadow: '0 4px 10px rgba(0,0,0,0.8)', letterSpacing: '1px', marginBottom: '1rem' },
    heroP: { fontSize: 'clamp(1.1rem,2.5vw,1.5rem)', maxWidth: '800px', margin: '0 auto', fontWeight: 300, opacity: 0.9 },
    section: { display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', maxWidth: '1200px', margin: '6rem auto', padding: '0 2rem', gap: '4rem' },
    imgBox: { flex: '1 1 400px', minWidth: '300px', borderRadius: '15px', boxShadow: darkMode ? '0 10px 30px rgba(0,0,0,0.4)' : '0 10px 30px rgba(0,0,0,0.1)', overflow: 'hidden' },
    img: { width: '100%', height: 'auto', display: 'block', objectFit: 'cover', transition: 'transform .4s ease' },
    textBox: { flex: '1 1 400px' },
    h2: { fontFamily: `'Georgia', serif`, fontSize: 'clamp(2rem,4vw,2.8rem)', color: darkMode ? '#c69f68' : '#b5651d', marginBottom: '1.5rem', fontWeight: 400 },
    p: { fontSize: 'clamp(1rem,2vw,1.15rem)', lineHeight: 1.8, color: darkMode ? '#adb5bd' : '#495057', paddingLeft: '1.5rem', borderLeft: `3px solid ${darkMode ? '#1a6b3c' : '#155724'}` },
    cta: { textAlign: 'center', background: darkMode ? '#161b22' : '#f8f9fa', padding: '6rem 2rem' },
    ctaBtn: { background: 'linear-gradient(45deg,#1a6b3c,#155724)', color: 'white', border: 'none', padding: '1.2rem 3.5rem', borderRadius: '50px', cursor: 'pointer', fontSize: '1.25rem', fontWeight: 'bold', transition: 'transform .3s ease,box-shadow .3s ease', boxShadow: '0 5px 20px rgba(21,87,36,0.4)', display: 'inline-block' },
    footer: { background: '#0d1117', color: '#8b949e', textAlign: 'center', padding: '2.5rem' },
  };

  if (isLoading) return <div style={{ ...s.page, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem' }}>Carregando...</div>;

  return (
    <div style={s.page}>
      <NavbarShared darkMode={darkMode} toggleDarkMode={toggleDarkMode} paginaAtual={window.location.pathname} />
      <main>
        <section style={s.hero}>
          {images.map((img, i) => (
            <div key={i} style={{ ...s.heroSlide, backgroundImage: `url(${img})`, opacity: i === currentImageIndex ? 1 : 0 }} />
          ))}
          <div style={s.overlay} />
          <div style={s.heroContent}>
            <h1 style={s.h1}>Sergipe: O Menor, o Maior Encanto</h1>
            <p style={s.heroP}>O menor estado do Brasil guarda paisagens deslumbrantes, cultura rica e uma hospitalidade que conquista qualquer visitante.</p>
          </div>
        </section>

        <section style={s.section} className="fsa">
          <div style={s.imgBox} className="fic">
            <img src="/images/geral/se-xingo.jpg" alt="Cânion do Xingó" style={s.img} className="fi" />
          </div>
          <div style={s.textBox}>
            <h2 style={s.h2}>Maravilhas Naturais</h2>
            <p style={s.p}>O Cânion do Xingó é um dos espetáculos naturais mais impressionantes do Nordeste. Com paredes rochosas de até 150 metros de altura e águas esverdeadas do Rio São Francisco, o cânion revela uma Sergipe selvagem e inesquecível.</p>
          </div>
        </section>

        <section style={{ ...s.section, flexDirection: 'row-reverse' }} className="fsa">
          <div style={s.imgBox} className="fic">
            <img src="/images/geral/se-laranjeiras.jpg" alt="Laranjeiras" style={s.img} className="fi" />
          </div>
          <div style={s.textBox}>
            <h2 style={s.h2}>História e Tradição</h2>
            <p style={s.p}>Laranjeiras, cidade histórica tombada pelo IPHAN, guarda igrejas barrocas, casarões coloniais e uma das mais ricas expressões do folclore nordestino. O Encontro Cultural de Laranjeiras é um dos maiores festivais de cultura popular do Brasil.</p>
          </div>
        </section>

        <section style={s.section} className="fsa">
          <div style={s.imgBox} className="fic">
            <img src="/images/geral/se-aracaju.jpg" alt="Aracaju" style={s.img} className="fi" />
          </div>
          <div style={s.textBox}>
            <h2 style={s.h2}>Praias e Sabores</h2>
            <p style={s.p}>Aracaju encanta com suas praias urbanas de águas mornas e o famoso Mercado Municipal, onde o caranguejo com pirão e o sururu são protagonistas. A orla de Atalaia é um dos cartões-postais mais animados do Nordeste.</p>
          </div>
        </section>

        <section style={s.cta}>
          <button
            style={s.ctaBtn}
            onClick={() => navigate('/sergipe-pontos')}
            onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.05)'; }}
            onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; }}
          >
            Conheça os Destinos
          </button>
        </section>
      </main>
      <footer style={s.footer}>
        <p>&copy; 2025 GADYS. Feito com a energia de Sergipe.</p>
      </footer>
    </div>
  );
};

export default Sergipe;
