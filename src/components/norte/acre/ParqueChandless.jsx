import React from 'react';
import CearaPontoBase from '../../CearaPontoBase';

const config = {
  titulo: 'Parque Estadual Chandless',
  subtitulo: 'A floresta amazônica em seu estado mais puro.',
  carouselImages: ['/images/geral/amazonas1.avif', '/images/geral/amazonas2.jpg'],
  galeriaImages: [
    { src: '/images/geral/amazonas1.avif', alt: 'Parque Chandless' },
    { src: '/images/geral/amazonas2.jpg', alt: 'Floresta do Chandless' },
    { src: '/images/geral/amazonas3.1.jpg', alt: 'Rio no Chandless' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Último Paraíso Intocado do Acre',
      texto: 'O Parque Estadual Chandless é um dos maiores parques estaduais do Brasil, com mais de 695.000 hectares de floresta amazônica primária. Localizado no extremo sul do Acre, na fronteira com o Peru, o parque é um dos ecossistemas mais preservados do planeta, com rios cristalinos, lagos e uma biodiversidade extraordinária.',
      imagem: '/images/geral/amazonas1.avif',
      alt: 'Vista aérea do Parque Chandless',
      lista: [
        'Área: 695.303 hectares de floresta primária.',
        'Localização: Santa Rosa do Purus, fronteira com o Peru.',
        'Destaque: Um dos parques mais remotos e preservados do Brasil.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Aventura na Floresta Primária',
      texto: 'O Parque Chandless oferece experiências únicas de ecoturismo em uma das florestas mais remotas do Brasil.',
      imagem: '/images/geral/amazonas2.jpg',
      alt: 'Trilha no Parque Chandless',
      subsecoes: [
        { titulo: 'Observação de Fauna', texto: 'O parque abriga onças-pintadas, antas, queixadas, ariranhas e centenas de espécies de aves. A observação de fauna é uma das principais atrações para pesquisadores e ecoturistas.' },
        { titulo: 'Passeios de Barco', texto: 'Os rios Chandless e Purus são as principais vias de acesso ao parque. Passeios de barco permitem explorar a floresta de igapó e observar a vida selvagem às margens dos rios.' },
        { titulo: 'Contato com Povos Indígenas', texto: 'O parque faz fronteira com territórios de povos indígenas. Visitas guiadas e responsáveis a comunidades indígenas de contato são organizadas por operadoras especializadas.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Visitar o Parque Chandless',
      texto: 'O acesso ao Parque Chandless é feito por via fluvial a partir de Rio Branco, com apoio de operadoras de ecoturismo especializadas.',
      imagem: '/images/geral/amazonas3.1.jpg',
      alt: 'Acesso ao Parque Chandless',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De Rio Branco, voos fretados ou barcos pelo Rio Purus chegam a Santa Rosa do Purus. De lá, barcos regionais acessam o parque. O trajeto pode levar de 2 a 5 dias por via fluvial.' },
        { titulo: 'Melhor Época', texto: 'De junho a outubro, na estação seca, os rios ficam mais baixos e as praias fluviais aparecem. De novembro a maio, as chuvas tornam a floresta mais exuberante.' },
      ],
      recomendacoes: [
        {
          titulo: 'Operadoras de Ecoturismo',
          itens: [
            { nome: 'Acre Ecoturismo', nota: 4.8, contato: '(68) 9999-1234', site: 'https://www.instagram.com/' },
            { nome: 'Amazônia Selvagem Tours', nota: 4.7, contato: '(68) 9888-5678', site: 'https://www.instagram.com/' },
          ],
        },
        {
          titulo: 'Onde Ficar em Rio Branco',
          itens: [
            { nome: 'Hotel Inácio Palace', nota: 4.6, contato: '(68) 3224-6300', site: 'https://www.instagram.com/' },
            { nome: 'Pousada Ecológica Acre', nota: 4.7, contato: '(68) 9777-9012', site: 'https://www.instagram.com/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const ParqueChandless = () => <CearaPontoBase config={config} />;
export default ParqueChandless;
