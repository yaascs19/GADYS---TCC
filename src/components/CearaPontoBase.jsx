import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CearaPonto.css';
import { useLocalByRota } from '../hooks/useLocalByRota';
import AvaliacoesComentarios from './AvaliacoesComentarios';

const HeaderCarousel = ({ images, titulo, subtitulo, onVoltar, voltarEstilo }) => {
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
        style={{ position: 'absolute', top: '2rem', left: '2rem', zIndex: 10, background: 'rgba(255,255,255,0.2)', border: '2px solid white', color: 'white', padding: '0.7rem 1.5rem', borderRadius: '50px', cursor: 'pointer', fontWeight: '600', fontSize: '0.95rem', ...voltarEstilo }}
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

const ConteudoAba = ({ secao, tema }) => (
  <section className="ce-ponto-section">
    <div className="ce-ponto-split">
      <div className="ce-ponto-text">
        <h2 style={tema.tituloTexto ? { color: tema.tituloTexto } : {}}>{secao.titulo}</h2>
        <p>{secao.texto}</p>
        {secao.lista && (
          <ul className="ce-ponto-facts">
            {secao.lista.map((item, i) => (
              <li key={i} style={{ backgroundColor: tema.card, borderLeftColor: tema.acento }}><strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>
            ))}
          </ul>
        )}
        {secao.subsecoes && (
          <div className="ce-ponto-subsecoes">
            {secao.subsecoes.map((sub, i) => (
              <div key={i} className="ce-ponto-subsecao" style={{ backgroundColor: tema.card, borderLeftColor: tema.acento }}>
            <h3 style={tema.tituloTexto ? { color: tema.tituloTexto } : {}}>{sub.titulo}</h3>
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
            <h3 style={tema.tituloTexto ? { color: tema.tituloTexto } : {}}>{rec.titulo}</h3>
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

const Galeria = ({ images, tema = {} }) => (
  <section className="ce-ponto-galeria">
    <h2 style={tema.tituloTexto ? { color: tema.tituloTexto } : {}}>Fotos</h2>
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
  const [secoes, setSecoes] = useState(config.secoes);
  const [carouselImages, setCarouselImages] = useState(config.carouselImages);
  const navigate = useNavigate();
  const rota = window.location.pathname;
  const { bdLocal, bdId } = useLocalByRota(rota);

  useEffect(() => {
    if (!bdLocal?.informacoesAdicionais) return;
    try {
      const parsed = JSON.parse(bdLocal.informacoesAdicionais);
      if (parsed.secoes) {
        const secoesComImagens = Object.fromEntries(
          Object.entries(parsed.secoes).map(([k, v]) => [
            k,
            { ...v, imagem: config.secoes[k]?.imagem || v.imagem }
          ])
        );
        setSecoes({ ...config.secoes, ...secoesComImagens });
      }
    } catch { /* usa config estático */ }
  }, [bdLocal]);

  const titulo = bdLocal?.nome || config.titulo;
  const subtitulo = bdLocal?.descricao || config.subtitulo;

  const tema = config.tema || {};

  return (
    <div className="ce-ponto-container" style={{ backgroundColor: tema.bg, color: tema.texto }}>
      <HeaderCarousel images={carouselImages} titulo={titulo} subtitulo={subtitulo} onVoltar={() => navigate(-1)} voltarEstilo={config.voltarEstilo} />
      <div className="ce-ponto-content-wrapper">
        <nav className="ce-ponto-nav">
          {Object.keys(secoes).map((key) => (
            <button key={key} onClick={() => setAbaAtiva(key)}
              className={abaAtiva === key ? 'active' : ''}
              style={tema.navTexto ? { color: abaAtiva === key ? tema.navAtivo : tema.navTexto, borderBottomColor: abaAtiva === key ? tema.navBorda : 'transparent' } : {}}>
              {secoes[key].label}
            </button>
          ))}
          <button onClick={() => setAbaAtiva('avaliacoes')}
            className={abaAtiva === 'avaliacoes' ? 'active' : ''}
            style={tema.navTexto ? { color: abaAtiva === 'avaliacoes' ? tema.navAtivo : tema.navTexto, borderBottomColor: abaAtiva === 'avaliacoes' ? tema.navBorda : 'transparent' } : {}}>
            Avaliações
          </button>
        </nav>
        <main className="ce-ponto-main">
          {abaAtiva === 'fotos'
            ? <Galeria images={config.galeriaImages} tema={tema} />
            : abaAtiva === 'avaliacoes'
            ? <AvaliacoesComentarios localId={bdId} />
            : <ConteudoAba secao={secoes[abaAtiva]} tema={tema} />
          }
        </main>
      </div>
      <footer className="ce-ponto-footer" style={tema.footerBg ? { background: tema.footerBg, color: tema.footerTexto } : {}}>
        <p>GADYS © 2025 — {titulo}</p>
      </footer>
    </div>
  );
};

export default CearaPontoBase;
