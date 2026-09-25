import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Alter do Chão',
  subtitulo: 'O Caribe Amazônico — praias de areia branca nas águas cristalinas do Rio Tapajós.',
  carouselImages: [
    '/images/geral/alter do chao.jpg',
    '/images/geral/alter do chao1.jpg',
  ],
  galeriaImages: [
    { src: '/images/geral/alter do chao2.jpg', alt: 'Praia de Alter do Chão' },
    { src: '/images/geral/alter do chao3.jpg', alt: 'Rio Tapajós em Alter do Chão' },
    { src: '/images/geral/alter do chao4.webp', alt: 'Pôr do sol em Alter do Chão' },
  ],
  tema: {
    bg: '#071a2e',
    texto: '#c8e8f5',
    card: '#0d2a3d',
    acento: '#29b6e8',
    navTexto: '#7dd4f0',
    navAtivo: '#f0e04a',
    navBorda: '#f0e04a',
    tituloTexto: '#f0e04a',
    recCard: '#0d2a3d',
    recNome: '#c8e8f5',
    recContato: '#071a2e',
    recContatoBg: '#29b6e8',
    footerBg: 'linear-gradient(135deg, #0d2a3d, #030d14)',
    footerTexto: '#f0e04a',
  },
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Caribe da Amazônia',
      texto: 'Alter do Chão é uma vila localizada a 34 km de Santarém, no Pará, às margens do Rio Tapajós. Conhecida como o "Caribe Amazônico", a região encanta com suas praias de areia branca e águas azul-turquesa que emergem entre julho e novembro. O contraste entre a floresta amazônica e as praias fluviais cria uma paisagem única no mundo.',
      imagem: '/images/geral/alter do chao2.jpg',
      alt: 'Praia de Alter do Chão',
      lista: [
        'Localização: Santarém - PA, a 34 km do centro da cidade.',
        'Melhor época: Julho a novembro, quando as praias estão no auge.',
        'Destaque: Ilha do Amor, acessível de barco ou a nado.',
        'Rio: Tapajós, com águas cristalinas de cor azul-turquesa.',
      ],
    },
    natureza: {
      label: 'Natureza',
      titulo: 'Praias, Rios e Floresta',
      texto: 'Alter do Chão combina o melhor da Amazônia: praias fluviais paradisíacas, floresta densa e uma biodiversidade aquática impressionante. O encontro das águas do Tapajós com o Arapiuns forma um dos cenários mais bonitos da região.',
      imagem: '/images/geral/alter do chao3.jpg',
      alt: 'Rio Tapajós em Alter do Chão',
      subsecoes: [
        { titulo: 'Ilha do Amor', texto: 'A principal atração de Alter do Chão, a Ilha do Amor é um banco de areia que surge no meio do Tapajós durante a seca. Acessível de barco ou a nado, tem barracas, redes e águas rasas e mornas.' },
        { titulo: 'Lago Verde', texto: 'Espelho d\'água de cor esmeralda cercado por vegetação amazônica. O passeio de canoa ao amanhecer é uma das experiências mais memoráveis da região.' },
        { titulo: 'Floresta Nacional do Tapajós', texto: 'A apenas 50 km de Alter do Chão, a FLONA do Tapajós oferece trilhas por floresta primária com seringueiras centenárias e comunidades ribeirinhas tradicionais.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Explorar',
      texto: 'Alter do Chão fica a 34 km de Santarém pela PA-457. Santarém tem aeroporto com voos diretos de Belém, Manaus e São Paulo. A vila tem boa infraestrutura com pousadas, restaurantes e agências de turismo.',
      imagem: '/images/geral/alter do chao4.webp',
      alt: 'Pôr do sol em Alter do Chão',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'Voe para Santarém (STM) e pegue um ônibus ou táxi até Alter do Chão (30 min). Há voos diretos de Belém, Manaus e São Paulo (via conexão).' },
        { titulo: 'Melhor Época', texto: 'De julho a novembro as praias estão no auge. De dezembro a junho o rio sobe e as praias somem, mas a floresta fica exuberante e os passeios de barco são incríveis.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Pousada Alter do Chão', nota: 4.8, contato: '(93) 3527-1230', site: 'https://www.instagram.com/' },
            { nome: 'Beloalter Hotel', nota: 4.7, contato: '(93) 3527-1395', site: 'https://www.beloalter.com.br' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const AlterDoChao = () => <CearaPontoBase config={config} />;
export default AlterDoChao;
