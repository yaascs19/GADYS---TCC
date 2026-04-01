import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Canoa Quebrada',
  subtitulo: 'Falésias vermelhas, areia branca e vida noturna animada.',
  carouselImages: ['/images/geral/Ceara2.webp', '/images/geral/Ceara3.jpg'],
  galeriaImages: [
    { src: '/images/geral/Ceara2.webp', alt: 'Canoa Quebrada falésias' },
    { src: '/images/geral/Ceara3.jpg', alt: 'Canoa Quebrada praia' },
    { src: '/images/geral/Ceara1.webp', alt: 'Canoa Quebrada vista' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'As Falésias Vermelhas do Ceará',
      texto: 'Canoa Quebrada é uma das praias mais famosas do Nordeste brasileiro. Suas imponentes falésias de arenito vermelho contrastam com a areia branca e o mar azul-turquesa, criando uma paisagem de tirar o fôlego. A vila, que já foi um vilarejo de pescadores, hoje é um destino cosmopolita com restaurantes, bares e uma vida noturna vibrante na famosa Broadway.',
      imagem: '/images/geral/Ceara2.webp',
      alt: 'Falésias vermelhas de Canoa Quebrada',
      lista: [
        'Localização: Aracati, a 164 km de Fortaleza.',
        'Símbolo: A lua e a estrela esculpidas nas falésias.',
        'Destaque: A Broadway, rua principal com bares e restaurantes.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer em Canoa Quebrada',
      texto: 'De passeios de buggy pelas falésias a noites animadas na Broadway, Canoa Quebrada tem muito a oferecer para todos os gostos.',
      imagem: '/images/geral/Ceara3.jpg',
      alt: 'Passeio de buggy em Canoa Quebrada',
      subsecoes: [
        { titulo: 'Passeio de Buggy', texto: 'Os buggys percorrem as falésias e praias vizinhas, como Majorlândia e Quixaba. É a forma mais emocionante de explorar a região e contemplar as formações rochosas de perto.' },
        { titulo: 'A Broadway', texto: 'A rua principal de Canoa Quebrada é o coração da vida noturna. Repleta de bares, restaurantes e lojas de artesanato, ela ganha vida ao anoitecer com música ao vivo e forró.' },
        { titulo: 'Esportes Aquáticos', texto: 'As condições de vento e mar fazem de Canoa Quebrada um ótimo destino para kitesurf, windsurf e stand-up paddle. Aulas e aluguel de equipamentos estão disponíveis na praia.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Planeje Sua Visita',
      texto: 'Canoa Quebrada é acessível e bem estruturada para receber turistas durante todo o ano.',
      imagem: '/images/geral/Ceara1.webp',
      alt: 'Vista de Canoa Quebrada',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De Fortaleza, há ônibus regulares até Aracati (2h30). De lá, táxis e vans fazem o trajeto até a praia (20 min). De carro, siga pela CE-040.' },
        { titulo: 'Melhor Época', texto: 'De julho a dezembro é a alta temporada, com ventos fortes e céu limpo. De fevereiro a maio, o período chuvoso traz menos turistas e preços mais baixos.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Bucaneiro', nota: 4.7, contato: '(88) 3421-7016', site: 'https://www.instagram.com/bucaneiro.cq/' },
            { nome: 'Long Beach Bar', nota: 4.6, contato: '(88) 3421-7070', site: 'https://www.instagram.com/longbeachcq/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Hotel Iberostar Praia do Forte', nota: 4.7, contato: '(88) 3421-7000', site: 'https://www.iberostar.com/' },
            { nome: 'Pousada Lua Estrela', nota: 4.8, contato: '(88) 3421-7055', site: 'https://www.instagram.com/pousadaluaestrela/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const CanoaQuebrada = () => <CearaPontoBase config={config} />;
export default CanoaQuebrada;
