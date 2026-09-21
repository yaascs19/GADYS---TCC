import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Praia de Pipa',
  subtitulo: 'Falésias avermelhadas, golfinhos e a vila mais charmosa do Nordeste.',
  carouselImages: ['/images/geral/rn-pipa.jpg', '/images/geral/rn2.jpg'],
  galeriaImages: [
    { src: '/images/geral/rn-pipa.jpg', alt: 'Praia de Pipa' },
    { src: '/images/geral/rn2.jpg', alt: 'Falésias de Pipa' },
    { src: '/images/geral/rn3.jpg', alt: 'Golfinhos em Pipa' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Joia do Litoral Sul Potiguar',
      texto: 'A Praia de Pipa é considerada uma das praias mais bonitas do Brasil e um dos destinos mais charmosos do Nordeste. Com suas falésias avermelhadas, águas cristalinas e uma vila boêmia repleta de bares, restaurantes e lojas de artesanato, Pipa encanta visitantes do mundo inteiro. O Santuário Ecológico de Pipa protege a Mata Atlântica e abriga golfinhos-rotadores que habitam a Baía dos Golfinhos.',
      imagem: '/images/geral/rn-pipa.jpg',
      alt: 'Vista aérea da Praia de Pipa',
      lista: [
        'Localização: Tibau do Sul, a 85 km de Natal - RN.',
        'Destaque: Baía dos Golfinhos — golfinhos-rotadores em habitat natural.',
        'Vila: Charmosa, com bares, restaurantes e vida noturna animada.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer em Pipa',
      texto: 'Pipa combina natureza, aventura e cultura em um destino completo para todos os gostos.',
      imagem: '/images/geral/rn2.jpg',
      alt: 'Falésias de Pipa',
      subsecoes: [
        {
          titulo: 'Baía dos Golfinhos',
          texto: 'A Baía dos Golfinhos é o ponto mais famoso de Pipa. Golfinhos-rotadores habitam a baía e podem ser vistos de perto — especialmente ao amanhecer, quando chegam para se alimentar.',
        },
        {
          titulo: 'Santuário Ecológico',
          texto: 'O Santuário Ecológico de Pipa preserva um dos últimos remanescentes de Mata Atlântica do RN. Trilhas guiadas levam o visitante por uma natureza exuberante com vista para o mar.',
        },
        {
          titulo: 'Lagoa do Guaraíras',
          texto: 'A lagoa separa Pipa do continente e é perfeita para passeios de barco ao pôr do sol. As águas calmas e o cenário de falésias criam um ambiente mágico e inesquecível.',
        },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Hospedar',
      texto: 'Pipa fica a 85 km de Natal, com acesso pela BR-101 e RN-003.',
      imagem: '/images/geral/rn-pipa.jpg',
      alt: 'Praia de Pipa',
      subsecoes: [
        {
          titulo: 'Como Chegar',
          texto: 'De Natal, siga pela BR-101 Sul até Goianinha, depois pela RN-003 até Tibau do Sul e Pipa (aprox. 1h30). Há ônibus regulares e vans saindo de Natal.',
        },
        {
          titulo: 'Melhor Época',
          texto: 'De agosto a fevereiro para praias e sol. Setembro a novembro para ver os golfinhos com mais frequência. Evite o período chuvoso (março a julho).',
        },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Toca da Coruja', nota: 4.9, contato: '(84) 3246-2226', site: 'https://www.tocadacoruja.com.br/' },
            { nome: 'Camarões Pipa', nota: 4.7, contato: '(84) 3246-2345', site: 'https://www.instagram.com/camaroespipa/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Toca da Coruja Boutique Hotel', nota: 4.9, contato: '(84) 3246-2226', site: 'https://www.tocadacoruja.com.br/' },
            { nome: 'Pousada Tartaruga', nota: 4.7, contato: '(84) 3246-2100', site: 'https://www.pousadatartaruga.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const Pipa = () => <CearaPontoBase config={config} />;
export default Pipa;
