import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Centro Histórico de Teresina',
  subtitulo: 'A única capital brasileira planejada no Império — história, cultura e o encontro dos rios Parnaíba e Poti.',
  carouselImages: ['/images/geral/pi-teresina.jpg', '/images/geral/pi4.jpg'],
  galeriaImages: [
    { src: '/images/geral/pi-teresina.jpg', alt: 'Centro Histórico de Teresina' },
    { src: '/images/geral/pi4.jpg', alt: 'Rio Parnaíba em Teresina' },
    { src: '/images/geral/pi1.jpg', alt: 'Museu do Piauí' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Capital Planejada do Império',
      texto: 'Teresina é a única capital brasileira fundada durante o período imperial (1852) e a única planejada desde o início com ruas largas e quadras regulares. Às margens do Rio Parnaíba, a cidade guarda um rico patrimônio histórico e cultural — do Museu do Piauí ao Palácio de Karnak, do Mercado do Artesanato ao encontro dos rios Parnaíba e Poti, conhecido como "Encontro dos Rios".',
      imagem: '/images/geral/pi-teresina.jpg',
      alt: 'Centro Histórico de Teresina',
      lista: [
        'Localização: Às margens do Rio Parnaíba, capital do Piauí.',
        'Fundação: 1852 — única capital brasileira fundada no Império.',
        'Destaque: Encontro dos Rios Parnaíba e Poti — fenômeno natural único.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer em Teresina',
      texto: 'Teresina combina história, cultura e natureza em uma capital dinâmica e acolhedora.',
      imagem: '/images/geral/pi4.jpg',
      alt: 'Rio Parnaíba em Teresina',
      subsecoes: [
        {
          titulo: 'Encontro dos Rios',
          texto: 'O encontro dos rios Parnaíba e Poti é um fenômeno natural único — as águas dos dois rios correm lado a lado sem se misturar por alguns quilômetros. O Parque Encontro dos Rios oferece trilhas e mirantes.',
        },
        {
          titulo: 'Museu do Piauí',
          texto: 'Instalado no Palácio da Cidade, o Museu do Piauí abriga um acervo de mais de 3 mil peças que contam a história do estado desde a pré-história até os dias atuais.',
        },
        {
          titulo: 'Mercado do Artesanato',
          texto: 'O Mercado do Artesanato Piauiense reúne artesãos de todo o estado. Cerâmica, bordados, rendas, couro e produtos do cerrado são os destaques de um dos melhores mercados de artesanato do Nordeste.',
        },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Hospedar',
      texto: 'Teresina possui o Aeroporto Internacional Senador Petrônio Portella com voos das principais capitais.',
      imagem: '/images/geral/pi-teresina.jpg',
      alt: 'Teresina',
      subsecoes: [
        {
          titulo: 'Como Chegar',
          texto: 'De avião pelo Aeroporto Internacional Senador Petrônio Portella. De carro pela BR-316 ou BR-343. De ônibus com linhas de todo o Nordeste.',
        },
        {
          titulo: 'Melhor Época',
          texto: 'De julho a novembro para clima mais seco. Teresina é uma das cidades mais quentes do Brasil — leve roupas leves e hidrate-se bastante.',
        },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Favorito', nota: 4.8, contato: '(86) 3221-1234', site: 'https://www.instagram.com/restaurantefavorito.pi/' },
            { nome: 'Carneiro do Piauí', nota: 4.7, contato: '(86) 3221-5678', site: 'https://www.instagram.com/carneiropi/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Hotel Rio Poty', nota: 4.7, contato: '(86) 3216-9000', site: 'https://www.hotelriopoty.com.br/' },
            { nome: 'Metropolitan Hotel Teresina', nota: 4.6, contato: '(86) 3221-7000', site: 'https://www.metropolitanhotel.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const TeresinaHistorico = () => <CearaPontoBase config={config} />;
export default TeresinaHistorico;
