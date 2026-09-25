import React from 'react';
import CearaPontoBase from './CearaPontoBase';

const config = {
  tema: { bg: '#1a3a1a', texto: '#e8f5e8' },
  titulo: 'Cataratas do Iguaçu',
  subtitulo: 'Uma das maiores maravilhas naturais do planeta.',
  carouselImages: ['/images/geral/cata-xx.jpg', '/images/geral/cata.jpg'],
  galeriaImages: [
    { src: '/images/geral/cata-xx.jpg', alt: 'Cataratas do Iguaçu' },
    { src: '/images/geral/cata.jpg', alt: 'Garganta do Diabo' },
    { src: '/images/natureza/cataratas.jpeg', alt: 'Parque Nacional do Iguaçu' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Maior Queda d\'Água do Mundo',
      texto: 'As Cataratas do Iguaçu são formadas por 275 quedas distribuídas em quase 3 km de extensão, na fronteira entre Brasil e Argentina. Patrimônio Natural da Humanidade pela UNESCO desde 1986 e eleita uma das Sete Maravilhas da Natureza em 2011, as cataratas impressionam pela grandiosidade e pela força da água que despenca de até 80 metros de altura.',
      imagem: '/images/geral/cata-xx.jpg',
      alt: 'Vista panorâmica das Cataratas do Iguaçu',
      lista: [
        'Localização: Foz do Iguaçu, Paraná — fronteira com a Argentina.',
        'Extensão: 275 quedas em quase 3 km, com até 80 m de altura.',
        'Patrimônio: UNESCO (1986) e Sete Maravilhas da Natureza (2011).',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Viva as Cataratas',
      texto: 'O Parque Nacional do Iguaçu oferece trilhas, passeios de barco e mirantes que permitem contemplar as cataratas de diferentes ângulos, cada um mais impressionante que o anterior.',
      imagem: '/images/geral/cata.jpg',
      alt: 'Garganta do Diabo',
      subsecoes: [
        { titulo: 'Garganta do Diabo', texto: 'O ponto mais impressionante das cataratas, onde a água despenca com força avassaladora. A passarela sobre a Garganta do Diabo é uma das experiências mais emocionantes do Brasil.' },
        { titulo: 'Macuco Safari', texto: 'Passeio de barco que leva os visitantes até a base das cataratas. A adrenalina de se aproximar das quedas de barco é inesquecível.' },
        { titulo: 'Parque das Aves', texto: 'Com mais de 1.400 aves de 150 espécies, o parque permite caminhar dentro de aviários com araras, tucanos e flamingos.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Dicas Práticas',
      texto: 'O Parque Nacional do Iguaçu fica a 20 km do centro de Foz do Iguaçu. O acesso interno é feito de ônibus elétrico.',
      imagem: '/images/geral/cata-xx.jpg',
      alt: 'Entrada do Parque Nacional do Iguaçu',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De Curitiba, há voos diários para Foz do Iguaçu (1h) ou ônibus (10h). Do aeroporto, táxis e ônibus chegam ao parque em 30 minutos.' },
        { titulo: 'Melhor Época', texto: 'O parque funciona o ano todo. De abril a setembro, o volume de água é maior. Chegue cedo para evitar filas.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Porto Canoas', nota: 4.6, contato: '(45) 3521-4400', site: 'https://www.cataratasdoiguacu.com.br/' },
            { nome: 'Bufalo Branco', nota: 4.7, contato: '(45) 3523-9744', site: 'https://www.bufalobranco.com.br/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Belmond Hotel das Cataratas', nota: 4.9, contato: '(45) 2102-7000', site: 'https://www.belmond.com/' },
            { nome: 'Wish Foz do Iguaçu', nota: 4.7, contato: '(45) 3521-7000', site: 'https://www.wishhotels.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const CataratasIguacu = () => <CearaPontoBase config={config} />;
export default CataratasIguacu;
