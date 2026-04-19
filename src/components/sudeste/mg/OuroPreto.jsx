import React from 'react';
import SudestePontoDetalheBase from '../../sudeste/SudestePontoDetalheBase';

const config = {
  titulo: 'Ouro Preto',
  subtitulo: 'A joia do barroco brasileiro — Patrimônio Mundial da UNESCO.',
  voltarRota: '/mg-pontos',
  carouselImages: ['/images/monumentos/ouro.jpeg', '/images/monumentos/independencia.webp'],
  galeriaImages: [
    { src: '/images/monumentos/ouro.jpeg', alt: 'Ouro Preto centro histórico' },
    { src: '/images/monumentos/independencia.webp', alt: 'Igreja de Ouro Preto' },
    { src: '/images/monumentos/pala.jpeg', alt: 'Casarões coloniais' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'A Capital do Ouro e da Inconfidência',
      texto: 'Ouro Preto foi a capital de Minas Gerais durante o ciclo do ouro no século XVIII e o epicentro da Inconfidência Mineira, o primeiro movimento de independência do Brasil. Tombada como Patrimônio Mundial da UNESCO em 1980, a cidade preserva mais de 20 igrejas barrocas, museus e casarões coloniais que contam a história do Brasil colonial.',
      imagem: '/images/monumentos/ouro.jpeg',
      alt: 'Vista panorâmica de Ouro Preto',
      lista: ['UNESCO: Patrimônio Mundial desde 1980.', 'Altitude: 1.179 metros acima do nível do mar.', 'Destaque: Igreja de São Francisco de Assis, obra-prima de Aleijadinho.'],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Explorar em Ouro Preto',
      texto: 'Ouro Preto é um museu a céu aberto. Cada rua de paralelepípedo, cada igreja e cada mirante conta uma história fascinante.',
      imagem: '/images/monumentos/independencia.webp',
      alt: 'Igreja barroca de Ouro Preto',
      subsecoes: [
        { titulo: 'Igrejas Barrocas', texto: 'As 13 igrejas de Ouro Preto são obras-primas do barroco. A Igreja de São Francisco de Assis, com esculturas de Aleijadinho, e a Igreja Nossa Senhora do Pilar, com 400 kg de ouro em seu interior, são as mais impressionantes.' },
        { titulo: 'Museu da Inconfidência', texto: 'Instalado no antigo Palácio Municipal, o museu preserva documentos, objetos e a história da Inconfidência Mineira de 1789, incluindo os restos mortais de Tiradentes.' },
        { titulo: 'Minas de Ouro', texto: 'A Mina do Chico Rei e a Mina da Passagem oferecem visitas guiadas ao interior das minas de ouro do século XVIII, com trilhos, galerias e lagos subterrâneos de tirar o fôlego.' },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Visitar Ouro Preto',
      texto: 'Ouro Preto é facilmente acessível de Belo Horizonte e pode ser explorada a pé em 2 a 3 dias.',
      imagem: '/images/monumentos/pala.jpeg',
      alt: 'Ruas de paralelepípedo de Ouro Preto',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De Belo Horizonte, há ônibus regulares (2h) e excursões diárias. De carro, siga pela BR-356. O centro histórico é melhor explorado a pé — use calçados confortáveis pelas ruas íngremes.' },
        { titulo: 'Melhor Época', texto: 'O Carnaval de Ouro Preto é um dos mais tradicionais do Brasil. A Semana Santa, com procissões históricas, é outro momento especial. O inverno (junho-agosto) tem clima ameno e menos chuvas.' },
      ],
      recomendacoes: [
        { titulo: 'Onde Comer', itens: [{ nome: 'Restaurante Chafariz', nota: 4.8, contato: '(31) 3551-2828', site: 'https://www.instagram.com/' }, { nome: 'Casa do Ouvidor', nota: 4.7, contato: '(31) 3551-3141', site: 'https://www.instagram.com/' }] },
        { titulo: 'Onde Ficar', itens: [{ nome: 'Pousada do Mondego', nota: 4.8, contato: '(31) 3551-2040', site: 'https://www.pousadadomondego.com.br/' }, { nome: 'Hotel Solar do Rosário', nota: 4.7, contato: '(31) 3551-5200', site: 'https://www.instagram.com/' }] },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const OuroPreto = () => <SudestePontoDetalheBase config={config} />;
export default OuroPreto;
