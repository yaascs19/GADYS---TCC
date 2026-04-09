import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EncontroAguas-Visual.css';

const API_URL = import.meta.env.VITE_API_URL;

// --- DADOS HARDCODED (fallback) ---
const DADOS_FALLBACK = {
  carouselImages: ['/images/geral/en1-Am.jpg', '/images/geral/en2-Am.jpg'],
  galleryImages: [
    { src: '/images/geral/en6-Am.jpg' }, { src: '/images/geral/en7-Am.webp' },
    { src: '/images/geral/en8-Am.webp' }, { src: '/images/geral/en5-Am.jpg' },
    { src: '/images/geral/en4-Am.webp' }, { src: '/images/geral/en3-Am.jpg' },
  ],
  secoes: {
    fenomeno: {
      label: 'O Fenômeno',
      titulo: 'Um Balé de Águas no Coração do Mundo',
      texto: 'Imagine estar no ponto exato onde dois gigantes se encontram. De um lado, o Rio Negro, com suas águas escuras e quentes. Do outro, o Rio Solimões, barrento e frio. Por mais de seis quilômetros, eles correm juntos, mas se recusam a misturar, criando uma linha divisória que desafia a lógica. Este não é apenas um fenômeno, é a força da Amazônia pulsando diante dos seus olhos.',
      imagem: '/images/geral/en9-Am.webp',
      lista: [
        'Rio Negro: Quente (~28°C), lento (~2 km/h) e misteriosamente escuro.',
        'Rio Solimões: Frio (~22°C), rápido (~6 km/h) e imponentemente barrento.',
      ],
    },
    experiencias: {
      label: 'Experiências Únicas',
      titulo: 'Sinta a Magia com Suas Próprias Mãos',
      texto: 'Esta não é uma jornada para apenas observar. Navegue sobre a linha divisória e sinta a mudança abrupta de temperatura ao tocar as águas. Veja botos cor-de-rosa e tucuxis, os guardiões do rio, dançando ao redor do seu barco. A experiência vai além do visual: é sentir a energia do lugar que dá origem ao colossal Rio Amazonas, o maior do planeta. Uma memória que você levará para sempre.',
      imagem: '/images/geral/en11-Am.jpg',
    },
    visita: {
      label: 'Visite',
      titulo: 'Sua Jornada Começa Agora',
      texto: 'Transformar o sonho de conhecer o Encontro das Águas em realidade é mais fácil do que você imagina. Os passeios partem diariamente de Manaus, e há uma opção perfeita para cada estilo de viajante.',
      imagem: '/images/geral/en12-Am.jpg',
      imagensExtras: ['/images/geral/en13-Am.jpg', '/images/geral/en14-Am.jpg'],
      subsecoes: [
        { titulo: 'Como Chegar ao Coração da Amazônia', texto: 'O fenômeno está a apenas 10 km de Manaus. Agências de turismo locais oferecem passeios de lancha para uma aventura rápida e dinâmica, ou em barcos regionais para uma imersão completa, que podem incluir visitas a comunidades flutuantes e trilhas na selva.' },
        { titulo: 'Sua Aventura com o Melhor Custo-Benefício', texto: 'Com opções que variam de R$ 90 a R$ 300 por pessoa, a experiência é acessível. O valor depende da duração e das atividades inclusas. A maioria dos barcos parte pela manhã (9h), retornando no fim da tarde. Reserve com antecedência, especialmente na alta temporada, para garantir seu lugar!' },
        { titulo: 'Prepare-se para o Dia Perfeito', texto: 'O essencial: protetor solar, chapéu, óculos de sol e repelente. Roupas leves são suas melhores amigas. Não se esqueça da câmera para capturar tudo e, se possível, leve dinheiro em espécie para adquirir artesanato local e apoiar as comunidades ribeirinhas.' },
      ],
      recomendacoes: [
        { titulo: 'Agências Confiáveis para sua Aventura', itens: [{ nome: 'Amazon Tour', nota: 4.8, contato: '(92) 9999-8888', site: 'https://amazontourmanaus.com/' }, { nome: 'Manaus Jungle Tours', nota: 4.7, contato: '(92) 9888-7777', site: 'https://www.manausjungletours.com/' }, { nome: 'Iguana Turismo', nota: 4.9, contato: '(92) 9777-6666', site: 'https://www.iguanaturismo.com.br/' }] },
        { titulo: 'Onde Recarregar as Energias', itens: [{ nome: 'Hotel Villa Amazônia', nota: 4.6, contato: '(92) 3306-4200', site: 'https://villaamazonia.com/pt/' }, { nome: 'Juma Ópera Hotel', nota: 4.8, contato: '(92) 3212-3300', site: 'https://www.jumaopera.com.br/' }, { nome: 'Blue Tree Premium Manaus', nota: 4.5, contato: '(92) 3303-2000', site: 'https://www.bluetree.com.br/hotel/blue-tree-premium-manaus/' }] },
        { titulo: 'Hospedagem com Charme e Conforto', itens: [{ nome: 'Pousada Juma Lodge', nota: 4.9, contato: '(92) 9911-5544', site: 'https://www.jumalodge.com.br/' }, { nome: 'Anavilhanas Jungle Lodge', nota: 4.8, contato: '(92) 3365-1180', site: 'https://www.anavilhanaslodge.com/' }, { nome: 'Pousada do Aconchego', nota: 4.7, contato: '(92) 3622-4232', site: 'https://pousadaaconchegopg.com.br/pt-br/' }] },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

// --- COMPONENTES ---
const HeaderCarousel = ({ images }) => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setIdx(i => (i + 1) % images.length), 5000);
    return () => clearTimeout(t);
  }, [idx, images.length]);
  return (
    <header className="encontro-header">
      {images.map((img, i) => (
        <img key={i} src={img} alt="Encontro das Águas" className={`header-carousel-image ${i === idx ? 'active' : ''}`} />
      ))}
      <div className="header-text-content">
        <h1>O Encontro das Águas</h1>
        <p>Onde dois rios se encontram, mas não se misturam.</p>
      </div>
    </header>
  );
};

