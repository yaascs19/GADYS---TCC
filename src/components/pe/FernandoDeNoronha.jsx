import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Fernando de Noronha',
  subtitulo: 'O arquipélago mais paradisíaco do Brasil.',
  carouselImages: ['/images/geral/fe-pe.jpg', '/images/geral/fe-pe.jpg'],
  galeriaImages: [
    { src: '/images/geral/fe-pe.jpg', alt: 'Fernando de Noronha' },
    { src: '/images/geral/fe-pe.jpg', alt: 'Praia do Sancho' },
    { src: '/images/geral/fe-pe.jpg', alt: 'Baía dos Porcos' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Paraíso do Atlântico',
      texto: 'Fernando de Noronha é um arquipélago vulcânico localizado a 545 km do litoral nordestino. Patrimônio Natural da Humanidade pela UNESCO, o local abriga praias eleitas repetidamente as mais belas do mundo, com águas cristalinas, rica biodiversidade marinha e paisagens de tirar o fôlego.',
      imagem: '/images/geral/fe-pe.jpg',
      alt: 'Vista aérea de Fernando de Noronha',
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
      imagem: '/images/geral/fe-pe.jpg',
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
      imagem: '/images/geral/fe-pe.jpg',
      alt: 'Acesso a Fernando de Noronha',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'Voos diários saem de Recife (1h20) e Natal (1h). As companhias Azul e LATAM operam a rota.' },
        { titulo: 'Melhor Época', texto: 'De agosto a março, com mar mais calmo e melhor visibilidade para mergulho. De março a agosto, as ondas atraem surfistas.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Ecologikus', nota: 4.8, contato: '(81) 3619-1807', site: 'https://www.instagram.com/ecologikus/' },
            { nome: 'Mergulhão', nota: 4.7, contato: '(81) 3619-1280', site: 'https://www.instagram.com/restaurantemergulhao/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Pousada Maravilha', nota: 4.9, contato: '(81) 3619-0028', site: 'https://www.pousadamaravilha.com.br/' },
            { nome: 'Solar dos Ventos', nota: 4.8, contato: '(81) 3619-1347', site: 'https://www.solarnosventos.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const FernandoDeNoronha = () => <CearaPontoBase config={config} />;
export default FernandoDeNoronha;
