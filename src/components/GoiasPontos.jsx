import React from 'react';
import NortePontosBase from './norte/NortePontosBase';

const config = {
  estado: 'GO',
  titulo: 'Tesouros de Goiás',
  subtitulo: 'Do cerrado às cidades históricas, descubra o coração do Brasil.',
  headerImage: '/images/geral/goias.webp',
  voltarRota: '/goias',
  placeholder: 'O que você quer descobrir em Goiás?',
  pontos: [
    {
      id: 'chapada-veadeiros-go',
      nome: 'Chapada dos Veadeiros',
      cidade: 'Alto Paraíso de Goiás - GO',
      categoria: 'Lugar Paradísíaco',
      descricao: 'Cachoeiras como a do Rio Preto e a Carioquinhas, trilhas de até 12 km e poços de água cristalina dentro do Parque Nacional, Patrimônio Natural da Humanidade.',
      imagem: '/images/geral/goias - natureza.jpg',
      rota: '/goias/chapada-dos-veadeiros',
    },
    {
      id: 'goias-velho',
      nome: 'Centro Histórico de Goiás Velho',
      cidade: 'Goiás - GO',
      categoria: 'Monumentos',
      descricao: 'Ruas de pedra-de-rio, Igreja de Santa Bárbara, Palácio Conde dos Arcos e casarões do século XVIII que formam um dos conjuntos coloniais mais preservados do Brasil.',
      imagem: '/images/geral/goias.2.jpg',
    },
    {
      id: 'parque-aguas-quentes',
      nome: 'Parque Estadual da Serra de Caldas Novas',
      cidade: 'Caldas Novas - GO',
      categoria: 'Lugar Paradísíaco',
      descricao: 'Reserva com nascentes de águas termais naturais a até 51°C, trilhas ecológicas e mirantes com vista para o cerrado goiano.',
      imagem: '/images/geral/goias.1.webp',
    },
    {
      id: 'mercado-goiania',
      nome: 'Mercado Municipal de Goiânia',
      cidade: 'Goiânia - GO',
      categoria: 'Restaurantes',
      descricao: 'Referência gastronômica da capital, com barracas de empadão goiano, pamonha, pequi, galinhada e doces típicos do cerrado servidos desde 1955.',
      imagem: '/images/geral/goias - comida.jpg',
    },
  ],
};

const GoiasPontos = () => <NortePontosBase config={config} />;
export default GoiasPontos;
