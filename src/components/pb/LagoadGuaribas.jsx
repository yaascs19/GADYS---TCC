import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Lagoa de Guaribas',
  subtitulo: 'Águas calmas, coqueiros e esportes aquáticos em Cabedelo.',
  carouselImages: ['/images/geral/rn-maracajau.jpg', '/images/geral/rn-natureza.jpg'],
  galeriaImages: [
    { src: '/images/geral/rn-maracajau.jpg', alt: 'Lagoa de Guaribas' },
    { src: '/images/geral/rn-natureza.jpg', alt: 'Cabedelo' },
    { src: '/images/geral/praiaEx.jpg', alt: 'Litoral de Cabedelo' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Refúgio Aquático da Paraíba',
      texto: 'A Lagoa de Guaribas, em Cabedelo, é um dos destinos mais tranquilos e charmosos do litoral paraibano. Cercada de coqueiros e vegetação nativa, a lagoa de águas calmas e esverdeadas é ideal para esportes aquáticos, passeios de caiaque e momentos de relaxamento longe da agitação das praias urbanas.',
      imagem: '/images/geral/rn-maracajau.jpg',
      alt: 'Lagoa de Guaribas',
      lista: [
        'Localização: Cabedelo, a 18 km de João Pessoa - PB.',
        'Destaque: Águas calmas ideais para caiaque e stand-up paddle.',
        'Natureza: Cercada de Mata Atlântica e coqueiros nativos.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Explore a Lagoa',
      texto: 'A Lagoa de Guaribas oferece uma experiência de natureza tranquila, com esportes aquáticos, trilhas e a possibilidade de observar aves e fauna local.',
      imagem: '/images/geral/rn-natureza.jpg',
      alt: 'Esportes aquáticos na Lagoa de Guaribas',
      subsecoes: [
        { titulo: 'Caiaque e Stand-Up Paddle', texto: 'As águas calmas da lagoa são perfeitas para caiaque e stand-up paddle. Equipamentos podem ser alugados no local.' },
        { titulo: 'Trilhas e Observação de Aves', texto: 'As trilhas ao redor da lagoa passam por áreas de Mata Atlântica preservada, onde é possível observar diversas espécies de aves.' },
        { titulo: 'Pôr do Sol', texto: 'O pôr do sol refletido nas águas calmas da lagoa é um dos espetáculos mais bonitos da região. O local é frequentado por fotógrafos e amantes da natureza.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Dicas',
      texto: 'Cabedelo fica a 18 km de João Pessoa pela BR-230. A Lagoa de Guaribas é facilmente acessível de carro ou ônibus.',
      imagem: '/images/geral/rn-maracajau.jpg',
      alt: 'Lagoa de Guaribas',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De João Pessoa, siga pela BR-230 em direção a Cabedelo (18 km). Há ônibus regulares saindo do centro de João Pessoa.' },
        { titulo: 'Melhor Época', texto: 'O local é agradável o ano todo. De setembro a março, com menos chuva, as trilhas ficam mais acessíveis.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Beira Lagoa', nota: 4.5, contato: '(83) 3228-1234', site: '#' },
            { nome: 'Quiosque da Lagoa', nota: 4.4, contato: '(83) 9555-5555', site: '#' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Pousada Guaribas', nota: 4.5, contato: '(83) 3228-2020', site: '#' },
            { nome: 'Hotel Cabedelo', nota: 4.4, contato: '(83) 3228-3030', site: '#' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const LagoadGuaribas = () => <CearaPontoBase config={config} />;
export default LagoadGuaribas;
