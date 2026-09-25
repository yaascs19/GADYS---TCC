import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Pedra do Castelo',
  subtitulo: 'Uma fortaleza natural de pedra no sertão piauiense — escalada, aventura e vistas de tirar o fôlego.',
  carouselImages: ['/images/geral/pi-pedracastelo.jpg', '/images/geral/pi2.jpg'],
  galeriaImages: [
    { src: '/images/geral/pi-pedracastelo.jpg', alt: 'Pedra do Castelo' },
    { src: '/images/geral/pi2.jpg', alt: 'Vista da Pedra do Castelo' },
    { src: '/images/geral/pi3.jpg', alt: 'Escalada na Pedra do Castelo' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Fortaleza Natural do Sertão',
      texto: 'A Pedra do Castelo é uma das formações rochosas mais impressionantes do Piauí. Localizada no município de Queimada Nova, a pedra se ergue imponente no meio do sertão, com paredes verticais que chegam a centenas de metros de altura. O local é um dos destinos de escalada mais desafiadores do Nordeste e oferece vistas panorâmicas deslumbrantes do sertão piauiense.',
      imagem: '/images/geral/pi-pedracastelo.jpg',
      alt: 'Pedra do Castelo no sertão piauiense',
      lista: [
        'Localização: Queimada Nova, a 450 km de Teresina - PI.',
        'Destaque: Escalada em paredes verticais e vistas panorâmicas do sertão.',
        'Aventura: Um dos destinos de escalada mais desafiadores do Nordeste.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer na Pedra do Castelo',
      texto: 'A Pedra do Castelo é o destino ideal para aventureiros e amantes da natureza selvagem.',
      imagem: '/images/geral/pi2.jpg',
      alt: 'Vista da Pedra do Castelo',
      subsecoes: [
        {
          titulo: 'Escalada',
          texto: 'As paredes verticais da Pedra do Castelo oferecem rotas de escalada para todos os níveis. Guias locais credenciados acompanham as ascensões e garantem a segurança dos visitantes.',
        },
        {
          titulo: 'Trilha ao Cume',
          texto: 'A trilha até o cume da Pedra do Castelo oferece vistas panorâmicas do sertão piauiense que se estendem por dezenas de quilômetros. O pôr do sol visto do alto é inesquecível.',
        },
        {
          titulo: 'Observação de Fauna',
          texto: 'A região abriga uma fauna típica da caatinga — preás, tatus, cobras e uma grande variedade de aves. Os falcões que habitam as fendas da pedra são a atração mais procurada.',
        },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Preparar',
      texto: 'A Pedra do Castelo fica em Queimada Nova, a 450 km de Teresina.',
      imagem: '/images/geral/pi-pedracastelo.jpg',
      alt: 'Pedra do Castelo',
      subsecoes: [
        {
          titulo: 'Como Chegar',
          texto: 'De Teresina, siga pela BR-020 até Picos, depois pela BR-407 até Queimada Nova (aprox. 5h). Recomenda-se veículo 4x4 para os últimos quilômetros.',
        },
        {
          titulo: 'Informações Práticas',
          texto: 'Não há infraestrutura turística no local. Leve água, alimentos, protetor solar e equipamento de escalada. Contrate guias locais em Queimada Nova.',
        },
      ],
      recomendacoes: [
        {
          titulo: 'Guias Locais',
          itens: [
            { nome: 'Guia Sertão Aventura', nota: 4.8, contato: '(89) 99123-1234', site: 'https://www.instagram.com/sertaoaventura.pi/' },
            { nome: 'Pedra do Castelo Turismo', nota: 4.7, contato: '(89) 99876-5678', site: 'https://www.instagram.com/pedracasteloturismo/' },
          ],
        },
        {
          titulo: 'Onde Ficar (Picos - PI)',
          itens: [
            { nome: 'Hotel Picos Palace', nota: 4.5, contato: '(89) 3422-1234', site: 'https://www.hotelpicospalace.com.br/' },
            { nome: 'Pousada do Sertão', nota: 4.4, contato: '(89) 3422-5678', site: 'https://www.instagram.com/pousadadosertao.pi/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const PedradoCastelo = () => <CearaPontoBase config={config} />;
export default PedradoCastelo;
