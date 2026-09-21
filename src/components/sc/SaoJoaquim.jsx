import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'São Joaquim',
  subtitulo: 'A terra da neve, da maçã e do vinho fino no coração da Serra Catarinense.',
  carouselImages: ['/images/geral/sc-saojoaquim.jpg', '/images/geral/sc1.jpg'],
  galeriaImages: [
    { src: '/images/geral/sc-saojoaquim.jpg', alt: 'São Joaquim nevado' },
    { src: '/images/geral/sc1.jpg', alt: 'Serra Catarinense' },
    { src: '/images/geral/sc2.jpg', alt: 'Vinhedos de São Joaquim' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Terra da Neve',
      texto: 'São Joaquim é a cidade mais fria do Brasil, localizada a 1.360 metros de altitude na Serra Catarinense. Famosa pelas nevadas que ocorrem entre junho e agosto, a cidade também é reconhecida pela produção de maçãs de alta qualidade e pelos vinhos finos de altitude, que conquistaram prêmios internacionais. Um destino único para quem quer ver neve no Brasil.',
      imagem: '/images/geral/sc-saojoaquim.jpg',
      alt: 'São Joaquim com neve',
      lista: [
        'Localização: Serra Catarinense, a 230 km de Florianópolis.',
        'Altitude: 1.360 metros — a cidade mais fria do Brasil.',
        'Destaque: Neve, maçãs premiadas e vinhos finos de altitude.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer em São Joaquim',
      texto: 'São Joaquim oferece experiências únicas em qualquer época do ano.',
      imagem: '/images/geral/sc1.jpg',
      alt: 'Serra Catarinense',
      subsecoes: [
        { titulo: 'Neve e Inverno', texto: 'Entre junho e agosto, São Joaquim registra nevadas que transformam a paisagem. O fenômeno atrai turistas de todo o Brasil para ver a neve pela primeira vez.' },
        { titulo: 'Rota dos Vinhos', texto: 'A Serra Catarinense produz vinhos finos de altitude reconhecidos internacionalmente. Diversas vinícolas oferecem visitas guiadas e degustações.' },
        { titulo: 'Parque Nacional de São Joaquim', texto: 'Com 49 mil hectares de Mata Atlântica preservada, o parque abriga araucárias centenárias, cachoeiras e uma fauna rica.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Hospedar',
      texto: 'São Joaquim fica a 230 km de Florianópolis, com acesso pela BR-282 e SC-438.',
      imagem: '/images/geral/sc-saojoaquim.jpg',
      alt: 'São Joaquim',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De carro pela BR-282 até Lages, depois pela SC-438 até São Joaquim. Não há voos diretos — o aeroporto mais próximo é o de Florianópolis.' },
        { titulo: 'Melhor Época', texto: 'Junho a agosto para neve e frio intenso. Setembro a novembro para flores e clima ameno. Dezembro a março para colheita de maçãs.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Maçaneiro', nota: 4.7, contato: '(49) 3233-1234', site: 'https://www.instagram.com/restaurantemascaneiro/' },
            { nome: 'Pousada e Restaurante Neve', nota: 4.6, contato: '(49) 3233-5678', site: 'https://www.instagram.com/pousadaneve/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Pousada Rancho das Araucárias', nota: 4.8, contato: '(49) 3233-2222', site: 'https://www.ranchoarecauarias.com.br/' },
            { nome: 'Hotel São Joaquim', nota: 4.5, contato: '(49) 3233-3333', site: 'https://www.hotelsaojoaquim.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const SaoJoaquim = () => <CearaPontoBase config={config} />;
export default SaoJoaquim;
