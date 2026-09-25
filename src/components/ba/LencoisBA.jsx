import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Lençóis',
  subtitulo: 'Cidade histórica, porta de entrada da Chapada Diamantina.',
  carouselImages: ['/images/natureza/lencois.jpeg', '/images/natureza/chapada.jpeg', '/images/natureza/veadeiros.jpeg'],
  galeriaImages: [
    { src: '/images/natureza/lencois.jpeg', alt: 'Lençóis' },
    { src: '/images/natureza/chapada.jpeg', alt: 'Chapada Diamantina' },
    { src: '/images/natureza/veadeiros.jpeg', alt: 'Natureza de Lençóis' },
    { src: '/images/natureza/floresta.jpeg', alt: 'Floresta' },
  ],
  tema: {
    bg: '#1a2e0d', texto: '#d5f5e3',
    acento: '#2ecc71', card: '#2a4a1a', tituloTexto: '#abebc6',
    navTexto: '#82e0aa', navAtivo: '#fff', navBorda: '#2ecc71',
    footerBg: 'linear-gradient(135deg, #2a4a1a, #1a2e0d)', footerTexto: '#abebc6',
  },
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Porta da Chapada',
      texto: 'Lençóis é uma cidade histórica fundada em 1844 durante o ciclo do diamante na Bahia. Seu centro histórico, com casarões do século XIX e ruas de pedra, é tombado pelo IPHAN. Localizada às margens do Rio Lençóis, a cidade é o principal ponto de partida para explorar o Parque Nacional da Chapada Diamantina.',
      imagem: '/images/natureza/lencois.jpeg',
      alt: 'Lençóis',
      lista: [
        'Localização: Centro da Bahia, a 420 km de Salvador.',
        'História: Fundada em 1844 durante o ciclo do diamante.',
        'Rio Lençóis: Piscinas naturais no centro da cidade.',
        'Base: Principal ponto de partida para a Chapada Diamantina.',
      ],
    },
    natureza: {
      label: 'Natureza',
      titulo: 'Piscinas e Cachoeiras',
      texto: 'O Rio Lençóis atravessa a cidade e forma piscinas naturais de água cristalina acessíveis a pé do centro. Nos arredores, trilhas de diferentes níveis levam a cachoeiras, grutas e mirantes espetaculares.',
      imagem: '/images/natureza/chapada.jpeg',
      alt: 'Natureza ao redor de Lençóis',
      subsecoes: [
        { titulo: 'Serrano e Cachoeirão', texto: 'A trilha mais popular de Lençóis leva ao Serrano, uma série de piscinas naturais esculpidas na rocha pelo rio, e ao Cachoeirão, uma queda d\'água de 73 metros.' },
        { titulo: 'Ribeirão do Meio', texto: 'Tobogã natural formado por rochas lisas onde os visitantes deslizam para dentro de uma piscina natural. Uma das atrações mais divertidas da região.' },
        { titulo: 'Morro do Pai Inácio', texto: 'O mirante mais famoso da Chapada, com vista panorâmica de 360 graus sobre o planalto. O pôr do sol daqui é considerado um dos mais belos do Brasil.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar a Lençóis',
      texto: 'Lençóis tem aeroporto próprio com voos de Salvador. De ônibus, o trajeto de Salvador dura cerca de 6 horas. A cidade tem boa infraestrutura turística com pousadas, restaurantes e agências de turismo.',
      imagem: '/images/natureza/veadeiros.jpeg',
      alt: 'Arredores de Lençóis',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'Voos de Salvador para o Aeroporto de Lençóis (Horácio de Matos). De ônibus pela BR-242 (6h). De carro, pela mesma rodovia.' },
        { titulo: 'Melhor Época', texto: 'De junho a setembro para trilhas (estação seca). De novembro a março as cachoeiras ficam mais cheias, mas as trilhas podem ser difíceis.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Cozinha Aberta', nota: 4.8, contato: '(75) 3334-1321', site: 'https://www.instagram.com/cozinhaaberta.lencois/' },
            { nome: 'Restaurante Neco\'s', nota: 4.6, contato: '(75) 3334-1179', site: 'https://www.instagram.com/necos.lencois/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const LencoisBA = () => <CearaPontoBase config={config} />;
export default LencoisBA;
