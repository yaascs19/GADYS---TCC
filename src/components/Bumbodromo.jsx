import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Bumbodromo.css';
import { useLocalByRota } from '../hooks/useLocalByRota';
import AvaliacoesComentarios from './AvaliacoesComentarios';

const carouselImages = [
  '/images/geral/bum-Am.jpeg',
  '/images/geral/pam.jpg',
];

const galleryImages = [
  { src: '/images/geral/bum-Am.jpeg', alt: 'Bumbódromo de Parintins' },
  { src: '/images/geral/pam.jpg', alt: 'Festival de Parintins' },
  { src: '/images/geral/am-an1.jpg', alt: 'Parintins - Amazonas' },
  { src: '/images/geral/am-an2.jpg', alt: 'Parintins - Amazonas' },
  { src: '/images/geral/am-an3.webp', alt: 'Parintins - Amazonas' },
  { src: '/images/geral/am-an4.jpg', alt: 'Parintins - Amazonas' },
];

const secoes = {
  historia: {
    id: 'historia',
    label: 'A História',
    titulo: 'A Arena do Maior Espetáculo da Amazônia',
    texto: 'O Bumbódromo de Parintins, oficialmente chamado de Centro Cultural e Esportivo Amazonino Mendes, é o palco do maior festival folclórico do Brasil. Inaugurado em 1988, o estádio a céu aberto foi projetado em formato de cabeça de boi e tem capacidade para mais de 35 mil pessoas. Cada junho, a cidade de Parintins — uma ilha no meio do Rio Amazonas — se transforma no epicentro da cultura amazônica.',
    imagem: '/images/geral/am-bun1.avif',
    lista: [
      'Inauguração: 1988, durante o governo Amazonino Mendes.',
      'Capacidade: Mais de 35.000 espectadores por noite.',
      'Formato: Projetado em forma de cabeça de boi, símbolo do festival.',
      'Localização: Ilha de Parintins, no Rio Amazonas — AM.',
    ],
  },
  festival: {
    id: 'festival',
    label: 'O Festival',
    titulo: 'Garantido x Caprichoso: Uma Guerra de Cores',
    texto: 'Durante três noites na última semana de junho, o Bumbódromo se divide ao meio: um lado vermelho e branco do Boi Garantido, o outro azul e branco do Boi Caprichoso. A disputa vai muito além de uma competição — é uma celebração da identidade amazônica, com alegorias monumentais, toadas emocionantes e personagens que contam as lendas da floresta.',
    imagem: '/images/geral/pam.jpg',
    subsecoes: [
      {
        titulo: 'Boi Garantido — O Coração Vermelho',
        texto: 'Fundado em 1913, o Boi Garantido tem o coração como símbolo e o vermelho como cor. Seus brincantes são chamados de "contrários" pelos rivais e "galera do coração" pelos torcedores. O boi é famoso por suas toadas emocionantes e pela Cunhã-Poranga, a mais bela índia do festival.',
      },
      {
        titulo: 'Boi Caprichoso — A Estrela Azul',
        texto: 'Fundado em 1913, o Boi Caprichoso tem a estrela como símbolo e o azul como cor. Conhecido pela criatividade de suas alegorias e pela força de suas toadas, o Caprichoso é o eterno rival do Garantido. Seus torcedores são chamados de "galera da estrela".',
      },
      {
        titulo: 'Os Personagens do Festival',
        texto: 'O espetáculo conta com personagens icônicos: o Pajé (líder espiritual), a Cunhã-Poranga (índia mais bela), o Levantador de Toadas (cantor principal), o Pai Francisco e Mãe Catirina (casal cômico), além de milhares de brincantes em fantasias elaboradas.',
      },
    ],
  },
  visita: {
    id: 'visita',
    label: 'Visite',
    titulo: 'Como Chegar e Viver o Festival',
    texto: 'Parintins fica a cerca de 420 km de Manaus e só é acessível por barco ou avião. O festival acontece na última semana de junho, mas o Bumbódromo pode ser visitado fora do período do festival como ponto turístico.',
    imagem: '/images/geral/am-an1.jpg',
    subsecoes: [
      {
        titulo: 'Como Chegar',
        texto: 'De Manaus, é possível chegar a Parintins de avião (voos regulares, ~1h) ou de barco (viagem de 18 a 24 horas pelo Rio Amazonas). Durante o festival, barcos especiais partem de Manaus com pacotes turísticos completos.',
      },
      {
        titulo: 'Ingressos e Arquibancadas',
        texto: 'Os ingressos são divididos por setor: arquibancada do Garantido (vermelho), arquibancada do Caprichoso (azul) e camarotes neutros. Os preços variam de R$ 200 a R$ 2.000 dependendo do setor e da noite. Recomenda-se comprar com meses de antecedência.',
      },
      {
        titulo: 'Dicas de Viagem',
        texto: 'Vista-se com as cores do boi que você vai torcer — é uma questão de respeito e imersão cultural. Leve protetor solar, repelente e muita água. A cidade fica lotada durante o festival, então reserve hospedagem com bastante antecedência.',
      },
    ],
    recomendacoes: [
      {
        titulo: 'Hospedagem em Parintins',
        itens: [
          { nome: 'Hotel Uiara', nota: 4.3, contato: '(92) 3533-2592', site: 'https://www.booking.com/city/br/parintins.html' },
          { nome: 'Parintins Palace Hotel', nota: 4.1, contato: '(92) 3533-1500', site: 'https://www.booking.com/city/br/parintins.html' },
          { nome: 'Barcos-Hotel (Festival)', nota: 4.6, contato: 'Agências de turismo de Manaus', site: 'https://www.amazonastur.am.gov.br/' },
        ],
      },
    ],
  },
  fotos: { id: 'fotos', label: 'Fotos' },
  avaliacoes: { id: 'avaliacoes', label: 'Avaliações' },
};

