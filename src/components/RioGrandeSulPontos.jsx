import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CearaPontos.css';
import { useLocaisAtivos } from '../hooks/useLocaisAtivos';

const pontosTuristicos = [
  {
    id: 'gramado',
    nome: 'Gramado',
    cidade: 'Gramado - RS',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/rs-gramado.jpg',
  },
  {
    id: 'canion-itaimbezinho',
    nome: 'Cânion Itaimbezinho',
    cidade: 'Cambará do Sul - RS',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/rs-canion.jpg',
  },
  {
    id: 'bento-goncalves',
    nome: 'Bento Gonçalves',
    cidade: 'Bento Gonçalves - RS',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/rs-bento.jpg',
  },
  {
    id: 'porto-alegre',
    nome: 'Porto Alegre',
    cidade: 'Porto Alegre - RS',
    categoria: 'Monumentos',
    imagem: '/images/geral/rs-poa.jpg',
  },
  {
    id: 'torres',
    nome: 'Torres',
    cidade: 'Torres - RS',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/rs-torres.jpg',
  },
  {
    id: 'sao-miguel-das-missoes',
    nome: 'São Miguel das Missões',
    cidade: 'São Miguel das Missões - RS',
    categoria: 'Monumentos',
    imagem: '/images/geral/rs-missoes.jpg',
  },
];

const rotas = {
  'gramado': '/rs/gramado',
  'canion-itaimbezinho': '/rs/canion-itaimbezinho',
  'bento-goncalves': '/rs/bento-goncalves',
  'porto-alegre': '/rs/porto-alegre',
  'torres': '/rs/torres',
  'sao-miguel-das-missoes': '/rs/sao-miguel-das-missoes',
};

const RioGrandeSulPontos = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredPontos, setFilteredPontos] = useState([]);
  const pontosAtivos = useLocaisAtivos('RS', pontosTuristicos);

  const categories = ['Todos', 'Lugar Paradísíaco', 'Monumentos', 'Restaurantes'];

  useEffect(() => {
    let result = pontosAtivos;
    if (selectedCategory !== 'Todos') result = result.filter(p => p.categoria === selectedCategory);
    if (searchTerm) result = result.filter(p =>
      p.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (p.descricao || '').toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPontos(result);
  }, [searchTerm, selectedCategory, pontosAtivos]);

  return (
    <div
      className="ce-pontos-page"
      style={{ background: 'linear-gradient(160deg, #fdf0f0 0%, #f5c6c6 100%)', color: '#4a0000' }}
    >
      <header
        className="ce-pontos-header"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/geral/rs1.jpg')" }}
      >
        <button
          onClick={() => navigate(-1)}
          className="ce-pontos-button"
          style={{ position: 'absolute', top: '2rem', left: '2rem', backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'white' }}
        >
          ← Voltar
        </button>
        <h1 className="ce-pontos-h1">Tesouros do Rio Grande do Sul</h1>
        <p className="ce-pontos-subheader">Descubra a alma gaúcha em cada destino.</p>
      </header>

      <div className="ce-pontos-controls" style={{ background: 'linear-gradient(135deg, #8b0000, #6d0000)' }}>
        <input
          type="text"
          placeholder="O que você quer descobrir no Rio Grande do Sul?"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="ce-pontos-search-bar"
        />
        <div className="ce-pontos-filter-buttons">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`ce-pontos-button ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <main className="ce-pontos-grid">
        {filteredPontos.map(ponto => (
          <div
            key={ponto.id}
            className="ce-pontos-card"
            style={{ borderImage: 'linear-gradient(90deg, #8b0000, #c0392b) 1' }}
          >
            <div className="ce-pontos-card-image-container">
              {ponto.imagem
                ? <img src={ponto.imagem} alt={ponto.nome} className="ce-pontos-card-image" />
                : <div className="ce-pontos-card-image" style={{ background: 'linear-gradient(135deg, #8b0000, #c0392b)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', height: '100%' }}>🗺️</div>
              }
            </div>
            <div className="ce-pontos-card-content">
              <h2
                className="ce-pontos-card-title"
                style={{ background: 'linear-gradient(90deg, #8b0000, #c0392b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
              >
                {ponto.nome}
              </h2>
              <p className="ce-pontos-card-category" style={{ color: '#8b0000' }}>{ponto.categoria} • {ponto.cidade}</p>
              <p className="ce-pontos-card-description" style={{ color: '#4a0000' }}>{ponto.descricao}</p>
              <button
                className="ce-pontos-button"
                onClick={() => {
                  if (ponto.bdId != null) navigate(`/local/${ponto.bdId}`);
                  else if (rotas[ponto.id]) navigate(rotas[ponto.id]);
                }}
                style={{
                  background: 'linear-gradient(135deg, #8b0000, #c0392b)',
                  border: 'none',
                  opacity: ponto.bdId != null || rotas[ponto.id] ? 1 : 0.4,
                  cursor: ponto.bdId != null || rotas[ponto.id] ? 'pointer' : 'not-allowed',
                }}
              >
                Saiba mais
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className="ce-pontos-footer" style={{ background: 'linear-gradient(135deg, #6d0000, #4a0000)' }}>
        <p>&copy; 2025 GADYS. Feito com o calor do churrasco e o frio do chimarrão.</p>
      </footer>
    </div>
  );
};

export default RioGrandeSulPontos;
