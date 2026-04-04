import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SPPontos.css';
import { useLocaisAtivos } from '../hooks/useLocaisAtivos';

const pontosTuristicos = [
  {
    id: 'masp',
    nome: 'MASP',
    cidade: 'São Paulo - SP',
    categoria: 'Costume Cultural',
    imagem: '/sp.jpg',
  },
  {
    id: 'teatro-municipal',
    nome: 'Teatro Municipal',
    cidade: 'São Paulo - SP',
    categoria: 'Costume Cultural',
    imagem: '/images/geral/Teatro_Municipal_de_São_Paulo_8.jpg',
  },
  {
    id: 'mercadao',
    nome: 'Mercadão',
    cidade: 'São Paulo - SP',
    categoria: 'Restaurantes',
    descricao: 'O Mercado Municipal de São Paulo, famoso pelo sanduíche de mortadela e pela variedade de produtos.',
    imagem: '/images/monumentos/mercadaosp.jpg',
  },
  {
    id: 'copan',
    nome: 'Edifício Copan',
    cidade: 'São Paulo - SP',
    categoria: 'Monumentos',
    imagem: '/images/monumentos/copan.webp',
  },
  {
    id: 'ibirapuera',
    nome: 'Parque Ibirapuera',
    cidade: 'São Paulo - SP',
    categoria: 'Lugar Paradísíaco',
    descricao: 'O Central Park paulistano, com museus, lagos e espaços de lazer no coração da cidade.',
    imagem: '/sp.jpg',
  },
  {
    id: 'pinacoteca',
    nome: 'Pinacoteca',
    cidade: 'São Paulo - SP',
    categoria: 'Costume Cultural',
    imagem: '/sp.jpg',
  },
  {
    id: 'avenida-paulista',
    nome: 'Avenida Paulista',
    cidade: 'São Paulo - SP',
    categoria: 'Monumentos',
    imagem: '/sp.jpg',
  },
  {
    id: 'beco-batman',
    nome: 'Beco do Batman',
    cidade: 'Vila Madalena - SP',
    categoria: 'Costume Cultural',
    descricao: 'Famoso beco coberto de grafites e arte urbana, símbolo da cena artística alternativa paulistana.',
    imagem: '/sp.jpg',
  },
];

const SPPontos = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredPontos, setFilteredPontos] = useState([]);
  const pontosAtivos = useLocaisAtivos('São Paulo', pontosTuristicos);

  const categories = ['Todos', 'Lugar Paradísíaco', 'Restaurantes', 'Costume Cultural', 'Monumentos'];

  useEffect(() => {
    let result = pontosAtivos;
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
  }, [searchTerm, selectedCategory, pontosAtivos]);

  return (
    <div className="sp-pontos-page">
      <header className="sp-pontos-header">
        <button
          onClick={() => navigate('/sao-paulo')}
          className="sp-pontos-button"
          style={{ position: 'absolute', top: '2rem', left: '2rem', backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'white' }}
        >
          ← Voltar
        </button>
        <h1 className="sp-pontos-h1">Tesouros de São Paulo</h1>
        <p className="sp-pontos-subheader">Descubra os encantos da maior metrópole do Brasil.</p>
      </header>

      <div className="sp-pontos-controls">
        <input
          type="text"
          placeholder="O que você quer descobrir em São Paulo?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="sp-pontos-search-bar"
        />
        <div className="sp-pontos-filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`sp-pontos-button ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <main className="sp-pontos-grid">
        {filteredPontos.map(ponto => (
          <div key={ponto.id} className="sp-pontos-card">
            <div className="sp-pontos-card-image-container">
              <img src={ponto.imagem} alt={ponto.nome} className="sp-pontos-card-image" />
            </div>
            <div className="sp-pontos-card-content">
              <h2 className="sp-pontos-card-title">{ponto.nome}</h2>
              <p className="sp-pontos-card-category">{ponto.categoria} • {ponto.cidade}</p>
              <p className="sp-pontos-card-description">{ponto.descricao}</p>
              <button className="sp-pontos-button" onClick={() => alert('Página em breve!')}>
                Saiba mais
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className="sp-pontos-footer">
        <p>&copy; 2025 GADYS. Feito com a energia de São Paulo.</p>
      </footer>
    </div>
  );
};

export default SPPontos;
