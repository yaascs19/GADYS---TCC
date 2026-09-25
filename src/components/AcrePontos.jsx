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
    { id: 'parque-estadual-chandless', nome: 'Parque Estadual Chandless', cidade: 'Santa Rosa do Purus - AC', categoria: 'Lugar Paradísíaco', descricao: 'Um dos maiores parques estaduais do Brasil, com floresta amazônica intocada, rios cristalinos e uma biodiversidade extraordinária.', imagem: '/images/geral/ac-chan1.jpg', rota: '/acre/parque-chandless' },
    { id: 'rio-branco-centro', nome: 'Centro Histórico de Rio Branco', cidade: 'Rio Branco - AC', categoria: 'Monumentos', descricao: 'A capital do Acre guarda monumentos históricos como o Palácio Rio Branco, o Museu da Borracha e a Catedral Nossa Senhora de Nazaré.', imagem: '/images/geral/ac-centro.webp' },
    { id: 'memorial-chico-mendes', nome: 'Memorial Chico Mendes', cidade: 'Xapuri - AC', categoria: 'Monumentos', descricao: 'Homenagem ao seringueiro e ambientalista Chico Mendes, assassinado em 1988. O memorial preserva a casa onde viveu e lutou pela floresta.', imagem: '/images/geral/ac-memorial.jpg' },
    { id: 'parque-zoobotanico', nome: 'Parque Zoobotânico de Rio Branco', cidade: 'Rio Branco', categoria: 'Lugar Paradísíaco', descricao: 'Um dos maiores parques urbanos da Amazônia, com zoológico, trilhas ecológicas e jardim botânico no campus da UFAC.', imagem: '/images/geral/ac-zoo.jpg' },
  ],
};

const AcrePontos = () => <NortePontosBase config={config} />;
export default AcrePontos;
