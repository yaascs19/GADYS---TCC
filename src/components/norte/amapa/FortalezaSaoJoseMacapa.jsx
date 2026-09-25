import React from 'react';
import CearaPontoBase from '../../CearaPontoBase';

const config = {
  titulo: 'Fortaleza de São José de Macapá',
  subtitulo: 'O maior monumento histórico da Amazônia brasileira.',
  tema: {
    bg: '#1e2a1a',
    texto: '#e8ead5',
    card: '#2e3d22',
    acento: '#8a9a5b',
    navTexto: '#b0b88a',
    navAtivo: '#d4c97a',
    navBorda: '#d4c97a',
    tituloTexto: '#d4c97a',
    recCard: '#2e3d22',
    recNome: '#e8ead5',
    recContato: '#1e2a1a',
    recContatoBg: '#8a9a5b',
    footerBg: 'linear-gradient(135deg, #2e3d22, #0e1a0a)',
    footerTexto: '#d4c97a',
  },
  carouselImages: ['/images/geral/Fortaleza de São José de Macapá.1.jpeg', '/images/geral/Fortaleza de São José de Macapá.3.jpg'],
  galeriaImages: [
    { src: '/images/geral/Fortaleza de São José de Macapá.1.jpeg', alt: 'Fortaleza de São José' },
    { src: '/images/geral/Fortaleza de São José de Macapá.2.webp', alt: 'Como Visitar a Fortaleza' },
    { src: '/images/geral/Fortaleza de São José de Macapá.3.jpg', alt: 'Interior da Fortaleza' },
    { src: '/images/geral/Fortaleza de São José de Macapá.4.jpg', alt: 'Guardiã da Fronteira Norte' },
    { src: '/images/geral/Fortaleza de São José de Macapá.5.jpg', alt: 'Mergulhe na História Colonial' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'Guardiã da Fronteira Norte do Brasil',
      texto: 'A Fortaleza de São José de Macapá foi construída entre 1764 e 1782 para defender a fronteira norte do Brasil das invasões estrangeiras. Com planta em forma de estrela de quatro pontas, é considerada a maior e mais bem preservada fortaleza da Amazônia brasileira, tombada pelo IPHAN como patrimônio histórico nacional.',
      imagem: '/images/geral/Fortaleza de São José de Macapá.4.jpg',
      alt: 'Vista aérea da Fortaleza de São José',
      lista: [
        'Construção: Entre 1764 e 1782, período colonial português.',
        'Arquitetura: Planta estrelada com quatro baluartes.',
        'Localização: Às margens do Rio Amazonas, em Macapá.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Mergulhe na História Colonial',
      texto: 'A Fortaleza de São José oferece uma experiência única de imersão na história colonial da Amazônia.',
      imagem: '/images/geral/Fortaleza de São José de Macapá.5.jpg',
      alt: 'Canhões da Fortaleza de São José',
      subsecoes: [
        { titulo: 'Visita Guiada', texto: 'Guias especializados conduzem os visitantes pelos baluartes, casamatas e o pátio central da fortaleza, contando a história da construção e das batalhas travadas para defender a fronteira norte do Brasil.' },
        { titulo: 'Vista do Rio Amazonas', texto: 'Da muralha da fortaleza, é possível contemplar uma vista deslumbrante do Rio Amazonas e da ilha de Santana. Ao entardecer, o pôr do sol sobre o rio é um espetáculo inesquecível.' },
        { titulo: 'Eventos Culturais', texto: 'A fortaleza é palco de shows, festivais e eventos culturais ao longo do ano, especialmente durante o Festival do Marabaixo e as festas juninas de Macapá.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Visitar a Fortaleza',
      texto: 'A Fortaleza de São José de Macapá está localizada no centro histórico da capital, de fácil acesso a pé ou de táxi.',
      imagem: '/images/geral/Fortaleza de São José de Macapá.2.webp',
      alt: 'Entrada da Fortaleza de São José',
      subsecoes: [
        { titulo: 'Horários e Ingressos', texto: 'A fortaleza funciona de terça a domingo, das 9h às 18h. A entrada é gratuita. Visitas guiadas são realizadas às 10h e às 15h, com duração de aproximadamente 1 hora.' },
        { titulo: 'Como Chegar', texto: 'Localizada na Rua Cândido Mendes, no centro de Macapá. Acessível a pé do Marco Zero do Equador (500m) ou de táxi e aplicativos de transporte.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer por Perto',
          itens: [
            { nome: 'Restaurante Cantina Italiana', nota: 4.7, contato: '(96) 3222-1234', site: 'https://www.instagram.com/' },
            { nome: 'Peixaria do Amazonas', nota: 4.8, contato: '(96) 3223-5678', site: 'https://www.instagram.com/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Hotel Novotel Macapá', nota: 4.6, contato: '(96) 3198-3000', site: 'https://www.instagram.com/' },
            { nome: 'Pousada Ekinox', nota: 4.7, contato: '(96) 9999-1234', site: 'https://www.instagram.com/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const FortalezaSaoJoseMacapa = () => <CearaPontoBase config={config} />;
export default FortalezaSaoJoseMacapa;
