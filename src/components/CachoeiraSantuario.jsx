import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CachoeiraSantuario.css';
import { useLocalByRota } from '../hooks/useLocalByRota';
import AvaliacoesComentarios from './AvaliacoesComentarios';

const carouselImages = [
  '/images/geral/ca-Am.jpg',
  '/images/geral/am-cs13.avif',
];

const galleryImages = [
  { src: '/images/geral/ca-Am.jpg', alt: 'Cachoeira do Santuário' },
];

const secoes = {
  sobre: {
    id: 'sobre',
    label: 'Sobre',
    titulo: 'A Joia Escondida da Amazônia',
    texto: 'A Cachoeira do Santuário é uma das mais belas quedas d\'água da região amazônica, localizada em Presidente Figueiredo, município conhecido como a "Terra das Cachoeiras". Com suas piscinas naturais de águas cristalinas e a exuberante floresta ao redor, o local é um verdadeiro santuário natural a apenas 107 km de Manaus.',
    imagem: '/images/geral/am-cs1.jpg',
    lista: [
      'Localização: Presidente Figueiredo, a 107 km de Manaus — AM.',
      'Acesso: Trilha de aproximadamente 1,5 km pela floresta.',
      'Destaque: Piscinas naturais ideais para banho e relaxamento.',
      'Município: Presidente Figueiredo, a "Terra das Cachoeiras".',
    ],
  },
  natureza: {
    id: 'natureza',
    label: 'Natureza',
    titulo: 'Um Espetáculo de Água e Floresta',
    texto: 'Presidente Figueiredo abriga mais de 100 cachoeiras catalogadas, e a Cachoeira do Santuário se destaca pela beleza singular de suas águas e pela trilha que leva até ela, repleta de fauna e flora amazônicas. O percurso é uma imersão completa na biodiversidade da floresta.',
    imagem: '/images/geral/am-cs2.jpg',
    subsecoes: [
      {
        titulo: 'As Piscinas Naturais',
        texto: 'As piscinas formadas pela cachoeira têm águas transparentes e temperatura agradável, ideais para banho. A profundidade varia conforme a época do ano — na cheia, as piscinas ficam mais fundas e a queda d\'água ganha mais volume e força.',
      },
      {
        titulo: 'A Trilha',
        texto: 'O acesso à cachoeira é feito por uma trilha de aproximadamente 1,5 km em meio à floresta amazônica. O percurso é de dificuldade moderada e revela uma rica biodiversidade, com aves, borboletas e vegetação nativa ao longo do caminho.',
      },
      {
        titulo: 'Fauna e Flora',
        texto: 'A região de Presidente Figueiredo é um corredor ecológico de grande importância. Ao longo da trilha é possível avistar tucanos, araras, macacos e uma infinidade de espécies de plantas endêmicas da Amazônia.',
      },
    ],
  },
  visita: {
    id: 'visita',
    label: 'Visite',
    titulo: 'Como Chegar e Aproveitar',
    texto: 'A Cachoeira do Santuário é acessível a partir de Manaus pela AM-010, uma das estradas mais bonitas do Amazonas. O passeio pode ser feito em um dia, mas vale a pena pernoitar em Presidente Figueiredo para explorar mais cachoeiras da região.',
    imagem: '/images/geral/am-cs10.webp',
    subsecoes: [
      {
        titulo: 'Como Chegar',
        texto: 'De Manaus, siga pela AM-010 por aproximadamente 107 km até Presidente Figueiredo (cerca de 1h30 de carro). De lá, siga as indicações para a Cachoeira do Santuário. Há estacionamento próximo ao início da trilha.',
      },
      {
        titulo: 'Melhor Época',
        texto: 'De junho a novembro, na seca, as trilhas ficam mais acessíveis e as piscinas mais rasas e tranquilas. De dezembro a maio, na cheia, a cachoeira fica mais volumosa e imponente, mas a trilha pode ficar enlameada.',
      },
      {
        titulo: 'Dicas Essenciais',
        texto: 'Use calçado fechado para a trilha, leve repelente, protetor solar e água. Não deixe lixo na natureza. O banho é permitido nas piscinas naturais. Recomenda-se ir com guia local para uma experiência mais segura e enriquecedora.',
      },
    ],
    recomendacoes: [
      {
        titulo: 'Onde Comer em Presidente Figueiredo',
        itens: [
          { nome: 'Restaurante Cachoeira', nota: 4.4, contato: '(92) 3324-1200', site: 'https://www.instagram.com/' },
          { nome: 'Sabor da Floresta', nota: 4.3, contato: '(92) 3324-1500', site: 'https://www.instagram.com/' },
          { nome: 'Peixaria do Zé', nota: 4.5, contato: '(92) 3324-1800', site: 'https://www.instagram.com/' },
        ],
      },
      {
        titulo: 'Onde Ficar',
        itens: [
          { nome: 'Pousada das Cachoeiras', nota: 4.5, contato: '(92) 3324-1100', site: 'https://www.booking.com/city/br/presidente-figueiredo.html' },
          { nome: 'Hotel Presidente Figueiredo', nota: 4.2, contato: '(92) 3324-1300', site: 'https://www.booking.com/city/br/presidente-figueiredo.html' },
          { nome: 'Chalés da Floresta', nota: 4.6, contato: '(92) 9999-1234', site: 'https://www.instagram.com/' },
        ],
      },
    ],
  },
  fotos: { id: 'fotos', label: 'Fotos' },
  avaliacoes: { id: 'avaliacoes', label: 'Avaliações' },
};

