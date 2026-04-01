import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Beach Park',
  subtitulo: 'O maior parque aquático da América Latina.',
  carouselImages: ['/images/geral/ceara.webp', '/images/geral/Ceara1.webp'],
  galeriaImages: [
    { src: '/images/geral/ceara.webp', alt: 'Beach Park' },
    { src: '/images/geral/Ceara1.webp', alt: 'Beach Park toboágua' },
    { src: '/images/geral/Ceara2.webp', alt: 'Beach Park piscinas' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'Diversão Sem Limites no Ceará',
      texto: 'O Beach Park é o maior parque aquático da América Latina e um dos maiores do mundo. Localizado em Aquiraz, a apenas 27 km de Fortaleza, o complexo reúne toboáguas radicais, piscinas de ondas, atrações para crianças e uma praia privativa com estrutura completa. É o destino perfeito para famílias que buscam adrenalina e diversão.',
      imagem: '/images/geral/ceara.webp',
      alt: 'Vista aérea do Beach Park',
      lista: [
        'Localização: Aquiraz, a 27 km de Fortaleza.',
        'Área: Mais de 70.000 m² de atrações aquáticas.',
        'Destaque: Insano, o toboágua mais alto do mundo por anos.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Adrenalina e Diversão para Todos',
      texto: 'Com mais de 20 atrações aquáticas, o Beach Park tem opções para todas as idades e perfis de visitantes.',
      imagem: '/images/geral/Ceara1.webp',
      alt: 'Toboágua do Beach Park',
      subsecoes: [
        { titulo: 'Insano e Atrações Radicais', texto: 'O Insano, com seus 41 metros de altura, foi por anos o toboágua mais alto do mundo. Para os amantes de adrenalina, há também o Boomerang, o Aqualoop e o Master Blaster.' },
        { titulo: 'Área Infantil', texto: 'O Acqua Kids é um paraíso para as crianças, com toboáguas menores, piscinas rasas e brinquedos aquáticos seguros e supervisionados.' },
        { titulo: 'Praia Privativa', texto: 'O complexo conta com uma praia privativa com cadeiras, guarda-sóis e serviço de praia completo, perfeita para relaxar após as atrações.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Planeje Seu Dia no Beach Park',
      texto: 'Para aproveitar ao máximo, chegue cedo e planeje as atrações com antecedência.',
      imagem: '/images/geral/Ceara2.webp',
      alt: 'Entrada do Beach Park',
      subsecoes: [
        { titulo: 'Ingressos e Horários', texto: 'O parque funciona de quarta a domingo e feriados, das 11h às 17h. Ingressos a partir de R$ 180 (adulto) e R$ 90 (meia). Compre online com antecedência para garantir desconto.' },
        { titulo: 'Como Chegar', texto: 'De Fortaleza, há ônibus direto saindo do Terminal Papicu. De carro, siga pela CE-040 em direção a Aquiraz. O parque oferece estacionamento amplo.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer no Complexo',
          itens: [
            { nome: 'Beach Park Suites Resort', nota: 4.7, contato: '(85) 4012-3000', site: 'https://www.beachpark.com.br/' },
            { nome: 'Restaurante Âncora', nota: 4.5, contato: '(85) 4012-3100', site: 'https://www.beachpark.com.br/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Beach Park Suites Resort', nota: 4.8, contato: '(85) 4012-3000', site: 'https://www.beachpark.com.br/' },
            { nome: 'Beach Park Oceani Hotel', nota: 4.7, contato: '(85) 4012-3200', site: 'https://www.beachpark.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const BeachPark = () => <CearaPontoBase config={config} />;
export default BeachPark;
