import React from 'react';
import CearaPontoBase from '../../CearaPontoBase';

const config = {
  titulo: 'Parque Zoobotânico de Rio Branco',
  subtitulo: 'Natureza, ciência e biodiversidade no coração da Amazônia.',
  carouselImages: ['/images/geral/ac-parquezoo.jpg', '/images/geral/amazonas1.avif'],
  galeriaImages: [
    { src: '/images/geral/ac-parquezoo.jpg', alt: 'Parque Zoobotânico' },
    { src: '/images/geral/amazonas1.avif', alt: 'Floresta Amazônica' },
    { src: '/images/geral/amazonas2.jpg', alt: 'Fauna do Parque' },
    { src: '/images/geral/amazonas3.1.jpg', alt: 'Trilhas do Parque' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'Um Santuário Verde no Coração de Rio Branco',
      texto: 'O Parque Zoobotânico da Universidade Federal do Acre (UFAC) é um dos maiores parques urbanos da Amazônia, com mais de 100 hectares de floresta preservada dentro da capital acreana. Criado em 1974, o parque reúne um zoológico com animais silvestres da Amazônia, trilhas ecológicas, um jardim botânico e um museu de história natural.',
      imagem: '/images/geral/ac-parquezoo.jpg',
      alt: 'Entrada do Parque Zoobotânico',
      lista: [
        'Área: mais de 100 hectares de floresta urbana preservada.',
        'Localização: Campus da UFAC, Rio Branco - AC.',
        'Destaque: Zoológico com animais silvestres da Amazônia em habitat natural.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer no Parque',
      texto: 'O Parque Zoobotânico oferece uma experiência completa de contato com a natureza amazônica sem sair da cidade.',
      imagem: '/images/geral/amazonas2.jpg',
      alt: 'Animais no Parque Zoobotânico',
      subsecoes: [
        { titulo: 'Zoológico Amazônico', texto: 'O zoológico abriga onças-pintadas, jacarés, antas, macacos, araras e dezenas de outras espécies da fauna amazônica. Os animais vivem em recintos que reproduzem seu habitat natural.' },
        { titulo: 'Trilhas Ecológicas', texto: 'O parque conta com trilhas sinalizadas que atravessam a floresta primária, permitindo observar a flora e fauna amazônica de perto. Guias especializados acompanham os visitantes.' },
        { titulo: 'Jardim Botânico', texto: 'A coleção botânica reúne centenas de espécies de plantas amazônicas, incluindo árvores centenárias, orquídeas e plantas medicinais utilizadas pelos povos indígenas.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Visitar',
      texto: 'O Parque Zoobotânico fica no campus da UFAC, de fácil acesso a partir do centro de Rio Branco.',
      imagem: '/images/geral/amazonas3.1.jpg',
      alt: 'Trilha no Parque Zoobotânico',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'Localizado na Rodovia BR-364, km 04, no campus da UFAC. A partir do centro de Rio Branco, são cerca de 10 minutos de carro ou táxi.' },
        { titulo: 'Horário de Funcionamento', texto: 'Terça a domingo, das 8h às 17h. Fechado às segundas-feiras.' },
        { titulo: 'Entrada', texto: 'Gratuita para estudantes da UFAC e crianças até 12 anos. Valor simbólico para demais visitantes.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Ficar em Rio Branco',
          itens: [
            { nome: 'Hotel Inácio Palace', nota: 4.6, contato: '(68) 3224-6300', site: 'https://www.instagram.com/' },
            { nome: 'Pousada Ecológica Acre', nota: 4.7, contato: '(68) 9777-9012', site: 'https://www.instagram.com/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const ParqueZoobotanico = () => <CearaPontoBase config={config} />;
export default ParqueZoobotanico;
