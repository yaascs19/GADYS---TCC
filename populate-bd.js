const API = 'https://gadys-backend.onrender.com';

const locais = [
  {
    id: 1,
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/ta-am.jpg', '/images/geral/tea-am1.jpg'],
      galleryImages: [
        { src: '/images/geral/ta-am.jpg' }, { src: '/images/geral/tea-am1.jpg' },
        { src: '/images/geral/tea-am3.jpg' }, { src: '/images/geral/tea-am4.jpg' },
        { src: '/images/geral/tea-am5.jpg' }, { src: '/images/geral/tea-am8.jpg' },
        { src: '/images/geral/tea-am9.jpg' }, { src: '/images/geral/tea-am10.jpg' },
        { src: '/images/geral/tea-am11.jpg' },
      ],
      secoes: {
        historia: {
          label: 'A História',
          titulo: 'Um Palácio Erguido na Selva',
          texto: 'No coração de Manaus, onde a floresta encontra a cidade, ergue-se uma das obras mais audaciosas da história brasileira. O Teatro Amazonas foi construído entre 1884 e 1896, no auge do ciclo da borracha, quando a Amazônia era o centro do mundo. Seus materiais vieram da Europa: mármore de Carrara, ferro da Escócia, cerâmica de Lisboa. Uma declaração de riqueza e poder que desafiou a lógica de seu tempo.',
          imagem: '/images/geral/tea-am3.jpg',
          lista: ['Construção: Entre 1884 e 1896, durante o ciclo da borracha.', 'Cúpula: Revestida com 36.000 telhas nas cores da bandeira do Brasil.', 'Materiais: Importados da Europa — mármore, ferro, cerâmica e cristal.'],
        },
        arquitetura: {
          label: 'Arquitetura',
          titulo: 'Detalhes que Contam uma Época',
          texto: 'Cada centímetro do Teatro Amazonas é uma obra de arte. A cúpula, revestida com 36.000 telhas de cerâmica nas cores verde, ouro e azul da bandeira brasileira, domina o horizonte de Manaus.',
          imagem: '/images/geral/tea-am4.jpg',
          subsecoes: [
            { titulo: 'A Cúpula Icônica', texto: 'A cúpula é o símbolo máximo do teatro. Suas 36.000 telhas de cerâmica portuguesa formam um mosaico nas cores da bandeira brasileira, visível de vários pontos da cidade.' },
            { titulo: 'O Salão Nobre', texto: 'O coração do teatro é seu salão principal, decorado com pinturas do artista italiano Domenico De Angelis. O teto retrata a lenda de Iara, a sereia amazônica.' },
            { titulo: 'O Piso Flutuante', texto: 'O piso da plateia foi construído com madeira de lei sobre uma estrutura que permite uma leve flutuação, garantindo acústica excepcional.' },
          ],
        },
        visita: {
          label: 'Visite',
          titulo: 'Viva a Experiência',
          texto: 'Visitar o Teatro Amazonas é mergulhar em uma das histórias mais fascinantes do Brasil.',
          imagem: '/images/geral/tea-am9.jpg',
          subsecoes: [
            { titulo: 'Visitas Guiadas', texto: 'As visitas guiadas acontecem de terça a domingo, das 9h às 17h. Com duração de aproximadamente 45 minutos. O ingresso custa R$ 50 (inteira) e R$ 25 (meia).' },
            { titulo: 'Espetáculos e Temporadas', texto: 'O Festival Amazonas de Ópera, realizado anualmente em abril e maio, é o maior evento de ópera da América Latina.' },
            { titulo: 'Como Chegar', texto: 'O Teatro Amazonas está localizado na Praça São Sebastião, no centro histórico de Manaus.' },
          ],
          recomendacoes: [
            { titulo: 'Restaurantes Próximos', itens: [{ nome: 'Banzeiro Restaurante', nota: 4.5, contato: '(92) 3234-1621', site: 'https://www.restaurantebanzeiro.com.br/' }, { nome: 'Caxiri Restaurante', nota: 4.6, contato: '(92) 98405-4769', site: 'https://www.instagram.com/caxirirestaurante/' }] },
            { titulo: 'Hotéis Recomendados', itens: [{ nome: 'Juma Ópera Hotel', nota: 4.3, contato: '(92) 99137-4260', site: 'https://www.jumaopera.com.br/' }, { nome: 'Blue Tree Premium Manaus', nota: 4.5, contato: '(92) 3303-2000', site: 'https://www.bluetree.com.br/' }] },
          ],
        },
        fotos: { label: 'Fotos' },
        avaliacoes: { label: 'Avaliações' },
      },
    }),
  },
  {
    id: 3,
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/am-an6.jpg', '/images/geral/am-an5.jpg'],
      galleryImages: [
        { src: '/images/geral/am-an6.jpg' }, { src: '/images/geral/am-an5.jpg' },
        { src: '/images/geral/Ana-Am.jpg' }, { src: '/images/geral/am-an1.jpg' },
        { src: '/images/geral/am-an2.jpg' }, { src: '/images/geral/am-an3.webp' },
        { src: '/images/geral/am-an4.jpg' },
      ],
      secoes: {
        sobre: {
          label: 'Sobre',
          titulo: 'O Maior Arquipélago Fluvial do Mundo',
          texto: 'O Arquipélago de Anavilhanas é um dos maiores arquipélagos fluviais do mundo, formado por mais de 400 ilhas, lagos e igarapés no Rio Negro, a cerca de 60 km de Manaus.',
          imagem: '/images/geral/Ana-Am.jpg',
          lista: ['Localização: Rio Negro, a 60 km de Manaus.', 'Área: Mais de 350.000 hectares de floresta e rios.', 'Destaque: Mais de 400 ilhas, lagos e igarapés.'],
        },
        biodiversidade: {
          label: 'Biodiversidade',
          titulo: 'Um Santuário da Vida Amazônica',
          texto: 'O Parque Nacional de Anavilhanas abriga uma das maiores diversidades biológicas do planeta.',
          imagem: '/images/geral/am-an1.jpg',
          subsecoes: [
            { titulo: 'Fauna Aquática', texto: 'O Rio Negro abriga mais de 700 espécies de peixes, incluindo o tucunaré, o tambaqui e o pirarucu.' },
            { titulo: 'Aves e Mamíferos', texto: 'O parque é um paraíso para observadores de aves, com mais de 500 espécies registradas.' },
            { titulo: 'Floresta de Igapó', texto: 'Durante a cheia do Rio Negro, a floresta de igapó fica completamente submersa, criando um cenário surreal.' },
          ],
        },
        visita: {
          label: 'Visite',
          titulo: 'Como Explorar Anavilhanas',
          texto: 'O Arquipélago de Anavilhanas pode ser explorado a partir de Manaus ou da cidade de Novo Airão.',
          imagem: '/images/geral/am-an3.webp',
          subsecoes: [
            { titulo: 'Como Chegar', texto: 'De Manaus, siga pela AM-352 até Novo Airão (180 km, aprox. 3h).' },
            { titulo: 'Melhor Época', texto: 'De junho a novembro, na vazante, as praias fluviais aparecem.' },
            { titulo: 'Passeios Disponíveis', texto: 'Passeios de barco, canoagem, observação de botos, trilhas ecológicas e pesca esportiva.' },
          ],
          recomendacoes: [
            { titulo: 'Operadoras de Turismo', itens: [{ nome: 'Anavilhanas Jungle Lodge', nota: 4.9, contato: '(92) 3365-1180', site: 'https://www.anavilhanaslodge.com/' }] },
          ],
        },
        fotos: { label: 'Fotos' },
        avaliacoes: { label: 'Avaliações' },
      },
    }),
  },
  {
    id: 4,
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/restama1.jpg', '/images/geral/amre-am1.jpg'],
      galleryImages: [
        { src: '/images/geral/restama1.jpg' }, { src: '/images/geral/amre-am1.jpg' },
        { src: '/images/geral/amre-am2.jpg' }, { src: '/images/geral/amre-am3.jpg' },
        { src: '/images/geral/amre-am4.jpg' }, { src: '/images/geral/amre-am5.jpg' },
        { src: '/images/geral/amre-am6.jpg' }, { src: '/images/geral/amre-am7.jpg' },
        { src: '/images/geral/amre-am8.jpg' },
      ],
      secoes: {
        sobre: {
          label: 'Sobre',
          titulo: 'Uma Experiência Gastronômica Singular',
          texto: 'O Amazônico Peixaria Regional é um dos restaurantes mais autênticos de Manaus, localizado no coração do Largo de São Sebastião, em frente ao Teatro Amazonas.',
          imagem: '/images/geral/amre-am2.jpg',
          lista: ['Localização: Largo de São Sebastião, em frente ao Teatro Amazonas.', 'Especialidade: Peixes frescos dos rios amazônicos.', 'Destaque: Ingredientes nativos e temperos da floresta.'],
        },
        cardapio: {
          label: 'Cardápio',
          titulo: 'Os Sabores da Floresta',
          texto: 'O cardápio do Amazônico Peixaria Regional é uma viagem pelos sabores únicos da Amazônia.',
          imagem: '/images/geral/amre-am3.jpg',
          subsecoes: [
            { titulo: 'Peixes da Amazônia', texto: 'Tambaqui assado na brasa, pirarucu de casaca, tucunaré ao molho de tucumã e filhote grelhado.' },
            { titulo: 'Entradas e Petiscos', texto: 'Caldeirado de peixe, ceviche amazônico, bolinho de tambaqui e tacacá servido em cuia.' },
            { titulo: 'Sobremesas Regionais', texto: 'Mousse de cupuaçu, sorvete de tucumã, pudim de açaí e torta de bacuri.' },
          ],
        },
        visita: {
          label: 'Visite',
          titulo: 'Como Chegar e Reservar',
          texto: 'O Amazônico Peixaria Regional está na Praça São Sebastião, no centro histórico de Manaus.',
          imagem: '/images/geral/amre-am6.jpg',
          subsecoes: [
            { titulo: 'Horários', texto: 'Terça a domingo, das 11h30 às 15h e das 18h às 23h.' },
            { titulo: 'Como Chegar', texto: 'Localizado na Praça São Sebastião, acessível de táxi ou a pé do Teatro Amazonas.' },
          ],
          recomendacoes: [
            { titulo: 'Atrações Próximas', itens: [{ nome: 'Teatro Amazonas', nota: 4.7, contato: '(92) 3232-1768', site: 'https://www.teatroamazonas.com.br/' }] },
          ],
        },
        fotos: { label: 'Fotos' },
        avaliacoes: { label: 'Avaliações' },
      },
    }),
  },
  {
    id: 5,
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/bum-Am.jpeg', '/images/geral/am-bun10.jpg'],
      galleryImages: [
        { src: '/images/geral/bum-Am.jpeg' }, { src: '/images/geral/pam.jpg' },
        { src: '/images/geral/am-bun1.avif' }, { src: '/images/geral/am-bun2.jpeg' },
        { src: '/images/geral/am-bun3.jpeg' }, { src: '/images/geral/am-bun4.jpeg' },
        { src: '/images/geral/am-bun5.jpg' }, { src: '/images/geral/am-bun6.jpeg' },
        { src: '/images/geral/am-bun7.webp' },
      ],
      secoes: {
        historia: {
          label: 'A História',
          titulo: 'A Arena do Maior Espetáculo da Amazônia',
          texto: 'O Bumbódromo de Parintins é o palco do maior festival folclórico do Brasil. Inaugurado em 1988, tem capacidade para mais de 35 mil pessoas.',
          imagem: '/images/geral/am-bun1.avif',
          lista: ['Inauguração: 1988.', 'Capacidade: Mais de 35.000 espectadores por noite.', 'Formato: Projetado em forma de cabeça de boi.'],
        },
        festival: {
          label: 'O Festival',
          titulo: 'Garantido x Caprichoso: Uma Guerra de Cores',
          texto: 'Durante três noites na última semana de junho, o Bumbódromo se divide: um lado vermelho do Boi Garantido, o outro azul do Boi Caprichoso.',
          imagem: '/images/geral/pam.jpg',
          subsecoes: [
            { titulo: 'Boi Garantido', texto: 'Fundado em 1913, tem o coração como símbolo e o vermelho como cor.' },
            { titulo: 'Boi Caprichoso', texto: 'Fundado em 1913, tem a estrela como símbolo e o azul como cor.' },
            { titulo: 'Os Personagens', texto: 'Pajé, Cunhã-Poranga, Levantador de Toadas, Pai Francisco e Mãe Catirina.' },
          ],
        },
        visita: {
          label: 'Visite',
          titulo: 'Como Chegar e Viver o Festival',
          texto: 'Parintins fica a cerca de 420 km de Manaus, acessível por barco ou avião.',
          imagem: '/images/geral/am-bun5.jpg',
          subsecoes: [
            { titulo: 'Como Chegar', texto: 'De Manaus, por avião (~1h) ou barco (18 a 24 horas pelo Rio Amazonas).' },
            { titulo: 'Ingressos', texto: 'Os preços variam de R$ 200 a R$ 2.000 dependendo do setor.' },
          ],
          recomendacoes: [
            { titulo: 'Hospedagem', itens: [{ nome: 'Hotel Uiara', nota: 4.3, contato: '(92) 3533-2592', site: 'https://www.booking.com/city/br/parintins.html' }] },
          ],
        },
        fotos: { label: 'Fotos' },
        avaliacoes: { label: 'Avaliações' },
      },
    }),
  },
  {
    id: 6,
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/ca-Am.jpg', '/images/geral/am-cs13.avif'],
      galleryImages: [
        { src: '/images/geral/ca-Am.jpg' }, { src: '/images/geral/am-cs13.avif' },
        { src: '/images/geral/am-cs1.jpg' }, { src: '/images/geral/am-cs2.jpg' },
        { src: '/images/geral/am-cs3.jpg' }, { src: '/images/geral/am-cs4.jpg' },
        { src: '/images/geral/am-cs10.webp' }, { src: '/images/geral/am-cs7.jpg' },
        { src: '/images/geral/am-cs12.jpg' },
      ],
      secoes: {
        sobre: {
          label: 'Sobre',
          titulo: 'A Joia Escondida da Amazônia',
          texto: 'A Cachoeira do Santuário é uma das mais belas quedas d\'água da região amazônica, localizada em Presidente Figueiredo, a apenas 107 km de Manaus.',
          imagem: '/images/geral/am-cs1.jpg',
          lista: ['Localização: Presidente Figueiredo, a 107 km de Manaus.', 'Acesso: Trilha de aproximadamente 1,5 km.', 'Destaque: Piscinas naturais ideais para banho.'],
        },
        natureza: {
          label: 'Natureza',
          titulo: 'Um Espetáculo de Água e Floresta',
          texto: 'Presidente Figueiredo abriga mais de 100 cachoeiras catalogadas.',
          imagem: '/images/geral/am-cs2.jpg',
          subsecoes: [
            { titulo: 'As Piscinas Naturais', texto: 'As piscinas formadas pela cachoeira têm águas transparentes e temperatura agradável, ideais para banho.' },
            { titulo: 'A Trilha', texto: 'O acesso é feito por uma trilha de aproximadamente 1,5 km em meio à floresta amazônica.' },
            { titulo: 'Fauna e Flora', texto: 'Ao longo da trilha é possível avistar tucanos, araras, macacos e espécies de plantas endêmicas.' },
          ],
        },
        visita: {
          label: 'Visite',
          titulo: 'Como Chegar e Aproveitar',
          texto: 'A Cachoeira do Santuário é acessível a partir de Manaus pela AM-010.',
          imagem: '/images/geral/am-cs10.webp',
          subsecoes: [
            { titulo: 'Como Chegar', texto: 'De Manaus, siga pela AM-010 por aproximadamente 107 km até Presidente Figueiredo.' },
            { titulo: 'Melhor Época', texto: 'De junho a novembro, na seca, as trilhas ficam mais acessíveis.' },
          ],
          recomendacoes: [
            { titulo: 'Onde Ficar', itens: [{ nome: 'Pousada das Cachoeiras', nota: 4.5, contato: '(92) 3324-1100', site: 'https://www.booking.com/city/br/presidente-figueiredo.html' }] },
          ],
        },
        fotos: { label: 'Fotos' },
        avaliacoes: { label: 'Avaliações' },
      },
    }),
  },
  {
    id: 7,
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/res-Am.jpg', '/images/geral/am-cp3.jpg'],
      galleryImages: [
        { src: '/images/geral/res-Am.jpg' }, { src: '/images/geral/am-cp3.jpg' },
        { src: '/images/geral/am-cp1.jpg' }, { src: '/images/geral/am-cp4.jpeg' },
        { src: '/images/geral/am-cp5.jpg' }, { src: '/images/geral/am-cp6.jpg' },
        { src: '/images/geral/am-cp8.jpg' }, { src: '/images/geral/am-cp9.jpg' },
        { src: '/images/geral/am-cp10.jpg' }, { src: '/images/geral/am-cp11.jpg' },
      ],
      secoes: {
        sobre: {
          label: 'Sobre',
          titulo: 'Sabores Amazônicos com Alma de Café',
          texto: 'O Coreto Peixaria & Café Regional une a tradição da peixaria amazônica com o aconchego de um café regional.',
          imagem: '/images/geral/am-cp1.jpg',
          lista: ['Localização: Manaus — AM.', 'Especialidade: Peixes frescos e café regional.', 'Diferencial: Fusão entre peixaria tradicional e café amazônico.'],
        },
        cardapio: {
          label: 'Cardápio',
          titulo: 'Da Floresta para a Mesa',
          texto: 'Cada prato é preparado com ingredientes frescos e técnicas tradicionais.',
          imagem: '/images/geral/am-cp4.jpeg',
          subsecoes: [
            { titulo: 'Peixes da Amazônia', texto: 'Tambaqui assado na brasa, pirarucu de casaca, tucunaré ao molho de tucumã.' },
            { titulo: 'Café e Bebidas Regionais', texto: 'Suco de cupuaçu, caldo de cana, água de coco fresco e café coado na cuia.' },
            { titulo: 'Sobremesas Regionais', texto: 'Mousse de cupuaçu, sorvete de tucumã, pudim de açaí e torta de bacuri.' },
          ],
        },
        visita: {
          label: 'Visite',
          titulo: 'Como Chegar e Reservar',
          texto: 'O Coreto está localizado em Manaus, de fácil acesso pelo centro da cidade.',
          imagem: '/images/geral/am-cp9.jpg',
          subsecoes: [
            { titulo: 'Horários', texto: 'Terça a domingo, das 11h30 às 15h e das 18h às 23h.' },
            { titulo: 'Reservas', texto: 'Reservas pelo telefone (92) 3307-1052.' },
          ],
          recomendacoes: [
            { titulo: 'Atrações Próximas', itens: [{ nome: 'Teatro Amazonas', nota: 4.9, contato: '(92) 3622-1880', site: 'https://www.teatroamazonas.com.br/' }] },
          ],
        },
        fotos: { label: 'Fotos' },
        avaliacoes: { label: 'Avaliações' },
      },
    }),
  },
  {
    id: 8,
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/pn-Am.jpg', '/images/geral/am-pn7.jpeg'],
      galleryImages: [
        { src: '/images/geral/pn-Am.jpg' }, { src: '/images/geral/am-pn7.jpeg' },
        { src: '/images/geral/am-pn2.jpg' }, { src: '/images/geral/am-pn3.jpg' },
        { src: '/images/geral/am-pn4.jpg' }, { src: '/images/geral/am-pn5.jpg' },
        { src: '/images/geral/am-pn8.jpg' }, { src: '/images/geral/am-pn6.jpg' },
        { src: '/images/geral/am-pn9.jpeg' },
      ],
      secoes: {
        sobre: {
          label: 'Sobre',
          titulo: 'A Ponte que Une o Amazonas',
          texto: 'A Ponte Rio Negro, com 3,5 km de extensão, conecta Manaus a Iranduba, cruzando o majestoso Rio Negro. Inaugurada em 2011.',
          imagem: '/images/geral/am-pn2.jpg',
          lista: ['Extensão: 3,5 km sobre o Rio Negro.', 'Inauguração: 24 de outubro de 2011.', 'Tipo: Ponte estaiada — a maior da América Latina em seu tipo.'],
        },
        engenharia: {
          label: 'Engenharia',
          titulo: 'Uma Obra Monumental',
          texto: 'A Ponte Rio Negro é um marco da engenharia brasileira, desafiando as condições extremas da Amazônia.',
          imagem: '/images/geral/am-pn3.jpg',
          subsecoes: [
            { titulo: 'Estrutura Estaiada', texto: 'As duas torres principais têm 80 metros de altura e são visíveis de vários pontos de Manaus.' },
            { titulo: 'Desafios da Amazônia', texto: 'O rio tem variação de nível de até 14 metros entre a cheia e a seca.' },
            { titulo: 'Impacto Regional', texto: 'Antes da ponte, a travessia era feita apenas por balsa. Com a ponte, o trajeto é feito em menos de 5 minutos.' },
          ],
        },
        visita: {
          label: 'Visite',
          titulo: 'Como Chegar e o Que Ver',
          texto: 'A Ponte Rio Negro pode ser apreciada de vários ângulos — de dentro do carro, das margens ou de barco.',
          imagem: '/images/geral/am-pn8.jpg',
          subsecoes: [
            { titulo: 'Como Chegar', texto: 'A ponte está na saída de Manaus pela AM-070.' },
            { titulo: 'Melhor Horário', texto: 'O pôr do sol é o momento mais fotogênico.' },
          ],
          recomendacoes: [
            { titulo: 'Atrações Próximas', itens: [{ nome: 'Encontro das Águas', nota: 4.9, contato: 'Operadoras de turismo', site: 'https://www.amazonastur.am.gov.br/' }, { nome: 'Teatro Amazonas', nota: 4.9, contato: '(92) 3622-1880', site: 'https://www.teatroamazonas.com.br/' }] },
          ],
        },
        fotos: { label: 'Fotos' },
        avaliacoes: { label: 'Avaliações' },
      },
    }),
  },
];

async function popular() {
  for (const local of locais) {
    const atual = await fetch(`${API}/api/locais/${local.id}`).then(r => r.json());
    const body = { ...atual, informacoesAdicionais: local.informacoesAdicionais };
    const res = await fetch(`${API}/api/locais/${local.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const json = await res.json();
    console.log(`id=${local.id} ${res.ok ? '✅' : '❌'} ${json.nome || json.error}`);
  }
}

popular();
