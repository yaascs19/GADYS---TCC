import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Torres',
  subtitulo: 'As praias mais bonitas do Sul — basalto, surf e o Festival Internacional de Balonismo.',
  carouselImages: ['/images/geral/rs-torres.jpg', '/images/geral/rs3.jpg'],
  galeriaImages: [
    { src: '/images/geral/rs-torres.jpg', alt: 'Torres - RS' },
    { src: '/images/geral/rs3.jpg', alt: 'Praia Grande de Torres' },
    { src: '/images/geral/rs4.jpg', alt: 'Basalto de Torres' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Litoral Gaúcho',
      texto: 'Torres é o principal destino de praia do Rio Grande do Sul. A cidade é famosa pelas formações rochosas de basalto que emergem do mar — as "torres" que deram nome à cidade — e pelas praias de areia fina e mar agitado, perfeitas para o surf. O Festival Internacional de Balonismo, realizado em abril, é um dos maiores do mundo e colore o céu de Torres com centenas de balões.',
      imagem: '/images/geral/rs-torres.jpg',
      alt: 'Formações de basalto em Torres',
      lista: [
        'Localização: Litoral norte do RS, a 200 km de Porto Alegre.',
        'Destaque: Festival Internacional de Balonismo — um dos maiores do mundo.',
        'Natureza: Formações de basalto únicas no litoral brasileiro.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer em Torres',
      texto: 'Torres combina natureza, aventura e cultura em um destino completo para todas as idades.',
      imagem: '/images/geral/rs3.jpg',
      alt: 'Praia de Torres',
      subsecoes: [
        {
          titulo: 'Festival Internacional de Balonismo',
          texto: 'Realizado em abril, o festival reúne centenas de balões de ar quente de todo o mundo. O espetáculo visual é único — balões iluminados à noite e voos ao amanhecer.',
        },
        {
          titulo: 'Parque Estadual de Itapeva',
          texto: 'O parque protege uma das últimas restingas preservadas do RS. Trilhas entre dunas, lagoas e mata nativa, com vista para o mar e para a Lagoa de Itapeva.',
        },
        {
          titulo: 'Surf e Esportes Aquáticos',
          texto: 'As ondas de Torres são famosas entre os surfistas gaúchos. A Praia Grande e a Praia do Meio são os melhores pontos. Escolas de surf atendem iniciantes.',
        },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Hospedar',
      texto: 'Torres fica a 200 km de Porto Alegre, com acesso pela BR-101.',
      imagem: '/images/geral/rs-torres.jpg',
      alt: 'Torres - RS',
      subsecoes: [
        {
          titulo: 'Como Chegar',
          texto: 'De carro pela BR-101 a partir de Porto Alegre (aprox. 2h30). De ônibus com saídas frequentes da rodoviária de Porto Alegre.',
        },
        {
          titulo: 'Melhor Época',
          texto: 'Dezembro a março para praias e verão. Abril para o Festival de Balonismo. Junho a agosto para o inverno frio e paisagens dramáticas.',
        },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Farol', nota: 4.7, contato: '(51) 3664-1234', site: 'https://www.instagram.com/restaurantefarol.torres/' },
            { nome: 'Frutos do Mar Torres', nota: 4.6, contato: '(51) 3664-5678', site: 'https://www.instagram.com/frutosdomar.torres/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Hotel Farol de Torres', nota: 4.7, contato: '(51) 3664-2222', site: 'https://www.hotelfaroldetorres.com.br/' },
            { nome: 'Pousada Basalto', nota: 4.6, contato: '(51) 3664-3333', site: 'https://www.pousadabasalto.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const Torres = () => <CearaPontoBase config={config} />;
export default Torres;
