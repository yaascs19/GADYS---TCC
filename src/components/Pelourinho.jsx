import React from 'react';
import CearaPontoBase from './CearaPontoBase';

const config = {
  tema: { bg: '#4a2000', texto: '#fdf0e0', card: '#6a3000', acento: '#f0a030', footerBg: 'linear-gradient(135deg, #6a3000, #2a1000)', footerTexto: '#fdf0e0' },
  titulo: 'Pelourinho',
  subtitulo: 'Centro histórico de Salvador, berço da cultura afro-brasileira.',
  carouselImages: ['/images/geral/pelo-xx.jpg', '/images/geral/pelo.jpg'],
  galeriaImages: [
    { src: '/images/geral/pelo-xx.jpg', alt: 'Pelourinho' },
    { src: '/images/geral/pelo.jpg', alt: 'Casarões do Pelourinho' },
    { src: '/images/monumentos/pelourinho.jpg', alt: 'Salvador' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Coração Afro-Brasileiro',
      texto: 'O Pelourinho é o centro histórico de Salvador e um dos conjuntos arquitetônicos coloniais mais bem preservados das Américas. Declarado Patrimônio Cultural da Humanidade pela UNESCO em 1985, o bairro encanta com seus casarões coloridos, igrejas barrocas e uma energia cultural única que mistura história, música, dança e gastronomia afro-brasileira.',
      imagem: '/images/geral/pelo-xx.jpg',
      alt: 'Pelourinho',
      lista: [
        'Localização: Centro Histórico de Salvador, Bahia.',
        'Patrimônio: UNESCO desde 1985.',
        'Cultura: Berço do candomblé, capoeira e axé music.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Viva o Pelourinho',
      texto: 'O Pelourinho é um bairro vivo, onde cada rua conta uma história. Música ao vivo, rodas de capoeira, culinária baiana e arte se misturam em uma experiência cultural única.',
      imagem: '/images/geral/pelo.jpg',
      alt: 'Ruas do Pelourinho',
      subsecoes: [
        { titulo: 'Igreja de São Francisco', texto: 'Considerada a mais rica em ouro do Brasil, a Igreja de São Francisco impressiona pelo interior coberto de ouro e pelos azulejos portugueses do século XVIII.' },
        { titulo: 'Capoeira e Música', texto: 'Rodas de capoeira e apresentações de grupos como o Olodum animam as ruas do Pelourinho, especialmente às terças-feiras, quando o bairro ganha vida com shows gratuitos.' },
        { titulo: 'Gastronomia Baiana', texto: 'Acarajé, moqueca, vatapá e caruru são servidos nos restaurantes e barracas do bairro. A culinária baiana é uma das mais ricas e saborosas do Brasil.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Explorar',
      texto: 'O Pelourinho fica no centro histórico de Salvador, acessível de metrô, ônibus ou táxi. O bairro é melhor explorado a pé.',
      imagem: '/images/geral/pelo-xx.jpg',
      alt: 'Pelourinho à noite',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De metrô, desça na estação Lapa e suba a pé ou de elevador Lacerda. De ônibus, várias linhas passam pelo centro histórico.' },
        { titulo: 'Melhor Época', texto: 'O Carnaval de Salvador (fevereiro/março) é a época mais animada. Para turismo tranquilo, qualquer mês é ótimo, com clima quente o ano todo.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante do SENAC', nota: 4.7, contato: '(71) 3324-4551', site: 'https://www.ba.senac.br/' },
            { nome: 'Acarajé da Dinha', nota: 4.8, contato: '(71) 9999-0000', site: '#' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Aram Yami Boutique Hotel', nota: 4.8, contato: '(71) 3266-8900', site: 'https://www.aramyami.com.br/' },
            { nome: 'Hotel Pelourinho', nota: 4.5, contato: '(71) 3243-0000', site: '#' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const Pelourinho = () => <CearaPontoBase config={config} />;
export default Pelourinho;
