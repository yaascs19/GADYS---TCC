import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ArquipelagoAnavilhanas.css';

const carouselImages = [
  '/images/geral/Ana-Am.jpg',
  '/images/natureza/anavilhas.jpeg',
];

const galleryImages = [
  { src: '/images/geral/Ana-Am.jpg', alt: 'Arquipélago de Anavilhanas' },
  { src: '/images/natureza/anavilhas.jpeg', alt: 'Arquipélago de Anavilhanas' },
];

const secoes = {
  sobre: {
    id: 'sobre',
    label: 'Sobre',
    titulo: 'O Maior Arquipélago Fluvial do Mundo',
    texto: 'O Arquipélago de Anavilhanas é um dos maiores arquipélagos fluviais do mundo, formado por mais de 400 ilhas, lagos e igarapés no Rio Negro, a cerca de 60 km de Manaus. Declarado Parque Nacional em 2008, o arquipélago é um santuário de biodiversidade amazônica, com espécies raras de peixes, aves, mamíferos e répteis que habitam seus ecossistemas únicos.',
    imagem: '/images/geral/Ana-Am.jpg',
    alt: 'Vista aérea do Arquipélago de Anavilhanas',
    lista: [
      'Localização: Rio Negro, a 60 km de Manaus.',
      'Área: Mais de 350.000 hectares de floresta e rios.',
      'Destaque: Mais de 400 ilhas, lagos e igarapés.',
    ],
  },
  biodiversidade: {
    id: 'biodiversidade',
    label: 'Biodiversidade',
    titulo: 'Um Santuário da Vida Amazônica',
    texto: 'O Parque Nacional de Anavilhanas abriga uma das maiores diversidades biológicas do planeta. Suas águas negras e florestas de igapó criam habitats únicos para espécies que não existem em nenhum outro lugar do mundo.',
    imagem: '/images/natureza/anavilhas.jpeg',
    alt: 'Fauna e flora do Arquipélago de Anavilhanas',
    subsecoes: [
      { titulo: 'Fauna Aquática', texto: 'O Rio Negro abriga mais de 700 espécies de peixes, incluindo o tucunaré, o tambaqui e o pirarucu. Os botos cor-de-rosa e os tucuxis são presença constante nas águas do arquipélago, encantando os visitantes com suas acrobacias.' },
      { titulo: 'Aves e Mamíferos', texto: 'O parque é um paraíso para observadores de aves, com mais de 500 espécies registradas. Onças-pintadas, antas, queixadas e ariranhas habitam as ilhas e margens dos rios, tornando cada passeio uma experiência única.' },
      { titulo: 'Floresta de Igapó', texto: 'Durante a cheia do Rio Negro, a floresta de igapó fica completamente submersa, criando um cenário surreal onde é possível navegar de canoa entre as copas das árvores. Um espetáculo natural único no mundo.' },
    ],
  },
  visita: {
    id: 'visita',
    label: 'Visite',
    titulo: 'Como Explorar Anavilhanas',
    texto: 'O Arquipélago de Anavilhanas pode ser explorado a partir de Manaus ou da cidade de Novo Airão, a porta de entrada do parque nacional.',
    imagem: '/images/geral/Ana-Am.jpg',
    alt: 'Passeio de barco em Anavilhanas',
    subsecoes: [
      { titulo: 'Como Chegar', texto: 'De Manaus, siga pela AM-352 até Novo Airão (180 km, aprox. 3h). Há também barcos regulares saindo do Porto de Manaus. De Novo Airão, operadoras locais organizam passeios pelo arquipélago.' },
      { titulo: 'Melhor Época', texto: 'De junho a novembro, na vazante, as praias fluviais aparecem e a navegação é mais fácil. De dezembro a maio, na cheia, é possível navegar pela floresta de igapó submersa — uma experiência única.' },
      { titulo: 'Passeios Disponíveis', texto: 'Passeios de barco, canoagem, observação de botos, trilhas ecológicas e pesca esportiva são as principais atividades. Lodges flutuantes oferecem hospedagem dentro do parque para uma imersão completa.' },
    ],
    recomendacoes: [
      {
        titulo: 'Operadoras de Turismo',
        itens: [
          { nome: 'Anavilhanas Jungle Lodge', nota: 4.9, contato: '(92) 3365-1180', site: 'https://www.anavilhanaslodge.com/' },
          { nome: 'Amazon Eco Adventures', nota: 4.7, contato: '(92) 9999-5678', site: 'https://www.instagram.com/' },
          { nome: 'Novo Airão Ecoturismo', nota: 4.6, contato: '(97) 3365-1234', site: 'https://www.instagram.com/' },
        ],
      },
      {
        titulo: 'Onde Ficar',
        itens: [
          { nome: 'Anavilhanas Jungle Lodge', nota: 4.9, contato: '(92) 3365-1180', site: 'https://www.anavilhanaslodge.com/' },
          { nome: 'Pousada Bela Vista', nota: 4.6, contato: '(97) 3365-2222', site: 'https://www.instagram.com/' },
          { nome: 'Hotel Novo Airão', nota: 4.5, contato: '(97) 3365-3333', site: 'https://www.instagram.com/' },
        ],
      },
    ],
  },
  fotos: { id: 'fotos', label: 'Fotos' },
};

