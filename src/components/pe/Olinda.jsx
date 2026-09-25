import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Olinda',
  subtitulo: 'Patrimônio Mundial da UNESCO e capital do frevo.',
  carouselImages: ['/images/geral/pelo.jpg', '/images/geral/pelo-xx.jpg'],
  galeriaImages: [
    { src: '/images/geral/pelo.jpg', alt: 'Olinda' },
    { src: '/images/geral/pelo-xx.jpg', alt: 'Centro histórico de Olinda' },
    { src: '/images/geral/fe-pe.jpg', alt: 'Vista de Olinda' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Cidade Sagrada do Nordeste',
      texto: 'Olinda é uma das cidades mais bem preservadas do período colonial brasileiro. Declarada Patrimônio Cultural da Humanidade pela UNESCO em 1982, a cidade encanta com suas igrejas barrocas, casarões coloridos, ateliês de artistas e o Carnaval mais autêntico do Brasil, com bonecos gigantes e frevo nas ladeiras.',
      imagem: '/images/geral/pelo.jpg',
      alt: 'Vista de Olinda',
      lista: [
        'Localização: Região Metropolitana do Recife, a 7 km do centro.',
        'Destaque: Patrimônio Cultural da Humanidade pela UNESCO desde 1982.',
        'Carnaval: Considerado o mais autêntico do Brasil, com bonecos gigantes.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Descubra Olinda',
      texto: 'Olinda é uma cidade viva, onde arte, história e cultura se misturam nas ladeiras e becos. Cada esquina esconde uma galeria, um ateliê ou uma vista deslumbrante para o mar.',
      imagem: '/images/geral/pelo-xx.jpg',
      alt: 'Ladeiras de Olinda',
      subsecoes: [
        { titulo: 'Alto da Sé', texto: 'O ponto mais alto de Olinda oferece uma vista panorâmica da cidade e do mar. A Catedral da Sé, do século XVI, domina a paisagem.' },
        { titulo: 'Carnaval de Olinda', texto: 'Os bonecos gigantes de Olinda são o símbolo do Carnaval mais democrático do Brasil. Qualquer pessoa pode entrar nos blocos e dançar frevo nas ladeiras.' },
        { titulo: 'Ateliês e Artesanato', texto: 'Olinda é um polo de arte e artesanato. Pintores, escultores e artesãos expõem e vendem seus trabalhos nas ruas e galerias da cidade.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Explorar',
      texto: 'Olinda fica a apenas 7 km do centro do Recife e é facilmente acessível de ônibus, metrô ou táxi. O centro histórico é pequeno e ideal para ser explorado a pé.',
      imagem: '/images/geral/pelo.jpg',
      alt: 'Igrejas de Olinda',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De ônibus, várias linhas saem do centro do Recife. De carro, siga pela BR-101 ou pela Av. Norte.' },
        { titulo: 'Melhor Época', texto: 'O Carnaval (fevereiro/março) é imperdível. Para visitar os monumentos com tranquilidade, prefira os meses de julho a novembro.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Oficina do Sabor', nota: 4.8, contato: '(81) 3429-3331', site: 'https://www.instagram.com/oficinasaborolinda/' },
            { nome: 'Maison do Bonfim', nota: 4.7, contato: '(81) 3439-1674', site: 'https://www.instagram.com/maisondebonfim/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Pousada dos Quatro Cantos', nota: 4.8, contato: '(81) 3429-0220', site: 'https://www.pousada4cantos.com.br/' },
            { nome: 'Hotel 7 Colinas', nota: 4.6, contato: '(81) 3493-7766', site: 'https://www.hotel7colinas.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const Olinda = () => <CearaPontoBase config={config} />;
export default Olinda;
