import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Parque Nacional da Chapada dos Guimarães',
  subtitulo: 'Centro geodésico da América do Sul — cânions, cachoeiras e cerrado intocado.',
  carouselImages: [
    '/images/geral/Parque Nacional da Chapada dos Guimarães1.jpg',
    '/images/geral/Parque Nacional da Chapada dos Guimarães2.jpg',
  ],
  galeriaImages: [
    { src: '/images/geral/Parque Nacional da Chapada dos Guimarães3.webp', alt: 'Chapada dos Guimarães' },
    { src: '/images/geral/Parque Nacional da Chapada dos Guimarães4.jpg', alt: 'Véu de Noiva' },
    { src: '/images/geral/Parque Nacional da Chapada dos Guimarães5.jpg', alt: 'Cidade de Pedra' },
  ],
  tema: {
    bg: '#0d1a0a',
    texto: '#d4edd0',
    card: '#1a3512',
    acento: '#6abf5e',
    navTexto: '#8fd68f',
    navAtivo: '#f5e642',
    navBorda: '#f5e642',
    tituloTexto: '#f5e642',
    recCard: '#1a3512',
    recNome: '#d4edd0',
    recContato: '#0d1a0a',
    recContatoBg: '#6abf5e',
    footerBg: 'linear-gradient(135deg, #1a3512, #060e04)',
    footerTexto: '#f5e642',
  },
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'Centro Geodésico da América do Sul',
      texto: 'O Parque Nacional da Chapada dos Guimarães, localizado a 68 km de Cuiabá (MT), abriga o ponto geodésico central da América do Sul. Com 33.000 hectares de cerrado preservado, o parque reúne o Véu de Noiva — uma das cachoeiras mais fotografadas do Brasil —, a Cidade de Pedra, o Mirante da Geodésia e dezenas de trilhas por cânions e formações rochosas únicas.',
      imagem: '/images/geral/Parque Nacional da Chapada dos Guimarães3.webp',
      alt: 'Vista aérea da Chapada dos Guimarães',
      lista: [
        'Localização: Chapada dos Guimarães - MT, a 68 km de Cuiabá.',
        'Área: 33.000 hectares de cerrado e formações rochosas.',
        'Destaque: Véu de Noiva com 86 metros de queda livre.',
        'Curiosidade: Abriga o marco geodésico central da América do Sul.',
      ],
    },
    natureza: {
      label: 'Natureza',
      titulo: 'Cachoeiras, Cânions e Formações Rochosas',
      texto: 'A Chapada dos Guimarães é um espetáculo geológico com formações de arenito de até 300 milhões de anos. As trilhas levam a cachoeiras, mirantes e à famosa Cidade de Pedra.',
      imagem: '/images/geral/Parque Nacional da Chapada dos Guimarães4.jpg',
      alt: 'Véu de Noiva na Chapada dos Guimarães',
      subsecoes: [
        { titulo: 'Véu de Noiva', texto: 'Com 86 metros de queda livre, é uma das cachoeiras mais imponentes do Brasil. Acessível por trilha de 800 metros a partir do centro de visitantes.' },
        { titulo: 'Cidade de Pedra', texto: 'Conjunto de torres e pilares de arenito esculpidos pela erosão ao longo de milhões de anos, formando uma paisagem que parece saída de outro planeta.' },
        { titulo: 'Mirante da Geodésia', texto: 'Ponto mais alto do parque, com vista panorâmica para o vale e o marco que indica o centro geodésico da América do Sul.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Explorar',
      texto: 'O parque fica a 68 km de Cuiabá pela MT-251. A cidade de Chapada dos Guimarães é a base turística, com pousadas, restaurantes e agências de ecoturismo.',
      imagem: '/images/geral/Parque Nacional da Chapada dos Guimarães5.jpg',
      alt: 'Trilha na Chapada dos Guimarães',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De Cuiabá, siga pela MT-251 por aproximadamente 1h de carro. Há ônibus regulares saindo do terminal rodoviário de Cuiabá.' },
        { titulo: 'Melhor Época', texto: 'De maio a setembro (estação seca) para trilhas e cachoeiras com acesso pleno. Na estação chuvosa (out–abr) a vegetação fica exuberante, mas algumas trilhas fecham.' },
      ],
      recomendacoes: [
        {
          titulo: 'Agências de Ecoturismo',
          itens: [
            { nome: 'Chapada Explorer', nota: 4.9, contato: '(65) 3301-1393', site: 'https://www.instagram.com/chapadaexplorer/' },
            { nome: 'Ecoturismo Chapada', nota: 4.8, contato: '(65) 3301-2020', site: 'https://www.instagram.com/ecoturismochapada/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const ParqueNacionalChapadaGuimaraes = () => <CearaPontoBase config={config} />;
export default ParqueNacionalChapadaGuimaraes;
