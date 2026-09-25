import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Porto Seguro',
  subtitulo: 'Onde o Brasil nasceu — praias paradisíacas e história viva.',
  carouselImages: ['/images/geral/pelo3.jpg', '/images/geral/pelo-xx.jpg', '/images/natureza/noronha.jpeg'],
  galeriaImages: [
    { src: '/images/geral/pelo3.jpg', alt: 'Porto Seguro' },
    { src: '/images/geral/pelo-xx.jpg', alt: 'Centro histórico' },
    { src: '/images/natureza/noronha.jpeg', alt: 'Praia de Porto Seguro' },
  ],
  tema: {
    bg: '#0a1f3d', texto: '#d6eaf8',
    acento: '#2980b9', card: '#1a3a5c', tituloTexto: '#aed6f1',
    navTexto: '#7fb3d3', navAtivo: '#fff', navBorda: '#2980b9',
    footerBg: 'linear-gradient(135deg, #1a3a5c, #0a1f3d)', footerTexto: '#aed6f1',
  },
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Berço do Brasil',
      texto: 'Porto Seguro é a cidade onde Pedro Álvares Cabral aportou em 22 de abril de 1500, marcando o descobrimento oficial do Brasil. Hoje é um dos destinos turísticos mais visitados do país, combinando história colonial, praias paradisíacas e uma vibrante vida noturna na famosa Passarela do Álcool.',
      imagem: '/images/geral/pelo3.jpg',
      alt: 'Porto Seguro',
      lista: [
        'Localização: Litoral sul da Bahia, a 730 km de Salvador.',
        'História: Local do descobrimento do Brasil em 1500.',
        'Praias: Mais de 150 km de litoral com praias de águas mornas.',
        'Destaque: Passarela do Álcool e Centro Histórico tombado.',
      ],
    },
    praias: {
      label: 'Praias',
      titulo: 'Paraíso no Litoral Baiano',
      texto: 'Porto Seguro e seus arredores concentram algumas das praias mais belas do Brasil. Arraial d\'Ajuda, Trancoso e Caraíva são vilarejos paradisíacos a poucos quilômetros do centro.',
      imagem: '/images/natureza/noronha.jpeg',
      alt: 'Praias de Porto Seguro',
      subsecoes: [
        { titulo: 'Arraial d\'Ajuda', texto: 'Vila charmosa com praias de falésias coloridas, piscinas naturais e uma atmosfera boêmia. A Praia do Mucugê e a Praia de Pitinga são as mais famosas.' },
        { titulo: 'Trancoso', texto: 'Considerada um dos destinos mais charmosos do Brasil, com o famoso Quadrado — praça gramada cercada de casas coloridas e restaurantes sofisticados.' },
        { titulo: 'Caraíva', texto: 'Vilarejo sem energia elétrica e sem carros, acessível apenas por barco. Praias desertas e uma atmosfera de fim do mundo para quem busca desconexão total.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Hospedar',
      texto: 'Porto Seguro tem aeroporto próprio com voos diretos de São Paulo, Rio de Janeiro e Salvador. A cidade é bem estruturada para o turismo, com opções para todos os bolsos.',
      imagem: '/images/geral/pelo-xx.jpg',
      alt: 'Centro histórico de Porto Seguro',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'Voos diretos de SP, RJ e Salvador para o Aeroporto de Porto Seguro. De carro, pela BR-101 e BA-001.' },
        { titulo: 'Melhor Época', texto: 'De dezembro a março para praias e festas. De junho a agosto para clima mais ameno e menos chuva.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Tôa Tôa', nota: 4.6, contato: '(73) 3288-2213', site: 'https://www.toatoa.com.br' },
            { nome: 'Aldeia dos Corais', nota: 4.7, contato: '(73) 3575-1055', site: 'https://www.instagram.com/aldeiadoscorais/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const PortoSeguro = () => <CearaPontoBase config={config} />;
export default PortoSeguro;
