import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Palácio do Planalto',
  subtitulo: 'Sede do governo federal — elegância modernista no coração do poder.',
  carouselImages: ['/images/monumentos/pala.jpeg', '/images/monumentos/jus.jpeg', '/images/monumentos/zero.jpeg'],
  galeriaImages: [
    { src: '/images/monumentos/pala.jpeg', alt: 'Palácio do Planalto' },
    { src: '/images/monumentos/jus.jpeg', alt: 'Brasília' },
    { src: '/images/monumentos/zero.jpeg', alt: 'Praça dos Três Poderes' },
  ],
  tema: {
    bg: '#0d2b1a', texto: '#d5f5e3',
    acento: '#27ae60', card: '#1a4a2e', tituloTexto: '#a9dfbf',
    navTexto: '#7dcea0', navAtivo: '#fff', navBorda: '#27ae60',
    footerBg: 'linear-gradient(135deg, #1a4a2e, #0d2b1a)', footerTexto: '#a9dfbf',
  },
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Coração do Poder Executivo',
      texto: 'O Palácio do Planalto é a sede do governo federal brasileiro e o local de trabalho do Presidente da República. Projetado por Oscar Niemeyer e inaugurado em 1960, é famoso pelas suas colunas externas em curva — uma das marcas registradas do estilo de Niemeyer. A Praça dos Três Poderes, onde está localizado, reúne também o Congresso Nacional e o Supremo Tribunal Federal.',
      imagem: '/images/monumentos/pala.jpeg',
      alt: 'Palácio do Planalto',
      lista: [
        'Localização: Praça dos Três Poderes, Brasília - DF.',
        'Arquiteto: Oscar Niemeyer (inaugurado em 1960).',
        'Visitação: Domingos, das 9h30 às 14h (gratuita).',
        'Destaque: Colunas em curva e a Sala de Despacho do Presidente.',
      ],
    },
    arquitetura: {
      label: 'Arquitetura',
      titulo: 'As Colunas que Definem Brasília',
      texto: 'As colunas externas do Palácio do Planalto são um dos elementos mais reconhecíveis da arquitetura de Niemeyer. Sua forma curvilínea, que se afina no centro e se alarga nas extremidades, é uma solução estrutural e estética ao mesmo tempo.',
      imagem: '/images/monumentos/jus.jpeg',
      alt: 'Arquitetura do Planalto',
      subsecoes: [
        { titulo: 'A Rampa Presidencial', texto: 'A rampa de acesso ao Palácio é um elemento icônico, palco de momentos históricos da política brasileira. É por ela que o Presidente desfila em ocasiões especiais.' },
        { titulo: 'O Interior', texto: 'O interior do Palácio abriga obras de arte de artistas brasileiros, incluindo tapeçarias, esculturas e pinturas que documentam a história do país.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Visitar o Planalto',
      texto: 'O Palácio do Planalto abre para visitação pública aos domingos, quando não há expediente. É uma oportunidade única de conhecer o interior do centro do poder executivo brasileiro.',
      imagem: '/images/monumentos/zero.jpeg',
      alt: 'Praça dos Três Poderes',
      subsecoes: [
        { titulo: 'Visitação', texto: 'Domingos das 9h30 às 14h. Entrada gratuita. Apresente documento de identidade. Não é necessário agendamento.' },
        { titulo: 'Praça dos Três Poderes', texto: 'Ao redor do Planalto, a Praça dos Três Poderes tem o Museu da República, o Panteão da Pátria, a escultura "Os Guerreiros" e o Espaço Lúcio Costa.' },
      ],
      recomendacoes: [
        {
          titulo: 'Pontos na Praça dos Três Poderes',
          itens: [
            { nome: 'Museu da República', nota: 4.5, contato: '(61) 3411-6021', site: 'https://www.museudarepublica.museus.gov.br' },
            { nome: 'Panteão da Pátria', nota: 4.6, contato: '(61) 3325-6244', site: 'https://www.cultura.df.gov.br' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const PalacioPlanalto = () => <CearaPontoBase config={config} />;
export default PalacioPlanalto;
