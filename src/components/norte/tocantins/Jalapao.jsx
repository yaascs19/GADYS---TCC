import React from 'react';
import CearaPontoBase from '../../CearaPontoBase';

const config = {
  titulo: 'Parque Estadual do Jalapão',
  subtitulo: 'O deserto dourado do coração do Brasil.',
  carouselImages: ['/images/geral/amazonas3.1.jpg', '/images/geral/oam.jpg'],
  galeriaImages: [
    { src: '/images/geral/amazonas3.1.jpg', alt: 'Dunas do Jalapão' },
    { src: '/images/geral/oam.jpg', alt: 'Fervedouro do Jalapão' },
    { src: '/images/geral/amazonas1.avif', alt: 'Cachoeira do Jalapão' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Deserto Dourado do Cerrado',
      texto: 'O Parque Estadual do Jalapão é um dos destinos ecoturísticos mais deslumbrantes do Brasil. Com dunas de areia dourada que chegam a 40 metros de altura, fervedouros de água cristalina, cachoeiras e serras, o parque oferece uma experiência única de contato com a natureza selvagem do Cerrado tocantinense. O capim dourado, fibra exclusiva da região, é a matéria-prima do artesanato mais famoso do Tocantins.',
      imagem: '/images/geral/amazonas3.1.jpg',
      alt: 'Dunas douradas do Jalapão',
      lista: [
        'Área: 158.885 hectares de Cerrado preservado.',
        'Destaque: Fervedouros — nascentes de água que "fervem" de tão cristalinas.',
        'Artesanato: Capim dourado, fibra exclusiva do Jalapão.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Aventura no Coração do Cerrado',
      texto: 'O Jalapão oferece experiências únicas para os amantes da natureza e do ecoturismo.',
      imagem: '/images/geral/oam.jpg',
      alt: 'Fervedouro do Jalapão',
      subsecoes: [
        { titulo: 'Fervedouros', texto: 'Os fervedouros são nascentes de água subterrânea que emergem com tanta pressão que parecem "ferver". A água cristalina e a pressão natural criam uma sensação única de flutuação, tornando o banho uma experiência inesquecível.' },
        { titulo: 'Dunas de Areia', texto: 'As dunas douradas do Jalapão chegam a 40 metros de altura e são formadas pela areia do Rio Novo. Subir as dunas ao entardecer e contemplar o pôr do sol sobre o Cerrado é um dos momentos mais mágicos do parque.' },
        { titulo: 'Cachoeiras e Trilhas', texto: 'O parque abriga diversas cachoeiras, como a Cachoeira da Velha e a Cachoeira do Formiga. As trilhas ecológicas percorrem o Cerrado com guias especializados, revelando a flora e fauna únicas do bioma.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Visitar o Jalapão',
      texto: 'O Jalapão exige veículo 4x4 e guia credenciado. O acesso é feito a partir de Palmas ou de Barreiras (BA).',
      imagem: '/images/geral/amazonas1.avif',
      alt: 'Acesso ao Jalapão',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De Palmas, siga pela TO-010 até Mateiros (320 km, sendo 200 km de estrada de terra). Veículo 4x4 é obrigatório. Agências de turismo em Palmas oferecem pacotes completos com transporte e guia.' },
        { titulo: 'Melhor Época', texto: 'De junho a setembro, na estação seca, as estradas estão em melhores condições e os fervedouros mais acessíveis. De outubro a maio, as chuvas podem tornar as estradas intransitáveis.' },
      ],
      recomendacoes: [
        {
          titulo: 'Agências de Turismo',
          itens: [
            { nome: 'Jalapão Ecoturismo', nota: 4.9, contato: '(63) 9999-1234', site: 'https://www.instagram.com/' },
            { nome: 'Tocantins Aventura', nota: 4.8, contato: '(63) 9888-5678', site: 'https://www.instagram.com/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Pousada do Jalapão', nota: 4.8, contato: '(63) 9777-1234', site: 'https://www.instagram.com/' },
            { nome: 'Hotel Mateiros', nota: 4.6, contato: '(63) 9666-5678', site: 'https://www.instagram.com/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const Jalapao = () => <CearaPontoBase config={config} />;
export default Jalapao;
