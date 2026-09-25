import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarShared from './NavbarShared';

const Paraiba = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/images/geral/rn-natureza.jpg',
    '/images/geral/rn-pipa.jpg',
    '/images/geral/rn-baiaformosa.jpg',
    '/images/geral/praiaEx.jpg',
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
      .pb-feat-animate { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
      .pb-feat-animate.is-visible { opacity: 1; transform: translateY(0); }
      .pb-feat-img-wrap { overflow: hidden; border-radius: 15px; }
      .pb-feat-img { transition: transform 0.4s ease; }
      .pb-feat-img-wrap:hover .pb-feat-img { transform: scale(1.05); }
    `;
    document.head.appendChild(style);
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); } }),
      { threshold: 0.2 }
    );
    const sections = document.querySelectorAll('.pb-feat-animate');
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
    h2: { fontFamily: `'Georgia', serif`, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: darkMode ? '#80cbc4' : '#00695c', marginBottom: '1.5rem', fontWeight: 400 },
    p: { fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: 1.8, color: darkMode ? '#adb5bd' : '#495057', paddingLeft: '1.5rem', borderLeft: '3px solid #00695c' },
    cta: { textAlign: 'center', background: darkMode ? '#161b22' : '#f8f9fa', padding: '6rem 2rem' },
    ctaBtn: { background: 'linear-gradient(45deg, #00695c, #004d40)', color: 'white', border: 'none', padding: '1.2rem 3.5rem', borderRadius: '50px', cursor: 'pointer', fontSize: '1.25rem', fontWeight: 'bold', transition: 'transform 0.3s ease, box-shadow 0.3s ease', boxShadow: '0 5px 20px rgba(0,105,92,0.4)', display: 'inline-block' },
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
            <h1 style={s.h1}>Paraíba: Terra do Sol e do Mar</h1>
            <p style={s.heroP}>Do Cabo Branco, o ponto mais oriental das Américas, às falésias coloridas de Tambaba e Coqueirinho, a Paraíba encanta com praias paradisíacas, cultura vibrante e um povo acolhedor que celebra a vida com alegria.</p>
          </div>
        </section>

        <section style={s.section} className="pb-feat-animate">
          <div style={s.imgWrap} className="pb-feat-img-wrap">
            <img src="/images/geral/rn-natureza.jpg" alt="Litoral da Paraíba" style={s.img} className="pb-feat-img" />
          </div>
          <div style={s.text}>
            <h2 style={s.h2}>Praias que Encantam</h2>
            <p style={s.p}>A Paraíba possui um litoral de 117 km repleto de praias deslumbrantes. De João Pessoa, a segunda cidade mais verde do mundo, às falésias avermelhadas de Coqueirinho e Tambaba, cada praia guarda uma beleza única e inesquecível.</p>
          </div>
        </section>

        <section style={{ ...s.section, flexDirection: 'row-reverse' }} className="pb-feat-animate">
          <div style={s.imgWrap} className="pb-feat-img-wrap">
            <img src="/images/geral/rn-cultura.jpg" alt="Cultura da Paraíba" style={s.img} className="pb-feat-img" />
          </div>
          <div style={s.text}>
            <h2 style={s.h2}>Cultura e Tradição</h2>
            <p style={s.p}>A Paraíba é berço de grandes nomes da cultura brasileira, como Luiz Gonzaga e Ariano Suassuna. O forró, o repente, o artesanato em barro e a literatura de cordel fazem parte de uma identidade cultural rica que pulsa em cada cidade do estado.</p>
          </div>
        </section>

        <section style={s.section} className="pb-feat-animate">
          <div style={s.imgWrap} className="pb-feat-img-wrap">
            <img src="/images/geral/rn-gastronomia.jpg" alt="Gastronomia da Paraíba" style={s.img} className="pb-feat-img" />
          </div>
          <div style={s.text}>
            <h2 style={s.h2}>Sabores do Nordeste</h2>
            <p style={s.p}>A culinária paraibana é uma festa para os sentidos. Do peixe assado na brasa à moqueca de camarão, do baião de dois ao cuscuz com manteiga de garrafa, cada prato carrega a alma do sertão e do litoral em perfeita harmonia.</p>
          </div>
        </section>

        <section style={s.cta}>
          <button
            style={s.ctaBtn}
            onClick={() => navigate('/pb-pontos')}
            onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.05)'; }}
            onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; }}
          >
            Conheça os Destinos
          </button>
        </section>
      </main>

      <footer style={s.footer}>
        <p>&copy; 2025 GADYS. Feito com a energia da Paraíba.</p>
      </footer>
    </div>
  );
};

export default Paraiba;
