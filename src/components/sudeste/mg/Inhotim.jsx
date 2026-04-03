import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../sudeste/SudestePontoDetalhe.css';

const carouselImages = ['/images/monumentos/independencia.webp', '/images/natureza/chapada.jpeg'];
const galeriaImages = [
  { src: '/images/monumentos/independencia.webp', alt: 'Inhotim arte contemporânea' },
  { src: '/images/natureza/chapada.jpeg', alt: 'Jardins do Inhotim' },
  { src: '/images/monumentos/ouro.jpeg', alt: 'Galeria do Inhotim' },
];

const secoes = {
  sobre: {
    label: 'Sobre',
    titulo: 'Arte e Natureza em Perfeita Harmonia',
    texto: 'O Instituto Inhotim é uma experiência única no mundo: um museu de arte contemporânea integrado a um jardim botânico de 140 hectares. Fundado pelo empresário Bernardo Paz em 2006, o instituto reúne obras de mais de 200 artistas de 40 países, incluindo nomes como Cildo Meireles, Tunga, Hélio Oiticica e Yayoi Kusama.',
    imagem: '/images/monumentos/independencia.webp',
    alt: 'Vista aérea do Instituto Inhotim',
    lista: ['Área: 140 hectares de jardins e galerias.', 'Acervo: Obras de mais de 200 artistas de 40 países.', 'Jardim Botânico: Mais de 4.500 espécies de plantas.'],
  },
  experiencias: {
    label: 'Experiências',
    titulo: 'Uma Jornada pela Arte Contemporânea',
    texto: 'Inhotim oferece uma experiência imersiva única, onde arte, natureza e arquitetura se fundem em um ambiente de rara beleza.',
    imagem: '/images/natureza/chapada.jpeg',
    alt: 'Galeria de arte no Inhotim',
    subsecoes: [
      { titulo: 'Galerias Permanentes', texto: 'As galerias do Inhotim abrigam instalações permanentes de artistas como Cildo Meireles, com a icônica "Desvio para o Vermelho", e Tunga, com obras que desafiam a percepção do espaço.' },
      { titulo: 'Jardim Botânico', texto: 'O jardim botânico do Inhotim é um dos mais importantes do Brasil, com coleções de palmeiras, bromélias, orquídeas e plantas tropicais raras. Os lagos e trilhas criam um ambiente de contemplação único.' },
      { titulo: 'Exposições Temporárias', texto: 'Além do acervo permanente, o Inhotim recebe exposições temporárias de artistas nacionais e internacionais ao longo do ano, tornando cada visita uma experiência diferente.' },
    ],
  },
  visita: {
    label: 'Visite',
    titulo: 'Como Visitar o Inhotim',
    texto: 'O Inhotim fica em Brumadinho, a 60 km de Belo Horizonte, e requer pelo menos um dia inteiro para ser explorado.',
    imagem: '/images/monumentos/ouro.jpeg',
    alt: 'Entrada do Instituto Inhotim',
    subsecoes: [
      { titulo: 'Horários e Ingressos', texto: 'Aberto de quarta a domingo, das 9h30 às 17h30. Ingressos a partir de R$ 50 (meia) e R$ 100 (inteira). Às quartas-feiras, a entrada é gratuita para moradores de Brumadinho.' },
      { titulo: 'Como Chegar', texto: 'De BH, há ônibus direto saindo da Rodoviária (1h30). De carro, siga pela BR-381 até Brumadinho. O instituto oferece estacionamento amplo e gratuito.' },
    ],
    recomendacoes: [
      { titulo: 'Onde Comer no Inhotim', itens: [{ nome: 'Restaurante Tamboril', nota: 4.8, contato: '(31) 3571-9700', site: 'https://www.inhotim.org.br/' }, { nome: 'Café das Artes', nota: 4.6, contato: '(31) 3571-9700', site: 'https://www.inhotim.org.br/' }] },
      { titulo: 'Onde Ficar', itens: [{ nome: 'Pousada Inhotim', nota: 4.9, contato: '(31) 3571-9700', site: 'https://www.inhotim.org.br/' }, { nome: 'Hotel Fazenda Brumadinho', nota: 4.6, contato: '(31) 3571-1234', site: 'https://www.instagram.com/' }] },
    ],
  },
  fotos: { label: 'Fotos' },
};

