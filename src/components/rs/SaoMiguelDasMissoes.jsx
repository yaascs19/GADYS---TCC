import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'São Miguel das Missões',
  subtitulo: 'Patrimônio Mundial da UNESCO — as ruínas jesuíticas mais impressionantes das Américas.',
  carouselImages: ['/images/geral/rs-missoes.jpg', '/images/geral/rs1.jpg'],
  galeriaImages: [
    { src: '/images/geral/rs-missoes.jpg', alt: 'Ruínas de São Miguel das Missões' },
    { src: '/images/geral/rs1.jpg', alt: 'Espetáculo Som e Luz' },
    { src: '/images/geral/rs2.jpg', alt: 'Museu das Missões' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'Patrimônio da Humanidade',
      texto: 'As Ruínas de São Miguel Arcanjo, em São Miguel das Missões, são um dos sítios arqueológicos mais importantes das Américas e Patrimônio Mundial da UNESCO desde 1983. Construídas pelos jesuítas e pelos índios guaranis no século XVII, as ruínas da Igreja de São Miguel Arcanjo são um testemunho extraordinário da civilização missioneira — uma das experiências culturais mais marcantes do Brasil.',
      imagem: '/images/geral/rs-missoes.jpg',
      alt: 'Ruínas da Igreja de São Miguel Arcanjo',
      lista: [
        'Localização: Noroeste do RS, a 490 km de Porto Alegre.',
        'Patrimônio: UNESCO desde 1983 — junto com as Missões da Argentina.',
        'História: Construída no século XVII por jesuítas e guaranis.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer nas Missões',
      texto: 'São Miguel das Missões oferece uma imersão única na história e na cultura missioneira.',
      imagem: '/images/geral/rs1.jpg',
      alt: 'Espetáculo Som e Luz nas Missões',
      subsecoes: [
        {
          titulo: 'Espetáculo Som e Luz',
          texto: 'Todas as noites, as ruínas ganham vida com o espetáculo "Missões — Sonho e Ruína". Projeções de luz e narração contam a história da civilização missioneira de forma emocionante.',
        },
        {
          titulo: 'Museu das Missões',
          texto: 'Projetado por Lúcio Costa em 1937, o museu abriga um acervo de esculturas e objetos guaranis resgatados das ruínas. Uma das obras mais importantes do modernismo brasileiro.',
        },
        {
          titulo: 'Rota Missioneira',
          texto: 'A Rota Missioneira conecta os sete povos das Missões no RS e na Argentina. Uma viagem histórica por ruínas, museus e comunidades guaranis que preservam a cultura missioneira.',
        },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Hospedar',
      texto: 'São Miguel das Missões fica a 490 km de Porto Alegre, no noroeste do Rio Grande do Sul.',
      imagem: '/images/geral/rs-missoes.jpg',
      alt: 'São Miguel das Missões',
      subsecoes: [
        {
          titulo: 'Como Chegar',
          texto: 'De carro pela BR-285 a partir de Porto Alegre (aprox. 5h). De ônibus com conexão em Santo Ângelo. O aeroporto mais próximo é o de Santo Ângelo.',
        },
        {
          titulo: 'Informações Práticas',
          texto: 'As ruínas funcionam diariamente das 9h às 18h. Ingresso: R$ 20 (adulto). O espetáculo Som e Luz acontece às 21h (verificar programação). Combine com visita ao Museu das Missões.',
        },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Missões', nota: 4.6, contato: '(55) 3381-1234', site: 'https://www.instagram.com/restaurantemissoes/' },
            { nome: 'Pousada e Restaurante Barichello', nota: 4.7, contato: '(55) 3381-5678', site: 'https://www.instagram.com/pousadabarichello/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Pousada das Missões', nota: 4.8, contato: '(55) 3381-2222', site: 'https://www.pousadadasmissoes.com.br/' },
            { nome: 'Hotel Barichello', nota: 4.5, contato: '(55) 3381-3333', site: 'https://www.hotelbarichello.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const SaoMiguelDasMissoes = () => <CearaPontoBase config={config} />;
export default SaoMiguelDasMissoes;
