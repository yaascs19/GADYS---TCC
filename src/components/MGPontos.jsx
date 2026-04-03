import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './sudeste/SudestePontos.css';

const pontos = [
  { id: 'ouro-preto', nome: 'Ouro Preto', cidade: 'Ouro Preto - MG', categoria: 'Monumentos', descricao: 'Patrimônio Mundial da UNESCO, a cidade mais bem preservada do barroco brasileiro, com igrejas douradas, museus e a história da Inconfidência Mineira.', imagem: '/images/monumentos/ouro.jpeg', rota: '/mg/ouro-preto' },
  { id: 'inhotim', nome: 'Instituto Inhotim', cidade: 'Brumadinho - MG', categoria: 'Costume Cultural', descricao: 'O maior museu de arte contemporânea a céu aberto do mundo, com obras de artistas internacionais integradas a um jardim botânico de 140 hectares.', imagem: '/images/monumentos/independencia.webp', rota: '/mg/inhotim' },
  { id: 'tiradentes', nome: 'Tiradentes', cidade: 'Tiradentes - MG', categoria: 'Monumentos', descricao: 'Cidade colonial perfeitamente preservada, com casarões do século XVIII, igrejas barrocas e um charme histórico que transporta os visitantes ao período colonial.', imagem: '/images/monumentos/pala.jpeg', rota: null },
  { id: 'diamantina', nome: 'Diamantina', cidade: 'Diamantina - MG', categoria: 'Monumentos', descricao: 'Patrimônio Mundial da UNESCO e cidade natal de Juscelino Kubitschek, com arquitetura colonial única e a tradição das serestas que encantam as noites da cidade.', imagem: '/images/monumentos/ouro.jpeg', rota: null },
  { id: 'pedra-azul-mg', nome: 'Parque Estadual da Pedra Azul', cidade: 'Domingos Martins - MG', categoria: 'Lugar Paradísíaco', descricao: 'Uma formação rochosa de granito de 1.822 metros que muda de cor ao longo do dia, cercada por Mata Atlântica e trilhas ecológicas deslumbrantes.', imagem: '/images/natureza/chapada.jpeg', rota: null },
  { id: 'restaurante-mineiro', nome: 'Restaurante Xapuri', cidade: 'Belo Horizonte - MG', categoria: 'Restaurantes', descricao: 'Um dos restaurantes mais tradicionais de BH, famoso pela autêntica culinária mineira: frango com quiabo, feijão tropeiro, tutu de feijão e pão de queijo fresquinho.', imagem: '/images/gastronomia/feijoada.jpeg', rota: null },
  { id: 'congonhas', nome: 'Santuário do Bom Jesus de Matosinhos', cidade: 'Congonhas - MG', categoria: 'Monumentos', descricao: 'Patrimônio Mundial da UNESCO com os famosos Profetas de Aleijadinho, esculturas em pedra-sabão consideradas a obra-prima do barroco nas Américas.', imagem: '/images/monumentos/independencia.webp', rota: null },
  { id: 'carnaval-bh', nome: 'Carnaval de Belo Horizonte', cidade: 'Belo Horizonte - MG', categoria: 'Costume Cultural', descricao: 'Um dos carnavais mais animados do Brasil, com blocos de rua que tomam a capital mineira. O Bloco da Saudade e o Então Brilha são alguns dos mais tradicionais.', imagem: '/images/cultura/carnaval.jpeg', rota: null },
];

const CATEGORIES = ['Todos', 'Lugar Paradísíaco', 'Restaurantes', 'Costume Cultural', 'Monumentos'];

const MGPontos = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredPontos, setFilteredPontos] = useState([]);

  useEffect(() => {
    let result = pontos;
    if (selectedCategory !== 'Todos') result = result.filter(p => p.categoria === selectedCategory);
    if (searchTerm) result = result.filter(p =>
      p.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.descricao.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPontos([]);
    setTimeout(() => setFilteredPontos(result), 50);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="sudeste-pontos-page">
      <header className="sudeste-pontos-header" style={{ background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/monumentos/ouro.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <button onClick={() => navigate('/minas-gerais')} className="sudeste-pontos-button"
          style={{ position: 'absolute', top: '2rem', left: '2rem', backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'white' }}>
          ← Voltar
        </button>
        <h1 className="sudeste-pontos-h1">Tesouros de Minas Gerais</h1>
        <p className="sudeste-pontos-subheader">Descubra o coração histórico e cultural do Brasil.</p>
      </header>

      <div className="sudeste-pontos-controls">
        <input type="text" placeholder="O que você quer descobrir em Minas?" value={searchTerm}
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
                onClick={() => ponto.rota ? navigate(ponto.rota) : null}
                style={{ opacity: ponto.rota ? 1 : 0.4, cursor: ponto.rota ? 'pointer' : 'not-allowed' }}>
                Saiba mais
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className="sudeste-pontos-footer">
        <p>GADYS © 2025 — Minas Gerais</p>
      </footer>
    </div>
  );
};

export default MGPontos;
