import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CearaPontos.css';
import { useLocaisAtivos } from '../hooks/useLocaisAtivos';
import { useCategorias } from '../hooks/useCategorias';

const pontosTuristicos = [
  {
    id: 'jericoacoara',
    nome: 'Jericoacoara',
    cidade: 'Jijoca de Jericoacoara - CE',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/JeriCE.jpg',
    descricao: 'Vila de pescadores transformada em paraíso, com dunas, lagoas de água doce e o famoso pôr do sol na Pedra Furada.',
  },
  {
    id: 'canoa-quebrada',
    nome: 'Canoa Quebrada',
    cidade: 'Aracati - CE',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/QuebradaCE.jpg',
    descricao: 'Falésias vermelhas, dunas douradas e praias de águas mornas que encantam visitantes do mundo inteiro.',
  },
  {
    id: 'dragao-do-mar',
    nome: 'Centro Dragão do Mar',
    cidade: 'Fortaleza - CE',
    categoria: 'Monumentos',
    imagem: '/images/geral/DragaoCE.jpg',
    descricao: 'Centro cultural com museus, planetário, teatro e espaços de arte que celebram a identidade cearense.',
  },
  {
    id: 'beach-park',
    nome: 'Beach Park',
    cidade: 'Aquiraz - CE',
    categoria: 'Restaurantes',
    imagem: '/images/geral/ParkCE.jpg',
    descricao: 'O maior parque aquático da América Latina, com toboáguas radicais, área kids e resort à beira-mar.',
  },
  {
    id: 'praia-do-futuro',
    nome: 'Praia do Futuro',
    cidade: 'Fortaleza - CE',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/futuroCE.jpeg',
    descricao: 'A praia mais popular de Fortaleza, famosa pelas barracas animadas, frutos do mar e águas agitadas.',
  },
  {
    id: 'serra-de-baturite',
    nome: 'Serra de Baturité',
    cidade: 'Baturité - CE',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/SerraCE.jpg',
    descricao: 'Maciço de Baturité com clima ameno, cachoeiras, plantações de café e uma natureza exuberante na serra cearense.',
  },
  {
    id: 'chapada-do-araripe',
    nome: 'Chapada do Araripe',
    cidade: 'Crato - CE',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/AraripeCE.jpg',
    descricao: 'Planalto com nascentes de água cristalina, fontes hidrominerais e sítios paleontológicos únicos no mundo.',
  },
  {
    id: 'fortaleza-centro',
    nome: 'Centro Histórico de Fortaleza',
    cidade: 'Fortaleza - CE',
    categoria: 'Monumentos',
    imagem: '/images/geral/HistoCE.jpg',
    descricao: 'Coração histórico da capital com a Catedral, o Mercado Central e a Fortaleza de Nossa Senhora da Assunção.',
  },
];

const rotas = {
  'jericoacoara': '/ceara/jericoacoara',
  'canoa-quebrada': '/ceara/canoa-quebrada',
};

const CearaPontos = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredPontos, setFilteredPontos] = useState([]);
  const pontosAtivos = useLocaisAtivos('CE', pontosTuristicos);

  const categories = ['Todos', 'Lugar Paradísíaco', 'Restaurantes', 'Monumentos'];

  useEffect(() => {
    let result = pontosAtivos;
    if (selectedCategory !== 'Todos') {
      result = result.filter(item => item.categoria === selectedCategory);
    }
    if (searchTerm) {
      result = result.filter(item =>
        item.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.descricao.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredPontos(result);
  }, [searchTerm, selectedCategory, pontosAtivos]);

  return (
    <div className="ce-pontos-page">
      <header className="ce-pontos-header">
        <button
          onClick={() => navigate(-1)}
          className="ce-pontos-button"
          style={{ position: 'absolute', top: '2rem', left: '2rem', backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'white' }}
        >
          ← Voltar
        </button>
        <h1 className="ce-pontos-h1">Tesouros do Ceará</h1>
        <p className="ce-pontos-subheader">Descubra os encantos da Terra da Luz.</p>
      </header>

      <div className="ce-pontos-controls">
        <input
          type="text"
          placeholder="O que você quer descobrir no Ceará?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="ce-pontos-search-bar"
        />
        <div className="ce-pontos-filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`ce-pontos-button ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <main className="ce-pontos-grid">
        {filteredPontos.map(ponto => (
          <div key={ponto.id} className="ce-pontos-card">
            <div className="ce-pontos-card-image-container">
              {ponto.imagem ? <img src={ponto.imagem} alt={ponto.nome} className="ce-pontos-card-image" /> : <div className="ce-pontos-card-image" style={{background:"linear-gradient(135deg,#667eea,#764ba2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"3rem",height:"100%"}}>🗺️</div>}
            </div>
            <div className="ce-pontos-card-content">
              <h2 className="ce-pontos-card-title">{ponto.nome}</h2>
              <p className="ce-pontos-card-category">{ponto.categoria} • {ponto.cidade}</p>
              <p className="ce-pontos-card-description">{ponto.descricao}</p>
              <button className="ce-pontos-button" onClick={() => { if (ponto.bdId != null) navigate(`/local/${ponto.bdId}`); else if (rotas[ponto.id]) navigate(rotas[ponto.id]); }}
                style={{ opacity: ponto.bdId != null || rotas[ponto.id] ? 1 : 0.4, cursor: ponto.bdId != null || rotas[ponto.id] ? 'pointer' : 'not-allowed' }}>
                Saiba mais
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className="ce-pontos-footer">
        <p>&copy; 2025 GADYS. Feito com a energia do Ceará.</p>
      </footer>
    </div>
  );
};

export default CearaPontos;
