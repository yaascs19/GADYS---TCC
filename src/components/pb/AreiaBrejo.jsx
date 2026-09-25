import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Areia e o Brejo Paraibano',
  subtitulo: 'Cidade histórica, cachaça artesanal e o verde do Brejo.',
  carouselImages: ['/images/geral/rn-cultura.jpg', '/images/geral/pelo.jpg'],
  galeriaImages: [
    { src: '/images/geral/rn-cultura.jpg', alt: 'Areia - PB' },
    { src: '/images/geral/pelo.jpg', alt: 'Centro histórico de Areia' },
    { src: '/images/geral/rn-gastronomia.jpg', alt: 'Gastronomia do Brejo' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Pérola do Brejo Paraibano',
      texto: 'Areia é uma das cidades mais históricas e charmosas da Paraíba, localizada no Brejo Paraibano — uma região serrana com clima ameno e vegetação exuberante que contrasta com o sertão ao redor. Fundada no século XVII, a cidade preserva casarões coloniais, igrejas históricas e é famosa pela produção de cachaça artesanal e pela Escola de Agronomia da UFPB.',
      imagem: '/images/geral/rn-cultura.jpg',
      alt: 'Areia - PB',
      lista: [
        'Localização: Brejo Paraibano, a 130 km de João Pessoa.',
        'Destaque: Casarões coloniais e produção de cachaça artesanal.',
        'Clima: Ameno, com temperaturas entre 18°C e 26°C.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Descubra o Brejo',
      texto: 'Areia e o Brejo Paraibano oferecem uma experiência única de turismo histórico, cultural e gastronômico em meio a uma natureza exuberante.',
      imagem: '/images/geral/pelo.jpg',
      alt: 'Centro histórico de Areia',
      subsecoes: [
        { titulo: 'Centro Histórico', texto: 'O centro de Areia preserva casarões do século XIX, a Igreja Nossa Senhora da Conceição e o Museu do Brejo Paraibano, com acervo sobre a história da região.' },
        { titulo: 'Engenhos e Cachaça', texto: 'A região é famosa pela produção de cachaça artesanal nos engenhos históricos. Visitas guiadas permitem conhecer o processo de produção e degustar as variedades locais.' },
        { titulo: 'Natureza do Brejo', texto: 'O Brejo Paraibano tem cachoeiras, trilhas e mirantes com vistas deslumbrantes do vale. A Cachoeira do Roncador e o Pico do Jabre são destinos imperdíveis na região.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Dicas',
      texto: 'Areia fica a 130 km de João Pessoa pela BR-230 e PB-057. A cidade tem boa infraestrutura para turismo rural e histórico.',
      imagem: '/images/geral/rn-cultura.jpg',
      alt: 'Areia - PB',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De João Pessoa, siga pela BR-230 até Campina Grande, depois pela PB-057 até Areia (130 km, 2h de carro). Há ônibus regulares.' },
        { titulo: 'Melhor Época', texto: 'O clima é agradável o ano todo. De abril a julho, o Brejo fica mais verde com as chuvas. Junho é época de festas juninas na região.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Sabor do Brejo', nota: 4.6, contato: '(83) 3362-1234', site: '#' },
            { nome: 'Casa de Taipa', nota: 4.5, contato: '(83) 3362-2345', site: '#' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Pousada do Brejo', nota: 4.6, contato: '(83) 3362-3456', site: '#' },
            { nome: 'Hotel Fazenda Areia', nota: 4.5, contato: '(83) 3362-4567', site: '#' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const AreiaBrejo = () => <CearaPontoBase config={config} />;
export default AreiaBrejo;
