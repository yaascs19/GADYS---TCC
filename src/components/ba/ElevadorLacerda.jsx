import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Elevador Lacerda',
  subtitulo: 'O ícone de Salvador que conecta dois mundos desde 1873.',
  carouselImages: ['/images/geral/pelou2.jpg', '/images/geral/pelo-xx.jpg', '/images/geral/pelo.jpg'],
  galeriaImages: [
    { src: '/images/geral/pelou2.jpg', alt: 'Elevador Lacerda' },
    { src: '/images/geral/pelo-xx.jpg', alt: 'Vista do Elevador' },
    { src: '/images/geral/pelo.jpg', alt: 'Salvador' },
    { src: '/images/geral/pelou1.jpg', alt: 'Baía de Todos os Santos' },
  ],
  tema: {
    bg: '#1a0a2e', texto: '#e8daef',
    acento: '#8e44ad', card: '#3a1a5c', tituloTexto: '#d2b4de',
    navTexto: '#bb8fce', navAtivo: '#fff', navBorda: '#8e44ad',
    footerBg: 'linear-gradient(135deg, #3a1a5c, #1a0a2e)', footerTexto: '#d2b4de',
  },
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'Um Ícone de Salvador',
      texto: 'O Elevador Lacerda é o cartão-postal mais famoso de Salvador. Inaugurado em 1873 pelo comerciante Antônio de Lacerda, conecta a Cidade Alta (Pelourinho) à Cidade Baixa (Comércio) em apenas 30 segundos, percorrendo 72 metros de altura. É um dos elevadores públicos mais famosos do mundo e símbolo da capital baiana.',
      imagem: '/images/geral/pelou2.jpg',
      alt: 'Elevador Lacerda',
      lista: [
        'Localização: Praça Tomé de Sousa, Centro de Salvador.',
        'Inauguração: 1873, reformado em 1930.',
        'Altura: 72 metros de desnível entre as cidades.',
        'Capacidade: 4 cabines, transportando 900 pessoas/hora.',
      ],
    },
    historia: {
      label: 'História',
      titulo: 'Da Roldana ao Elevador Elétrico',
      texto: 'A história do Elevador Lacerda reflete a própria história de Salvador. Originalmente movido a vapor, foi modernizado diversas vezes ao longo dos séculos, tornando-se elétrico em 1928 e ganhando sua fachada art déco característica na reforma de 1930.',
      imagem: '/images/geral/pelo-xx.jpg',
      alt: 'História do Elevador Lacerda',
      subsecoes: [
        { titulo: 'A Cidade Alta e a Cidade Baixa', texto: 'Salvador foi construída em dois níveis: a Cidade Alta, onde ficavam as igrejas, o governo e a elite, e a Cidade Baixa, o porto e o comércio. O Elevador Lacerda foi a solução para conectar esses dois mundos.' },
        { titulo: 'Vista da Baía de Todos os Santos', texto: 'Do topo do elevador, a vista da Baía de Todos os Santos é deslumbrante. É possível ver o Mercado Modelo, o Porto de Salvador e as ilhas ao fundo.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Informações Práticas',
      texto: 'O Elevador Lacerda funciona 24 horas por dia, 7 dias por semana, com uma tarifa simbólica. É o ponto de partida ideal para explorar tanto o Pelourinho quanto o Mercado Modelo.',
      imagem: '/images/geral/pelo.jpg',
      alt: 'Entorno do Elevador Lacerda',
      subsecoes: [
        { titulo: 'Horário e Tarifa', texto: 'Funciona 24h. Tarifa: R$ 0,15 (valor simbólico). Aceita dinheiro e cartão.' },
        { titulo: 'O Que Ver por Perto', texto: 'Mercado Modelo (artesanato baiano), Praça Cairu, Forte de São Marcelo (visível da Cidade Baixa) e o Pelourinho (Cidade Alta).' },
      ],
      recomendacoes: [
        {
          titulo: 'Pontos Próximos',
          itens: [
            { nome: 'Mercado Modelo', nota: 4.5, contato: '(71) 3241-0242', site: 'https://www.mercadomodelo.net' },
            { nome: 'Museu da Misericórdia', nota: 4.7, contato: '(71) 3322-7430', site: 'https://www.museudamisericordia.com.br' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const ElevadorLacerda = () => <CearaPontoBase config={config} />;
export default ElevadorLacerda;
