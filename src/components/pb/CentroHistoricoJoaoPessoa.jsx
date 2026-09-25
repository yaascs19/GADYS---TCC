import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Centro Histórico de João Pessoa',
  subtitulo: 'A segunda cidade mais verde do mundo e seu rico patrimônio colonial.',
  carouselImages: ['/images/geral/pelo.jpg', '/images/geral/pelo-xx.jpg'],
  galeriaImages: [
    { src: '/images/geral/pelo.jpg', alt: 'Centro Histórico de João Pessoa' },
    { src: '/images/geral/pelo-xx.jpg', alt: 'Igreja de São Francisco' },
    { src: '/images/geral/rn-cultura.jpg', alt: 'Cultura de João Pessoa' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Cidade Mais Verde das Américas',
      texto: 'João Pessoa, capital da Paraíba, é reconhecida como a segunda cidade mais verde do mundo, com 56% do território coberto por vegetação. Fundada em 1585, é uma das cidades mais antigas do Brasil e guarda um rico patrimônio histórico com igrejas barrocas, conventos e casarões coloniais. O centro histórico concentra monumentos que contam séculos de história.',
      imagem: '/images/geral/pelo.jpg',
      alt: 'Centro Histórico de João Pessoa',
      lista: [
        'Localização: Capital da Paraíba, litoral nordestino.',
        'Destaque: Igreja de São Francisco e Convento de Santo Antônio.',
        'Curiosidade: Segunda cidade mais verde do mundo pela ONU.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Explore João Pessoa',
      texto: 'O centro histórico de João Pessoa é um museu a céu aberto, com igrejas barrocas, museus e o famoso Ponto de Cem Réis, coração da cidade.',
      imagem: '/images/geral/pelo-xx.jpg',
      alt: 'Igreja de São Francisco',
      subsecoes: [
        { titulo: 'Igreja de São Francisco', texto: 'Considerada uma das mais belas igrejas barrocas do Brasil, com azulejos portugueses do século XVIII e um acervo artístico impressionante. O Convento de Santo Antônio ao lado completa o conjunto.' },
        { titulo: 'Ponto de Cem Réis', texto: 'A praça mais famosa de João Pessoa, coração da cidade, com o coreto histórico e os tradicionais vendedores de tapioca e caldo de cana.' },
        { titulo: 'Parque Solon de Lucena', texto: 'O Lagoa, como é chamado pelos pessoenses, é um parque urbano com um lago artificial cercado de palmeiras imperiais. Ideal para caminhadas e piqueniques.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Explorar',
      texto: 'João Pessoa tem aeroporto internacional e boa infraestrutura de transporte. O centro histórico é compacto e ideal para ser explorado a pé.',
      imagem: '/images/geral/pelo.jpg',
      alt: 'João Pessoa',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'O Aeroporto Castro Pinto fica a 11 km do centro. Há voos de Recife (30 min), São Paulo (2h30) e outras capitais.' },
        { titulo: 'Melhor Época', texto: 'O clima é quente o ano todo. De setembro a março, com menos chuva, é a melhor época para visitar as praias e o centro histórico.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Mangai João Pessoa', nota: 4.8, contato: '(83) 3226-1615', site: 'https://www.mangai.com.br/' },
            { nome: 'Tábua de Carne', nota: 4.7, contato: '(83) 3247-6060', site: '#' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Tropical Tambaú Hotel', nota: 4.6, contato: '(83) 2107-1900', site: 'https://www.tropicaltambau.com.br/' },
            { nome: 'Pousada Casa Grande', nota: 4.7, contato: '(83) 3222-5050', site: '#' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const CentroHistoricoJoaoPessoa = () => <CearaPontoBase config={config} />;
export default CentroHistoricoJoaoPessoa;
