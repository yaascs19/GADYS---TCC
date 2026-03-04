
import React from 'react';

const pontosTuristicos = [
  {
    id: 'alter-do-chao',
    nome: 'Alter do Chão',
    cidade: 'Santarém - PA',
    descricao: 'Conhecida como o Caribe Amazônico, esta vila balneária é famosa por suas praias de areia branca e águas cristalinas do Rio Tapajós.',
    imagem: '/images/natureza/alter-do-chao.jpg', 
  },
  {
    id: 'ver-o-peso',
    nome: 'Mercado Ver-o-Peso',
    cidade: 'Belém - PA',
    descricao: 'Um dos mercados públicos mais antigos do Brasil, uma explosão de cores, cheiros e sabores da Amazônia.',
    imagem: '/images/monumentos/mercadaosp.jpg', 
  },
  {
    id: 'feliz-lusitania',
    nome: 'Feliz Lusitânia',
    cidade: 'Belém - PA',
    descricao: 'O marco inicial de Belém, um complexo histórico que abriga o Forte do Presépio e a Casa das Onze Janelas.',
    imagem: '/images/monumentos/forte.jpeg', 
  },
  {
    id: 'marajo',
    nome: 'Ilha de Marajó',
    cidade: 'Arquipélago de Marajó - PA',
    descricao: 'A maior ilha fluviomarinha do mundo, um santuário de búfalos, com praias selvagens e cultura marajoara única.',
    imagem: '/images/natureza/noronha.jpeg', 
  },
  {
    id: 'mangal',
    nome: 'Mangal das Garças',
    cidade: 'Belém - PA',
    descricao: 'Um parque naturalístico no coração de Belém, com um borboletário, viveiro de aves e um mirante com vista para o rio.',
    imagem: '/images/natureza/anavilhanas.jpeg', 
  },
];

const ParaPontos = () => {
  const darkMode = localStorage.getItem('darkMode') === 'true';

  const styles = {
    page: {
      fontFamily: `'Source Sans Pro', sans-serif`,
      color: darkMode ? '#e6edf3' : '#24292f',
      background: darkMode ? '#0d1117' : '#ffffff',
      overflowX: 'hidden',
    },
    hero: {
      background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url("/images/natureza/cataratas.jpeg")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '8rem 2rem 6rem',
      textAlign: 'center',
    },
    h1: {
      fontFamily: `'Georgia', serif`,
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: 400,
      textShadow: '0 2px 8px rgba(0,0,0,0.7)',
    },
    gridSection: {
      maxWidth: '1200px',
      margin: '6rem auto',
      padding: '0 2rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '3rem',
    },
    card: {
      background: darkMode ? '#161b22' : '#f8f9fa',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: darkMode ? '0 8px 25px rgba(0,0,0,0.3)' : '0 8px 25px rgba(0,0,0,0.1)',
      border: `1px solid ${darkMode ? '#30363d' : '#dee2e6'}`,
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
    },
    cardImageContainer: {
        overflow: 'hidden',
    },
    cardImage: {
      width: '100%',
      height: '220px',
      objectFit: 'cover',
      transition: 'transform 0.4s ease',
    },
    cardContent: {
        padding: '1.5rem 1.8rem 2rem',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    h3: {
      fontFamily: `'Georgia', serif`,
      fontSize: '1.6rem',
      fontWeight: 400,
      color: darkMode ? '#a5d6ff' : '#005a9c',
      marginBottom: '0.5rem',
    },
    cardCity: {
      color: darkMode ? '#8b949e' : '#6c757d',
      marginBottom: '1rem',
      fontSize: '0.9rem',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    cardText: {
      flex: 1,
      color: darkMode ? '#c9d1d9' : '#343a40',
      lineHeight: 1.7,
    },
    cardButton: {
      background: 'none',
      color: darkMode ? '#6a1b9a' : '#4a148c', // Roxo-açaí, mas sutil
      border: `2px solid ${darkMode ? '#6a1b9a' : '#4a148c'}`,
      padding: '0.7rem 1.5rem',
      borderRadius: '50px',
      cursor: 'pointer',
      fontSize: '0.95rem',
      fontWeight: 'bold',
      textDecoration: 'none',
      transition: 'background 0.3s ease, color 0.3s ease',
      marginTop: '1.5rem',
      alignSelf: 'flex-start',
    },
    footer: {
      background: '#0d1117',
      color: '#8b949e',
      textAlign: 'center',
      padding: '2.5rem',
    },
  };

  return (
    <div style={styles.page}>
      <main>
        <section style={styles.hero}>
          <h1 style={styles.h1}>Explore os Tesouros do Pará</h1>
        </section>

        <section style={styles.gridSection}>
          <div style={styles.grid}>
            {pontosTuristicos.map((ponto) => (
              <div 
                key={ponto.id}
                style={styles.card}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = darkMode ? '0 12px 40px rgba(0,0,0,0.4)' : '0 12px 40px rgba(0,0,0,0.15)';
                  e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = darkMode ? '0 8px 25px rgba(0,0,0,0.3)' : '0 8px 25px rgba(0,0,0,0.1)';
                  e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                }}
              >
                <div style={styles.cardImageContainer}>
                    <img src={ponto.imagem} alt={ponto.nome} style={styles.cardImage} />
                </div>
                <div style={styles.cardContent}>
                  <h3 style={styles.h3}>{ponto.nome}</h3>
                  <p style={styles.cardCity}>{ponto.cidade}</p>
                  <p style={styles.cardText}>{ponto.descricao}</p>
                  <a href="#" style={styles.cardButton}
                    onMouseOver={(e) => { e.currentTarget.style.background = darkMode ? '#6a1b9a' : '#4a148c'; e.currentTarget.style.color = '#fff'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = darkMode ? '#6a1b9a' : '#4a148c'; }}
                  >
                    Saber Mais
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2025 GADYS. Feito com a energia do Pará.</p>
      </footer>
    </div>
  );
};

export default ParaPontos;
