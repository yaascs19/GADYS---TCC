import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Chapada do Araripe',
  subtitulo: 'Fontes cristalinas, fósseis e biodiversidade única.',
  carouselImages: ['/images/geral/Ceara2.webp', '/images/geral/Ceara3.jpg'],
  galeriaImages: [
    { src: '/images/geral/Ceara2.webp', alt: 'Chapada do Araripe' },
    { src: '/images/geral/Ceara3.jpg', alt: 'Fontes da Chapada' },
    { src: '/images/geral/Ceara1.webp', alt: 'Natureza da Chapada' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Tesouro Paleontológico do Brasil',
      texto: 'A Chapada do Araripe é um planalto sedimentar que se estende pelos estados do Ceará, Pernambuco e Piauí. Com altitude média de 900 metros, a região abriga um dos mais importantes sítios paleontológicos do mundo, com fósseis de dinossauros e peixes pré-históricos. Além disso, a chapada é famosa pelas fontes de água cristalina que brotam naturalmente do solo.',
      imagem: '/images/geral/Ceara2.webp',
      alt: 'Vista da Chapada do Araripe',
      lista: [
        'Localização: Crato e Juazeiro do Norte, sul do Ceará.',
        'Altitude: Média de 900 metros acima do nível do mar.',
        'Destaque: Geopark Araripe, primeiro geopark das Américas reconhecido pela UNESCO.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Natureza e Ciência na Chapada',
      texto: 'A Chapada do Araripe combina beleza natural, história geológica e espiritualidade em um destino único no Brasil.',
      imagem: '/images/geral/Ceara3.jpg',
      alt: 'Fontes da Chapada do Araripe',
      subsecoes: [
        { titulo: 'Fontes e Balneários', texto: 'As fontes de água doce que brotam da chapada formam balneários naturais de beleza rara. A Fonte do Caldas, a Bica do Ipu e o Balneário do Caldas são os mais visitados.' },
        { titulo: 'Geopark Araripe', texto: 'O Geopark Araripe reúne sítios geológicos e paleontológicos de importância mundial. O Museu de Paleontologia de Santana do Cariri exibe fósseis únicos encontrados na região.' },
        { titulo: 'Juazeiro do Norte', texto: 'A cidade de Juazeiro do Norte, próxima à chapada, é um importante centro de peregrinação religiosa, com o Memorial Padre Cícero e a estátua do Padre Cícero, uma das maiores do Brasil.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Visitar a Chapada do Araripe',
      texto: 'A Chapada do Araripe é acessível a partir de Crato ou Juazeiro do Norte, no sul do Ceará.',
      imagem: '/images/geral/Ceara1.webp',
      alt: 'Estrada da Chapada do Araripe',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De Fortaleza, há voos e ônibus para Juazeiro do Norte (aprox. 6h de ônibus). De carro, siga pela BR-116 Sul. O aeroporto de Juazeiro do Norte tem voos regulares.' },
        { titulo: 'Melhor Época', texto: 'De maio a setembro, o período seco é ideal para trilhas e visitas aos sítios paleontológicos. De outubro a abril, as fontes ficam mais cheias e a vegetação mais exuberante.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Sabor do Cariri', nota: 4.7, contato: '(88) 3521-1234', site: 'https://www.instagram.com/' },
            { nome: 'Casa Grande Restaurante', nota: 4.6, contato: '(88) 3521-5678', site: 'https://www.instagram.com/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Hotel Panorama Juazeiro', nota: 4.6, contato: '(88) 3512-1000', site: 'https://www.instagram.com/' },
            { nome: 'Pousada Chapada Verde', nota: 4.7, contato: '(88) 3521-3333', site: 'https://www.instagram.com/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const ChapadaDoAraripe = () => <CearaPontoBase config={config} />;
export default ChapadaDoAraripe;
