import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './sudeste/SudestePontos.css';
import { useLocaisAtivos } from '../hooks/useLocaisAtivos';
import { useCategorias } from '../hooks/useCategorias';

const pontos = [
  { id: 'ouro-preto', nome: 'Ouro Preto', cidade: 'Ouro Preto - MG', categoria: 'Monumentos', descricao: 'Patrimônio Mundial da UNESCO, a cidade mais bem preservada do barroco brasileiro, com igrejas douradas, museus e a história da Inconfidência Mineira.', imagem: '/images/geral/ouro preto1.jpg', rota: '/mg/ouro-preto' },
  { id: 'inhotim', nome: 'Instituto Inhotim', cidade: 'Brumadinho - MG', categoria: 'Monumentos', descricao: 'O maior museu de arte contemporânea a céu aberto do mundo, com obras de artistas internacionais integradas a um jardim botânico de 140 hectares.', imagem: '/images/geral/Instituto Inhotim.jpg', rota: null },
  { id: 'tiradentes', nome: 'Tiradentes', cidade: 'Tiradentes - MG', categoria: 'Monumentos', descricao: 'Cidade colonial perfeitamente preservada, com casarões do século XVIII, igrejas barrocas e um charme histórico que transporta os visitantes ao período colonial.', imagem: '/images/geral/Tiradentes.jpg', rota: null },
  { id: 'diamantina', nome: 'Diamantina', cidade: 'Diamantina - MG', categoria: 'Monumentos', descricao: 'Patrimônio Mundial da UNESCO e cidade natal de Juscelino Kubitschek, com arquitetura colonial única e a tradição das serestas que encantam as noites da cidade.', imagem: '/images/geral/Diamantina.webp', rota: null },
  { id: 'pedra-azul-mg', nome: 'Serra do Cipó', cidade: 'Santana do Riacho - MG', categoria: 'Lugar Paradísíaco', descricao: 'Parque Nacional com cachoeiras, trilhas e campos rupestres a 100 km de BH. A Cachoeira da Farofa e o Cânion das Bandeirinhas são os pontos mais visitados.', imagem: '/images/geral/Serra do Cipó.jpg', rota: null },
  { id: 'restaurante-mineiro', nome: 'Mercado Central de Belo Horizonte', cidade: 'Belo Horizonte - MG', categoria: 'Restaurantes', descricao: 'Um dos maiores mercados cobertos do Brasil com mais de 400 lojas, queijos artesanais, cachaças, pão de queijo e a autêntica culinária mineira desde 1929.', imagem: '/images/geral/Mercado Central de Belo Horizonte.jpg', rota: null },
  { id: 'congonhas', nome: 'Santuário do Bom Jesus de Matosinhos', cidade: 'Congonhas - MG', categoria: 'Monumentos', descricao: 'Patrimônio Mundial da UNESCO com os famosos Profetas de Aleijadinho, esculturas em pedra-sabão consideradas a obra-prima do barroco nas Américas.', imagem: '/images/geral/Santuário do Bom Jesus de Matosinhos.jpg', rota: null },
];

const CATEGORIES = ['Todos', 'Lugar Paradísíaco', 'Restaurantes', 'Monumentos'];

const MGPontos = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredPontos, setFilteredPontos] = useState([]);
  const pontosAtivos = useLocaisAtivos('MG', pontos);
  const categorias = useCategorias('MG');

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
      <header className="sudeste-pontos-header" style={{ background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/geral/mg.webp')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <button onClick={() => navigate(-1)} className="sudeste-pontos-button"
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
          {(categorias ?? []).map(cat => (
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
              {ponto.imagem ? <img src={ponto.imagem} alt={ponto.nome} className="sudeste-pontos-card-image" /> : <div className="sudeste-pontos-card-image" style={{background:"linear-gradient(135deg,#667eea,#764ba2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"3rem",height:"100%"}}>🗺️</div>}
            </div>
            <div className="sudeste-pontos-card-content">
              <h2 className="sudeste-pontos-card-title">{ponto.nome}</h2>
              <p className="sudeste-pontos-card-category">{ponto.categoria} • {ponto.cidade}</p>
              <p className="sudeste-pontos-card-description">{ponto.descricao}</p>
              <button className="sudeste-pontos-saibamais"
                onClick={() => { if (ponto.bdId != null) navigate(`/local/${ponto.bdId}`); else if (ponto.rota) navigate(ponto.rota); }}
                style={{ opacity: ponto.bdId != null || ponto.rota ? 1 : 0.4, cursor: ponto.bdId != null || ponto.rota ? 'pointer' : 'not-allowed' }}>
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
