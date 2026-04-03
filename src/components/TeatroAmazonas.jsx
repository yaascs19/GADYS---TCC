import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TeatroAmazonas.css';

// --- DADOS ---
const carouselImages = [
  '/images/geral/ta-am.jpg',
  '/images/geral/tea-am1.jpg',
];

const galleryImages = [
  { src: '/images/geral/ta-am.jpg', alt: 'Teatro Amazonas - fachada' },
  { src: '/images/geral/tea-am1.jpg', alt: 'Teatro Amazonas' },
  { src: '/images/geral/tea-am3.jpg', alt: 'Teatro Amazonas' },
  { src: '/images/geral/tea-am4.jpg', alt: 'Teatro Amazonas - interior' },
  { src: '/images/geral/tea-am5.jpg', alt: 'Teatro Amazonas' },
  { src: '/images/geral/tea-am8.jpg', alt: 'Teatro Amazonas' },
  { src: '/images/geral/tea-am9.jpg', alt: 'Teatro Amazonas' },
  { src: '/images/geral/tea-am10.jpg', alt: 'Teatro Amazonas' },
  { src: '/images/geral/tea-am11.jpg', alt: 'Teatro Amazonas' },
];

const secoes = {
  historia: {
    id: 'historia',
    label: 'A História',
    titulo: 'Um Palácio Erguido na Selva',
    texto: 'No coração de Manaus, onde a floresta encontra a cidade, ergue-se uma das obras mais audaciosas da história brasileira. O Teatro Amazonas foi construído entre 1884 e 1896, no auge do ciclo da borracha, quando a Amazônia era o centro do mundo. Seus materiais vieram da Europa: mármore de Carrara, ferro da Escócia, cerâmica de Lisboa. Uma declaração de riqueza e poder que desafiou a lógica de seu tempo.',
    imagem: '/images/geral/tea-am3.jpg',
    lista: [
      'Construção: Entre 1884 e 1896, durante o ciclo da borracha.',
      'Cúpula: Revestida com 36.000 telhas nas cores da bandeira do Brasil.',
      'Materiais: Importados da Europa — mármore, ferro, cerâmica e cristal.',
    ],
  },
  arquitetura: {
    id: 'arquitetura',
    label: 'Arquitetura',
    titulo: 'Detalhes que Contam uma Época',
    texto: 'Cada centímetro do Teatro Amazonas é uma obra de arte. A cúpula, revestida com 36.000 telhas de cerâmica nas cores verde, ouro e azul da bandeira brasileira, domina o horizonte de Manaus. O interior revela um salão nobre com capacidade para 701 pessoas, decorado com pinturas alegóricas ao teto, lustres de cristal Murano e cadeiras de madeira nobre. O palco principal, com 859 m², já recebeu as maiores companhias de ópera do mundo.',
    imagem: '/images/geral/tea-am4.jpg',
    alt: 'Interior luxuoso do Teatro Amazonas com lustre de cristal',
    subsecoes: [
      {
        titulo: 'A Cúpula Icônica',
        texto: 'A cúpula é o símbolo máximo do teatro. Suas 36.000 telhas de cerâmica portuguesa formam um mosaico nas cores da bandeira brasileira, visível de vários pontos da cidade. À noite, iluminada, ela transforma o centro histórico de Manaus em um cenário de conto de fadas.',
      },
      {
        titulo: 'O Salão Nobre',
        texto: 'O coração do teatro é seu salão principal, decorado com pinturas do artista italiano Domenico De Angelis. O teto retrata a lenda de Iara, a sereia amazônica, em uma fusão única entre a cultura europeia e a mitologia local. Os lustres de cristal Murano completam o espetáculo visual.',
      },
      {
        titulo: 'O Piso Flutuante',
        texto: 'Uma das curiosidades mais fascinantes é o piso da plateia, construído com madeira de lei sobre uma estrutura que permite uma leve flutuação. Isso garante uma acústica excepcional, tornando o Teatro Amazonas um dos mais acusticamente perfeitos do mundo.',
      },
    ],
  },
  visita: {
    id: 'visita',
    label: 'Visite',
    titulo: 'Viva a Experiência',
    texto: 'Visitar o Teatro Amazonas é mergulhar em uma das histórias mais fascinantes do Brasil. Seja em uma visita guiada ou assistindo a um espetáculo ao vivo, a experiência é inesquecível.',
    imagem: '/images/geral/tea-am9.jpg',
    subsecoes: [
      {
        titulo: 'Visitas Guiadas',
        texto: 'As visitas guiadas acontecem de terça a domingo, das 9h às 17h. Com duração de aproximadamente 45 minutos, os guias conduzem os visitantes pelos bastidores, camarins, salão nobre e palco. O ingresso custa R$ 50 (inteira) e R$ 25 (meia). Crianças até 5 anos não pagam.',
      },
      {
        titulo: 'Espetáculos e Temporadas',
        texto: 'O teatro mantém uma programação cultural intensa ao longo do ano, com óperas, balés, concertos sinfônicos e peças teatrais. O Festival Amazonas de Ópera, realizado anualmente em abril e maio, é o maior evento de ópera da América Latina e atrai artistas de todo o mundo.',
      },
      {
        titulo: 'Como Chegar',
        texto: 'O Teatro Amazonas está localizado na Praça São Sebastião, no centro histórico de Manaus. É facilmente acessível de táxi, aplicativo de transporte ou ônibus. Recomenda-se chegar com antecedência para espetáculos, pois o estacionamento na região é limitado.',
      },
    ],
    recomendacoes: [
      {
        titulo: 'Restaurantes Próximos',
        itens: [
          { nome: 'Banzeiro Restaurante', nota: 4.8, contato: '(92) 3234-1621', site: 'https://www.restaurantebanzeiro.com.br/' },
          { nome: 'Caxiri Restaurante', nota: 4.6, contato: '(92) 3307-1052', site: 'https://www.instagram.com/caxirirestaurante/' },
          { nome: 'Choupana Restaurante', nota: 4.7, contato: '(92) 3633-2878', site: 'https://www.choupanarestaurante.com.br/' },
        ],
      },
      {
        titulo: 'Hotéis Recomendados',
        itens: [
          { nome: 'Juma Ópera Hotel', nota: 4.8, contato: '(92) 3212-3300', site: 'https://www.jumaopera.com.br/' },
          { nome: 'Hotel Intercity Manaus', nota: 4.5, contato: '(92) 3303-5000', site: 'https://www.intercityhoteis.com.br/' },
          { nome: 'Blue Tree Premium Manaus', nota: 4.5, contato: '(92) 3303-2000', site: 'https://www.bluetree.com.br/' },
        ],
      },
    ],
  },
  fotos: {
    id: 'fotos',
    label: 'Fotos',
  },
};

