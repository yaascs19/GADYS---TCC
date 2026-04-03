import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AmazonicoPeixaria.css';

const carouselImages = [
  '/images/geral/restama1.jpg',
  '/images/geral/amre-am1.jpg',
];

const galleryImages = [
  { src: '/images/geral/restama1.jpg', alt: 'Amazônico Peixaria Regional' },
  { src: '/images/geral/amre-am1.jpg', alt: 'Amazônico Peixaria Regional' },
  { src: '/images/geral/amre-am2.jpg', alt: 'Amazônico Peixaria Regional' },
  { src: '/images/geral/amre-am3.jpg', alt: 'Amazônico Peixaria Regional' },
  { src: '/images/geral/amre-am4.jpg', alt: 'Amazônico Peixaria Regional' },
  { src: '/images/geral/amre-am5.jpg', alt: 'Amazônico Peixaria Regional' },
  { src: '/images/geral/amre-am6.jpg', alt: 'Amazônico Peixaria Regional' },
  { src: '/images/geral/amre-am7.jpg', alt: 'Amazônico Peixaria Regional' },
  { src: '/images/geral/amre-am8.jpg', alt: 'Amazônico Peixaria Regional' },
];

const secoes = {
  sobre: {
    id: 'sobre',
    label: 'Sobre',
    titulo: 'Uma Experiência Gastronômica Singular',
    texto: 'O Amazônico Peixaria Regional é um dos restaurantes mais autênticos de Manaus, localizado no coração do Largo de São Sebastião, em frente ao Teatro Amazonas. Com um menu repleto de pratos tradicionais e ingredientes frescos da Amazônia, cada refeição é uma celebração das riquezas da região. Desde o peixe fresco dos rios até as especiarias nativas, o restaurante oferece uma imersão completa na culinária amazônica.',
    imagem: '/images/geral/amre-am2.jpg',
    lista: [
      'Localização: Largo de São Sebastião, em frente ao Teatro Amazonas.',
      'Especialidade: Peixes frescos dos rios amazônicos.',
      'Destaque: Ingredientes nativos e temperos da floresta.',
    ],
  },
  cardapio: {
    id: 'cardapio',
    label: 'Cardápio',
    titulo: 'Os Sabores da Floresta',
    texto: 'O cardápio do Amazônico Peixaria Regional é uma viagem pelos sabores únicos da Amazônia. Cada prato é preparado com ingredientes frescos e técnicas tradicionais que preservam a essência da culinária regional.',
    imagem: '/images/geral/amre-am3.jpg',
    alt: 'Pratos do Amazônico Peixaria Regional',
    subsecoes: [
      { titulo: 'Peixes da Amazônia', texto: 'O carro-chefe do restaurante são os peixes frescos dos rios amazônicos. Tambaqui assado na brasa, pirarucu de casaca, tucunaré ao molho de tucumã e filhote grelhado são alguns dos pratos que encantam os visitantes com sabores únicos e autênticos.' },
      { titulo: 'Entradas e Petiscos', texto: 'As entradas incluem caldeirado de peixe, ceviche amazônico com limão e pimenta de cheiro, bolinho de tambaqui e tacacá servido em cuia, a tradicional sopa quente com jambu, camarão e tucupi.' },
      { titulo: 'Sobremesas Regionais', texto: 'Para encerrar, o restaurante oferece sobremesas feitas com frutas amazônicas: mousse de cupuaçu, sorvete de tucumã, pudim de açaí e torta de bacuri.' },
    ],
  },
  visita: {
    id: 'visita',
    label: 'Visite',
    titulo: 'Como Chegar e Reservar',
    texto: 'O Amazônico Peixaria Regional está localizado em um dos pontos mais charmosos de Manaus, no Largo de São Sebastião, a poucos passos do Teatro Amazonas e do centro histórico da cidade.',
    imagem: '/images/geral/amre-am6.jpg',
    subsecoes: [
      { titulo: 'Horários de Funcionamento', texto: 'O restaurante funciona de terça a domingo, das 11h30 às 15h (almoço) e das 18h às 23h (jantar). Às sextas e sábados, o jantar se estende até meia-noite com música ao vivo regional.' },
      { titulo: 'Como Chegar', texto: 'Localizado na Praça São Sebastião, no centro histórico de Manaus, o restaurante é facilmente acessível de táxi, aplicativo de transporte ou a pé do Teatro Amazonas.' },
      { titulo: 'Reservas', texto: 'Recomenda-se fazer reserva com antecedência, especialmente nos fins de semana. Reservas pelo telefone (92) 3234-5678 ou pelo Instagram @amazonicopeixaria.' },
      { titulo: 'Site Oficial', texto: 'Para mais informações sobre o cardápio, eventos e reservas, acesse o site oficial do restaurante.', link: 'http://www.amazonico.com.br' },
    ],
    recomendacoes: [
      {
        titulo: 'Atrações Próximas',
        itens: [
          { nome: 'Teatro Amazonas', nota: 4.9, contato: '(92) 3622-1880', site: 'https://www.teatroamazonas.com.br/' },
          { nome: 'Museu do Seringal', nota: 4.7, contato: '(92) 3633-3757', site: 'https://www.instagram.com/' },
          { nome: 'Palácio Rio Negro', nota: 4.6, contato: '(92) 3182-4450', site: 'https://www.instagram.com/' },
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
};

const HeaderCarousel = () => {
  const [imagemAtivaIndex, setImagemAtivaIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setImagemAtivaIndex(prev => (prev + 1) % carouselImages.length), 5000);
    return () => clearTimeout(timer);
  }, [imagemAtivaIndex]);

  return (
    <header className="ap-header">
      {carouselImages.map((img, index) => (
        <img key={img} src={img} alt="Amazônico Peixaria Regional"
          className={`ap-header-carousel-image ${index === imagemAtivaIndex ? 'active' : ''}`} />
      ))}
      <div className="ap-header-text">
        <h1>Amazônico Peixaria Regional</h1>
        <p style={{ textAlign: 'center', margin: '0 auto' }}>Os sabores autênticos da Amazônia no coração de Manaus.</p>
      </div>
    </header>
  );
};

const ConteudoAba = ({ secao }) => (
  <section className="ap-section">
    <div className="ap-text-image-split">
      <div className="ap-text">
        <h2>{secao.titulo}</h2>
        <p>{secao.texto}</p>
        {secao.lista && (
          <ul className="ap-facts-list">
            {secao.lista.map((item, i) => (
              <li key={i}><strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>
            ))}
          </ul>
        )}
        {secao.subsecoes && (
          <div className="ap-subsecoes">
            {secao.subsecoes.map((sub, i) => (
              <div key={i} className="ap-subsecao-item">
                <h3>{sub.titulo}</h3>
                <p>{sub.texto}</p>
                {sub.link && (
                  <a href={sub.link} target="_blank" rel="noopener noreferrer" style={{ color: '#66BB6A', fontWeight: '700', wordBreak: 'break-all' }}>{sub.link}</a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="ap-image-wrapper">
        <img src={secao.imagem} alt={secao.alt} className="ap-image" />
        {secao.id === 'cardapio' && (
          <>
            <img src="/images/geral/amre-am4.jpg" alt="Amazônico Peixaria Regional" className="ap-image" />
            <img src="/images/geral/amre-am5.jpg" alt="Amazônico Peixaria Regional" className="ap-image" />
          </>
        )}
        {secao.id === 'visita' && (
          <>
            <img src="/images/geral/amre-am7.jpg" alt="Amazônico Peixaria Regional" className="ap-image" />
            <img src="/images/geral/amre-am8.jpg" alt="Amazônico Peixaria Regional" className="ap-image" />
          </>
        )}
      </div>
    </div>

    {secao.recomendacoes && (
      <div className="ap-recomendacoes-container">
        {secao.recomendacoes.map((rec, i) => (
          <div key={i} className="ap-recomendacao-categoria">
            <h3>{rec.titulo}</h3>
            <div className="ap-recomendacao-cards">
              {rec.itens.map((item, j) => (
                <div key={j} className="ap-recomendacao-card">
                  <div className="ap-card-header">
                    <a href={item.site} target="_blank" rel="noopener noreferrer" className="ap-card-nome">{item.nome}</a>
                    <span className="ap-card-nota">{item.nota} ★</span>
                  </div>
                  <span className="ap-card-contato">{item.contato}</span>
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
  <section className="ap-galeria-container">
    <h2>Fotos</h2>
    <div className="ap-galeria-grid">
      {galleryImages.map((img, i) => (
        <div key={i} className="ap-galeria-item">
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
  </section>
);

const AmazonicoPeixaria = () => {
  const [abaAtiva, setAbaAtiva] = useState('sobre');
  const navigate = useNavigate();

  return (
    <div className="ap-container">
      <div style={{ position: 'relative' }}>
        <HeaderCarousel />
        <button onClick={() => navigate('/destinos-amazonas')} style={{ position: 'absolute', top: '2rem', left: '2rem', zIndex: 10, background: 'rgba(255,255,255,0.2)', border: '2px solid white', color: 'white', padding: '0.7rem 1.5rem', borderRadius: '50px', cursor: 'pointer', fontWeight: '600', fontSize: '0.95rem' }}>
          ← Voltar
        </button>
      </div>
      <div className="ap-content-wrapper">
        <nav className="ap-nav">
          {Object.keys(secoes).map(key => (
            <button key={key} onClick={() => setAbaAtiva(key)} className={abaAtiva === key ? 'active' : ''}>
              {secoes[key].label}
            </button>
          ))}
        </nav>
        <main className="ap-main">
          {abaAtiva === 'fotos' ? <Galeria /> : <ConteudoAba secao={secoes[abaAtiva]} />}
        </main>
      </div>
    </div>
  );
};

export default AmazonicoPeixaria;
