import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NortePontos.css';
import { useLocaisAtivos } from '../../hooks/useLocaisAtivos';

const CATEGORIES = ['Todos', 'Lugar Paradísíaco', 'Restaurantes', 'Costume Cultural', 'Monumentos'];

const NortePontosBase = ({ config }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredPontos, setFilteredPontos] = useState([]);
  const pontosAtivos = useLocaisAtivos(config.estado, config.pontos);

  useEffect(() => {
    let result = pontosAtivos;
    if (selectedCategory !== 'Todos') result = result.filter(p => p.categoria === selectedCategory);
    if (searchTerm) result = result.filter(p =>
      p.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.descricao.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPontos(result);
  }, [searchTerm, selectedCategory, pontosAtivos]);

  return (
    <div className="norte-pontos-page">
      <header className="norte-pontos-header" style={{ background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${config.headerImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <button onClick={() => navigate(config.voltarRota)} className="norte-pontos-button"
          style={{ position: 'absolute', top: '2rem', left: '2rem', backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'white' }}>
          ← Voltar
        </button>
        <h1 className="norte-pontos-h1">{config.titulo}</h1>
        <p className="norte-pontos-subheader">{config.subtitulo}</p>
      </header>

      <div className="norte-pontos-controls">
        <input type="text" placeholder={config.placeholder} value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} className="norte-pontos-search-bar" />
        <div className="norte-pontos-filter-buttons">
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setSelectedCategory(cat)}
              className={`norte-pontos-button ${selectedCategory === cat ? 'active' : ''}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <main className="norte-pontos-grid">
        {filteredPontos.map(ponto => (
          <div key={ponto.id} className="norte-pontos-card">
            <div className="norte-pontos-card-image-container">
              <img src={ponto.imagem} alt={ponto.nome} className="norte-pontos-card-image" />
            </div>
            <div className="norte-pontos-card-content">
              <h2 className="norte-pontos-card-title">{ponto.nome}</h2>
              <p className="norte-pontos-card-category">{ponto.categoria} • {ponto.cidade}</p>
              <p className="norte-pontos-card-description">{ponto.descricao}</p>
              <button className="norte-pontos-saibamais"
                onClick={() => ponto.bdId ? navigate(`/local/${ponto.bdId}`) : ponto.rota ? navigate(ponto.rota) : null}
                style={{ opacity: ponto.bdId || ponto.rota ? 1 : 0.4, cursor: ponto.bdId || ponto.rota ? 'pointer' : 'not-allowed' }}>
                Saiba mais
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className="norte-pontos-footer">
        <p>GADYS © 2025 — {config.estado}</p>
      </footer>
    </div>
  );
};

export default NortePontosBase;
