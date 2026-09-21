import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Baía Formosa',
  subtitulo: 'Praias selvagens, falésias e o refúgio mais tranquilo do litoral sul potiguar.',
  carouselImages: ['/images/geral/rn-baiaformosa.jpg', '/images/geral/rn4.jpg'],
  galeriaImages: [
    { src: '/images/geral/rn-baiaformosa.jpg', alt: 'Baía Formosa' },
    { src: '/images/geral/rn4.jpg', alt: 'Praia de Baía Formosa' },
    { src: '/images/geral/rn1.jpg', alt: 'Falésias de Baía Formosa' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Refúgio Selvagem do Litoral Sul',
      texto: 'Baía Formosa é um dos destinos mais preservados do litoral sul do Rio Grande do Norte. Com praias praticamente desertas, falésias coloridas, piscinas naturais e uma natureza intocada, a cidade é o refúgio perfeito para quem busca tranquilidade longe do turismo de massa. A Praia de Baía Formosa, com seus 14 km de extensão, é uma das mais longas e selvagens do estado.',
      imagem: '/images/geral/rn-baiaformosa.jpg',
      alt: 'Praia selvagem de Baía Formosa',
      lista: [
        'Localização: Litoral sul do RN, a 100 km de Natal.',
        'Praia: 14 km de extensão — uma das mais longas e preservadas do estado.',
        'Destaque: Natureza intocada, falésias coloridas e piscinas naturais.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer em Baía Formosa',
      texto: 'Baía Formosa é o destino ideal para quem busca contato com a natureza em sua forma mais pura.',
      imagem: '/images/geral/rn4.jpg',
      alt: 'Praia de Baía Formosa',
      subsecoes: [
        {
          titulo: 'Praias Selvagens',
          texto: 'As praias de Baía Formosa são praticamente desertas, com águas cristalinas e piscinas naturais formadas pelos recifes de corais. Perfeitas para snorkeling e banho de mar tranquilo.',
        },
        {
          titulo: 'Falésias Coloridas',
          texto: 'As falésias de Baía Formosa apresentam tons de vermelho, laranja e amarelo que mudam de cor conforme a luz do dia. O pôr do sol sobre as falésias é um espetáculo único.',
        },
        {
          titulo: 'Passeio de Buggy',
          texto: 'Os buggys percorrem as praias e falésias do litoral sul, conectando Baía Formosa a praias vizinhas como Barra de Cunhaú e Canguaretama. Uma aventura inesquecível.',
        },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Hospedar',
      texto: 'Baía Formosa fica a 100 km de Natal, com acesso pela BR-101 Sul.',
      imagem: '/images/geral/rn-baiaformosa.jpg',
      alt: 'Baía Formosa',
      subsecoes: [
        {
          titulo: 'Como Chegar',
          texto: 'De Natal, siga pela BR-101 Sul até Canguaretama, depois pela RN-003 até Baía Formosa (aprox. 1h30). Há ônibus regulares saindo de Natal.',
        },
        {
          titulo: 'Melhor Época',
          texto: 'De agosto a fevereiro para praias e sol. O período chuvoso (março a julho) traz menos turistas e preços mais baixos, mas as praias ficam mais agitadas.',
        },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Beira Mar', nota: 4.6, contato: '(84) 3238-1234', site: 'https://www.instagram.com/restaurantebeiramar.bf/' },
            { nome: 'Barraca do Pescador', nota: 4.5, contato: '(84) 99123-5678', site: 'https://www.instagram.com/barracadopescador.bf/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Pousada Baía Formosa', nota: 4.7, contato: '(84) 3238-2222', site: 'https://www.pousadabaiaformosa.com.br/' },
            { nome: 'Hotel Praia Selvagem', nota: 4.5, contato: '(84) 3238-3333', site: 'https://www.hotelpraiaselagem.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const BaiaFormosa = () => <CearaPontoBase config={config} />;
export default BaiaFormosa;
