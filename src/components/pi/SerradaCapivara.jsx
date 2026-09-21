import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Serra da Capivara',
  subtitulo: 'O maior acervo de arte rupestre das Américas — pinturas de até 50 mil anos no sertão piauiense.',
  carouselImages: ['/images/geral/pi-capivara.jpg', '/images/geral/pi1.jpg'],
  galeriaImages: [
    { src: '/images/geral/pi-capivara.jpg', alt: 'Serra da Capivara' },
    { src: '/images/geral/pi1.jpg', alt: 'Pinturas rupestres da Serra da Capivara' },
    { src: '/images/geral/pi2.jpg', alt: 'Formações rochosas da Serra da Capivara' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Berço da Humanidade nas Américas',
      texto: 'O Parque Nacional Serra da Capivara é um dos sítios arqueológicos mais importantes do mundo e Patrimônio da Humanidade pela UNESCO desde 1991. Com mais de 1.300 sítios arqueológicos catalogados e pinturas rupestres de até 50 mil anos, o parque desafia a teoria de que os humanos chegaram às Américas há apenas 12 mil anos. As pesquisas da arqueóloga Niède Guidon revolucionaram a compreensão da pré-história americana.',
      imagem: '/images/geral/pi-capivara.jpg',
      alt: 'Pinturas rupestres da Serra da Capivara',
      lista: [
        'Localização: São Raimundo Nonato, a 530 km de Teresina - PI.',
        'Patrimônio: UNESCO desde 1991 — maior acervo rupestre das Américas.',
        'Pinturas: Mais de 50 mil anos de idade — as mais antigas das Américas.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Explorar na Serra da Capivara',
      texto: 'O parque oferece trilhas que levam a sítios arqueológicos com pinturas rupestres extraordinárias.',
      imagem: '/images/geral/pi1.jpg',
      alt: 'Trilha na Serra da Capivara',
      subsecoes: [
        {
          titulo: 'Sítio do Boqueirão da Pedra Furada',
          texto: 'O sítio mais famoso do parque, com pinturas rupestres de cenas de caça, dança e rituais. As datações indicam ocupação humana de até 50 mil anos — a mais antiga das Américas.',
        },
        {
          titulo: 'Trilhas Arqueológicas',
          texto: 'O parque oferece mais de 20 trilhas com diferentes níveis de dificuldade, todas guiadas por arqueólogos e guias credenciados. Cada trilha revela novos sítios e pinturas únicas.',
        },
        {
          titulo: 'Museu do Homem Americano',
          texto: 'Localizado em São Raimundo Nonato, o museu abriga fósseis, artefatos e réplicas das pinturas rupestres. Essencial para entender o contexto histórico das descobertas do parque.',
        },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Preparar',
      texto: 'A Serra da Capivara fica em São Raimundo Nonato, a 530 km de Teresina.',
      imagem: '/images/geral/pi-capivara.jpg',
      alt: 'Serra da Capivara',
      subsecoes: [
        {
          titulo: 'Como Chegar',
          texto: 'De Teresina, siga pela BR-020 e BR-324 até São Raimundo Nonato (aprox. 6h de carro). Há voos para o aeroporto de São Raimundo Nonato saindo de Teresina.',
        },
        {
          titulo: 'Informações Práticas',
          texto: 'O parque funciona de terça a domingo, das 8h às 17h. Ingresso: R$ 25 (adulto). Visitas apenas com guia credenciado. Leve água, protetor solar e calçado fechado.',
        },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Capivara', nota: 4.6, contato: '(89) 3582-1234', site: 'https://www.instagram.com/restaurantecapivara/' },
            { nome: 'Cantina do Sertão', nota: 4.5, contato: '(89) 3582-5678', site: 'https://www.instagram.com/cantinasertao.pi/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Serra da Capivara Hotel', nota: 4.7, contato: '(89) 3582-2222', site: 'https://www.serradacapivarahotel.com.br/' },
            { nome: 'Pousada dos Sonhos', nota: 4.5, contato: '(89) 3582-3333', site: 'https://www.instagram.com/pousadadossonhos.pi/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const SerradaCapivara = () => <CearaPontoBase config={config} />;
export default SerradaCapivara;
