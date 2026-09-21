import CearaPontoBase from '../CearaPontoBase';

const config = {
  titulo: 'Cânion do Xingó',
  subtitulo: 'O Grand Canyon brasileiro às margens do Rio São Francisco.',
  carouselImages: [
    '/images/geral/se-xingo.jpg',
    '/images/geral/se-xingo2.jpg',
    '/images/geral/se-xingo3.jpg',
  ],
  galeriaImages: [
    { src: '/images/geral/se-xingo.jpg', alt: 'Cânion do Xingó' },
    { src: '/images/geral/se-xingo2.jpg', alt: 'Rio São Francisco no Xingó' },
    { src: '/images/geral/se-xingo3.jpg', alt: 'Paredes do Cânion' },
    { src: '/images/geral/se-xingo4.jpg', alt: 'Passeio de barco' },
  ],
  secoes: {
    fenomeno: {
      label: 'O Cânion',
      titulo: 'Uma Fenda na Terra Nordestina',
      texto: 'O Cânion do Xingó é uma das formações geológicas mais impressionantes do Brasil. Esculpido pelo Rio São Francisco ao longo de milhões de anos, o cânion apresenta paredes rochosas de até 150 metros de altura em tons de ocre, vermelho e cinza que mudam de cor conforme a luz do dia.',
      imagem: '/images/geral/se-xingo.jpg',
      lista: [
        'Extensão: aproximadamente 60 km de cânion navegável',
        'Altura das paredes: até 150 metros',
        'Rio: São Francisco, o "Velho Chico"',
        'Temperatura da água: entre 24°C e 28°C',
      ],
    },
    experiencias: {
      label: 'Experiências',
      titulo: 'Navegue pelo Coração do Sertão',
      texto: 'O passeio de barco pelo cânion é a principal atração. Ao longo do percurso, é possível nadar nas águas esverdeadas, visitar grutas e cachoeiras escondidas entre as rochas, e avistar aves como garças e martins-pescadores. O pôr do sol sobre as paredes do cânion é um espetáculo único.',
      imagem: '/images/geral/se-xingo2.jpg',
    },
    visita: {
      label: 'Visite',
      titulo: 'Como Chegar ao Xingó',
      texto: 'O Cânion do Xingó fica em Canindé de São Francisco, a 220 km de Aracaju. Os passeios de barco partem diariamente do Porto do Xingó e têm duração de 3 a 4 horas.',
      imagem: '/images/geral/se-xingo3.jpg',
      subsecoes: [
        { titulo: 'Como Chegar', texto: 'De Aracaju, siga pela BR-235 até Canindé de São Francisco. O trajeto leva cerca de 3 horas de carro.' },
        { titulo: 'Horários', texto: 'Os passeios partem às 8h e às 13h. Recomenda-se chegar com 30 minutos de antecedência.' },
        { titulo: 'O que Levar', texto: 'Protetor solar, chapéu, óculos de sol, roupa de banho e dinheiro em espécie para artesanato local.' },
      ],
      recomendacoes: [
        {
          titulo: 'Agências de Passeio',
          itens: [
            { nome: 'Xingó Turismo', nota: 4.8, contato: '(79) 3471-1234', site: 'https://www.xingo.com.br' },
            { nome: 'Cânion Aventura', nota: 4.7, contato: '(79) 99876-5432', site: '#' },
          ],
        },
        {
          titulo: 'Onde se Hospedar',
          itens: [
            { nome: 'Hotel Xingó Resort', nota: 4.6, contato: '(79) 3471-0000', site: '#' },
            { nome: 'Pousada do Cânion', nota: 4.5, contato: '(79) 99123-4567', site: '#' },
          ],
        },
      ],
    },
    fotos: { label: 'Fotos' },
  },
};

const CanionXingo = () => <CearaPontoBase config={config} />;
export default CanionXingo;
