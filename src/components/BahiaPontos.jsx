import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BahiaPontos.css';
import { useLocaisAtivos } from '../hooks/useLocaisAtivos';

const pontosTuristicos = [
  {
    id: 'pelourinho',
    nome: 'Pelourinho',
    cidade: 'Salvador - BA',
    categoria: 'Monumentos',
    imagem: '/images/geral/pelo-xx.jpg',
    descricao: 'Centro histórico de Salvador, Patrimônio Mundial da UNESCO. Casarões coloniais coloridos, igrejas barrocas e o berço da cultura afro-brasileira.',
  },
  {
    id: 'chapada-diamantina',
    nome: 'Chapada Diamantina',
    cidade: 'Lençóis - BA',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/natureza/chapada.jpeg',
    descricao: 'Parque Nacional com cachoeiras, grutas, picos e trilhas deslumbrantes no coração da Bahia. Destino obrigatório para o ecoturismo.',
  },
  {
    id: 'porto-seguro',
    nome: 'Porto Seguro',
    cidade: 'Porto Seguro - BA',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/pelo3.jpg',
    descricao: 'Onde o Brasil foi descoberto em 1500. Praias paradisíacas, centro histórico tombado e a famosa vida noturna da Passarela do Álcool.',
  },
  {
    id: 'morro-sao-paulo',
    nome: 'Morro de São Paulo',
    cidade: 'Cairu - BA',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/pelou1.jpg',
    descricao: 'Ilha sem carros com praias numeradas de tirar o fôlego. Acesso apenas por barco ou avião, garantindo um paraíso preservado no litoral baiano.',
  },
  {
    id: 'elevador-lacerda',
    nome: 'Elevador Lacerda',
    cidade: 'Salvador - BA',
    categoria: 'Monumentos',
    imagem: '/images/geral/pelou2.jpg',
    descricao: 'Ícone de Salvador inaugurado em 1873, conecta a Cidade Alta à Cidade Baixa. Um dos elevadores públicos mais famosos do mundo com vista para a Baía de Todos os Santos.',
  },
  {
    id: 'lencois-baianos',
    nome: 'Lençóis',
    cidade: 'Lençóis - BA',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/natureza/lencois.jpeg',
    descricao: 'Cidade histórica porta de entrada da Chapada Diamantina. Ruas de pedra, casarões do século XIX e o Rio Lençóis com suas piscinas naturais de água cristalina.',
  },
];

const rotas = {
  'pelourinho': '/ba/pelourinho',
  'chapada-diamantina': '/ba/chapada-diamantina',
  'porto-seguro': '/ba/porto-seguro',
  'morro-sao-paulo': '/ba/morro-sao-paulo',
  'elevador-lacerda': '/ba/elevador-lacerda',
  'lencois-baianos': '/ba/lencois',
};

const BahiaPontos = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredPontos, setFilteredPontos] = useState([]);
  const pontosAtivos = useLocaisAtivos('BA', pontosTuristicos);

  const categories = ['Todos', 'Lugar Paradísíaco', 'Monumentos', 'Restaurantes'];

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
    <div className="ba-pontos-page">
      <header className="ba-pontos-header">
        <button onClick={() => navigate(-1)} className="ba-pontos-button" style={{ position: 'absolute', top: '2rem', left: '2rem', backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'white' }}>
          ← Voltar
        </button>
        <h1 className="ba-pontos-h1">Tesouros da Bahia</h1>
        <p className="ba-pontos-subheader">Do Pelourinho à Chapada Diamantina, descubra a alma baiana.</p>
      </header>

      <div className="ba-pontos-controls">
        <input
          type="text"
          placeholder="O que você quer descobrir na Bahia?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="ba-pontos-search-bar"
        />
        <div className="ba-pontos-filter-buttons">
          {categories.map(category => (
            <button key={category} onClick={() => setSelectedCategory(category)} className={`ba-pontos-button ${selectedCategory === category ? 'active' : ''}`}>
              {category}
            </button>
          ))}
        </div>
      </div>

      <main className="ba-pontos-grid">
        {filteredPontos.map(ponto => (
          <div key={ponto.id} className="ba-pontos-card">
            <div className="ba-pontos-card-image-container">
              {ponto.imagem
                ? <img src={ponto.imagem} alt={ponto.nome} className="ba-pontos-card-image" />
                : <div className="ba-pontos-card-image" style={{ background: 'linear-gradient(135deg,#c0392b,#922b21)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', height: '100%' }}>🗺️</div>
              }
            </div>
            <div className="ba-pontos-card-content">
              <h2 className="ba-pontos-card-title">{ponto.nome}</h2>
              <p className="ba-pontos-card-category">{ponto.categoria} • {ponto.cidade}</p>
              <p className="ba-pontos-card-description">{ponto.descricao}</p>
              <button
                className="ba-pontos-button"
                onClick={() => { if (ponto.bdId != null) navigate(`/local/${ponto.bdId}`); else if (rotas[ponto.id]) navigate(rotas[ponto.id]); }}
                style={{ opacity: ponto.bdId != null || rotas[ponto.id] ? 1 : 0.4, cursor: ponto.bdId != null || rotas[ponto.id] ? 'pointer' : 'not-allowed' }}
              >
                Saiba mais
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className="ba-pontos-footer">
        <p>&copy; 2025 GADYS. Feito com o axé da Bahia.</p>
      </footer>
    </div>
  );
};

export default BahiaPontos;
