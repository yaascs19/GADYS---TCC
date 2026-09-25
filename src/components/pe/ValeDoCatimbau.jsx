import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Vale do Catimbau',
  subtitulo: 'O parque nacional de pinturas rupestres do Nordeste.',
  carouselImages: ['/images/geral/pi-capivara.jpg', '/images/geral/pi-natureza.jpg'],
  galeriaImages: [
    { src: '/images/geral/pi-capivara.jpg', alt: 'Vale do Catimbau' },
    { src: '/images/geral/pi-natureza.jpg', alt: 'Pinturas rupestres' },
    { src: '/images/geral/pi-setecidades.jpg', alt: 'Formações rochosas' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Museu a Céu Aberto',
      texto: 'O Parque Nacional do Vale do Catimbau, localizado no agreste pernambucano, é o segundo maior parque arqueológico do Brasil. Com mais de 2.000 sítios arqueológicos, o parque abriga pinturas rupestres com até 6.000 anos de idade, formações rochosas impressionantes e uma rica biodiversidade da Caatinga.',
      imagem: '/images/geral/pi-capivara.jpg',
      alt: 'Pinturas rupestres do Vale do Catimbau',
      lista: [
        'Localização: Buíque, Tupanatinga e Ibimirim — PE.',
        'Destaque: Mais de 2.000 sítios arqueológicos com pinturas rupestres.',
        'Bioma: Caatinga, com espécies endêmicas e paisagens únicas.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Explore o Catimbau',
      texto: 'O parque oferece trilhas guiadas que levam aos principais sítios arqueológicos e mirantes com vistas deslumbrantes do Vale. A experiência de ver pinturas de 6.000 anos é inesquecível.',
      imagem: '/images/geral/pi-natureza.jpg',
      alt: 'Trilha no Vale do Catimbau',
      subsecoes: [
        { titulo: 'Sítio Alcobaça', texto: 'Um dos mais importantes do parque, com pinturas rupestres bem preservadas representando figuras humanas, animais e cenas do cotidiano pré-histórico.' },
        { titulo: 'Mirante do Catimbau', texto: 'Do alto do mirante, a vista do vale com suas formações rochosas e a vegetação da Caatinga é de tirar o fôlego, especialmente ao pôr do sol.' },
        { titulo: 'Fauna e Flora', texto: 'O parque abriga espécies como a ararinha-azul (extinta na natureza), veados, tatus e uma rica flora de Caatinga com cactos e bromélias.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Dicas',
      texto: 'O Vale do Catimbau fica a cerca de 300 km do Recife. As visitas devem ser feitas com guias credenciados, disponíveis na entrada do parque.',
      imagem: '/images/geral/pi-capivara.jpg',
      alt: 'Entrada do Parque do Catimbau',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De Recife, siga pela BR-232 até Arcoverde, depois pela PE-270 até Buíque. O percurso leva cerca de 4 horas.' },
        { titulo: 'Melhor Época', texto: 'De maio a setembro, na estação seca, quando as trilhas estão mais acessíveis e o clima é mais ameno.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Catimbau', nota: 4.5, contato: '(87) 9999-0000', site: '#' },
            { nome: 'Casa da Dona Maria', nota: 4.4, contato: '(87) 9888-1111', site: '#' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Pousada Catimbau', nota: 4.6, contato: '(87) 3845-1010', site: '#' },
            { nome: 'Chalés do Vale', nota: 4.5, contato: '(87) 9777-2222', site: '#' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const ValeDoCatimbau = () => <CearaPontoBase config={config} />;
export default ValeDoCatimbau;
