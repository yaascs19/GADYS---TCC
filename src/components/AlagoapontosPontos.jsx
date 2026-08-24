import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AlagoapontosPontos.css';
import { useLocaisAtivos } from '../hooks/useLocaisAtivos';

const pontosTuristicos = [
  {
    id: 'maragogi',
    nome: 'Maragogi',
    cidade: 'Maragogi - AL',
    categoria: 'Lugar Paradísíaco',
    descricao: 'Conhecida como o "Caribe Brasileiro", Maragogi encanta com suas piscinas naturais de águas cristalinas e esverdeadas, recifes de corais e praias de areia branca que figuram entre as mais belas do Brasil.',
    imagem: '/images/geral/al-maragogi.jpg',
  },
  {
    id: 'pajucara',
    nome: 'Praia de Pajuçara',
    cidade: 'Maceió - AL',
    categoria: 'Lugar Paradísíaco',
    descricao: 'A praia mais famosa de Maceió, com suas piscinas naturais formadas pelos recifes de corais a 2 km da orla. Jangadas levam turistas até as piscinas, onde é possível mergulhar em águas mornas e transparentes.',
    imagem: '/images/geral/al-pajucara.jpg',
  },
  {
    id: 'lagoa-mundau',
    nome: 'Lagoa Mundaú',
    cidade: 'Maceió - AL',
    categoria: 'Lugar Paradísíaco',
    descricao: 'Uma das maiores lagoas do Nordeste, com 27 km² de extensão. Seus canais e ilhotas formam um labirinto natural onde passeios de barco revelam paisagens únicas, restaurantes flutuantes e o pôr do sol mais bonito de Maceió.',
    imagem: '/images/geral/al-mundau.jpg',
  },
  {
    id: 'penedo',
    nome: 'Penedo',
    cidade: 'Penedo - AL',
    categoria: 'Monumentos',
    descricao: 'A cidade mais antiga de Alagoas, fundada em 1637, guarda um dos conjuntos arquitetônicos coloniais mais preservados do Nordeste. Igrejas barrocas, casarões históricos e a orla do Rio São Francisco compõem um cenário de rara beleza.',
    imagem: '/images/geral/al-penedo.jpg',
  },
  {
    id: 'sao-miguel-milagres',
    nome: 'São Miguel dos Milagres',
    cidade: 'São Miguel dos Milagres - AL',
    categoria: 'Lugar Paradísíaco',
    descricao: 'Um dos destinos mais exclusivos do Brasil, com praias praticamente desertas, piscinas naturais rasas e águas de cor turquesa. Parte da Costa dos Corais, é refúgio de peixe-boi e tartarugas marinhas.',
    imagem: '/images/geral/al-sao-miguel.jpg',
  },
  {
    id: 'barra-sao-miguel',
    nome: 'Barra de São Miguel',
    cidade: 'Barra de São Miguel - AL',
    categoria: 'Lugar Paradísíaco',
    descricao: 'Onde o Rio São Miguel encontra o mar, formando uma barra de areia branca com águas calmas e mornas. Ideal para famílias, com piscinas naturais rasas e uma vila charmosa com frutos do mar frescos.',
    imagem: '/images/geral/al-barra.jpg',
  },
  {
    id: 'quilombo-palmares',
    nome: 'Serra da Barriga',
    cidade: 'União dos Palmares - AL',
    categoria: 'Costume Cultural',
    descricao: 'Palco do maior quilombo das Américas, o Quilombo dos Palmares, liderado por Zumbi. A Serra da Barriga é hoje Patrimônio Histórico Nacional e símbolo da resistência negra, com trilhas e um museu a céu aberto.',
    imagem: '/images/geral/al-palmares.jpg',
  },
  {
    id: 'sururu-maceio',
    nome: 'Mercado do Artesanato',
    cidade: 'Maceió - AL',
    categoria: 'Restaurantes',
    descricao: 'O coração gastronômico e cultural de Maceió, onde o sururu de capote, a moqueca de sururu e o arroz com leite de coco são servidos em barracas típicas. Uma experiência autêntica da culinária alagoana à beira da Lagoa Mundaú.',
    imagem: '/images/geral/al-mercado.jpg',
  },
];

const rotas = {};

const AlagoapontosPontos = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredPontos, setFilteredPontos] = useState([]);
  const pontosAtivos = useLocaisAtivos('AL', pontosTuristicos);

  const categories = ['Todos', 'Lugar Paradísíaco', 'Monumentos', 'Costume Cultural', 'Restaurantes'];

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
    <div className="al-pontos-page">
      <header className="al-pontos-header">
        <button
          onClick={() => navigate('/alagoas')}
          className="al-pontos-button"
          style={{ position: 'absolute', top: '2rem', left: '2rem', backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'white' }}
        >
          ← Voltar
        </button>
        <h1 className="al-pontos-h1">Tesouros de Alagoas</h1>
        <p className="al-pontos-subheader">Descubra os encantos do Paraíso das Águas.</p>
      </header>

      <div className="al-pontos-controls">
        <input
          type="text"
          placeholder="O que você quer descobrir em Alagoas?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="al-pontos-search-bar"
        />
        <div className="al-pontos-filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`al-pontos-button ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <main className="al-pontos-grid">
        {filteredPontos.map(ponto => (
          <div key={ponto.id} className="al-pontos-card">
            <div className="al-pontos-card-image-container">
              {ponto.imagem
                ? <img src={ponto.imagem} alt={ponto.nome} className="al-pontos-card-image" />
                : <div className="al-pontos-card-image" style={{ background: 'linear-gradient(135deg,#006994,#00bcd4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', height: '100%' }}>🌊</div>
              }
            </div>
            <div className="al-pontos-card-content">
              <h2 className="al-pontos-card-title">{ponto.nome}</h2>
              <p className="al-pontos-card-category">{ponto.categoria} • {ponto.cidade}</p>
              <p className="al-pontos-card-description">{ponto.descricao}</p>
              <button
                className="al-pontos-button"
                onClick={() => { if (ponto.bdId != null) navigate(`/local/${ponto.bdId}`); else if (rotas[ponto.id]) navigate(rotas[ponto.id]); }}
                style={{ opacity: ponto.bdId != null || rotas[ponto.id] ? 1 : 0.4, cursor: ponto.bdId != null || rotas[ponto.id] ? 'pointer' : 'not-allowed' }}
              >
                Saiba mais
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className="al-pontos-footer">
        <p>&copy; 2025 GADYS. Feito com a energia de Alagoas.</p>
      </footer>
    </div>
  );
};

export default AlagoapontosPontos;
