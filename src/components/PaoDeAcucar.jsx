import React from 'react';
import CearaPontoBase from './CearaPontoBase';

const config = {
  titulo: 'Pão de Açúcar',
  subtitulo: 'Vista panorâmica deslumbrante acessada por teleférico histórico.',
  carouselImages: ['/images/geral/pao-rj.jpg', '/images/geral/cr-rj.webp'],
  galeriaImages: [
    { src: '/images/geral/pao-rj.jpg', alt: 'Pão de Açúcar' },
    { src: '/images/geral/cr-rj.webp', alt: 'Vista do Rio de Janeiro' },
    { src: '/rj.jpeg', alt: 'Rio de Janeiro' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Cartão-Postal do Rio',
      texto: 'O Pão de Açúcar é um dos pontos turísticos mais famosos do Brasil e do mundo. Formado por dois morros — o Morro da Urca e o Pão de Açúcar —, o complexo oferece uma das vistas mais deslumbrantes do planeta, com a Baía de Guanabara, o Cristo Redentor e a cidade do Rio de Janeiro aos seus pés. O acesso é feito por teleférico, inaugurado em 1912.',
      imagem: '/images/geral/pao-rj.jpg',
      alt: 'Pão de Açúcar',
      lista: [
        'Localização: Urca, Rio de Janeiro - RJ.',
        'Altitude: 396 metros acima do nível do mar.',
        'Teleférico: Inaugurado em 1912, um dos primeiros do mundo.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer no Pão de Açúcar',
      texto: 'Além da subida de teleférico, o complexo oferece trilhas, shows ao pôr do sol e uma vista noturna do Rio que é simplesmente inesquecível.',
      imagem: '/images/geral/cr-rj.webp',
      alt: 'Vista do Pão de Açúcar',
      subsecoes: [
        { titulo: 'Teleférico Histórico', texto: 'O teleférico faz duas paradas: no Morro da Urca (215 m) e no Pão de Açúcar (396 m). Cada parada oferece mirantes com vistas únicas da cidade e da baía.' },
        { titulo: 'Trilha da Urca', texto: 'Para os mais aventureiros, a trilha até o Morro da Urca pode ser feita a pé. O percurso passa por Mata Atlântica preservada e oferece vistas incríveis.' },
        { titulo: 'Pôr do Sol e Noite', texto: 'O pôr do sol visto do Pão de Açúcar é um dos mais belos do mundo. À noite, as luzes da cidade criam um espetáculo visual único.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Dicas',
      texto: 'O Pão de Açúcar fica na Praia Vermelha, no bairro da Urca. O acesso é fácil por metrô, ônibus ou táxi.',
      imagem: '/images/geral/pao-rj.jpg',
      alt: 'Teleférico do Pão de Açúcar',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De metrô, desça na estação Botafogo e pegue um táxi ou ônibus até a Praia Vermelha. De carro, siga pela Av. Pasteur até o terminal do teleférico.' },
        { titulo: 'Melhor Época', texto: 'O complexo funciona o ano todo. Dias ensolarados oferecem a melhor visibilidade. Chegue cedo para evitar filas, especialmente nos fins de semana.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Pão de Açúcar', nota: 4.5, contato: '(21) 2546-8400', site: 'https://www.bondinho.com.br/' },
            { nome: 'Bar Urca', nota: 4.7, contato: '(21) 2295-8744', site: '#' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Hotel Santa Teresa', nota: 4.8, contato: '(21) 3380-0200', site: 'https://www.santateresahotel.com/' },
            { nome: 'Yoo2 Rio de Janeiro', nota: 4.6, contato: '(21) 3268-9900', site: 'https://www.yoo2.com/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const PaoDeAcucar = () => <CearaPontoBase config={config} />;
export default PaoDeAcucar;
