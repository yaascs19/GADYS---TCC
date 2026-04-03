import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SudestePontoDetalhe.css';

const HeaderCarousel = ({ images, titulo, subtitulo, onVoltar }) => {
  const [ativo, setAtivo] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setAtivo(p => (p + 1) % images.length), 5000);
    return () => clearTimeout(t);
  }, [ativo, images.length]);

  return (
    <header className="sudeste-ponto-header">
      {images.map((img, i) => (
        <img key={img} src={img} alt={titulo} className={`sudeste-ponto-header-img ${i === ativo ? 'active' : ''}`} />
      ))}
      <button onClick={onVoltar} style={{ position: 'absolute', top: '2rem', left: '2rem', zIndex: 10, background: 'rgba(255,255,255,0.2)', border: '2px solid white', color: 'white', padding: '0.7rem 1.5rem', borderRadius: '50px', cursor: 'pointer', fontWeight: '600', fontSize: '0.95rem' }}>
        ← Voltar
      </button>
      <div className="sudeste-ponto-header-text">
        <h1>{titulo}</h1>
        <p>{subtitulo}</p>
      </div>
    </header>
  );
};

const ConteudoAba = ({ secao }) => (
  <section className="sudeste-ponto-section">
    <div className="sudeste-ponto-split">
      <div className="sudeste-ponto-text">
        <h2>{secao.titulo}</h2>
        <p>{secao.texto}</p>
        {secao.lista && (
          <ul className="sudeste-ponto-facts">
            {secao.lista.map((item, i) => (
              <li key={i}><strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>
            ))}
          </ul>
        )}
        {secao.subsecoes && (
          <div className="sudeste-ponto-subsecoes">
            {secao.subsecoes.map((sub, i) => (
              <div key={i} className="sudeste-ponto-subsecao">
                <h3>{sub.titulo}</h3>
                <p>{sub.texto}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="sudeste-ponto-img-wrapper">
        <img src={secao.imagem} alt={secao.alt} className="sudeste-ponto-img" />
      </div>
    </div>
    {secao.recomendacoes && (
      <div className="sudeste-ponto-rec-container">
        {secao.recomendacoes.map((rec, i) => (
          <div key={i} className="sudeste-ponto-rec-categoria">
            <h3>{rec.titulo}</h3>
            <div className="sudeste-ponto-rec-cards">
              {rec.itens.map((item, j) => (
                <div key={j} className="sudeste-ponto-rec-card">
                  <div className="sudeste-ponto-rec-card-header">
                    <a href={item.site} target="_blank" rel="noopener noreferrer" className="sudeste-ponto-rec-nome">{item.nome}</a>
                    <span className="sudeste-ponto-rec-nota">{item.nota} ★</span>
                  </div>
                  <span className="sudeste-ponto-rec-contato">{item.contato}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )}
  </section>
);

const Galeria = ({ images }) => (
  <section className="sudeste-ponto-galeria">
    <h2>Fotos</h2>
    <div className="sudeste-ponto-galeria-grid">
      {images.map((img, i) => (
        <div key={i} className="sudeste-ponto-galeria-item">
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
  </section>
);

const SudestePontoDetalheBase = ({ config }) => {
  const [abaAtiva, setAbaAtiva] = useState(Object.keys(config.secoes)[0]);
  const navigate = useNavigate();

  return (
    <div className="sudeste-ponto-container">
      <HeaderCarousel images={config.carouselImages} titulo={config.titulo} subtitulo={config.subtitulo} onVoltar={() => navigate(config.voltarRota)} />
      <div className="sudeste-ponto-content-wrapper">
        <nav className="sudeste-ponto-nav">
          {Object.keys(config.secoes).map(key => (
            <button key={key} onClick={() => setAbaAtiva(key)} className={abaAtiva === key ? 'active' : ''}>
              {config.secoes[key].label}
            </button>
          ))}
        </nav>
        <main className="sudeste-ponto-main">
          {abaAtiva === 'fotos' ? <Galeria images={config.galeriaImages} /> : <ConteudoAba secao={config.secoes[abaAtiva]} />}
        </main>
      </div>
      <footer className="sudeste-ponto-footer">
        <p>GADYS © 2025 — {config.titulo}</p>
      </footer>
    </div>
  );
};

export default SudestePontoDetalheBase;
