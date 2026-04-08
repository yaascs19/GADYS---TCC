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
    { id: 'monte-roraima', nome: 'Monte Roraima', cidade: 'Pacaraima - RR', categoria: 'Lugar Paradísíaco', descricao: 'O ponto mais alto do Brasil com 2.875 metros, uma das formações geológicas mais antigas do planeta. O trekking até o topo é uma das aventuras mais épicas da América do Sul.', imagem: '/images/geral/oam.jpg', rota: '/roraima/monte-roraima' },
    { id: 'parque-nacional-monte-roraima', nome: 'Parque Nacional do Monte Roraima', cidade: 'Pacaraima - RR', categoria: 'Lugar Paradísíaco', descricao: 'O parque protege os tepuis e a savana do Lavrado, com uma biodiversidade única e paisagens que inspiraram Arthur Conan Doyle a escrever "O Mundo Perdido".', imagem: '/images/geral/amazonas1.avif', rota: null },
    { id: 'lavrado-roraima', nome: 'Lavrado de Roraima', cidade: 'Boa Vista - RR', categoria: 'Lugar Paradísíaco', descricao: 'A maior savana amazônica do mundo, com campos abertos, buritizais e lagoas sazonais que abrigam espécies endêmicas únicas no planeta.', imagem: '/images/geral/amazonas2.jpg', rota: null },
    { id: 'catedral-boa-vista', nome: 'Catedral Nossa Senhora do Carmo', cidade: 'Boa Vista - RR', categoria: 'Monumentos', descricao: 'A principal igreja de Boa Vista, com arquitetura moderna e imponente, localizada no centro da cidade planejada em forma de leque.', imagem: '/images/geral/amazonas3.1.jpg', rota: null },
    { id: 'praia-do-cauame', nome: 'Praia do Cauamé', cidade: 'Boa Vista - RR', categoria: 'Lugar Paradísíaco', descricao: 'A praia fluvial mais popular de Boa Vista, às margens do Rio Branco, com areia branca, águas tranquilas e estrutura completa de lazer.', imagem: '/images/geral/oam.jpg', rota: null },
    { id: 'gastronomia-roraimense', nome: 'Mercado Público de Boa Vista', cidade: 'Boa Vista - RR', categoria: 'Restaurantes', descricao: 'O coração gastronômico de Boa Vista, com pratos típicos roraimenses como o paçoca de carne, o peixe assado e as frutas do Lavrado.', imagem: '/images/geral/amazonas1.avif', rota: null },
    { id: 'cultura-yanomami', nome: 'Terra Indígena Yanomami', cidade: 'Alto Alegre - RR', categoria: 'Costume Cultural', descricao: 'A maior terra indígena do Brasil, lar do povo Yanomami. Visitas guiadas e responsáveis permitem conhecer a cultura, o artesanato e os rituais deste povo milenar.', imagem: '/images/geral/amazonas2.jpg', rota: null },
    { id: 'museu-integrado-roraima', nome: 'Museu Integrado de Roraima', cidade: 'Boa Vista - RR', categoria: 'Monumentos', descricao: 'O principal museu do estado, com acervo sobre a história, a arqueologia e a cultura dos povos indígenas de Roraima, incluindo peças raras e exposições permanentes.', imagem: '/images/geral/amazonas3.1.jpg', rota: null },
  ],
};

const RoraimaPontos = () => <NortePontosBase config={config} />;
export default RoraimaPontos;
