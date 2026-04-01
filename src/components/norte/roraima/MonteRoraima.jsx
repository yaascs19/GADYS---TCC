import React from 'react';
import CearaPontoBase from '../../CearaPontoBase';

const config = {
  titulo: 'Monte Roraima',
  subtitulo: 'O topo do Brasil — uma viagem ao início do mundo.',
  carouselImages: ['/images/geral/oam.jpg', '/images/geral/amazonas1.avif'],
  galeriaImages: [
    { src: '/images/geral/oam.jpg', alt: 'Monte Roraima' },
    { src: '/images/geral/amazonas1.avif', alt: 'Tepui Roraima' },
    { src: '/images/geral/amazonas2.jpg', alt: 'Trekking Monte Roraima' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Ponto Mais Alto do Brasil',
      texto: 'O Monte Roraima, com 2.875 metros de altitude, é o ponto mais alto do Brasil e uma das formações geológicas mais antigas do planeta, com mais de 1,8 bilhão de anos. Localizado na tríplice fronteira entre Brasil, Venezuela e Guiana, o tepui inspirou Arthur Conan Doyle a escrever "O Mundo Perdido" em 1912. Seu topo plano, coberto por neblina e plantas carnívoras, parece um mundo à parte.',
      imagem: '/images/geral/oam.jpg',
      alt: 'Vista do Monte Roraima',
      lista: [
        'Altitude: 2.875 metros — ponto mais alto do Brasil.',
        'Idade: Mais de 1,8 bilhão de anos.',
        'Fronteira: Brasil, Venezuela e Guiana.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Trekking Mais Épico do Brasil',
      texto: 'O trekking ao Monte Roraima é considerado uma das aventuras mais épicas da América do Sul, com paisagens de outro mundo e uma experiência inesquecível.',
      imagem: '/images/geral/amazonas1.avif',
      alt: 'Trekking no Monte Roraima',
      subsecoes: [
        { titulo: 'Trekking ao Topo', texto: 'O trekking completo dura de 8 a 12 dias, partindo da aldeia Paraitepui. A trilha percorre savanas, florestas e tepuis, com acampamentos ao longo do caminho. O topo plano do Roraima é coberto por plantas carnívoras, cristais de quartzo e piscinas naturais.' },
        { titulo: 'Flora e Fauna Únicas', texto: 'O topo do Roraima abriga espécies endêmicas que não existem em nenhum outro lugar do planeta, como a bromélia Brocchinia reducta e o sapo Oreophrynella quelchii. A neblina constante cria um ambiente místico e surreal.' },
        { titulo: 'Tríplice Fronteira', texto: 'Do topo do Roraima, é possível ver os três países simultaneamente: Brasil, Venezuela e Guiana. Um marco de pedra indica o ponto exato da tríplice fronteira, uma experiência única no mundo.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Fazer o Trekking',
      texto: 'O trekking ao Monte Roraima exige planejamento, boa condição física e guia indígena obrigatório.',
      imagem: '/images/geral/amazonas2.jpg',
      alt: 'Acampamento no Monte Roraima',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De Boa Vista, pegue um ônibus ou carro até Pacaraima (215 km). De lá, siga até a aldeia Paraitepui (80 km de estrada de terra). A contratação de guia indígena é obrigatória e pode ser feita na aldeia.' },
        { titulo: 'Melhor Época', texto: 'De dezembro a abril, na estação chuvosa, as cachoeiras estão mais cheias e a vegetação mais verde. De maio a novembro, na seca, as trilhas são mais fáceis e o céu mais limpo.' },
      ],
      recomendacoes: [
        {
          titulo: 'Agências de Trekking',
          itens: [
            { nome: 'Roraima Adventures', nota: 4.9, contato: '(95) 9999-1234', site: 'https://www.instagram.com/' },
            { nome: 'Tepui Expedições', nota: 4.8, contato: '(95) 9888-5678', site: 'https://www.instagram.com/' },
          ],
        },
        {
          titulo: 'Onde Ficar em Boa Vista',
          itens: [
            { nome: 'Hotel Ekinox', nota: 4.7, contato: '(95) 3623-1234', site: 'https://www.instagram.com/' },
            { nome: 'Pousada Roraima', nota: 4.6, contato: '(95) 9777-9012', site: 'https://www.instagram.com/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const MonteRoraima = () => <CearaPontoBase config={config} />;
export default MonteRoraima;
