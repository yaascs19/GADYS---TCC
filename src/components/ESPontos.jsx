import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './sudeste/SudestePontos.css';

const pontos = [
  { id: 'pedra-azul-es', nome: 'Pedra Azul', cidade: 'Domingos Martins - ES', categoria: 'Lugar Paradísíaco', descricao: 'Uma das formações rochosas mais belas do Brasil, com 1.822 metros de altitude e trilhas que revelam vistas deslumbrantes da Serra Capixaba.', imagem: '/images/natureza/veadeiros.jpeg', rota: '/es/pedra-azul' },
  { id: 'guarapari', nome: 'Guarapari', cidade: 'Guarapari - ES', categoria: 'Lugar Paradísíaco', descricao: 'A "Cidade Saúde" do Brasil, famosa pelas areias monazíticas com propriedades terapêuticas e praias de águas mornas e cristalinas.', imagem: '/images/geral/praiaEx.jpg', rota: '/es/guarapari' },
  { id: 'convento-vitoria', nome: 'Convento da Penha', cidade: 'Vila Velha - ES', categoria: 'Monumentos', descricao: 'Um dos santuários mais antigos do Brasil, construído no século XVI sobre um penhasco de 154 metros, com vista panorâmica da Grande Vitória.', imagem: '/images/monumentos/independencia.webp', rota: null },
  { id: 'regencia', nome: 'Regência Augusta', cidade: 'Linhares - ES', categoria: 'Lugar Paradísíaco', descricao: 'Vila de pescadores na foz do Rio Doce, famosa pela desova de tartarugas marinhas e pelas praias selvagens preservadas.', imagem: '/images/natureza/bonito.jpeg', rota: null },
  { id: 'domingos-martins', nome: 'Domingos Martins', cidade: 'Domingos Martins - ES', categoria: 'Costume Cultural', descricao: 'Cidade serrana com forte influência alemã e italiana, famosa pelo Oktoberfest capixaba, pela arquitetura europeia e pelos vinhos artesanais da região.', imagem: '/images/natureza/veadeiros.jpeg', rota: null },
  { id: 'moqueca-capixaba', nome: 'Restaurante Lareira Portuguesa', cidade: 'Vitória - ES', categoria: 'Restaurantes', descricao: 'Um dos restaurantes mais tradicionais de Vitória, especializado na autêntica moqueca capixaba feita em panela de barro, sem leite de coco, com peixe fresco do litoral.', imagem: '/images/gastronomia/moqueca.jpeg', rota: null },
  { id: 'santa-teresa', nome: 'Santa Teresa', cidade: 'Santa Teresa - ES', categoria: 'Costume Cultural', descricao: 'Cidade serrana com forte herança italiana, famosa pelo Museu de Biologia Mello Leitão, pelas vinícolas artesanais e pelo Festival de Inverno que atrai artistas de todo o Brasil.', imagem: '/images/natureza/chapada.jpeg', rota: null },
  { id: 'anchieta', nome: 'Anchieta', cidade: 'Anchieta - ES', categoria: 'Monumentos', descricao: 'Cidade histórica com o Santuário Nacional de São José de Anchieta, construído no século XVI pelo padre jesuíta José de Anchieta, padroeiro do Brasil.', imagem: '/images/monumentos/pala.jpeg', rota: null },
];

const CATEGORIES = ['Todos', 'Lugar Paradísíaco', 'Restaurantes', 'Costume Cultural', 'Monumentos'];

const ESPontos = () => {
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
      <header className="sudeste-pontos-header" style={{ background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/geral/praiaEx.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <button onClick={() => navigate('/espirito-santo')} className="sudeste-pontos-button"
          style={{ position: 'absolute', top: '2rem', left: '2rem', backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'white' }}>
          ← Voltar
        </button>
        <h1 className="sudeste-pontos-h1">Tesouros do Espírito Santo</h1>
        <p className="sudeste-pontos-subheader">Descubra onde o mar encontra a montanha.</p>
      </header>

      <div className="sudeste-pontos-controls">
        <input type="text" placeholder="O que você quer descobrir no Espírito Santo?" value={searchTerm}
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
        <p>GADYS © 2025 — Espírito Santo</p>
      </footer>
    </div>
  );
};

export default ESPontos;
