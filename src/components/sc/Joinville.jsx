import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Joinville',
  subtitulo: 'A Cidade das Flores — capital industrial e cultural do sul do Brasil.',
  carouselImages: ['/images/geral/sc-joinville.jpg', '/images/geral/sc3.jpg'],
  galeriaImages: [
    { src: '/images/geral/sc-joinville.jpg', alt: 'Joinville' },
    { src: '/images/geral/sc3.jpg', alt: 'Festival de Dança de Joinville' },
    { src: '/images/geral/sc4.jpg', alt: 'Centro histórico de Joinville' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Cidade das Flores',
      texto: 'Joinville é a maior cidade de Santa Catarina e um dos principais polos industriais do Sul do Brasil. Fundada por imigrantes alemães, noruegueses e suíços em 1851, a cidade mantém viva sua herança europeia na arquitetura, gastronomia e cultura. É sede do maior festival de dança do mundo — o Festival de Dança de Joinville, que reúne mais de 6.000 bailarinos anualmente.',
      imagem: '/images/geral/sc-joinville.jpg',
      alt: 'Joinville',
      lista: [
        'Localização: Norte de Santa Catarina, a 180 km de Florianópolis.',
        'Destaque: Festival de Dança de Joinville — o maior do mundo.',
        'Cultura: Herança alemã, norueguesa e suíça na arquitetura e gastronomia.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer em Joinville',
      texto: 'Joinville combina cultura, história e natureza em uma cidade dinâmica e acolhedora.',
      imagem: '/images/geral/sc3.jpg',
      alt: 'Festival de Dança de Joinville',
      subsecoes: [
        { titulo: 'Festival de Dança', texto: 'Realizado em julho, o Festival de Dança de Joinville é o maior do mundo, com mais de 6.000 bailarinos de todo o Brasil e do exterior. Um espetáculo imperdível.' },
        { titulo: 'Museu Nacional de Imigração e Colonização', texto: 'Instalado no Palácio dos Príncipes, o museu conta a história da imigração europeia em Santa Catarina com acervo rico e bem preservado.' },
        { titulo: 'Rota das Flores', texto: 'Joinville é conhecida como a Cidade das Flores. A Rota das Flores leva o visitante por jardins, estufas e propriedades rurais com flores exóticas.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Hospedar',
      texto: 'Joinville possui aeroporto próprio (Lauro Carneiro de Loyola) com voos de São Paulo, Rio de Janeiro e outras capitais.',
      imagem: '/images/geral/sc-joinville.jpg',
      alt: 'Joinville',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De avião pelo Aeroporto Lauro Carneiro de Loyola. De carro pela BR-101. De ônibus com linhas de todo o Brasil.' },
        { titulo: 'Melhor Época', texto: 'Julho para o Festival de Dança. Setembro a novembro para a florada. O ano todo para turismo cultural e de negócios.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Biergarten Joinville', nota: 4.7, contato: '(47) 3422-1234', site: 'https://www.instagram.com/biergartenjoinville/' },
            { nome: 'Restaurante Tante Frida', nota: 4.8, contato: '(47) 3422-5678', site: 'https://www.tantefrida.com.br/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Bourbon Joinville Business Hotel', nota: 4.7, contato: '(47) 3461-0800', site: 'https://www.bourbon.com.br/' },
            { nome: 'Intercity Joinville', nota: 4.6, contato: '(47) 3026-8000', site: 'https://www.intercityhoteis.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const Joinville = () => <CearaPontoBase config={config} />;
export default Joinville;
