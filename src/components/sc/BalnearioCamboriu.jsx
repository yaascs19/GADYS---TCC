import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Balneário Camboriú',
  subtitulo: 'A Dubai brasileira — arranha-céus, praia e o maior bondinho da América Latina.',
  carouselImages: ['/images/geral/sc-bc.jpg', '/images/geral/sc3.jpg'],
  galeriaImages: [
    { src: '/images/geral/sc-bc.jpg', alt: 'Balneário Camboriú' },
    { src: '/images/geral/sc3.jpg', alt: 'Praia Central de BC' },
    { src: '/images/geral/sc4.jpg', alt: 'Bondinho Unipraias' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Dubai Brasileira',
      texto: 'Balneário Camboriú é uma das cidades mais verticalizadas do mundo e o destino turístico mais visitado de Santa Catarina. Com sua famosa Praia Central, o Bondinho Unipraias — o maior da América Latina — e uma vida noturna agitada, BC atrai milhões de turistas todos os anos, especialmente argentinos e uruguaios.',
      imagem: '/images/geral/sc-bc.jpg',
      alt: 'Skyline de Balneário Camboriú',
      lista: [
        'Localização: Litoral norte de Santa Catarina, a 80 km de Florianópolis.',
        'Destaque: Bondinho Unipraias, o maior teleférico da América Latina.',
        'Curiosidade: Uma das cidades com maior IDH do Brasil.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer em BC',
      texto: 'Balneário Camboriú combina praia, aventura e entretenimento em um só lugar.',
      imagem: '/images/geral/sc3.jpg',
      alt: 'Praia Central de Balneário Camboriú',
      subsecoes: [
        { titulo: 'Bondinho Unipraias', texto: 'O maior teleférico da América Latina conecta a Praia Central à Praia de Laranjeiras, passando pela Praia de Taquaras. Vista panorâmica deslumbrante da cidade e do mar.' },
        { titulo: 'Praia Central', texto: 'A famosa praia urbana de BC, com 5 km de extensão, orla movimentada, quiosques e toda a infraestrutura para o turista.' },
        { titulo: 'Parque Unipraias', texto: 'Além do bondinho, o parque oferece tirolesa, arvorismo e outras atrações de aventura com vista para o mar.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Hospedar',
      texto: 'Balneário Camboriú fica a 80 km de Florianópolis e a 130 km de Joinville, com fácil acesso pela BR-101.',
      imagem: '/images/geral/sc-bc.jpg',
      alt: 'Balneário Camboriú',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De carro pela BR-101. O aeroporto mais próximo é o de Navegantes (15 km) ou o de Florianópolis (80 km).' },
        { titulo: 'Melhor Época', texto: 'Dezembro a março para aproveitar a praia. Fora de temporada, a cidade fica mais tranquila e os preços caem.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Peixe Vivo', nota: 4.7, contato: '(47) 3367-1234', site: 'https://www.instagram.com/peixevivo.bc/' },
            { nome: 'Churrascaria Fogo de Chão', nota: 4.8, contato: '(47) 3367-5678', site: 'https://fogodechao.com/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Marambaia Cassino Hotel', nota: 4.7, contato: '(47) 3367-9000', site: 'https://www.marambaiahotel.com.br/' },
            { nome: 'Sofitel Balneário Camboriú', nota: 4.9, contato: '(47) 3090-2000', site: 'https://www.sofitel.com/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const BalnearioCamboriu = () => <CearaPontoBase config={config} />;
export default BalnearioCamboriu;
