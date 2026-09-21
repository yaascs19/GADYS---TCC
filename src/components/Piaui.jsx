import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarShared from './NavbarShared';

const Piaui = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  const images = [
    '/images/geral/pi1.jpg',
    '/images/geral/pi2.jpg',
    '/images/geral/pi3.jpg',
    '/images/geral/pi4.jpg',
  ];

  useEffect(() => {
    const firstImage = new Image();
    firstImage.src = images[0];
    firstImage.onload = () => {
      setIsLoading(false);
      images.slice(1).forEach(src => { const img = new Image(); img.src = src; });
    };
    firstImage.onerror = () => setIsLoading(false);
  }, []);

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
    styleSheet.innerText = `
      .pi-feature-animate { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
      .pi-feature-animate.is-visible { opacity: 1; transform: translateY(0); }
      .pi-feature-img-wrap { overflow: hidden; border-radius: 15px; }
      .pi-feature-img-wrap img { transition: transform 0.4s ease; }
      .pi-feature-img-wrap:hover img { transform: scale(1.05); }
    `;
    document.head.appendChild(styleSheet);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); }
      });
    }, { threshold: 0.2 });
    document.querySelectorAll('.pi-feature-animate').forEach(el => observer.observe(el));
    return () => { document.head.removeChild(styleSheet); };
  }, [isLoading]);

  const s = {
    page: {
      fontFamily: `'Source Sans Pro', sans-serif`,
      color: darkMode ? '#e6edf3' : '#24292f',
      background: darkMode ? '#0d1117' : '#ffffff',
      overflowX: 'hidden',
    },
    loading: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.5rem',
    },
    hero: {
      position: 'relative',
      color: 'white',
      padding: '12rem 2rem',
      textAlign: 'center',
      overflow: 'hidden',
      minHeight: '600px',
    },
    heroSlide: {
      position: 'absolute',
      top: 0, left: 0,
      width: '100%', height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: 'opacity 1.2s ease-in-out',
      zIndex: 1,
    },
    overlay: {
      position: 'absolute',
      top: 0, left: 0,
      width: '100%', height: '100%',
      background: 'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.6))',
      zIndex: 2,
    },
    heroContent: { position: 'relative', zIndex: 3 },
    h1: {
      fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
      fontWeight: 900,
      textShadow: '0 4px 10px rgba(0,0,0,0.8)',
      letterSpacing: '1px',
      marginBottom: '1rem',
    },
    heroP: {
      fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
      maxWidth: '800px',
      margin: '0 auto',
      fontWeight: 300,
      opacity: 0.9,
    },
    section: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '1200px',
      margin: '6rem auto',
      padding: '0 2rem',
      gap: '4rem',
    },
    imgWrap: {
      flex: '1 1 400px',
      minWidth: '300px',
      borderRadius: '15px',
      boxShadow: darkMode ? '0 10px 30px rgba(0,0,0,0.4)' : '0 10px 30px rgba(0,0,0,0.1)',
      overflow: 'hidden',
    },
    img: { width: '100%', height: 'auto', display: 'block', objectFit: 'cover' },
    text: { flex: '1 1 400px' },
    h2: {
      fontFamily: `'Georgia', serif`,
      fontSize: 'clamp(2rem, 4vw, 2.8rem)',
      color: darkMode ? '#a8d5a2' : '#2e7d32',
      marginBottom: '1.5rem',
      fontWeight: 400,
    },
    p: {
      fontSize: 'clamp(1rem, 2vw, 1.15rem)',
      lineHeight: 1.8,
      color: darkMode ? '#adb5bd' : '#495057',
      paddingLeft: '1.5rem',
      borderLeft: `3px solid ${darkMode ? '#2e7d32' : '#1b5e20'}`,
    },
    cta: {
      textAlign: 'center',
      background: darkMode ? '#161b22' : '#f1f8f1',
      padding: '6rem 2rem',
    },
    ctaBtn: {
      background: 'linear-gradient(45deg, #2e7d32, #1b5e20)',
      color: 'white',
      border: 'none',
      padding: '1.2rem 3.5rem',
      borderRadius: '50px',
      cursor: 'pointer',
      fontSize: '1.25rem',
      fontWeight: 'bold',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      boxShadow: '0 5px 20px rgba(46,125,50,0.4)',
      display: 'inline-block',
    },
    footer: {
      background: '#0d1117',
      color: '#8b949e',
      textAlign: 'center',
      padding: '2.5rem',
    },
  };

  if (isLoading) return <div style={{ ...s.page, ...s.loading }}>Carregando...</div>;

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
            <h1 style={s.h1}>Piauí: Berço da Pré-História Brasileira</h1>
            <p style={s.heroP}>
              Das pinturas rupestres de 50 mil anos da Serra da Capivara às dunas douradas de
              Luís Correia, o Piauí guarda segredos milenares e paisagens que desafiam a imaginação
              — o estado mais antigo da humanidade no Brasil.
            </p>
          </div>
        </section>

        <section style={s.section} className="pi-feature-animate">
          <div style={s.imgWrap} className="pi-feature-img-wrap">
            <img src="/images/geral/pi-cultura.jpg" alt="Cultura piauiense" style={s.img} />
          </div>
          <div style={s.text}>
            <h2 style={s.h2}>Raízes Milenares</h2>
            <p style={s.p}>
              O Piauí abriga o maior acervo de arte rupestre das Américas no Parque Nacional
              Serra da Capivara — pinturas de até 50 mil anos que reescrevem a história da
              presença humana no continente. Uma herança que coloca o estado no centro
              das maiores descobertas arqueológicas do mundo.
            </p>
          </div>
        </section>

        <section style={{ ...s.section, flexDirection: 'row-reverse' }} className="pi-feature-animate">
          <div style={s.imgWrap} className="pi-feature-img-wrap">
            <img src="/images/geral/pi-gastronomia.jpg" alt="Gastronomia piauiense" style={s.img} />
          </div>
          <div style={s.text}>
            <h2 style={s.h2}>Sabores do Cerrado e do Sertão</h2>
            <p style={s.p}>
              A culinária piauiense é única no Nordeste — o carneiro assado de Picos, o
              sarrabulho, o arroz de cuxá e os doces de buriti revelam a riqueza de um
              povo que soube transformar os ingredientes do cerrado e do sertão em
              uma gastronomia cheia de identidade.
            </p>
          </div>
        </section>

        <section style={s.section} className="pi-feature-animate">
          <div style={s.imgWrap} className="pi-feature-img-wrap">
            <img src="/images/geral/pi-natureza.jpg" alt="Natureza do Piauí" style={s.img} />
          </div>
          <div style={s.text}>
            <h2 style={s.h2}>Natureza Surpreendente</h2>
            <p style={s.p}>
              Das formações rochosas de Sete Cidades às dunas e lagoas do Delta do Parnaíba,
              das praias desertas de Luís Correia ao cerrado do sul do estado, o Piauí
              surpreende com uma diversidade de paisagens que poucos conhecem e
              todos que visitam jamais esquecem.
            </p>
          </div>
        </section>

        <section style={s.cta}>
          <button
            style={s.ctaBtn}
            onClick={() => navigate('/pi-pontos')}
            onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.05)'; }}
            onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; }}
          >
            Conheça os Destinos
          </button>
        </section>
      </main>

      <footer style={s.footer}>
        <p>&copy; 2025 GADYS. Feito com a força milenar do Piauí.</p>
      </footer>
    </div>
  );
};

export default Piaui;
