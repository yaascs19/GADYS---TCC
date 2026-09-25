import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Rio da Prata — Bonito',
  subtitulo: 'Flutuação em águas cristalinas entre peixes coloridos no coração do Mato Grosso do Sul.',
  carouselImages: [
    '/images/geral/Rio da Prata — Bonito1.jpg',
    '/images/geral/Rio da Prata — Bonito2.jpg',
  ],
  galeriaImages: [
    { src: '/images/geral/Rio da Prata — Bonito3.jpg', alt: 'Rio da Prata flutuação' },
    { src: '/images/geral/Rio da Prata — Bonito4.jpeg', alt: 'Peixes do Rio da Prata' },
    { src: '/images/geral/Rio da Prata — Bonito5.jpeg', alt: 'Águas cristalinas de Bonito' },
  ],
  tema: {
    bg: '#071520',
    texto: '#c8e8f5',
    card: '#0d2a3d',
    acento: '#29b6e8',
    navTexto: '#7dd4f0',
    navAtivo: '#f0e04a',
    navBorda: '#f0e04a',
    tituloTexto: '#f0e04a',
    recCard: '#0d2a3d',
    recNome: '#c8e8f5',
    recContato: '#071520',
    recContatoBg: '#29b6e8',
    footerBg: 'linear-gradient(135deg, #0d2a3d, #030d14)',
    footerTexto: '#f0e04a',
  },
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Rio Mais Transparente do Brasil',
      texto: 'O Rio da Prata é um dos principais atrativos de Bonito (MS) e um dos rios de água mais cristalina do mundo. A flutuação percorre 2,5 km em meio a uma floresta ciliar preservada, com visibilidade de até 50 metros. Dourados, piraputangas, pacus e diversas outras espécies nadam ao redor dos visitantes em total harmonia com o ambiente.',
      imagem: '/images/geral/Rio da Prata — Bonito3.jpg',
      alt: 'Flutuação no Rio da Prata',
      lista: [
        'Localização: Bonito - MS, a 250 km de Campo Grande.',
        'Atividade: Flutuação de 2,5 km em rio de água cristalina.',
        'Visibilidade: Até 50 metros de profundidade visual.',
        'Fauna: Dourados, piraputangas, pacus e tartarugas-de-ouvido-vermelho.',
      ],
    },
    natureza: {
      label: 'Natureza',
      titulo: 'Biodiversidade Subaquática',
      texto: 'A transparência das águas do Rio da Prata é resultado da filtragem natural pelo calcário da Serra da Bodoquena. O ecossistema preservado abriga uma fauna aquática riquíssima e vegetação ciliar intocada.',
      imagem: '/images/geral/Rio da Prata — Bonito4.jpeg',
      alt: 'Peixes no Rio da Prata',
      subsecoes: [
        { titulo: 'Flutuação com Snorkel', texto: 'A atividade principal é a flutuação com máscara e snorkel ao longo de 2,5 km de rio. O percurso é tranquilo, adequado para todas as idades, e guiado por condutores credenciados.' },
        { titulo: 'Trilha na Mata', texto: 'Antes da flutuação, uma trilha de 1,2 km atravessa a mata ciliar com observação de aves, macacos-prego e vegetação típica do Cerrado e da Mata Atlântica.' },
        { titulo: 'Nascentes', texto: 'O passeio inclui a visita às nascentes do Rio da Prata, onde a água brota diretamente do solo calcário com temperatura constante de 22°C durante todo o ano.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Planejar',
      texto: 'Bonito fica a 250 km de Campo Grande pela BR-060 e MS-382. O acesso ao Rio da Prata é feito exclusivamente por agências credenciadas — é obrigatório adquirir o voucher antecipadamente.',
      imagem: '/images/geral/Rio da Prata — Bonito5.jpeg',
      alt: 'Entrada do Rio da Prata',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De Campo Grande, siga pela BR-060 até Jardim e depois pela MS-382 até Bonito (aprox. 3h30). Há voos para o Aeroporto de Bonito (BYO) com conexão em Campo Grande.' },
        { titulo: 'Melhor Época', texto: 'O Rio da Prata pode ser visitado o ano todo. De julho a setembro a visibilidade é máxima. Evite os dias após chuvas fortes, quando a água pode turvar levemente.' },
      ],
      recomendacoes: [
        {
          titulo: 'Agências Credenciadas',
          itens: [
            { nome: 'Ygarapé Tour', nota: 4.9, contato: '(67) 3255-1733', site: 'https://www.ygarape.com.br' },
            { nome: 'Bonito Way', nota: 4.8, contato: '(67) 3255-2000', site: 'https://www.bonitoway.com.br' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const RioDaPrata = () => <CearaPontoBase config={config} />;
export default RioDaPrata;
