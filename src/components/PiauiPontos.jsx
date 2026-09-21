import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CearaPontos.css';
import { useLocaisAtivos } from '../hooks/useLocaisAtivos';

const pontosTuristicos = [
  {
    id: 'serra-da-capivara',
    nome: 'Serra da Capivara',
    cidade: 'São Raimundo Nonato - PI',
    categoria: 'Monumentos',
    imagem: '/images/geral/pi-capivara.jpg',
  },
  {
    id: 'delta-do-parnaiba',
    nome: 'Delta do Parnaíba',
    cidade: 'Parnaíba - PI',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/pi-delta.jpg',
  },
  {
    id: 'sete-cidades',
    nome: 'Parque Nacional Sete Cidades',
    cidade: 'Piracuruca - PI',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/pi-setecidades.jpg',
  },
  {
    id: 'luis-correia',
    nome: 'Luís Correia',
    cidade: 'Luís Correia - PI',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/pi-luiscorreia.jpg',
  },
  {
    id: 'pedra-do-castelo',
    nome: 'Pedra do Castelo',
    cidade: 'Queimada Nova - PI',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/pi-pedracastelo.jpg',
  },
  {
    id: 'teresina-centro',
    nome: 'Centro Histórico de Teresina',
    cidade: 'Teresina - PI',
    categoria: 'Monumentos',
    imagem: '/images/geral/pi-teresina.jpg',
  },
];

const rotas = {
  'serra-da-capivara': '/pi/serra-da-capivara',
  'delta-do-parnaiba': '/pi/delta-do-parnaiba',
  'sete-cidades': '/pi/sete-cidades',
  'luis-correia': '/pi/luis-correia',
  'pedra-do-castelo': '/pi/pedra-do-castelo',
  'teresina-centro': '/pi/teresina-centro',
};

const PiauiPontos = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredPontos, setFilteredPontos] = useState([]);
  const pontosAtivos = useLocaisAtivos('PI', pontosTuristicos);

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
    <div className="ce-pontos-page" style={{ background: 'linear-gradient(160deg, #f1f8f1 0%, #c8e6c9 100%)', color: '#1b3a1b' }}>
      <header
        className="ce-pontos-header"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/geral/pi1.jpg')" }}
      >
        <button
          onClick={() => navigate(-1)}
          className="ce-pontos-button"
          style={{ position: 'absolute', top: '2rem', left: '2rem', backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'white' }}
        >
          ← Voltar
        </button>
        <h1 className="ce-pontos-h1">Tesouros do Piauí</h1>
        <p className="ce-pontos-subheader">Descubra o berço da pré-história brasileira.</p>
      </header>

      <div className="ce-pontos-controls" style={{ background: 'linear-gradient(135deg, #2e7d32, #1b5e20)' }}>
        <input
          type="text"
          placeholder="O que você quer descobrir no Piauí?"
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
          <div key={ponto.id} className="ce-pontos-card" style={{ borderImage: 'linear-gradient(90deg, #2e7d32, #66bb6a) 1' }}>
            <div className="ce-pontos-card-image-container">
              {ponto.imagem
                ? <img src={ponto.imagem} alt={ponto.nome} className="ce-pontos-card-image" />
                : <div className="ce-pontos-card-image" style={{ background: 'linear-gradient(135deg, #2e7d32, #66bb6a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', height: '100%' }}>🗺️</div>
              }
            </div>
            <div className="ce-pontos-card-content">
              <h2
                className="ce-pontos-card-title"
                style={{ background: 'linear-gradient(90deg, #2e7d32, #66bb6a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
              >
                {ponto.nome}
              </h2>
              <p className="ce-pontos-card-category" style={{ color: '#2e7d32' }}>{ponto.categoria} • {ponto.cidade}</p>
              <p className="ce-pontos-card-description" style={{ color: '#1b3a1b' }}>{ponto.descricao}</p>
              <button
                className="ce-pontos-button"
                onClick={() => {
                  if (ponto.bdId != null) navigate(`/local/${ponto.bdId}`);
                  else if (rotas[ponto.id]) navigate(rotas[ponto.id]);
                }}
                style={{
                  background: 'linear-gradient(135deg, #2e7d32, #66bb6a)',
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

      <footer className="ce-pontos-footer" style={{ background: 'linear-gradient(135deg, #1b5e20, #1b3a1b)' }}>
        <p>&copy; 2025 GADYS. Feito com a força milenar do Piauí.</p>
      </footer>
    </div>
  );
};

export default PiauiPontos;
