import React from 'react';
import NortePontosBase from './norte/NortePontosBase';

const config = {
  estado: 'MA',
  titulo: 'Tesouros do Maranhão',
  subtitulo: 'Dos Lençóis Maranhenses ao centro histórico de São Luís.',
  headerImage: '/images/geral/maranhao.webp',
  voltarRota: '/maranhao',
  placeholder: 'O que você quer descobrir no Maranhão?',
  pontos: [
    {
      id: 'lencois-maranhenses',
      nome: 'Parque Nacional dos Lençóis Maranhenses',
      cidade: 'Barreirinhas - MA',
      categoria: 'Lugar Paradísíaco',
      descricao: '155 mil hectares de dunas brancas e lagoas de água doce cristalina. As lagoas Azul e Bonita são as mais famosas, acessíveis por 4x4 a partir de Barreirinhas.',
      imagem: '/images/geral/maranhao.webp',
      rota: '/maranhao/lencois-maranhenses',
    },
    {
      id: 'centro-historico-sao-luis',
      nome: 'Centro Histórico de São Luís',
      cidade: 'São Luís - MA',
      categoria: 'Monumentos',
      descricao: 'Patrimônio Mundial da UNESCO com mais de 3.500 imóveis históricos, azulejos portugueses únicos e o maior acervo de arquitetura colonial das Américas.',
      imagem: '/images/geral/maranhao-monumento.jpeg',
    },
    {
      id: 'delta-parnaiba',
      nome: 'Delta do Parnaíba',
      cidade: 'Tutóia - MA',
      categoria: 'Lugar Paradísíaco',
      descricao: 'Um dos poucos deltas abertos do mundo, com 70 ilhas, praias fluviais, manguezais e uma fauna exuberante entre o Maranhão e o Piauí.',
      imagem: '/images/geral/delta.jpg',
    },
    {
      id: 'gastronomia-maranhense',
      nome: 'Mercado Central de São Luís',
      cidade: 'São Luís - MA',
      categoria: 'Restaurantes',
      descricao: 'Coração gastronômico da capital, com arroz de cuxá, torta de camarão, caranguejo e cachaças artesanais servidos em barracas tradicionais desde o século XIX.',
      imagem: '/images/geral/mercado.jpg',
    },
  ],
};

const MaranhaoPontos = () => <NortePontosBase config={config} />;
export default MaranhaoPontos;
