import React from 'react';
import CearaPontoBase from '../../CearaPontoBase';

const config = {
  titulo: 'Memorial Chico Mendes',
  subtitulo: 'A casa e a luta do maior símbolo da floresta amazônica.',
  carouselImages: ['/images/geral/ac-memorial.jpg', '/images/geral/ac-reserva.jpg'],
  galeriaImages: [
    { src: '/images/geral/ac-memorial.jpg', alt: 'Memorial Chico Mendes' },
    { src: '/images/geral/ac-reserva.jpg', alt: 'Reserva Extrativista' },
    { src: '/images/geral/amazonas1.avif', alt: 'Floresta Amazônica' },
    { src: '/images/geral/ac-chan1.jpg', alt: 'Floresta do Acre' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Casa de um Herói da Floresta',
      texto: 'O Memorial Chico Mendes, localizado em Xapuri, preserva a casa onde viveu e foi assassinado o seringueiro e ambientalista Francisco Alves Mendes Filho, o Chico Mendes, em 22 de dezembro de 1988. Símbolo mundial da luta pela preservação da Amazônia e pelos direitos dos povos da floresta, Chico Mendes é reconhecido internacionalmente como um dos maiores defensores do meio ambiente do século XX.',
      imagem: '/images/geral/ac-memorial.jpg',
      alt: 'Fachada do Memorial Chico Mendes',
      lista: [
        'Localização: Rua Euclides Fernandes, Xapuri - AC.',
        'A casa original foi preservada e transformada em museu.',
        'Patrimônio histórico e cultural do Estado do Acre.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Conhecer no Memorial',
      texto: 'O memorial oferece uma imersão na história de vida e luta de Chico Mendes, com acervo fotográfico, objetos pessoais e documentos históricos.',
      imagem: '/images/geral/ac-reserva.jpg',
      alt: 'Acervo do Memorial',
      subsecoes: [
        { titulo: 'Casa Original', texto: 'A casa onde Chico Mendes morou e foi assassinado está preservada com móveis e objetos da época, permitindo ao visitante conhecer de perto como vivia o seringueiro.' },
        { titulo: 'Acervo Histórico', texto: 'Fotografias, documentos, recortes de jornais e objetos pessoais contam a trajetória de Chico Mendes desde os seringais até o reconhecimento internacional.' },
        { titulo: 'Contexto da Luta', texto: 'Painéis explicativos mostram a história dos seringueiros, os empates (bloqueios pacíficos ao desmatamento) e o impacto global da morte de Chico Mendes para o movimento ambientalista.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Visitar',
      texto: 'Xapuri fica a cerca de 180 km de Rio Branco, com acesso pela BR-317.',
      imagem: '/images/geral/amazonas1.avif',
      alt: 'Estrada para Xapuri',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De Rio Branco, siga pela BR-317 em direção a Xapuri. O trajeto leva aproximadamente 2h30 de carro. Há também ônibus intermunicipais saindo da rodoviária de Rio Branco.' },
        { titulo: 'Horário de Funcionamento', texto: 'Segunda a sexta, das 8h às 12h e das 14h às 17h. Fins de semana mediante agendamento.' },
        { titulo: 'Entrada', texto: 'Gratuita. Visitas guiadas disponíveis com agendamento prévio na prefeitura de Xapuri.' },
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

const MemorialChicoMendes = () => <CearaPontoBase config={config} />;
export default MemorialChicoMendes;
