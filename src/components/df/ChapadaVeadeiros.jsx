import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Chapada dos Veadeiros',
  subtitulo: 'Patrimônio Natural da Humanidade — o cerrado em sua forma mais pura.',
  carouselImages: ['/images/natureza/veadeiros.jpeg', '/images/natureza/chapada.jpeg', '/images/natureza/floresta.jpeg'],
  galeriaImages: [
    { src: '/images/natureza/veadeiros.jpeg', alt: 'Chapada dos Veadeiros' },
    { src: '/images/natureza/chapada.jpeg', alt: 'Cachoeira' },
    { src: '/images/natureza/floresta.jpeg', alt: 'Cerrado' },
    { src: '/images/natureza/bonito.jpeg', alt: 'Natureza' },
  ],
  tema: {
    bg: '#1a2e0d', texto: '#d5f5e3',
    acento: '#2ecc71', card: '#2a4a1a', tituloTexto: '#abebc6',
    navTexto: '#82e0aa', navAtivo: '#fff', navBorda: '#2ecc71',
    footerBg: 'linear-gradient(135deg, #2a4a1a, #1a2e0d)', footerTexto: '#abebc6',
  },
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'Patrimônio Natural da Humanidade',
      texto: 'A Chapada dos Veadeiros é um Parque Nacional localizado no estado de Goiás, a apenas 230 km de Brasília. Tombada pela UNESCO como Patrimônio Natural da Humanidade em 2001, a chapada protege um dos últimos remanescentes do cerrado brasileiro, com cachoeiras monumentais, cânions, trilhas e uma biodiversidade extraordinária.',
      imagem: '/images/natureza/veadeiros.jpeg',
      alt: 'Chapada dos Veadeiros',
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
      imagem: '/images/natureza/chapada.jpeg',
      alt: 'Cachoeiras da Chapada',
      subsecoes: [
        { titulo: 'Cachoeiras do Parque', texto: 'As Cachoeiras 1 e 2 do Rio Preto, com quedas de 80 e 120 metros respectivamente, são as mais famosas. A trilha de acesso é de nível moderado e leva cerca de 3 horas.' },
        { titulo: 'Vale da Lua', texto: 'Formação rochosa esculpida pelo Rio São Miguel ao longo de milhões de anos. As pedras arredondadas e as piscinas naturais criam uma paisagem que parece de outro planeta.' },
        { titulo: 'Cânion das Bandeirinhas', texto: 'Um dos cânions mais bonitos do Brasil, com paredes de quartzito e uma cachoeira ao fundo. A trilha de 14 km é desafiadora mas recompensadora.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Explorar',
      texto: 'A Chapada dos Veadeiros fica a 230 km de Brasília pela BR-020. Alto Paraíso de Goiás é a cidade base, com boa infraestrutura turística. Guias são obrigatórios para algumas trilhas.',
      imagem: '/images/natureza/floresta.jpeg',
      alt: 'Cerrado da Chapada',
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

const ChapadaVeadeiros = () => <CearaPontoBase config={config} />;
export default ChapadaVeadeiros;
