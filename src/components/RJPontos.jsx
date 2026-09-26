import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './RJPontos.css';
import { useLocaisAtivos } from '../hooks/useLocaisAtivos';
import { useCategorias } from '../hooks/useCategorias';

const pontosTuristicos = [
    {
        id: 'cristo-redentor',
        nome: 'Cristo Redentor',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Monumentos',
        imagem: '/Cristo-rj.jpg',
        descricao: 'Uma das Sete Maravilhas do Mundo Moderno, o Cristo Redentor domina o Corcovado a 710 m de altitude com os braços abertos sobre a Cidade Maravilhosa.',
      },
      {
        id: 'pao-de-acucar',
        nome: 'Pão de Açúcar',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Lugar Paradísíaco',
        imagem: '/pao-rj.jpg',
        descricao: 'Cartão-postal do Rio, o Pão de Açúcar oferece uma das vistas mais deslumbrantes do mundo, acessível por teleférico com duas paradas sobre a Baía de Guanabara.',
      },
      {
        id: 'theatro-municipal',
        nome: 'Theatro Municipal',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Monumentos',
        imagem: '/theatro-rj.avif',
        descricao: 'Inaugurado em 1909 e inspirado na Ópera de Paris, o Theatro Municipal é o principal palco de ópera, balé e música clássica do Brasil, com uma arquitetura deslumbrante.',
      },
      {
        id: 'escadaria-selaron',
        nome: 'Escadaria Selarón',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Monumentos',
        imagem: '/escadaria-rj.webp',
        descricao: 'Obra do artista chileno Jorge Selarón, a escadaria é revestida por mais de 2.000 azulejos coloridos de todo o mundo e se tornou um dos símbolos culturais do Rio.',
      },
      {
        id: 'arcos-da-lapa',
        nome: 'Arcos da Lapa',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Monumentos',
        imagem: '/lapa-rj.webp',
        descricao: 'Aqueduto colonial do século XVIII que hoje serve de viaduto para o bonde de Santa Teresa. À noite, o entorno da Lapa se transforma no maior polo de samba e boemia do Rio.',
      },
      {
        id: 'museu-do-amanha',
        nome: 'Museu do Amanhã',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Monumentos',
        imagem: '/museu-rj.jpg',
        descricao: 'Projetado por Santiago Calatrava, o Museu do Amanhã é um museu de ciências futurista na Praça Mauá que explora os desafios e possibilidades do planeta nas próximas décadas.',
      },
      {
        id: 'praia-de-copacabana',
        nome: 'Praia de Copacabana',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Lugar Paradísíaco',
        imagem: '/copa2.webp',
        descricao: 'A praia mais famosa do mundo, com 4 km de areia branca, calçadão com mosaico português e uma energia única que mistura cariocas, turistas, esportes e cultura.',
      },
      {
        id: 'praia-de-ipanema',
        nome: 'Praia de Ipanema',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Lugar Paradísíaco',
        imagem: '/ipa.webp',
        descricao: 'Imortalizada pela bossa nova, Ipanema é sinônimo de beleza e estilo carioca. Com vista para o Morro Dois Irmãos, é considerada uma das praias mais bonitas do mundo.',
      },
      {
        id: 'floresta-da-tijuca',
        nome: 'Floresta da Tijuca',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Lugar Paradísíaco',
        imagem: '/tiju.jpg',
        descricao: 'A maior floresta urbana do mundo, com 3.200 hectares de Mata Atlântica no coração do Rio. Abriga cachoeiras, trilhas, o Cristo Redentor e uma biodiversidade exuberante.',
      },
      {
        id: 'lagoa-rodrigo-de-freitas',
        nome: 'Lagoa Rodrigo de Freitas',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Lugar Paradísíaco',
        imagem: '/lagoa.webp',
        descricao: 'Lagoa natural cercada pelo Jardim Botânico, Ipanema e o Corcovado. Seu calçadão de 7,5 km é palco de caminhadas, pedaladas e o famoso réveillon com a árvore de Natal flutuante.',
      },
      {
        id: 'jardim-botanico',
        nome: 'Jardim Botânico',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Lugar Paradísíaco',
        imagem: '/bota.jpg',
        descricao: 'Fundado em 1808 por Dom João VI, o Jardim Botânico abriga mais de 6.500 espécies de plantas em 54 hectares, incluindo a famosa alameda de palmeiras imperiais.',
      },
      {
        id: 'parque-lage',
        nome: 'Parque Lage',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Lugar Paradísíaco',
        imagem: '/parque.jpg',
        descricao: 'Parque histórico aos pés do Corcovado com um palacete neoclássico que abriga a Escola de Artes Visuais. Trilhas pela Mata Atlântica e piscinas naturais completam o charme do lugar.',
      },
];

