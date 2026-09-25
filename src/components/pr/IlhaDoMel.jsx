import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Ilha do Mel',
  subtitulo: 'Paraíso sem carros, com praias selvagens e Mata Atlântica.',
  carouselImages: ['/images/geral/sc-natureza.jpg', '/images/geral/rs-natureza.jpg'],
  galeriaImages: [
    { src: '/images/geral/sc-natureza.jpg', alt: 'Ilha do Mel' },
    { src: '/images/geral/rs-natureza.jpg', alt: 'Praia da Ilha do Mel' },
    { src: '/images/geral/sc-bombinhas.jpg', alt: 'Litoral paranaense' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Ilha Sem Carros do Paraná',
      texto: 'A Ilha do Mel é uma das joias do litoral paranaense. Sem carros e com acesso apenas por barco, a ilha preserva praias selvagens, trilhas pela Mata Atlântica e um ritmo de vida tranquilo que encanta quem a visita. Dividida entre Área de Proteção Ambiental e Estação Ecológica, a ilha tem apenas duas vilas: Encantadas e Nova Brasília.',
      imagem: '/images/geral/sc-natureza.jpg',
      alt: 'Ilha do Mel',
      lista: [
        'Localização: Baía de Paranaguá, litoral do Paraná.',
        'Acesso: Apenas por barco, a partir de Pontal do Sul ou Paranaguá.',
        'Destaque: Farol das Conchas (1872) e Fortaleza Nossa Senhora dos Prazeres.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Viva a Ilha do Mel',
      texto: 'Sem carros e sem pressa, a Ilha do Mel convida a explorar suas praias, trilhas e pontos históricos a pé ou de bicicleta.',
      imagem: '/images/geral/rs-natureza.jpg',
      alt: 'Praia da Ilha do Mel',
      subsecoes: [
        { titulo: 'Farol das Conchas', texto: 'Construído em 1872, o farol é o símbolo da ilha. A trilha até ele oferece vistas panorâmicas da baía e do oceano Atlântico.' },
        { titulo: 'Praia de Fora e Praia Grande', texto: 'As praias voltadas para o oceano aberto têm ondas perfeitas para o surfe. Já as praias da baía são calmas e ideais para banho.' },
        { titulo: 'Gruta das Encantadas', texto: 'Formação rochosa cercada de lendas indígenas, onde dizem que sereias habitam as cavernas. O acesso é feito por trilha ou barco.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Dicas',
      texto: 'O acesso à Ilha do Mel é feito exclusivamente por barco. Não há carros na ilha — tudo é feito a pé ou de bicicleta.',
      imagem: '/images/geral/sc-natureza.jpg',
      alt: 'Barco para a Ilha do Mel',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De Curitiba, siga pela BR-277 até Pontal do Sul (110 km). De lá, barcos saem regularmente para a ilha (30 min). Também há saídas de Paranaguá.' },
        { titulo: 'Melhor Época', texto: 'De dezembro a março, com clima quente e mar calmo. Fora da alta temporada, a ilha fica mais tranquila e os preços são menores.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Pousada e Restaurante Fim do Mundo', nota: 4.7, contato: '(41) 3426-8082', site: '#' },
            { nome: 'Bar do Deca', nota: 4.6, contato: '(41) 3426-8000', site: '#' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Pousada das Meninas', nota: 4.8, contato: '(41) 3426-8023', site: '#' },
            { nome: 'Pousada Colibri', nota: 4.7, contato: '(41) 3426-8055', site: '#' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const IlhaDoMel = () => <CearaPontoBase config={config} />;
export default IlhaDoMel;
