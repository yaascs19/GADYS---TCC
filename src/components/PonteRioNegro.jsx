import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PonteRioNegro.css';
import { useLocalByRota } from '../hooks/useLocalByRota';
import AvaliacoesComentarios from './AvaliacoesComentarios';

const carouselImages = [
  '/images/geral/pn-Am.jpg',
  '/images/geral/am-pn7.jpeg',
];

const galleryImages = [
  { src: '/images/geral/pn-Am.jpg', alt: 'Ponte Rio Negro' },
  { src: '/images/geral/am-pn7.jpeg', alt: 'Ponte Rio Negro' },
  { src: '/images/geral/am-pn2.jpg', alt: 'Ponte Rio Negro' },
  { src: '/images/geral/am-pn3.jpg', alt: 'Ponte Rio Negro' },
  { src: '/images/geral/am-pn4.jpg', alt: 'Ponte Rio Negro' },
  { src: '/images/geral/am-pn5.jpg', alt: 'Ponte Rio Negro' },
  { src: '/images/geral/am-pn8.jpg', alt: 'Ponte Rio Negro' },
  { src: '/images/geral/am-pn6.jpg', alt: 'Ponte Rio Negro' },
  { src: '/images/geral/am-pn9.jpeg', alt: 'Ponte Rio Negro' },
];

const secoes = {
  sobre: {
    id: 'sobre',
    label: 'Sobre',
    titulo: 'A Ponte que Une o Amazonas',
    texto: 'A Ponte Rio Negro, oficialmente chamada de Ponte Jornalista Phelippe Daou, é uma das maiores obras de engenharia da Amazônia. Com 3,5 km de extensão, a ponte estaiada conecta Manaus a Iranduba, cruzando o majestoso Rio Negro. Inaugurada em 2011, ela transformou a logística da região e se tornou um dos cartões-postais mais imponentes do Amazonas.',
    imagem: '/images/geral/am-pn2.jpg',
    lista: [
      'Extensão: 3,5 km sobre o Rio Negro.',
      'Inauguração: 24 de outubro de 2011.',
      'Tipo: Ponte estaiada — a maior da América Latina em seu tipo.',
      'Conexão: Manaus (AM) a Iranduba (AM).',
    ],
  },
  engenharia: {
    id: 'engenharia',
    label: 'Engenharia',
    titulo: 'Uma Obra Monumental',
    texto: 'A Ponte Rio Negro é um marco da engenharia brasileira. Seu projeto desafiou as condições extremas da Amazônia — variação de até 14 metros no nível do rio, ventos intensos e solo instável — para entregar uma estrutura que une beleza e funcionalidade.',
    imagem: '/images/geral/am-pn3.jpg',
    subsecoes: [
      {
        titulo: 'Estrutura Estaiada',
        texto: 'A ponte utiliza o sistema estaiado, com cabos de aço partindo de torres centrais que sustentam o tabuleiro. As duas torres principais têm 80 metros de altura e são visíveis de vários pontos de Manaus, especialmente ao entardecer, quando a iluminação cria um espetáculo visual único.',
      },
      {
        titulo: 'Desafios da Amazônia',
        texto: 'Construir sobre o Rio Negro exigiu soluções inovadoras. O rio tem variação de nível de até 14 metros entre a cheia e a seca, e suas águas ácidas e escuras impõem condições severas às fundações. A obra levou mais de 4 anos para ser concluída.',
      },
      {
        titulo: 'Impacto Regional',
        texto: 'Antes da ponte, a travessia entre Manaus e Iranduba era feita apenas por balsa, levando até 40 minutos. Com a ponte, o trajeto é feito em menos de 5 minutos, integrando municípios e impulsionando o desenvolvimento do interior do Amazonas.',
      },
    ],
  },
  visita: {
    id: 'visita',
    label: 'Visite',
    titulo: 'Como Chegar e o Que Ver',
    texto: 'A Ponte Rio Negro pode ser apreciada de vários ângulos — de dentro do carro ao cruzá-la, das margens do Rio Negro ou de barco pelo rio. O pôr do sol visto da ponte ou das margens é um dos espetáculos mais bonitos de Manaus.',
    imagem: '/images/geral/am-pn8.jpg',
    subsecoes: [
      {
        titulo: 'Como Chegar',
        texto: 'A ponte está localizada na saída de Manaus pela AM-070. Para cruzá-la de carro, siga em direção a Iranduba. Para apreciá-la de fora, vá até o Porto da Ceasa ou às margens do Rio Negro no bairro Educandos, onde a vista é privilegiada.',
      },
      {
        titulo: 'Melhor Horário',
        texto: 'O pôr do sol é o momento mais fotogênico — a luz dourada reflete nas águas escuras do Rio Negro e ilumina os cabos de aço da ponte. À noite, a iluminação artificial transforma a estrutura em um espetáculo de luzes.',
      },
      {
        titulo: 'Passeio de Barco',
        texto: 'Diversas operadoras de turismo de Manaus oferecem passeios de barco pelo Rio Negro que passam sob a ponte. É a melhor forma de contemplar a grandiosidade da estrutura e entender a escala da obra em relação ao rio.',
      },
    ],
    recomendacoes: [
      {
        titulo: 'Atrações Próximas',
        itens: [
          { nome: 'Encontro das Águas', nota: 4.9, contato: 'Operadoras de turismo', site: 'https://www.amazonastur.am.gov.br/' },
          { nome: 'Teatro Amazonas', nota: 4.9, contato: '(92) 3622-1880', site: 'https://www.teatroamazonas.com.br/' },
          { nome: 'Arquipélago de Anavilhanas', nota: 4.8, contato: 'Operadoras de turismo', site: 'https://www.anavilhanaslodge.com/' },
        ],
      },
      {
        titulo: 'Hotéis em Manaus',
        itens: [
          { nome: 'Juma Ópera Hotel', nota: 4.3, contato: '(92) 99137-4260', site: 'https://www.jumaopera.com.br/' },
          { nome: 'Hotel Intercity Manaus', nota: 4.7, contato: '(11) 5198-6936', site: 'https://www.intercityhoteis.com.br/' },
          { nome: 'Blue Tree Premium Manaus', nota: 4.5, contato: '(92) 3303-2000', site: 'https://www.bluetree.com.br/' },
        ],
      },
    ],
  },
  fotos: { id: 'fotos', label: 'Fotos' },
  avaliacoes: { id: 'avaliacoes', label: 'Avaliações' },
};

