import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LugaresPage.css';

const lugares = [
  { id: 'cristo-redentor', nome: 'Cristo Redentor', cidade: 'Rio de Janeiro - RJ', categoria: 'Monumentos', imagem: '/cristo.jpg' },
  { id: 'pao-de-acucar', nome: 'Pão de Açúcar', cidade: 'Rio de Janeiro - RJ', categoria: 'Lugar Paradisíaco', imagem: '/pao.jpg' },
  { id: 'cataratas-iguacu', nome: 'Cataratas do Iguaçu', cidade: 'Foz do Iguaçu - PR', categoria: 'Natureza', imagem: '/cata.jpg' },
  { id: 'pelourinho', nome: 'Pelourinho', cidade: 'Salvador - BA', categoria: 'Cultura', imagem: '/pelo.jpg' },
  { id: 'fernando-noronha', nome: 'Fernando de Noronha', cidade: 'Pernambuco - PE', categoria: 'Lugar Paradisíaco', imagem: '/fer.jpg' },
  { id: 'pantanal', nome: 'Pantanal', cidade: 'Mato Grosso - MT', categoria: 'Natureza', imagem: '/pan.jpg' },
];

const categorias = ['Todos', 'Monumentos', 'Lugar Paradisíaco', 'Natureza', 'Cultura'];

function LugaresPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filtered, setFiltered] = useState(lugares);

  useEffect(() => {
    let result = lugares;
    if (selectedCategory !== 'Todos') result = result.filter(l => l.categoria === selectedCategory);
    if (searchTerm) result = result.filter(l => l.nome.toLowerCase().includes(searchTerm.toLowerCase()) || l.cidade.toLowerCase().includes(searchTerm.toLowerCase()));
    setFiltered(result);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="lp-page">

      <header className="lp-header">
        <Link to="/" className="lp-back-btn">← Voltar</Link>
        <h1>Explore o Brasil</h1>
        <p>Descubra alguns dos destinos mais incríveis que nosso país tem a oferecer.</p>
      </header>

      <div className="lp-controls">
        <input
          type="text"
          placeholder="O que você quer descobrir?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="lp-search-bar"
        />
        <div className="lp-filter-buttons">
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`lp-btn ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <main className="lp-grid">
        {filtered.map((lugar, i) => (
          <div key={lugar.id} className="lp-card" style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="lp-card-image-container">
              <img src={lugar.imagem} alt={lugar.nome} className="lp-card-image" />
            </div>
            <div className="lp-card-content">
              <h2 className="lp-card-title">{lugar.nome}</h2>
              <p className="lp-card-category">{lugar.categoria} • {lugar.cidade}</p>
              <button
                className="lp-btn"
                onClick={() => navigate(`/${lugar.id}`)}
              >
                Saiba mais
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className="lp-footer">
        <p>&copy; 2025 GADYS. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}

export default LugaresPage;
