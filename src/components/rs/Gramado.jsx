import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Gramado',
  subtitulo: 'A cidade mais encantadora do Brasil — neve, chocolate artesanal e o Natal Luz na Serra Gaúcha.',
  carouselImages: [
    '/images/geral/c.jpg',
    '/images/geral/gramado1.jpg',
  ],
  galeriaImages: [
    { src: '/images/geral/c.jpg', alt: 'Gramado' },
    { src: '/images/geral/gramado1.jpg', alt: 'Gramado' },
    { src: '/images/geral/gramado2.webp', alt: 'Gramado' },
    { src: '/images/geral/gramado3.jpg', alt: 'Gramado' },
    { src: '/images/geral/gramado4.webp', alt: 'Gramado' },
  ],
  tema: {
    bg: '#0d1a0f',
    texto: '#eef5ee',
    tituloTexto: '#c8e6c9',
    acento: '#2e7d32',
    card: 'rgba(46,125,50,0.12)',
    navTexto: '#a5c8a7',
    navAtivo: '#c8e6c9',
    navBorda: '#2e7d32',
    recCard: 'rgba(46,125,50,0.15)',
    recNome: '#c8e6c9',
    recContato: '#eef5ee',
    recContatoBg: 'rgba(46,125,50,0.25)',
    footerBg: 'linear-gradient(135deg, #1b3a1e, #0d1a0f)',
    footerTexto: '#a5c8a7',
  },
  voltarEstilo: {
    background: 'rgba(46,125,50,0.3)',
    borderColor: '#c8e6c9',
  },
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Pérola da Serra Gaúcha',
      texto: 'Gramado é, sem dúvida, um dos destinos turísticos mais famosos do Brasil. Encravada na Serra Gaúcha a 825 metros de altitude, a cidade encanta pela arquitetura europeia, pelas hortênsias que colorem as ruas, pelo chocolate artesanal premiado e por eventos que atraem visitantes do mundo inteiro. O Natal Luz, realizado de outubro a janeiro, transforma a cidade em um conto de fadas iluminado que recebe mais de 6 milhões de visitantes por ano.',
      imagem: '/images/geral/gramado2.webp',
      alt: 'Gramado',
      lista: [
        'Localização: Serra Gaúcha, a 115 km de Porto Alegre - RS.',
        'Altitude: 825 metros — clima europeu com temperaturas negativas no inverno.',
        'Destaque: Natal Luz, Festival de Cinema e chocolate artesanal premiado.',
        'Neve: Gramado é uma das poucas cidades brasileiras com neve natural.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer em Gramado',
      texto: 'Gramado oferece experiências únicas em qualquer época do ano — do verão florido ao inverno gelado com possibilidade de neve.',
      imagem: '/images/geral/gramado3.jpg',
      alt: 'Gramado',
      subsecoes: [
        {
          titulo: 'Natal Luz',
          texto: 'O maior evento natalino da América Latina acontece de outubro a janeiro. Desfiles, shows, iluminação deslumbrante e a magia do Natal transformam Gramado em um cenário de conto de fadas que recebe milhões de visitantes.',
        },
        {
          titulo: 'Festival de Cinema de Gramado',
          texto: 'Realizado em agosto, o Festival de Cinema de Gramado é o mais importante do Brasil. Atrai estrelas do cinema nacional e internacional, tapete vermelho e toda a glamour de Hollywood na Serra Gaúcha.',
        },
        {
          titulo: 'Rota do Chocolate',
          texto: 'Gramado é a capital brasileira do chocolate artesanal. Dezenas de chocolaterias oferecem degustações e produtos premiados internacionalmente — o Caracol e a Prawer são paradas obrigatórias.',
        },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Hospedar',
      texto: 'Gramado fica a 115 km de Porto Alegre, com acesso pela RS-020 e RS-115 pela Serra Gaúcha.',
      imagem: '/images/geral/gramado4.webp',
      alt: 'Gramado',
      subsecoes: [
        {
          titulo: 'Como Chegar',
          texto: 'De carro pela RS-020 ou RS-115 a partir de Porto Alegre (aprox. 1h30). De ônibus com saídas frequentes da rodoviária de Porto Alegre. O aeroporto mais próximo é o Salgado Filho, em Porto Alegre.',
        },
        {
          titulo: 'Melhor Época',
          texto: 'Outubro a janeiro para o Natal Luz. Junho a agosto para o frio intenso e possibilidade de neve. Setembro para a florada das hortênsias. Cada estação tem seu charme único.',
        },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Colosseo', nota: 4.9, contato: '(54) 3286-1530', site: 'https://www.colosseo.com.br/' },
            { nome: 'Gasthof Gramado', nota: 4.8, contato: '(54) 3286-2244', site: 'https://www.gasthofgramado.com.br/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Serrano Resort & Convention', nota: 4.8, contato: '(54) 3286-1332', site: 'https://www.serranohotel.com.br/' },
            { nome: 'Pousada Zermatt', nota: 4.9, contato: '(54) 3286-4332', site: 'https://www.pousadazermatt.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const Gramado = () => <CearaPontoBase config={config} />;
export default Gramado;