const HeaderCarousel = () => {
  const [imagemAtivaIndex, setImagemAtivaIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setImagemAtivaIndex(prev => (prev + 1) % carouselImages.length), 5000);
    return () => clearTimeout(timer);
  }, [imagemAtivaIndex]);

  return (
    <header className="aa-header">
      {carouselImages.map((img, index) => (
        <img key={img} src={img} alt="Arquipélago de Anavilhanas"
          className={`aa-header-carousel-image ${index === imagemAtivaIndex ? 'active' : ''}`} />
      ))}
      <div className="aa-header-text">
        <h1>Arquipélago de Anavilhanas</h1>
        <p>Um santuário de biodiversidade nas águas negras do Rio Negro.</p>
      </div>
    </header>
  );
};

const ConteudoAba = ({ secao }) => (
  <section className="aa-section">
    <div className="aa-text-image-split">
      <div className="aa-text">
        <h2>{secao.titulo}</h2>
        <p>{secao.texto}</p>
        {secao.lista && (
          <ul className="aa-facts-list">
            {secao.lista.map((item, i) => (
              <li key={i}><strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>
            ))}
          </ul>
        )}
        {secao.subsecoes && (
          <div className="aa-subsecoes">
            {secao.subsecoes.map((sub, i) => (
              <div key={i} className="aa-subsecao-item">
                <h3>{sub.titulo}</h3>
                <p>{sub.texto}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="aa-image-wrapper">
        <img src={secao.imagem} alt={secao.alt} className="aa-image" />
      </div>
    </div>

    {secao.recomendacoes && (
      <div className="aa-recomendacoes-container">
        {secao.recomendacoes.map((rec, i) => (
          <div key={i} className="aa-recomendacao-categoria">
            <h3>{rec.titulo}</h3>
            <div className="aa-recomendacao-cards">
              {rec.itens.map((item, j) => (
                <div key={j} className="aa-recomendacao-card">
                  <div className="aa-card-header">
                    <a href={item.site} target="_blank" rel="noopener noreferrer" className="aa-card-nome">{item.nome}</a>
                    <span className="aa-card-nota">{item.nota} ★</span>
                  </div>
                  <span className="aa-card-contato">{item.contato}</span>
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
  <section className="aa-galeria-container">
    <h2>Fotos</h2>
    <div className="aa-galeria-grid">
      {galleryImages.map((img, i) => (
        <div key={i} className="aa-galeria-item">
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
  </section>
);

const ArquipelagoAnavilhanas = () => {
  const [abaAtiva, setAbaAtiva] = useState('sobre');
  const navigate = useNavigate();

  return (
    <div className="aa-container">
      <div style={{ position: 'relative' }}>
        <HeaderCarousel />
        <button onClick={() => navigate('/destinos-amazonas')} style={{ position: 'absolute', top: '2rem', left: '2rem', zIndex: 10, background: 'rgba(255,255,255,0.2)', border: '2px solid white', color: 'white', padding: '0.7rem 1.5rem', borderRadius: '50px', cursor: 'pointer', fontWeight: '600', fontSize: '0.95rem' }}>
          ← Voltar
        </button>
      </div>
      <div className="aa-content-wrapper">
        <nav className="aa-nav">
          {Object.keys(secoes).map(key => (
            <button key={key} onClick={() => setAbaAtiva(key)} className={abaAtiva === key ? 'active' : ''}>
              {secoes[key].label}
            </button>
          ))}
        </nav>
        <main className="aa-main">
          {abaAtiva === 'fotos' ? <Galeria /> : <ConteudoAba secao={secoes[abaAtiva]} />}
        </main>
      </div>
    </div>
  );
};

export default ArquipelagoAnavilhanas;
