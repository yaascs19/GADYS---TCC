import React from 'react';
import NortePontosBase from './norte/NortePontosBase';

const config = {
  estado: 'RR',
  titulo: 'Tesouros de Roraima',
  subtitulo: 'Descubra o Teto do Brasil.',
  headerImage: '/images/geral/oam.jpg',
  voltarRota: '/roraima',
  placeholder: 'O que você quer descobrir em Roraima?',
  pontos: [
    { id: 'monte-roraima', nome: 'Monte Roraima', cidade: 'Pacaraima - RR', categoria: 'Lugar Paradísíaco', descricao: 'O ponto mais alto do Brasil com 2.875 metros, uma das formações geológicas mais antigas do planeta. O trekking até o topo é uma das aventuras mais épicas da América do Sul.', imagem: '/images/geral/monte1.jpg', rota: '/roraima/monte-roraima' },
    { id: 'parque-nacional-monte-roraima', nome: 'Parque Nacional do Monte Roraima', cidade: 'Pacaraima - RR', categoria: 'Lugar Paradísíaco', descricao: 'O parque protege os tepuis e a savana do Lavrado, com uma biodiversidade única e paisagens que inspiraram Arthur Conan Doyle a escrever "O Mundo Perdido".', imagem: '/images/geral/Parque Nacional do Monte Roraima.jpg', rota: null },
    { id: 'lavrado-roraima', nome: 'Lavrado de Roraima', cidade: 'Boa Vista - RR', categoria: 'Lugar Paradísíaco', descricao: 'A maior savana amazônica do mundo, com campos abertos, buritizais e lagoas sazonais que abrigam espécies endêmicas únicas no planeta.', imagem: '/images/geral/Lavrado de Roraima.jpg', rota: null },
  ],
};

const RoraimaPontos = () => <NortePontosBase config={config} />;
export default RoraimaPontos;
