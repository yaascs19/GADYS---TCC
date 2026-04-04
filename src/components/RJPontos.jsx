import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './RJPontos.css';
import { useLocaisAtivos } from '../hooks/useLocaisAtivos';

const pontosTuristicos = [
    {
        id: 'cristo-redentor',
        nome: 'Cristo Redentor',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Monumentos',
        imagem: '/Cristo-rj.jpg',
      },
      {
        id: 'pao-de-acucar',
        nome: 'Pão de Açúcar',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Lugar Paradísíaco',
        imagem: '/pao-rj.jpg',
      },
        {
        id: 'theatro-municipal',
        nome: 'Theatro Municipal',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Costume Cultural',
        imagem: '/theatro-rj.avif',
      },
      {
        id: 'escadaria-selaron',
        nome: 'Escadaria Selarón',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Costume Cultural',
        imagem: '/escadaria-rj.webp',
      },
        {
        id: 'arcos-da-lapa',
        nome: 'Arcos da Lapa',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Monumentos',
        imagem: '/lapa-rj.webp',
      },
      {
        id: 'museu-do-amanha',
        nome: 'Museu do Amanhã',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Costume Cultural',
        imagem: '/museu-rj.jpg',
      },
      {
        id: 'praia-de-copacabana',
        nome: 'Praia de Copacabana',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Lugar Paradísíaco',
        imagem: '/copa2.webp',
      },
      {
        id: 'praia-de-ipanema',
        nome: 'Praia de Ipanema',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Lugar Paradísíaco',
        imagem: '/ipa.webp',
      },
        {
        id: 'floresta-da-tijuca',
        nome: 'Floresta da Tijuca',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Lugar Paradísíaco',
        imagem: '/tiju.jpg',
      },
        {
        id: 'lagoa-rodrigo-de-freitas',
        nome: 'Lagoa Rodrigo de Freitas',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Lugar Paradísíaco',
        imagem: '/lagoa.webp',
      },
      {
        id: 'jardim-botanico',
        nome: 'Jardim Botânico',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Lugar Paradísíaco',
        imagem: '/bota.jpg',
      },
      {
        id: 'parque-lage',
        nome: 'Parque Lage',
        cidade: 'Rio de Janeiro - RJ',
        categoria: 'Lugar Paradísíaco',
        imagem: '/parque.jpg',
      },
];

const RJPontos = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredPontos, setFilteredPontos] = useState([]);
  const pontosAtivos = useLocaisAtivos('Rio de Janeiro', pontosTuristicos);

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
          onClick={() => navigate('/rio-de-janeiro')} 
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
          {categories.map(category => (
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
              <img src={ponto.imagem} alt={ponto.nome} className="rj-pontos-card-image" />
            </div>
            <div className="rj-pontos-card-content">
              <h2 className="rj-pontos-card-title">{ponto.nome}</h2>
              <p className="rj-pontos-card-category">{ponto.categoria} • {ponto.cidade}</p>
              <p className="rj-pontos-card-description">{ponto.descricao}</p>
              <button 
                className="rj-pontos-button"
                onClick={() => handleSaibaMaisClick(ponto.id)}
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
