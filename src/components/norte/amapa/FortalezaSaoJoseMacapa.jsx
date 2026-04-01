import React from 'react';
import CearaPontoBase from '../../CearaPontoBase';

const config = {
  titulo: 'Fortaleza de São José de Macapá',
  subtitulo: 'O maior monumento histórico da Amazônia brasileira.',
  carouselImages: ['/images/geral/amazonas1.avif', '/images/geral/amazonas3.1.jpg'],
  galeriaImages: [
    { src: '/images/geral/amazonas1.avif', alt: 'Fortaleza de São José' },
    { src: '/images/geral/amazonas3.1.jpg', alt: 'Interior da Fortaleza' },
    { src: '/images/geral/oam.jpg', alt: 'Vista do Rio Amazonas da Fortaleza' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'Guardiã da Fronteira Norte do Brasil',
      texto: 'A Fortaleza de São José de Macapá foi construída entre 1764 e 1782 para defender a fronteira norte do Brasil das invasões estrangeiras. Com planta em forma de estrela de quatro pontas, é considerada a maior e mais bem preservada fortaleza da Amazônia brasileira, tombada pelo IPHAN como patrimônio histórico nacional.',
      imagem: '/images/geral/amazonas1.avif',
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
      imagem: '/images/geral/amazonas3.1.jpg',
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
      imagem: '/images/geral/oam.jpg',
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
