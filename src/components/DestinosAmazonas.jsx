import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { destinosAmazonasData } from '../data/destinosAmazonasData';
import './DestinosAmazonas.css';
import { useLocaisAtivos } from '../hooks/useLocaisAtivos';

const DestinosAmazonas = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredDestinos, setFilteredDestinos] = useState([]);
  const pontosAtivos = useLocaisAtivos('Amazonas', destinosAmazonasData);

  const categories = ['Todos', 'Lugar Paradísíaco', 'Restaurantes', 'Costume Cultural', 'Monumentos'];

  useEffect(() => {
    let result = pontosAtivos;
    if (selectedCategory !== 'Todos') {
      result = result.filter(item => item.category === selectedCategory);
    }
    if (searchTerm) {
      result = result.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredDestinos([]); 
    setTimeout(() => setFilteredDestinos(result), 50);

  }, [searchTerm, selectedCategory, pontosAtivos]);

  return (
    <div className="amazonas-destinos-page">
      <header className="amazonas-destinos-header">
        <button
          onClick={() => navigate('/amazonas-estado')}
          style={{
            position: 'absolute', top: '2rem', left: '2rem', zIndex: 10,
            background: 'rgba(255,255,255,0.2)', border: '2px solid white',
            color: 'white', padding: '0.7rem 1.5rem', borderRadius: '50px',
            cursor: 'pointer', fontWeight: '600', fontSize: '0.95rem'
          }}
        >
          ← Voltar
        </button>
        <h1 className="amazonas-destinos-h1">Coração da Floresta</h1>
        <p className="amazonas-destinos-subheader">Descubra os tesouros do Amazonas</p>
      </header>

      <div className="amazonas-destinos-controls">
        <input 
          type="text"
          placeholder="Qual segredo você quer desvendar?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="amazonas-destinos-search-bar"
        />
        <div className="amazonas-destinos-filter-buttons">
          {categories.map(category => (
            <button 
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`amazonas-destinos-button ${selectedCategory === category ? 'active' : ''}`}>
              {category}
            </button>
          ))}
        </div>
      </div>

      <main className="amazonas-destinos-grid">
        {filteredDestinos.map(item => (
          <div key={item.id} className="amazonas-destinos-card">
            <div className="amazonas-destinos-card-image-container">
              <img src={item.image} alt={item.name} className="amazonas-destinos-card-image" />
            </div>
            <div className="amazonas-destinos-card-content">
              <h2 className="amazonas-destinos-card-title">{item.name}</h2>
              <p className="amazonas-destinos-card-category">{item.category} • {item.location}</p>
              <p className="amazonas-destinos-card-description">{item.description}</p>
              <button 
                className="amazonas-destinos-saibamais"
                onClick={() => item.id === 1 ? navigate('/encontro-aguas') : item.id === 2 ? navigate('/teatro-amazonas') : item.id === 3 ? navigate('/amazonico-peixaria') : item.id === 4 ? navigate('/arquipelago-anavilhanas') : null}
                style={{ opacity: item.id === 1 || item.id === 2 || item.id === 3 || item.id === 4 ? 1 : 0.4, cursor: item.id === 1 || item.id === 2 || item.id === 3 || item.id === 4 ? 'pointer' : 'not-allowed' }}
              >Saber mais</button>
            </div>
          </div>
        ))}
      </main>

      <footer className="amazonas-destinos-footer">
        <p>GADYS © 2025</p>
      </footer>
    </div>
  );
};

export default DestinosAmazonas;
