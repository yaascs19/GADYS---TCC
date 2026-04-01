import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Serra de Baturité',
  subtitulo: 'Clima ameno, cachoeiras e café no coração do Ceará.',
  carouselImages: ['/images/geral/Ceara1.webp', '/images/geral/CearaInicio.jpg'],
  galeriaImages: [
    { src: '/images/geral/Ceara1.webp', alt: 'Serra de Baturité' },
    { src: '/images/geral/CearaInicio.jpg', alt: 'Baturité cachoeira' },
    { src: '/images/geral/ceara.webp', alt: 'Baturité paisagem' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Oásis Verde do Ceará',
      texto: 'A Serra de Baturité é um verdadeiro oásis no semiárido cearense. Com altitude de até 1.114 metros, a região desfruta de um clima ameno e úmido, com temperaturas que raramente ultrapassam 25°C. A vegetação exuberante, as cachoeiras cristalinas e as plantações de café e banana criam uma paisagem completamente diferente do restante do estado.',
      imagem: '/images/geral/Ceara1.webp',
      alt: 'Vista da Serra de Baturité',
      lista: [
        'Localização: A 100 km de Fortaleza, na Região Maciço de Baturité.',
        'Altitude: Até 1.114 metros no Pico Alto.',
        'Clima: Ameno, entre 18°C e 25°C durante todo o ano.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Natureza e Cultura na Serra',
      texto: 'A Serra de Baturité oferece uma combinação única de ecoturismo, gastronomia e cultura caipira cearense.',
      imagem: '/images/geral/CearaInicio.jpg',
      alt: 'Cachoeira na Serra de Baturité',
      subsecoes: [
        { titulo: 'Cachoeiras e Trilhas', texto: 'A região abriga diversas cachoeiras, como a Cachoeira do Pinga e a Cachoeira do Urubu. As trilhas ecológicas percorrem a Mata Atlântica serrana, com rica biodiversidade.' },
        { titulo: 'Rota do Café', texto: 'Baturité é famosa pela produção de café de altitude. Fazendas históricas abrem suas portas para visitas guiadas, onde é possível conhecer todo o processo de produção e degustar o café local.' },
        { titulo: 'Guaramiranga', texto: 'O município de Guaramiranga, na serra, é conhecido como a "Suíça Cearense" e sedia o famoso Festival de Jazz e Blues, um dos mais importantes do Nordeste.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Visitar a Serra de Baturité',
      texto: 'A Serra de Baturité é um destino de fim de semana perfeito para quem está em Fortaleza.',
      imagem: '/images/geral/ceara.webp',
      alt: 'Estrada da Serra de Baturité',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De Fortaleza, siga pela BR-222 até Pacatuba, depois pela CE-065 até Baturité (aprox. 1h30). Há ônibus regulares saindo da Rodoviária de Fortaleza.' },
        { titulo: 'Melhor Época', texto: 'De fevereiro a maio, o período chuvoso deixa a vegetação mais verde e as cachoeiras mais cheias. De junho a janeiro, o clima é mais seco e agradável para trilhas.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Sítio das Flores', nota: 4.8, contato: '(85) 3325-1234', site: 'https://www.instagram.com/' },
            { nome: 'Café da Serra', nota: 4.7, contato: '(85) 3325-5678', site: 'https://www.instagram.com/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Pousada Recanto da Serra', nota: 4.7, contato: '(85) 3325-1111', site: 'https://www.instagram.com/' },
            { nome: 'Hotel Fazenda Serra Verde', nota: 4.6, contato: '(85) 3325-2222', site: 'https://www.instagram.com/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const SerraDeBaturite = () => <CearaPontoBase config={config} />;
export default SerraDeBaturite;
