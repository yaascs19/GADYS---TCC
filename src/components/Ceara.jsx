import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Ceara = () => {
  const navigate = useNavigate();
  const darkMode = localStorage.getItem('darkMode') === 'true';
  const [isLoading, setIsLoading] = useState(true);

  const images = [
    '/images/geral/Ceara3.jpg',
    '/images/geral/ceara.webp',
    '/images/geral/Ceara1.webp',
    '/images/geral/Ceara2.webp',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const firstImage = new Image();
    firstImage.src = images[0];
    firstImage.onload = () => {
      setIsLoading(false);
      images.slice(1).forEach(imageSrc => {
        const img = new Image();
        img.src = imageSrc;
      });
    };
    firstImage.onerror = () => setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isLoading) return;
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isLoading]);

  useEffect(() => {
    if (isLoading) return;
    const styleSheet = document.createElement('style');
    styleSheet.innerText = `
      .feature-image-container { overflow: hidden; border-radius: 15px; }
      .feature-image { transition: transform 0.4s ease; }
      .feature-image-container:hover .feature-image { transform: scale(1.05); }
    `;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, [isLoading]);

  const styles = {
    page: {
      fontFamily: `'Source Sans Pro', sans-serif`,
      color: darkMode ? '#e6edf3' : '#24292f',
      background: darkMode ? '#0d1117' : '#ffffff',
      overflowX: 'hidden',
    },
    loadingContainer: {
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
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'opacity 1.2s ease-in-out',
        zIndex: 1,
    },
    heroContent: {
        position: 'relative',
        zIndex: 3,
    },
    gradientOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6))',
        zIndex: 2,
    },
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
    featureSection: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '1200px',
      margin: '6rem auto',
      padding: '0 2rem',
      gap: '4rem',
    },
    featureImageContainer: {
      flex: '1 1 400px',
      minWidth: '300px',
      borderRadius: '15px',
      boxShadow: darkMode ? '0 10px 30px rgba(0,0,0,0.4)' : '0 10px 30px rgba(0,0,0,0.1)',
      overflow: 'hidden',
    },
    featureImage: {
      width: '100%',
      height: 'auto',
      display: 'block',
      objectFit: 'cover',
      transition: 'transform 0.4s ease',
    },
    featureText: {
      flex: '1 1 400px',
      position: 'relative',
    },
    h2: {
      fontFamily: `'Georgia', serif`,
      fontSize: 'clamp(2rem, 4vw, 2.8rem)',
      color: darkMode ? '#c69f68' : '#b5651d',
      marginBottom: '1.5rem',
      fontWeight: 400,
    },
    pWithBorder: {
      fontSize: 'clamp(1rem, 2vw, 1.15rem)',
      lineHeight: 1.8,
      color: darkMode ? '#adb5bd' : '#495057',
      paddingLeft: '1.5rem',
      borderLeft: `3px solid ${darkMode ? '#6a1b9a' : '#4a148c'}`,
    },
    ctaContainer: {
      textAlign: 'center',
      background: darkMode ? '#161b22' : '#f8f9fa',
      padding: '6rem 2rem',
    },
    ctaButton: {
      background: 'linear-gradient(45deg, #6a1b9a, #4a148c)',
      color: 'white',
      border: 'none',
      padding: '1.2rem 3.5rem',
      borderRadius: '50px',
      cursor: 'pointer',
      fontSize: '1.25rem',
      textDecoration: 'none',
      fontWeight: 'bold',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      boxShadow: '0 5px 20px rgba(74, 20, 140, 0.4)',
      display: 'inline-block',
    },
    footer: {
      background: '#0d1117',
      color: '#8b949e',
      textAlign: 'center',
      padding: '2.5rem',
    },
  };
  
  if (isLoading) {
    return (
        <div style={{...styles.page, ...styles.loadingContainer}}>
            Carregando...
        </div>
    );
  }

  return (
    <div style={styles.page}>
      <main>
        <section style={styles.hero}>
            {images.map((img, index) => (
                <div
                key={index}
                style={{
                    ...styles.heroSlide,
                    backgroundImage: `url(${img})`,
                    opacity: index === currentImageIndex ? 1 : 0,
                }}
                />
            ))}
            <div style={styles.gradientOverlay}></div>
            <div style={styles.heroContent}>
                <h1 style={styles.h1}>Ceará: Terra da Luz</h1>
                <p style={styles.heroP}>Um estado brasileiro do Nordeste, conhecido por suas praias paradisíacas, cultura vibrante e o povo acolhedor que encanta visitantes do mundo inteiro.</p>
            </div>
        </section>

        <section style={styles.featureSection}>
          <div style={styles.featureImageContainer} className="feature-image-container">
            <img src="/images/geral/CearaInicio.jpg" alt="Ceará" style={styles.featureImage} className="feature-image" />
          </div>
          <div style={styles.featureText}>
            <h2 style={styles.h2}>Cultura que Encanta</h2>
            <p style={styles.pWithBorder}>A cultura cearense é rica e diversificada. Do forró que embala as noites ao artesanato em renda, das lendas sertanejas ao humor característico do povo, o Ceará respira tradição e modernidade em perfeita harmonia.</p>
          </div>
        </section>

        <section style={{...styles.featureSection, flexDirection: 'row-reverse'}}>
            <div style={styles.featureImageContainer} className="feature-image-container">
            <img src="/images/geral/baiao2.jpg" alt="Baião de dois" style={styles.featureImage} className="feature-image" />
            </div>
            <div style={styles.featureText}>
                <h2 style={styles.h2}>Sabores do Sertão</h2>
                <p style={styles.pWithBorder}>A culinária cearense é uma explosão de sabores. Da carne de sol ao baião de dois, da tapioca recheada ao peixe fresco, cada prato conta a história de um povo que transforma simplicidade em arte gastronômica.</p>
            </div>
        </section>

        <section style={styles.featureSection}>
          <div style={styles.featureImageContainer} className="feature-image-container">
            <img src="/images/geral/praiaEx.jpg" alt="Praia" style={styles.featureImage} className="feature-image" />
          </div>
          <div style={styles.featureText}>
            <h2 style={styles.h2}>Paraíso Natural</h2>
            <p style={styles.pWithBorder}>No Ceará, a natureza é generosa. Das dunas de Jericoacoara às falésias de Canoa Quebrada, das praias urbanas de Fortaleza ao sertão verdejante, cada canto revela uma beleza única e inesquecível.</p>
          </div>
        </section>

        <section style={styles.ctaContainer}>
            <button 
                style={styles.ctaButton}
                onClick={() => navigate('/ceara-pontos')} 
                onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              Conheça os Destinos
            </button>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2025 GADYS. Feito com a energia do Ceará.</p>
      </footer>
    </div>
  );
};

export default Ceara;
