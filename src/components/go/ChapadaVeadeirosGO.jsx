import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Chapada dos Veadeiros',
  subtitulo: 'Patrimônio Natural da Humanidade — o cerrado em sua forma mais pura.',
  carouselImages: [
    '/images/geral/Chapada dos Veadeiros.webp',
    '/images/geral/Chapada dos Veadeiros.1.webp',
  ],
  galeriaImages: [
    { src: '/images/geral/Chapada dos Veadeiros.webp', alt: 'Chapada dos Veadeiros' },
    { src: '/images/geral/Chapada dos Veadeiros.1.webp', alt: 'Chapada dos Veadeiros vista' },
    { src: '/images/geral/Chapada dos Veadeiros.2.webp', alt: 'Cachoeiras da Chapada' },
    { src: '/images/geral/Chapada dos Veadeiros.3.png', alt: 'Vale da Lua' },
    { src: '/images/geral/Chapada dos Veadeiros.4.webp', alt: 'Cerrado da Chapada' },
  ],
  tema: {
    bg: '#0e1f0a',
    texto: '#d5f0d0',
    card: '#1e3d14',
    acento: '#5cb85c',
    navTexto: '#8fd68f',
    navAtivo: '#f0e04a',
    navBorda: '#f0e04a',
    tituloTexto: '#f0e04a',
    recCard: '#1e3d14',
    recNome: '#d5f0d0',
    recContato: '#0e1f0a',
    recContatoBg: '#5cb85c',
    footerBg: 'linear-gradient(135deg, #1e3d14, #070f05)',
    footerTexto: '#f0e04a',
  },
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'Patrimônio Natural da Humanidade',
      texto: 'A Chapada dos Veadeiros é um Parque Nacional localizado no estado de Goiás, a apenas 230 km de Brasília. Tombada pela UNESCO como Patrimônio Natural da Humanidade em 2001, a chapada protege um dos últimos remanescentes do cerrado brasileiro, com cachoeiras monumentais, cânions, trilhas e uma biodiversidade extraordinária.',
      imagem: '/images/geral/Chapada dos Veadeiros.2.webp',
      alt: 'Chapada dos Veadeiros vista aérea',
      lista: [
        'Localização: Alto Paraíso de Goiás - GO, a 230 km de Brasília.',
        'UNESCO: Patrimônio Natural da Humanidade desde 2001.',
        'Área: 240.611 hectares de cerrado preservado.',
        'Destaque: Cachoeiras de até 120 metros de queda.',
      ],
    },
    natureza: {
      label: 'Natureza',
      titulo: 'Cachoeiras e Trilhas',
      texto: 'A Chapada dos Veadeiros concentra algumas das cachoeiras mais impressionantes do Brasil. As trilhas variam de fáceis a muito difíceis, com opções para todos os perfis de visitante.',
      imagem: '/images/geral/Chapada dos Veadeiros.3.png',
      alt: 'Cachoeiras da Chapada dos Veadeiros',
      subsecoes: [
        { titulo: 'Cachoeiras do Rio Preto', texto: 'As Cachoeiras 1 e 2 do Rio Preto, com quedas de 80 e 120 metros respectivamente, são as mais famosas. A trilha de acesso é de nível moderado e leva cerca de 3 horas.' },
        { titulo: 'Vale da Lua', texto: 'Formação rochosa esculpida pelo Rio São Miguel ao longo de milhões de anos. As pedras arredondadas e as piscinas naturais criam uma paisagem que parece de outro planeta.' },
        { titulo: 'Cânion das Bandeirinhas', texto: 'Um dos cânions mais bonitos do Brasil, com paredes de quartzito e uma cachoeira ao fundo. A trilha de 14 km é desafiadora mas recompensadora.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Explorar',
      texto: 'A Chapada dos Veadeiros fica a 230 km de Brasília pela BR-020. Alto Paraíso de Goiás é a cidade base, com boa infraestrutura turística. Guias são obrigatórios para algumas trilhas.',
      imagem: '/images/geral/Chapada dos Veadeiros.4.webp',
      alt: 'Entrada da Chapada dos Veadeiros',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De Brasília, pegue a BR-020 em direção a Formosa e depois a GO-118 até Alto Paraíso (aprox. 3h de carro). Há ônibus de Brasília para Alto Paraíso.' },
        { titulo: 'Melhor Época', texto: 'De maio a setembro (estação seca) para trilhas. De outubro a abril as cachoeiras ficam mais cheias, mas algumas trilhas podem ser fechadas.' },
      ],
      recomendacoes: [
        {
          titulo: 'Agências de Turismo',
          itens: [
            { nome: 'Travessia Ecoturismo', nota: 4.9, contato: '(62) 3446-1595', site: 'https://www.travessia.tur.br' },
            { nome: 'Eco Trilhas', nota: 4.8, contato: '(62) 3446-1234', site: 'https://www.instagram.com/ecotrilhas.chapada/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const ChapadaVeadeirosGO = () => <CearaPontoBase config={config} />;
export default ChapadaVeadeirosGO;
