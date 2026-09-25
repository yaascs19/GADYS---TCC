import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SergipePontos.css';
import { useLocaisAtivos } from '../hooks/useLocaisAtivos';
import { useCategorias } from '../hooks/useCategorias';

const pontosTuristicos = [
  {
    id: 'canion-xingo',
    nome: 'Cânion do Xingó',
    cidade: 'Canindé de São Francisco - SE',
    categoria: 'Lugar Paradísíaco',
    descricao: 'Um dos espetáculos naturais mais impressionantes do Nordeste, com paredes rochosas de até 150 metros e as águas esverdeadas do Rio São Francisco.',
    imagem: '/images/geral/Canion.jpg',
    rota: '/sergipe/canion-xingo',
  },
  {
    id: 'orla-atalaia',
    nome: 'Orla de Atalaia',
    cidade: 'Aracaju - SE',
    categoria: 'Lugar Paradísíaco',
    descricao: 'A orla mais famosa de Aracaju, com praias de águas mornas, ciclovia, quiosques e o famoso Passarinho, símbolo da cidade.',
    imagem: '/images/geral/orla.jpg',
    rota: null,
  },
  {
    id: 'laranjeiras',
    nome: 'Laranjeiras',
    cidade: 'Laranjeiras - SE',
    categoria: 'Monumentos',
    descricao: 'Cidade histórica tombada pelo IPHAN com igrejas barrocas, casarões coloniais e o maior festival de cultura popular do Nordeste.',
    imagem: '/images/geral/Laranjeiras.jpg',
    rota: null,
  },
  {
    id: 'mangue-seco',
    nome: 'Mangue Seco',
    cidade: 'Indiaroba - SE',
    categoria: 'Lugar Paradísíaco',
    descricao: 'Cenário do romance Tieta do Agreste de Jorge Amado, com dunas brancas, coqueirais e o encontro do Rio Real com o mar.',
    imagem: '/images/geral/mangue.jpg',
    rota: null,
  },
  {
    id: 'sao-cristovao',
    nome: 'São Cristóvão',
    cidade: 'São Cristóvão - SE',
    categoria: 'Monumentos',
    descricao: 'A quarta cidade mais antiga do Brasil e Patrimônio Mundial da UNESCO, com uma das praças coloniais mais bem preservadas do país.',
    imagem: '/images/geral/Cristóvão.jpg',
    rota: null,
  },
  {
    id: 'mercado-municipal-aracaju',
    nome: 'Mercado Municipal de Aracaju',
    cidade: 'Aracaju - SE',
    categoria: 'Restaurantes',
    descricao: 'O coração gastronômico de Sergipe, famoso pelo caranguejo com pirão, sururu de capote e os doces típicos sergipanos.',
    imagem: '/images/geral/Aracaju.jpg',
    rota: null,
  },
  {
    id: 'praia-do-frances-se',
    nome: 'Praia do Saco',
    cidade: 'Estância - SE',
    categoria: 'Lugar Paradísíaco',
    descricao: 'Uma das praias mais preservadas de Sergipe, com águas cristalinas, coqueirais e ambiente tranquilo ideal para descanso.',
    imagem: '/images/geral/saco.jpg',
    rota: null,
  },
  {
    id: 'museu-historico-sergipe',
    nome: 'Museu Histórico de Sergipe',
    cidade: 'São Cristóvão - SE',
    categoria: 'Monumentos',
    descricao: 'Instalado no antigo Palácio do Governo, o museu guarda um dos mais importantes acervos históricos e artísticos do Nordeste.',
    imagem: '/images/geral/museu.jpg',
    rota: null,
  },
];

const rotas = {
  'canion-xingo': '/sergipe/canion-xingo',
};

const SergipePontos = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredPontos, setFilteredPontos] = useState([]);
  const pontosAtivos = useLocaisAtivos('SE', pontosTuristicos);
  const categorias = useCategorias('SE');

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
    <div className="se-pontos-page">
      <header className="se-pontos-header">
        <button
          onClick={() => navigate(-1)}
          className="se-pontos-button"
          style={{ position: 'absolute', top: '2rem', left: '2rem', backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'white' }}
        >
          ← Voltar
        </button>
        <h1 className="se-pontos-h1">Tesouros de Sergipe</h1>
        <p className="se-pontos-subheader">Descubra o menor e mais encantador estado do Brasil.</p>
      </header>

      <div className="se-pontos-controls">
        <input
          type="text"
          placeholder="O que você quer descobrir em Sergipe?"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="se-pontos-search-bar"
        />
        <div className="se-pontos-filter-buttons">
          {(categorias ?? []).map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`se-pontos-button ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <main className="se-pontos-grid">
        {filteredPontos.map(ponto => (
          <div key={ponto.id} className="se-pontos-card">
            <div className="se-pontos-card-image-container">
              {ponto.imagem
                ? <img src={ponto.imagem} alt={ponto.nome} className="se-pontos-card-image" />
                : <div className="se-pontos-card-image" style={{ background: 'linear-gradient(135deg,#2e7d32,#1b5e20)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', height: '100%' }}>🌿</div>
              }
            </div>
            <div className="se-pontos-card-content">
              <h2 className="se-pontos-card-title">{ponto.nome}</h2>
              <p className="se-pontos-card-category">{ponto.categoria} • {ponto.cidade}</p>
              <p className="se-pontos-card-description">{ponto.descricao}</p>
              <button
                className="se-pontos-button"
                onClick={() => { if (ponto.bdId != null) navigate(`/local/${ponto.bdId}`); else if (rotas[ponto.id]) navigate(rotas[ponto.id]); }}
                style={{ opacity: ponto.bdId != null || rotas[ponto.id] ? 1 : 0.4, cursor: ponto.bdId != null || rotas[ponto.id] ? 'pointer' : 'not-allowed' }}
              >
                Saiba mais
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className="se-pontos-footer">
        <p>&copy; 2025 GADYS. Feito com a energia de Sergipe.</p>
      </footer>
    </div>
  );
};

export default SergipePontos;
