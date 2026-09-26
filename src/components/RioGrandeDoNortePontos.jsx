import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CearaPontos.css';
import { useLocaisAtivos } from '../hooks/useLocaisAtivos';

const pontosTuristicos = [
  {
    id: 'genipabu',
    nome: 'Dunas de Genipabu',
    cidade: 'Extremoz - RN',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/duna1.jpg',
    descricao: 'Um deserto dourado à beira-mar: dunas gigantes, lagoas de água doce e o famoso passeio de buggy e dromedário a apenas 25 km de Natal.',
  },
  {
    id: 'pipa',
    nome: 'Praia de Pipa',
    cidade: 'Tibau do Sul - RN',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/pipa.webp',
    descricao: 'Falêsias avermelhadas, águas cristalinas e golfinhos na Baía dos Golfinhos fazem de Pipa um dos destinos mais charmosos e badalados do litoral nordestino.',
  },
  {
    id: 'maracajau',
    nome: 'Maracajaú',
    cidade: 'Maxaranguape - RN',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/Maracajaú.jpg',
    descricao: 'Considerado o maior aquário natural do Brasil, Maracajaú reúne piscinas naturais com águas mornas e transparentes, repletas de peixes coloridos e corais vivos.',
  },
  {
    id: 'parque-das-dunas',
    nome: 'Parque das Dunas',
    cidade: 'Natal - RN',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/Parque das Dunas.avif',
    descricao: 'A maior área de proteção de dunas urbanas do mundo, com 1.172 hectares de Mata Atlântica no coração de Natal, trilhas ecológicas e fauna nativa preservada.',
  },
  {
    id: 'forte-dos-reis-magos',
    nome: 'Forte dos Reis Magos',
    cidade: 'Natal - RN',
    categoria: 'Monumentos',
    imagem: '/images/geral/Forte dos Reis Magos.webp',
    descricao: 'Construído pelos portugueses em 1598 em formato de estrela, o Forte dos Reis Magos é o marco zero de Natal e um dos fortes coloniais mais bem preservados do Brasil.',
  },
  {
    id: 'baia-formosa',
    nome: 'Baía Formosa',
    cidade: 'Baía Formosa - RN',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/Baía Formosa.jpg',
    descricao: 'Praias desertas, falêsias, manguezais e águas esverdeadas formam um dos litorâis mais selvagens e preservados do Rio Grande do Norte, longe do turismo de massa.',
  },
];

const rotas = {
  'genipabu': '/rn/genipabu',
  'pipa': '/rn/pipa',
  'maracajau': '/rn/maracajau',
  'parque-das-dunas': '/rn/parque-das-dunas',
  'forte-dos-reis-magos': '/rn/forte-dos-reis-magos',
  'baia-formosa': '/rn/baia-formosa',
};

const RioGrandeDoNortePontos = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredPontos, setFilteredPontos] = useState([]);
  const pontosAtivos = useLocaisAtivos('RN', pontosTuristicos);

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
    <div className="ce-pontos-page" style={{ background: 'linear-gradient(160deg, #fffbf0 0%, #ffe8a0 100%)', color: '#5a3a00' }}>
      <header
        className="ce-pontos-header"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/images/geral/rn1.jpg')" }}
      >
        <button
          onClick={() => navigate(-1)}
          className="ce-pontos-button"
          style={{ position: 'absolute', top: '2rem', left: '2rem', backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'white' }}
        >
          ← Voltar
        </button>
        <h1 className="ce-pontos-h1">Tesouros do Rio Grande do Norte</h1>
        <p className="ce-pontos-subheader">Descubra as maravilhas da Terra do Sol e do Vento.</p>
      </header>

      <div className="ce-pontos-controls" style={{ background: 'linear-gradient(135deg, #c47a00, #a06000)' }}>
        <input
          type="text"
          placeholder="O que você quer descobrir no RN?"
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
          <div key={ponto.id} className="ce-pontos-card" style={{ borderImage: 'linear-gradient(90deg, #c47a00, #f5a623) 1' }}>
            <div className="ce-pontos-card-image-container">
              {ponto.imagem
                ? <img src={ponto.imagem} alt={ponto.nome} className="ce-pontos-card-image" />
                : <div className="ce-pontos-card-image" style={{ background: 'linear-gradient(135deg, #c47a00, #f5a623)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', height: '100%' }}>🗺️</div>
              }
            </div>
            <div className="ce-pontos-card-content">
              <h2
                className="ce-pontos-card-title"
                style={{ background: 'linear-gradient(90deg, #c47a00, #f5a623)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
              >
                {ponto.nome}
              </h2>
              <p className="ce-pontos-card-category" style={{ color: '#c47a00' }}>{ponto.categoria} • {ponto.cidade}</p>
              <p className="ce-pontos-card-description" style={{ color: '#5a3a00' }}>{ponto.descricao}</p>
              <button
                className="ce-pontos-button"
                onClick={() => {
                  if (ponto.id !== 'genipabu') return;
                  if (ponto.bdId != null) navigate(`/local/${ponto.bdId}`);
                  else if (rotas[ponto.id]) navigate(rotas[ponto.id]);
                }}
                style={{
                  background: 'linear-gradient(135deg, #c47a00, #f5a623)',
                  border: 'none',
                  opacity: ponto.id === 'genipabu' ? 1 : 0.4,
                  cursor: ponto.id === 'genipabu' ? 'pointer' : 'not-allowed',
                }}
              >
                Saiba mais
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className="ce-pontos-footer" style={{ background: 'linear-gradient(135deg, #a06000, #5a3a00)' }}>
        <p>&copy; 2025 GADYS. Feito com o sol e o vento do Rio Grande do Norte.</p>
      </footer>
    </div>
  );
};

export default RioGrandeDoNortePontos;
