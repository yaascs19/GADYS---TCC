import React from 'react';
import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Parque das Dunas',
  subtitulo: 'A maior reserva de Mata Atlântica urbana do Brasil, no coração de Natal.',
  carouselImages: ['/images/geral/rn-parquedunas.jpg', '/images/geral/rn4.jpg'],
  galeriaImages: [
    { src: '/images/geral/rn-parquedunas.jpg', alt: 'Parque das Dunas' },
    { src: '/images/geral/rn4.jpg', alt: 'Trilha no Parque das Dunas' },
    { src: '/images/geral/rn1.jpg', alt: 'Fauna do Parque das Dunas' },
  ],
  secoes: {
    sobre: {
      label: 'Sobre',
      titulo: 'O Pulmão Verde de Natal',
      texto: 'O Parque Estadual das Dunas do Natal, conhecido como Parque das Dunas, é a maior reserva de Mata Atlântica urbana do Brasil. Com 1.172 hectares no coração de Natal, o parque protege dunas fixas cobertas por vegetação nativa, abriga mais de 200 espécies de animais e oferece trilhas ecológicas para visitantes. É um oásis verde em meio à capital potiguar.',
      imagem: '/images/geral/rn-parquedunas.jpg',
      alt: 'Vista aérea do Parque das Dunas',
      lista: [
        'Localização: Natal - RN, entre os bairros de Ponta Negra e Capim Macio.',
        'Área: 1.172 hectares — maior reserva de Mata Atlântica urbana do Brasil.',
        'Fauna: Mais de 200 espécies de animais, incluindo saguis e aves raras.',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'O Que Fazer no Parque das Dunas',
      texto: 'O Parque das Dunas oferece contato com a natureza a poucos minutos do centro de Natal.',
      imagem: '/images/geral/rn4.jpg',
      alt: 'Trilha no Parque das Dunas',
      subsecoes: [
        {
          titulo: 'Trilhas Ecológicas',
          texto: 'O parque oferece três trilhas com diferentes níveis de dificuldade: Trilha da Perobinha (fácil, 1,5 km), Trilha do Cambuí (moderada, 3 km) e Trilha das Dunas (difícil, 5 km).',
        },
        {
          titulo: 'Observação de Fauna',
          texto: 'O parque abriga saguis-de-tufos-brancos, gambás, lagartos, cobras e mais de 100 espécies de aves. Ao amanhecer, as chances de avistamento são maiores.',
        },
        {
          titulo: 'Centro de Visitantes',
          texto: 'O Centro de Visitantes oferece exposições sobre a flora e fauna do parque, além de informações sobre as trilhas e a história da reserva. Entrada gratuita.',
        },
      ],
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Visitar',
      texto: 'O Parque das Dunas fica no coração de Natal, com fácil acesso por transporte público.',
      imagem: '/images/geral/rn-parquedunas.jpg',
      alt: 'Parque das Dunas',
      subsecoes: [
        {
          titulo: 'Como Chegar',
          texto: 'Localizado na Av. Alexandrino de Alencar, 1920, Tirol, Natal. Acessível por ônibus, táxi ou aplicativos de transporte. Estacionamento disponível.',
        },
        {
          titulo: 'Horários e Ingressos',
          texto: 'Funciona de terça a domingo, das 8h às 17h. Entrada gratuita. As trilhas guiadas têm horários específicos — consulte o Centro de Visitantes.',
        },
      ],
      recomendacoes: [
        {
          titulo: 'Onde Comer por Perto',
          itens: [
            { nome: 'Camarões Natal', nota: 4.8, contato: '(84) 3206-3344', site: 'https://www.camaroes.com.br/' },
            { nome: 'Mangai Natal', nota: 4.9, contato: '(84) 3206-3344', site: 'https://www.mangai.com.br/' },
          ],
        },
        {
          titulo: 'Onde Ficar',
          itens: [
            { nome: 'Pestana Natal Beach Resort', nota: 4.7, contato: '(84) 4009-7500', site: 'https://www.pestana.com/' },
            { nome: 'Ocean Palace Hotel', nota: 4.6, contato: '(84) 3220-4144', site: 'https://www.oceanpalace.com.br/' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const ParqueDasDunas = () => <CearaPontoBase config={config} />;
export default ParqueDasDunas;
