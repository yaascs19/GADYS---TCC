import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Centro Histórico de Fortaleza',
  subtitulo: 'Mercado Central, Catedral e o Theatro José de Alencar.',
  carouselImages: ['/images/geral/ceara.webp', '/images/geral/CearaInicio.jpg'],
  galeriaImages: [
    { src: '/images/geral/ceara.webp', alt: 'Centro Histórico de Fortaleza' },
    { src: '/images/geral/CearaInicio.jpg', alt: 'Theatro José de Alencar' },
    { src: '/images/geral/Ceara3.jpg', alt: 'Fortaleza centro' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Alma Histórica de Fortaleza',
      texto: 'O Centro Histórico de Fortaleza é o berço da capital cearense. Com ruas que guardam séculos de história, o bairro concentra os principais monumentos, igrejas e mercados da cidade. Do imponente Theatro José de Alencar ao movimentado Mercado Central, cada esquina conta uma história da formação cultural e econômica do Ceará.',
      imagem: '/images/geral/ceara.webp',
      alt: 'Vista do Centro Histórico de Fortaleza',
      lista: [
        'Localização: Centro de Fortaleza, capital do Ceará.',
        'Destaque: Theatro José de Alencar, obra do Art Nouveau brasileiro.',
        'Compras: Mercado Central, com artesanato e produtos típicos.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Explorar no Centro',
      texto: 'O Centro Histórico de Fortaleza é um roteiro cultural completo, com monumentos, museus, gastronomia e artesanato.',
      imagem: '/images/geral/CearaInicio.jpg',
      alt: 'Theatro José de Alencar',
      subsecoes: [
        { titulo: 'Theatro José de Alencar', texto: 'Inaugurado em 1910, o Theatro José de Alencar é uma obra-prima do Art Nouveau com elementos neoclássicos. Sua estrutura metálica importada da Escócia e os vitrais coloridos fazem dele um dos teatros mais belos do Brasil.' },
        { titulo: 'Mercado Central', texto: 'Com mais de 600 boxes, o Mercado Central é o maior mercado de artesanato do Ceará. Renda, bordados, cerâmica, cachaça e castanha de caju são alguns dos produtos típicos encontrados lá.' },
        { titulo: 'Catedral Metropolitana', texto: 'A Catedral de Fortaleza, dedicada a Nossa Senhora da Assunção, é um imponente templo neogótico que domina a Praça da Sé. Sua construção durou mais de 60 anos, sendo concluída em 1978.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Explorar o Centro Histórico',
      texto: 'O Centro Histórico de Fortaleza é melhor explorado a pé, com um roteiro que conecta os principais pontos turísticos.',
      imagem: '/images/geral/Ceara3.jpg',
      alt: 'Ruas do Centro de Fortaleza',
      subsecoes: [
        { titulo: 'Roteiro Sugerido', texto: 'Comece pela Praça do Ferreira, o coração do centro. Visite o Theatro José de Alencar, a Catedral Metropolitana e o Mercado Central. Termine no Centro Dragão do Mar, na Praia de Iracema.' },
        { titulo: 'Como Chegar', texto: 'O centro é acessível por todas as linhas de ônibus de Fortaleza. O metrô tem estações próximas (José de Alencar e Colégio Militar). De aplicativo, é fácil e rápido.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Colher de Pau', nota: 4.8, contato: '(85) 3219-3773', site: 'https://www.colherdepau.com.br/' },
            { nome: 'Pastelaria Tropical', nota: 4.5, contato: '(85) 3231-1234', site: 'https://www.instagram.com/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Hotel Luzeiros Fortaleza', nota: 4.7, contato: '(85) 4006-8585', site: 'https://www.luzeiroshotel.com.br/' },
            { nome: 'Gran Marquise Hotel', nota: 4.8, contato: '(85) 3466-5000', site: 'https://www.granmarquise.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const CentroHistoricoFortaleza = () => <CearaPontoBase config={config} />;
export default CentroHistoricoFortaleza;
