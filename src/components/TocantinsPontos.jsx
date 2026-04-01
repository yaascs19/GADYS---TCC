import React from 'react';
import NortePontosBase from './norte/NortePontosBase';

const config = {
  estado: 'Tocantins',
  titulo: 'Tesouros do Tocantins',
  subtitulo: 'Descubra o Coração do Brasil.',
  headerImage: '/images/geral/amazonas3.1.jpg',
  voltarRota: '/tocantins',
  placeholder: 'O que você quer descobrir no Tocantins?',
  pontos: [
    { id: 'jalapao', nome: 'Parque Estadual do Jalapão', cidade: 'Mateiros - TO', categoria: 'Lugar Paradísíaco', descricao: 'Um dos destinos ecoturísticos mais deslumbrantes do Brasil, com dunas de areia dourada, fervedouros de água cristalina, cachoeiras e serras no coração do Cerrado.', imagem: '/images/geral/amazonas3.1.jpg', rota: '/tocantins/jalapao' },
    { id: 'ilha-do-bananal', nome: 'Ilha do Bananal', cidade: 'Santa Terezinha - TO', categoria: 'Lugar Paradísíaco', descricao: 'A maior ilha fluvial do mundo, formada pelos rios Araguaia e Javaés, com praias fluviais paradisíacas e o Parque Nacional do Araguaia.', imagem: '/images/geral/oam.jpg', rota: null },
    { id: 'palmas-orla', nome: 'Orla de Palmas', cidade: 'Palmas - TO', categoria: 'Lugar Paradísíaco', descricao: 'A orla da capital às margens do Lago de Palmas é um dos cartões-postais do Tocantins, com praias fluviais, parques e uma vista deslumbrante da Serra do Lajeado.', imagem: '/images/geral/amazonas1.avif', rota: null },
    { id: 'catedral-palmas', nome: 'Catedral Nossa Senhora da Assunção', cidade: 'Palmas - TO', categoria: 'Monumentos', descricao: 'A catedral de Palmas, com sua arquitetura moderna e imponente, é um dos símbolos da capital mais jovem do Brasil, inaugurada em 1989.', imagem: '/images/geral/amazonas2.jpg', rota: null },
    { id: 'cachoeira-roncador', nome: 'Cachoeira da Serra do Lajeado', cidade: 'Palmas - TO', categoria: 'Lugar Paradísíaco', descricao: 'A Serra do Lajeado, que margeia Palmas, abriga diversas cachoeiras e trilhas ecológicas com vistas panorâmicas da capital e do Lago de Palmas.', imagem: '/images/geral/amazonas3.1.jpg', rota: null },
    { id: 'gastronomia-tocantinense', nome: 'Feira Gastronômica de Palmas', cidade: 'Palmas - TO', categoria: 'Restaurantes', descricao: 'A gastronomia tocantinense é uma fusão de sabores do Cerrado e da Amazônia. Pratos como o peixe na telha, o pequi com arroz e o baru torrado são imperdíveis.', imagem: '/images/geral/oam.jpg', rota: null },
    { id: 'cultura-karajá', nome: 'Cultura Karajá e Xerente', cidade: 'Tocantínia - TO', categoria: 'Costume Cultural', descricao: 'Os povos Karajá e Xerente habitam o Tocantins há milênios. O artesanato Karajá, especialmente as bonecas de cerâmica, é reconhecido como patrimônio cultural imaterial do Brasil.', imagem: '/images/geral/amazonas1.avif', rota: null },
    { id: 'capim-dourado', nome: 'Artesanato do Capim Dourado', cidade: 'Mateiros - TO', categoria: 'Costume Cultural', descricao: 'O artesanato com a fibra dourada do Jalapão é reconhecido mundialmente. Bolsas, chapéus e joias feitas com o capim dourado são símbolos da identidade tocantinense.', imagem: '/images/geral/amazonas2.jpg', rota: null },
  ],
};

const TocantinsPontos = () => <NortePontosBase config={config} />;
export default TocantinsPontos;
