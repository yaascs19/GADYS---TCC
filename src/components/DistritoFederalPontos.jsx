import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DistritoFederalPontos.css';
import { useLocaisAtivos } from '../hooks/useLocaisAtivos';

const pontosTuristicos = [
  {
    id: 'congresso-nacional',
    nome: 'Congresso Nacional',
    cidade: 'Brasília - DF',
    categoria: 'Monumentos',
    imagem: '/images/geral/congresso.jpg',
    descricao: 'Símbolo máximo da democracia brasileira, projetado por Oscar Niemeyer. As duas cúpulas — uma côncava (Senado) e uma convexa (Câmara) — são ícones do modernismo mundial.',
  },
  {
    id: 'catedral-brasilia',
    nome: 'Catedral Metropolitana',
    cidade: 'Brasília - DF',
    categoria: 'Monumentos',
    imagem: '/images/geral/cate.jpg',
    descricao: 'Obra-prima de Oscar Niemeyer inaugurada em 1970. Suas 16 colunas de concreto em forma de mãos erguidas ao céu criam um interior inundado de luz natural e vitrais coloridos.',
  },
  {
    id: 'palacio-planalto',
    nome: 'Palácio do Planalto',
    cidade: 'Brasília - DF',
    categoria: 'Monumentos',
    imagem: '/images/geral/pal.jpg',
    descricao: 'Sede do governo federal, projetado por Niemeyer com as elegantes colunas em curva características do modernismo brasileiro. Aberto à visitação aos domingos.',
  },
  {
    id: 'chapada-veadeiros',
    nome: 'Chapada dos Veadeiros',
    cidade: 'Alto Paraíso - GO',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/chap_vea.webp',
    descricao: 'Patrimônio Natural da Humanidade pela UNESCO, a 230 km de Brasília. Cachoeiras monumentais, trilhas no cerrado e uma energia mística que atrai visitantes do mundo inteiro.',
  },
  {
    id: 'lago-paranoa',
    nome: 'Lago Paranoá',
    cidade: 'Brasília - DF',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/Lago Paranoá.jpg',
    descricao: 'Lago artificial de 40 km² criado para amenizar o clima seco de Brasília. Hoje é o coração da vida social da capital, com clubes, restaurantes e esportes náuticos.',
  },
];

const rotas = {
  'congresso-nacional': '/df/congresso-nacional',
};

const DistritoFederalPontos = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredPontos, setFilteredPontos] = useState([]);
  const pontosAtivos = useLocaisAtivos('DF', pontosTuristicos);

  const categories = ['Todos', 'Monumentos', 'Lugar Paradísíaco', 'Restaurantes'];

  useEffect(() => {
    let result = pontosAtivos;
    if (selectedCategory !== 'Todos') result = result.filter(item => item.categoria === selectedCategory);
    if (searchTerm) result = result.filter(item =>
      item.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.descricao || '').toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPontos(result);
  }, [searchTerm, selectedCategory, pontosAtivos]);

  return (
    <div className="df-pontos-page">
      <header className="df-pontos-header">
        <button onClick={() => navigate(-1)} className="df-pontos-button" style={{ position: 'absolute', top: '2rem', left: '2rem', backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'white' }}>
          ← Voltar
        </button>
        <h1 className="df-pontos-h1">Tesouros do Distrito Federal</h1>
        <p className="df-pontos-subheader">Do Congresso Nacional à Chapada dos Veadeiros.</p>
      </header>

      <div className="df-pontos-controls">
        <input
          type="text"
          placeholder="O que você quer descobrir no Distrito Federal?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="df-pontos-search-bar"
        />
        <div className="df-pontos-filter-buttons">
          {categories.map(category => (
            <button key={category} onClick={() => setSelectedCategory(category)} className={`df-pontos-button ${selectedCategory === category ? 'active' : ''}`}>
              {category}
            </button>
          ))}
        </div>
      </div>

      <main className="df-pontos-grid">
        {filteredPontos.map(ponto => (
          <div key={ponto.id} className="df-pontos-card">
            <div className="df-pontos-card-image-container">
              {ponto.imagem
                ? <img src={ponto.imagem} alt={ponto.nome} className="df-pontos-card-image" />
                : <div className="df-pontos-card-image" style={{ background: 'linear-gradient(135deg,#1a5276,#154360)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', height: '100%' }}>🗺️</div>
              }
            </div>
            <div className="df-pontos-card-content">
              <h2 className="df-pontos-card-title">{ponto.nome}</h2>
              <p className="df-pontos-card-category">{ponto.categoria} • {ponto.cidade}</p>
              <p className="df-pontos-card-description">{ponto.descricao}</p>
              <button
                className="df-pontos-button"
                onClick={() => { if (ponto.bdId != null) navigate(`/local/${ponto.bdId}`); else if (rotas[ponto.id]) navigate(rotas[ponto.id]); }}
                style={{ opacity: ponto.bdId != null || rotas[ponto.id] ? 1 : 0.4, cursor: ponto.bdId != null || rotas[ponto.id] ? 'pointer' : 'not-allowed' }}
              >
                Saiba mais
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className="df-pontos-footer">
        <p>&copy; 2025 GADYS. Feito com a modernidade do Distrito Federal.</p>
      </footer>
    </div>
  );
};

export default DistritoFederalPontos;
