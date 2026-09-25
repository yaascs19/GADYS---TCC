import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Luís Correia',
  subtitulo: 'Dunas, lagoas e as praias mais selvagens do litoral piauiense.',
  carouselImages: ['/images/geral/pi-luiscorreia.jpg', '/images/geral/pi4.jpg'],
  galeriaImages: [
    { src: '/images/geral/pi-luiscorreia.jpg', alt: 'Luís Correia' },
    { src: '/images/geral/pi4.jpg', alt: 'Praia de Luís Correia' },
    { src: '/images/geral/pi1.jpg', alt: 'Dunas de Luís Correia' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Litoral Selvagem do Piauí',
      texto: 'Luís Correia é o principal destino de praia do Piauí e um dos litorais mais preservados do Nordeste. Com praias de areia fina, dunas douradas, lagoas de água doce e uma natureza praticamente intocada, a cidade encanta quem busca tranquilidade longe do turismo de massa. A Praia do Atalaia, com suas piscinas naturais, e a Praia de Carnaubinha, com suas dunas imponentes, são os cartões-postais da região.',
      imagem: '/images/geral/pi-luiscorreia.jpg',
      alt: 'Praia de Luís Correia',
      lista: [
        'Localização: Litoral norte do PI, a 340 km de Teresina.',
        'Destaque: Praia do Atalaia com piscinas naturais e dunas.',
        'Natureza: Um dos litorais mais preservados do Nordeste.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer em Luís Correia',
      texto: 'Luís Correia oferece praias selvagens, dunas e lagoas para todos os gostos.',
      imagem: '/images/geral/pi4.jpg',
      alt: 'Praia de Luís Correia',
      subsecoes: [
        {
          titulo: 'Praia do Atalaia',
          texto: 'A praia mais famosa de Luís Correia, com piscinas naturais formadas pelos recifes de corais na maré baixa. As águas calmas e cristalinas são perfeitas para banho e snorkeling.',
        },
        {
          titulo: 'Dunas de Carnaubinha',
          texto: 'As dunas de Carnaubinha são algumas das mais altas do litoral piauiense. O passeio de buggy pelas dunas e a descida de sandboard são as atrações mais procuradas.',
        },
        {
          titulo: 'Lagoa do Portinho',
          texto: 'A Lagoa do Portinho é uma das mais belas do litoral piauiense — água doce cristalina cercada de dunas e coqueiros. Perfeita para banho e passeios de caiaque.',
        },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Hospedar',
      texto: 'Luís Correia fica a 340 km de Teresina, com acesso pela BR-343.',
      imagem: '/images/geral/pi-luiscorreia.jpg',
      alt: 'Luís Correia',
      subsecoes: [
        {
          titulo: 'Como Chegar',
          texto: 'De Teresina, siga pela BR-343 até Parnaíba e depois pela PI-116 até Luís Correia (aprox. 4h). Há ônibus regulares saindo de Teresina e Parnaíba.',
        },
        {
          titulo: 'Melhor Época',
          texto: 'De julho a dezembro para praias e sol. O período chuvoso (janeiro a junho) traz lagoas mais cheias, mas o mar fica mais agitado.',
        },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Atalaia', nota: 4.7, contato: '(86) 3368-1234', site: 'https://www.instagram.com/restauranteatalaia.pi/' },
            { nome: 'Barraca do Portinho', nota: 4.5, contato: '(86) 99876-1234', site: 'https://www.instagram.com/barracadoportinho/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Pousada Atalaia', nota: 4.7, contato: '(86) 3368-2222', site: 'https://www.pousadaatalaia.com.br/' },
            { nome: 'Hotel Luís Correia', nota: 4.4, contato: '(86) 3368-3333', site: 'https://www.hotelluiscorreia.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const LuisCorreia = () => <CearaPontoBase config={config} />;
export default LuisCorreia;