const ConteudoAba = ({ secao }) => (
  <section className="cs-section">
    <div className="cs-text-image-split">
      <div className="cs-text">
        <h2>{secao.titulo}</h2>
        <p>{secao.texto}</p>
        {secao.lista && (
          <ul className="cs-facts-list">
            {secao.lista.map((item, i) => (
              <li key={i}><strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>
            ))}
          </ul>
        )}
        {secao.subsecoes && (
          <div className="cs-subsecoes">
            {secao.subsecoes.map((sub, i) => (
              <div key={i} className="cs-subsecao-item">
                <h3>{sub.titulo}</h3>
                <p>{sub.texto}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="cs-image-wrapper">
        <img src={secao.imagem} alt={secao.alt} className="cs-image" />
        {secao.id === 'natureza' && (
          <>
            <img src="/images/geral/am-cs3.jpg" alt="Cachoeira do Santuário" className="cs-image" />
            <img src="/images/geral/am-cs4.jpg" alt="Cachoeira do Santuário" className="cs-image" />
          </>
        )}
        {secao.id === 'visita' && (
          <>
            <img src="/images/geral/am-cs7.jpg" alt="Cachoeira do Santuário" className="cs-image" />
            <img src="/images/geral/am-cs12.jpg" alt="Cachoeira do Santuário" className="cs-image" />
          </>
        )}
      </div>
    </div>

    {secao.recomendacoes && (
      <div className="cs-recomendacoes-container">
        {secao.recomendacoes.map((rec, i) => (
          <div key={i} className="cs-recomendacao-categoria">
            <h3>{rec.titulo}</h3>
            <div className="cs-recomendacao-cards">
              {rec.itens.map((item, j) => (
                <div key={j} className="cs-recomendacao-card">
                  <div className="cs-card-header">
                    <a href={item.site} target="_blank" rel="noopener noreferrer" className="cs-card-nome">{item.nome}</a>
                    <span className="cs-card-nota">{item.nota} ★</span>
                  </div>
                  <span className="cs-card-contato">{item.contato}</span>
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
  <section className="cs-galeria-container">
    <h2>Fotos</h2>
    <div className="cs-galeria-grid">
      {galleryImages.map((img, i) => (
        <div key={i} className="cs-galeria-item">
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
  </section>
);

const CachoeiraSantuario = () => {
  const [abaAtiva, setAbaAtiva] = useState('sobre');
  const [imagemAtivaIndex, setImagemAtivaIndex] = useState(0);
  const navigate = useNavigate();
  const { bdLocal, bdId } = useLocalByRota('/cachoeira-santuario');

  const titulo = bdLocal?.nome || 'Cachoeira do Santuário';
  const subtitulo = bdLocal?.descricao || 'Um santuário natural de águas cristalinas em Presidente Figueiredo.';
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
    <div className="cs-container">
      <div style={{ position: 'relative' }}>
        <header className="cs-header">
          {headerImgs.map((img, index) => (
            <img key={img} src={img} alt={titulo}
              className={`cs-header-carousel-image ${index === imagemAtivaIndex ? 'active' : ''}`} />
          ))}
          <div className="cs-header-text">
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

      <div className="cs-content-wrapper">
        <nav className="cs-nav">
          {Object.keys(secoes).map((key) => (
            <button key={key} onClick={() => setAbaAtiva(key)} className={abaAtiva === key ? 'active' : ''}>
              {secoes[key].label}
            </button>
          ))}
        </nav>
        <main className="cs-main">
          {abaAtiva === 'fotos' ? <Galeria /> :
           abaAtiva === 'avaliacoes' ? <AvaliacoesComentarios localId={bdId} /> :
           <ConteudoAba secao={secoes[abaAtiva]} />}
        </main>
      </div>
    </div>
  );
};

export default CachoeiraSantuario;
