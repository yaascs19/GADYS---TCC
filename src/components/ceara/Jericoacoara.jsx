import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Jericoacoara',
  subtitulo: 'O paraíso das dunas e lagoas do Ceará.',
  carouselImages: ['/images/geral/Ceara1.webp', '/images/geral/Ceara2.webp'],
  galeriaImages: [
    { src: '/images/geral/Ceara1.webp', alt: 'Jericoacoara' },
    { src: '/images/geral/Ceara2.webp', alt: 'Jericoacoara dunas' },
    { src: '/images/geral/Ceara3.jpg', alt: 'Jericoacoara pôr do sol' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Paraíso Escondido do Brasil',
      texto: 'Jericoacoara, carinhosamente chamada de "Jeri", é uma vila paradisíaca encravada entre dunas, lagoas e o mar. Considerada uma das praias mais bonitas do mundo pela revista Condé Nast Traveler, o lugar encanta pela combinação única de paisagens selvagens, ventos constantes e um pôr do sol que para o tempo.',
      imagem: '/images/geral/Ceara1.webp',
      alt: 'Vista aérea de Jericoacoara',
      lista: [
        'Localização: Jijoca de Jericoacoara, a 300 km de Fortaleza.',
        'Destaque: Pôr do sol na Pedra Furada, um dos mais belos do mundo.',
        'Esportes: Kitesurf e windsurf entre os melhores do planeta.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Viva Jeri ao Máximo',
      texto: 'Jericoacoara oferece experiências únicas para todos os perfis de viajante. Das lagoas de água doce às dunas que parecem desertos, cada canto guarda uma surpresa.',
      imagem: '/images/geral/Ceara2.webp',
      alt: 'Lagoa de Jericoacoara',
      subsecoes: [
        { titulo: 'Lagoa do Paraíso e Lagoa Azul', texto: 'As lagoas de água doce cristalina são o cartão-postal de Jeri. A Lagoa do Paraíso, com suas águas esverdeadas e transparentes, é perfeita para um mergulho refrescante.' },
        { titulo: 'Kitesurf e Windsurf', texto: 'Os ventos constantes tornaram Jeri um dos melhores destinos do mundo para kitesurf e windsurf. Escolas locais oferecem aulas para iniciantes.' },
        { titulo: 'Dunas e Pôr do Sol', texto: 'Subir a Duna do Pôr do Sol para assistir ao espetáculo diário é um ritual sagrado em Jeri. Centenas de pessoas se reúnem no topo para aplaudir o sol se despedindo.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Hospedar',
      texto: 'Chegar a Jericoacoara faz parte da aventura. O acesso é feito por veículos 4x4 ou buggys, atravessando dunas e praias a partir de Jijoca de Jericoacoara.',
      imagem: '/images/geral/Ceara3.jpg',
      alt: 'Acesso a Jericoacoara',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De Fortaleza, pegue um ônibus ou van até Jijoca (aprox. 4h). De lá, 4x4s fazem o trajeto pelas dunas até a vila (30 min).' },
        { titulo: 'Melhor Época', texto: 'De julho a dezembro, quando os ventos são mais fortes — ideal para kitesurf. De janeiro a junho, as lagoas ficam mais cheias.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Estoril', nota: 4.8, contato: '(88) 3669-2066', site: 'https://www.instagram.com/estoril.jeri/' },
            { nome: 'Saborear Restaurante', nota: 4.7, contato: '(88) 3669-2191', site: 'https://www.instagram.com/saboreariericoacoara/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Pousada Papagaio', nota: 4.8, contato: '(88) 3669-2222', site: 'https://www.pousadapapagaio.com.br/' },
            { nome: 'Vila Kalango', nota: 4.9, contato: '(88) 3669-2289', site: 'https://www.vilakalango.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const Jericoacoara = () => <CearaPontoBase config={config} />;
export default Jericoacoara;
