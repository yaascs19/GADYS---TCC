import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Caruaru',
  subtitulo: 'A capital do forró e do maior São João do mundo.',
  carouselImages: ['/images/geral/pi-cultura.jpg', '/images/geral/pi-teresina.jpg'],
  galeriaImages: [
    { src: '/images/geral/pi-cultura.jpg', alt: 'Caruaru' },
    { src: '/images/geral/pi-teresina.jpg', alt: 'Festa Junina de Caruaru' },
    { src: '/images/geral/fe-pe.jpg', alt: 'Artesanato de Caruaru' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Capital do Forró',
      texto: 'Caruaru é a maior cidade do interior pernambucano e um dos maiores polos culturais do Nordeste. Conhecida mundialmente pelo São João de Caruaru — reconhecido pelo Guinness como a maior festa junina do mundo —, a cidade também é famosa pelo Museu do Barro, pelo Alto do Moura (maior centro de arte figurativa das Américas) e pela Feira de Caruaru.',
      imagem: '/images/geral/pi-cultura.jpg',
      alt: 'Caruaru',
      lista: [
        'Localização: Agreste pernambucano, a 130 km do Recife.',
        'Destaque: São João de Caruaru — maior festa junina do mundo (Guinness).',
        'Arte: Alto do Moura, maior centro de arte figurativa das Américas.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Viva Caruaru',
      texto: 'Caruaru oferece uma imersão profunda na cultura nordestina. Da Feira de Caruaru ao Alto do Moura, cada canto da cidade conta a história do povo do agreste.',
      imagem: '/images/geral/pi-teresina.jpg',
      alt: 'Feira de Caruaru',
      subsecoes: [
        { titulo: 'São João de Caruaru', texto: 'Durante todo o mês de junho, Caruaru se transforma. O Pátio de Eventos recebe shows de forró, quadrilhas e a tradicional Missa do Vaqueiro.' },
        { titulo: 'Alto do Moura', texto: 'Distrito de Caruaru onde viveu Mestre Vitalino, o maior ceramista popular do Brasil. Hoje, dezenas de artistas mantêm viva a tradição do barro.' },
        { titulo: 'Feira de Caruaru', texto: 'Uma das maiores feiras livres do Brasil, com artesanato, comidas típicas, ervas medicinais e produtos regionais. Funciona às quartas, sextas e sábados.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Dicas',
      texto: 'Caruaru fica a 130 km do Recife pela BR-232. A cidade tem boa infraestrutura hoteleira e gastronômica, especialmente durante o São João.',
      imagem: '/images/geral/pi-cultura.jpg',
      alt: 'Caruaru',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De Recife, siga pela BR-232 (1h30 de carro). Há também ônibus regulares saindo da Rodoviária do Recife.' },
        { titulo: 'Melhor Época', texto: 'Junho, para o São João. Mas a Feira de Caruaru e o Alto do Moura valem a visita o ano todo.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Casa do Bode', nota: 4.7, contato: '(81) 3721-5050', site: '#' },
            { nome: 'Taberna do Forró', nota: 4.6, contato: '(81) 3722-1234', site: '#' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Hotel Caruaru', nota: 4.5, contato: '(81) 3721-5000', site: '#' },
            { nome: 'Pousada do Agreste', nota: 4.4, contato: '(81) 3722-9900', site: '#' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const Caruaru = () => <CearaPontoBase config={config} />;
export default Caruaru;
