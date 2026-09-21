import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CearaPontos.css';
import { useLocaisAtivos } from '../hooks/useLocaisAtivos';

const pontosTuristicos = [
  {
    id: 'florianopolis',
    nome: 'Florianópolis',
    cidade: 'Florianópolis - SC',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/sc-floripa.jpg',
  },
  {
    id: 'balneario-camboriu',
    nome: 'Balneário Camboriú',
    cidade: 'Balneário Camboriú - SC',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/sc-bc.jpg',
  },
  {
    id: 'bombinhas',
    nome: 'Bombinhas',
    cidade: 'Bombinhas - SC',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/sc-bombinhas.jpg',
  },
  {
    id: 'blumenau',
    nome: 'Blumenau e Oktoberfest',
    cidade: 'Blumenau - SC',
    categoria: 'Monumentos',
    imagem: '/images/geral/sc-blumenau.jpg',
  },
  {
    id: 'sao-joaquim',
    nome: 'São Joaquim',
    cidade: 'São Joaquim - SC',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/sc-saojoaquim.jpg',
  },
  {
    id: 'joinville',
    nome: 'Joinville',
    cidade: 'Joinville - SC',
    categoria: 'Monumentos',
    imagem: '/images/geral/sc-joinville.jpg',
  },
];

const rotas = {
  'florianopolis': '/sc/florianopolis',
  'balneario-camboriu': '/sc/balneario-camboriu',
  'bombinhas': '/sc/bombinhas',
  'blumenau': '/sc/blumenau',
  'sao-joaquim': '/sc/sao-joaquim',
  'joinville': '/sc/joinville',
};

const SantaCatarinaPontos = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredPontos, setFilteredPontos] = useState([]);
  const pontosAtivos = useLocaisAtivos('SC', pontosTuristicos);

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
    <div className="ce-pontos-page" style={{ background: 'linear-gradient(160deg, #e3f0ff 0%, #b3d4f5 100%)', color: '#0d3b6e' }}>
      <header className="ce-pontos-header" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/images/geral/sc1.jpg')" }}>
        <button onClick={() => navigate(-1)} className="ce-pontos-button" style={{ position: 'absolute', top: '2rem', left: '2rem', backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'white' }}>
          ← Voltar
        </button>
        <h1 className="ce-pontos-h1">Tesouros de Santa Catarina</h1>
        <p className="ce-pontos-subheader">Descubra as maravilhas do Estado das Maravilhas.</p>
      </header>

      <div className="ce-pontos-controls" style={{ background: 'linear-gradient(135deg, #1565c0, #0d47a1)' }}>
        <input
          type="text"
          placeholder="O que você quer descobrir em Santa Catarina?"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="ce-pontos-search-bar"
        />
        <div className="ce-pontos-filter-buttons">
          {categories.map(cat => (
            <button key={cat} onClick={() => setSelectedCategory(cat)} className={`ce-pontos-button ${selectedCategory === cat ? 'active' : ''}`} style={{ '--active-color': '#1565c0' }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <main className="ce-pontos-grid">
        {filteredPontos.map(ponto => (
          <div key={ponto.id} className="ce-pontos-card" style={{ borderImage: 'linear-gradient(90deg, #1565c0, #42a5f5) 1' }}>
            <div className="ce-pontos-card-image-container">
              {ponto.imagem
                ? <img src={ponto.imagem} alt={ponto.nome} className="ce-pontos-card-image" />
                : <div className="ce-pontos-card-image" style={{ background: 'linear-gradient(135deg, #1565c0, #42a5f5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', height: '100%' }}>🗺️</div>
              }
            </div>
            <div className="ce-pontos-card-content">
              <h2 className="ce-pontos-card-title" style={{ background: 'linear-gradient(90deg, #1565c0, #42a5f5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{ponto.nome}</h2>
              <p className="ce-pontos-card-category" style={{ color: '#1565c0' }}>{ponto.categoria} • {ponto.cidade}</p>
              <p className="ce-pontos-card-description" style={{ color: '#0d3b6e' }}>{ponto.descricao}</p>
              <button
                className="ce-pontos-button"
                onClick={() => { if (ponto.bdId != null) navigate(`/local/${ponto.bdId}`); else if (rotas[ponto.id]) navigate(rotas[ponto.id]); }}
                style={{ background: 'linear-gradient(135deg, #1565c0, #42a5f5)', border: 'none', opacity: ponto.bdId != null || rotas[ponto.id] ? 1 : 0.4, cursor: ponto.bdId != null || rotas[ponto.id] ? 'pointer' : 'not-allowed' }}
              >
                Saiba mais
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className="ce-pontos-footer" style={{ background: 'linear-gradient(135deg, #0d47a1, #1565c0)' }}>
        <p>&copy; 2025 GADYS. Feito com o frio e o calor de Santa Catarina.</p>
      </footer>
    </div>
  );
};

export default SantaCatarinaPontos;
