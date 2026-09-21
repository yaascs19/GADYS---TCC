import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Blumenau e Oktoberfest',
  subtitulo: 'A capital da cerveja artesanal e da cultura alemã no Brasil.',
  carouselImages: ['/images/geral/sc-blumenau.jpg', '/images/geral/sc4.jpg'],
  galeriaImages: [
    { src: '/images/geral/sc-blumenau.jpg', alt: 'Blumenau' },
    { src: '/images/geral/sc4.jpg', alt: 'Oktoberfest Blumenau' },
    { src: '/images/geral/sc3.jpg', alt: 'Centro histórico de Blumenau' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Alemanha Brasileira',
      texto: 'Blumenau foi fundada em 1850 pelo médico alemão Hermann Bruno Otto Blumenau e mantém viva a herança germânica em sua arquitetura enxaimel, gastronomia, cerveja artesanal e, claro, na famosa Oktoberfest — a segunda maior festa alemã do mundo, perdendo apenas para a original em Munique. A cidade é um destino único no Brasil.',
      imagem: '/images/geral/sc-blumenau.jpg',
      alt: 'Arquitetura enxaimel de Blumenau',
      lista: [
        'Localização: Vale do Itajaí, a 140 km de Florianópolis.',
        'Destaque: Oktoberfest — 2ª maior festa alemã do mundo.',
        'Cultura: Arquitetura enxaimel, cerveja artesanal e gastronomia alemã.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer em Blumenau',
      texto: 'Blumenau é muito mais do que a Oktoberfest — a cidade oferece cultura, gastronomia e natureza o ano todo.',
      imagem: '/images/geral/sc4.jpg',
      alt: 'Oktoberfest em Blumenau',
      subsecoes: [
        { titulo: 'Oktoberfest', texto: 'Realizada em outubro, a festa atrai mais de 600 mil visitantes. Cerveja artesanal, música ao vivo, danças típicas e gastronomia alemã em um ambiente festivo único.' },
        { titulo: 'Rota do Enxaimel', texto: 'Passeio pelas construções históricas de estilo enxaimel (Fachwerk), típico da arquitetura alemã, espalhadas pela cidade e região.' },
        { titulo: 'Museu da Cerveja', texto: 'Instalado em um casarão histórico, o museu conta a história da cerveja e da imigração alemã em Blumenau, com degustações incluídas.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Hospedar',
      texto: 'Blumenau fica no Vale do Itajaí, a 140 km de Florianópolis e 90 km de Joinville.',
      imagem: '/images/geral/sc-blumenau.jpg',
      alt: 'Blumenau',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De carro pela BR-470. O aeroporto mais próximo é o de Navegantes (50 km). De ônibus com linhas de todo o estado.' },
        { titulo: 'Melhor Época', texto: 'Outubro para a Oktoberfest. O ano todo para turismo cultural. Evite janeiro e fevereiro, quando as chuvas são mais intensas.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Frohsinn Restaurante', nota: 4.8, contato: '(47) 3322-1234', site: 'https://www.frohsinn.com.br/' },
            { nome: 'Moser Restaurante', nota: 4.7, contato: '(47) 3322-5678', site: 'https://www.instagram.com/moserrestaurante/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Plaza Blumenau Hotel', nota: 4.6, contato: '(47) 3231-7000', site: 'https://www.plazablumenau.com.br/' },
            { nome: 'Himmelblau Palace Hotel', nota: 4.7, contato: '(47) 3326-1000', site: 'https://www.himmelblau.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const Blumenau = () => <CearaPontoBase config={config} />;
export default Blumenau;
