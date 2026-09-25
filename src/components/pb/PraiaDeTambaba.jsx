import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Praia de Tambaba',
  subtitulo: 'Falésias avermelhadas e piscinas naturais no litoral sul da Paraíba.',
  carouselImages: ['/images/geral/rn-pipa.jpg', '/images/geral/rn-baiaformosa.jpg'],
  galeriaImages: [
    { src: '/images/geral/rn-pipa.jpg', alt: 'Praia de Tambaba' },
    { src: '/images/geral/rn-baiaformosa.jpg', alt: 'Falésias de Tambaba' },
    { src: '/images/geral/praiaEx.jpg', alt: 'Piscinas naturais de Tambaba' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Joia do Litoral Sul Paraibano',
      texto: 'Tambaba é uma das praias mais famosas e belas da Paraíba, localizada no município de Conde, a 30 km de João Pessoa. Conhecida pelas suas falésias avermelhadas, piscinas naturais formadas pelos recifes e pela tranquilidade que contrasta com as praias urbanas, Tambaba é um destino imperdível para quem busca contato com a natureza preservada.',
      imagem: '/images/geral/rn-pipa.jpg',
      alt: 'Praia de Tambaba',
      lista: [
        'Localização: Conde, a 30 km de João Pessoa - PB.',
        'Destaque: Falésias avermelhadas e piscinas naturais entre recifes.',
        'Natureza: Área de Proteção Ambiental da Barra do Rio Gramame.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Descubra Tambaba',
      texto: 'Tambaba oferece uma experiência de praia selvagem e preservada, com piscinas naturais, trilhas pelas falésias e uma paisagem que parece saída de um cartão-postal.',
      imagem: '/images/geral/rn-baiaformosa.jpg',
      alt: 'Falésias de Tambaba',
      subsecoes: [
        { titulo: 'Piscinas Naturais', texto: 'Na maré baixa, os recifes de corais formam piscinas naturais de água morna e cristalina, perfeitas para banho e snorkeling com peixes coloridos.' },
        { titulo: 'Falésias Coloridas', texto: 'As falésias de arenito avermelhado que emolduram a praia criam um contraste deslumbrante com o azul do mar. O pôr do sol tingindo as falésias é um espetáculo único.' },
        { titulo: 'Trilha das Falésias', texto: 'Uma trilha percorre o topo das falésias oferecendo vistas panorâmicas da praia e do oceano. Ideal para fotos e contemplação da paisagem.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Dicas',
      texto: 'Tambaba fica a 30 km de João Pessoa. O acesso é feito pela PB-008 até Conde, depois por estrada de terra.',
      imagem: '/images/geral/rn-pipa.jpg',
      alt: 'Acesso à Praia de Tambaba',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De João Pessoa, siga pela PB-008 em direção a Conde (30 km). Há vans e ônibus saindo da rodoviária de João Pessoa.' },
        { titulo: 'Melhor Época', texto: 'De setembro a março, com mar mais calmo e piscinas naturais mais acessíveis. Evite períodos de chuva intensa (abril-julho).' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Barraca do Zé', nota: 4.5, contato: '(83) 9999-1111', site: '#' },
            { nome: 'Restaurante Tambaba', nota: 4.4, contato: '(83) 9888-2222', site: '#' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Pousada Tambaba', nota: 4.6, contato: '(83) 3290-1010', site: '#' },
            { nome: 'Chalés Beira Mar', nota: 4.5, contato: '(83) 3290-2020', site: '#' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const PraiaDeTabamba = () => <CearaPontoBase config={config} />;
export default PraiaDeTabamba;