const Inhotim = () => {
  const navigate = useNavigate();
  const [abaAtiva, setAbaAtiva] = useState('sobre');
  const [ativo, setAtivo] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setAtivo(p => (p + 1) % carouselImages.length), 5000);
    return () => clearTimeout(t);
  }, [ativo]);

  const secao = secoes[abaAtiva];

  return (
    <div className="sudeste-ponto-container">
      <header className="sudeste-ponto-header">
        {carouselImages.map((img, i) => (<img key={img} src={img} alt="Inhotim" className={`sudeste-ponto-header-img ${i === ativo ? 'active' : ''}`} />))}
        <button onClick={() => navigate('/mg-pontos')} style={{ position: 'absolute', top: '2rem', left: '2rem', zIndex: 10, background: 'rgba(255,255,255,0.2)', border: '2px solid white', color: 'white', padding: '0.7rem 1.5rem', borderRadius: '50px', cursor: 'pointer', fontWeight: '600' }}>← Voltar</button>
        <div className="sudeste-ponto-header-text"><h1>Instituto Inhotim</h1><p>O maior museu de arte contemporânea a céu aberto do mundo.</p></div>
      </header>

      <div className="sudeste-ponto-content-wrapper">
        <nav className="sudeste-ponto-nav">
          {Object.keys(secoes).map(key => (<button key={key} onClick={() => setAbaAtiva(key)} className={abaAtiva === key ? 'active' : ''}>{secoes[key].label}</button>))}
        </nav>
        <main className="sudeste-ponto-main">
          {abaAtiva === 'fotos' ? (
            <section className="sudeste-ponto-galeria"><h2>Fotos</h2><div className="sudeste-ponto-galeria-grid">{galeriaImages.map((img, i) => (<div key={i} className="sudeste-ponto-galeria-item"><img src={img.src} alt={img.alt} /></div>))}</div></section>
          ) : (
            <section className="sudeste-ponto-section">
              <div className="sudeste-ponto-split">
                <div className="sudeste-ponto-text">
                  <h2>{secao.titulo}</h2>
                  <p>{secao.texto}</p>
                  {secao.lista && (<ul className="sudeste-ponto-facts">{secao.lista.map((item, i) => (<li key={i}><strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>))}</ul>)}
                  {secao.subsecoes && (<div className="sudeste-ponto-subsecoes">{secao.subsecoes.map((sub, i) => (<div key={i} className="sudeste-ponto-subsecao"><h3>{sub.titulo}</h3><p>{sub.texto}</p></div>))}</div>)}
                </div>
                <div className="sudeste-ponto-img-wrapper"><img src={secao.imagem} alt={secao.alt} className="sudeste-ponto-img" /></div>
              </div>
              {secao.recomendacoes && (
                <div className="sudeste-ponto-rec-container">
                  {secao.recomendacoes.map((rec, i) => (
                    <div key={i} className="sudeste-ponto-rec-categoria">
                      <h3>{rec.titulo}</h3>
                      <div className="sudeste-ponto-rec-cards">
                        {rec.itens.map((item, j) => (
                          <div key={j} className="sudeste-ponto-rec-card">
                            <div className="sudeste-ponto-rec-card-header">
                              <a href={item.site} target="_blank" rel="noopener noreferrer" className="sudeste-ponto-rec-nome">{item.nome}</a>
                              <span className="sudeste-ponto-rec-nota">{item.nota} ★</span>
                            </div>
                            <span className="sudeste-ponto-rec-contato">{item.contato}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}
        </main>
      </div>
      <footer className="sudeste-ponto-footer"><p>GADYS © 2025 — Instituto Inhotim</p></footer>
    </div>
  );
};

export default Inhotim;
