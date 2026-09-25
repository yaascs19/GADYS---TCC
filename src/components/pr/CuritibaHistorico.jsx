import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Centro Histórico de Curitiba',
  subtitulo: 'A capital modelo em urbanismo e qualidade de vida.',
  carouselImages: ['/images/geral/cord.jpg', '/images/geral/pan.jpg'],
  galeriaImages: [
    { src: '/images/geral/cord.jpg', alt: 'Curitiba' },
    { src: '/images/geral/pan.jpg', alt: 'Jardim Botânico de Curitiba' },
    { src: '/images/geral/sc-natureza.jpg', alt: 'Parques de Curitiba' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Capital Mais Europeia do Brasil',
      texto: 'Curitiba é reconhecida mundialmente como referência em planejamento urbano, sustentabilidade e qualidade de vida. Fundada em 1693, a capital paranaense tem forte influência de imigrantes europeus — especialmente italianos, alemães, poloneses e ucranianos — que moldaram sua arquitetura, gastronomia e cultura. O centro histórico concentra museus, igrejas e o famoso Largo da Ordem.',
      imagem: '/images/geral/cord.jpg',
      alt: 'Centro histórico de Curitiba',
      lista: [
        'Localização: Capital do Paraná, altitude de 934 m.',
        'Destaque: Jardim Botânico, Museu Oscar Niemeyer e Largo da Ordem.',
        'Referência: Modelo mundial em transporte público e urbanismo.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Explore Curitiba',
      texto: 'Curitiba oferece uma combinação única de cultura, natureza e gastronomia. Seus parques, museus e o vibrante centro histórico garantem dias cheios de descobertas.',
      imagem: '/images/geral/pan.jpg',
      alt: 'Jardim Botânico de Curitiba',
      subsecoes: [
        { titulo: 'Jardim Botânico', texto: 'O cartão-postal de Curitiba, com sua estufa de ferro e vidro inspirada no Crystal Palace de Londres. Os jardins formais e as flores coloridas encantam visitantes o ano todo.' },
        { titulo: 'Museu Oscar Niemeyer (MON)', texto: 'Projetado pelo arquiteto Oscar Niemeyer, o museu tem formato de olho e é um dos mais importantes centros de arte do Brasil, com acervo de arte contemporânea e design.' },
        { titulo: 'Largo da Ordem', texto: 'O coração histórico de Curitiba, com igrejas do século XVIII, casarões coloniais e a famosa Feira do Largo da Ordem aos domingos, com artesanato e gastronomia.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Locomover',
      texto: 'Curitiba tem aeroporto internacional e excelente sistema de transporte público com os famosos ônibus biarticulados e as estações-tubo.',
      imagem: '/images/geral/cord.jpg',
      alt: 'Curitiba',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'O Aeroporto Internacional Afonso Pena fica a 18 km do centro. De São Paulo, há ônibus frequentes (6h) e voos de 1h.' },
        { titulo: 'Melhor Época', texto: 'Curitiba é agradável o ano todo. O inverno (junho-agosto) pode ser frio, com temperaturas abaixo de 10°C. O verão é ameno, em torno de 25°C.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Durski', nota: 4.8, contato: '(41) 3225-7893', site: 'https://www.durski.com.br/' },
            { nome: 'Famiglia Fadanelli', nota: 4.7, contato: '(41) 3362-1616', site: 'https://www.famigliafadanelli.com.br/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Hotel Bourbon Curitiba', nota: 4.7, contato: '(41) 3312-4000', site: 'https://www.bourbon.com.br/' },
            { nome: 'Slaviero Slim Curitiba', nota: 4.6, contato: '(41) 3017-7000', site: 'https://www.slavierohoteis.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const CuritibaHistorico = () => <CearaPontoBase config={config} />;
export default CuritibaHistorico;
