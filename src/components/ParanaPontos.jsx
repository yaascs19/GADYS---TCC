import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ParanaPontos.css';
import { useLocaisAtivos } from '../hooks/useLocaisAtivos';

const pontosTuristicos = [
  {
    id: 'cataratas-do-iguacu',
    nome: 'Cataratas do Iguaçu',
    cidade: 'Foz do Iguaçu - PR',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/cata-xx.jpg',
    descricao: 'Uma das maiores quedas d\'água do mundo, Patrimônio Natural da Humanidade pela UNESCO.',
  },
  {
    id: 'curitiba-centro',
    nome: 'Centro Histórico de Curitiba',
    cidade: 'Curitiba - PR',
    categoria: 'Monumentos',
    imagem: '/images/geral/cord.jpg',
    descricao: 'Capital modelo em urbanismo, com o Largo da Ordem, Museu Oscar Niemeyer e o Jardim Botânico.',
  },
  {
    id: 'ilha-do-mel',
    nome: 'Ilha do Mel',
    cidade: 'Paranaguá - PR',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/sc-natureza.jpg',
    descricao: 'Ilha paradisíaca sem carros, com praias selvagens, trilhas e o histórico Farol das Conchas.',
  },
  {
    id: 'vila-velha',
    nome: 'Parque Estadual de Vila Velha',
    cidade: 'Ponta Grossa - PR',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/pant-xx.webp',
    descricao: 'Formações rochosas esculpidas pela erosão há milhões de anos, com furnas e lagoas de tirar o fôlego.',
  },
  {
    id: 'foz-do-iguacu',
    nome: 'Foz do Iguaçu',
    cidade: 'Foz do Iguaçu - PR',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/cata.jpg',
    descricao: 'Cidade na tríplice fronteira com Argentina e Paraguai, porta de entrada para as Cataratas e o Parque das Aves.',
  },
  {
    id: 'guaratuba',
    nome: 'Guaratuba',
    cidade: 'Guaratuba - PR',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/rs-natureza.jpg',
    descricao: 'Balneário com a maior baía do litoral paranaense, praias tranquilas e rica gastronomia de frutos do mar.',
  },
];

const rotas = {
  'cataratas-do-iguacu': '/pr/cataratas-do-iguacu',
  'curitiba-centro': '/pr/curitiba-centro',
  'ilha-do-mel': '/pr/ilha-do-mel',
  'vila-velha': '/pr/vila-velha',
  'foz-do-iguacu': '/pr/foz-do-iguacu',
  'guaratuba': '/pr/guaratuba',
};

const ParanaPontos = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredPontos, setFilteredPontos] = useState([]);
  const pontosAtivos = useLocaisAtivos('PR', pontosTuristicos);

  const categories = ['Todos', 'Lugar Paradísíaco', 'Monumentos', 'Restaurantes'];

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

  return (
    <div className="pr-pontos-page">
      <header className="pr-pontos-header">
        <button
          onClick={() => navigate(-1)}
          className="pr-pontos-button"
          style={{ position: 'absolute', top: '2rem', left: '2rem', backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'white' }}
        >
          ← Voltar
        </button>
        <h1 className="pr-pontos-h1">Tesouros do Paraná</h1>
        <p className="pr-pontos-subheader">Das Cataratas do Iguaçu às praias da Ilha do Mel.</p>
      </header>

      <div className="pr-pontos-controls">
        <input
          type="text"
          placeholder="O que você quer descobrir no Paraná?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pr-pontos-search-bar"
        />
        <div className="pr-pontos-filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`pr-pontos-button ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <main className="pr-pontos-grid">
        {filteredPontos.map(ponto => (
          <div key={ponto.id} className="pr-pontos-card">
            <div className="pr-pontos-card-image-container">
              {ponto.imagem
                ? <img src={ponto.imagem} alt={ponto.nome} className="pr-pontos-card-image" />
                : <div className="pr-pontos-card-image" style={{ background: 'linear-gradient(135deg,#2e7d32,#1565c0)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', height: '100%' }}>🗺️</div>
              }
            </div>
            <div className="pr-pontos-card-content">
              <h2 className="pr-pontos-card-title">{ponto.nome}</h2>
              <p className="pr-pontos-card-category">{ponto.categoria} • {ponto.cidade}</p>
              <p className="pr-pontos-card-description">{ponto.descricao}</p>
              <button
                className="pr-pontos-button"
                onClick={() => { if (ponto.bdId != null) navigate(`/local/${ponto.bdId}`); else if (rotas[ponto.id]) navigate(rotas[ponto.id]); }}
                style={{ opacity: ponto.bdId != null || rotas[ponto.id] ? 1 : 0.4, cursor: ponto.bdId != null || rotas[ponto.id] ? 'pointer' : 'not-allowed' }}
              >
                Saiba mais
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className="pr-pontos-footer">
        <p>&copy; 2025 GADYS. Feito com a energia do Paraná.</p>
      </footer>
    </div>
  );
};

export default ParanaPontos;
