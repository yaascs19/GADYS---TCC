import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../sudeste/SudestePontoDetalhe.css';

const carouselImages = ['/images/monumentos/ouro.jpeg', '/images/monumentos/independencia.webp'];
const galeriaImages = [
  { src: '/images/monumentos/ouro.jpeg', alt: 'Ouro Preto centro histórico' },
  { src: '/images/monumentos/independencia.webp', alt: 'Igreja de Ouro Preto' },
  { src: '/images/monumentos/pala.jpeg', alt: 'Casarões coloniais' },
];

const secoes = {
  sobre: {
    label: 'Sobre',
    titulo: 'A Capital do Ouro e da Inconfidência',
    texto: 'Ouro Preto foi a capital de Minas Gerais durante o ciclo do ouro no século XVIII e o epicentro da Inconfidência Mineira, o primeiro movimento de independência do Brasil. Tombada como Patrimônio Mundial da UNESCO em 1980, a cidade preserva mais de 20 igrejas barrocas, museus e casarões coloniais que contam a história do Brasil colonial.',
    imagem: '/images/monumentos/ouro.jpeg',
    alt: 'Vista panorâmica de Ouro Preto',
    lista: ['UNESCO: Patrimônio Mundial desde 1980.', 'Altitude: 1.179 metros acima do nível do mar.', 'Destaque: Igreja de São Francisco de Assis, obra-prima de Aleijadinho.'],
  },
  experiencias: {
    label: 'Experiências',
    titulo: 'O Que Explorar em Ouro Preto',
    texto: 'Ouro Preto é um museu a céu aberto. Cada rua de paralelepípedo, cada igreja e cada mirante conta uma história fascinante.',
    imagem: '/images/monumentos/independencia.webp',
    alt: 'Igreja barroca de Ouro Preto',
    subsecoes: [
      { titulo: 'Igrejas Barrocas', texto: 'As 13 igrejas de Ouro Preto são obras-primas do barroco. A Igreja de São Francisco de Assis, com esculturas de Aleijadinho, e a Igreja Nossa Senhora do Pilar, com 400 kg de ouro em seu interior, são as mais impressionantes.' },
      { titulo: 'Museu da Inconfidência', texto: 'Instalado no antigo Palácio Municipal, o museu preserva documentos, objetos e a história da Inconfidência Mineira de 1789, incluindo os restos mortais de Tiradentes.' },
      { titulo: 'Minas de Ouro', texto: 'A Mina do Chico Rei e a Mina da Passagem oferecem visitas guiadas ao interior das minas de ouro do século XVIII, com trilhos, galerias e lagos subterrâneos de tirar o fôlego.' },
    ],
  },
  visita: {
    label: 'Visite',
    titulo: 'Como Visitar Ouro Preto',
    texto: 'Ouro Preto é facilmente acessível de Belo Horizonte e pode ser explorada a pé em 2 a 3 dias.',
    imagem: '/images/monumentos/pala.jpeg',
    alt: 'Ruas de paralelepípedo de Ouro Preto',
    subsecoes: [
      { titulo: 'Como Chegar', texto: 'De Belo Horizonte, há ônibus regulares (2h) e excursões diárias. De carro, siga pela BR-356. O centro histórico é melhor explorado a pé — use calçados confortáveis pelas ruas íngremes.' },
      { titulo: 'Melhor Época', texto: 'O Carnaval de Ouro Preto é um dos mais tradicionais do Brasil. A Semana Santa, com procissões históricas, é outro momento especial. O inverno (junho-agosto) tem clima ameno e menos chuvas.' },
    ],
    recomendacoes: [
      { titulo: 'Onde Comer', itens: [{ nome: 'Restaurante Chafariz', nota: 4.8, contato: '(31) 3551-2828', site: 'https://www.instagram.com/' }, { nome: 'Casa do Ouvidor', nota: 4.7, contato: '(31) 3551-3141', site: 'https://www.instagram.com/' }] },
      { titulo: 'Onde Ficar', itens: [{ nome: 'Pousada do Mondego', nota: 4.8, contato: '(31) 3551-2040', site: 'https://www.pousadadomondego.com.br/' }, { nome: 'Hotel Solar do Rosário', nota: 4.7, contato: '(31) 3551-5200', site: 'https://www.instagram.com/' }] },
    ],
  },
  fotos: { label: 'Fotos' },
};

const OuroPreto = () => {
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
        {carouselImages.map((img, i) => (<img key={img} src={img} alt="Ouro Preto" className={`sudeste-ponto-header-img ${i === ativo ? 'active' : ''}`} />))}
        <button onClick={() => navigate('/mg-pontos')} style={{ position: 'absolute', top: '2rem', left: '2rem', zIndex: 10, background: 'rgba(255,255,255,0.2)', border: '2px solid white', color: 'white', padding: '0.7rem 1.5rem', borderRadius: '50px', cursor: 'pointer', fontWeight: '600' }}>← Voltar</button>
        <div className="sudeste-ponto-header-text"><h1>Ouro Preto</h1><p>A joia do barroco brasileiro — Patrimônio Mundial da UNESCO.</p></div>
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
      <footer className="sudeste-ponto-footer"><p>GADYS © 2025 — Ouro Preto</p></footer>
    </div>
  );
};

export default OuroPreto;
