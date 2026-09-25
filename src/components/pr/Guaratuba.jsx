import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Guaratuba',
  subtitulo: 'A maior baía do litoral paranaense e praias tranquilas.',
  carouselImages: ['/images/geral/rs-natureza.jpg', '/images/geral/sc-natureza.jpg'],
  galeriaImages: [
    { src: '/images/geral/rs-natureza.jpg', alt: 'Guaratuba' },
    { src: '/images/geral/sc-natureza.jpg', alt: 'Baía de Guaratuba' },
    { src: '/images/geral/sc-bombinhas.jpg', alt: 'Praias de Guaratuba' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Balneário da Baía Paranaense',
      texto: 'Guaratuba é um dos principais balneários do litoral paranaense, famoso pela sua baía — a maior do Paraná — e pelas praias tranquilas que atraem famílias em busca de descanso. A cidade tem forte tradição pesqueira e uma gastronomia baseada em frutos do mar frescos. A travessia de balsa pela baía é uma das experiências mais charmosas do litoral sul do Brasil.',
      imagem: '/images/geral/rs-natureza.jpg',
      alt: 'Baía de Guaratuba',
      lista: [
        'Localização: Litoral sul do Paraná, a 120 km de Curitiba.',
        'Destaque: Maior baía do Paraná e travessia de balsa.',
        'Gastronomia: Frutos do mar frescos e tainha defumada.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Viva Guaratuba',
      texto: 'Guaratuba combina praias tranquilas, natureza preservada e uma gastronomia de frutos do mar que é referência no litoral paranaense.',
      imagem: '/images/geral/sc-natureza.jpg',
      alt: 'Praia de Guaratuba',
      subsecoes: [
        { titulo: 'Travessia de Balsa', texto: 'A travessia de balsa pela Baía de Guaratuba é uma experiência única. Com cerca de 15 minutos de duração, oferece vistas panorâmicas da baía e das serras ao fundo.' },
        { titulo: 'Praias e Baía', texto: 'As praias de Guaratuba são calmas e ideais para famílias. A Praia Central, a Praia Brava e a Praia do Cristo são as mais frequentadas.' },
        { titulo: 'Pesca e Gastronomia', texto: 'A tradição pesqueira de Guaratuba se reflete nos restaurantes à beira-mar, com camarão, tainha, robalo e ostras frescos servidos de diversas formas.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Dicas',
      texto: 'Guaratuba fica a 120 km de Curitiba pela BR-376 e PR-412. A travessia de balsa é necessária para quem vem de Matinhos.',
      imagem: '/images/geral/rs-natureza.jpg',
      alt: 'Guaratuba',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De Curitiba, siga pela BR-376 até Garuva, depois pela PR-412 até Guaratuba. Também é possível vir de Matinhos pela balsa.' },
        { titulo: 'Melhor Época', texto: 'De dezembro a março, com clima quente e mar calmo. Fora da temporada, a cidade fica mais tranquila e os preços são menores.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Recanto do Camarão', nota: 4.6, contato: '(41) 3472-1234', site: '#' },
            { nome: 'Peixaria do Zé', nota: 4.5, contato: '(41) 3472-5678', site: '#' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Hotel Guaratuba', nota: 4.5, contato: '(41) 3472-0000', site: '#' },
            { nome: 'Pousada Beira Mar', nota: 4.4, contato: '(41) 3472-1111', site: '#' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const Guaratuba = () => <CearaPontoBase config={config} />;
export default Guaratuba;
