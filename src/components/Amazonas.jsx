import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Amazonas = () => {
  const navigate = useNavigate();
  const darkMode = localStorage.getItem('darkMode') === 'true';
  const [isLoading, setIsLoading] = useState(true);

  const images = [
    '/images/geral/amazonas1.avif',
    '/images/geral/amazonas2.jpg',
    '/images/geral/amazonas3.1.jpg',
    '/images/geral/oam.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const firstImage = new Image();
    firstImage.src = images[0];
    firstImage.onload = () => setIsLoading(false);
    firstImage.onerror = () => setIsLoading(false);
  }, [images]);

  useEffect(() => {
    if (isLoading) return;
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isLoading, images.length]);

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
        backgroundPosition: 'center 65%',
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
                <h1 style={styles.h1}>Amazonas: O Coração da Floresta</h1>
                <p style={styles.heroP}>O maior estado do Brasil, um santuário de biodiversidade, cultura indígena e paisagens monumentais.</p>
            </div>
        </section>

        {/* Conteúdo da página... */}
        <section style={styles.featureSection}>
          <div style={styles.featureImageContainer}>
            <img src="/images/geral/pam.jpg" alt="Festival de Parintins" style={styles.featureImage} />
          </div>
          <div style={styles.featureText}>
            <h2 style={styles.h2}>Cultura Vibrante</h2>
            <p style={styles.pWithBorder}>A cultura do Amazonas é um espetáculo de cores e tradições. O Festival de Parintins, com a disputa entre os bois Garantido e Caprichoso, é a maior ópera a céu aberto do mundo.</p>
          </div>
        </section>

        <section style={{...styles.featureSection, flexDirection: 'row-reverse'}}>
            <div style={styles.featureImageContainer}>
                <img src="/images/geral/cam.webp" alt="Tacacá, prato típico do Amazonas" style={styles.featureImage} />
            </div>
            <div style={styles.featureText}>
                <h2 style={styles.h2}>Sabores da Selva</h2>
                <p style={styles.pWithBorder}>A culinária amazonense é uma fusão de sabores exóticos. Experimente o tacacá, o pirarucu de casaca e as frutas regionais como o cupuaçu e o açaí.</p>
            </div>
        </section>

        <section style={styles.featureSection}>
            <div style={styles.featureImageContainer}>
                <img src="/images/geral/eam.jpg" alt="Parque Nacional de Anavilhanas" style={styles.featureImage} />
            </div>
            <div style={styles.featureText}>
                <h2 style={styles.h2}>Natureza Monumental</h2>
                <p style={styles.pWithBorder}>A Amazônia é o lar da maior biodiversidade do planeta. Explore parques nacionais, encontre o majestoso Encontro das Águas e navegue pelo Rio Amazonas, uma experiência inesquecível.</p>
            </div>
        </section>

        <section style={styles.ctaContainer}>
            <button 
                style={styles.ctaButton}
                onClick={() => navigate('/destinos-amazonas')} 
                onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              Explore o Amazonas
            </button>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2025 GADYS. Descubra a Amazônia.</p>
      </footer>
    </div>
  );
};

export default Amazonas;
