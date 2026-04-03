import React from 'react';
import SudestePontoDetalheBase from '../../sudeste/SudestePontoDetalheBase';

const config = {
  titulo: 'Guarapari',
  subtitulo: 'A Cidade Saúde — praias terapêuticas do Espírito Santo.',
  voltarRota: '/es-pontos',
  carouselImages: ['/images/geral/praiaEx.jpg', '/images/natureza/bonito.jpeg'],
  galeriaImages: [
    { src: '/images/geral/praiaEx.jpg', alt: 'Praia de Guarapari' },
    { src: '/images/natureza/bonito.jpeg', alt: 'Águas cristalinas de Guarapari' },
    { src: '/images/natureza/veadeiros.jpeg', alt: 'Guarapari vista aérea' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'As Areias que Curam',
      texto: 'Guarapari é conhecida como a "Cidade Saúde" do Brasil por causa de suas areias monazíticas, que contêm minerais radioativos com propriedades terapêuticas. A cidade possui mais de 23 praias, com águas mornas e cristalinas, e é um dos destinos turísticos mais visitados do Espírito Santo, recebendo mais de 1 milhão de turistas por ano.',
      imagem: '/images/geral/praiaEx.jpg',
      alt: 'Praia de Guarapari com areias monazíticas',
      lista: [
        'Praias: Mais de 23 praias ao longo do litoral.',
        'Destaque: Areias monazíticas com propriedades terapêuticas.',
        'Temperatura: Águas mornas entre 24°C e 28°C.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Sol, Mar e Saúde em Guarapari',
      texto: 'Guarapari oferece muito mais do que praias. A cidade tem uma infraestrutura turística completa para todos os perfis de visitantes.',
      imagem: '/images/natureza/bonito.jpeg',
      alt: 'Mergulho em Guarapari',
      subsecoes: [
        { titulo: 'Praias Principais', texto: 'A Praia do Morro, com 4 km de extensão, é a mais movimentada. A Praia de Meaípe é famosa pelos frutos do mar frescos. A Praia das Castanheiras é ideal para famílias com crianças.' },
        { titulo: 'Mergulho e Esportes', texto: 'As águas claras de Guarapari são perfeitas para mergulho, com visibilidade de até 15 metros. Passeios de barco, stand-up paddle e kitesurf também são populares na região.' },
        { titulo: 'Gastronomia', texto: 'Os frutos do mar de Guarapari são famosos em todo o Brasil. Caranguejos, lagostas, camarões e peixes frescos são servidos nas barracas e restaurantes da orla.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar a Guarapari',
      texto: 'Guarapari fica a 53 km de Vitória e é facilmente acessível de carro ou ônibus.',
      imagem: '/images/natureza/veadeiros.jpeg',
      alt: 'Vista aérea de Guarapari',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De Vitória, siga pela BR-101 Sul até Guarapari (53 km, 45 min). Há ônibus regulares saindo do Terminal de Vitória. O aeroporto mais próximo é o de Vitória (Eurico de Aguiar Salles).' },
        { titulo: 'Melhor Época', texto: 'De dezembro a março, na alta temporada, as praias ficam mais movimentadas. De abril a novembro, o clima é mais ameno e as praias menos lotadas, com preços mais acessíveis.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Meaípe', nota: 4.8, contato: '(27) 3272-1234', site: 'https://www.instagram.com/' },
            { nome: 'Barraca do Zé', nota: 4.7, contato: '(27) 3272-5678', site: 'https://www.instagram.com/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Hotel Praia do Morro', nota: 4.6, contato: '(27) 3261-1000', site: 'https://www.instagram.com/' },
            { nome: 'Pousada Sol e Mar', nota: 4.7, contato: '(27) 3261-5678', site: 'https://www.instagram.com/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const Guarapari = () => <SudestePontoDetalheBase config={config} />;
export default Guarapari;
