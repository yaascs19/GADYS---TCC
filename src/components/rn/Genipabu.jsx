import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Dunas de Genipabu',
  subtitulo: 'O deserto à beira-mar — dunas gigantes, lagoas e o famoso passeio de dromedário.',
  carouselImages: ['/images/geral/rn-genipabu.jpg', '/images/geral/rn1.jpg'],
  galeriaImages: [
    { src: '/images/geral/rn-genipabu.jpg', alt: 'Dunas de Genipabu' },
    { src: '/images/geral/rn1.jpg', alt: 'Lagoa de Genipabu' },
    { src: '/images/geral/rn2.jpg', alt: 'Passeio de buggy em Genipabu' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Deserto à Beira-Mar',
      texto: 'As Dunas de Genipabu são um dos cartões-postais mais famosos do Brasil. Localizadas a apenas 25 km de Natal, as dunas formam um cenário de tirar o fôlego — um deserto dourado que encontra o mar azul do Atlântico. O Parque Estadual das Dunas de Genipabu protege mais de 1.800 hectares de dunas móveis, lagoas de água doce e vegetação de restinga.',
      imagem: '/images/geral/rn-genipabu.jpg',
      alt: 'Dunas douradas de Genipabu',
      lista: [
        'Localização: Extremoz, a 25 km de Natal - RN.',
        'Área: Mais de 1.800 hectares de dunas protegidas.',
        'Destaque: Passeio de buggy com emoção e de dromedário.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer em Genipabu',
      texto: 'Genipabu oferece aventura, natureza e paisagens únicas para todos os perfis de viajante.',
      imagem: '/images/geral/rn1.jpg',
      alt: 'Lagoa de Genipabu',
      subsecoes: [
        {
          titulo: 'Passeio de Buggy',
          texto: 'O passeio de buggy pelas dunas é a atração mais famosa de Genipabu. Os buggys percorrem as dunas em alta velocidade — com ou sem emoção, conforme a preferência do visitante.',
        },
        {
          titulo: 'Passeio de Dromedário',
          texto: 'Uma das experiências mais inusitadas do Brasil: passear de dromedário pelas dunas de Genipabu. Os animais são dóceis e o passeio é tranquilo, ideal para famílias.',
        },
        {
          titulo: 'Lagoa de Genipabu',
          texto: 'A lagoa de água doce no meio das dunas é perfeita para um mergulho refrescante. Barracas ao redor servem petiscos e bebidas geladas com vista para as dunas.',
        },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Preparar',
      texto: 'Genipabu fica a 25 km de Natal, com acesso pela RN-301.',
      imagem: '/images/geral/rn-genipabu.jpg',
      alt: 'Genipabu',
      subsecoes: [
        {
          titulo: 'Como Chegar',
          texto: 'De Natal, siga pela RN-301 até Extremoz e depois até Genipabu (aprox. 40 min). Táxis e aplicativos de transporte fazem o trajeto. Há também passeios organizados saindo de Natal.',
        },
        {
          titulo: 'Melhor Época',
          texto: 'De agosto a dezembro, quando as chuvas são menores e o sol predomina. Evite o período chuvoso (março a julho), quando as dunas ficam mais úmidas.',
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
