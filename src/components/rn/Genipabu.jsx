import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Dunas de Genipabu',
  subtitulo: 'O deserto à beira-mar — dunas gigantes, lagoas cristalinas e o famoso passeio de dromedário.',
  carouselImages: [
    '/images/geral/Dunas de Genipabu.jpg',
    '/images/geral/Dunas de Genipabu1.jpg',
  ],
  galeriaImages: [
    { src: '/images/geral/Dunas de Genipabu.jpg', alt: 'Dunas de Genipabu' },
    { src: '/images/geral/Dunas de Genipabu1.jpg', alt: 'Dunas de Genipabu' },
    { src: '/images/geral/Dunas de Genipabu2.jpg', alt: 'Dunas de Genipabu' },
    { src: '/images/geral/Dunas de Genipabu3.jpg', alt: 'Dunas de Genipabu' },
    { src: '/images/geral/Dunas de Genipabu4.jpg', alt: 'Dunas de Genipabu' },
  ],
  tema: {
    bg: '#0d1e2c',
    texto: '#f0e6cc',
    tituloTexto: '#f5c842',
    acento: '#e8a020',
    card: 'rgba(232,160,32,0.1)',
    navTexto: '#c9b07a',
    navAtivo: '#f5c842',
    navBorda: '#e8a020',
    recCard: 'rgba(232,160,32,0.13)',
    recNome: '#f5c842',
    recContato: '#f0e6cc',
    recContatoBg: 'rgba(232,160,32,0.2)',
    footerBg: 'linear-gradient(135deg, #1a3a52, #0d1e2c)',
    footerTexto: '#c9b07a',
  },
  voltarEstilo: {
    background: 'rgba(232,160,32,0.25)',
    borderColor: '#f5c842',
  },
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Deserto à Beira-Mar',
      texto: 'As Dunas de Genipabu são um dos cartões-postais mais famosos do Brasil. Localizadas a apenas 25 km de Natal, as dunas formam um cenário de tirar o fôlego — um deserto dourado que encontra o azul do Atlântico. O Parque Estadual das Dunas de Genipabu protege mais de 1.800 hectares de dunas móveis, lagoas de água doce e vegetação de restinga, sendo um dos ecossistemas costeiros mais únicos do Nordeste.',
      imagem: '/images/geral/Dunas de Genipabu.jpg',
      alt: 'Dunas douradas de Genipabu',
      lista: [
        'Localização: Extremoz, a 25 km de Natal - RN.',
        'Área: Mais de 1.800 hectares de dunas protegidas.',
        'Destaque: Passeio de buggy com emoção e de dromedário.',
        'Lagoa: Água doce cristalina no meio das dunas — perfeita para banho.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer em Genipabu',
      texto: 'Genipabu oferece aventura, natureza e paisagens únicas para todos os perfis de viajante — de famílias a aventureiros.',
      imagem: '/images/geral/Dunas de Genipabu2.jpg',
      alt: 'Passeio de buggy nas dunas',
      subsecoes: [
        {
          titulo: 'Passeio de Buggy',
          texto: 'O passeio de buggy pelas dunas é a atração mais famosa de Genipabu. Os buggys percorrem as dunas em alta velocidade — com ou sem emoção, conforme a preferência. Uma experiência inesquecível com vistas deslumbrantes.',
        },
        {
          titulo: 'Passeio de Dromedário',
          texto: 'Uma das experiências mais inusitadas do Brasil: passear de dromedário pelas dunas douradas. Os animais são dóceis e o passeio é tranquilo, ideal para famílias com crianças e para quem quer uma foto única.',
        },
        {
          titulo: 'Lagoa de Genipabu',
          texto: 'A lagoa de água doce no meio das dunas é perfeita para um mergulho refrescante. Barracas ao redor servem petiscos e bebidas geladas com vista panorâmica para as dunas e o mar ao fundo.',
        },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Preparar',
      texto: 'Genipabu fica a 25 km de Natal, com acesso fácil pela RN-301 em direção a Extremoz.',
      imagem: '/images/geral/Dunas de Genipabu3.jpg',
      alt: 'Dunas de Genipabu ao entardecer',
      subsecoes: [
        {
          titulo: 'Como Chegar',
          texto: 'De Natal, siga pela RN-301 até Extremoz e depois até Genipabu (aprox. 40 min de carro). Táxis e aplicativos fazem o trajeto. Há também passeios organizados saindo de Natal com guia incluso.',
        },
        {
          titulo: 'Melhor Época',
          texto: 'De agosto a dezembro, quando as chuvas são menores e o sol predomina. Evite o período chuvoso (março a julho). Leve protetor solar, óculos escuros e muita água — o calor é intenso.',
        },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Dunas', nota: 4.7, contato: '(84) 3225-1234', site: 'https://www.instagram.com/restaurantedunas/' },
            { nome: 'Barraca da Lagoa', nota: 4.5, contato: '(84) 99876-5432', site: 'https://www.instagram.com/barracadalagoa/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Pousada Genipabu', nota: 4.7, contato: '(84) 3225-2222', site: 'https://www.pousadagenipabu.com.br/' },
            { nome: 'Hotel Dunas de Genipabu', nota: 4.5, contato: '(84) 3225-3333', site: 'https://www.hoteldunasgenipabu.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const Genipabu = () => <CearaPontoBase config={config} />;
export default Genipabu;
