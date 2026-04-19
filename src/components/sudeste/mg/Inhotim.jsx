import React from 'react';
import SudestePontoDetalheBase from '../../sudeste/SudestePontoDetalheBase';

const config = {
  titulo: 'Instituto Inhotim',
  subtitulo: 'O maior museu de arte contemporânea a céu aberto do mundo.',
  voltarRota: '/mg-pontos',
  carouselImages: ['/images/monumentos/independencia.webp', '/images/natureza/chapada.jpeg'],
  galeriaImages: [
    { src: '/images/monumentos/independencia.webp', alt: 'Inhotim arte contemporânea' },
    { src: '/images/natureza/chapada.jpeg', alt: 'Jardins do Inhotim' },
    { src: '/images/monumentos/ouro.jpeg', alt: 'Galeria do Inhotim' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'Arte e Natureza em Perfeita Harmonia',
      texto: 'O Instituto Inhotim é uma experiência única no mundo: um museu de arte contemporânea integrado a um jardim botânico de 140 hectares. Fundado pelo empresário Bernardo Paz em 2006, o instituto reúne obras de mais de 200 artistas de 40 países, incluindo nomes como Cildo Meireles, Tunga, Hélio Oiticica e Yayoi Kusama.',
      imagem: '/images/monumentos/independencia.webp',
      alt: 'Vista aérea do Instituto Inhotim',
      lista: ['Área: 140 hectares de jardins e galerias.', 'Acervo: Obras de mais de 200 artistas de 40 países.', 'Jardim Botânico: Mais de 4.500 espécies de plantas.'],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Uma Jornada pela Arte Contemporânea',
      texto: 'Inhotim oferece uma experiência imersiva única, onde arte, natureza e arquitetura se fundem em um ambiente de rara beleza.',
      imagem: '/images/natureza/chapada.jpeg',
      alt: 'Galeria de arte no Inhotim',
      subsecoes: [
        { titulo: 'Galerias Permanentes', texto: 'As galerias do Inhotim abrigam instalações permanentes de artistas como Cildo Meireles, com a icônica "Desvio para o Vermelho", e Tunga, com obras que desafiam a percepção do espaço.' },
        { titulo: 'Jardim Botânico', texto: 'O jardim botânico do Inhotim é um dos mais importantes do Brasil, com coleções de palmeiras, bromélias, orquídeas e plantas tropicais raras. Os lagos e trilhas criam um ambiente de contemplação único.' },
        { titulo: 'Exposições Temporárias', texto: 'Além do acervo permanente, o Inhotim recebe exposições temporárias de artistas nacionais e internacionais ao longo do ano, tornando cada visita uma experiência diferente.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Visitar o Inhotim',
      texto: 'O Inhotim fica em Brumadinho, a 60 km de Belo Horizonte, e requer pelo menos um dia inteiro para ser explorado.',
      imagem: '/images/monumentos/ouro.jpeg',
      alt: 'Entrada do Instituto Inhotim',
      subsecoes: [
        { titulo: 'Horários e Ingressos', texto: 'Aberto de quarta a domingo, das 9h30 às 17h30. Ingressos a partir de R$ 50 (meia) e R$ 100 (inteira). Às quartas-feiras, a entrada é gratuita para moradores de Brumadinho.' },
        { titulo: 'Como Chegar', texto: 'De BH, há ônibus direto saindo da Rodoviária (1h30). De carro, siga pela BR-381 até Brumadinho. O instituto oferece estacionamento amplo e gratuito.' },
      ],
      recomendacoes: [
        { titulo: 'Onde Comer no Inhotim', itens: [{ nome: 'Restaurante Tamboril', nota: 4.8, contato: '(31) 3571-9700', site: 'https://www.inhotim.org.br/' }, { nome: 'Café das Artes', nota: 4.6, contato: '(31) 3571-9700', site: 'https://www.inhotim.org.br/' }] },
        { titulo: 'Onde Ficar', itens: [{ nome: 'Pousada Inhotim', nota: 4.9, contato: '(31) 3571-9700', site: 'https://www.inhotim.org.br/' }, { nome: 'Hotel Fazenda Brumadinho', nota: 4.6, contato: '(31) 3571-1234', site: 'https://www.instagram.com/' }] },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const Inhotim = () => <SudestePontoDetalheBase config={config} />;
export default Inhotim;