const ConteudoAba = ({ secao }) => (
  <section className="encontro-section">
    <div className="encontro-text-image-split">
      <div className="encontro-text">
        <h2>{secao.titulo}</h2>
        <p>{secao.texto}</p>
        {secao.lista && (
          <ul className="encontro-facts-list">
            {secao.lista.map((item, i) => (
              <li key={i}><strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>
            ))}
          </ul>
        )}
        {secao.subsecoes && (
          <div className="visita-subsecoes">
            {secao.subsecoes.map((sub, i) => (
              <div key={i} className="visita-subsecao-item">
                <h3>{sub.titulo}</h3>
                <p>{sub.texto}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="encontro-image-wrapper">
        {secao.imagem && <img src={secao.imagem} alt={secao.titulo} className="encontro-image" />}
        {secao.imagensExtras && secao.imagensExtras.map((img, i) => (
          <img key={i} src={img} alt={secao.titulo} className="encontro-image-extra" />
        ))}
      </div>
    </div>
    {secao.recomendacoes && (
      <div className="recomendacoes-container">
        {secao.recomendacoes.map((rec, i) => (
          <div key={i} className="recomendacao-categoria">
            <h3>{rec.titulo}</h3>
            <div className="recomendacao-cards-container">
              {rec.itens.map((item, j) => (
                <div key={j} className="recomendacao-card">
                  <div className="card-header">
                    <a href={item.site} target="_blank" rel="noopener noreferrer" className="nome">{item.nome}</a>
                    <span className="nota">{item.nota} ★</span>
                  </div>
                  <span className="contato">{item.contato}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )}
  </section>
);

const GaleriaDeImagens = ({ images }) => (
  <section className="galeria-container">
    <h2>Fotos</h2>
    <div className="galeria-grid">
      {images.map((img, i) => (
        <div key={i} className="galeria-item">
          <img src={typeof img === 'string' ? img : img.src} alt="Encontro das Águas" />
        </div>
      ))}
    </div>
  </section>
);

const EncontroDasAguas = () => {
  const [abaAtiva, setAbaAtiva] = useState('fenomeno');
  const [dados, setDados] = useState(DADOS_FALLBACK);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_URL}/api/locais/2`)
      .then(r => r.json())
      .then(local => {
        if (!local?.informacoesAdicionais) return;
        try {
          const parsed = JSON.parse(local.informacoesAdicionais);
          if (parsed.secoes) setDados(parsed);
        } catch { /* usa fallback */ }
      })
      .catch(() => { /* usa fallback */ });
  }, []);

  const { carouselImages, galleryImages, secoes } = dados;

  return (
    <div className="encontro-visual-container">
      <div style={{ position: 'relative' }}>
        <HeaderCarousel images={carouselImages} />
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

      <div className="page-content-wrapper">
        <nav className="encontro-nav">
          {Object.keys(secoes).map(key => (
            <button key={key} onClick={() => setAbaAtiva(key)} className={abaAtiva === key ? 'active' : ''}>
              {secoes[key].label}
            </button>
          ))}
        </nav>

        <main className="encontro-main-content">
          {abaAtiva === 'fotos'
            ? <GaleriaDeImagens images={galleryImages} />
            : <ConteudoAba secao={secoes[abaAtiva]} />
          }
        </main>
      </div>
    </div>
  );
};

export default EncontroDasAguas;
