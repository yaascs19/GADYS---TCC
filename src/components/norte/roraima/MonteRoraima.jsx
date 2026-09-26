import React from 'react';
import CearaPontoBase from '../../CearaPontoBase';

const config = {
  titulo: 'Monte Roraima',
  subtitulo: 'O topo do Brasil — uma viagem ao início do mundo, onde três países se encontram nas nuvens.',
  carouselImages: [
    '/images/geral/monte2.jpg',
    '/images/geral/monte3.jpg',
  ],
  galeriaImages: [
    { src: '/images/geral/monte2.jpg', alt: 'Monte Roraima' },
    { src: '/images/geral/monte3.jpg', alt: 'Monte Roraima — tepui' },
    { src: '/images/geral/monte4.webp', alt: 'Topo do Monte Roraima' },
    { src: '/images/geral/monte5.jpg', alt: 'Trekking Monte Roraima' },
    { src: '/images/geral/monte6.jpg', alt: 'Vista do Monte Roraima' },
  ],
  tema: {
    bg: '#0b0f1a',
    texto: '#dce8f5',
    tituloTexto: '#90b8d8',
    acento: '#3a6b8a',
    card: 'rgba(58,107,138,0.12)',
    navTexto: '#8aafc8',
    navAtivo: '#90b8d8',
    navBorda: '#3a6b8a',
    recCard: 'rgba(58,107,138,0.16)',
    recNome: '#90b8d8',
    recContato: '#dce8f5',
    recContatoBg: 'rgba(58,107,138,0.25)',
    footerBg: 'linear-gradient(135deg, #0f1e30, #0b0f1a)',
    footerTexto: '#8aafc8',
  },
  voltarEstilo: {
    background: 'rgba(58,107,138,0.3)',
    borderColor: '#90b8d8',
  },
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Ponto Mais Alto do Brasil',
      texto: 'O Monte Roraima, com 2.875 metros de altitude, é o ponto mais alto do Brasil e uma das formações geológicas mais antigas do planeta, com mais de 1,8 bilhão de anos. Localizado na tríplice fronteira entre Brasil, Venezuela e Guiana, o tepui inspirou Arthur Conan Doyle a escrever "O Mundo Perdido" em 1912. Seu topo plano, coberto por neblina permanente e plantas carnívoras, parece um mundo completamente à parte da realidade.',
      imagem: '/images/geral/monte4.webp',
      alt: 'Vista do topo do Monte Roraima',
      lista: [
        'Altitude: 2.875 metros — ponto mais alto do Brasil.',
        'Idade: Mais de 1,8 bilhão de anos de formação geológica.',
        'Fronteira: Tríplice fronteira entre Brasil, Venezuela e Guiana.',
        'Inspiração: Base do livro "O Mundo Perdido" de Arthur Conan Doyle.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Trekking Mais Épico do Brasil',
      texto: 'O trekking ao Monte Roraima é considerado uma das aventuras mais épicas da América do Sul, com paisagens de outro mundo e uma experiência verdadeiramente inesquecível.',
      imagem: '/images/geral/monte5.jpg',
      alt: 'Trekking no Monte Roraima',
      subsecoes: [
        {
          titulo: 'Trekking ao Topo',
          texto: 'O trekking completo dura de 8 a 12 dias, partindo da aldeia Paraitepui. A trilha percorre savanas, florestas e tepuis, com acampamentos ao longo do caminho. O topo plano é coberto por plantas carnívoras, cristais de quartzo e piscinas naturais de água cristalina.',
        },
        {
          titulo: 'Flora e Fauna Únicas',
          texto: 'O topo do Roraima abriga espécies endêmicas que não existem em nenhum outro lugar do planeta, como a bromélia Brocchinia reducta e o sapo Oreophrynella quelchii. A neblina constante cria um ambiente místico e surreal.',
        },
        {
          titulo: 'Tríplice Fronteira',
          texto: 'Do topo do Roraima, é possível ver os três países simultaneamente: Brasil, Venezuela e Guiana. Um marco de pedra indica o ponto exato da tríplice fronteira — uma experiência única no mundo.',
        },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Fazer o Trekking',
      texto: 'O trekking ao Monte Roraima exige planejamento, boa condição física e guia indígena obrigatório.',
      imagem: '/images/geral/monte6.jpg',
      alt: 'Acampamento no Monte Roraima',
      subsecoes: [
        {
          titulo: 'Como Chegar',
          texto: 'De Boa Vista, pegue um ônibus ou carro até Pacaraima (215 km). De lá, siga até a aldeia Paraitepui (80 km de estrada de terra). A contratação de guia indígena é obrigatória e pode ser feita na aldeia.',
        },
        {
          titulo: 'Melhor Época',
          texto: 'De dezembro a abril, na estação chuvosa, as cachoeiras estão mais cheias e a vegetação mais verde. De maio a novembro, na seca, as trilhas são mais fáceis e o céu mais limpo para as vistas.',
        },
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
