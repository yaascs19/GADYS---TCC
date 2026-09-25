import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Parque Nacional dos Lençóis Maranhenses',
  subtitulo: 'Dunas brancas, lagoas cristalinas e um dos cenários mais únicos do planeta.',
  carouselImages: [
    '/images/geral/Parque Nacional dos Lençóis Maranhenses.jpg',
    '/images/geral/Parque Nacional dos Lençóis Maranhenses.1.jpg',
  ],
  galeriaImages: [
    { src: '/images/geral/Parque Nacional dos Lençóis Maranhenses.jpg', alt: 'Lençóis Maranhenses' },
    { src: '/images/geral/Parque Nacional dos Lençóis Maranhenses.1.jpg', alt: 'Lençóis Maranhenses vista' },
    { src: '/images/geral/Parque Nacional dos Lençóis Maranhenses.2.jpg', alt: 'Lagoas dos Lençóis' },
    { src: '/images/geral/Parque Nacional dos Lençóis Maranhenses.3.jpg', alt: 'Dunas dos Lençóis' },
    { src: '/images/geral/Parque Nacional dos Lençóis Maranhenses.4.jpg', alt: 'Lençóis Maranhenses visite' },
  ],
  tema: {
    bg: '#021a2e',
    texto: '#d0eaf8',
    card: '#042d4a',
    acento: '#29abe2',
    navTexto: '#7ecfef',
    navAtivo: '#f5e642',
    navBorda: '#f5e642',
    tituloTexto: '#f5e642',
    recCard: '#042d4a',
    recNome: '#d0eaf8',
    recContato: '#021a2e',
    recContatoBg: '#29abe2',
    footerBg: 'linear-gradient(135deg, #042d4a, #010d17)',
    footerTexto: '#f5e642',
  },
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Deserto que Floresce',
      texto: 'O Parque Nacional dos Lençóis Maranhenses é um dos fenômenos naturais mais únicos do planeta. Com 155 mil hectares de dunas de areia branca que se estendem até o horizonte, o parque é pontilhado por centenas de lagoas de água doce cristalina formadas pelas chuvas entre janeiro e junho. Um paradoxo da natureza: um deserto que floresce.',
      imagem: '/images/geral/Parque Nacional dos Lençóis Maranhenses.2.jpg',
      alt: 'Vista aérea dos Lençóis Maranhenses',
      lista: [
        'Localização: Barreirinhas, a 250 km de São Luís - MA.',
        'Área: 155.000 hectares de dunas e lagoas.',
        'Melhor época: De julho a setembro, quando as lagoas estão cheias.',
        'Destaque: Lagoas Azul e Bonita, as mais famosas do parque.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Viva os Lençóis',
      texto: 'Os Lençóis Maranhenses oferecem experiências únicas que misturam aventura, natureza e contemplação em uma paisagem de outro mundo.',
      imagem: '/images/geral/Parque Nacional dos Lençóis Maranhenses.3.jpg',
      alt: 'Lagoas cristalinas dos Lençóis Maranhenses',
      subsecoes: [
        { titulo: 'Lagoas Azul e Bonita', texto: 'As lagoas mais famosas do parque, acessíveis por 4x4 a partir de Barreirinhas. A Lagoa Azul tem até 3 metros de profundidade e água de uma transparência impressionante.' },
        { titulo: 'Passeio de 4x4 pelas Dunas', texto: 'A forma mais comum de explorar o parque é em veículos 4x4 com guias locais. Os passeios saem de Barreirinhas, Santo Amaro e Atins, percorrendo diferentes pontos do parque.' },
        { titulo: 'Pôr do Sol nas Dunas', texto: 'Assistir ao pôr do sol do topo das dunas é uma experiência inesquecível. A luz dourada refletida nas lagoas cria um espetáculo de cores que transforma a paisagem a cada minuto.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Planejar',
      texto: 'Barreirinhas é a principal porta de entrada para os Lençóis Maranhenses, com boa infraestrutura de pousadas, restaurantes e agências de turismo.',
      imagem: '/images/geral/Parque Nacional dos Lençóis Maranhenses.4.jpg',
      alt: 'Entrada dos Lençóis Maranhenses',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De São Luís, há voos para Barreirinhas (40 min) ou ônibus (6h). De carro, siga pela MA-402. Também é possível chegar por Atins, via barco pelo Rio Preguiças.' },
        { titulo: 'Melhor Época', texto: 'De julho a setembro as lagoas estão no auge. De outubro a dezembro as lagoas secam gradualmente. De janeiro a junho é a época das chuvas, quando as lagoas se formam.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Buriti', nota: 4.8, contato: '(98) 3349-1234', site: 'https://www.instagram.com/' },
            { nome: 'Peixada do Seu Zé', nota: 4.7, contato: '(98) 3349-5678', site: 'https://www.instagram.com/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Pousada Lins', nota: 4.8, contato: '(98) 3349-0101', site: 'https://www.instagram.com/' },
            { nome: 'Pousada do Buriti', nota: 4.7, contato: '(98) 3349-0202', site: 'https://www.instagram.com/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const LencoísMaranhenses = () => <CearaPontoBase config={config} />;
export default LencoísMaranhenses;