const RJPontos = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredPontos, setFilteredPontos] = useState([]);
  const pontosAtivos = useLocaisAtivos('RJ', pontosTuristicos);
  const categorias = useCategorias('RJ');


  useEffect(() => {
    let result = pontosAtivos;
    if (selectedCategory !== 'Todos') {
      result = result.filter(item => item.categoria === selectedCategory);
    }
    if (searchTerm) {
      result = result.filter(item => 
        item.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.descricao || '').toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredPontos(result);
  }, [searchTerm, selectedCategory, pontosAtivos]);

  const handleSaibaMaisClick = (pontoId) => {
    if (pontoId === 'cristo-redentor') {
      navigate('/cristo-redentor');
    } else {
      alert(`A página para este local ainda não foi criada.`);
    }
  };

  return (
    <div className="rj-pontos-page">
      <header className="rj-pontos-header">
        <button 
          onClick={() => navigate(-1)} 
          className="rj-pontos-button"
          style={{ position: 'absolute', top: '2rem', left: '2rem', backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'white' }}
        >
            ← Voltar
        </button>
        <h1 className="rj-pontos-h1">Maravilhas do Rio</h1>
        <p className="rj-pontos-subheader">Descubra os encantos da Cidade Maravilhosa.</p>
      </header>

      <div className="rj-pontos-controls">
        <input 
          type="text"
          placeholder="O que você quer descobrir no Rio?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rj-pontos-search-bar"
        />
        <div className="rj-pontos-filter-buttons">
          {(categorias ?? []).map(category => (
            <button 
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rj-pontos-button ${selectedCategory === category ? 'active' : ''}`}>
              {category}
            </button>
          ))}
        </div>
      </div>

      <main className="rj-pontos-grid">
        {filteredPontos.map(ponto => (
          <div key={ponto.id} className="rj-pontos-card">
            <div className="rj-pontos-card-image-container">
              {ponto.imagem
                ? <img src={ponto.imagem} alt={ponto.nome} className="rj-pontos-card-image" />
                : <div className="rj-pontos-card-image" style={{ background: 'linear-gradient(135deg,#667eea,#764ba2)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'3rem', height:'100%' }}>🗺️</div>
              }
            </div>
            <div className="rj-pontos-card-content">
              <h2 className="rj-pontos-card-title">{ponto.nome}</h2>
              <p className="rj-pontos-card-category">{ponto.categoria} • {ponto.cidade}</p>
              <p className="rj-pontos-card-description">{ponto.descricao}</p>
              <button 
                className="rj-pontos-button"
                onClick={() => ponto.bdId ? navigate(`/local/${ponto.bdId}`) : ponto.id === 'cristo-redentor' ? navigate('/cristo-redentor') : null}
                style={{ opacity: ponto.bdId || ponto.id === 'cristo-redentor' ? 1 : 0.4, cursor: ponto.bdId || ponto.id === 'cristo-redentor' ? 'pointer' : 'not-allowed' }}
              >
                Saiba mais
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className="rj-pontos-footer">
        <p>&copy; 2025 GADYS. Feito com a energia do Rio de Janeiro.</p>
      </footer>
    </div>
  );
};

export default RJPontos;
