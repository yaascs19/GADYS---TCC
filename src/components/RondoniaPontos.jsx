import React from 'react';
import NortePontosBase from './norte/NortePontosBase';

const config = {
  estado: 'RO',
  titulo: 'Tesouros de Rondônia',
  subtitulo: 'Descubra a Porta da Amazônia.',
  headerImage: '/images/geral/Museu Estrada de Ferro Madeira-Mamoré1.jpg',
  voltarRota: '/rondonia',
  placeholder: 'O que você quer descobrir em Rondônia?',
  pontos: [
    { id: 'estrada-ferro-madeira-mamore', nome: 'Museu Estrada de Ferro Madeira-Mamoré', cidade: 'Porto Velho - RO', categoria: 'Monumentos', descricao: 'A "Ferrovia do Diabo", construída no início do século XX, é um dos projetos de engenharia mais audaciosos da história brasileira. O museu preserva locomotivas e a memória dos trabalhadores.', imagem: '/images/geral/Museu Estrada de Ferro Madeira-Mamoré.webp', rota: '/rondonia/ferrovia-madeira-mamore' },
    { id: 'parque-nacional-pacaas-novos', nome: 'Parque Nacional Pacaás Novos', cidade: 'Guajará-Mirim - RO', categoria: 'Lugar Paradísíaco', descricao: 'Um dos maiores parques nacionais do Brasil, com floresta amazônica densa, serras e uma biodiversidade extraordinária, incluindo espécies ameaçadas de extinção.', imagem: '/images/geral/amazonas1.avif', rota: null },
    { id: 'cachoeira-samuel', nome: 'Lago de Samuel', cidade: 'Porto Velho - RO', categoria: 'Lugar Paradísíaco', descricao: 'Formado pela Usina Hidrelétrica de Samuel, o lago é um destino popular para pesca esportiva, passeios de barco e esportes aquáticos.', imagem: '/images/geral/Lago de Samuel.jpg', rota: null },
    { id: 'catedral-porto-velho', nome: 'Catedral Nossa Senhora das Graças', cidade: 'Porto Velho - RO', categoria: 'Monumentos', descricao: 'A principal igreja de Porto Velho, com arquitetura imponente e vitrais coloridos, é um símbolo da fé e da história da capital rondoniense.', imagem: '/images/geral/Catedral Nossa Senhora das Graças.jpg', rota: null },
    { id: 'reserva-biologica-jaru', nome: 'Reserva Biológica do Jaru', cidade: 'Ji-Paraná - RO', categoria: 'Lugar Paradísíaco', descricao: 'Uma das mais importantes reservas biológicas da Amazônia, com floresta primária preservada e uma fauna riquíssima, incluindo onças-pintadas e antas.', imagem: '/images/geral/Reserva Biológica do Jaru.jpg', rota: null },
  ],
};

const RondoniaPontos = () => <NortePontosBase config={config} />;
export default RondoniaPontos;
