import React, { useState, useEffect } from 'react';
import { destinosData } from '../data/destinosData';
import './DestinosPara.css'; // Using the new theme-based CSS

const DestinosPara = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredDestinos, setFilteredDestinos] = useState([]);

  const categories = ['Todos', 'Lugar Paradisíaco', 'Comida Típica', 'Costume Cultural', 'Monumento'];

  useEffect(() => {
    let result = destinosData;
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

  }, [searchTerm, selectedCategory]);

  return (
    <div className="theme-page">
      <header className="theme-header">
        <h1 className="theme-h1">Alma da Floresta</h1>
        <p className="theme-subheader">Segredos e encantos da terra paraense</p>
      </header>

      <div className="theme-controls">
        <input 
          type="text"
          placeholder="Qual segredo você quer desvendar?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="theme-search-bar"
        />
        <div className="theme-filter-buttons">
          {categories.map(category => (
            <button 
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`theme-button ${selectedCategory === category ? 'active' : ''}`}>
              {category}
            </button>
          ))}
        </div>
      </div>

      <main className="theme-grid">
        {filteredDestinos.map(item => (
          <div key={item.id} className="theme-card">
            <div className="theme-card-image-container">
              <img src={item.image} alt={item.name} className="theme-card-image" />
            </div>
            <div className="theme-card-content">
              <h2 className="theme-card-title">{item.name}</h2>
              <p className="theme-card-category">{item.category} • {item.location}</p>
              <p className="theme-card-description">{item.description}</p>
            </div>
          </div>
        ))}
      </main>

      <footer className="theme-footer">
        <p>GADYS © 2025</p>
      </footer>
    </div>
  );
};

export default DestinosPara;
