import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Morro de São Paulo',
  subtitulo: 'Ilha paradisíaca sem carros, com praias numeradas e pôr do sol inesquecível.',
  carouselImages: ['/images/geral/pelou1.jpg', '/images/geral/pelou2.jpg', '/images/natureza/noronha.jpeg'],
  galeriaImages: [
    { src: '/images/geral/pelou1.jpg', alt: 'Morro de São Paulo' },
    { src: '/images/geral/pelou2.jpg', alt: 'Praia do Morro' },
    { src: '/images/natureza/noronha.jpeg', alt: 'Mar cristalino' },
    { src: '/images/geral/pelo3.jpg', alt: 'Vila do Morro' },
  ],
  tema: {
    bg: '#0d2b3e', texto: '#d1f2eb',
    acento: '#1abc9c', card: '#1a4a3e', tituloTexto: '#a2d9ce',
    navTexto: '#76d7c4', navAtivo: '#fff', navBorda: '#1abc9c',
    footerBg: 'linear-gradient(135deg, #1a4a3e, #0d2b3e)', footerTexto: '#a2d9ce',
  },
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Paraíso Sem Carros',
      texto: 'Morro de São Paulo é uma ilha localizada no município de Cairu, no litoral sul da Bahia. Sem carros e sem motos, o transporte é feito a pé ou em carroças. Suas praias numeradas (Primeira, Segunda, Terceira e Quarta Praia) oferecem diferentes atmosferas, das mais agitadas às mais tranquilas e selvagens.',
      imagem: '/images/geral/pelou1.jpg',
      alt: 'Morro de São Paulo',
      lista: [
        'Localização: Ilha de Tinharé, litoral sul da Bahia.',
        'Acesso: Apenas por barco (2h de Salvador) ou avião.',
        'Destaque: Praias numeradas com diferentes perfis.',
        'Diferencial: Sem carros — transporte a pé ou em carroça.',
      ],
    },
    praias: {
      label: 'Praias',
      titulo: 'As Quatro Praias',
      texto: 'Cada praia do Morro tem sua personalidade. Da Primeira Praia, mais próxima da vila e agitada, à Quarta Praia, selvagem e quase deserta, há opções para todos os gostos.',
      imagem: '/images/geral/pelou2.jpg',
      alt: 'Praias do Morro de São Paulo',
      subsecoes: [
        { titulo: 'Segunda Praia', texto: 'A mais famosa e animada, com bares, restaurantes na areia e muita música. Ideal para quem quer agito e socialização.' },
        { titulo: 'Terceira Praia', texto: 'Mais tranquila que a Segunda, com piscinas naturais formadas na maré baixa. Ótima para famílias e casais.' },
        { titulo: 'Quarta Praia', texto: 'A mais selvagem e preservada. Quilômetros de areia branca quase deserta, com coqueiros e mar cristalino. Para quem busca paz total.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar ao Morro',
      texto: 'Chegar ao Morro de São Paulo faz parte da experiência. O trajeto de barco de Salvador, passando pela Baía de Todos os Santos, já é um espetáculo à parte.',
      imagem: '/images/natureza/noronha.jpeg',
      alt: 'Mar do Morro de São Paulo',
      subsecoes: [
        { titulo: 'De Salvador', texto: 'Catamarã saindo do Terminal Marítimo de Salvador (2h30). Também há lanchas rápidas (1h30) e voos de avião de pequeno porte.' },
        { titulo: 'Melhor Época', texto: 'De setembro a março para praias e festas. Evite o período de chuvas (abril a junho) quando o mar pode ficar agitado.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Farol', nota: 4.8, contato: '(75) 3652-1036', site: 'https://www.instagram.com/restaurantefarol/' },
            { nome: 'Pimenta Rosa', nota: 4.7, contato: '(75) 3652-1122', site: 'https://www.instagram.com/pimentarosa.msp/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const MorroSaoPaulo = () => <CearaPontoBase config={config} />;
export default MorroSaoPaulo;
