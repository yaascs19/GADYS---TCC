import React from 'react';
import CearaPontoBase from '../../CearaPontoBase';

const config = {
  titulo: 'Reserva Extrativista Chico Mendes',
  subtitulo: 'Floresta viva, comunidades preservadas e o legado de um herói.',
  carouselImages: ['/images/geral/ac-reserva.jpg', '/images/geral/ac-chan1.jpg'],
  galeriaImages: [
    { src: '/images/geral/ac-reserva.jpg', alt: 'Reserva Extrativista Chico Mendes' },
    { src: '/images/geral/ac-chan1.jpg', alt: 'Floresta do Acre' },
    { src: '/images/geral/amazonas1.avif', alt: 'Floresta Amazônica' },
    { src: '/images/geral/ac-memorial.jpg', alt: 'Memorial Chico Mendes' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'Um Legado de Luta e Preservação',
      texto: 'A Reserva Extrativista Chico Mendes foi criada em 1990, dois anos após o assassinato do seringueiro e ambientalista Francisco Alves Mendes Filho. Com cerca de 970 mil hectares de floresta amazônica preservada no sudoeste do Acre, a reserva protege comunidades tradicionais de seringueiros e castanheiros que vivem em harmonia com a floresta, além de abrigar uma biodiversidade extraordinária.',
      imagem: '/images/geral/ac-reserva.jpg',
      alt: 'Vista aérea da Reserva Extrativista',
      lista: [
        'Área: aproximadamente 970 mil hectares de floresta amazônica.',
        'Localização: sudoeste do Acre, com sede em Xapuri.',
        'Criada em 1990 em homenagem a Chico Mendes.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer na Reserva',
      texto: 'A reserva oferece experiências únicas de ecoturismo e contato com a cultura dos povos da floresta.',
      imagem: '/images/geral/ac-chan1.jpg',
      alt: 'Trilha na floresta amazônica',
      subsecoes: [
        { titulo: 'Turismo de Base Comunitária', texto: 'Comunidades de seringueiros recebem visitantes para trilhas guiadas, extração de látex e vivência da cultura extrativista. Uma experiência autêntica e sustentável na Amazônia.' },
        { titulo: 'Observação da Fauna e Flora', texto: 'A reserva abriga onças-pintadas, antas, queixadas, araras, tucanos e centenas de espécies de árvores, incluindo seringueiras e castanheiras centenárias.' },
        { titulo: 'Trilhas Ecológicas', texto: 'Percursos guiados por dentro da floresta primária, com paradas em colocações de seringueiros e pontos de observação da biodiversidade amazônica.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Visitar',
      texto: 'O acesso principal é pela cidade de Xapuri, a cerca de 180 km de Rio Branco pela BR-317.',
      imagem: '/images/geral/amazonas1.avif',
      alt: 'Floresta amazônica na reserva',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De Rio Branco, siga pela BR-317 até Xapuri (aproximadamente 2h30). A partir de Xapuri, o acesso às comunidades é feito por estradas vicinais, preferencialmente com veículo 4x4.' },
        { titulo: 'Melhor Época', texto: 'De maio a outubro (período seco), quando as estradas estão mais transitáveis e as trilhas mais acessíveis.' },
        { titulo: 'Agendamento', texto: 'Visitas devem ser agendadas com antecedência pelo CNS (Conselho Nacional dos Seringueiros) ou pela prefeitura de Xapuri.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Ficar em Xapuri',
          itens: [
            { nome: 'Pousada Ecológica Seringal', nota: 4.5, contato: '(68) 3542-2000', site: 'https://www.instagram.com/' },
            { nome: 'Hotel Xapuri', nota: 4.3, contato: '(68) 3542-2100', site: 'https://www.instagram.com/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const ReservaExtrativistaChicoMendes = () => <CearaPontoBase config={config} />;
export default ReservaExtrativistaChicoMendes;
