import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PernambucoPontos.css';
import { useLocaisAtivos } from '../hooks/useLocaisAtivos';

const pontosTuristicos = [
  {
    id: 'fernando-de-noronha',
    nome: 'Fernando de Noronha',
    cidade: 'Fernando de Noronha - PE',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/fe-pe.jpg',
    descricao: 'Arquipélago paradisíaco com praias eleitas as mais belas do mundo e rica vida marinha.',
  },
  {
    id: 'porto-de-galinhas',
    nome: 'Porto de Galinhas',
    cidade: 'Ipojuca - PE',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/fe-pe.jpg',
    descricao: 'Piscinas naturais entre recifes de corais com peixes coloridos, eleita a praia mais bonita do Brasil.',
  },
  {
    id: 'recife-antigo',
    nome: 'Recife Antigo',
    cidade: 'Recife - PE',
    categoria: 'Monumentos',
    imagem: '/images/geral/pelo.jpg',
    descricao: 'O coração histórico da Veneza Brasileira, com o Marco Zero e a vibrante cena cultural do Recife.',
  },
  {
    id: 'olinda',
    nome: 'Olinda',
    cidade: 'Olinda - PE',
    categoria: 'Monumentos',
    imagem: '/images/geral/pelo-xx.jpg',
    descricao: 'Patrimônio Cultural da Humanidade pela UNESCO, com igrejas barrocas e o Carnaval mais autêntico do Brasil.',
  },
  {
    id: 'vale-do-catimbau',
    nome: 'Vale do Catimbau',
    cidade: 'Buíque - PE',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/pi-capivara.jpg',
    descricao: 'Parque nacional com mais de 2.000 sítios arqueológicos e pinturas rupestres de até 6.000 anos.',
  },
  {
    id: 'caruaru',
    nome: 'Caruaru',
    cidade: 'Caruaru - PE',
    categoria: 'Monumentos',
    imagem: '/images/geral/pi-cultura.jpg',
    descricao: 'Capital do forró e sede do maior São João do mundo, com o famoso Alto do Moura e a Feira de Caruaru.',
  },
];

const rotas = {
  'fernando-de-noronha': '/pe/fernando-de-noronha',
  'porto-de-galinhas': '/pe/porto-de-galinhas',
  'recife-antigo': '/pe/recife-antigo',
  'olinda': '/pe/olinda',
  'vale-do-catimbau': '/pe/vale-do-catimbau',
  'caruaru': '/pe/caruaru',
};

const PernambucoPontos = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredPontos, setFilteredPontos] = useState([]);
  const pontosAtivos = useLocaisAtivos('PE', pontosTuristicos);

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
    <div className="pe-pontos-page">
      <header className="pe-pontos-header">
        <button
          onClick={() => navigate(-1)}
          className="pe-pontos-button"
          style={{ position: 'absolute', top: '2rem', left: '2rem', backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'white' }}
        >
          ← Voltar
        </button>
        <h1 className="pe-pontos-h1">Tesouros de Pernambuco</h1>
        <p className="pe-pontos-subheader">Do frevo de Olinda às piscinas de Porto de Galinhas.</p>
      </header>

      <div className="pe-pontos-controls">
        <input
          type="text"
          placeholder="O que você quer descobrir em Pernambuco?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pe-pontos-search-bar"
        />
        <div className="pe-pontos-filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`pe-pontos-button ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <main className="pe-pontos-grid">
        {filteredPontos.map(ponto => (
          <div key={ponto.id} className="pe-pontos-card">
            <div className="pe-pontos-card-image-container">
              {ponto.imagem
                ? <img src={ponto.imagem} alt={ponto.nome} className="pe-pontos-card-image" />
                : <div className="pe-pontos-card-image" style={{ background: 'linear-gradient(135deg,#c0392b,#e67e22)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', height: '100%' }}>🗺️</div>
              }
            </div>
            <div className="pe-pontos-card-content">
              <h2 className="pe-pontos-card-title">{ponto.nome}</h2>
              <p className="pe-pontos-card-category">{ponto.categoria} • {ponto.cidade}</p>
              <p className="pe-pontos-card-description">{ponto.descricao}</p>
              <button
                className="pe-pontos-button"
                onClick={() => { if (ponto.bdId != null) navigate(`/local/${ponto.bdId}`); else if (rotas[ponto.id]) navigate(rotas[ponto.id]); }}
                style={{ opacity: ponto.bdId != null || rotas[ponto.id] ? 1 : 0.4, cursor: ponto.bdId != null || rotas[ponto.id] ? 'pointer' : 'not-allowed' }}
              >
                Saiba mais
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className="pe-pontos-footer">
        <p>&copy; 2025 GADYS. Feito com o frevo de Pernambuco.</p>
      </footer>
    </div>
  );
};

export default PernambucoPontos;
