import React from 'react';
import CearaPontoBase from '../../CearaPontoBase';

const config = {
  titulo: 'Ferrovia Madeira-Mamoré',
  subtitulo: 'A Ferrovia do Diabo — uma epopeia da engenharia na selva.',
  carouselImages: ['/images/geral/amazonas2.jpg', '/images/geral/oam.jpg'],
  galeriaImages: [
    { src: '/images/geral/amazonas2.jpg', alt: 'Locomotiva da Ferrovia Madeira-Mamoré' },
    { src: '/images/geral/oam.jpg', alt: 'Museu da Ferrovia' },
    { src: '/images/geral/amazonas3.1.jpg', alt: 'Trilhos históricos' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Ferrovia que Custou Vidas',
      texto: 'A Estrada de Ferro Madeira-Mamoré, conhecida como "Ferrovia do Diabo", foi construída entre 1907 e 1912 para escoar a borracha boliviana pelo Rio Madeira. Com 364 km de extensão, a ferrovia custou a vida de milhares de trabalhadores, vítimas de malária, febre amarela e acidentes. Hoje, o Museu Ferroviário de Porto Velho preserva locomotivas e a memória desta epopeia.',
      imagem: '/images/geral/amazonas2.jpg',
      alt: 'Locomotiva histórica da Ferrovia Madeira-Mamoré',
      lista: [
        'Construção: Entre 1907 e 1912.',
        'Extensão: 364 km entre Porto Velho e Guajará-Mirim.',
        'Trabalhadores: Mais de 6.000 mortes durante a construção.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Uma Viagem no Tempo',
      texto: 'O Museu Ferroviário de Porto Velho oferece uma experiência única de imersão na história da Ferrovia do Diabo.',
      imagem: '/images/geral/oam.jpg',
      alt: 'Interior do Museu Ferroviário',
      subsecoes: [
        { titulo: 'Museu Ferroviário', texto: 'O museu preserva locomotivas originais, vagões, ferramentas e documentos históricos da ferrovia. A visita guiada conta a história dos trabalhadores que construíram a linha em condições extremas.' },
        { titulo: 'Passeio de Trem', texto: 'Em datas especiais, é possível fazer um passeio de trem em locomotivas restauradas, percorrendo um trecho histórico da ferrovia às margens do Rio Madeira.' },
        { titulo: 'Orla do Rio Madeira', texto: 'O museu fica às margens do Rio Madeira, na orla de Porto Velho. Após a visita, aproveite para passear pela orla e apreciar o pôr do sol sobre o maior afluente do Rio Amazonas.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Visitar o Museu',
      texto: 'O Museu Ferroviário de Porto Velho está localizado na orla do Rio Madeira, no centro da capital rondoniense.',
      imagem: '/images/geral/amazonas3.1.jpg',
      alt: 'Entrada do Museu Ferroviário',
      subsecoes: [
        { titulo: 'Horários e Ingressos', texto: 'O museu funciona de terça a domingo, das 8h às 17h. A entrada é gratuita. Visitas guiadas são realizadas mediante agendamento prévio.' },
        { titulo: 'Como Chegar', texto: 'Localizado na Av. Farquar, às margens do Rio Madeira, no centro de Porto Velho. Acessível de táxi, aplicativos de transporte ou a pé do centro da cidade.' },
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
