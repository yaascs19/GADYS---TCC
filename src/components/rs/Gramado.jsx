import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Gramado',
  subtitulo: 'A cidade mais encantadora do Brasil — neve, chocolate e o Festival de Cinema.',
  carouselImages: ['/images/geral/rs-gramado.jpg', '/images/geral/rs1.jpg'],
  galeriaImages: [
    { src: '/images/geral/rs-gramado.jpg', alt: 'Gramado no inverno' },
    { src: '/images/geral/rs1.jpg', alt: 'Natal Luz de Gramado' },
    { src: '/images/geral/rs2.jpg', alt: 'Rua Coberta de Gramado' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Pérola da Serra Gaúcha',
      texto: 'Gramado é, sem dúvida, um dos destinos turísticos mais famosos do Brasil. Encravada na Serra Gaúcha a 825 metros de altitude, a cidade encanta pela arquitetura europeia, pelas hortênsias que colorem as ruas, pelo chocolate artesanal premiado e por eventos que atraem visitantes do mundo inteiro. O Natal Luz, realizado de outubro a janeiro, transforma a cidade em um conto de fadas iluminado.',
      imagem: '/images/geral/rs-gramado.jpg',
      alt: 'Gramado decorada para o Natal Luz',
      lista: [
        'Localização: Serra Gaúcha, a 115 km de Porto Alegre.',
        'Altitude: 825 metros — clima europeu com temperaturas negativas no inverno.',
        'Destaque: Natal Luz, Festival de Cinema e chocolate artesanal.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer em Gramado',
      texto: 'Gramado oferece experiências únicas em qualquer época do ano, do verão florido ao inverno gelado.',
      imagem: '/images/geral/rs2.jpg',
      alt: 'Rua Coberta de Gramado',
      subsecoes: [
        {
          titulo: 'Natal Luz',
          texto: 'O maior evento natalino da América Latina acontece de outubro a janeiro. Desfiles, shows, iluminação deslumbrante e a magia do Natal transformam Gramado em um cenário de conto de fadas.',
        },
        {
          titulo: 'Festival de Cinema de Gramado',
          texto: 'Realizado em agosto, o Festival de Cinema de Gramado é o mais importante do Brasil. Atrai estrelas do cinema nacional e internacional e movimenta toda a cidade.',
        },
        {
          titulo: 'Rota do Chocolate',
          texto: 'Gramado é a capital brasileira do chocolate artesanal. Dezenas de chocolaterias oferecem degustações e produtos premiados internacionalmente.',
        },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Hospedar',
      texto: 'Gramado fica a 115 km de Porto Alegre, com acesso pela RS-020 e RS-115.',
      imagem: '/images/geral/rs-gramado.jpg',
      alt: 'Gramado',
      subsecoes: [
        {
          titulo: 'Como Chegar',
          texto: 'De carro pela RS-020 ou RS-115 a partir de Porto Alegre (aprox. 1h30). De ônibus com saídas frequentes da rodoviária de Porto Alegre.',
        },
        {
          titulo: 'Melhor Época',
          texto: 'Outubro a janeiro para o Natal Luz. Junho a agosto para o frio intenso e possibilidade de neve. Setembro para a florada das hortênsias.',
        },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Colosseo', nota: 4.9, contato: '(54) 3286-1530', site: 'https://www.colosseo.com.br/' },
            { nome: 'Gasthof Gramado', nota: 4.8, contato: '(54) 3286-2244', site: 'https://www.gasthofgramado.com.br/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Serrano Resort & Convention', nota: 4.8, contato: '(54) 3286-1332', site: 'https://www.serranohotel.com.br/' },
            { nome: 'Pousada Zermatt', nota: 4.9, contato: '(54) 3286-4332', site: 'https://www.pousadazermatt.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const Gramado = () => <CearaPontoBase config={config} />;
export default Gramado;
