import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CoretoPeixaria.css';
import { useLocalByRota } from '../hooks/useLocalByRota';
import AvaliacoesComentarios from './AvaliacoesComentarios';

const carouselImages = [
  '/images/geral/res-Am.jpg',
  '/images/geral/am-cp3.jpg',
];

const galleryImages = [
  { src: '/images/geral/res-Am.jpg', alt: 'Coreto Peixaria & Café Regional' },
  { src: '/images/geral/am-cp3.jpg', alt: 'Coreto Peixaria & Café Regional' },
  { src: '/images/geral/am-cp1.jpg', alt: 'Coreto Peixaria & Café Regional' },
  { src: '/images/geral/am-cp4.jpeg', alt: 'Coreto Peixaria & Café Regional' },
  { src: '/images/geral/am-cp5.jpg', alt: 'Coreto Peixaria & Café Regional' },
  { src: '/images/geral/am-cp6.jpg', alt: 'Coreto Peixaria & Café Regional' },
  { src: '/images/geral/am-cp8.jpg', alt: 'Coreto Peixaria & Café Regional' },
  { src: '/images/geral/am-cp9.jpg', alt: 'Coreto Peixaria & Café Regional' },
  { src: '/images/geral/am-cp10.jpg', alt: 'Coreto Peixaria & Café Regional' },
  { src: '/images/geral/am-cp11.jpg', alt: 'Coreto Peixaria & Café Regional' },
];

const secoes = {
  sobre: {
    id: 'sobre',
    label: 'Sobre',
    titulo: 'Sabores Amazônicos com Alma de Café',
    texto: 'O Coreto Peixaria & Café Regional é um dos restaurantes mais charmosos de Manaus, unindo a tradição da peixaria amazônica com o aconchego de um café regional. Com um menu repleto de pratos tradicionais e ingredientes frescos, cada refeição é uma celebração das riquezas da região. Desde o peixe fresco dos rios até as especiarias nativas, o Coreto oferece uma experiência gastronômica única no coração da Amazônia.',
    imagem: '/images/geral/am-cp1.jpg',
    lista: [
      'Localização: Manaus — AM.',
      'Especialidade: Peixes frescos dos rios amazônicos e café regional.',
      'Destaque: Ambiente aconchegante com ingredientes nativos da floresta.',
      'Diferencial: Fusão entre peixaria tradicional e café amazônico.',
    ],
  },
  cardapio: {
    id: 'cardapio',
    label: 'Cardápio',
    titulo: 'Da Floresta para a Mesa',
    texto: 'O cardápio do Coreto é uma viagem pelos sabores únicos da Amazônia. Cada prato é preparado com ingredientes frescos e técnicas tradicionais que preservam a essência da culinária regional, combinando o melhor da peixaria com os aromas do café amazônico.',
    imagem: '/images/geral/am-cp4.jpeg',
    subsecoes: [
      {
        titulo: 'Peixes da Amazônia',
        texto: 'O carro-chefe do Coreto são os peixes frescos dos rios amazônicos. Tambaqui assado na brasa, pirarucu de casaca, tucunaré ao molho de tucumã e filhote grelhado são alguns dos pratos que encantam os visitantes com sabores únicos e autênticos.',
      },
      {
        titulo: 'Café e Bebidas Regionais',
        texto: 'O café do Coreto é preparado com grãos selecionados da região amazônica. O cardápio de bebidas inclui suco de cupuaçu, caldo de cana com limão, água de coco fresco e o famoso café coado na cuia, uma tradição da casa.',
      },
      {
        titulo: 'Entradas e Petiscos',
        texto: 'As entradas incluem caldeirado de peixe, ceviche amazônico com limão e pimenta de cheiro, bolinho de tambaqui e tacacá servido em cuia — a tradicional sopa quente com jambu, camarão e tucupi.',
      },
      {
        titulo: 'Sobremesas Regionais',
        texto: 'Para encerrar, o Coreto oferece sobremesas feitas com frutas amazônicas: mousse de cupuaçu, sorvete de tucumã, pudim de açaí e torta de bacuri com calda de guaraná.',
      },
    ],
  },
  visita: {
    id: 'visita',
    label: 'Visite',
    titulo: 'Como Chegar e Reservar',
    texto: 'O Coreto Peixaria & Café Regional está localizado em Manaus, de fácil acesso pelo centro da cidade. O ambiente aconchegante e a culinária autêntica fazem do Coreto uma parada obrigatória para quem visita a capital amazonense.',
    imagem: '/images/geral/am-cp9.jpg',
    subsecoes: [
      {
        titulo: 'Horários de Funcionamento',
        texto: 'O restaurante funciona de terça a domingo, das 11h30 às 15h (almoço) e das 18h às 23h (jantar). Às sextas e sábados, o jantar se estende até meia-noite com música regional ao vivo.',
      },
      {
        titulo: 'Como Chegar',
        texto: 'Localizado no centro de Manaus, o Coreto é facilmente acessível de táxi, aplicativo de transporte ou ônibus. Recomenda-se chegar com antecedência nos fins de semana, pois o movimento é intenso.',
      },
      {
        titulo: 'Reservas',
        texto: 'Recomenda-se fazer reserva com antecedência, especialmente nos fins de semana e feriados. Entre em contato pelo telefone (92) 3307-1052 ou pelo Instagram do restaurante.',
      },
    ],
    recomendacoes: [
      {
        titulo: 'Atrações Próximas',
        itens: [
          { nome: 'Teatro Amazonas', nota: 4.9, contato: '(92) 3622-1880', site: 'https://www.teatroamazonas.com.br/' },
          { nome: 'Palácio Rio Negro', nota: 4.6, contato: '(92) 3182-4450', site: 'https://www.instagram.com/' },
          { nome: 'Museu do Seringal', nota: 4.7, contato: '(92) 3633-3757', site: 'https://www.instagram.com/' },
        ],
      },
      {
        titulo: 'Hotéis Próximos',
        itens: [
          { nome: 'Juma Ópera Hotel', nota: 4.8, contato: '(92) 3212-3300', site: 'https://www.jumaopera.com.br/' },
          { nome: 'Hotel Intercity Manaus', nota: 4.5, contato: '(92) 3303-5000', site: 'https://www.intercityhoteis.com.br/' },
          { nome: 'Blue Tree Premium Manaus', nota: 4.5, contato: '(92) 3303-2000', site: 'https://www.bluetree.com.br/' },
        ],
      },
    ],
  },
  fotos: { id: 'fotos', label: 'Fotos' },
  avaliacoes: { id: 'avaliacoes', label: 'Avaliações' },
};

