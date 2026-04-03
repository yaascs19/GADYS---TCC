import React from 'react';
import SudestePontoDetalheBase from '../../sudeste/SudestePontoDetalheBase';

const config = {
  titulo: 'Pedra Azul',
  subtitulo: 'A formação rochosa que muda de cor — cartão-postal do Espírito Santo.',
  voltarRota: '/es-pontos',
  carouselImages: ['/images/natureza/veadeiros.jpeg', '/images/natureza/bonito.jpeg'],
  galeriaImages: [
    { src: '/images/natureza/veadeiros.jpeg', alt: 'Pedra Azul ao amanhecer' },
    { src: '/images/natureza/bonito.jpeg', alt: 'Trilha da Pedra Azul' },
    { src: '/images/natureza/chapada.jpeg', alt: 'Vista da Serra Capixaba' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Pedra que Muda de Cor',
      texto: 'A Pedra Azul é uma formação rochosa de granito com 1.822 metros de altitude, localizada no Parque Estadual da Pedra Azul, em Domingos Martins. Seu nome vem da coloração azulada que a rocha adquire ao amanhecer e ao entardecer, quando a luz do sol reflete em sua superfície polida. É um dos cartões-postais mais icônicos do Espírito Santo.',
      imagem: '/images/natureza/veadeiros.jpeg',
      alt: 'Pedra Azul com coloração azulada',
      lista: [
        'Altitude: 1.822 metros acima do nível do mar.',
        'Localização: Domingos Martins, a 90 km de Vitória.',
        'Destaque: Coloração azulada ao amanhecer e entardecer.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Aventura na Serra Capixaba',
      texto: 'O Parque Estadual da Pedra Azul oferece trilhas, piscinas naturais e vistas panorâmicas da Serra Capixaba.',
      imagem: '/images/natureza/bonito.jpeg',
      alt: 'Trilha ecológica na Pedra Azul',
      subsecoes: [
        { titulo: 'Trilha da Pedra Azul', texto: 'A trilha principal percorre 2,5 km até o mirante da Pedra Azul, com desnível de 400 metros. O percurso passa por Mata Atlântica preservada, piscinas naturais e formações rochosas únicas.' },
        { titulo: 'Piscinas Naturais', texto: 'Ao longo da trilha, piscinas naturais de água cristalina formadas por nascentes da serra convidam para um mergulho refrescante em meio à natureza.' },
        { titulo: 'Observação de Aves', texto: 'O parque é um paraíso para observadores de aves, com mais de 200 espécies registradas, incluindo o beija-flor-de-fronte-violeta e o tucano-de-bico-verde.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Visitar a Pedra Azul',
      texto: 'O Parque Estadual da Pedra Azul fica em Domingos Martins, a 90 km de Vitória, com fácil acesso pela BR-262.',
      imagem: '/images/natureza/chapada.jpeg',
      alt: 'Entrada do Parque Estadual da Pedra Azul',
      subsecoes: [
        { titulo: 'Horários e Ingressos', texto: 'O parque funciona de terça a domingo, das 8h às 17h. Ingresso: R$ 20 (adulto) e R$ 10 (meia). A trilha principal requer agendamento prévio e guia credenciado.' },
        { titulo: 'Como Chegar', texto: 'De Vitória, siga pela BR-262 em direção a Belo Horizonte até Domingos Martins (90 km). O parque fica a 15 km do centro da cidade. Há ônibus regulares de Vitória para Domingos Martins.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Recanto da Pedra', nota: 4.8, contato: '(27) 3268-1234', site: 'https://www.instagram.com/' },
            { nome: 'Café da Serra', nota: 4.7, contato: '(27) 3268-5678', site: 'https://www.instagram.com/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Pousada Pedra Azul', nota: 4.8, contato: '(27) 3248-1234', site: 'https://www.instagram.com/' },
            { nome: 'Hotel Serra Verde', nota: 4.6, contato: '(27) 3248-5678', site: 'https://www.instagram.com/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const PedraAzulES = () => <SudestePontoDetalheBase config={config} />;
export default PedraAzulES;
