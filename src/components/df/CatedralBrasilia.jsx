import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Catedral Metropolitana',
  subtitulo: 'Uma obra de arte em concreto e luz — o templo mais famoso de Brasília.',
  carouselImages: ['/images/monumentos/zero.jpeg', '/images/monumentos/jus.jpeg', '/images/monumentos/pala.jpeg'],
  galeriaImages: [
    { src: '/images/monumentos/zero.jpeg', alt: 'Catedral Metropolitana' },
    { src: '/images/monumentos/jus.jpeg', alt: 'Brasília' },
    { src: '/images/monumentos/pala.jpeg', alt: 'Modernismo' },
  ],
  tema: {
    bg: '#1a0a2e', texto: '#e8daef',
    acento: '#9b59b6', card: '#3a1a5c', tituloTexto: '#d2b4de',
    navTexto: '#bb8fce', navAtivo: '#fff', navBorda: '#9b59b6',
    footerBg: 'linear-gradient(135deg, #3a1a5c, #1a0a2e)', footerTexto: '#d2b4de',
  },
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'Mãos Erguidas ao Céu',
      texto: 'A Catedral Metropolitana Nossa Senhora Aparecida é uma das obras mais impressionantes de Oscar Niemeyer. Inaugurada em 1970, suas 16 colunas de concreto de 40 toneladas cada formam uma coroa de espinhos e mãos erguidas ao céu. O interior, iluminado por vitrais coloridos de Marianne Peretti, cria uma atmosfera de transcendência única.',
      imagem: '/images/monumentos/zero.jpeg',
      alt: 'Catedral Metropolitana de Brasília',
      lista: [
        'Localização: Esplanada dos Ministérios, Brasília - DF.',
        'Arquiteto: Oscar Niemeyer (inaugurada em 1970).',
        'Capacidade: 4.000 pessoas.',
        'Destaque: Vitrais de Marianne Peretti e esculturas de Alfredo Ceschiatti.',
      ],
    },
    arte: {
      label: 'Arte',
      titulo: 'Um Museu de Arte Sacra',
      texto: 'A Catedral é também um museu de arte sacra contemporânea. As obras de arte integradas à arquitetura foram criadas por artistas de renome nacional e internacional.',
      imagem: '/images/monumentos/jus.jpeg',
      alt: 'Arte na Catedral',
      subsecoes: [
        { titulo: 'Vitrais de Marianne Peretti', texto: 'Os vitrais coloridos que cobrem toda a estrutura entre as colunas foram criados pela artista franco-brasileira Marianne Peretti. Criam um jogo de luz e cor que muda ao longo do dia.' },
        { titulo: 'Os Evangelistas', texto: 'Quatro esculturas em bronze dos evangelistas Mateus, Marcos, Lucas e João, criadas por Alfredo Ceschiatti, ficam do lado de fora da catedral.' },
        { titulo: 'Os Anjos Suspensos', texto: 'Três anjos de alumínio criados por Ceschiatti ficam suspensos no interior da catedral, criando uma sensação de levitação e espiritualidade.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Informações para Visita',
      texto: 'A Catedral é aberta ao público todos os dias e a entrada é gratuita. É um dos pontos turísticos mais visitados de Brasília e pode ser combinada com a visita à Esplanada dos Ministérios.',
      imagem: '/images/monumentos/pala.jpeg',
      alt: 'Esplanada dos Ministérios',
      subsecoes: [
        { titulo: 'Horário', texto: 'Segunda a sábado: 8h às 18h. Domingos e feriados: 8h às 17h. Entrada gratuita.' },
        { titulo: 'Como Chegar', texto: 'Metrô até a estação Central e caminhada pela Esplanada dos Ministérios (aprox. 15 min). Táxi ou aplicativo diretamente.' },
      ],
      recomendacoes: [
        {
          titulo: 'Pontos Próximos',
          itens: [
            { nome: 'Museu Nacional de Brasília', nota: 4.6, contato: '(61) 3325-5220', site: 'https://www.cultura.df.gov.br' },
            { nome: 'Teatro Nacional Cláudio Santoro', nota: 4.7, contato: '(61) 3325-6240', site: 'https://www.teatronacional.df.gov.br' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const CatedralBrasilia = () => <CearaPontoBase config={config} />;
export default CatedralBrasilia;
