import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Parque Estadual de Vila Velha',
  subtitulo: 'Formações rochosas esculpidas por milhões de anos de erosão.',
  carouselImages: ['/images/geral/pant-xx.webp', '/images/geral/sc-natureza.jpg'],
  galeriaImages: [
    { src: '/images/geral/pant-xx.webp', alt: 'Vila Velha' },
    { src: '/images/geral/sc-natureza.jpg', alt: 'Formações rochosas de Vila Velha' },
    { src: '/images/geral/rs-natureza.jpg', alt: 'Furnas de Vila Velha' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Museu de Pedra do Paraná',
      texto: 'O Parque Estadual de Vila Velha, em Ponta Grossa, é um dos destinos mais fascinantes do Paraná. Suas formações rochosas de arenito, esculpidas pela erosão ao longo de 300 milhões de anos, formam figuras que lembram animais, pessoas e objetos. As furnas — buracos profundos formados pelo colapso do solo — e as lagoas completam a paisagem surreal do parque.',
      imagem: '/images/geral/pant-xx.webp',
      alt: 'Formações rochosas de Vila Velha',
      lista: [
        'Localização: Ponta Grossa, a 97 km de Curitiba.',
        'Destaque: Formações rochosas com até 300 milhões de anos.',
        'Atrações: Furnas, lagoas e trilhas pelos Campos Gerais.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Explore Vila Velha',
      texto: 'O parque oferece trilhas guiadas e teleférico para as furnas, permitindo explorar as formações rochosas e a biodiversidade dos Campos Gerais paranaenses.',
      imagem: '/images/geral/sc-natureza.jpg',
      alt: 'Trilha em Vila Velha',
      subsecoes: [
        { titulo: 'Formações Rochosas', texto: 'As pedras esculpidas pela erosão formam figuras como a Taça, o Camelo, a Fada e o Elefante. A trilha principal percorre as principais formações em cerca de 2 horas.' },
        { titulo: 'Furnas', texto: 'As furnas são buracos circulares de até 100 metros de profundidade, formados pelo colapso de cavernas subterrâneas. O teleférico desce até o fundo da Furna 1.' },
        { titulo: 'Lagoa Dourada', texto: 'Lagoa de águas esverdeadas no interior de uma furna, com uma beleza cênica única. O contraste entre as paredes rochosas e a água é impressionante.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Dicas',
      texto: 'O parque fica a 97 km de Curitiba pela BR-376. As visitas são feitas com guias credenciados e o teleférico para as furnas tem horários específicos.',
      imagem: '/images/geral/pant-xx.webp',
      alt: 'Entrada do Parque de Vila Velha',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De Curitiba, siga pela BR-376 até Ponta Grossa, depois pela PR-151 até o parque. O percurso leva cerca de 1h30.' },
        { titulo: 'Melhor Época', texto: 'De abril a setembro, com menos chuva e clima mais ameno. Evite dias chuvosos, pois as trilhas ficam escorregadias.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Recanto das Pedras', nota: 4.5, contato: '(42) 3228-1138', site: '#' },
            { nome: 'Churrascaria Pampas', nota: 4.4, contato: '(42) 3224-5500', site: '#' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Hotel Itamaraty Ponta Grossa', nota: 4.5, contato: '(42) 3224-1333', site: '#' },
            { nome: 'Pousada Vila Velha', nota: 4.6, contato: '(42) 3228-1000', site: '#' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const VilaVelha = () => <CearaPontoBase config={config} />;
export default VilaVelha;
