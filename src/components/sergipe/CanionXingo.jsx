import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Cânion do Xingó',
  subtitulo: 'O Grand Canyon brasileiro — paredes de 150 metros e as águas esverdeadas do Velho Chico.',
  carouselImages: [
    '/images/geral/Cânion do Xingó1.jpg',
    '/images/geral/Cânion do Xingó2.webp',
  ],
  galeriaImages: [
    { src: '/images/geral/Cânion do Xingó1.jpg', alt: 'Cânion do Xingó' },
    { src: '/images/geral/Cânion do Xingó2.webp', alt: 'Cânion do Xingó — Rio São Francisco' },
    { src: '/images/geral/Cânion do Xingó3.jpg', alt: 'Paredes do Cânion do Xingó' },
    { src: '/images/geral/Cânion do Xingó4.avif', alt: 'Passeio de barco no Xingó' },
    { src: '/images/geral/Cânion do Xingó5.webp', alt: 'Cânion do Xingó ao entardecer' },
  ],
  tema: {
    bg: '#0e0a04',
    texto: '#f2e8d5',
    tituloTexto: '#c8843a',
    acento: '#a0521a',
    card: 'rgba(160,82,26,0.12)',
    navTexto: '#c4a07a',
    navAtivo: '#c8843a',
    navBorda: '#a0521a',
    recCard: 'rgba(160,82,26,0.16)',
    recNome: '#c8843a',
    recContato: '#f2e8d5',
    recContatoBg: 'rgba(160,82,26,0.25)',
    footerBg: 'linear-gradient(135deg, #2a1505, #0e0a04)',
    footerTexto: '#c4a07a',
  },
  voltarEstilo: {
    background: 'rgba(160,82,26,0.3)',
    borderColor: '#c8843a',
  },
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'Uma Fenda na Terra Nordestina',
      texto: 'O Cânion do Xingó é uma das formações geológicas mais impressionantes do Brasil. Esculpido pelo Rio São Francisco ao longo de milhões de anos, o cânion apresenta paredes rochosas de até 150 metros de altura em tons de ocre, vermelho e cinza que mudam de cor conforme a luz do dia. Localizado em Canindé de São Francisco, na divisa entre Sergipe e Alagoas, é considerado o "Grand Canyon brasileiro".',
      imagem: '/images/geral/Cânion do Xingó1.jpg',
      alt: 'Paredes do Cânion do Xingó',
      lista: [
        'Localização: Canindé de São Francisco, a 220 km de Aracaju - SE.',
        'Extensão: Aproximadamente 60 km de cânion navegável.',
        'Altura: Paredes de até 150 metros.',
        'Rio: São Francisco, o "Velho Chico" — o rio da integração nacional.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Navegue pelo Coração do Sertão',
      texto: 'O passeio de barco pelo cânion é a principal atração — ao longo do percurso, grutas, cachoeiras e o pôr do sol sobre as paredes de pedra criam um espetáculo inesquecível.',
      imagem: '/images/geral/Cânion do Xingó3.jpg',
      alt: 'Passeio de barco no Cânion do Xingó',
      subsecoes: [
        {
          titulo: 'Passeio de Barco',
          texto: 'O passeio dura de 3 a 4 horas e percorre os trechos mais impressionantes do cânion. É possível nadar nas águas esverdeadas e cristalinas do São Francisco em pontos específicos ao longo do trajeto.',
        },
        {
          titulo: 'Grutas e Cachoeiras',
          texto: 'Entre as paredes do cânion escondem-se grutas com formações rochosas únicas e cachoeiras que descem diretamente para o rio. O guia indica os melhores pontos para explorar.',
        },
        {
          titulo: 'Fauna e Pôr do Sol',
          texto: 'Garças, martins-pescadores e macacos habitam as margens do cânion. O pôr do sol tingindo as paredes de vermelho e laranja é considerado um dos mais belos espetáculos naturais do Nordeste.',
        },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar ao Xingó',
      texto: 'O Cânion do Xingó fica em Canindé de São Francisco, a 220 km de Aracaju pela BR-235.',
      imagem: '/images/geral/Cânion do Xingó4.avif',
      alt: 'Cânion do Xingó — vista aérea',
      subsecoes: [
        {
          titulo: 'Como Chegar',
          texto: 'De Aracaju, siga pela BR-235 até Canindé de São Francisco (aprox. 3h de carro). Os passeios de barco partem diariamente do Porto do Xingó às 8h e às 13h.',
        },
        {
          titulo: 'O Que Levar',
          texto: 'Protetor solar, chapéu, óculos de sol, roupa de banho e dinheiro em espécie para artesanato local. A temperatura da água fica entre 24°C e 28°C o ano todo.',
        },
      ],
      recomendacoes: [
        {
          titulo: 'Agências de Passeio',
          itens: [
            { nome: 'Xingó Turismo', nota: 4.8, contato: '(79) 3471-1234', site: 'https://www.xingo.com.br' },
            { nome: 'Cânion Aventura', nota: 4.7, contato: '(79) 99876-5432', site: 'https://www.instagram.com/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Hotel Xingó Resort', nota: 4.6, contato: '(79) 3471-0000', site: 'https://www.instagram.com/' },
            { nome: 'Pousada do Cânion', nota: 4.5, contato: '(79) 99123-4567', site: 'https://www.instagram.com/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const CanionXingo = () => <CearaPontoBase config={config} />;
export default CanionXingo;
