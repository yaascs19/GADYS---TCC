import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Lago Paranoá',
  subtitulo: 'O coração aquático de Brasília — lazer, gastronomia e pôr do sol.',
  carouselImages: ['/images/natureza/rioamz.jpeg', '/images/natureza/veadeiros.jpeg', '/images/monumentos/jus.jpeg'],
  galeriaImages: [
    { src: '/images/natureza/rioamz.jpeg', alt: 'Lago Paranoá' },
    { src: '/images/natureza/veadeiros.jpeg', alt: 'Natureza do DF' },
    { src: '/images/monumentos/jus.jpeg', alt: 'Brasília' },
  ],
  tema: {
    bg: '#0a1f3d', texto: '#d6eaf8',
    acento: '#3498db', card: '#1a3a5c', tituloTexto: '#aed6f1',
    navTexto: '#7fb3d3', navAtivo: '#fff', navBorda: '#3498db',
    footerBg: 'linear-gradient(135deg, #1a3a5c, #0a1f3d)', footerTexto: '#aed6f1',
  },
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Lago que Transformou Brasília',
      texto: 'O Lago Paranoá é um lago artificial de 40 km² criado pelo represamento do Rio Paranoá, inaugurado em 1959. Projetado por Lúcio Costa como parte do plano urbanístico de Brasília, o lago foi concebido para amenizar o clima seco do cerrado e criar um espelho d\'água que embelezasse a capital. Hoje é o centro da vida social e de lazer de Brasília.',
      imagem: '/images/natureza/rioamz.jpeg',
      alt: 'Lago Paranoá',
      lista: [
        'Localização: Centro de Brasília - DF.',
        'Área: 40 km² de espelho d\'água.',
        'Criação: 1959, parte do projeto urbanístico de Lúcio Costa.',
        'Destaque: Orla com restaurantes, clubes e esportes náuticos.',
      ],
    },
    lazer: {
      label: 'Lazer',
      titulo: 'Vida ao Redor do Lago',
      texto: 'O Lago Paranoá é o principal polo de lazer de Brasília. Sua orla concentra restaurantes sofisticados, bares, clubes náuticos e espaços públicos que animam a cidade especialmente nos fins de semana.',
      imagem: '/images/natureza/veadeiros.jpeg',
      alt: 'Lazer no Lago Paranoá',
      subsecoes: [
        { titulo: 'Orla do Lago Sul e Norte', texto: 'As orlas do Lago Sul e do Lago Norte concentram os melhores restaurantes e bares de Brasília, com mesas à beira d\'água e vistas deslumbrantes para o pôr do sol.' },
        { titulo: 'Esportes Náuticos', texto: 'Vela, caiaque, stand-up paddle, jet ski e wakeboard são praticados no lago. Vários clubes oferecem aulas e aluguel de equipamentos.' },
        { titulo: 'Ponte JK', texto: 'A Ponte Juscelino Kubitschek, inaugurada em 2002 e projetada por Alexandre Chan, é uma das pontes mais belas do Brasil. Suas três arcos metálicos cruzam o lago criando uma silhueta elegante.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Aproveitar o Lago',
      texto: 'O Lago Paranoá pode ser apreciado de diversas formas: a pé pelas orlas públicas, de barco em passeios turísticos ou nos restaurantes e bares que margeiam suas águas.',
      imagem: '/images/monumentos/jus.jpeg',
      alt: 'Brasília ao entardecer',
      subsecoes: [
        { titulo: 'Passeios de Barco', texto: 'Diversas empresas oferecem passeios de barco pelo lago, incluindo opções ao pôr do sol. Saem do Pier 21 e do Clube Naval.' },
        { titulo: 'Pôr do Sol', texto: 'O pôr do sol no Lago Paranoá é um dos mais bonitos de Brasília. Os melhores pontos são a Orla do Lago Sul, o Pier 21 e a Ponte JK.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer na Orla',
          itens: [
            { nome: 'Restaurante Antiquarius', nota: 4.8, contato: '(61) 3248-1512', site: 'https://www.antiquarius.com.br' },
            { nome: 'Universal Diner', nota: 4.7, contato: '(61) 3364-9900', site: 'https://www.universaldiner.com.br' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const LagoParanoa = () => <CearaPontoBase config={config} />;
export default LagoParanoa;
