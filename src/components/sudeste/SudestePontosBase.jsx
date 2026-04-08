import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SudestePontos.css';
import { useLocaisAtivos } from '../../hooks/useLocaisAtivos';

const CATEGORIES = ['Todos', 'Lugar Paradísíaco', 'Restaurantes', 'Costume Cultural', 'Monumentos'];

const SudestePontosBase = ({ config }) => {
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
    <div className="sudeste-pontos-page">
      <header className="sudeste-pontos-header" style={{ background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${config.headerImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <button onClick={() => navigate(config.voltarRota)} className="sudeste-pontos-button"
          style={{ position: 'absolute', top: '2rem', left: '2rem', backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'white' }}>
          ← Voltar
        </button>
        <h1 className="sudeste-pontos-h1">{config.titulo}</h1>
        <p className="sudeste-pontos-subheader">{config.subtitulo}</p>
      </header>

      <div className="sudeste-pontos-controls">
        <input type="text" placeholder={config.placeholder} value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} className="sudeste-pontos-search-bar" />
        <div className="sudeste-pontos-filter-buttons">
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setSelectedCategory(cat)}
              className={`sudeste-pontos-button ${selectedCategory === cat ? 'active' : ''}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <main className="sudeste-pontos-grid">
        {filteredPontos.map(ponto => (
          <div key={ponto.id} className="sudeste-pontos-card">
            <div className="sudeste-pontos-card-image-container">
              <img src={ponto.imagem} alt={ponto.nome} className="sudeste-pontos-card-image" />
            </div>
            <div className="sudeste-pontos-card-content">
              <h2 className="sudeste-pontos-card-title">{ponto.nome}</h2>
              <p className="sudeste-pontos-card-category">{ponto.categoria} • {ponto.cidade}</p>
              <p className="sudeste-pontos-card-description">{ponto.descricao}</p>
              <button className="sudeste-pontos-saibamais"
                onClick={() => ponto.bdId ? navigate(`/local/${ponto.bdId}`) : ponto.rota ? navigate(ponto.rota) : null}
                style={{ opacity: ponto.bdId || ponto.rota ? 1 : 0.4, cursor: ponto.bdId || ponto.rota ? 'pointer' : 'not-allowed' }}>
                Saiba mais
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className="sudeste-pontos-footer">
        <p>GADYS © 2025 — {config.estado}</p>
      </footer>
    </div>
  );
};

export default SudestePontosBase;
