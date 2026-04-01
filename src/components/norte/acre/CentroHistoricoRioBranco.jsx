import React from 'react';
import CearaPontoBase from '../../CearaPontoBase';

const config = {
  titulo: 'Centro Histórico de Rio Branco',
  subtitulo: 'A memória viva da capital acreana.',
  carouselImages: ['/images/geral/amazonas2.jpg', '/images/geral/amazonas1.avif'],
  galeriaImages: [
    { src: '/images/geral/amazonas2.jpg', alt: 'Rio Branco centro' },
    { src: '/images/geral/amazonas1.avif', alt: 'Palácio Rio Branco' },
    { src: '/images/geral/oam.jpg', alt: 'Rio Branco histórico' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Alma Histórica de Rio Branco',
      texto: 'O Centro Histórico de Rio Branco concentra os principais monumentos e museus da capital acreana. O Palácio Rio Branco, o Museu da Borracha, a Casa dos Povos da Floresta e a Catedral Nossa Senhora de Nazaré contam a história de um estado que nasceu da luta dos seringueiros e da resistência dos povos indígenas.',
      imagem: '/images/geral/amazonas2.jpg',
      alt: 'Centro Histórico de Rio Branco',
      lista: [
        'Destaque: Palácio Rio Branco, sede do governo estadual.',
        'Museu: Museu da Borracha, com acervo sobre o ciclo da borracha.',
        'Cultura: Casa dos Povos da Floresta, com artesanato indígena.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Explorar no Centro',
      texto: 'O centro histórico de Rio Branco é um roteiro cultural completo, com monumentos, museus e gastronomia típica acreana.',
      imagem: '/images/geral/amazonas1.avif',
      alt: 'Museu da Borracha',
      subsecoes: [
        { titulo: 'Museu da Borracha', texto: 'O museu preserva a memória do ciclo da borracha, que transformou a Amazônia no final do século XIX. Com acervo de ferramentas, fotografias e documentos históricos, é uma visita obrigatória.' },
        { titulo: 'Palácio Rio Branco', texto: 'A sede do governo estadual é um dos edifícios mais imponentes de Rio Branco, com arquitetura neoclássica e jardins bem cuidados. Visitas guiadas são realizadas em dias úteis.' },
        { titulo: 'Calçadão da Gameleira', texto: 'O calçadão às margens do Rio Acre é o coração da vida social de Rio Branco, com feiras de artesanato, apresentações culturais e um pôr do sol deslumbrante sobre o rio.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Explorar Rio Branco',
      texto: 'Rio Branco é uma cidade compacta e de fácil locomoção, com o centro histórico acessível a pé ou de táxi.',
      imagem: '/images/geral/oam.jpg',
      alt: 'Rio Branco vista aérea',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'Rio Branco tem voos diretos de São Paulo, Brasília e Manaus. O Aeroporto Internacional Plácido de Castro fica a 22 km do centro. De ônibus, há linhas de várias capitais.' },
        { titulo: 'Melhor Época', texto: 'De junho a outubro, na estação seca, o clima é mais ameno e as estradas estão em melhores condições. De novembro a maio, as chuvas intensas podem dificultar o acesso a algumas atrações.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Casarão', nota: 4.7, contato: '(68) 3224-1234', site: 'https://www.instagram.com/' },
            { nome: 'Churrascaria do Acre', nota: 4.6, contato: '(68) 3225-5678', site: 'https://www.instagram.com/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Hotel Inácio Palace', nota: 4.6, contato: '(68) 3224-6300', site: 'https://www.instagram.com/' },
            { nome: 'Hotel Triângulo', nota: 4.5, contato: '(68) 3223-1000', site: 'https://www.instagram.com/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const CentroHistoricoRioBranco = () => <CearaPontoBase config={config} />;
export default CentroHistoricoRioBranco;
