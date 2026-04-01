import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CearaPonto.css';

const HeaderCarousel = ({ images, titulo, subtitulo, onVoltar }) => {
  const [ativo, setAtivo] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setAtivo((p) => (p + 1) % images.length), 5000);
    return () => clearTimeout(t);
  }, [ativo, images.length]);

  return (
    <header className="ce-ponto-header">
      {images.map((img, i) => (
        <img key={img} src={img} alt={titulo} className={`ce-ponto-header-img ${i === ativo ? 'active' : ''}`} />
      ))}
      <button
        onClick={onVoltar}
        className="ce-pontos-button"
        style={{ position: 'absolute', top: '2rem', left: '2rem', backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'white', zIndex: 4 }}
      >
        ← Voltar
      </button>
      <div className="ce-ponto-header-text">
        <h1>{titulo}</h1>
        <p>{subtitulo}</p>
      </div>
    </header>
  );
};

const ConteudoAba = ({ secao }) => (
  <section className="ce-ponto-section">
    <div className="ce-ponto-split">
      <div className="ce-ponto-text">
        <h2>{secao.titulo}</h2>
        <p>{secao.texto}</p>
        {secao.lista && (
          <ul className="ce-ponto-facts">
            {secao.lista.map((item, i) => (
              <li key={i}><strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>
            ))}
          </ul>
        )}
        {secao.subsecoes && (
          <div className="ce-ponto-subsecoes">
            {secao.subsecoes.map((sub, i) => (
              <div key={i} className="ce-ponto-subsecao">
                <h3>{sub.titulo}</h3>
                <p>{sub.texto}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="ce-ponto-img-wrapper">
        <img src={secao.imagem} alt={secao.alt} className="ce-ponto-img" />
      </div>
    </div>

    {secao.recomendacoes && (
      <div className="ce-ponto-rec-container">
        {secao.recomendacoes.map((rec, i) => (
          <div key={i} className="ce-ponto-rec-categoria">
            <h3>{rec.titulo}</h3>
            <div className="ce-ponto-rec-cards">
              {rec.itens.map((item, j) => (
                <div key={j} className="ce-ponto-rec-card">
                  <div className="ce-ponto-rec-card-header">
                    <a href={item.site} target="_blank" rel="noopener noreferrer" className="ce-ponto-rec-nome">{item.nome}</a>
                    <span className="ce-ponto-rec-nota">{item.nota} ★</span>
                  </div>
                  <span className="ce-ponto-rec-contato">{item.contato}</span>
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
  <section className="ce-ponto-galeria">
    <h2>Fotos</h2>
    <div className="ce-ponto-galeria-grid">
      {images.map((img, i) => (
        <div key={i} className="ce-ponto-galeria-item">
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
  </section>
);

const CearaPontoBase = ({ config }) => {
  const [abaAtiva, setAbaAtiva] = useState(Object.keys(config.secoes)[0]);
  const navigate = useNavigate();

  return (
    <div className="ce-ponto-container">
      <HeaderCarousel images={config.carouselImages} titulo={config.titulo} subtitulo={config.subtitulo} onVoltar={() => navigate('/ceara-pontos')} />
      <div className="ce-ponto-content-wrapper">
        <nav className="ce-ponto-nav">
          {Object.keys(config.secoes).map((key) => (
            <button key={key} onClick={() => setAbaAtiva(key)} className={abaAtiva === key ? 'active' : ''}>
              {config.secoes[key].label}
            </button>
          ))}
        </nav>
        <main className="ce-ponto-main">
          {abaAtiva === 'fotos'
            ? <Galeria images={config.galeriaImages} />
            : <ConteudoAba secao={config.secoes[abaAtiva]} />
          }
        </main>
      </div>
      <footer className="ce-ponto-footer">
        <p>GADYS © 2025 — {config.titulo}</p>
      </footer>
    </div>
  );
};

export default CearaPontoBase;
