import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Farol do Cabo Branco',
  subtitulo: 'O ponto mais oriental das Américas.',
  carouselImages: ['/images/geral/rn-forte.jpg', '/images/geral/rn-natureza.jpg'],
  galeriaImages: [
    { src: '/images/geral/rn-forte.jpg', alt: 'Farol do Cabo Branco' },
    { src: '/images/geral/rn-natureza.jpg', alt: 'Litoral de João Pessoa' },
    { src: '/images/geral/praiaEx.jpg', alt: 'Vista do Cabo Branco' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Fim do Mundo e o Começo do Dia',
      texto: 'O Farol do Cabo Branco, em João Pessoa, marca o ponto mais oriental das Américas — o lugar onde o sol nasce primeiro em todo o continente. Construído em 1886 sobre falésias de 30 metros de altura, o farol oferece uma vista panorâmica deslumbrante do oceano Atlântico e é um dos cartões-postais mais icônicos da Paraíba.',
      imagem: '/images/geral/rn-forte.jpg',
      alt: 'Farol do Cabo Branco',
      lista: [
        'Localização: Ponta do Cabo Branco, João Pessoa - PB.',
        'Curiosidade: Primeiro lugar das Américas a ver o nascer do sol.',
        'Altitude: Farol sobre falésias de 30 metros de altura.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Viva o Cabo Branco',
      texto: 'O Parque do Cabo Branco oferece trilhas, mirantes e a experiência única de assistir ao nascer do sol no ponto mais oriental das Américas.',
      imagem: '/images/geral/rn-natureza.jpg',
      alt: 'Nascer do sol no Cabo Branco',
      subsecoes: [
        { titulo: 'Nascer do Sol', texto: 'Chegar ao Cabo Branco antes do amanhecer para assistir ao primeiro nascer do sol das Américas é uma experiência inesquecível. O espetáculo de cores no horizonte é de tirar o fôlego.' },
        { titulo: 'Parque do Cabo Branco', texto: 'O parque ao redor do farol tem trilhas ecológicas, mirantes e uma área de preservação da Mata Atlântica. Ideal para caminhadas e observação de pássaros.' },
        { titulo: 'Praia do Cabo Branco', texto: 'Ao pé das falésias, a praia é tranquila e pouco frequentada. As falésias brancas que dão nome ao local criam um cenário único.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Dicas',
      texto: 'O Farol do Cabo Branco fica a 7 km do centro de João Pessoa, facilmente acessível de táxi, ônibus ou aplicativo.',
      imagem: '/images/geral/rn-forte.jpg',
      alt: 'Farol do Cabo Branco',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De João Pessoa, siga pela Av. Cabo Branco até o fim. De ônibus, a linha "Cabo Branco" sai do centro. De carro, há estacionamento próximo.' },
        { titulo: 'Melhor Época', texto: 'O local é bonito o ano todo. Para o nascer do sol, chegue antes das 5h. De setembro a março, o céu costuma estar mais limpo.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Mangai João Pessoa', nota: 4.8, contato: '(83) 3226-1615', site: 'https://www.mangai.com.br/' },
            { nome: 'Tábua de Carne', nota: 4.7, contato: '(83) 3247-6060', site: '#' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Tropical Tambaú Hotel', nota: 4.6, contato: '(83) 2107-1900', site: 'https://www.tropicaltambau.com.br/' },
            { nome: 'Hotel Globo', nota: 4.5, contato: '(83) 3241-2020', site: '#' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const CaboBranco = () => <CearaPontoBase config={config} />;
export default CaboBranco;
