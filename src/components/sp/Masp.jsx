import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'MASP',
  subtitulo: 'O Museu de Arte de São Paulo — suspenso sobre a Avenida Paulista, um ícone da arquitetura e da arte.',
  carouselImages: [
    '/images/geral/masp1.jpg',
    '/images/geral/masp2.jpg',
  ],
  galeriaImages: [
    { src: '/images/geral/masp1.jpg', alt: 'MASP — fachada' },
    { src: '/images/geral/masp2.jpg', alt: 'MASP — Avenida Paulista' },
    { src: '/images/geral/masp3.jpg', alt: 'MASP — acervo' },
    { src: '/images/geral/masp4.webp', alt: 'MASP — interior' },
    { src: '/images/geral/masp5.webp', alt: 'MASP — exposição' },
  ],
  tema: {
    bg: '#0f0a0a',
    texto: '#f5eeee',
    tituloTexto: '#e05c5c',
    acento: '#c0392b',
    card: 'rgba(192,57,43,0.12)',
    navTexto: '#d4a0a0',
    navAtivo: '#e05c5c',
    navBorda: '#c0392b',
    recCard: 'rgba(192,57,43,0.15)',
    recNome: '#e05c5c',
    recContato: '#f5eeee',
    recContatoBg: 'rgba(192,57,43,0.25)',
    footerBg: 'linear-gradient(135deg, #2c0f0f, #0f0a0a)',
    footerTexto: '#d4a0a0',
  },
  voltarEstilo: {
    background: 'rgba(192,57,43,0.3)',
    borderColor: '#e05c5c',
  },
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'Um Museu Suspenso no Ar',
      texto: 'O Museu de Arte de São Paulo Assis Chateaubriand, o MASP, é um dos museus mais importantes da América Latina e um ícone da arquitetura mundial. Projetado pela arquiteta ítalo-brasileira Lina Bo Bardi e inaugurado em 1968, o edifício vermelho suspenso sobre a Avenida Paulista por quatro pilares é uma das imagens mais reconhecíveis do Brasil. Seu acervo reúne mais de 11 mil obras de arte de diferentes períodos e culturas.',
      imagem: '/images/geral/masp1.jpg',
      alt: 'Fachada do MASP na Avenida Paulista',
      lista: [
        'Localização: Avenida Paulista, 1578 — São Paulo - SP.',
        'Projeto: Lina Bo Bardi, inaugurado em 1968.',
        'Acervo: Mais de 11 mil obras de arte.',
        'Destaque: Único museu suspenso por pilares no mundo.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Arte e Arquitetura em Um Só Lugar',
      texto: 'O MASP oferece muito além do acervo permanente — exposições temporárias, eventos culturais e o vão livre que é palco da cidade.',
      imagem: '/images/geral/masp3.jpg',
      alt: 'Acervo do MASP',
      subsecoes: [
        {
          titulo: 'Acervo Permanente',
          texto: 'O acervo inclui obras de Raphael, Rembrandt, Van Gogh, Monet, Picasso, Portinari e Di Cavalcanti. Os cavaletes de cristal criados por Lina Bo Bardi permitem ver as obras dos dois lados — uma experiência única no mundo.',
        },
        {
          titulo: 'Exposições Temporárias',
          texto: 'O MASP recebe exposições temporárias de renome internacional ao longo do ano, com temáticas que vão de arte africana a design contemporâneo, sempre com curadoria de alto nível.',
        },
        {
          titulo: 'Vão Livre e Feira',
          texto: 'O vão livre embaixo do museu é um espaço público icônico de São Paulo. Aos domingos acontece a Feira de Antiguidades do MASP, uma das mais tradicionais da cidade, com peças raras e colecionáveis.',
        },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Visitar o MASP',
      texto: 'O MASP fica na Avenida Paulista, no coração de São Paulo, com fácil acesso de metrô.',
      imagem: '/images/geral/masp4.webp',
      alt: 'Interior do MASP',
      subsecoes: [
        {
          titulo: 'Horários e Ingressos',
          texto: 'Terça a domingo, das 10h às 18h (quinta até 20h). Ingresso: R$ 60 (inteira). Terças-feiras: entrada gratuita. Metrô: Estação Trianon-MASP (Linha 2-Verde).',
        },
        {
          titulo: 'Como Chegar',
          texto: 'Metrô Linha 2-Verde, estação Trianon-MASP. De ônibus pela Avenida Paulista. De carro com estacionamentos nas proximidades — o trânsito na Paulista é intenso.',
        },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante do MASP', nota: 4.5, contato: '(11) 3149-5959', site: 'https://masp.org.br/' },
            { nome: 'Figueira Rubaiyat', nota: 4.8, contato: '(11) 3063-3888', site: 'https://www.rubaiyat.com.br/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Unique Hotel', nota: 4.9, contato: '(11) 3055-4700', site: 'https://www.hotelunique.com.br/' },
            { nome: 'Tivoli Mofarrej São Paulo', nota: 4.8, contato: '(11) 3146-5900', site: 'https://www.tivolihotels.com/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const Masp = () => <CearaPontoBase config={config} />;
export default Masp;
