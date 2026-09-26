import React from 'react';
import CearaPontoBase from '../../CearaPontoBase';

const config = {
  titulo: 'Museu Estrada de Ferro Madeira-Mamoré',
  subtitulo: 'A Ferrovia do Diabo — uma epopeia da engenharia na selva amazônica.',
  carouselImages: [
    '/images/geral/Museu Estrada de Ferro Madeira-Mamoré1.jpg',
  ],
  galeriaImages: [
    { src: '/images/geral/Museu Estrada de Ferro Madeira-Mamoré1.jpg', alt: 'Museu Estrada de Ferro Madeira-Mamoré' },
    { src: '/images/geral/Museu Estrada de Ferro Madeira-Mamoré2.avif', alt: 'Museu Estrada de Ferro Madeira-Mamoré' },
    { src: '/images/geral/Museu Estrada de Ferro Madeira-Mamoré3.jpg', alt: 'Museu Estrada de Ferro Madeira-Mamoré' },
    { src: '/images/geral/Museu Estrada de Ferro Madeira-Mamoré4.jpg', alt: 'Museu Estrada de Ferro Madeira-Mamoré' },
    { src: '/images/geral/lalal5.jpg', alt: 'Museu Estrada de Ferro Madeira-Mamoré' },
  ],
  tema: {
    bg: '#120a04',
    texto: '#f0e0cc',
    tituloTexto: '#d4956a',
    acento: '#8b4513',
    card: 'rgba(139,69,19,0.13)',
    navTexto: '#c4a882',
    navAtivo: '#d4956a',
    navBorda: '#8b4513',
    recCard: 'rgba(139,69,19,0.16)',
    recNome: '#d4956a',
    recContato: '#f0e0cc',
    recContatoBg: 'rgba(139,69,19,0.25)',
    footerBg: 'linear-gradient(135deg, #2c1a0a, #120a04)',
    footerTexto: '#c4a882',
  },
  voltarEstilo: {
    background: 'rgba(139,69,19,0.3)',
    borderColor: '#d4956a',
  },
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Ferrovia que Custou Vidas',
      texto: 'A Estrada de Ferro Madeira-Mamoré, apelidada de "Ferrovia do Diabo", foi construída entre 1907 e 1912 para escoar a borracha boliviana pelo Rio Madeira até o Oceano Atlântico. Com 364 km de extensão cortando a selva amazônica, a obra custou a vida de mais de 6.000 trabalhadores, vítimas de malária, febre amarela e acidentes. Hoje, o museu em Porto Velho preserva locomotivas originais e a memória desta epopeia humana.',
      imagem: '/images/geral/Museu Estrada de Ferro Madeira-Mamoré1.jpg',
      alt: 'Locomotiva histórica da Ferrovia Madeira-Mamoré',
      lista: [
        'Construção: Entre 1907 e 1912 na selva amazônica.',
        'Extensão: 364 km entre Porto Velho e Guajará-Mirim.',
        'Trabalhadores: Mais de 6.000 mortes durante a construção.',
        'Patrimônio: Tombado pelo IPHAN como patrimônio histórico nacional.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Uma Viagem no Tempo',
      texto: 'O Museu Ferroviário de Porto Velho oferece uma experiência única de imersão na história da Ferrovia do Diabo e da formação de Rondônia.',
      imagem: '/images/geral/Museu Estrada de Ferro Madeira-Mamoré3.jpg',
      alt: 'Interior do Museu Ferroviário',
      subsecoes: [
        {
          titulo: 'Acervo Ferroviário',
          texto: 'O museu preserva locomotivas originais a vapor, vagões, ferramentas e documentos históricos da ferrovia. A visita guiada conta a história dos trabalhadores de 50 nacionalidades que construíram a linha em condições extremas na selva.',
        },
        {
          titulo: 'Passeio de Trem Histórico',
          texto: 'Em datas especiais, é possível fazer um passeio de trem em locomotivas restauradas, percorrendo um trecho histórico da ferrovia às margens do Rio Madeira — uma experiência inesquecível.',
        },
        {
          titulo: 'Orla do Rio Madeira',
          texto: 'O museu fica às margens do Rio Madeira, na orla de Porto Velho. Após a visita, aproveite para passear pela orla e apreciar o pôr do sol sobre o maior afluente do Rio Amazonas.',
        },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Visitar o Museu',
      texto: 'O Museu Ferroviário está localizado na orla do Rio Madeira, no centro de Porto Velho.',
      imagem: '/images/geral/Museu Estrada de Ferro Madeira-Mamoré4.jpg',
      alt: 'Rio Madeira em Porto Velho',
      subsecoes: [
        {
          titulo: 'Horários e Ingressos',
          texto: 'O museu funciona de terça a domingo, das 8h às 17h. A entrada é gratuita. Visitas guiadas são realizadas mediante agendamento prévio pelo telefone da Prefeitura de Porto Velho.',
        },
        {
          titulo: 'Como Chegar',
          texto: 'Localizado na Av. Farquar, às margens do Rio Madeira, no centro de Porto Velho. Acessível de táxi, aplicativos de transporte ou a pé do centro da cidade.',
        },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Miako', nota: 4.7, contato: '(69) 3224-1234', site: 'https://www.instagram.com/' },
            { nome: 'Peixaria do Madeira', nota: 4.8, contato: '(69) 3225-5678', site: 'https://www.instagram.com/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Hotel Vila Rica Porto Velho', nota: 4.6, contato: '(69) 3216-3000', site: 'https://www.instagram.com/' },
            { nome: 'Pousada Rio Madeira', nota: 4.5, contato: '(69) 9999-1234', site: 'https://www.instagram.com/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const FerroviaMadeiraMamore = () => <CearaPontoBase config={config} />;
export default FerroviaMadeiraMamore;
