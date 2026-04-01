import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CearaPontos.css';

const pontosTuristicos = [
  {
    id: 'jericoacoara',
    nome: 'Jericoacoara',
    cidade: 'Jijoca de Jericoacoara - CE',
    categoria: 'Lugar Paradisíaco',
    imagem: '/images/geral/Ceara1.webp',
  },
  {
    id: 'canoa-quebrada',
    nome: 'Canoa Quebrada',
    cidade: 'Aracati - CE',
    categoria: 'Lugar Paradisíaco',
    imagem: '/images/geral/Ceara2.webp',
  },
  {
    id: 'dragao-do-mar',
    nome: 'Centro Dragão do Mar',
    cidade: 'Fortaleza - CE',
    categoria: 'Costume Cultural',
    imagem: '/images/geral/CearaInicio.jpg',
  },
  {
    id: 'beach-park',
    nome: 'Beach Park',
    cidade: 'Aquiraz - CE',
    categoria: 'Restaurantes',
    imagem: '/images/geral/ceara.webp',
  },
  {
    id: 'praia-do-futuro',
    nome: 'Praia do Futuro',
    cidade: 'Fortaleza - CE',
    categoria: 'Lugar Paradisíaco',
    imagem: '/images/geral/Ceara3.jpg',
  },
  {
    id: 'serra-de-baturite',
    nome: 'Serra de Baturité',
    cidade: 'Baturité - CE',
    categoria: 'Lugar Paradisíaco',
    imagem: '/images/geral/Ceara1.webp',
  },
  {
    id: 'chapada-do-araripe',
    nome: 'Chapada do Araripe',
    cidade: 'Crato - CE',
    categoria: 'Lugar Paradisíaco',
    imagem: '/images/geral/Ceara2.webp',
  },
  {
    id: 'fortaleza-centro',
    nome: 'Centro Histórico de Fortaleza',
    cidade: 'Fortaleza - CE',
    categoria: 'Monumentos',
    imagem: '/images/geral/ceara.webp',
  },
];

const rotas = {
  'jericoacoara': '/ceara/jericoacoara',
  'canoa-quebrada': '/ceara/canoa-quebrada',
  'dragao-do-mar': '/ceara/dragao-do-mar',
  'beach-park': '/ceara/beach-park',
  'praia-do-futuro': '/ceara/praia-do-futuro',
  'serra-de-baturite': '/ceara/serra-de-baturite',
  'chapada-do-araripe': '/ceara/chapada-do-araripe',
  'fortaleza-centro': '/ceara/centro-historico-fortaleza',
};

const CearaPontos = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredPontos, setFilteredPontos] = useState([]);

  const categories = ['Todos', 'Lugar Paradisíaco', 'Restaurantes', 'Costume Cultural', 'Monumentos'];

  useEffect(() => {
    let result = pontosTuristicos;
    if (selectedCategory !== 'Todos') {
      result = result.filter(item => item.categoria === selectedCategory);
    }
    if (searchTerm) {
      result = result.filter(item =>
        item.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.descricao.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredPontos([]);
    setTimeout(() => setFilteredPontos(result), 50);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="ce-pontos-page">
      <header className="ce-pontos-header">
        <button
          onClick={() => navigate('/ceara')}
          className="ce-pontos-button"
          style={{ position: 'absolute', top: '2rem', left: '2rem', backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'white' }}
        >
          ← Voltar
        </button>
        <h1 className="ce-pontos-h1">Tesouros do Ceará</h1>
        <p className="ce-pontos-subheader">Descubra os encantos da Terra da Luz.</p>
      </header>

      <div className="ce-pontos-controls">
        <input
          type="text"
          placeholder="O que você quer descobrir no Ceará?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="ce-pontos-search-bar"
        />
        <div className="ce-pontos-filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`ce-pontos-button ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <main className="ce-pontos-grid">
        {filteredPontos.map(ponto => (
          <div key={ponto.id} className="ce-pontos-card">
            <div className="ce-pontos-card-image-container">
              <img src={ponto.imagem} alt={ponto.nome} className="ce-pontos-card-image" />
            </div>
            <div className="ce-pontos-card-content">
              <h2 className="ce-pontos-card-title">{ponto.nome}</h2>
              <p className="ce-pontos-card-category">{ponto.categoria} • {ponto.cidade}</p>
              <p className="ce-pontos-card-description">{ponto.descricao}</p>
              <button className="ce-pontos-button" onClick={() => rotas[ponto.id] ? navigate(rotas[ponto.id]) : null}
                style={{ opacity: rotas[ponto.id] ? 1 : 0.4, cursor: rotas[ponto.id] ? 'pointer' : 'not-allowed' }}>
                Saiba mais
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className="ce-pontos-footer">
        <p>&copy; 2025 GADYS. Feito com a energia do Ceará.</p>
      </footer>
    </div>
  );
};

export default CearaPontos;
