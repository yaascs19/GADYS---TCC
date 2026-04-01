import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Centro Dragão do Mar',
  subtitulo: 'O coração cultural de Fortaleza.',
  carouselImages: ['/images/geral/CearaInicio.jpg', '/images/geral/ceara.webp'],
  galeriaImages: [
    { src: '/images/geral/CearaInicio.jpg', alt: 'Centro Dragão do Mar' },
    { src: '/images/geral/ceara.webp', alt: 'Dragão do Mar noturno' },
    { src: '/images/geral/Ceara3.jpg', alt: 'Fortaleza' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'Arte e Cultura no Coração de Fortaleza',
      texto: 'O Centro Cultural Dragão do Mar é o maior complexo cultural do Ceará e um dos mais importantes do Brasil. Inaugurado em 1999, o espaço homenageia Francisco José do Nascimento, o "Dragão do Mar", jangadeiro cearense que se recusou a transportar escravos. Com arquitetura moderna e arrojada, o centro abriga museus, teatro, planetário, cinema e espaços de convivência.',
      imagem: '/images/geral/CearaInicio.jpg',
      alt: 'Fachada do Centro Dragão do Mar',
      lista: [
        'Localização: Praia de Iracema, Fortaleza - CE.',
        'Inauguração: 1999, projeto do arquiteto Fausto Nilo.',
        'Destaques: Museu de Arte Contemporânea, Planetário e Memorial da Cultura Cearense.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Explorar no Dragão do Mar',
      texto: 'O complexo oferece uma programação cultural intensa e diversificada, com exposições, espetáculos e eventos ao longo de todo o ano.',
      imagem: '/images/geral/ceara.webp',
      alt: 'Interior do Dragão do Mar',
      subsecoes: [
        { titulo: 'Museu de Arte Contemporânea (MAC)', texto: 'O MAC Ceará ocupa um dos espaços mais emblemáticos do centro, com exposições permanentes e temporárias de artistas locais, nacionais e internacionais.' },
        { titulo: 'Planetário Rubens de Azevedo', texto: 'Um dos mais modernos do Brasil, o planetário oferece sessões de astronomia que transportam o visitante para uma viagem pelo universo.' },
        { titulo: 'Teatro e Anfiteatro', texto: 'O complexo conta com um teatro fechado e um anfiteatro a céu aberto, onde acontecem shows, peças teatrais e festivais culturais durante todo o ano.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Visitar',
      texto: 'O Centro Dragão do Mar está localizado na Praia de Iracema, uma das regiões mais charmosas de Fortaleza, com fácil acesso por transporte público.',
      imagem: '/images/geral/Ceara3.jpg',
      alt: 'Região da Praia de Iracema',
      subsecoes: [
        { titulo: 'Horários e Ingressos', texto: 'O centro funciona de terça a domingo, das 10h às 21h30. A entrada é gratuita para os espaços externos. Museus e planetário têm ingressos a partir de R$ 10.' },
        { titulo: 'Como Chegar', texto: 'Localizado na Rua Dragão do Mar, 81, Praia de Iracema. Acessível por ônibus, metrô (estação José de Alencar) ou aplicativos de transporte.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer por Perto',
          itens: [
            { nome: 'Restaurante Colher de Pau', nota: 4.8, contato: '(85) 3219-3773', site: 'https://www.colherdepau.com.br/' },
            { nome: 'Coco Bambu Iracema', nota: 4.6, contato: '(85) 3198-4747', site: 'https://www.cocobambu.com.br/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Gran Marquise Hotel', nota: 4.8, contato: '(85) 3466-5000', site: 'https://www.granmarquise.com.br/' },
            { nome: 'Hotel Luzeiros Fortaleza', nota: 4.7, contato: '(85) 4006-8585', site: 'https://www.luzeiroshotel.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const DragaoDoMar = () => <CearaPontoBase config={config} />;
export default DragaoDoMar;
