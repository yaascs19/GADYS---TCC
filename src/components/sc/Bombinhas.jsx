import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Bombinhas',
  subtitulo: 'Águas cristalinas e mergulho no paraíso catarinense.',
  carouselImages: ['/images/geral/sc-bombinhas.jpg', '/images/geral/sc2.jpg'],
  galeriaImages: [
    { src: '/images/geral/sc-bombinhas.jpg', alt: 'Bombinhas' },
    { src: '/images/geral/sc2.jpg', alt: 'Praia de Bombinhas' },
    { src: '/images/geral/sc1.jpg', alt: 'Mergulho em Bombinhas' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Paraíso do Mergulho',
      texto: 'Bombinhas é considerada um dos melhores destinos de mergulho do Brasil. Com águas cristalinas de tonalidades que variam do verde ao azul turquesa, a cidade abriga a Reserva Biológica Marinha do Arvoredo — uma das maiores áreas de proteção marinha do país. São mais de 30 praias, cada uma com sua personalidade única.',
      imagem: '/images/geral/sc-bombinhas.jpg',
      alt: 'Praia de Bombinhas',
      lista: [
        'Localização: Litoral norte de SC, a 60 km de Florianópolis.',
        'Destaque: Reserva Biológica Marinha do Arvoredo para mergulho.',
        'Praias: Mais de 30 praias, incluindo Quatro Ilhas e Bombas.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer em Bombinhas',
      texto: 'Bombinhas é o destino ideal para quem ama o mar em sua forma mais pura.',
      imagem: '/images/geral/sc2.jpg',
      alt: 'Mergulho em Bombinhas',
      subsecoes: [
        { titulo: 'Mergulho e Snorkeling', texto: 'As águas transparentes de Bombinhas abrigam uma rica vida marinha. Diversas operadoras oferecem passeios de mergulho para iniciantes e experientes.' },
        { titulo: 'Praia de Quatro Ilhas', texto: 'Uma das praias mais bonitas de SC, com águas calmas e cristalinas, ideal para famílias e para quem busca tranquilidade.' },
        { titulo: 'Trilhas Ecológicas', texto: 'O Parque Natural Municipal de Bombinhas oferece trilhas com vistas panorâmicas deslumbrantes do litoral catarinense.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Hospedar',
      texto: 'Bombinhas fica na Península de Porto Belo, a 60 km de Florianópolis e 90 km de Balneário Camboriú.',
      imagem: '/images/geral/sc-bombinhas.jpg',
      alt: 'Bombinhas',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De carro pela BR-101 até Porto Belo, depois pela SC-412 até Bombinhas. Não há transporte público direto de Florianópolis.' },
        { titulo: 'Melhor Época', texto: 'Dezembro a março para praias. Fora de temporada, as praias ficam desertas e as águas continuam cristalinas.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Quatro Ilhas', nota: 4.8, contato: '(47) 3393-1234', site: 'https://www.instagram.com/quatroi lhas/' },
            { nome: 'Frutos do Mar Bombinhas', nota: 4.6, contato: '(47) 3393-5678', site: 'https://www.instagram.com/frutosdomar.bombinhas/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Pousada Quatro Ilhas', nota: 4.8, contato: '(47) 3393-2222', site: 'https://www.pousadaquatroilhas.com.br/' },
            { nome: 'Hotel Bombinhas Palace', nota: 4.5, contato: '(47) 3393-3333', site: 'https://www.bombinhaspalace.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const Bombinhas = () => <CearaPontoBase config={config} />;
export default Bombinhas;
