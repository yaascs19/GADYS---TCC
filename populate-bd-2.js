const API = 'https://gadys-backend.onrender.com';

const locais = [
  // CEARÁ
  {
    id: 23,
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/Ceara1.webp', '/images/geral/Ceara2.webp'],
      galleryImages: [{ src: '/images/geral/Ceara1.webp' }, { src: '/images/geral/Ceara2.webp' }, { src: '/images/geral/Ceara3.jpg' }],
      secoes: {
        sobre: { label: 'Sobre', titulo: 'O Paraíso Escondido do Brasil', texto: 'Jericoacoara, carinhosamente chamada de "Jeri", é uma vila paradisíaca encravada entre dunas, lagoas e o mar. Considerada uma das praias mais bonitas do mundo.', imagem: '/images/geral/Ceara1.webp', lista: ['Localização: Jijoca de Jericoacoara, a 300 km de Fortaleza.', 'Destaque: Pôr do sol na Pedra Furada.', 'Esportes: Kitesurf e windsurf entre os melhores do planeta.'] },
        experiencias: { label: 'Experiências', titulo: 'Viva Jeri ao Máximo', texto: 'Jericoacoara oferece experiências únicas para todos os perfis de viajante.', imagem: '/images/geral/Ceara2.webp', subsecoes: [{ titulo: 'Lagoa do Paraíso', texto: 'Lagoas de água doce cristalina, perfeitas para um mergulho refrescante.' }, { titulo: 'Kitesurf e Windsurf', texto: 'Os ventos constantes tornaram Jeri um dos melhores destinos do mundo.' }, { titulo: 'Dunas e Pôr do Sol', texto: 'Subir a Duna do Pôr do Sol para assistir ao espetáculo diário é um ritual sagrado em Jeri.' }] },
        visita: { label: 'Visite', titulo: 'Como Chegar e Se Hospedar', texto: 'Chegar a Jericoacoara faz parte da aventura. O acesso é feito por veículos 4x4 ou buggys.', imagem: '/images/geral/Ceara3.jpg', subsecoes: [{ titulo: 'Como Chegar', texto: 'De Fortaleza, ônibus ou van até Jijoca (4h). De lá, 4x4s pelas dunas até a vila.' }, { titulo: 'Melhor Época', texto: 'De julho a dezembro, ventos mais fortes — ideal para kitesurf.' }], recomendacoes: [{ titulo: 'Onde Comer', itens: [{ nome: 'Restaurante Estoril', nota: 4.8, contato: '(88) 3669-2066', site: 'https://www.instagram.com/estoril.jeri/' }] }, { titulo: 'Onde Ficar', itens: [{ nome: 'Vila Kalango', nota: 4.9, contato: '(88) 3669-2289', site: 'https://www.vilakalango.com.br/' }] }] },
        fotos: { label: 'Fotos' },
      },
    }),
  },
  {
    id: 24,
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/Ceara2.webp', '/images/geral/Ceara3.jpg'],
      galleryImages: [{ src: '/images/geral/Ceara2.webp' }, { src: '/images/geral/Ceara3.jpg' }, { src: '/images/geral/Ceara1.webp' }],
      secoes: {
        sobre: { label: 'Sobre', titulo: 'As Falésias Vermelhas do Ceará', texto: 'Canoa Quebrada é uma das praias mais famosas do Nordeste brasileiro. Suas imponentes falésias de arenito vermelho contrastam com a areia branca e o mar azul-turquesa.', imagem: '/images/geral/Ceara2.webp', lista: ['Localização: Aracati, a 164 km de Fortaleza.', 'Símbolo: A lua e a estrela esculpidas nas falésias.', 'Destaque: A Broadway, rua principal com bares e restaurantes.'] },
        experiencias: { label: 'Experiências', titulo: 'O Que Fazer em Canoa Quebrada', texto: 'De passeios de buggy pelas falésias a noites animadas na Broadway.', imagem: '/images/geral/Ceara3.jpg', subsecoes: [{ titulo: 'Passeio de Buggy', texto: 'Os buggys percorrem as falésias e praias vizinhas.' }, { titulo: 'A Broadway', texto: 'A rua principal com bares, restaurantes e música ao vivo.' }, { titulo: 'Esportes Aquáticos', texto: 'Kitesurf, windsurf e stand-up paddle disponíveis na praia.' }] },
        visita: { label: 'Visite', titulo: 'Planeje Sua Visita', texto: 'Canoa Quebrada é acessível e bem estruturada para receber turistas.', imagem: '/images/geral/Ceara1.webp', subsecoes: [{ titulo: 'Como Chegar', texto: 'De Fortaleza, ônibus até Aracati (2h30), depois van até a praia.' }, { titulo: 'Melhor Época', texto: 'De julho a dezembro é a alta temporada.' }], recomendacoes: [{ titulo: 'Onde Comer', itens: [{ nome: 'Restaurante Bucaneiro', nota: 4.7, contato: '(88) 3421-7016', site: 'https://www.instagram.com/bucaneiro.cq/' }] }, { titulo: 'Onde Ficar', itens: [{ nome: 'Pousada Lua Estrela', nota: 4.8, contato: '(88) 3421-7055', site: 'https://www.instagram.com/pousadaluaestrela/' }] }] },
        fotos: { label: 'Fotos' },
      },
    }),
  },
  {
    id: 25,
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/CearaInicio.jpg', '/images/geral/ceara.webp'],
      galleryImages: [{ src: '/images/geral/CearaInicio.jpg' }, { src: '/images/geral/ceara.webp' }, { src: '/images/geral/Ceara3.jpg' }],
      secoes: {
        sobre: { label: 'Sobre', titulo: 'Arte e Cultura no Coração de Fortaleza', texto: 'O Centro Cultural Dragão do Mar é o maior complexo cultural do Ceará. Inaugurado em 1999, homenageia Francisco José do Nascimento, o "Dragão do Mar".', imagem: '/images/geral/CearaInicio.jpg', lista: ['Localização: Praia de Iracema, Fortaleza.', 'Inauguração: 1999.', 'Destaques: Museu de Arte Contemporânea, Planetário e Memorial da Cultura Cearense.'] },
        experiencias: { label: 'Experiências', titulo: 'O Que Explorar no Dragão do Mar', texto: 'O complexo oferece programação cultural intensa e diversificada.', imagem: '/images/geral/ceara.webp', subsecoes: [{ titulo: 'MAC Ceará', texto: 'Exposições permanentes e temporárias de artistas locais e internacionais.' }, { titulo: 'Planetário', texto: 'Um dos mais modernos do Brasil, com sessões de astronomia.' }, { titulo: 'Teatro e Anfiteatro', texto: 'Shows, peças teatrais e festivais culturais durante todo o ano.' }] },
        visita: { label: 'Visite', titulo: 'Como Visitar', texto: 'Localizado na Praia de Iracema, com fácil acesso por transporte público.', imagem: '/images/geral/Ceara3.jpg', subsecoes: [{ titulo: 'Horários', texto: 'Terça a domingo, das 10h às 21h30. Entrada gratuita nos espaços externos.' }, { titulo: 'Como Chegar', texto: 'Rua Dragão do Mar, 81, Praia de Iracema. Metrô estação José de Alencar.' }], recomendacoes: [{ titulo: 'Onde Comer', itens: [{ nome: 'Restaurante Colher de Pau', nota: 4.8, contato: '(85) 3219-3773', site: 'https://www.colherdepau.com.br/' }] }, { titulo: 'Onde Ficar', itens: [{ nome: 'Gran Marquise Hotel', nota: 4.8, contato: '(85) 3466-5000', site: 'https://www.granmarquise.com.br/' }] }] },
        fotos: { label: 'Fotos' },
      },
    }),
  },
  {
    id: 26,
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/ceara.webp', '/images/geral/Ceara1.webp'],
      galleryImages: [{ src: '/images/geral/ceara.webp' }, { src: '/images/geral/Ceara1.webp' }, { src: '/images/geral/Ceara2.webp' }],
      secoes: {
        sobre: { label: 'Sobre', titulo: 'Diversão Sem Limites no Ceará', texto: 'O Beach Park é o maior parque aquático da América Latina. Localizado em Aquiraz, a 27 km de Fortaleza.', imagem: '/images/geral/ceara.webp', lista: ['Localização: Aquiraz, a 27 km de Fortaleza.', 'Área: Mais de 70.000 m².', 'Destaque: Insano, o toboágua mais alto do mundo por anos.'] },
        experiencias: { label: 'Experiências', titulo: 'Adrenalina e Diversão para Todos', texto: 'Com mais de 20 atrações aquáticas para todas as idades.', imagem: '/images/geral/Ceara1.webp', subsecoes: [{ titulo: 'Insano', texto: 'Com 41 metros de altura, foi por anos o toboágua mais alto do mundo.' }, { titulo: 'Área Infantil', texto: 'Acqua Kids com toboáguas menores e piscinas rasas.' }, { titulo: 'Praia Privativa', texto: 'Cadeiras, guarda-sóis e serviço de praia completo.' }] },
        visita: { label: 'Visite', titulo: 'Planeje Seu Dia', texto: 'Para aproveitar ao máximo, chegue cedo.', imagem: '/images/geral/Ceara2.webp', subsecoes: [{ titulo: 'Ingressos', texto: 'Quarta a domingo, das 11h às 17h. A partir de R$ 180.' }, { titulo: 'Como Chegar', texto: 'Ônibus do Terminal Papicu ou carro pela CE-040.' }], recomendacoes: [{ titulo: 'Onde Ficar', itens: [{ nome: 'Beach Park Suites Resort', nota: 4.8, contato: '(85) 4012-3000', site: 'https://www.beachpark.com.br/' }] }] },
        fotos: { label: 'Fotos' },
      },
    }),
  },
  {
    id: 27,
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/Ceara3.jpg', '/images/geral/Ceara2.webp'],
      galleryImages: [{ src: '/images/geral/Ceara3.jpg' }, { src: '/images/geral/Ceara2.webp' }, { src: '/images/geral/ceara.webp' }],
      secoes: {
        sobre: { label: 'Sobre', titulo: 'O Coração das Praias de Fortaleza', texto: 'A Praia do Futuro é a mais popular e movimentada de Fortaleza. Com 8 km de extensão, águas mornas e barracas estruturadas.', imagem: '/images/geral/Ceara3.jpg', lista: ['Localização: Zona Leste de Fortaleza.', 'Extensão: 8 km de praia.', 'Destaque: Barracas de frutos do mar com música ao vivo.'] },
        experiencias: { label: 'Experiências', titulo: 'Um Dia Perfeito na Praia do Futuro', texto: 'As barracas são verdadeiros complexos de lazer com piscinas e shows.', imagem: '/images/geral/Ceara2.webp', subsecoes: [{ titulo: 'As Barracas Famosas', texto: 'Chico do Caranguejo, Crocobeach e Barraca do Meio são as mais tradicionais.' }, { titulo: 'Esportes', texto: 'Vôlei, futebol, stand-up paddle e natação.' }, { titulo: 'Gastronomia', texto: 'Caranguejos, lagostas, camarões e peixes frescos.' }] },
        visita: { label: 'Visite', titulo: 'Como Aproveitar', texto: 'Acessível e bem estruturada.', imagem: '/images/geral/ceara.webp', subsecoes: [{ titulo: 'Como Chegar', texto: 'Ônibus pela Av. Zezé Diogo ou carro pela Av. Dioguinho.' }, { titulo: 'Melhor Horário', texto: 'Pela manhã o mar é mais calmo; à tarde as barracas ficam mais animadas.' }], recomendacoes: [{ titulo: 'Barracas', itens: [{ nome: 'Chico do Caranguejo', nota: 4.8, contato: '(85) 3262-0022', site: 'https://www.chicdocaranguejo.com.br/' }, { nome: 'Crocobeach', nota: 4.7, contato: '(85) 3234-4444', site: 'https://www.crocobeach.com.br/' }] }] },
        fotos: { label: 'Fotos' },
      },
    }),
  },
  {
    id: 28,
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/Ceara1.webp', '/images/geral/CearaInicio.jpg'],
      galleryImages: [{ src: '/images/geral/Ceara1.webp' }, { src: '/images/geral/CearaInicio.jpg' }, { src: '/images/geral/ceara.webp' }],
      secoes: {
        sobre: { label: 'Sobre', titulo: 'O Oásis Verde do Ceará', texto: 'A Serra de Baturité é um verdadeiro oásis no semiárido cearense. Com altitude de até 1.114 metros e temperaturas que raramente ultrapassam 25°C.', imagem: '/images/geral/Ceara1.webp', lista: ['Localização: A 100 km de Fortaleza.', 'Altitude: Até 1.114 metros no Pico Alto.', 'Clima: Entre 18°C e 25°C durante todo o ano.'] },
        experiencias: { label: 'Experiências', titulo: 'Natureza e Cultura na Serra', texto: 'Combinação única de ecoturismo, gastronomia e cultura caipira cearense.', imagem: '/images/geral/CearaInicio.jpg', subsecoes: [{ titulo: 'Cachoeiras e Trilhas', texto: 'Cachoeira do Pinga e Cachoeira do Urubu, com rica biodiversidade.' }, { titulo: 'Rota do Café', texto: 'Fazendas históricas com visitas guiadas e degustação de café de altitude.' }, { titulo: 'Guaramiranga', texto: 'A "Suíça Cearense", sede do Festival de Jazz e Blues.' }] },
        visita: { label: 'Visite', titulo: 'Como Visitar', texto: 'Destino de fim de semana perfeito para quem está em Fortaleza.', imagem: '/images/geral/ceara.webp', subsecoes: [{ titulo: 'Como Chegar', texto: 'BR-222 até Pacatuba, depois CE-065 até Baturité (1h30).' }, { titulo: 'Melhor Época', texto: 'De fevereiro a maio, vegetação mais verde e cachoeiras mais cheias.' }], recomendacoes: [{ titulo: 'Onde Ficar', itens: [{ nome: 'Pousada Recanto da Serra', nota: 4.7, contato: '(85) 3325-1111', site: 'https://www.instagram.com/' }] }] },
        fotos: { label: 'Fotos' },
      },
    }),
  },
  {
    id: 29,
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/Ceara2.webp', '/images/geral/Ceara3.jpg'],
      galleryImages: [{ src: '/images/geral/Ceara2.webp' }, { src: '/images/geral/Ceara3.jpg' }, { src: '/images/geral/Ceara1.webp' }],
      secoes: {
        sobre: { label: 'Sobre', titulo: 'O Tesouro Paleontológico do Brasil', texto: 'A Chapada do Araripe é um planalto sedimentar com altitude média de 900 metros, com importantes sítios paleontológicos e fontes de água cristalina.', imagem: '/images/geral/Ceara2.webp', lista: ['Localização: Crato e Juazeiro do Norte, sul do Ceará.', 'Altitude: Média de 900 metros.', 'Destaque: Geopark Araripe, primeiro geopark das Américas reconhecido pela UNESCO.'] },
        experiencias: { label: 'Experiências', titulo: 'Natureza e Ciência', texto: 'Beleza natural, história geológica e espiritualidade em um destino único.', imagem: '/images/geral/Ceara3.jpg', subsecoes: [{ titulo: 'Fontes e Balneários', texto: 'Fonte do Caldas, Bica do Ipu e Balneário do Caldas.' }, { titulo: 'Geopark Araripe', texto: 'Museu de Paleontologia de Santana do Cariri com fósseis únicos.' }, { titulo: 'Juazeiro do Norte', texto: 'Centro de peregrinação com o Memorial Padre Cícero.' }] },
        visita: { label: 'Visite', titulo: 'Como Visitar', texto: 'Acessível a partir de Crato ou Juazeiro do Norte.', imagem: '/images/geral/Ceara1.webp', subsecoes: [{ titulo: 'Como Chegar', texto: 'Voos e ônibus para Juazeiro do Norte (6h de ônibus).' }, { titulo: 'Melhor Época', texto: 'De maio a setembro, período seco ideal para trilhas.' }], recomendacoes: [{ titulo: 'Onde Ficar', itens: [{ nome: 'Hotel Panorama Juazeiro', nota: 4.6, contato: '(88) 3512-1000', site: 'https://www.instagram.com/' }] }] },
        fotos: { label: 'Fotos' },
      },
    }),
  },
  {
    id: 30,
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/ceara.webp', '/images/geral/CearaInicio.jpg'],
      galleryImages: [{ src: '/images/geral/ceara.webp' }, { src: '/images/geral/CearaInicio.jpg' }, { src: '/images/geral/Ceara3.jpg' }],
      secoes: {
        sobre: { label: 'Sobre', titulo: 'A Alma Histórica de Fortaleza', texto: 'O Centro Histórico de Fortaleza concentra os principais monumentos, igrejas e mercados da cidade.', imagem: '/images/geral/ceara.webp', lista: ['Localização: Centro de Fortaleza.', 'Destaque: Theatro José de Alencar.', 'Compras: Mercado Central com artesanato e produtos típicos.'] },
        experiencias: { label: 'Experiências', titulo: 'O Que Explorar no Centro', texto: 'Roteiro cultural completo com monumentos, museus e gastronomia.', imagem: '/images/geral/CearaInicio.jpg', subsecoes: [{ titulo: 'Theatro José de Alencar', texto: 'Inaugurado em 1910, obra-prima do Art Nouveau com estrutura metálica importada da Escócia.' }, { titulo: 'Mercado Central', texto: 'Com mais de 600 boxes, o maior mercado de artesanato do Ceará.' }, { titulo: 'Catedral Metropolitana', texto: 'Imponente templo neogótico na Praça da Sé.' }] },
        visita: { label: 'Visite', titulo: 'Como Explorar', texto: 'Melhor explorado a pé.', imagem: '/images/geral/Ceara3.jpg', subsecoes: [{ titulo: 'Roteiro', texto: 'Praça do Ferreira → Theatro → Catedral → Mercado Central → Dragão do Mar.' }, { titulo: 'Como Chegar', texto: 'Metrô estações José de Alencar ou Colégio Militar.' }], recomendacoes: [{ titulo: 'Onde Comer', itens: [{ nome: 'Restaurante Colher de Pau', nota: 4.8, contato: '(85) 3219-3773', site: 'https://www.colherdepau.com.br/' }] }, { titulo: 'Onde Ficar', itens: [{ nome: 'Gran Marquise Hotel', nota: 4.8, contato: '(85) 3466-5000', site: 'https://www.granmarquise.com.br/' }] }] },
        fotos: { label: 'Fotos' },
      },
    }),
  },
  // NORTE
  {
    id: 36,
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/amazonas1.avif', '/images/geral/amazonas2.jpg'],
      galleryImages: [{ src: '/images/geral/amazonas1.avif' }, { src: '/images/geral/amazonas2.jpg' }, { src: '/images/geral/amazonas3.1.jpg' }],
      secoes: {
        sobre: { label: 'Sobre', titulo: 'O Último Paraíso Intocado do Acre', texto: 'O Parque Estadual Chandless tem mais de 695.000 hectares de floresta amazônica primária, localizado no extremo sul do Acre, na fronteira com o Peru.', imagem: '/images/geral/amazonas1.avif', lista: ['Área: 695.303 hectares.', 'Localização: Santa Rosa do Purus, fronteira com o Peru.', 'Destaque: Um dos parques mais remotos e preservados do Brasil.'] },
        experiencias: { label: 'Experiências', titulo: 'Aventura na Floresta Primária', texto: 'Ecoturismo em uma das florestas mais remotas do Brasil.', imagem: '/images/geral/amazonas2.jpg', subsecoes: [{ titulo: 'Observação de Fauna', texto: 'Onças-pintadas, antas, ariranhas e centenas de espécies de aves.' }, { titulo: 'Passeios de Barco', texto: 'Os rios Chandless e Purus são as principais vias de acesso.' }, { titulo: 'Povos Indígenas', texto: 'Visitas guiadas a comunidades indígenas de contato.' }] },
        visita: { label: 'Visite', titulo: 'Como Visitar', texto: 'Acesso por via fluvial a partir de Rio Branco.', imagem: '/images/geral/amazonas3.1.jpg', subsecoes: [{ titulo: 'Como Chegar', texto: 'Voos fretados ou barcos pelo Rio Purus chegam a Santa Rosa do Purus.' }, { titulo: 'Melhor Época', texto: 'De junho a outubro, na estação seca.' }], recomendacoes: [{ titulo: 'Onde Ficar em Rio Branco', itens: [{ nome: 'Hotel Inácio Palace', nota: 4.6, contato: '(68) 3224-6300', site: 'https://www.instagram.com/' }] }] },
        fotos: { label: 'Fotos' },
      },
    }),
  },
  {
    id: 37,
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/amazonas2.jpg', '/images/geral/amazonas1.avif'],
      galleryImages: [{ src: '/images/geral/amazonas2.jpg' }, { src: '/images/geral/amazonas1.avif' }, { src: '/images/geral/oam.jpg' }],
      secoes: {
        sobre: { label: 'Sobre', titulo: 'A Alma Histórica de Rio Branco', texto: 'O Centro Histórico de Rio Branco concentra o Palácio Rio Branco, o Museu da Borracha e a Casa dos Povos da Floresta.', imagem: '/images/geral/amazonas2.jpg', lista: ['Destaque: Palácio Rio Branco.', 'Museu: Museu da Borracha.', 'Cultura: Casa dos Povos da Floresta.'] },
        experiencias: { label: 'Experiências', titulo: 'O Que Explorar no Centro', texto: 'Roteiro cultural completo.', imagem: '/images/geral/amazonas1.avif', subsecoes: [{ titulo: 'Museu da Borracha', texto: 'Preserva a memória do ciclo da borracha do século XIX.' }, { titulo: 'Palácio Rio Branco', texto: 'Arquitetura neoclássica com visitas guiadas em dias úteis.' }, { titulo: 'Calçadão da Gameleira', texto: 'Às margens do Rio Acre, com feiras de artesanato e pôr do sol.' }] },
        visita: { label: 'Visite', titulo: 'Como Explorar Rio Branco', texto: 'Cidade compacta e de fácil locomoção.', imagem: '/images/geral/oam.jpg', subsecoes: [{ titulo: 'Como Chegar', texto: 'Voos diretos de São Paulo, Brasília e Manaus.' }, { titulo: 'Melhor Época', texto: 'De junho a outubro, na estação seca.' }], recomendacoes: [{ titulo: 'Onde Ficar', itens: [{ nome: 'Hotel Inácio Palace', nota: 4.6, contato: '(68) 3224-6300', site: 'https://www.instagram.com/' }] }] },
        fotos: { label: 'Fotos' },
      },
    }),
  },
  {
    id: 38,
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/amazonas1.avif', '/images/geral/amazonas3.1.jpg'],
      galleryImages: [{ src: '/images/geral/amazonas1.avif' }, { src: '/images/geral/amazonas3.1.jpg' }, { src: '/images/geral/oam.jpg' }],
      secoes: {
        sobre: { label: 'Sobre', titulo: 'Guardiã da Fronteira Norte do Brasil', texto: 'A Fortaleza de São José de Macapá foi construída entre 1764 e 1782 para defender a fronteira norte do Brasil. Maior fortaleza da Amazônia brasileira.', imagem: '/images/geral/amazonas1.avif', lista: ['Construção: Entre 1764 e 1782.', 'Arquitetura: Planta estrelada com quatro baluartes.', 'Localização: Às margens do Rio Amazonas, em Macapá.'] },
        experiencias: { label: 'Experiências', titulo: 'Mergulhe na História Colonial', texto: 'Experiência única de imersão na história colonial da Amazônia.', imagem: '/images/geral/amazonas3.1.jpg', subsecoes: [{ titulo: 'Visita Guiada', texto: 'Guias conduzem pelos baluartes, casamatas e pátio central.' }, { titulo: 'Vista do Rio Amazonas', texto: 'Da muralha, vista deslumbrante do Rio Amazonas e ilha de Santana.' }, { titulo: 'Eventos Culturais', texto: 'Shows e festivais ao longo do ano, especialmente o Festival do Marabaixo.' }] },
        visita: { label: 'Visite', titulo: 'Como Visitar', texto: 'No centro histórico de Macapá, de fácil acesso.', imagem: '/images/geral/oam.jpg', subsecoes: [{ titulo: 'Horários', texto: 'Terça a domingo, das 9h às 18h. Entrada gratuita.' }, { titulo: 'Como Chegar', texto: 'Rua Cândido Mendes, centro de Macapá. A 500m do Marco Zero do Equador.' }], recomendacoes: [{ titulo: 'Onde Ficar', itens: [{ nome: 'Hotel Novotel Macapá', nota: 4.6, contato: '(96) 3198-3000', site: 'https://www.instagram.com/' }] }] },
        fotos: { label: 'Fotos' },
      },
    }),
  },
  {
    id: 39,
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/amazonas2.jpg', '/images/geral/oam.jpg'],
      galleryImages: [{ src: '/images/geral/amazonas2.jpg' }, { src: '/images/geral/oam.jpg' }, { src: '/images/geral/amazonas3.1.jpg' }],
      secoes: {
        sobre: { label: 'Sobre', titulo: 'A Ferrovia que Custou Vidas', texto: 'A Ferrovia do Diabo foi construída entre 1907 e 1912 para escoar borracha boliviana. Com 364 km, custou a vida de milhares de trabalhadores.', imagem: '/images/geral/amazonas2.jpg', lista: ['Construção: Entre 1907 e 1912.', 'Extensão: 364 km.', 'Trabalhadores: Mais de 6.000 mortes.'] },
        experiencias: { label: 'Experiências', titulo: 'Uma Viagem no Tempo', texto: 'O Museu Ferroviário de Porto Velho preserva locomotivas e a memória desta epopeia.', imagem: '/images/geral/oam.jpg', subsecoes: [{ titulo: 'Museu Ferroviário', texto: 'Locomotivas originais, vagões, ferramentas e documentos históricos.' }, { titulo: 'Passeio de Trem', texto: 'Em datas especiais, passeios em locomotivas restauradas.' }, { titulo: 'Orla do Rio Madeira', texto: 'Pôr do sol sobre o maior afluente do Rio Amazonas.' }] },
        visita: { label: 'Visite', titulo: 'Como Visitar', texto: 'Localizado na orla do Rio Madeira, Porto Velho.', imagem: '/images/geral/amazonas3.1.jpg', subsecoes: [{ titulo: 'Horários', texto: 'Terça a domingo, das 8h às 17h. Entrada gratuita.' }, { titulo: 'Como Chegar', texto: 'Av. Farquar, às margens do Rio Madeira, centro de Porto Velho.' }], recomendacoes: [{ titulo: 'Onde Ficar', itens: [{ nome: 'Hotel Vila Rica Porto Velho', nota: 4.6, contato: '(69) 3216-3000', site: 'https://www.instagram.com/' }] }] },
        fotos: { label: 'Fotos' },
      },
    }),
  },
  {
    id: 40,
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/oam.jpg', '/images/geral/amazonas1.avif'],
      galleryImages: [{ src: '/images/geral/oam.jpg' }, { src: '/images/geral/amazonas1.avif' }, { src: '/images/geral/amazonas2.jpg' }],
      secoes: {
        sobre: { label: 'Sobre', titulo: 'O Ponto Mais Alto do Brasil', texto: 'O Monte Roraima, com 2.875 metros, é o ponto mais alto do Brasil e uma das formações geológicas mais antigas do planeta, com mais de 1,8 bilhão de anos.', imagem: '/images/geral/oam.jpg', lista: ['Altitude: 2.875 metros.', 'Idade: Mais de 1,8 bilhão de anos.', 'Fronteira: Brasil, Venezuela e Guiana.'] },
        experiencias: { label: 'Experiências', titulo: 'O Trekking Mais Épico do Brasil', texto: 'Uma das aventuras mais épicas da América do Sul.', imagem: '/images/geral/amazonas1.avif', subsecoes: [{ titulo: 'Trekking ao Topo', texto: 'De 8 a 12 dias, com plantas carnívoras, cristais de quartzo e piscinas naturais no topo.' }, { titulo: 'Flora e Fauna Únicas', texto: 'Espécies endêmicas que não existem em nenhum outro lugar do planeta.' }, { titulo: 'Tríplice Fronteira', texto: 'Do topo, é possível ver Brasil, Venezuela e Guiana simultaneamente.' }] },
        visita: { label: 'Visite', titulo: 'Como Fazer o Trekking', texto: 'Exige planejamento, boa condição física e guia indígena obrigatório.', imagem: '/images/geral/amazonas2.jpg', subsecoes: [{ titulo: 'Como Chegar', texto: 'De Boa Vista, até Pacaraima (215 km) e depois Paraitepui (80 km de terra).' }, { titulo: 'Melhor Época', texto: 'De dezembro a abril, cachoeiras mais cheias. De maio a novembro, trilhas mais fáceis.' }], recomendacoes: [{ titulo: 'Agências de Trekking', itens: [{ nome: 'Roraima Adventures', nota: 4.9, contato: '(95) 9999-1234', site: 'https://www.instagram.com/' }] }] },
        fotos: { label: 'Fotos' },
      },
    }),
  },
  {
    id: 41,
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/amazonas3.1.jpg', '/images/geral/oam.jpg'],
      galleryImages: [{ src: '/images/geral/amazonas3.1.jpg' }, { src: '/images/geral/oam.jpg' }, { src: '/images/geral/amazonas1.avif' }],
      secoes: {
        sobre: { label: 'Sobre', titulo: 'O Deserto Dourado do Cerrado', texto: 'O Jalapão tem dunas de areia dourada que chegam a 40 metros, fervedouros de água cristalina, cachoeiras e serras. O capim dourado é a matéria-prima do artesanato mais famoso do Tocantins.', imagem: '/images/geral/amazonas3.1.jpg', lista: ['Área: 158.885 hectares.', 'Destaque: Fervedouros — nascentes que "fervem" de tão cristalinas.', 'Artesanato: Capim dourado, fibra exclusiva do Jalapão.'] },
        experiencias: { label: 'Experiências', titulo: 'Aventura no Coração do Cerrado', texto: 'Experiências únicas para os amantes da natureza e do ecoturismo.', imagem: '/images/geral/oam.jpg', subsecoes: [{ titulo: 'Fervedouros', texto: 'Nascentes com tanta pressão que parecem ferver. Sensação única de flutuação.' }, { titulo: 'Dunas de Areia', texto: 'Dunas de até 40 metros formadas pela areia do Rio Novo.' }, { titulo: 'Cachoeiras e Trilhas', texto: 'Cachoeira da Velha e Cachoeira do Formiga com guias especializados.' }] },
        visita: { label: 'Visite', titulo: 'Como Visitar', texto: 'Exige veículo 4x4 e guia credenciado.', imagem: '/images/geral/amazonas1.avif', subsecoes: [{ titulo: 'Como Chegar', texto: 'De Palmas, pela TO-010 até Mateiros (320 km, sendo 200 km de terra).' }, { titulo: 'Melhor Época', texto: 'De junho a setembro, na estação seca.' }], recomendacoes: [{ titulo: 'Agências', itens: [{ nome: 'Jalapão Ecoturismo', nota: 4.9, contato: '(63) 9999-1234', site: 'https://www.instagram.com/' }] }] },
        fotos: { label: 'Fotos' },
      },
    }),
  },
  // SUDESTE
  {
    id: 42,
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/monumentos/ouro.jpeg', '/images/monumentos/independencia.webp'],
      galleryImages: [{ src: '/images/monumentos/ouro.jpeg' }, { src: '/images/monumentos/independencia.webp' }, { src: '/images/monumentos/pala.jpeg' }],
      secoes: {
        sobre: { label: 'Sobre', titulo: 'A Capital do Ouro e da Inconfidência', texto: 'Ouro Preto foi a capital de Minas Gerais durante o ciclo do ouro. Tombada como Patrimônio Mundial da UNESCO em 1980.', imagem: '/images/monumentos/ouro.jpeg', lista: ['UNESCO: Patrimônio Mundial desde 1980.', 'Altitude: 1.179 metros.', 'Destaque: Igreja de São Francisco de Assis, obra-prima de Aleijadinho.'] },
        experiencias: { label: 'Experiências', titulo: 'O Que Explorar em Ouro Preto', texto: 'Um museu a céu aberto.', imagem: '/images/monumentos/independencia.webp', subsecoes: [{ titulo: 'Igrejas Barrocas', texto: 'Igreja de São Francisco de Assis e Igreja Nossa Senhora do Pilar, com 400 kg de ouro.' }, { titulo: 'Museu da Inconfidência', texto: 'História da Inconfidência Mineira de 1789 e os restos mortais de Tiradentes.' }, { titulo: 'Minas de Ouro', texto: 'Mina do Chico Rei e Mina da Passagem com visitas guiadas.' }] },
        visita: { label: 'Visite', titulo: 'Como Visitar Ouro Preto', texto: 'Acessível de Belo Horizonte e explorável a pé em 2 a 3 dias.', imagem: '/images/monumentos/pala.jpeg', subsecoes: [{ titulo: 'Como Chegar', texto: 'De Belo Horizonte, ônibus (2h) ou BR-356 de carro.' }, { titulo: 'Melhor Época', texto: 'Carnaval e Semana Santa são os momentos mais especiais.' }], recomendacoes: [{ titulo: 'Onde Comer', itens: [{ nome: 'Restaurante Chafariz', nota: 4.8, contato: '(31) 3551-2828', site: 'https://www.instagram.com/' }] }, { titulo: 'Onde Ficar', itens: [{ nome: 'Pousada do Mondego', nota: 4.8, contato: '(31) 3551-2040', site: 'https://www.pousadadomondego.com.br/' }] }] },
        fotos: { label: 'Fotos' },
      },
    }),
  },
  {
    id: 43,
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/monumentos/independencia.webp', '/images/natureza/chapada.jpeg'],
      galleryImages: [{ src: '/images/monumentos/independencia.webp' }, { src: '/images/natureza/chapada.jpeg' }, { src: '/images/monumentos/ouro.jpeg' }],
      secoes: {
        sobre: { label: 'Sobre', titulo: 'Arte e Natureza em Perfeita Harmonia', texto: 'O Instituto Inhotim é um museu de arte contemporânea integrado a um jardim botânico de 140 hectares, com obras de mais de 200 artistas de 40 países.', imagem: '/images/monumentos/independencia.webp', lista: ['Área: 140 hectares.', 'Acervo: Mais de 200 artistas de 40 países.', 'Jardim Botânico: Mais de 4.500 espécies de plantas.'] },
        experiencias: { label: 'Experiências', titulo: 'Uma Jornada pela Arte Contemporânea', texto: 'Arte, natureza e arquitetura se fundem em ambiente de rara beleza.', imagem: '/images/natureza/chapada.jpeg', subsecoes: [{ titulo: 'Galerias Permanentes', texto: 'Cildo Meireles com "Desvio para o Vermelho" e Tunga.' }, { titulo: 'Jardim Botânico', texto: 'Coleções de palmeiras, bromélias, orquídeas e plantas tropicais raras.' }, { titulo: 'Exposições Temporárias', texto: 'Artistas nacionais e internacionais ao longo do ano.' }] },
        visita: { label: 'Visite', titulo: 'Como Visitar', texto: 'Em Brumadinho, 60 km de Belo Horizonte. Requer pelo menos um dia inteiro.', imagem: '/images/monumentos/ouro.jpeg', subsecoes: [{ titulo: 'Horários', texto: 'Quarta a domingo, das 9h30 às 17h30. A partir de R$ 50 (meia).' }, { titulo: 'Como Chegar', texto: 'Ônibus da Rodoviária de BH (1h30) ou BR-381 de carro.' }], recomendacoes: [{ titulo: 'Onde Comer', itens: [{ nome: 'Restaurante Tamboril', nota: 4.8, contato: '(31) 3571-9700', site: 'https://www.inhotim.org.br/' }] }] },
        fotos: { label: 'Fotos' },
      },
    }),
  },
  {
    id: 44,
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/natureza/veadeiros.jpeg', '/images/natureza/bonito.jpeg'],
      galleryImages: [{ src: '/images/natureza/veadeiros.jpeg' }, { src: '/images/natureza/bonito.jpeg' }, { src: '/images/natureza/chapada.jpeg' }],
      secoes: {
        sobre: { label: 'Sobre', titulo: 'A Pedra que Muda de Cor', texto: 'A Pedra Azul é uma formação rochosa de granito com 1.822 metros de altitude em Domingos Martins, ES. Adquire coloração azulada ao amanhecer e entardecer.', imagem: '/images/natureza/veadeiros.jpeg', lista: ['Altitude: 1.822 metros.', 'Localização: Domingos Martins, a 90 km de Vitória.', 'Destaque: Coloração azulada ao amanhecer e entardecer.'] },
        experiencias: { label: 'Experiências', titulo: 'Aventura na Serra Capixaba', texto: 'Trilhas, piscinas naturais e vistas panorâmicas.', imagem: '/images/natureza/bonito.jpeg', subsecoes: [{ titulo: 'Trilha da Pedra Azul', texto: '2,5 km até o mirante, com 400 metros de desnível e Mata Atlântica preservada.' }, { titulo: 'Piscinas Naturais', texto: 'Piscinas de água cristalina formadas por nascentes da serra.' }, { titulo: 'Observação de Aves', texto: 'Mais de 200 espécies registradas.' }] },
        visita: { label: 'Visite', titulo: 'Como Visitar', texto: 'Em Domingos Martins, a 90 km de Vitória pela BR-262.', imagem: '/images/natureza/chapada.jpeg', subsecoes: [{ titulo: 'Horários', texto: 'Terça a domingo, das 8h às 17h. Ingresso R$ 20.' }, { titulo: 'Como Chegar', texto: 'BR-262 de Vitória até Domingos Martins (90 km).' }], recomendacoes: [{ titulo: 'Onde Ficar', itens: [{ nome: 'Pousada Pedra Azul', nota: 4.8, contato: '(27) 3248-1234', site: 'https://www.instagram.com/' }] }] },
        fotos: { label: 'Fotos' },
      },
    }),
  },
  {
    id: 45,
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/praiaEx.jpg', '/images/natureza/bonito.jpeg'],
      galleryImages: [{ src: '/images/geral/praiaEx.jpg' }, { src: '/images/natureza/bonito.jpeg' }, { src: '/images/natureza/veadeiros.jpeg' }],
      secoes: {
        sobre: { label: 'Sobre', titulo: 'As Areias que Curam', texto: 'Guarapari é conhecida como a "Cidade Saúde" por causa das areias monazíticas com propriedades terapêuticas. Mais de 23 praias com águas mornas e cristalinas.', imagem: '/images/geral/praiaEx.jpg', lista: ['Praias: Mais de 23 praias.', 'Destaque: Areias monazíticas terapêuticas.', 'Temperatura: Águas mornas entre 24°C e 28°C.'] },
        experiencias: { label: 'Experiências', titulo: 'Sol, Mar e Saúde', texto: 'Infraestrutura turística completa para todos os perfis.', imagem: '/images/natureza/bonito.jpeg', subsecoes: [{ titulo: 'Praias Principais', texto: 'Praia do Morro (4 km), Praia de Meaípe (frutos do mar) e Praia das Castanheiras.' }, { titulo: 'Mergulho e Esportes', texto: 'Visibilidade de até 15 metros, stand-up paddle e kitesurf.' }, { titulo: 'Gastronomia', texto: 'Caranguejos, lagostas, camarões e peixes frescos na orla.' }] },
        visita: { label: 'Visite', titulo: 'Como Chegar a Guarapari', texto: 'A 53 km de Vitória, acessível de carro ou ônibus.', imagem: '/images/natureza/veadeiros.jpeg', subsecoes: [{ titulo: 'Como Chegar', texto: 'BR-101 Sul de Vitória (53 km, 45 min). Ônibus do Terminal de Vitória.' }, { titulo: 'Melhor Época', texto: 'De dezembro a março, alta temporada. De abril a novembro, preços mais acessíveis.' }], recomendacoes: [{ titulo: 'Onde Ficar', itens: [{ nome: 'Hotel Praia do Morro', nota: 4.6, contato: '(27) 3261-1000', site: 'https://www.instagram.com/' }] }] },
        fotos: { label: 'Fotos' },
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
