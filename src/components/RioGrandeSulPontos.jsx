import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CearaPontos.css';
import { useLocaisAtivos } from '../hooks/useLocaisAtivos';

const pontosTuristicos = [
  {
    id: 'gramado',
    nome: 'Gramado',
    cidade: 'Gramado - RS',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/Gramado.webp',
    descricao: 'A cidade mais encantadora do Brasil: arquitetura europeia, chocolate artesanal premiado, o Natal Luz e temperaturas negativas na Serra Gaúcha a 825 m de altitude.',
  },
  {
    id: 'canion-itaimbezinho',
    nome: 'Cânion Itaimbezinho',
    cidade: 'Cambará do Sul - RS',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/Cânion Itaimbezinho.jpg',
    descricao: 'Um dos maiores cânions do mundo, com paredes de arenito de até 720 m de altura e 5,8 km de extensão no Parque Nacional dos Aparados da Serra.',
  },
  {
    id: 'bento-goncalves',
    nome: 'Bento Gonçalves',
    cidade: 'Bento Gonçalves - RS',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/Bento Gonçalves.jpg',
    descricao: 'Capital brasileira do vinho, Bento Gonçalves encanta com vinhedos centenários, adegas premiadas, a Maria Fumaça e a culinária italiana herdada dos imigrantes.',
  },
  {
    id: 'porto-alegre',
    nome: 'Porto Alegre',
    cidade: 'Porto Alegre - RS',
    categoria: 'Monumentos',
    imagem: '/images/geral/Porto Alegre.webp',
    descricao: 'Capital gaúcha às margens do Guaíba, com o pôr do sol mais bonito do Brasil, o Mercado Público histórico, o Bairro Moinhos de Vento e uma cena cultural vibrante.',
  },
  {
    id: 'torres',
    nome: 'Torres',
    cidade: 'Torres - RS',
    categoria: 'Lugar Paradísíaco',
    imagem: '/images/geral/Torres.jpg',
    descricao: 'Praias com falésias basálticas únicas no Brasil, grutas, ilhas e o Parque Estadual de Torres formam um dos litorâis mais dramáticos e belos do sul do país.',
  },
  {
    id: 'sao-miguel-das-missoes',
    nome: 'São Miguel das Missões',
    cidade: 'São Miguel das Missões - RS',
    categoria: 'Monumentos',
    imagem: '/images/geral/São Miguel das Missões.jpg',
    descricao: 'Ruínas jesuíticas do século XVII e Patrimônio Mundial da UNESCO. O espetáculo de som e luz noturno sobre as ruínas é uma das experiências mais marcantes do Brasil.',
  },
];

const rotas = {
  'gramado': '/rs/gramado',
  'canion-itaimbezinho': '/rs/canion-itaimbezinho',
  'bento-goncalves': '/rs/bento-goncalves',
  'porto-alegre': '/rs/porto-alegre',
  'torres': '/rs/torres',
  'sao-miguel-das-missoes': '/rs/sao-miguel-das-missoes',
};

const RioGrandeSulPontos = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredPontos, setFilteredPontos] = useState([]);
  const pontosAtivos = useLocaisAtivos('RS', pontosTuristicos);

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
    <div
      className="ce-pontos-page"
      style={{ background: 'linear-gradient(160deg, #fdf0f0 0%, #f5c6c6 100%)', color: '#4a0000' }}
    >
      <header
        className="ce-pontos-header"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/geral/rs1.jpg')" }}
      >
        <button
          onClick={() => navigate(-1)}
          className="ce-pontos-button"
          style={{ position: 'absolute', top: '2rem', left: '2rem', backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'white' }}
        >
          ← Voltar
        </button>
        <h1 className="ce-pontos-h1">Tesouros do Rio Grande do Sul</h1>
        <p className="ce-pontos-subheader">Descubra a alma gaúcha em cada destino.</p>
      </header>

      <div className="ce-pontos-controls" style={{ background: 'linear-gradient(135deg, #8b0000, #6d0000)' }}>
        <input
          type="text"
          placeholder="O que você quer descobrir no Rio Grande do Sul?"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="ce-pontos-search-bar"
        />
        <div className="ce-pontos-filter-buttons">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`ce-pontos-button ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <main className="ce-pontos-grid">
        {filteredPontos.map(ponto => (
          <div
            key={ponto.id}
            className="ce-pontos-card"
            style={{ borderImage: 'linear-gradient(90deg, #8b0000, #c0392b) 1' }}
          >
            <div className="ce-pontos-card-image-container">
              {ponto.imagem
                ? <img src={ponto.imagem} alt={ponto.nome} className="ce-pontos-card-image" />
                : <div className="ce-pontos-card-image" style={{ background: 'linear-gradient(135deg, #8b0000, #c0392b)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', height: '100%' }}>🗺️</div>
              }
            </div>
            <div className="ce-pontos-card-content">
              <h2
                className="ce-pontos-card-title"
                style={{ background: 'linear-gradient(90deg, #8b0000, #c0392b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
              >
                {ponto.nome}
              </h2>
              <p className="ce-pontos-card-category" style={{ color: '#8b0000' }}>{ponto.categoria} • {ponto.cidade}</p>
              <p className="ce-pontos-card-description" style={{ color: '#4a0000' }}>{ponto.descricao}</p>
              <button
                className="ce-pontos-button"
                onClick={() => {
                  if (ponto.id !== 'gramado') return;
                  if (ponto.bdId != null) navigate(`/local/${ponto.bdId}`);
                  else if (rotas[ponto.id]) navigate(rotas[ponto.id]);
                }}
                style={{
                  background: 'linear-gradient(135deg, #8b0000, #c0392b)',
                  border: 'none',
                  opacity: ponto.id === 'gramado' ? 1 : 0.4,
                  cursor: ponto.id === 'gramado' ? 'pointer' : 'not-allowed',
                }}
              >
                Saiba mais
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className="ce-pontos-footer" style={{ background: 'linear-gradient(135deg, #6d0000, #4a0000)' }}>
        <p>&copy; 2025 GADYS. Feito com o calor do churrasco e o frio do chimarrão.</p>
      </footer>
    </div>
  );
};

export default RioGrandeSulPontos;
