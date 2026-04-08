import React from 'react';
import NortePontosBase from './norte/NortePontosBase';

const config = {
  estado: 'AC',
  titulo: 'Tesouros do Acre',
  subtitulo: 'Descubra as maravilhas da Joia da Amazônia.',
  headerImage: '/images/geral/amazonas1.avif',
  voltarRota: '/acre',
  placeholder: 'O que você quer descobrir no Acre?',
  pontos: [
    { id: 'parque-estadual-chandless', nome: 'Parque Estadual Chandless', cidade: 'Santa Rosa do Purus - AC', categoria: 'Lugar Paradísíaco', descricao: 'Um dos maiores parques estaduais do Brasil, com floresta amazônica intocada, rios cristalinos e uma biodiversidade extraordinária.', imagem: '/images/geral/amazonas1.avif', rota: '/acre/parque-chandless' },
    { id: 'rio-branco-centro', nome: 'Centro Histórico de Rio Branco', cidade: 'Rio Branco - AC', categoria: 'Monumentos', descricao: 'A capital do Acre guarda monumentos históricos como o Palácio Rio Branco, o Museu da Borracha e a Catedral Nossa Senhora de Nazaré.', imagem: '/images/geral/amazonas2.jpg', rota: '/acre/centro-historico' },
    { id: 'parque-zoobotanico', nome: 'Parque Zoobotânico', cidade: 'Rio Branco - AC', categoria: 'Lugar Paradísíaco', descricao: 'Um dos maiores parques urbanos da Amazônia, com trilhas ecológicas, animais silvestres e uma coleção botânica impressionante.', imagem: '/images/geral/amazonas3.1.jpg', rota: null },
    { id: 'memorial-chico-mendes', nome: 'Memorial Chico Mendes', cidade: 'Xapuri - AC', categoria: 'Monumentos', descricao: 'Homenagem ao seringueiro e ambientalista Chico Mendes, assassinado em 1988. O memorial preserva a casa onde viveu e lutou pela floresta.', imagem: '/images/geral/oam.jpg', rota: null },
    { id: 'reserva-extrativista-chico-mendes', nome: 'Reserva Extrativista Chico Mendes', cidade: 'Xapuri - AC', categoria: 'Lugar Paradísíaco', descricao: 'Criada em homenagem ao ambientalista, a reserva protege comunidades de seringueiros e uma vasta área de floresta amazônica preservada.', imagem: '/images/geral/amazonas1.avif', rota: null },
    { id: 'gastronomia-acreana', nome: 'Mercado Velho de Rio Branco', cidade: 'Rio Branco - AC', categoria: 'Restaurantes', descricao: 'O coração gastronômico de Rio Branco, com barracas de comida típica acreana, como o chibé, o tacacá e o peixe assado na brasa.', imagem: '/images/geral/amazonas2.jpg', rota: null },
    { id: 'festival-gastronomico', nome: 'Cultura Seringueira', cidade: 'Xapuri - AC', categoria: 'Costume Cultural', descricao: 'A cultura da seringa moldou a identidade acreana. Visitar as colocações de seringueiros e aprender sobre a extração do látex é uma experiência única.', imagem: '/images/geral/amazonas3.1.jpg', rota: null },
    { id: 'praia-do-amapá', nome: 'Praia do Amapá', cidade: 'Rio Branco - AC', categoria: 'Lugar Paradísíaco', descricao: 'A praia fluvial mais popular de Rio Branco, às margens do Rio Acre, com estrutura de lazer, quiosques e águas tranquilas para banho.', imagem: '/images/geral/oam.jpg', rota: null },
  ],
};

const AcrePontos = () => <NortePontosBase config={config} />;
export default AcrePontos;
