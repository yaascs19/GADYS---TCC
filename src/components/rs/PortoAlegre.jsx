import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Porto Alegre',
  subtitulo: 'A capital gaúcha — cultura, gastronomia e a energia do Beira-Rio.',
  carouselImages: ['/images/geral/rs-poa.jpg', '/images/geral/rs4.jpg'],
  galeriaImages: [
    { src: '/images/geral/rs-poa.jpg', alt: 'Porto Alegre' },
    { src: '/images/geral/rs4.jpg', alt: 'Mercado Público de Porto Alegre' },
    { src: '/images/geral/rs1.jpg', alt: 'Orla do Guaíba' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Capital do Sul',
      texto: 'Porto Alegre é uma das capitais mais dinâmicas do Brasil. Às margens do Lago Guaíba, a cidade combina uma rica herança cultural europeia com a energia vibrante de uma metrópole moderna. O Mercado Público, o Parque Farroupilha, o bairro Moinhos de Vento e a orla do Guaíba são alguns dos cartões-postais de uma cidade que orgulha seus habitantes.',
      imagem: '/images/geral/rs-poa.jpg',
      alt: 'Skyline de Porto Alegre ao entardecer',
      lista: [
        'Localização: Margem do Lago Guaíba, sul do Brasil.',
        'Destaque: Pôr do sol no Guaíba — considerado um dos mais belos do mundo.',
        'Cultura: Mercado Público, Usina do Gasômetro e Parque Farroupilha.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer em Porto Alegre',
      texto: 'Porto Alegre tem muito a oferecer para todos os perfis de viajante.',
      imagem: '/images/geral/rs4.jpg',
      alt: 'Mercado Público de Porto Alegre',
      subsecoes: [
        {
          titulo: 'Mercado Público',
          texto: 'O Mercado Público Central, inaugurado em 1869, é o coração gastronômico e cultural de Porto Alegre. Reúne bares, restaurantes, lojas de artesanato e produtos típicos gaúchos.',
        },
        {
          titulo: 'Pôr do Sol no Guaíba',
          texto: 'O pôr do sol no Lago Guaíba é um espetáculo diário que atrai moradores e turistas. O Cais Embarcadero e o Parque Harmonia são os melhores pontos para apreciar o fenômeno.',
        },
        {
          titulo: 'Usina do Gasômetro',
          texto: 'Antiga usina termelétrica transformada em centro cultural, a Usina do Gasômetro é um dos símbolos de Porto Alegre. Abriga exposições, shows e tem uma vista privilegiada do Guaíba.',
        },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Hospedar',
      texto: 'Porto Alegre possui o Aeroporto Internacional Salgado Filho, com voos de todo o Brasil e do exterior.',
      imagem: '/images/geral/rs-poa.jpg',
      alt: 'Porto Alegre',
      subsecoes: [
        {
          titulo: 'Como Chegar',
          texto: 'De avião pelo Aeroporto Internacional Salgado Filho. De carro pela BR-116 ou BR-290. De ônibus com linhas de todo o Brasil.',
        },
        {
          titulo: 'Melhor Época',
          texto: 'Setembro a novembro para clima ameno e florada. Dezembro a março para o verão. Junho a agosto para o inverno frio e a Semana Farroupilha (setembro).',
        },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Churrascaria Barranco', nota: 4.8, contato: '(51) 3222-5800', site: 'https://www.barranco.com.br/' },
            { nome: 'Restaurante Koh Pee Pee', nota: 4.7, contato: '(51) 3346-3522', site: 'https://www.kohpeepee.com.br/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Hotel Laghetto Stilo Bela Vista', nota: 4.7, contato: '(51) 3027-6000', site: 'https://www.laghetto.com.br/' },
            { nome: 'Sheraton Porto Alegre Hotel', nota: 4.8, contato: '(51) 3216-6100', site: 'https://www.marriott.com/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const PortoAlegre = () => <CearaPontoBase config={config} />;
export default PortoAlegre;
