import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Foz do Iguaçu',
  subtitulo: 'A cidade da tríplice fronteira, porta das Cataratas.',
  carouselImages: ['/images/geral/cata.jpg', '/images/geral/cata-xx.jpg'],
  galeriaImages: [
    { src: '/images/geral/cata.jpg', alt: 'Foz do Iguaçu' },
    { src: '/images/geral/cata-xx.jpg', alt: 'Cataratas vistas de Foz' },
    { src: '/images/geral/pant-xx.webp', alt: 'Parque das Aves' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'Onde Três Países se Encontram',
      texto: 'Foz do Iguaçu é uma cidade única no mundo: fica na tríplice fronteira entre Brasil, Argentina e Paraguai, onde os rios Iguaçu e Paraná se encontram. Além de ser a porta de entrada para as Cataratas do Iguaçu, a cidade oferece o Parque das Aves, a Usina Hidrelétrica de Itaipu e uma rica diversidade cultural com mais de 80 nacionalidades convivendo.',
      imagem: '/images/geral/cata.jpg',
      alt: 'Foz do Iguaçu',
      lista: [
        'Localização: Extremo oeste do Paraná, tríplice fronteira.',
        'Destaque: Cataratas do Iguaçu, Parque das Aves e Itaipu.',
        'Diversidade: Mais de 80 nacionalidades vivem na cidade.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer em Foz',
      texto: 'Além das Cataratas, Foz do Iguaçu oferece atrações para todos os gostos, da natureza à tecnologia, passando pela gastronomia internacional.',
      imagem: '/images/geral/cata-xx.jpg',
      alt: 'Cataratas do Iguaçu',
      subsecoes: [
        { titulo: 'Parque das Aves', texto: 'Com mais de 1.400 aves de 150 espécies, o parque permite caminhar dentro de aviários com araras, tucanos e flamingos. Um dos melhores parques de aves do mundo.' },
        { titulo: 'Itaipu Binacional', texto: 'A maior usina hidrelétrica do mundo em geração de energia. O tour panorâmico e o tour especial permitem conhecer a estrutura monumental da barragem.' },
        { titulo: 'Marco das Três Fronteiras', texto: 'Ponto onde os rios Iguaçu e Paraná se encontram, marcando a fronteira entre Brasil, Argentina e Paraguai. À noite, os obeliscos são iluminados com as cores dos três países.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Organizar',
      texto: 'Foz do Iguaçu tem aeroporto internacional com voos diretos das principais capitais brasileiras. A cidade tem boa infraestrutura hoteleira e gastronômica.',
      imagem: '/images/geral/cata.jpg',
      alt: 'Foz do Iguaçu',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'Voos diretos de São Paulo (1h30), Rio de Janeiro (2h) e Curitiba (1h). De carro de Curitiba, são 639 km pela BR-277 (6h).' },
        { titulo: 'Melhor Época', texto: 'O parque funciona o ano todo. De abril a setembro, o volume das cataratas é maior. Dezembro e janeiro são alta temporada.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Bufalo Branco', nota: 4.7, contato: '(45) 3523-9744', site: 'https://www.bufalobranco.com.br/' },
            { nome: 'Zaragoza', nota: 4.6, contato: '(45) 3574-3084', site: '#' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Rafain Palace Hotel', nota: 4.7, contato: '(45) 3521-3500', site: 'https://www.rafainpalace.com.br/' },
            { nome: 'Viale Cataratas Hotel', nota: 4.6, contato: '(45) 3576-4000', site: 'https://www.vialecataratas.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const FozDoIguacu = () => <CearaPontoBase config={config} />;
export default FozDoIguacu;
