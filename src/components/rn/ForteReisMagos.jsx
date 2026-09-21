import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Forte dos Reis Magos',
  subtitulo: 'O símbolo de Natal — fortaleza portuguesa do século XVI na ponta do continente.',
  carouselImages: ['/images/geral/rn-forte.jpg', '/images/geral/rn2.jpg'],
  galeriaImages: [
    { src: '/images/geral/rn-forte.jpg', alt: 'Forte dos Reis Magos' },
    { src: '/images/geral/rn2.jpg', alt: 'Vista aérea do Forte' },
    { src: '/images/geral/rn3.jpg', alt: 'Interior do Forte dos Reis Magos' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Berço de Natal',
      texto: 'O Forte dos Reis Magos é o monumento histórico mais importante do Rio Grande do Norte e o símbolo da cidade de Natal. Construído pelos portugueses a partir de 1598, a fortaleza em formato de estrela foi erguida na ponta de uma língua de areia onde o Rio Potengi encontra o Oceano Atlântico. Foi ao redor do forte que nasceu a cidade de Natal, fundada em 25 de dezembro de 1599.',
      imagem: '/images/geral/rn-forte.jpg',
      alt: 'Forte dos Reis Magos visto do mar',
      lista: [
        'Localização: Ponta do Forte, Natal - RN.',
        'Construção: Iniciada em 1598 pelos portugueses.',
        'Formato: Estrela de cinco pontas — típico da arquitetura militar portuguesa.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Explorar no Forte',
      texto: 'O Forte dos Reis Magos oferece uma imersão na história colonial do Brasil e vistas panorâmicas deslumbrantes.',
      imagem: '/images/geral/rn2.jpg',
      alt: 'Vista do Forte dos Reis Magos',
      subsecoes: [
        {
          titulo: 'Visita Histórica',
          texto: 'O interior do forte preserva canhões originais, a capela de Nossa Senhora da Conceição e os alojamentos dos soldados. Guias credenciados contam a história da fortaleza e da fundação de Natal.',
        },
        {
          titulo: 'Vista Panorâmica',
          texto: 'Do alto das muralhas, a vista é deslumbrante: o Rio Potengi de um lado, o Oceano Atlântico do outro e a cidade de Natal ao fundo. Um dos melhores pontos fotográficos do RN.',
        },
        {
          titulo: 'Acesso pela Praia',
          texto: 'Na maré baixa, é possível caminhar pela faixa de areia que conecta o forte ao continente. A caminhada oferece vistas únicas da fortaleza e do encontro do rio com o mar.',
        },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Visitar',
      texto: 'O Forte dos Reis Magos fica na Praia do Forte, no extremo norte de Natal.',
      imagem: '/images/geral/rn-forte.jpg',
      alt: 'Forte dos Reis Magos',
      subsecoes: [
        {
          titulo: 'Como Chegar',
          texto: 'Localizado na Via Costeira, Praia do Forte, Natal. Acessível por ônibus (linha Praia do Forte), táxi ou aplicativos. Há estacionamento próximo.',
        },
        {
          titulo: 'Horários e Ingressos',
          texto: 'Funciona de terça a domingo, das 8h às 16h30. Ingresso: R$ 10 (adulto), R$ 5 (meia). Crianças até 5 anos e idosos acima de 60 anos: gratuito.',
        },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer por Perto',
          itens: [
            { nome: 'Restaurante Chaplin', nota: 4.7, contato: '(84) 3202-2090', site: 'https://www.instagram.com/chaplinrestaurante/' },
            { nome: 'Barraca do Caranguejo', nota: 4.5, contato: '(84) 99123-4567', site: 'https://www.instagram.com/barracacaranguejo/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Natal Mar Hotel', nota: 4.6, contato: '(84) 3202-4040', site: 'https://www.natalmarhotel.com.br/' },
            { nome: 'Serhs Natal Grand Hotel', nota: 4.7, contato: '(84) 3220-2000', site: 'https://www.serhshotels.com/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const ForteResMagos = () => <CearaPontoBase config={config} />;
export default ForteResMagos;
