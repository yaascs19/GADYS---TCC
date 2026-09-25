import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Recife Antigo',
  subtitulo: 'O coração histórico e cultural da Veneza Brasileira.',
  carouselImages: ['/images/geral/pelo.jpg', '/images/geral/pelo-xx.jpg'],
  galeriaImages: [
    { src: '/images/geral/pelo.jpg', alt: 'Recife Antigo' },
    { src: '/images/geral/pelo-xx.jpg', alt: 'Marco Zero do Recife' },
    { src: '/images/geral/fe-pe.jpg', alt: 'Vista do Recife' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Veneza Brasileira',
      texto: 'Recife Antigo é o bairro mais histórico da capital pernambucana, localizado numa ilha cercada pelos rios Capibaribe e Beberibe. Berço da cidade, o bairro concentra o Marco Zero, igrejas coloniais, museus e uma vibrante cena cultural e gastronômica que pulsa dia e noite.',
      imagem: '/images/geral/pelo.jpg',
      alt: 'Recife Antigo',
      lista: [
        'Localização: Centro do Recife, Pernambuco.',
        'Destaque: Marco Zero — ponto de origem de todas as distâncias do estado.',
        'Cultura: Palco do Carnaval do Recife, com frevo e maracatu.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Viva o Recife Antigo',
      texto: 'O bairro oferece uma mistura única de história, arte e gastronomia. Aos fins de semana, a Rua do Bom Jesus e a Praça do Arsenal ganham vida com shows, feiras e apresentações culturais.',
      imagem: '/images/geral/pelo-xx.jpg',
      alt: 'Rua do Bom Jesus',
      subsecoes: [
        { titulo: 'Marco Zero e Galo da Madrugada', texto: 'O Marco Zero é o coração do Recife Antigo. Durante o Carnaval, o Galo da Madrugada transforma a área no maior bloco carnavalesco do mundo.' },
        { titulo: 'Instituto Ricardo Brennand', texto: 'Um dos maiores acervos de arte do Brasil, com obras de Frans Post e uma coleção de armas medievais impressionante.' },
        { titulo: 'Rua do Bom Jesus', texto: 'Antiga rua dos judeus, hoje é um dos pontos mais animados do bairro, com bares, restaurantes e apresentações de frevo.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Explorar',
      texto: 'O Recife Antigo fica a poucos minutos do centro da cidade e é facilmente acessível de metrô, ônibus ou táxi. O bairro é melhor explorado a pé.',
      imagem: '/images/geral/pelo.jpg',
      alt: 'Recife Antigo à noite',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De metrô, desça na estação Recife. De carro, há estacionamentos próximos ao Marco Zero.' },
        { titulo: 'Melhor Época', texto: 'O Carnaval (fevereiro/março) é a época mais animada. Para turismo tranquilo, qualquer mês é ótimo.' },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Leite Restaurante', nota: 4.7, contato: '(81) 3224-7977', site: 'https://www.restauranteleite.com.br/' },
            { nome: 'Chica Pitanga', nota: 4.6, contato: '(81) 3465-2224', site: 'https://www.chicapitanga.com.br/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Hotel Atlante Plaza', nota: 4.5, contato: '(81) 3302-3333', site: 'https://www.atlanteplaza.com.br/' },
            { nome: 'Pousada Villa Boa Vista', nota: 4.6, contato: '(81) 3441-0666', site: 'https://www.villaboavista.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const RecifeAntigo = () => <CearaPontoBase config={config} />;
export default RecifeAntigo;
