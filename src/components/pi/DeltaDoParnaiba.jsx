import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Delta do Parnaíba',
  subtitulo: 'O único delta em mar aberto das Américas — 70 ilhas, igarapés e uma biodiversidade única.',
  carouselImages: ['/images/geral/pi-delta.jpg', '/images/geral/pi2.jpg'],
  galeriaImages: [
    { src: '/images/geral/pi-delta.jpg', alt: 'Delta do Parnaíba' },
    { src: '/images/geral/pi2.jpg', alt: 'Igarapés do Delta' },
    { src: '/images/geral/pi3.jpg', alt: 'Pôr do sol no Delta do Parnaíba' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Único Delta em Mar Aberto das Américas',
      texto: 'O Delta do Parnaíba é uma das maiores e mais preservadas formações deltaicas do mundo — e o único delta em mar aberto das Américas. Formado pelo Rio Parnaíba ao desembocar no Oceano Atlântico, o delta cria um labirinto de 70 ilhas, igarapés, lagoas e manguezais que abrigam uma biodiversidade extraordinária. A Área de Proteção Ambiental do Delta do Parnaíba protege mais de 300 mil hectares.',
      imagem: '/images/geral/pi-delta.jpg',
      alt: 'Vista aérea do Delta do Parnaíba',
      lista: [
        'Localização: Parnaíba - PI, na divisa com o Maranhão.',
        'Dimensão: 70 ilhas e mais de 300 mil hectares protegidos.',
        'Destaque: Único delta em mar aberto das Américas.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer no Delta do Parnaíba',
      texto: 'O Delta do Parnaíba oferece experiências únicas de ecoturismo e contato com a natureza.',
      imagem: '/images/geral/pi2.jpg',
      alt: 'Passeio de barco no Delta',
      subsecoes: [
        {
          titulo: 'Passeio de Barco pelos Igarapés',
          texto: 'O passeio de barco pelos igarapés do delta é a principal atração. Ao longo do percurso, é possível avistar garças, guarás, botos e a vegetação exuberante dos manguezais.',
        },
        {
          titulo: 'Ilha do Caju',
          texto: 'A Ilha do Caju é a mais famosa do delta, com praias desertas, dunas e cajueiros centenários. O acesso é feito por barco e a ilha oferece pousadas rústicas para pernoite.',
        },
        {
          titulo: 'Pôr do Sol no Delta',
          texto: 'O pôr do sol no Delta do Parnaíba é um espetáculo de cores — o céu se tinge de laranja e vermelho sobre as águas calmas dos igarapés. Um dos mais belos do Nordeste.',
        },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Hospedar',
      texto: 'O Delta do Parnaíba fica em Parnaíba, a 340 km de Teresina.',
      imagem: '/images/geral/pi-delta.jpg',
      alt: 'Delta do Parnaíba',
      subsecoes: [
        {
          titulo: 'Como Chegar',
          texto: 'De Teresina, siga pela BR-343 até Parnaíba (aprox. 4h de carro). Há voos para o Aeroporto Internacional de Parnaíba saindo de Teresina e Fortaleza.',
        },
        {
          titulo: 'Melhor Época',
          texto: 'De julho a dezembro para passeios no delta. O período chuvoso (janeiro a junho) aumenta o volume dos igarapés, mas pode dificultar o acesso a algumas ilhas.',
        },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Caju', nota: 4.7, contato: '(86) 3321-1234', site: 'https://www.instagram.com/restaurantecaju.pi/' },
            { nome: 'Frutos do Delta', nota: 4.6, contato: '(86) 3321-5678', site: 'https://www.instagram.com/frutosdodelta/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Pousada Ilha do Caju', nota: 4.9, contato: '(86) 3321-2222', site: 'https://www.ilhadocaju.com.br/' },
            { nome: 'Hotel Cívico', nota: 4.5, contato: '(86) 3321-3333', site: 'https://www.hotelcivico.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const DeltaDoParnaiba = () => <CearaPontoBase config={config} />;
export default DeltaDoParnaiba;
