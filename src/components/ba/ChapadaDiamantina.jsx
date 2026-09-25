import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Chapada Diamantina',
  subtitulo: 'O coração selvagem da Bahia, com cachoeiras, grutas e trilhas inesquecíveis.',
  carouselImages: ['/images/natureza/chapada.jpeg', '/images/natureza/veadeiros.jpeg', '/images/natureza/lencois.jpeg'],
  galeriaImages: [
    { src: '/images/natureza/chapada.jpeg', alt: 'Chapada Diamantina' },
    { src: '/images/natureza/veadeiros.jpeg', alt: 'Cachoeira na Chapada' },
    { src: '/images/natureza/lencois.jpeg', alt: 'Lençóis' },
    { src: '/images/natureza/floresta.jpeg', alt: 'Floresta da Chapada' },
  ],
  tema: {
    bg: '#0d2b1a', texto: '#d4edda',
    acento: '#27ae60', card: '#1a4a2e', tituloTexto: '#a9dfbf',
    navTexto: '#7dcea0', navAtivo: '#fff', navBorda: '#27ae60',
    footerBg: 'linear-gradient(135deg, #1a4a2e, #0d2b1a)', footerTexto: '#a9dfbf',
  },
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Parque Nacional da Bahia',
      texto: 'A Chapada Diamantina é um Parque Nacional localizado no centro da Bahia, com 152 mil hectares de cerrado, caatinga e mata atlântica. Criada em 1985, a chapada abriga cachoeiras monumentais, grutas com formações cristalinas, picos com vistas panorâmicas e rios de águas cristalinas que formam piscinas naturais.',
      imagem: '/images/natureza/chapada.jpeg',
      alt: 'Vista da Chapada Diamantina',
      lista: [
        'Localização: Centro da Bahia, a 420 km de Salvador.',
        'Área: 152.000 hectares de Parque Nacional.',
        'Destaque: Cachoeira da Fumaça (340m), a mais alta do Brasil.',
        'Base: Cidade de Lençóis, porta de entrada principal.',
      ],
    },
    natureza: {
      label: 'Natureza',
      titulo: 'Maravilhas Naturais',
      texto: 'A Chapada Diamantina concentra algumas das paisagens mais espetaculares do Brasil. Cachoeiras que caem de centenas de metros, grutas com estalactites e estalagmites, rios de cores únicas e mirantes com vistas de 360 graus.',
      imagem: '/images/natureza/veadeiros.jpeg',
      alt: 'Cachoeira na Chapada',
      subsecoes: [
        { titulo: 'Cachoeira da Fumaça', texto: 'Com 340 metros de queda livre, é a cachoeira mais alta do Brasil. O visual de cima, pelo Morro do Pai Inácio, é um dos mais impressionantes do país.' },
        { titulo: 'Gruta da Lapa Doce', texto: 'Uma das maiores grutas do Brasil, com 23 km de extensão. Suas formações de calcário criam um cenário de outro mundo, com estalactites e estalagmites gigantescas.' },
        { titulo: 'Poço Encantado e Poço Azul', texto: 'Grutas com lagos subterrâneos de água cristalina azul-turquesa. A luz do sol penetra pela abertura e ilumina o fundo, criando um espetáculo visual único.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Explorar a Chapada',
      texto: 'A Chapada Diamantina exige planejamento. As trilhas variam de fáceis a muito difíceis, e guias locais são obrigatórios para algumas delas. A cidade de Lençóis é a base ideal para explorar o parque.',
      imagem: '/images/natureza/lencois.jpeg',
      alt: 'Lençóis - porta de entrada',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De Salvador, pegue um ônibus para Lençóis (aprox. 6h) ou voe para o Aeroporto de Lençóis. De carro, pela BR-242.' },
        { titulo: 'Melhor Época', texto: 'De junho a setembro, na estação seca, para trilhas e cachoeiras. De novembro a março, as cachoeiras ficam mais cheias mas as trilhas podem ser difíceis.' },
      ],
      recomendacoes: [
        {
          titulo: 'Agências de Turismo',
          itens: [
            { nome: 'H2O Expedições', nota: 4.9, contato: '(75) 3334-1133', site: 'https://www.h2oexpedicoes.com.br' },
            { nome: 'Venturas & Aventuras', nota: 4.8, contato: '(75) 3334-1099', site: 'https://www.venturaseaventuras.com.br' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const ChapadaDiamantina = () => <CearaPontoBase config={config} />;
export default ChapadaDiamantina;
