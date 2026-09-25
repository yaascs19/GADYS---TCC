import React from 'react';
import NortePontosBase from './norte/NortePontosBase';

const config = {
  estado: 'MT',
  titulo: 'Tesouros do Mato Grosso',
  subtitulo: 'Do Pantanal à Chapada dos Guimarães, descubra o coração selvagem do Brasil.',
  headerImage: '/images/geral/matogrosso.jpg',
  voltarRota: '/mato-grosso',
  placeholder: 'O que você quer descobrir no Mato Grosso?',
  pontos: [
    {
      id: 'chapada-guimaraes',
      nome: 'Parque Nacional da Chapada dos Guimarães',
      cidade: 'Chapada dos Guimarães - MT',
      categoria: 'Lugar Paradísíaco',
      descricao: 'Centro geodésico da América do Sul com o Véu de Noiva, Cidade de Pedra, Mirante da Geodésia e trilhas por cânions e cachoeiras no coração do cerrado.',
      imagem: '/images/geral/Parque Nacional da Chapada dos Guimarães.jpg',
      rota: '/mato-grosso/parque-chapada-guimaraes',
    },
    {
      id: 'pantanal-mt',
      nome: 'Pantanal Mato-grossense',
      cidade: 'Poconé - MT',
      categoria: 'Lugar Paradísíaco',
      descricao: 'A Transpantaneira, estrada de 147 km com 122 pontes de madeira, atravessa o coração do Pantanal norte com avistamentos de onças, jacarés e tuiuiús.',
      imagem: '/images/geral/Pantanal Mato-grossense.webp',
    },
    {
      id: 'nobres-mt',
      nome: 'Nobres — Aquário Natural',
      cidade: 'Nobres - MT',
      categoria: 'Lugar Paradísíaco',
      descricao: 'Lagoas de água cristalina como a Lagoa Misteriosa e o Buraco das Araras, com visibilidade de até 40 metros e mergulho entre peixes coloridos do cerrado.',
      imagem: '/images/geral/Nobres — Aquário Natural.jpg',
    },
    {
      id: 'gastronomia-mt',
      nome: 'Mercado do Porto — Cuiabá',
      cidade: 'Cuiabá - MT',
      categoria: 'Restaurantes',
      descricao: 'Mercado histórico de Cuiabá com pacu assado, pintado na telha, arroz carreteiro e bolo de arroz — a gastronomia pantaneira em seu ambiente mais autêntico.',
      imagem: '/images/geral/Mercado do Porto — Cuiabá.jpg',
    },
  ],
};

const MatoGrossoPontos = () => <NortePontosBase config={config} />;
export default MatoGrossoPontos;
