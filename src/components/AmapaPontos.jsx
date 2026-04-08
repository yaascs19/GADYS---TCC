import React from 'react';
import NortePontosBase from './norte/NortePontosBase';

const config = {
  estado: 'AP',
  titulo: 'Tesouros do Amapá',
  subtitulo: 'Descubra onde a Amazônia encontra o Atlântico.',
  headerImage: '/images/geral/amazonas1.avif',
  voltarRota: '/amapa',
  placeholder: 'O que você quer descobrir no Amapá?',
  pontos: [
    { id: 'fortaleza-sao-jose', nome: 'Fortaleza de São José de Macapá', cidade: 'Macapá - AP', categoria: 'Monumentos', descricao: 'O maior monumento histórico da Amazônia brasileira, construído no século XVIII para defender a fronteira norte do Brasil.', imagem: '/images/geral/amazonas1.avif', rota: '/amapa/fortaleza-sao-jose' },
    { id: 'marco-zero-equador', nome: 'Marco Zero do Equador', cidade: 'Macapá - AP', categoria: 'Monumentos', descricao: 'O ponto exato onde a linha do Equador corta a cidade de Macapá, marcado pelo Monumento Marco Zero, um dos mais visitados do estado.', imagem: '/images/geral/amazonas2.jpg', rota: null },
    { id: 'parque-nacional-cabo-orange', nome: 'Parque Nacional do Cabo Orange', cidade: 'Calçoene - AP', categoria: 'Lugar Paradísíaco', descricao: 'O único parque nacional brasileiro com manguezais, praias oceânicas e floresta amazônica, um santuário de biodiversidade na foz do Amazonas.', imagem: '/images/geral/amazonas3.1.jpg', rota: null },
    { id: 'lago-do-curiau', nome: 'Área de Proteção do Rio Curiaú', cidade: 'Macapá - AP', categoria: 'Lugar Paradísíaco', descricao: 'Comunidade quilombola às margens do Rio Curiaú, com rica cultura afro-brasileira, festas tradicionais e uma natureza exuberante.', imagem: '/images/geral/oam.jpg', rota: null },
    { id: 'praia-de-fazendinha', nome: 'Praia de Fazendinha', cidade: 'Macapá - AP', categoria: 'Lugar Paradísíaco', descricao: 'A praia mais popular de Macapá, às margens do Rio Amazonas, com pôr do sol deslumbrante e estrutura completa de lazer.', imagem: '/images/geral/amazonas1.avif', rota: null },
    { id: 'gastronomia-amapaense', nome: 'Mercado Central de Macapá', cidade: 'Macapá - AP', categoria: 'Restaurantes', descricao: 'O coração gastronômico de Macapá, com pratos típicos como o caldeirado de filhote, o açaí com peixe e as frutas amazônicas.', imagem: '/images/geral/amazonas2.jpg', rota: null },
    { id: 'marabaixo', nome: 'Festival do Marabaixo', cidade: 'Macapá - AP', categoria: 'Costume Cultural', descricao: 'Manifestação cultural afro-brasileira tombada como patrimônio imaterial, com danças, cantos e rituais que celebram a identidade negra amapaense.', imagem: '/images/geral/amazonas3.1.jpg', rota: null },
    { id: 'museu-sacaca', nome: 'Museu Sacaca', cidade: 'Macapá - AP', categoria: 'Monumentos', descricao: 'Museu a céu aberto que preserva a história e a cultura dos povos amazônicos, com casas típicas, trilhas e exposições sobre a biodiversidade local.', imagem: '/images/geral/oam.jpg', rota: null },
  ],
};

const AmapaPontos = () => <NortePontosBase config={config} />;
export default AmapaPontos;
