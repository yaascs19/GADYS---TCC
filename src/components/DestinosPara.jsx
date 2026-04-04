import React, { useState, useEffect } from 'react';
import { destinosData } from '../data/destinosData';
import './DestinosPara.css';
import { useLocaisAtivos } from '../hooks/useLocaisAtivos';

const DestinosPara = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredDestinos, setFilteredDestinos] = useState([]);
  const pontosAtivos = useLocaisAtivos('Pará', destinosData);

  const categories = ['Todos', 'Lugar Paradisíaco', 'Comida Típica', 'Costume Cultural', 'Monumento'];

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
    setFilteredDestinos(result);

  }, [searchTerm, selectedCategory, pontosAtivos]);

  return (
    <div className="para-destinos-page">
      <header className="para-destinos-header">
        <h1 className="para-destinos-h1">Alma da Floresta</h1>
        <p className="para-destinos-subheader">Segredos e encantos da terra paraense</p>
      </header>

      <div className="para-destinos-controls">
        <input 
          type="text"
          placeholder="Qual segredo você quer desvendar?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="para-destinos-search-bar"
        />
        <div className="para-destinos-filter-buttons">
          {categories.map(category => (
            <button 
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`para-destinos-button ${selectedCategory === category ? 'active' : ''}`}>
              {category}
            </button>
          ))}
        </div>
      </div>

      <main className="para-destinos-grid">
        {filteredDestinos.map(item => (
          <div key={item.id} className="para-destinos-card">
            <div className="para-destinos-card-image-container">
              <img src={item.image} alt={item.name} className="para-destinos-card-image" />
            </div>
            <div className="para-destinos-card-content">
              <h2 className="para-destinos-card-title">{item.name}</h2>
              <p className="para-destinos-card-category">{item.category} • {item.location}</p>
              <p className="para-destinos-card-description">{item.description}</p>
            </div>
          </div>
        ))}
      </main>

      <footer className="para-destinos-footer">
        <p>GADYS © 2025</p>
      </footer>
    </div>
  );
};

export default DestinosPara;
