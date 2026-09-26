import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Florianópolis',
  subtitulo: 'A Ilha da Magia — mais de 100 praias, lagoas cristalinas e a alma açoriana no sul do Brasil.',
  carouselImages: [
    '/images/geral/floripa1.jpg',
    '/images/geral/scs.jpg',
  ],
  galeriaImages: [
    { src: '/images/geral/floripa1.jpg', alt: 'Florianópolis' },
    { src: '/images/geral/scs.jpg', alt: 'Florianópolis — litoral' },
    { src: '/images/geral/scs1.jpg', alt: 'Florianópolis — praias' },
    { src: '/images/geral/scs2.jpg', alt: 'Lagoa da Conceição' },
    { src: '/images/geral/scs3.jpg', alt: 'Florianópolis — pôr do sol' },
  ],
  tema: {
    bg: '#04111e',
    texto: '#d6eaf8',
    tituloTexto: '#5dade2',
    acento: '#1a6fa8',
    card: 'rgba(26,111,168,0.12)',
    navTexto: '#7fb3d3',
    navAtivo: '#5dade2',
    navBorda: '#1a6fa8',
    recCard: 'rgba(26,111,168,0.16)',
    recNome: '#5dade2',
    recContato: '#d6eaf8',
    recContatoBg: 'rgba(26,111,168,0.25)',
    footerBg: 'linear-gradient(135deg, #0a2a40, #04111e)',
    footerTexto: '#7fb3d3',
  },
  voltarEstilo: {
    background: 'rgba(26,111,168,0.3)',
    borderColor: '#5dade2',
  },
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Ilha da Magia',
      texto: 'Florianópolis, capital de Santa Catarina, é conhecida como a "Ilha da Magia". Com mais de 100 praias, lagoas de água doce, dunas e uma rica herança açoriana, a cidade é um dos destinos mais procurados do Brasil. A ilha encanta pela combinação de natureza exuberante, gastronomia de frutos do mar fresquíssimos e uma vida noturna vibrante que vai de Jurerê Internacional à boemia da Lagoa da Conceição.',
      imagem: '/images/geral/floripa1.jpg',
      alt: 'Vista aérea de Florianópolis',
      lista: [
        'Localização: Ilha de Santa Catarina, sul do Brasil.',
        'Praias: Mais de 100, incluindo Jurerê Internacional e Joaquina.',
        'Cultura: Forte influência açoriana na arquitetura e gastronomia.',
        'Natureza: Lagoas, dunas, manguezais e Mata Atlântica preservada.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer em Floripa',
      texto: 'Florianópolis oferece experiências para todos os gostos, do surf nas ondas da Joaquina ao pôr do sol em Jurerê Internacional.',
      imagem: '/images/geral/floripa2.webp',
      alt: 'Lagoa da Conceição',
      subsecoes: [
        {
          titulo: 'Lagoa da Conceição',
          texto: 'O coração boêmio de Floripa. A lagoa é cercada de bares, restaurantes e lojas de artesanato. Ideal para windsurf, kitesurf e passeios de barco ao entardecer.',
        },
        {
          titulo: 'Praia da Joaquina',
          texto: 'Famosa pelas dunas e pelas ondas perfeitas para o surf. Palco do Campeonato Brasileiro de Surf por décadas e um dos cartões-postais mais icônicos da ilha.',
        },
        {
          titulo: 'Fortaleza de São José da Ponta Grossa',
          texto: 'Patrimônio histórico do século XVIII, a fortaleza oferece vista panorâmica da ilha e conta a história da colonização açoriana — uma das mais bem preservadas do Brasil.',
        },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Hospedar',
      texto: 'Florianópolis possui aeroporto internacional (Hercílio Luz) com voos diretos das principais capitais e do Mercosul.',
      imagem: '/images/geral/floripa3.jpg',
      alt: 'Florianópolis ao entardecer',
      subsecoes: [
        {
          titulo: 'Como Chegar',
          texto: 'De avião pelo Aeroporto Internacional Hercílio Luz. De carro pela BR-101 ou BR-282. De ônibus com linhas de todo o Brasil — a rodoviária fica no centro da ilha.',
        },
        {
          titulo: 'Melhor Época',
          texto: 'Dezembro a março para praias e verão animado. Abril a junho para clima ameno, menos turistas e preços mais baixos. Setembro para a florada e o clima perfeito para trilhas.',
        },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Ostradamus', nota: 4.8, contato: '(48) 3232-3232', site: 'https://www.instagram.com/ostradamus/' },
            { nome: 'Macarronada Italiana', nota: 4.7, contato: '(48) 3222-0321', site: 'https://www.macarronadaitaliana.com.br/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Costão do Santinho Resort', nota: 4.9, contato: '(48) 3261-1000', site: 'https://www.costao.com.br/' },
            { nome: 'Blue Tree Towers Florianópolis', nota: 4.6, contato: '(48) 3251-7000', site: 'https://www.bluetree.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const Florianopolis = () => <CearaPontoBase config={config} />;
export default Florianopolis;
