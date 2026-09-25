import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Congresso Nacional',
  subtitulo: 'O coração da democracia brasileira, obra-prima de Oscar Niemeyer.',
  carouselImages: ['/images/geral/congresso.1.jpg', '/images/geral/congresso.2.webp'],
  galeriaImages: [
    { src: '/images/geral/congresso.1.jpg', alt: 'Congresso Nacional' },
    { src: '/images/geral/congresso.2.webp', alt: 'Congresso Nacional vista' },
    { src: '/images/geral/congresso.3.jpg', alt: 'Congresso Nacional sobre' },
    { src: '/images/geral/congresso.4.jpg', alt: 'Congresso Nacional arquitetura' },
    { src: '/images/geral/congresso.4.webp', alt: 'Congresso Nacional visite' },
  ],
  tema: {
    bg: '#0d1f3c', texto: '#d6eaf8',
    acento: '#2980b9', card: '#1a3a5c', tituloTexto: '#aed6f1',
    navTexto: '#7fb3d3', navAtivo: '#fff', navBorda: '#2980b9',
    recCard: '#1a3a5c', recNome: '#d6eaf8', recContato: '#d6eaf8', recContatoBg: '#2980b9',
    footerBg: 'linear-gradient(135deg, #1a3a5c, #0d1f3c)', footerTexto: '#aed6f1',
  },
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'Símbolo da Democracia',
      texto: 'O Congresso Nacional é o edifício mais icônico de Brasília e símbolo da democracia brasileira. Projetado por Oscar Niemeyer e inaugurado em 1960, o complexo abriga a Câmara dos Deputados e o Senado Federal. Suas duas cúpulas — uma côncava (Câmara) e uma convexa (Senado) — sobre duas torres de 28 andares formam uma das silhuetas mais reconhecíveis do mundo.',
      imagem: '/images/geral/congresso.3.jpg',
      alt: 'Congresso Nacional',
      lista: [
        'Localização: Praça dos Três Poderes, Brasília - DF.',
        'Arquiteto: Oscar Niemeyer (1960).',
        'Visitação: Gratuita às terças, quartas e quintas-feiras.',
        'UNESCO: Parte do conjunto tombado como Patrimônio Mundial.',
      ],
    },
    arquitetura: {
      label: 'Arquitetura',
      titulo: 'O Gênio de Niemeyer',
      texto: 'O Congresso Nacional é considerado a obra mais representativa do modernismo brasileiro. Niemeyer criou uma composição de formas geométricas puras que dialogam com o céu e o espelho d\'água da Esplanada dos Ministérios.',
      imagem: '/images/geral/congresso.4.jpg',
      alt: 'Arquitetura modernista',
      subsecoes: [
        { titulo: 'As Cúpulas', texto: 'A cúpula côncava (voltada para cima) abriga a Câmara dos Deputados, simbolizando a abertura ao povo. A cúpula convexa (voltada para baixo) abriga o Senado Federal, simbolizando a reflexão e a ponderação.' },
        { titulo: 'As Torres', texto: 'As duas torres de 28 andares abrigam os gabinetes dos parlamentares. Conectadas por uma passarela, formam um "H" que representa "Humanidade" no projeto original de Niemeyer.' },
        { titulo: 'Esplanada dos Ministérios', texto: 'O Congresso é o ponto focal da Esplanada, com os 17 ministérios alinhados em dois blocos paralelos criando uma perspectiva monumental única no urbanismo mundial.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Visitar o Congresso',
      texto: 'O Congresso Nacional oferece visitas guiadas gratuitas que permitem conhecer o interior das duas casas legislativas, incluindo os plenários da Câmara e do Senado.',
      imagem: '/images/geral/congresso.4.webp',
      alt: 'Visita ao Congresso',
      subsecoes: [
        { titulo: 'Visitas Guiadas', texto: 'Terças, quartas e quintas-feiras, das 9h às 17h30. Gratuitas, sem necessidade de agendamento. Apresente documento de identidade na entrada.' },
        { titulo: 'Como Chegar', texto: 'Metrô até a estação Central (Rodoviária do Plano Piloto) e caminhada pela Esplanada. Táxi ou aplicativo até a Praça dos Três Poderes.' },
      ],
      recomendacoes: [
        {
          titulo: 'Pontos Próximos',
          itens: [
            { nome: 'Palácio do Planalto', nota: 4.8, contato: '(61) 3411-1221', site: 'https://www.gov.br/planalto' },
            { nome: 'Supremo Tribunal Federal', nota: 4.7, contato: '(61) 3217-3000', site: 'https://www.stf.jus.br' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const CongressoNacional = () => <CearaPontoBase config={config} />;
export default CongressoNacional;
