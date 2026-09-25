import React from 'react';
import CearaPontoBase from './CearaPontoBase';

const config = {
  tema: { bg: '#2a3a1a', texto: '#f0f5e8', card: '#3a5a20', acento: '#8bc34a', recCard: '#3a5a20', recNome: '#f0f5e8', recContato: '#f0f5e8', recContatoBg: '#1a2a0a', footerBg: 'linear-gradient(135deg, #3a5a20, #1a2a0a)', footerTexto: '#f0f5e8' },
  titulo: 'Pantanal',
  subtitulo: 'Maior planície inundável do planeta e santuário de biodiversidade.',
  carouselImages: ['/images/geral/pant-xx.webp', '/images/geral/pan1.webp'],
  galeriaImages: [
    { src: '/images/geral/pant-xx.webp', alt: 'Pantanal' },
    { src: '/images/geral/pan2.png', alt: 'Pantanal' },
    { src: '/images/geral/pan3.webp', alt: 'Pantanal' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Maior Santuário de Vida Selvagem do Mundo',
      texto: 'O Pantanal é a maior planície inundável do planeta, com cerca de 150 mil km² distribuídos entre Mato Grosso do Sul, Mato Grosso e países vizinhos. Reconhecido como Patrimônio Natural da Humanidade pela UNESCO e Reserva da Biosfera, o Pantanal abriga a maior concentração de onças-pintadas do mundo e uma biodiversidade impressionante com mais de 650 espécies de aves.',
      imagem: '/images/geral/pant-xx.webp',
      alt: 'Pantanal',
      lista: [
        'Localização: Mato Grosso do Sul e Mato Grosso.',
        'Área: Cerca de 150 mil km² — maior planície inundável do planeta.',
        'Fauna: Maior concentração de onças-pintadas do mundo.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Viva o Pantanal',
      texto: 'O Pantanal oferece experiências únicas de ecoturismo, com safáris fotográficos, passeios de barco, pesca esportiva e observação de fauna em seu habitat natural.',
      imagem: '/images/geral/pan3.webp',
      alt: 'Safari no Pantanal',
      subsecoes: [
        { titulo: 'Safári Fotográfico', texto: 'O Pantanal é o melhor lugar do mundo para fotografar onças-pintadas em liberdade. Guias especializados levam os visitantes pelos melhores pontos de observação.' },
        { titulo: 'Observação de Aves', texto: 'Com mais de 650 espécies de aves, incluindo o tuiuiú (símbolo do Pantanal), araras-azuis e garças, o Pantanal é um paraíso para observadores de pássaros.' },
        { titulo: 'Passeios de Barco', texto: 'Navegar pelos rios e corixos do Pantanal revela um mundo de jacarés, capivaras, lontras e botos. Os passeios ao entardecer são especialmente mágicos.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Dicas',
      texto: 'O Pantanal é acessado principalmente por Campo Grande (MS) ou Cuiabá (MT). A Transpantaneira é a estrada mais famosa para explorar o bioma.',
      imagem: '/images/geral/pan2.png',
      alt: 'Transpantaneira',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De Campo Grande, há voos de São Paulo (1h30) e outras capitais. De lá, agências de ecoturismo organizam transfers e pacotes para as fazendas-hotel.' },
        { titulo: 'Melhor Época', texto: 'De julho a outubro (seca), quando os animais se concentram nas margens dos rios. De novembro a março (cheia), a paisagem fica inundada e ainda mais exuberante.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Caiman Ecological Refuge', nota: 4.9, contato: '(67) 3242-1450', site: 'https://www.caiman.com.br/' },
            { nome: 'Pousada Aguapé', nota: 4.8, contato: '(67) 3686-1234', site: 'https://www.aguape.com.br/' },
          ],
        },
        {
          titulo: 'Agências de Ecoturismo',
          itens: [
            { nome: 'Pantanal Trackers', nota: 4.9, contato: '(67) 99999-0000', site: 'https://www.pantanaltrackers.com/' },
            { nome: 'Impacto Ecoturismo', nota: 4.8, contato: '(67) 3321-0000', site: '#' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const Pantanal = () => <CearaPontoBase config={config} />;
export default Pantanal;