// --- COMPONENTES ---

const HeaderCarousel = () => {
  const [imagemAtivaIndex, setImagemAtivaIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImagemAtivaIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [imagemAtivaIndex]);

  return (
    <header className="ta-header">
      {carouselImages.map((img, index) => (
        <img
          key={img}
          src={img}
          alt="Teatro Amazonas"
          className={`ta-header-carousel-image ${index === imagemAtivaIndex ? 'active' : ''}`}
        />
      ))}
      <div className="ta-header-text">
        <h1>Teatro Amazonas</h1>
        <p>Um palácio de arte erguido no coração da floresta.</p>
      </div>
    </header>
  );
};

const ConteudoAba = ({ secao }) => (
  <section className="ta-section">
    <div className="ta-text-image-split">
      <div className="ta-text">
        <h2>{secao.titulo}</h2>
        <p>{secao.texto}</p>
        {secao.lista && (
          <ul className="ta-facts-list">
            {secao.lista.map((item, i) => (
              <li key={i}><strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>
            ))}
          </ul>
        )}
        {secao.subsecoes && (
          <div className="ta-subsecoes">
            {secao.subsecoes.map((sub, i) => (
              <div key={i} className="ta-subsecao-item">
                <h3>{sub.titulo}</h3>
                <p>{sub.texto}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="ta-image-wrapper">
        <img src={secao.imagem} alt={secao.alt} className="ta-image" />
        {secao.id === 'arquitetura' && (
          <>
            <img src="/images/geral/tea-am5.jpg" alt="Teatro Amazonas" className="ta-image" style={{ marginTop: '1rem' }} />
            <img src="/images/geral/tea-am8.jpg" alt="Teatro Amazonas" className="ta-image" style={{ marginTop: '1rem' }} />
          </>
        )}
        {secao.id === 'visita' && (
          <>
            <img src="/images/geral/tea-am10.jpg" alt="Teatro Amazonas" className="ta-image" style={{ marginTop: '1rem' }} />
            <img src="/images/geral/tea-am11.jpg" alt="Teatro Amazonas" className="ta-image" style={{ marginTop: '1rem' }} />
          </>
        )}
      </div>
    </div>

    {secao.recomendacoes && (
      <div className="ta-recomendacoes-container">
        {secao.recomendacoes.map((rec, i) => (
          <div key={i} className="ta-recomendacao-categoria">
            <h3>{rec.titulo}</h3>
            <div className="ta-recomendacao-cards">
              {rec.itens.map((item, j) => (
                <div key={j} className="ta-recomendacao-card">
                  <div className="ta-card-header">
                    <a href={item.site} target="_blank" rel="noopener noreferrer" className="ta-card-nome">
                      {item.nome}
                    </a>
                    <span className="ta-card-nota">{item.nota} ★</span>
                  </div>
                  <span className="ta-card-contato">{item.contato}</span>
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
  <section className="ta-galeria-container">
    <h2>Fotos</h2>
    <div className="ta-galeria-grid">
      {galleryImages.map((img, i) => (
        <div key={i} className="ta-galeria-item">
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
  </section>
);

const TeatroAmazonas = () => {
  const [abaAtiva, setAbaAtiva] = useState('historia');
  const navigate = useNavigate();

  return (
    <div className="ta-container">
      <div style={{ position: 'relative' }}>
        <HeaderCarousel />
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
      <div className="ta-content-wrapper">
        <nav className="ta-nav">
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
        <main className="ta-main">
          {abaAtiva === 'fotos' ? <Galeria /> : <ConteudoAba secao={secoes[abaAtiva]} />}
        </main>
      </div>
    </div>
  );
};

export default TeatroAmazonas;
