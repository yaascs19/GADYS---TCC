import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Cânion Itaimbezinho',
  subtitulo: 'Um dos maiores cânions do mundo, no coração dos Aparados da Serra.',
  carouselImages: ['/images/geral/rs-canion.jpg', '/images/geral/rs3.jpg'],
  galeriaImages: [
    { src: '/images/geral/rs-canion.jpg', alt: 'Cânion Itaimbezinho' },
    { src: '/images/geral/rs3.jpg', alt: 'Vista do cânion' },
    { src: '/images/geral/rs4.jpg', alt: 'Trilha do Cotovelo' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Gigante dos Aparados da Serra',
      texto: 'O Cânion Itaimbezinho, localizado no Parque Nacional dos Aparados da Serra, é um dos maiores e mais impressionantes cânions do mundo. Com paredes de até 720 metros de altura e 5,8 km de extensão, o cânion foi esculpido ao longo de milhões de anos pelo Rio Perdiz. A paisagem é de tirar o fôlego: mata atlântica densa, cachoeiras e uma vista que parece saída de outro planeta.',
      imagem: '/images/geral/rs-canion.jpg',
      alt: 'Vista aérea do Cânion Itaimbezinho',
      lista: [
        'Localização: Cambará do Sul - RS, a 185 km de Porto Alegre.',
        'Dimensões: 720 metros de profundidade e 5,8 km de extensão.',
        'Parque: Parque Nacional dos Aparados da Serra — criado em 1959.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Trilhas e Aventura no Cânion',
      texto: 'O Parque Nacional dos Aparados da Serra oferece trilhas para todos os níveis, com vistas espetaculares do cânion.',
      imagem: '/images/geral/rs3.jpg',
      alt: 'Trilha no Cânion Itaimbezinho',
      subsecoes: [
        {
          titulo: 'Trilha do Cotovelo',
          texto: 'A trilha mais acessível do parque, com 1,4 km de extensão e nível fácil. Leva a um mirante com vista panorâmica do cânion. Ideal para famílias.',
        },
        {
          titulo: 'Trilha do Vértice',
          texto: 'Trilha de nível moderado com 3 km de extensão. Oferece vistas ainda mais impressionantes do cânion e da Cachoeira do Andorinhão.',
        },
        {
          titulo: 'Trilha Interior do Cânion',
          texto: 'Para os mais aventureiros, a trilha interior desce ao fundo do cânion. Exige guia credenciado e boa condição física. Uma experiência inesquecível.',
        },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Preparar',
      texto: 'O Parque Nacional dos Aparados da Serra fica em Cambará do Sul, a 185 km de Porto Alegre.',
      imagem: '/images/geral/rs-canion.jpg',
      alt: 'Cânion Itaimbezinho',
      subsecoes: [
        {
          titulo: 'Como Chegar',
          texto: 'De carro pela RS-020 até São Francisco de Paula, depois pela RS-429 até Cambará do Sul. Não há transporte público direto.',
        },
        {
          titulo: 'Informações Práticas',
          texto: 'O parque funciona de quarta a domingo, das 9h às 17h. Ingresso: R$ 30 (adulto). Leve agasalho, pois o clima é frio e úmido o ano todo.',
        },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer em Cambará do Sul',
          itens: [
            { nome: 'Restaurante Nativo', nota: 4.7, contato: '(54) 3251-1234', site: 'https://www.instagram.com/restaurantenativo/' },
            { nome: 'Pousada e Restaurante Pinheiro', nota: 4.6, contato: '(54) 3251-5678', site: 'https://www.instagram.com/pousadapinheiro/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Pousada Cambará', nota: 4.8, contato: '(54) 3251-2222', site: 'https://www.pousadacambara.com.br/' },
            { nome: 'Hotel Aparados da Serra', nota: 4.5, contato: '(54) 3251-3333', site: 'https://www.hotelaparados.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const CanionItaimbezinho = () => <CearaPontoBase config={config} />;
export default CanionItaimbezinho;
