import React from 'react';
import CearaPontoBase from './CearaPontoBase';

const config = {
  tema: { bg: '#003d4a', texto: '#e0f7fa', card: '#005a6a', acento: '#00bcd4', recCard: '#005a6a', recNome: '#e0f7fa', recContato: '#e0f7fa', recContatoBg: '#003d4a', footerBg: 'linear-gradient(135deg, #005a6a, #001a20)', footerTexto: '#e0f7fa' },
  titulo: 'Fernando de Noronha',
  subtitulo: 'O arquipélago mais paradisíaco do Brasil.',
  carouselImages: ['/images/geral/fe-pe.jpg', '/images/geral/fer1.jpg'],
  galeriaImages: [
    { src: '/images/geral/fe-pe.jpg', alt: 'Fernando de Noronha' },
    { src: '/images/geral/fer2.jpeg', alt: 'Fernando de Noronha' },
    { src: '/images/geral/fer3.jpg', alt: 'Fernando de Noronha' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Paraíso do Atlântico',
      texto: 'Fernando de Noronha é um arquipélago vulcânico localizado a 545 km do litoral nordestino. Patrimônio Natural da Humanidade pela UNESCO, o local abriga praias eleitas repetidamente as mais belas do mundo, com águas cristalinas, rica biodiversidade marinha e paisagens de tirar o fôlego.',
      imagem: '/images/geral/fe-pe.jpg',
      alt: 'Fernando de Noronha',
      lista: [
        'Localização: 545 km a nordeste do Recife, Pernambuco.',
        'Destaque: Praia do Sancho, eleita a mais bela do mundo pelo TripAdvisor.',
        'Proteção: Área de Proteção Ambiental e Parque Nacional Marinho.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Mergulhe no Paraíso',
      texto: 'Noronha oferece experiências únicas de contato com a natureza. O mergulho e o snorkeling revelam um mundo subaquático de rara beleza, com golfinhos, tartarugas e tubarões-limoneiro.',
      imagem: '/images/geral/fer2.jpeg',
      alt: 'Mergulho em Fernando de Noronha',
      subsecoes: [
        { titulo: 'Baía dos Golfinhos', texto: 'Todos os dias ao amanhecer, centenas de golfinhos-rotadores entram na baía para descansar. O espetáculo pode ser visto do Mirante dos Golfinhos.' },
        { titulo: 'Mergulho e Snorkeling', texto: 'As águas de Noronha têm visibilidade de até 50 metros. A Baía do Sancho e a Laje Dois Irmãos são pontos imperdíveis para mergulhadores.' },
        { titulo: 'Trilhas e Mirantes', texto: 'A trilha até a Baía dos Porcos e o Mirante da Atalaia oferecem vistas panorâmicas deslumbrantes do arquipélago.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Dicas Práticas',
      texto: 'O acesso a Fernando de Noronha é feito exclusivamente por via aérea, com voos a partir de Recife e Natal. A ilha cobra uma Taxa de Preservação Ambiental (TPA) diária.',
      imagem: '/images/geral/fer3.jpg',
      alt: 'Fernando de Noronha',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'Voos diários saem de Recife (1h20) e Natal (1h). As companhias Azul e LATAM operam a rota.' },
        { titulo: 'Melhor Época', texto: 'De agosto a março, com mar mais calmo e melhor visibilidade para mergulho. De março a agosto, as ondas atraem surfistas.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Ecologikus', nota: 4.8, contato: '(81) 3619-1807', site: 'https://www.instagram.com/ecologikus/' },
            { nome: 'Mergulhão', nota: 4.7, contato: '(81) 3619-1280', site: '#' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Pousada Maravilha', nota: 4.9, contato: '(81) 3619-0028', site: 'https://www.pousadamaravilha.com.br/' },
            { nome: 'Solar dos Ventos', nota: 4.8, contato: '(81) 3619-1347', site: '#' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const FernandoNoronha = () => <CearaPontoBase config={config} />;
export default FernandoNoronha;
