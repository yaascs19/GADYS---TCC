import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Parque Nacional Sete Cidades',
  subtitulo: 'Formações rochosas milenares que parecem cidades abandonadas no coração do Piauí.',
  carouselImages: ['/images/geral/pi-setecidades.jpg', '/images/geral/pi3.jpg'],
  galeriaImages: [
    { src: '/images/geral/pi-setecidades.jpg', alt: 'Sete Cidades' },
    { src: '/images/geral/pi3.jpg', alt: 'Formações rochosas de Sete Cidades' },
    { src: '/images/geral/pi4.jpg', alt: 'Trilha em Sete Cidades' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'As Cidades de Pedra do Piauí',
      texto: 'O Parque Nacional de Sete Cidades é um dos destinos mais fascinantes e misteriosos do Brasil. Suas formações rochosas esculpidas pela erosão ao longo de milhões de anos criam paisagens que lembram cidades em ruínas — daí o nome. O parque também abriga inscrições rupestres de até 6 mil anos e uma rica biodiversidade de cerrado e caatinga. Teorias controversas sugerem que as formações teriam sido esculpidas por civilizações antigas.',
      imagem: '/images/geral/pi-setecidades.jpg',
      alt: 'Formações rochosas de Sete Cidades',
      lista: [
        'Localização: Piracuruca, a 180 km de Teresina - PI.',
        'Área: 6.221 hectares de cerrado e caatinga preservados.',
        'Mistério: Inscrições rupestres de até 6 mil anos e teorias sobre civilizações antigas.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Explorar em Sete Cidades',
      texto: 'Sete Cidades oferece trilhas únicas por entre formações rochosas que parecem saídas de outro mundo.',
      imagem: '/images/geral/pi3.jpg',
      alt: 'Trilha em Sete Cidades',
      subsecoes: [
        {
          titulo: 'As Sete Cidades',
          texto: 'Cada "cidade" é um conjunto de formações rochosas com formas únicas. A Primeira Cidade tem a famosa "Cabeça de Dom Pedro I". A Sétima Cidade abriga as inscrições rupestres mais antigas do parque.',
        },
        {
          titulo: 'Trilha das Inscrições Rupestres',
          texto: 'A trilha leva a painéis com inscrições rupestres de até 6 mil anos. As figuras geométricas e representações humanas são objeto de estudo de arqueólogos do mundo inteiro.',
        },
        {
          titulo: 'Observação de Fauna',
          texto: 'O parque abriga tatus, tamanduás, veados, raposas e mais de 200 espécies de aves. Ao amanhecer, as chances de avistamento são maiores nas trilhas mais afastadas.',
        },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar e Se Preparar',
      texto: 'Sete Cidades fica a 180 km de Teresina, com acesso pela BR-222.',
      imagem: '/images/geral/pi-setecidades.jpg',
      alt: 'Sete Cidades',
      subsecoes: [
        {
          titulo: 'Como Chegar',
          texto: 'De Teresina, siga pela BR-222 até Piracuruca, depois pela PI-111 até o parque (aprox. 2h30). Há ônibus até Piracuruca, de onde táxis levam ao parque.',
        },
        {
          titulo: 'Informações Práticas',
          texto: 'O parque funciona diariamente das 8h às 17h. Ingresso: R$ 20 (adulto). Visitas guiadas disponíveis. Leve água, protetor solar e calçado fechado.',
        },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer',
          itens: [
            { nome: 'Restaurante Sete Cidades', nota: 4.5, contato: '(86) 3276-1234', site: 'https://www.instagram.com/restaurantesetecidades/' },
            { nome: 'Lanchonete do Parque', nota: 4.3, contato: '(86) 3276-5678', site: 'https://www.instagram.com/lanchonete.setecidades/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Pousada Sete Cidades', nota: 4.6, contato: '(86) 3276-2222', site: 'https://www.pousadasetecidades.com.br/' },
            { nome: 'Hotel Piracuruca', nota: 4.4, contato: '(86) 3276-3333', site: 'https://www.hotelpiracuruca.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const SeteCidades = () => <CearaPontoBase config={config} />;
export default SeteCidades;
