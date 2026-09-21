import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Florianópolis',
  subtitulo: 'A Ilha da Magia — praias, lagoas e cultura açoriana.',
  carouselImages: ['/images/geral/sc-floripa.jpg', '/images/geral/sc1.jpg'],
  galeriaImages: [
    { src: '/images/geral/sc-floripa.jpg', alt: 'Florianópolis' },
    { src: '/images/geral/sc1.jpg', alt: 'Florianópolis litoral' },
    { src: '/images/geral/sc2.jpg', alt: 'Lagoa da Conceição' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Ilha da Magia',
      texto: 'Florianópolis, capital de Santa Catarina, é conhecida como a "Ilha da Magia". Com mais de 100 praias, lagoas de água doce, dunas e uma rica herança açoriana, a cidade é um dos destinos mais procurados do Brasil. A ilha encanta pela combinação de natureza exuberante, gastronomia de frutos do mar e uma vida noturna vibrante.',
      imagem: '/images/geral/sc-floripa.jpg',
      alt: 'Vista aérea de Florianópolis',
      lista: [
        'Localização: Ilha de Santa Catarina, sul do Brasil.',
        'Destaque: Mais de 100 praias, incluindo Jurerê Internacional e Joaquina.',
        'Cultura: Forte influência açoriana na arquitetura e gastronomia.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer em Floripa',
      texto: 'Florianópolis oferece experiências para todos os gostos, do surf nas ondas da Joaquina ao passeio de barco pela Lagoa da Conceição.',
      imagem: '/images/geral/sc2.jpg',
      alt: 'Lagoa da Conceição',
      subsecoes: [
        { titulo: 'Lagoa da Conceição', texto: 'O coração boêmio de Floripa. A lagoa é cercada de bares, restaurantes e lojas de artesanato. Ideal para windsurf, kitesurf e passeios de barco.' },
        { titulo: 'Praia da Joaquina', texto: 'Famosa pelas dunas e pelas ondas perfeitas para o surf. Palco do Campeonato Brasileiro de Surf por décadas.' },
        { titulo: 'Fortaleza de São José da Ponta Grossa', texto: 'Patrimônio histórico do século XVIII, a fortaleza oferece vista panorâmica da ilha e conta a história da colonização açoriana.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Hospedar',
      texto: 'Florianópolis possui aeroporto internacional (Hercílio Luz) com voos diretos das principais capitais brasileiras e de países do Mercosul.',
      imagem: '/images/geral/sc-floripa.jpg',
      alt: 'Florianópolis',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De avião pelo Aeroporto Internacional Hercílio Luz. De carro pela BR-101 ou BR-282. De ônibus com linhas de todo o Brasil.' },
        { titulo: 'Melhor Época', texto: 'Dezembro a março para praias e verão. Abril a junho para clima ameno e menos turistas. Julho para o Festival de Dança de Joinville (próximo).' },
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