const ConteudoAba = ({ secao }) => (
  <section className="prn-section">
    <div className="prn-text-image-split">
      <div className="prn-text">
        <h2>{secao.titulo}</h2>
        <p>{secao.texto}</p>
        {secao.lista && (
          <ul className="prn-facts-list">
            {secao.lista.map((item, i) => (
              <li key={i}><strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>
            ))}
          </ul>
        )}
        {secao.subsecoes && (
          <div className="prn-subsecoes">
            {secao.subsecoes.map((sub, i) => (
              <div key={i} className="prn-subsecao-item">
                <h3>{sub.titulo}</h3>
                <p>{sub.texto}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="prn-image-wrapper">
        <img src={secao.imagem} alt={secao.alt} className="prn-image" />
        {secao.id === 'engenharia' && (
          <>
            <img src="/images/geral/am-pn4.jpg" alt="Ponte Rio Negro" className="prn-image" />
            <img src="/images/geral/am-pn5.jpg" alt="Ponte Rio Negro" className="prn-image" />
          </>
        )}
        {secao.id === 'visita' && (
          <>
            <img src="/images/geral/am-pn6.jpg" alt="Ponte Rio Negro" className="prn-image" />
            <img src="/images/geral/am-pn9.jpeg" alt="Ponte Rio Negro" className="prn-image" />
          </>
        )}
      </div>
    </div>

    {secao.recomendacoes && (
      <div className="prn-recomendacoes-container">
        {secao.recomendacoes.map((rec, i) => (
          <div key={i} className="prn-recomendacao-categoria">
            <h3>{rec.titulo}</h3>
            <div className="prn-recomendacao-cards">
              {rec.itens.map((item, j) => (
                <div key={j} className="prn-recomendacao-card">
                  <div className="prn-card-header">
                    <a href={item.site} target="_blank" rel="noopener noreferrer" className="prn-card-nome">{item.nome}</a>
                    <span className="prn-card-nota">{item.nota} ★</span>
                  </div>
                  <span className="prn-card-contato">{item.contato}</span>
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
  <section className="prn-galeria-container">
    <h2>Fotos</h2>
    <div className="prn-galeria-grid">
      {galleryImages.map((img, i) => (
        <div key={i} className="prn-galeria-item">
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
  </section>
);

const PonteRioNegro = () => {
  const [abaAtiva, setAbaAtiva] = useState('sobre');
  const [imagemAtivaIndex, setImagemAtivaIndex] = useState(0);
  const [carregado, setCarregado] = useState(false);
  const navigate = useNavigate();
  const { bdLocal, bdId } = useLocalByRota('/ponte-rio-negro');
  const [bdPronto, setBdPronto] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = carouselImages[0];
    img.onload = () => setCarregado(true);
    img.onerror = () => setCarregado(true);
    carouselImages.slice(1).forEach(src => { const i = new Image(); i.src = src; });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setBdPronto(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const titulo = bdLocal?.nome || 'Ponte Rio Negro';
  const subtitulo = bdLocal?.descricao || 'A maior ponte estaiada da América Latina sobre o Rio Negro.';
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
    <div className="prn-container">
      <div style={{ position: 'relative' }}>
        <header className="prn-header" style={{ opacity: carregado ? 1 : 0, transition: 'opacity 0.4s ease' }}>
          {headerImgs.map((img, index) => (
            <img key={img} src={img} alt={titulo}
              className={`prn-header-carousel-image ${index === imagemAtivaIndex ? 'active' : ''}`} />
          ))}
          <div className="prn-header-text" style={{ opacity: bdPronto ? 1 : 0, transition: 'opacity 0.3s ease' }}>
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

      <div className="prn-content-wrapper">
        <nav className="prn-nav">
          {Object.keys(secoes).map((key) => (
            <button key={key} onClick={() => setAbaAtiva(key)} className={abaAtiva === key ? 'active' : ''}>
              {secoes[key].label}
            </button>
          ))}
        </nav>
        <main className="prn-main">
          {abaAtiva === 'fotos' ? <Galeria /> :
           abaAtiva === 'avaliacoes' ? <AvaliacoesComentarios localId={bdId} /> :
           <ConteudoAba secao={secoes[abaAtiva]} />}
        </main>
      </div>
    </div>
  );
};

export default PonteRioNegro;
