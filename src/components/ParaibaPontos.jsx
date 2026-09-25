import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ParaibaPontos.css';
import { useLocaisAtivos } from '../hooks/useLocaisAtivos';

const pontosTuristicos = [
  {
    id: 'cabo-branco',
    nome: 'Farol do Cabo Branco',
    cidade: 'João Pessoa - PB',
    categoria: 'Monumentos',
    imagem: '/images/geral/rn-forte.jpg',
    descricao: 'O ponto mais oriental das Américas, com farol histórico e vista privilegiada do Atlântico.',
  },
  {
    id: 'praia-de-tambaba',
    nome: 'Praia de Tambaba',
    cidade: 'Conde - PB',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/rn-pipa.jpg',
    descricao: 'Falésias avermelhadas, piscinas naturais e uma das praias mais belas do litoral nordestino.',
  },
  {
    id: 'praia-de-coqueirinho',
    nome: 'Praia de Coqueirinho',
    cidade: 'Conde - PB',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/rn-baiaformosa.jpg',
    descricao: 'Piscinas naturais entre falésias coloridas, considerada uma das praias mais bonitas da Paraíba.',
  },
  {
    id: 'centro-historico-joao-pessoa',
    nome: 'Centro Histórico de João Pessoa',
    cidade: 'João Pessoa - PB',
    categoria: 'Monumentos',
    imagem: '/images/geral/pelo.jpg',
    descricao: 'Uma das cidades mais verdes do mundo, com igrejas barrocas, casarões coloniais e o Parque Solon de Lucena.',
  },
  {
    id: 'lagoa-de-guaribas',
    nome: 'Lagoa de Guaribas',
    cidade: 'Cabedelo - PB',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/rn-maracajau.jpg',
    descricao: 'Lagoa de águas calmas cercada de coqueiros, ideal para esportes aquáticos e passeios de caiaque.',
  },
  {
    id: 'areia-centro',
    nome: 'Areia e o Brejo Paraibano',
    cidade: 'Areia - PB',
    categoria: 'Monumentos',
    imagem: '/images/geral/rn-cultura.jpg',
    descricao: 'Cidade histórica no Brejo Paraibano, com casarões coloniais, museus e a famosa cachaça artesanal.',
  },
];

const rotas = {
  'cabo-branco': '/pb/cabo-branco',
  'praia-de-tambaba': '/pb/praia-de-tambaba',
  'praia-de-coqueirinho': '/pb/praia-de-coqueirinho',
  'centro-historico-joao-pessoa': '/pb/centro-historico-joao-pessoa',
  'lagoa-de-guaribas': '/pb/lagoa-de-guaribas',
  'areia-centro': '/pb/areia-centro',
};

const ParaibaPontos = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredPontos, setFilteredPontos] = useState([]);
  const pontosAtivos = useLocaisAtivos('PB', pontosTuristicos);

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
    <div className="pb-pontos-page">
      <header className="pb-pontos-header">
        <button
          onClick={() => navigate(-1)}
          className="pb-pontos-button"
          style={{ position: 'absolute', top: '2rem', left: '2rem', backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'white' }}
        >
          ← Voltar
        </button>
        <h1 className="pb-pontos-h1">Tesouros da Paraíba</h1>
        <p className="pb-pontos-subheader">Do Cabo Branco às falésias de Tambaba e Coqueirinho.</p>
      </header>

      <div className="pb-pontos-controls">
        <input
          type="text"
          placeholder="O que você quer descobrir na Paraíba?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pb-pontos-search-bar"
        />
        <div className="pb-pontos-filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`pb-pontos-button ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <main className="pb-pontos-grid">
        {filteredPontos.map(ponto => (
          <div key={ponto.id} className="pb-pontos-card">
            <div className="pb-pontos-card-image-container">
              {ponto.imagem
                ? <img src={ponto.imagem} alt={ponto.nome} className="pb-pontos-card-image" />
                : <div className="pb-pontos-card-image" style={{ background: 'linear-gradient(135deg,#00695c,#26a69a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', height: '100%' }}>🗺️</div>
              }
            </div>
            <div className="pb-pontos-card-content">
              <h2 className="pb-pontos-card-title">{ponto.nome}</h2>
              <p className="pb-pontos-card-category">{ponto.categoria} • {ponto.cidade}</p>
              <p className="pb-pontos-card-description">{ponto.descricao}</p>
              <button
                className="pb-pontos-button"
                onClick={() => { if (ponto.bdId != null) navigate(`/local/${ponto.bdId}`); else if (rotas[ponto.id]) navigate(rotas[ponto.id]); }}
                style={{ opacity: ponto.bdId != null || rotas[ponto.id] ? 1 : 0.4, cursor: ponto.bdId != null || rotas[ponto.id] ? 'pointer' : 'not-allowed' }}
              >
                Saiba mais
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className="pb-pontos-footer">
        <p>&copy; 2025 GADYS. Feito com a energia da Paraíba.</p>
      </footer>
    </div>
  );
};

export default ParaibaPontos;
