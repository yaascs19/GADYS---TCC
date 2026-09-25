import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Pelourinho',
  subtitulo: 'O coração histórico de Salvador e berço da cultura afro-brasileira.',
  carouselImages: ['/images/geral/pelo-xx.jpg', '/images/geral/pelo.jpg', '/images/geral/pelou1.jpg', '/images/geral/pelou2.jpg'],
  galeriaImages: [
    { src: '/images/geral/pelo-xx.jpg', alt: 'Pelourinho' },
    { src: '/images/geral/pelo.jpg', alt: 'Casarões do Pelourinho' },
    { src: '/images/geral/pelou1.jpg', alt: 'Ruas do Pelourinho' },
    { src: '/images/geral/pelou2.jpg', alt: 'Pelourinho à noite' },
    { src: '/images/monumentos/pelourinho.jpg', alt: 'Vista do Pelourinho' },
    { src: '/images/geral/pelo3.jpg', alt: 'Arquitetura colonial' },
  ],
  tema: {
    bg: '#2c0a0a', texto: '#f5e6d3',
    acento: '#e67e22', card: '#5a1a1a', tituloTexto: '#f5cba7',
    navTexto: '#c49a50', navAtivo: '#fff', navBorda: '#e67e22',
    footerBg: 'linear-gradient(135deg, #7b241c, #4a1010)', footerTexto: '#f5cba7',
  },
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'Patrimônio da Humanidade',
      texto: 'O Pelourinho é o centro histórico de Salvador e um dos conjuntos arquitetônicos coloniais mais bem preservados das Américas. Tombado pela UNESCO em 1985, suas ruas de paralelepípedo e casarões coloridos dos séculos XVII e XVIII contam a história do Brasil colonial, da escravidão e da resistência cultural afro-brasileira.',
      imagem: '/images/geral/pelo-xx.jpg',
      alt: 'Vista do Pelourinho',
      lista: [
        'Localização: Centro Histórico de Salvador, Bahia.',
        'UNESCO: Patrimônio Mundial da Humanidade desde 1985.',
        'Destaque: Igrejas barrocas, museus e shows de capoeira ao vivo.',
        'Melhor época: O ano todo, com destaque para o Carnaval.',
      ],
    },
    cultura: {
      label: 'Cultura',
      titulo: 'Axé, Capoeira e Candomblé',
      texto: 'O Pelourinho é o epicentro da cultura afro-brasileira. Nas suas ruas acontecem rodas de capoeira, apresentações de grupos como o Olodum e o Ilê Aiyê, e cerimônias de candomblé. Cada pedra guarda a memória de um povo que transformou a dor em arte e resistência.',
      imagem: '/images/geral/pelo3.jpg',
      alt: 'Cultura no Pelourinho',
      subsecoes: [
        { titulo: 'Olodum', texto: 'O grupo musical mais famoso do Pelourinho, criado em 1979, mistura samba-reggae, axé e percussão. Suas apresentações às terças-feiras são um espetáculo imperdível.' },
        { titulo: 'Capoeira', texto: 'A arte marcial afro-brasileira nasceu na Bahia. No Pelourinho, rodas de capoeira acontecem diariamente nas praças, com mestres e alunos exibindo a ginga característica.' },
        { titulo: 'Igrejas Barrocas', texto: 'A Igreja de São Francisco, com seu interior coberto de ouro, e a Catedral Basílica são joias do barroco brasileiro que dominam a paisagem do Pelourinho.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Aproveitar o Pelourinho',
      texto: 'O Pelourinho fica no centro de Salvador e é facilmente acessível de qualquer ponto da cidade. A melhor forma de explorá-lo é a pé, perdendo-se pelas ruelas e descobrindo cada detalhe.',
      imagem: '/images/geral/pelou2.jpg',
      alt: 'Pelourinho à noite',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De qualquer ponto de Salvador, pegue o metrô até a estação Lapa ou um táxi/aplicativo. O Elevador Lacerda também conecta a Cidade Baixa ao Pelourinho.' },
        { titulo: 'Melhor Horário', texto: 'Durante o dia para visitar igrejas e museus. À noite, especialmente às terças-feiras, para shows e apresentações culturais nas praças.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante do SENAC', nota: 4.7, contato: '(71) 3324-4551', site: 'https://www.ba.senac.br' },
            { nome: 'Maria Mata Mouro', nota: 4.6, contato: '(71) 3321-3929', site: 'https://www.instagram.com/mariamatamouro/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const PelourinhoBA = () => <CearaPontoBase config={config} />;
export default PelourinhoBA;