const ConteudoAba = ({ secao }) => (
  <section className="bum-section">
    <div className="bum-text-image-split">
      <div className="bum-text">
        <h2>{secao.titulo}</h2>
        <p>{secao.texto}</p>
        {secao.lista && (
          <ul className="bum-facts-list">
            {secao.lista.map((item, i) => (
              <li key={i}><strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>
            ))}
          </ul>
        )}
        {secao.subsecoes && (
          <div className="bum-subsecoes">
            {secao.subsecoes.map((sub, i) => (
              <div key={i} className="bum-subsecao-item">
                <h3>{sub.titulo}</h3>
                <p>{sub.texto}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="bum-image-wrapper">
        <img src={secao.imagem} alt={secao.titulo} className="bum-image" />
        {secao.id === 'historia' && (
          <img src="/images/geral/am-bun2.jpeg" alt="Bumbódromo de Parintins" className="bum-image" style={{ marginTop: '1rem' }} />
        )}
        {secao.id === 'festival' && (
          <img src="/images/geral/am-bun3.jpeg" alt="Festival de Parintins" className="bum-image" style={{ marginTop: '1rem' }} />
        )}
      </div>
    </div>

    {secao.recomendacoes && (
      <div className="bum-recomendacoes-container">
        {secao.recomendacoes.map((rec, i) => (
          <div key={i} className="bum-recomendacao-categoria">
            <h3>{rec.titulo}</h3>
            <div className="bum-recomendacao-cards">
              {rec.itens.map((item, j) => (
                <div key={j} className="bum-recomendacao-card">
                  <div className="bum-card-header">
                    <a href={item.site} target="_blank" rel="noopener noreferrer" className="bum-card-nome">
                      {item.nome}
                    </a>
                    <span className="bum-card-nota">{item.nota} ★</span>
                  </div>
                  <span className="bum-card-contato">{item.contato}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )}
  </section>
);

const Galeria = () => (
  <section className="bum-galeria-container">
    <h2>Fotos</h2>
    <div className="bum-galeria-grid">
      {galleryImages.map((img, i) => (
        <div key={i} className="bum-galeria-item">
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
  </section>
);

const Bumbodromo = () => {
  const [abaAtiva, setAbaAtiva] = useState('historia');
  const [imagemAtivaIndex, setImagemAtivaIndex] = useState(0);
  const navigate = useNavigate();
  const { bdLocal, bdId } = useLocalByRota('/bumbodromo');

  const titulo = bdLocal?.nome || 'Bumbódromo de Parintins';
  const subtitulo = bdLocal?.descricao || 'O palco do maior festival folclórico do Brasil.';
  const headerImgs = bdLocal?.imagemUrl
    ? [bdLocal.imagemUrl.split(',')[0], ...carouselImages.slice(1)]
    : carouselImages;

  useEffect(() => {
    const timer = setTimeout(() => {
      setImagemAtivaIndex((prev) => (prev + 1) % headerImgs.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [imagemAtivaIndex, headerImgs.length]);

  return (
    <div className="bum-container">
      <div style={{ position: 'relative' }}>
        <header className="bum-header">
          {headerImgs.map((img, index) => (
            <img key={img} src={img} alt={titulo}
              className={`bum-header-carousel-image ${index === imagemAtivaIndex ? 'active' : ''}`} />
          ))}
          <div className="bum-header-text">
            <div className="bum-header-badge">
              <span className="bum-badge-garantido">● Garantido</span>
              <span className="bum-badge-caprichoso">● Caprichoso</span>
            </div>
            <h1>{titulo}</h1>
            <p>{subtitulo}</p>
          </div>
        </header>
        <button
          onClick={() => navigate('/destinos-amazonas')}
          style={{
            position: 'absolute', top: '2rem', left: '2rem', zIndex: 10,
            background: 'rgba(255,255,255,0.2)', border: '2px solid white',
            color: 'white', padding: '0.7rem 1.5rem', borderRadius: '50px',
            cursor: 'pointer', fontWeight: '600', fontSize: '0.95rem'
          }}
        >
          ← Voltar
        </button>
      </div>

      <div className="bum-content-wrapper">
        <nav className="bum-nav">
          {Object.keys(secoes).map((key) => (
            <button
              key={key}
              onClick={() => setAbaAtiva(key)}
              className={abaAtiva === key ? 'active' : ''}
            >
              {secoes[key].label}
            </button>
          ))}
        </nav>
        <main className="bum-main">
          {abaAtiva === 'fotos' ? <Galeria /> :
           abaAtiva === 'avaliacoes' ? <AvaliacoesComentarios localId={bdId} /> :
           <ConteudoAba secao={secoes[abaAtiva]} />}
        </main>
      </div>
    </div>
  );
};

export default Bumbodromo;
