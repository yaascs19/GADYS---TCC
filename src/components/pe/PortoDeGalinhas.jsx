import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Porto de Galinhas',
  subtitulo: 'A praia mais bonita do Brasil por anos consecutivos.',
  carouselImages: ['/images/geral/fe-pe.jpg', '/images/geral/fe-pe.jpg'],
  galeriaImages: [
    { src: '/images/geral/fe-pe.jpg', alt: 'Porto de Galinhas' },
    { src: '/images/geral/fe-pe.jpg', alt: 'Piscinas naturais de Porto de Galinhas' },
    { src: '/images/geral/fe-pe.jpg', alt: 'Jangadas em Porto de Galinhas' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Destino Mais Premiado do Brasil',
      texto: 'Porto de Galinhas é uma das praias mais famosas e premiadas do Brasil, eleita por anos consecutivos a mais bonita do país pela revista Viagem e Turismo. Localizada a 60 km ao sul do Recife, a praia encanta pelas suas piscinas naturais formadas pelos recifes de corais, onde peixes coloridos nadam entre os banhistas.',
      imagem: '/images/geral/fe-pe.jpg',
      alt: 'Porto de Galinhas',
      lista: [
        'Localização: Ipojuca, a 60 km ao sul do Recife.',
        'Destaque: Piscinas naturais com peixes coloridos entre os recifes.',
        'Prêmio: Eleita a praia mais bonita do Brasil por anos consecutivos.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Viva Porto de Galinhas',
      texto: 'As piscinas naturais são a grande atração, mas Porto de Galinhas oferece muito mais: passeios de jangada, mergulho, kitesurf e uma vila charmosa com restaurantes e pousadas.',
      imagem: '/images/geral/fe-pe.jpg',
      alt: 'Piscinas naturais',
      subsecoes: [
        { titulo: 'Piscinas Naturais', texto: 'Na maré baixa, os recifes de corais formam piscinas naturais de água morna e cristalina. Jangadeiros levam os turistas até os recifes para nadar com os peixes.' },
        { titulo: 'Mergulho e Snorkeling', texto: 'A costa de Porto de Galinhas tem vários pontos de mergulho com rica vida marinha. Escolas locais oferecem cursos e passeios guiados.' },
        { titulo: 'Praia de Maracaípe', texto: 'A 3 km da vila, Maracaípe é famosa pelas ondas perfeitas para o surfe e pelos cavalos-marinhos que habitam o manguezal.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Dicas',
      texto: 'Porto de Galinhas fica a 60 km do Recife. O acesso é feito pela PE-060. A vila tem boa infraestrutura com pousadas, restaurantes e lojas de artesanato.',
      imagem: '/images/geral/fe-pe.jpg',
      alt: 'Vila de Porto de Galinhas',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De Recife, siga pela BR-101 Sul até Ipojuca, depois pela PE-060 (1h de carro). Há ônibus e vans saindo do centro do Recife.' },
        { titulo: 'Melhor Época', texto: 'De setembro a março, com mar mais calmo e piscinas naturais mais acessíveis. Evite feriados e alta temporada para menos movimento.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Beijupirá', nota: 4.8, contato: '(81) 3552-2354', site: 'https://www.beijupira.com.br/' },
            { nome: 'Peixe na Telha', nota: 4.7, contato: '(81) 3552-1525', site: '#' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Nannai Resort', nota: 4.9, contato: '(81) 3552-0100', site: 'https://www.nannai.com.br/' },
            { nome: 'Pousada Tabapitanga', nota: 4.8, contato: '(81) 3552-1037', site: 'https://www.tabapitanga.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const PortoDeGalinhas = () => <CearaPontoBase config={config} />;
export default PortoDeGalinhas;
