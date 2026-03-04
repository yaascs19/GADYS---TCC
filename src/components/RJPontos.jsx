import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const pontosTuristicos = [
    {
        id: 'cristo-redentor',
        nome: 'Cristo Redentor',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Monumento',
        descricao: 'Uma das Sete Maravilhas do Mundo Moderno no topo do Corcovado.',
        imagem: '/Cristo-rj.jpg',
      },
      {
        id: 'pao-de-acucar',
        nome: 'Pão de Açúcar',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Natureza',
        descricao: 'Cartão postal do Rio com vista panorâmica da cidade.',
        imagem: '/pao-rj.jpg',
      },
        {
        id: 'theatro-municipal',
        nome: 'Theatro Municipal',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Cultura',
        descricao: 'Teatro histórico com arquitetura inspirada na Ópera de Paris.',
        imagem: '/theatro-rj.avif',
      },
      {
        id: 'escadaria-selaron',
        nome: 'Escadaria Selarón',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Arte Urbana',
        descricao: 'Obra de arte urbana com azulejos coloridos de todo o mundo.',
        imagem: '/escadaria-rj.webp',
      },
        {
        id: 'arcos-da-lapa',
        nome: 'Arcos da Lapa',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Monumento',
        descricao: 'Aqueduto colonial transformado em símbolo da boemia carioca.',
        imagem: '/lapa-rj.webp',
      },
      {
        id: 'museu-do-amanha',
        nome: 'Museu do Amanhã',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Cultura',
        descricao: 'Museu de ciências com arquitetura futurista na zona portuária.',
        imagem: '/museu-rj.jpg',
      },
      {
        id: 'praia-de-copacabana',
        nome: 'Praia de Copacabana',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Praia',
        descricao: 'A praia mais famosa do mundo com 4km de areia branca.',
        imagem: '/copa2.webp',
      },
      {
        id: 'praia-de-ipanema',
        nome: 'Praia de Ipanema',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Praia',
        descricao: 'Praia sofisticada imortalizada na música de Tom Jobim.',
        imagem: '/ipa.webp',
      },
        {
        id: 'floresta-da-tijuca',
        nome: 'Floresta da Tijuca',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Natureza',
        descricao: 'Maior floresta urbana do mundo com trilhas e cachoeiras.',
        imagem: '/tiju.jpg',
      },
        {
        id: 'lagoa-rodrigo-de-freitas',
        nome: 'Lagoa Rodrigo de Freitas',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Natureza',
        descricao: 'Lagoa natural cercada por montanhas no coração da cidade.',
        imagem: '/lagoa.webp',
      },
      {
        id: 'jardim-botanico',
        nome: 'Jardim Botânico',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Natureza',
        descricao: 'Jardim histórico com mais de 6.500 espécies de plantas.',
        imagem: '/bota.jpg',
      },
      {
        id: 'parque-lage',
        nome: 'Parque Lage',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Natureza',
        descricao: 'Parque público com palacete e vista para o Corcovado.',
        imagem: '/parque.jpg',
      },
];

const RJPontos = () => {
  const navigate = useNavigate();
  const darkMode = localStorage.getItem('darkMode') === 'true';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredDestinos, setFilteredDestinos] = useState([]);

  const categories = ['Todos', 'Monumento', 'Natureza', 'Cultura', 'Arte Urbana', 'Praia'];
  
  useEffect(() => {
    let result = pontosTuristicos;
    if (selectedCategory !== 'Todos') {
      result = result.filter(item => item.categoria === selectedCategory);
    }
    if (searchTerm) {
      result = result.filter(item => 
        item.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.cidade.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredDestinos(result);
  }, [searchTerm, selectedCategory]);

  const styles = {
    page: {
      fontFamily: `'Source Sans Pro', sans-serif`,
      color: darkMode ? '#e6edf3' : '#24292f',
      background: darkMode ? '#0d1117' : '#ffffff',
      overflowX: 'hidden',
    },
    hero: {
      background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url("/pao-rj.jpg")`,
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
    controls: {
        maxWidth: '1200px',
        margin: '4rem auto -2rem',
        padding: '0 2rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1.5rem'
    },
    searchBar: {
        flex: '1 1 300px',
        padding: '0.8rem 1.2rem',
        fontSize: '1rem',
        borderRadius: '50px',
        border: `1px solid ${darkMode ? '#30363d' : '#dee2e6'}`,
        background: darkMode ? '#161b22' : '#f8f9fa',
        color: darkMode ? '#e6edf3' : '#24292f',
    },
    filterContainer: {
        flex: '2 1 400px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.8rem',
        justifyContent: 'center'
    },
    filterButton: {
        background: 'none',
        padding: '0.6rem 1.2rem',
        borderRadius: '20px',
        cursor: 'pointer',
        fontSize: '0.9rem',
        fontWeight: 600,
        transition: 'all 0.2s ease',
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
      color: darkMode ? '#6a1b9a' : '#4a148c',
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
    backButton: {
        background: 'rgba(255, 255, 255, 0.2)',
        color: 'white',
        border: '1px solid white',
        padding: '0.8rem 1.5rem',
        borderRadius: '50px',
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: 'bold',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        position: 'absolute',
        top: '2rem',
        left: '2rem',
      },
  };

  return (
    <div style={styles.page}>
      <main>
        <section style={styles.hero}>
           <button style={styles.backButton} onClick={() => navigate('/rio-de-janeiro')} 
            onMouseOver={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#2c3e50'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'; e.currentTarget.style.color = 'white'; }}
          >← Voltar</button>
          <h1 style={styles.h1}>Maravilhas do Rio</h1>
        </section>
        
        <div style={styles.controls}>
            <input
                type="text"
                placeholder="Pesquise por nome ou cidade..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={styles.searchBar}
            />
            <div style={styles.filterContainer}>
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        style={{
                            ...styles.filterButton,
                            color: selectedCategory === category ? '#fff' : (darkMode ? '#8b949e' : '#6c757d'),
                            background: selectedCategory === category ? (darkMode ? '#6a1b9a' : '#4a148c') : 'transparent',
                            border: `1px solid ${selectedCategory === category ? (darkMode ? '#6a1b9a' : '#4a148c') : (darkMode ? '#30363d' : '#dee2e6')}`
                        }}                        
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>

        <section style={styles.gridSection}>
          <div style={styles.grid}>
            {filteredDestinos.map((ponto) => (
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
        <p>&copy; 2025 GADYS. Feito com a energia do Rio de Janeiro.</p>
      </footer>
    </div>
  );
};

export default RJPontos;
