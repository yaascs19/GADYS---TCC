import React from 'react';
import CearaPontoBase from './CearaPontoBase';

const config = {
  tema: { bg: '#e8f4fd', texto: '#0a2a4a' },
  titulo: 'Cristo Redentor',
  subtitulo: 'Uma das Sete Maravilhas do Mundo Moderno, símbolo eterno do Brasil.',
  carouselImages: ['/images/geral/cr-rj.webp', '/images/monumentos/cristo.webp', '/rj.jpeg'],
  galeriaImages: [
    { src: '/images/geral/cr-rj.webp', alt: 'Cristo Redentor' },
    { src: '/images/monumentos/cristo.webp', alt: 'Cristo Redentor de perto' },
    { src: '/rj.jpeg', alt: 'Rio de Janeiro' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Símbolo do Brasil',
      texto: 'O Cristo Redentor é uma estátua de Jesus Cristo localizada no topo do Morro do Corcovado, no Parque Nacional da Tijuca, no Rio de Janeiro. Com 38 metros de altura (incluindo o pedestal), é uma das maiores estátuas art déco do mundo e foi eleita uma das Sete Maravilhas do Mundo Moderno em 2007.',
      imagem: '/images/geral/cr-rj.webp',
      alt: 'Cristo Redentor',
      lista: [
        'Localização: Morro do Corcovado, Rio de Janeiro - RJ.',
        'Altura: 30 metros de estátua + 8 metros de pedestal.',
        'Inauguração: 12 de outubro de 1931.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer no Corcovado',
      texto: 'A visita ao Cristo Redentor oferece muito mais do que ver a estátua — a vista panorâmica de 360° do Rio de Janeiro é uma das mais impressionantes do mundo.',
      imagem: '/images/monumentos/cristo.webp',
      alt: 'Vista do Cristo Redentor',
      subsecoes: [
        { titulo: 'Trem do Corcovado', texto: 'O trem que sobe o Corcovado é uma experiência à parte, passando pela Mata Atlântica preservada. A viagem dura cerca de 20 minutos e oferece vistas incríveis da cidade.' },
        { titulo: 'Vista Panorâmica', texto: 'Do alto do Corcovado, é possível ver a Baía de Guanabara, o Pão de Açúcar, as praias de Copacabana e Ipanema, a Lagoa Rodrigo de Freitas e muito mais.' },
        { titulo: 'Pôr do Sol', texto: 'O pôr do sol visto do Cristo Redentor é um espetáculo único. O monumento também é iluminado à noite, criando uma visão mágica de toda a cidade.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Dicas',
      texto: 'O acesso ao Cristo Redentor pode ser feito de trem, van ou trilha. O trem do Corcovado parte da Rua Cosme Velho.',
      imagem: '/images/geral/cr-rj.webp',
      alt: 'Cristo Redentor',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De trem: estação na Rua Cosme Velho, 513. De van: saem do Largo do Machado e da Praça Tiradentes. A trilha a pé parte do Parque Lage e tem cerca de 3,8 km.' },
        { titulo: 'Melhor Época', texto: 'O monumento funciona todos os dias das 8h às 19h. Dias sem neblina oferecem a melhor visibilidade. Evite fins de semana e feriados para fugir das filas.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Aprazível', nota: 4.7, contato: '(21) 2508-9174', site: 'https://www.aprazivel.com.br/' },
            { nome: 'Bar do Mineiro', nota: 4.6, contato: '(21) 2221-9227', site: '#' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Hotel Santa Teresa', nota: 4.8, contato: '(21) 3380-0200', site: 'https://www.santateresahotel.com/' },
            { nome: 'Mama Ruisa', nota: 4.7, contato: '(21) 2242-1281', site: 'https://www.mamaruisa.com/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const CristoRedentor = () => <CearaPontoBase config={config} />;
export default CristoRedentor;
