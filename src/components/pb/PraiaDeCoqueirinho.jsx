import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Praia de Coqueirinho',
  subtitulo: 'Piscinas naturais entre falésias coloridas no litoral paraibano.',
  carouselImages: ['/images/geral/rn-baiaformosa.jpg', '/images/geral/rn-pipa.jpg'],
  galeriaImages: [
    { src: '/images/geral/rn-baiaformosa.jpg', alt: 'Praia de Coqueirinho' },
    { src: '/images/geral/rn-pipa.jpg', alt: 'Falésias de Coqueirinho' },
    { src: '/images/geral/rn-natureza.jpg', alt: 'Litoral de Coqueirinho' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Paraíso das Falésias Coloridas',
      texto: 'Coqueirinho é considerada uma das praias mais bonitas da Paraíba e do Nordeste brasileiro. Localizada no município de Conde, a praia impressiona pelas suas falésias multicoloridas — em tons de vermelho, laranja e amarelo —, pelas piscinas naturais cristalinas e pela vegetação exuberante de coqueiros que emoldura a paisagem.',
      imagem: '/images/geral/rn-baiaformosa.jpg',
      alt: 'Praia de Coqueirinho',
      lista: [
        'Localização: Conde, a 35 km de João Pessoa - PB.',
        'Destaque: Falésias multicoloridas e piscinas naturais cristalinas.',
        'Acesso: Descida pelas falésias por escadaria ou trilha.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Viva Coqueirinho',
      texto: 'Coqueirinho combina a beleza das falésias coloridas com a tranquilidade de uma praia pouco urbanizada, ideal para quem busca contato com a natureza.',
      imagem: '/images/geral/rn-pipa.jpg',
      alt: 'Piscinas naturais de Coqueirinho',
      subsecoes: [
        { titulo: 'Piscinas Naturais', texto: 'As piscinas formadas pelos recifes são o grande atrativo de Coqueirinho. Na maré baixa, a água fica morna e cristalina, com peixes coloridos nadando entre os banhistas.' },
        { titulo: 'Falésias Multicoloridas', texto: 'As falésias de Coqueirinho são famosas pelas suas cores vibrantes. O contraste entre o vermelho das rochas, o verde da vegetação e o azul do mar é de tirar o fôlego.' },
        { titulo: 'Trilha e Mirante', texto: 'A trilha pelo topo das falésias oferece vistas panorâmicas da praia e do litoral sul paraibano. O mirante ao entardecer é um dos mais belos do estado.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Dicas',
      texto: 'Coqueirinho fica a 35 km de João Pessoa pela PB-008. O acesso à praia é feito por escadaria nas falésias.',
      imagem: '/images/geral/rn-baiaformosa.jpg',
      alt: 'Acesso à Praia de Coqueirinho',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De João Pessoa, siga pela PB-008 em direção a Conde. Há sinalização para Coqueirinho. Vans e ônibus saem da rodoviária de João Pessoa.' },
        { titulo: 'Melhor Época', texto: 'De setembro a março, com mar calmo e piscinas naturais mais acessíveis. Chegue cedo para garantir lugar nas piscinas na maré baixa.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Barraca Coqueirinho', nota: 4.5, contato: '(83) 9777-3333', site: '#' },
            { nome: 'Restaurante Beira Falésia', nota: 4.4, contato: '(83) 9666-4444', site: '#' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Pousada Coqueirinho', nota: 4.6, contato: '(83) 3290-3030', site: '#' },
            { nome: 'Pousada das Falésias', nota: 4.5, contato: '(83) 3290-4040', site: '#' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const PraiaDeCoqueirinho = () => <CearaPontoBase config={config} />;
export default PraiaDeCoqueirinho;
