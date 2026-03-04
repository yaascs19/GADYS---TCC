import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Para = () => {
  const navigate = useNavigate();
  const darkMode = localStorage.getItem('darkMode') === 'true';
  const [isLoading, setIsLoading] = useState(true);

  const images = [
    '/images/geral/para.carrossel.jpg',
    '/images/geral/para.carrossel2.jpg',
    '/images/geral/para.carrossel3.webp',
    '/images/geral/para.carrossel4.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Smart pre-loading
  useEffect(() => {
    const firstImage = new Image();
    firstImage.src = images[0];

    firstImage.onload = () => {
      setIsLoading(false);
      // Pre-load rest of the images in the background
      images.slice(1).forEach(imageSrc => {
        const img = new Image();
        img.src = imageSrc;
      });
    };
    
    firstImage.onerror = () => {
      console.error("Failed to load the initial carousel image.");
      setIsLoading(false); // Show the page anyway
    };
  }, [images]);

  useEffect(() => {
    if (isLoading) return; // Don't start the carousel if images are not ready

    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isLoading, images.length]);

  useEffect(() => {
    if (isLoading) return;

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
      .feature-section-animate {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
      }
      .feature-section-animate.is-visible {
        opacity: 1;
        transform: translateY(0);
      }
      .feature-image-container {
        overflow: hidden; 
        border-radius: 15px;
      }
      .feature-image {
        transition: transform 0.4s ease;
      }
      .feature-image-container:hover .feature-image {
        transform: scale(1.05);
      }
    `;
    document.head.appendChild(styleSheet);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    const sections = document.querySelectorAll('.feature-section-animate');
    sections.forEach(section => observer.observe(section));

    return () => {
      document.head.removeChild(styleSheet);
      sections.forEach(section => observer.unobserve(section));
    };
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
      minHeight: '600px', // to avoid layout shift
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
    },
    featureImage: {
      width: '100%',
      height: 'auto',
      display: 'block',
      objectFit: 'cover',
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
                <h1 style={styles.h1}>Pará: Grande, diverso, cultural.</h1>
                <p style={styles.heroP}>um estado brasileiro da Região Norte, conhecido por sua grande extensão territorial, rica diversidade cultural e forte influência indígena e ribeirinha.</p>
            </div>
        </section>

        {/* -- Cultura -- */}
        <section style={styles.featureSection} className="feature-section-animate">
          <div style={styles.featureImageContainer} className="feature-image-container">
            <img src="/images/geral/ceramica - pará.jpg" alt="Detalhe de uma cerâmica Marajoara" style={styles.featureImage} className="feature-image"/>
          </div>
          <div style={styles.featureText}>
            <h2 style={styles.h2}>Herança que Pulsa</h2>
            <p style={styles.pWithBorder}>A cultura paraense é uma força que pulsa nas veias da Amazônia. É a fé no Círio de Nazaré, o ritmo do Carimbó que celebra a vida, e a herança ancestral da cerâmica Marajoara, com seus desenhos milenares. Aqui, a tradição não é uma memória; é o ar que se respira.</p>
          </div>
        </section>

        {/* -- Sabores -- */}
        <section style={{...styles.featureSection, flexDirection: 'row-reverse'}} className="feature-section-animate">
            <div style={styles.featureImageContainer} className="feature-image-container">
                <img src="/images/geral/tacaca.jpg" alt="Cuia de Tacacá com jambu e camarão" style={styles.featureImage} className="feature-image"/>
            </div>
            <div style={styles.featureText}>
                <h2 style={styles.h2}>O Sabor da Floresta</h2>
                <p style={styles.pWithBorder}>A culinária do Pará é uma expedição sensorial. Do Mercado Ver-o-Peso ao tremor do jambu no tacacá, da potência do açaí à complexidade do Pato no Tucupi, cada garfada é uma descoberta que alimenta corpo e alma.</p>
            </div>
        </section>

        {/* -- Natureza -- */}
        <section style={styles.featureSection} className="feature-section-animate">
          <div style={styles.featureImageContainer} className="feature-image-container">
            <img src="/images/geral/para-lugar.jpg" alt="Lugar do Pará" style={styles.featureImage} className="feature-image"/>
          </div>
          <div style={styles.featureText}>
            <h2 style={styles.h2}>Santuário Monumental</h2>
            <p style={styles.pWithBorder}>No Pará, a natureza é a protagonista. Da imensidão da Ilha de Marajó, com seus búfalos, às praias de Alter do Chão, os rios serpenteiam por uma floresta que respira e abriga uma biodiversidade estonteante.</p>
          </div>
        </section>

        <section style={styles.ctaContainer}>
            <button 
                style={styles.ctaButton}
                onClick={() => navigate('/destinos-para')}
                onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(74, 20, 140, 0.6)'; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 5px 20px rgba(74, 20, 140, 0.4)'; }}
            >
              Conheça os Destinos
            </button>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2025 GADYS. Feito com a energia do Pará.</p>
      </footer>
    </div>
  );
};

export default Para;
