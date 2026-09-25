import React from 'react';
import NortePontosBase from './norte/NortePontosBase';

const config = {
  estado: 'MS',
  titulo: 'Tesouros do Mato Grosso do Sul',
  subtitulo: 'De Bonito ao Pantanal, as águas mais cristalinas do Brasil.',
  headerImage: '/images/geral/ms.jpg',
  voltarRota: '/mato-grosso-do-sul',
  placeholder: 'O que você quer descobrir no Mato Grosso do Sul?',
  pontos: [
    {
      id: 'bonito-ms',
      nome: 'Rio da Prata — Bonito',
      cidade: 'Bonito - MS',
      categoria: 'Lugar Paradísíaco',
      descricao: 'Flutuação de 2,5 km em rio de água cristalina entre dourados, piraputangas e pacus. Visibilidade de até 50 metros em um dos rios mais transparentes do mundo.',
      imagem: '/images/geral/Rio da Prata — Bonito.jpg',
      rota: '/ms/rio-da-prata',
    },
    {
      id: 'pantanal-ms',
      nome: 'Pantanal Sul',
      cidade: 'Corumbá - MS',
      categoria: 'Lugar Paradísíaco',
      descricao: 'A maior planície alagável do mundo vista pelo sul, com safáris fotográficos, avistamento de onças-pintadas e pesca esportiva no Rio Paraguai.',
      imagem: '/images/geral/Pantanal Sul.jpg',
    },
    {
      id: 'campo-grande-ms',
      nome: 'Mercado Municipal de Campo Grande',
      cidade: 'Campo Grande - MS',
      categoria: 'Monumentos',
      descricao: 'Patrimônio histórico da capital com feiras de artesanato, produtos regionais e o famoso sobá — macarrão japonês que virou símbolo gastronômico da cidade.',
      imagem: '/images/geral/Mercado Municipal de Campo Grande.png',
    },
    {
      id: 'gastronomia-ms',
      nome: 'Restaurantes Típicos de Campo Grande',
      cidade: 'Campo Grande - MS',
      categoria: 'Restaurantes',
      descricao: 'Chipa, sopa paraguaia, peixe pantaneiro e sobá servidos nos restaurantes tradicionais da capital, expressando a rica mistura cultural da fronteira.',
      imagem: '/images/geral/Restaurantes Típicos de Campo Grande.jpg',
    },
  ],
};

const MatoGrossoDoSulPontos = () => <NortePontosBase config={config} />;
export default MatoGrossoDoSulPontos;
