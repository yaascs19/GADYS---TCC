import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Maracajaú',
  subtitulo: 'Os parrachos mais bonitos do Brasil — mergulho em piscinas naturais a 7 km do litoral.',
  carouselImages: ['/images/geral/rn-maracajau.jpg', '/images/geral/rn3.jpg'],
  galeriaImages: [
    { src: '/images/geral/rn-maracajau.jpg', alt: 'Maracajaú' },
    { src: '/images/geral/rn3.jpg', alt: 'Parrachos de Maracajaú' },
    { src: '/images/geral/rn4.jpg', alt: 'Mergulho em Maracajaú' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Aquário Natural do RN',
      texto: 'Maracajaú é famosa pelos seus parrachos — recifes de corais que emergem do mar a cerca de 7 km da costa, formando piscinas naturais de águas cristalinas com visibilidade de até 10 metros. O local é considerado um dos melhores destinos de mergulho e snorkeling do Brasil, com uma rica biodiversidade marinha protegida pela APA dos Recifes de Corais.',
      imagem: '/images/geral/rn-maracajau.jpg',
      alt: 'Parrachos de Maracajaú',
      lista: [
        'Localização: Maxaranguape, a 60 km de Natal - RN.',
        'Destaque: Parrachos a 7 km da costa com visibilidade de até 10 metros.',
        'Proteção: APA dos Recifes de Corais — área de proteção ambiental.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer em Maracajaú',
      texto: 'Maracajaú é o destino ideal para quem ama o mar e a vida marinha.',
      imagem: '/images/geral/rn3.jpg',
      alt: 'Parrachos de Maracajaú',
      subsecoes: [
        {
          titulo: 'Mergulho nos Parrachos',
          texto: 'Os parrachos de Maracajaú formam piscinas naturais rasas (1 a 3 metros) e profundas (até 10 metros). Operadoras locais oferecem passeios de barco com equipamento de snorkeling e mergulho.',
        },
        {
          titulo: 'Passeio de Catamarã',
          texto: 'O passeio de catamarã até os parrachos é a forma mais popular de chegar aos recifes. A viagem dura cerca de 30 minutos e já inclui o equipamento de snorkeling.',
        },
        {
          titulo: 'Observação da Vida Marinha',
          texto: 'Nos parrachos é possível observar peixes coloridos, estrelas-do-mar, ouriços e até tartarugas marinhas. A biodiversidade é impressionante e bem preservada.',
        },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Preparar',
      texto: 'Maracajaú fica a 60 km de Natal, com acesso pela BR-101 Norte.',
      imagem: '/images/geral/rn-maracajau.jpg',
      alt: 'Maracajaú',
      subsecoes: [
        {
          titulo: 'Como Chegar',
          texto: 'De Natal, siga pela BR-101 Norte até Maxaranguape (aprox. 1h). Os passeios partem do Porto de Maracajaú. Há também excursões organizadas saindo de Natal.',
        },
        {
          titulo: 'Informações Práticas',
          texto: 'Os passeios dependem da maré — só é possível visitar os parrachos na maré baixa. Verifique a tábua de marés antes de ir. Leve protetor solar biodegradável.',
        },
      ],
      recomendacoes: [
        {
          titulo: 'Operadoras de Passeio',
          itens: [
            { nome: 'Maracajaú Mergulhos', nota: 4.8, contato: '(84) 3261-1234', site: 'https://www.maracajaumergulhos.com.br/' },
            { nome: 'Catamarã Maracajaú', nota: 4.7, contato: '(84) 99876-1234', site: 'https://www.instagram.com/catamaramaracajau/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Pousada Maracajaú', nota: 4.6, contato: '(84) 3261-2222', site: 'https://www.pousadamaracajau.com.br/' },
            { nome: 'Hotel Recifes de Coral', nota: 4.5, contato: '(84) 3261-3333', site: 'https://www.hotelrecifes.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const Maracajau = () => <CearaPontoBase config={config} />;
export default Maracajau;
