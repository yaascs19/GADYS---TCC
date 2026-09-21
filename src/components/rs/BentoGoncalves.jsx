import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Bento Gonçalves',
  subtitulo: 'A capital brasileira do vinho — vinícolas, gastronomia italiana e paisagens de tirar o fôlego.',
  carouselImages: ['/images/geral/rs-bento.jpg', '/images/geral/rs2.jpg'],
  galeriaImages: [
    { src: '/images/geral/rs-bento.jpg', alt: 'Vinhedos de Bento Gonçalves' },
    { src: '/images/geral/rs2.jpg', alt: 'Vale dos Vinhedos' },
    { src: '/images/geral/rs3.jpg', alt: 'Vindima em Bento Gonçalves' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Capital Brasileira do Vinho',
      texto: 'Bento Gonçalves é o coração da produção vinícola brasileira. Fundada por imigrantes italianos no final do século XIX, a cidade preserva com orgulho a herança da Itália na arquitetura, gastronomia, dialeto e, claro, nos vinhos. O Vale dos Vinhedos, primeira região com Denominação de Origem do Brasil, produz vinhos premiados internacionalmente e atrai enoturistas do mundo inteiro.',
      imagem: '/images/geral/rs-bento.jpg',
      alt: 'Vinhedos de Bento Gonçalves ao entardecer',
      lista: [
        'Localização: Serra Gaúcha, a 120 km de Porto Alegre.',
        'Destaque: Vale dos Vinhedos — 1ª Denominação de Origem do Brasil.',
        'Cultura: Herança italiana na gastronomia, arquitetura e dialeto vêneto.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer em Bento Gonçalves',
      texto: 'Bento Gonçalves é um destino completo para quem aprecia boa comida, bom vinho e paisagens deslumbrantes.',
      imagem: '/images/geral/rs2.jpg',
      alt: 'Vale dos Vinhedos',
      subsecoes: [
        {
          titulo: 'Rota dos Vinhos',
          texto: 'O Vale dos Vinhedos concentra dezenas de vinícolas que oferecem visitas guiadas, degustações e harmonizações. Algumas das mais famosas: Miolo, Casa Valduga e Pizzato.',
        },
        {
          titulo: 'Vindima',
          texto: 'Entre fevereiro e março, a colheita da uva transforma a região em uma festa. Turistas podem participar da vindima, pisando uvas e aprendendo sobre a produção do vinho.',
        },
        {
          titulo: 'Maria Fumaça',
          texto: 'O trem turístico Maria Fumaça percorre 23 km entre Bento Gonçalves e Carlos Barbosa, passando por viadutos históricos e paisagens de vinhedos. Uma viagem no tempo.',
        },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Hospedar',
      texto: 'Bento Gonçalves fica a 120 km de Porto Alegre, com acesso pela RS-122.',
      imagem: '/images/geral/rs-bento.jpg',
      alt: 'Bento Gonçalves',
      subsecoes: [
        {
          titulo: 'Como Chegar',
          texto: 'De carro pela RS-122 a partir de Porto Alegre (aprox. 1h30). De ônibus com saídas frequentes da rodoviária de Porto Alegre.',
        },
        {
          titulo: 'Melhor Época',
          texto: 'Fevereiro e março para a Vindima. Junho a agosto para o inverno frio e paisagens nevadas. O ano todo para enoturismo.',
        },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Ristorante Don Giovani', nota: 4.9, contato: '(54) 3455-3200', site: 'https://www.dongiovani.com.br/' },
            { nome: 'Cantina Piero', nota: 4.8, contato: '(54) 3451-1234', site: 'https://www.cantinpiero.com.br/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Villa Valduga', nota: 4.9, contato: '(54) 2105-3154', site: 'https://www.casavalduga.com.br/' },
            { nome: 'Hotel Dall\'Onder', nota: 4.7, contato: '(54) 3455-3200', site: 'https://www.dallonder.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const BentoGoncalves = () => <CearaPontoBase config={config} />;
export default BentoGoncalves;
