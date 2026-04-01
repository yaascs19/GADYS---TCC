import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Praia do Futuro',
  subtitulo: 'A praia mais popular de Fortaleza.',
  carouselImages: ['/images/geral/Ceara3.jpg', '/images/geral/Ceara2.webp'],
  galeriaImages: [
    { src: '/images/geral/Ceara3.jpg', alt: 'Praia do Futuro' },
    { src: '/images/geral/Ceara2.webp', alt: 'Praia do Futuro barracas' },
    { src: '/images/geral/ceara.webp', alt: 'Praia do Futuro mar' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Coração das Praias de Fortaleza',
      texto: 'A Praia do Futuro é a mais popular e movimentada de Fortaleza. Com 8 km de extensão, águas mornas e barracas estruturadas, ela é o destino favorito dos fortalezenses para um dia de sol e mar. As famosas barracas de frutos do mar, com música ao vivo e serviço completo, são o grande atrativo do lugar.',
      imagem: '/images/geral/Ceara3.jpg',
      alt: 'Vista da Praia do Futuro',
      lista: [
        'Localização: Zona Leste de Fortaleza, a 8 km do centro.',
        'Extensão: 8 km de praia com estrutura completa.',
        'Destaque: Barracas de frutos do mar com música ao vivo.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Um Dia Perfeito na Praia do Futuro',
      texto: 'A Praia do Futuro oferece muito mais do que sol e mar. As barracas são verdadeiros complexos de lazer com piscinas, shows e gastronomia.',
      imagem: '/images/geral/Ceara2.webp',
      alt: 'Barracas da Praia do Futuro',
      subsecoes: [
        { titulo: 'As Barracas Famosas', texto: 'As barracas da Praia do Futuro são famosas em todo o Brasil. Chico do Caranguejo, Crocobeach e Barraca do Meio são algumas das mais tradicionais, com frutos do mar frescos e música ao vivo.' },
        { titulo: 'Esportes e Lazer', texto: 'A praia é ideal para vôlei de praia, futebol, stand-up paddle e natação. As águas mornas e relativamente calmas tornam o banho de mar muito agradável.' },
        { titulo: 'Gastronomia', texto: 'Os frutos do mar são o ponto forte da Praia do Futuro. Caranguejos, lagostas, camarões e peixes frescos são preparados na hora pelas barracas locais.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Aproveitar a Praia do Futuro',
      texto: 'A Praia do Futuro é acessível e bem estruturada, com opções para todos os bolsos.',
      imagem: '/images/geral/ceara.webp',
      alt: 'Praia do Futuro ao entardecer',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De ônibus, pegue as linhas que passam pela Av. Zezé Diogo. De carro ou aplicativo, siga pela Av. Dioguinho. Há estacionamento nas barracas.' },
        { titulo: 'Melhor Horário', texto: 'Pela manhã, o mar é mais calmo e a praia menos movimentada. À tarde, as barracas ficam mais animadas com música ao vivo.' },
      ],
      recomendacoes: [
        {
          titulo: 'Barracas Imperdíveis',
          itens: [
            { nome: 'Chico do Caranguejo', nota: 4.8, contato: '(85) 3262-0022', site: 'https://www.chicodocara nguejo.com.br/' },
            { nome: 'Crocobeach', nota: 4.7, contato: '(85) 3234-4444', site: 'https://www.crocobeach.com.br/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Hotel Praia Futuro', nota: 4.5, contato: '(85) 3262-1000', site: 'https://www.instagram.com/hotelpraiafuturo/' },
            { nome: 'Pousada Sol e Mar', nota: 4.6, contato: '(85) 3262-2000', site: 'https://www.instagram.com/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const PraiaDoFuturo = () => <CearaPontoBase config={config} />;
export default PraiaDoFuturo;