const ConteudoAba = ({ secao }) => (
  <section className="cp-section">
    <div className="cp-text-image-split">
      <div className="cp-text">
        <h2>{secao.titulo}</h2>
        <p>{secao.texto}</p>
        {secao.lista && (
          <ul className="cp-facts-list">
            {secao.lista.map((item, i) => (
              <li key={i}><strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>
            ))}
          </ul>
        )}
        {secao.subsecoes && (
          <div className="cp-subsecoes">
            {secao.subsecoes.map((sub, i) => (
              <div key={i} className="cp-subsecao-item">
                <h3>{sub.titulo}</h3>
                <p>{sub.texto}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="cp-image-wrapper">
        <img src={secao.imagem} alt={secao.alt} className="cp-image" />
        {secao.id === 'cardapio' && (
          <>
            <img src="/images/geral/am-cp5.jpg" alt="Coreto Peixaria" className="cp-image" />
            <img src="/images/geral/am-cp6.jpg" alt="Coreto Peixaria" className="cp-image" />
            <img src="/images/geral/am-cp8.jpg" alt="Coreto Peixaria" className="cp-image" />
          </>
        )}
        {secao.id === 'visita' && (
          <>
            <img src="/images/geral/am-cp10.jpg" alt="Coreto Peixaria" className="cp-image" />
            <img src="/images/geral/am-cp11.jpg" alt="Coreto Peixaria" className="cp-image" />
          </>
        )}
      </div>
    </div>

    {secao.recomendacoes && (
      <div className="cp-recomendacoes-container">
        {secao.recomendacoes.map((rec, i) => (
          <div key={i} className="cp-recomendacao-categoria">
            <h3>{rec.titulo}</h3>
            <div className="cp-recomendacao-cards">
              {rec.itens.map((item, j) => (
                <div key={j} className="cp-recomendacao-card">
                  <div className="cp-card-header">
                    <a href={item.site} target="_blank" rel="noopener noreferrer" className="cp-card-nome">{item.nome}</a>
                    <span className="cp-card-nota">{item.nota} ★</span>
                  </div>
                  <span className="cp-card-contato">{item.contato}</span>
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
  <section className="cp-galeria-container">
    <h2>Fotos</h2>
    <div className="cp-galeria-grid">
      {galleryImages.map((img, i) => (
        <div key={i} className="cp-galeria-item">
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
  </section>
);

const CoretoPeixaria = () => {
  const [abaAtiva, setAbaAtiva] = useState('sobre');
  const [imagemAtivaIndex, setImagemAtivaIndex] = useState(0);
  const navigate = useNavigate();
  const { bdLocal, bdId } = useLocalByRota('/coreto-peixaria');
  const [bdPronto, setBdPronto] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBdPronto(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const titulo = bdLocal?.nome || 'Coreto Peixaria & Café Regional';
  const subtitulo = bdLocal?.descricao || 'Sabores amazônicos com alma de café no coração de Manaus.';
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
    <div className="cp-container">
      <div style={{ position: 'relative' }}>
        <header className="cp-header">
          {headerImgs.map((img, index) => (
            <img key={img} src={img} alt={titulo}
              className={`cp-header-carousel-image ${index === imagemAtivaIndex ? 'active' : ''}`} />
          ))}
          <div className="cp-header-text" style={{ opacity: bdPronto ? 1 : 0, transition: 'opacity 0.3s ease' }}>
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

      <div className="cp-content-wrapper">
        <nav className="cp-nav">
          {Object.keys(secoes).map((key) => (
            <button key={key} onClick={() => setAbaAtiva(key)} className={abaAtiva === key ? 'active' : ''}>
              {secoes[key].label}
            </button>
          ))}
        </nav>
        <main className="cp-main">
          {abaAtiva === 'fotos' ? <Galeria /> :
           abaAtiva === 'avaliacoes' ? <AvaliacoesComentarios localId={bdId} /> :
           <ConteudoAba secao={secoes[abaAtiva]} />}
        </main>
      </div>
    </div>
  );
};

export default CoretoPeixaria;
