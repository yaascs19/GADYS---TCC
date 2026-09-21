#!/usr/bin/env node

const API_URL = 'https://gadys-backend.onrender.com';

const LOCAIS = [
  // ── SERGIPE ──────────────────────────────────────────────────────────────
  {
    nome: 'Cânion do Xingó',
    descricao: 'O Grand Canyon brasileiro às margens do Rio São Francisco, com paredes de até 150 metros de altura e 60 km de extensão navegável.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Canindé de São Francisco',
    estado: 'SE',
    endereco: 'Porto do Xingó, Canindé de São Francisco - SE',
    coordenadas: '-9.6419,-37.7922',
    horarioFuncionamento: 'Diariamente, passeios às 8h e 13h',
    preco: 'A partir de R$ 80 (passeio de barco)',
    imagemUrl: '/images/geral/se-xingo.jpg',
    rotaFrontend: '/sergipe/canion-xingo',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/se-xingo.jpg', '/images/geral/se-xingo2.jpg', '/images/geral/se-xingo3.jpg'],
      galeriaImages: [
        { src: '/images/geral/se-xingo.jpg', alt: 'Cânion do Xingó' },
        { src: '/images/geral/se-xingo2.jpg', alt: 'Rio São Francisco no Xingó' },
        { src: '/images/geral/se-xingo3.jpg', alt: 'Paredes do Cânion' },
        { src: '/images/geral/se-xingo4.jpg', alt: 'Passeio de barco' },
      ],
    }),
  },

  // ── SANTA CATARINA ────────────────────────────────────────────────────────
  {
    nome: 'Florianópolis',
    descricao: 'A Ilha da Magia — mais de 100 praias, lagoas de água doce, dunas e rica herança açoriana na capital de Santa Catarina.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Florianópolis',
    estado: 'SC',
    endereco: 'Ilha de Santa Catarina, Florianópolis - SC',
    coordenadas: '-27.5954,-48.5480',
    horarioFuncionamento: 'Aberto o ano todo',
    preco: 'Gratuito (praias públicas)',
    imagemUrl: '/images/geral/sc-floripa.jpg',
    rotaFrontend: '/sc/florianopolis',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/sc-floripa.jpg', '/images/geral/sc1.jpg'],
      galeriaImages: [
        { src: '/images/geral/sc-floripa.jpg', alt: 'Florianópolis' },
        { src: '/images/geral/sc1.jpg', alt: 'Florianópolis litoral' },
        { src: '/images/geral/sc2.jpg', alt: 'Lagoa da Conceição' },
      ],
    }),
  },
  {
    nome: 'Balneário Camboriú',
    descricao: 'A Dubai brasileira — arranha-céus, Praia Central e o Bondinho Unipraias, o maior teleférico da América Latina.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Balneário Camboriú',
    estado: 'SC',
    endereco: 'Av. Atlântica, Balneário Camboriú - SC',
    coordenadas: '-26.9906,-48.6348',
    horarioFuncionamento: 'Aberto o ano todo',
    preco: 'Bondinho a partir de R$ 89',
    imagemUrl: '/images/geral/sc-bc.jpg',
    rotaFrontend: '/sc/balneario-camboriu',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/sc-bc.jpg', '/images/geral/sc3.jpg'],
      galeriaImages: [
        { src: '/images/geral/sc-bc.jpg', alt: 'Balneário Camboriú' },
        { src: '/images/geral/sc3.jpg', alt: 'Praia Central de BC' },
        { src: '/images/geral/sc4.jpg', alt: 'Bondinho Unipraias' },
      ],
    }),
  },
  {
    nome: 'Bombinhas',
    descricao: 'Paraíso do mergulho com mais de 30 praias de águas cristalinas e a Reserva Biológica Marinha do Arvoredo.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Bombinhas',
    estado: 'SC',
    endereco: 'Bombinhas - SC',
    coordenadas: '-27.1397,-48.4814',
    horarioFuncionamento: 'Aberto o ano todo',
    preco: 'Gratuito (praias públicas)',
    imagemUrl: '/images/geral/sc-bombinhas.jpg',
    rotaFrontend: '/sc/bombinhas',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/sc-bombinhas.jpg', '/images/geral/sc2.jpg'],
      galeriaImages: [
        { src: '/images/geral/sc-bombinhas.jpg', alt: 'Bombinhas' },
        { src: '/images/geral/sc2.jpg', alt: 'Praia de Bombinhas' },
        { src: '/images/geral/sc1.jpg', alt: 'Mergulho em Bombinhas' },
      ],
    }),
  },
  {
    nome: 'Blumenau e Oktoberfest',
    descricao: 'A Alemanha brasileira — arquitetura enxaimel, cerveja artesanal e a 2ª maior Oktoberfest do mundo.',
    categoria: 'lugares-visitar',
    subcategoria: 'monumentos',
    cidade: 'Blumenau',
    estado: 'SC',
    endereco: 'Centro, Blumenau - SC',
    coordenadas: '-26.9194,-49.0661',
    horarioFuncionamento: 'Aberto o ano todo. Oktoberfest em outubro.',
    preco: 'Oktoberfest a partir de R$ 40',
    imagemUrl: '/images/geral/sc-blumenau.jpg',
    rotaFrontend: '/sc/blumenau',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/sc-blumenau.jpg', '/images/geral/sc4.jpg'],
      galeriaImages: [
        { src: '/images/geral/sc-blumenau.jpg', alt: 'Blumenau' },
        { src: '/images/geral/sc4.jpg', alt: 'Oktoberfest Blumenau' },
        { src: '/images/geral/sc3.jpg', alt: 'Centro histórico de Blumenau' },
      ],
    }),
  },
  {
    nome: 'São Joaquim',
    descricao: 'A cidade mais fria do Brasil — neve entre junho e agosto, maçãs premiadas e vinhos finos de altitude na Serra Catarinense.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'São Joaquim',
    estado: 'SC',
    endereco: 'São Joaquim - SC',
    coordenadas: '-28.2942,-49.9317',
    horarioFuncionamento: 'Aberto o ano todo',
    preco: 'Gratuito (cidade)',
    imagemUrl: '/images/geral/sc-saojoaquim.jpg',
    rotaFrontend: '/sc/sao-joaquim',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/sc-saojoaquim.jpg', '/images/geral/sc1.jpg'],
      galeriaImages: [
        { src: '/images/geral/sc-saojoaquim.jpg', alt: 'São Joaquim nevado' },
        { src: '/images/geral/sc1.jpg', alt: 'Serra Catarinense' },
        { src: '/images/geral/sc2.jpg', alt: 'Vinhedos de São Joaquim' },
      ],
    }),
  },
  {
    nome: 'Joinville',
    descricao: 'A Cidade das Flores — sede do maior Festival de Dança do mundo e da rica herança europeia no norte catarinense.',
    categoria: 'lugares-visitar',
    subcategoria: 'monumentos',
    cidade: 'Joinville',
    estado: 'SC',
    endereco: 'Centro, Joinville - SC',
    coordenadas: '-26.3044,-48.8487',
    horarioFuncionamento: 'Aberto o ano todo. Festival de Dança em julho.',
    preco: 'Gratuito (cidade)',
    imagemUrl: '/images/geral/sc-joinville.jpg',
    rotaFrontend: '/sc/joinville',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/sc-joinville.jpg', '/images/geral/sc3.jpg'],
      galeriaImages: [
        { src: '/images/geral/sc-joinville.jpg', alt: 'Joinville' },
        { src: '/images/geral/sc3.jpg', alt: 'Festival de Dança de Joinville' },
        { src: '/images/geral/sc4.jpg', alt: 'Centro histórico de Joinville' },
      ],
    }),
  },

  // ── RIO GRANDE DO SUL ─────────────────────────────────────────────────────
  {
    nome: 'Gramado',
    descricao: 'A pérola da Serra Gaúcha — Natal Luz, Festival de Cinema, chocolate artesanal e arquitetura europeia a 825m de altitude.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Gramado',
    estado: 'RS',
    endereco: 'Centro, Gramado - RS',
    coordenadas: '-29.3789,-50.8761',
    horarioFuncionamento: 'Aberto o ano todo. Natal Luz de outubro a janeiro.',
    preco: 'Gratuito (cidade)',
    imagemUrl: '/images/geral/rs-gramado.jpg',
    rotaFrontend: '/rs/gramado',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/rs-gramado.jpg', '/images/geral/rs1.jpg'],
      galeriaImages: [
        { src: '/images/geral/rs-gramado.jpg', alt: 'Gramado no inverno' },
        { src: '/images/geral/rs1.jpg', alt: 'Natal Luz de Gramado' },
        { src: '/images/geral/rs2.jpg', alt: 'Rua Coberta de Gramado' },
      ],
    }),
  },
  {
    nome: 'Cânion Itaimbezinho',
    descricao: 'Um dos maiores cânions do mundo — 720 metros de profundidade e 5,8 km de extensão no Parque Nacional dos Aparados da Serra.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Cambará do Sul',
    estado: 'RS',
    endereco: 'Parque Nacional dos Aparados da Serra, Cambará do Sul - RS',
    coordenadas: '-29.1667,-50.0833',
    horarioFuncionamento: 'Qua a Dom, 9h às 17h',
    preco: 'R$ 30 (adulto)',
    imagemUrl: '/images/geral/rs-canion.jpg',
    rotaFrontend: '/rs/canion-itaimbezinho',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/rs-canion.jpg', '/images/geral/rs3.jpg'],
      galeriaImages: [
        { src: '/images/geral/rs-canion.jpg', alt: 'Cânion Itaimbezinho' },
        { src: '/images/geral/rs3.jpg', alt: 'Vista do cânion' },
        { src: '/images/geral/rs4.jpg', alt: 'Trilha do Cotovelo' },
      ],
    }),
  },
  {
    nome: 'Bento Gonçalves',
    descricao: 'A capital brasileira do vinho — Vale dos Vinhedos com Denominação de Origem, Vindima, Maria Fumaça e gastronomia italiana.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Bento Gonçalves',
    estado: 'RS',
    endereco: 'Vale dos Vinhedos, Bento Gonçalves - RS',
    coordenadas: '-29.1703,-51.5186',
    horarioFuncionamento: 'Aberto o ano todo. Vindima em fev/mar.',
    preco: 'Degustações a partir de R$ 30',
    imagemUrl: '/images/geral/rs-bento.jpg',
    rotaFrontend: '/rs/bento-goncalves',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/rs-bento.jpg', '/images/geral/rs2.jpg'],
      galeriaImages: [
        { src: '/images/geral/rs-bento.jpg', alt: 'Vinhedos de Bento Gonçalves' },
        { src: '/images/geral/rs2.jpg', alt: 'Vale dos Vinhedos' },
        { src: '/images/geral/rs3.jpg', alt: 'Vindima em Bento Gonçalves' },
      ],
    }),
  },
  {
    nome: 'Porto Alegre',
    descricao: 'A capital gaúcha às margens do Guaíba — Mercado Público histórico, pôr do sol único e a energia vibrante do sul do Brasil.',
    categoria: 'lugares-visitar',
    subcategoria: 'monumentos',
    cidade: 'Porto Alegre',
    estado: 'RS',
    endereco: 'Centro Histórico, Porto Alegre - RS',
    coordenadas: '-30.0346,-51.2177',
    horarioFuncionamento: 'Aberto o ano todo',
    preco: 'Gratuito (cidade)',
    imagemUrl: '/images/geral/rs-poa.jpg',
    rotaFrontend: '/rs/porto-alegre',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/rs-poa.jpg', '/images/geral/rs4.jpg'],
      galeriaImages: [
        { src: '/images/geral/rs-poa.jpg', alt: 'Porto Alegre' },
        { src: '/images/geral/rs4.jpg', alt: 'Mercado Público de Porto Alegre' },
        { src: '/images/geral/rs1.jpg', alt: 'Orla do Guaíba' },
      ],
    }),
  },
  {
    nome: 'Torres',
    descricao: 'O litoral gaúcho com formações de basalto únicas, surf e o Festival Internacional de Balonismo — um dos maiores do mundo.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Torres',
    estado: 'RS',
    endereco: 'Praia Grande, Torres - RS',
    coordenadas: '-29.3358,-49.7258',
    horarioFuncionamento: 'Aberto o ano todo. Festival de Balonismo em abril.',
    preco: 'Gratuito (praias públicas)',
    imagemUrl: '/images/geral/rs-torres.jpg',
    rotaFrontend: '/rs/torres',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/rs-torres.jpg', '/images/geral/rs3.jpg'],
      galeriaImages: [
        { src: '/images/geral/rs-torres.jpg', alt: 'Torres - RS' },
        { src: '/images/geral/rs3.jpg', alt: 'Praia Grande de Torres' },
        { src: '/images/geral/rs4.jpg', alt: 'Basalto de Torres' },
      ],
    }),
  },
  {
    nome: 'São Miguel das Missões',
    descricao: 'Patrimônio Mundial da UNESCO — ruínas jesuíticas do século XVII com espetáculo Som e Luz e o Museu das Missões de Lúcio Costa.',
    categoria: 'lugares-visitar',
    subcategoria: 'monumentos',
    cidade: 'São Miguel das Missões',
    estado: 'RS',
    endereco: 'Sítio Arqueológico, São Miguel das Missões - RS',
    coordenadas: '-28.5608,-54.6969',
    horarioFuncionamento: 'Diariamente, 9h às 18h. Som e Luz às 21h.',
    preco: 'R$ 20 (adulto)',
    imagemUrl: '/images/geral/rs-missoes.jpg',
    rotaFrontend: '/rs/sao-miguel-das-missoes',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/rs-missoes.jpg', '/images/geral/rs1.jpg'],
      galeriaImages: [
        { src: '/images/geral/rs-missoes.jpg', alt: 'Ruínas de São Miguel das Missões' },
        { src: '/images/geral/rs1.jpg', alt: 'Espetáculo Som e Luz' },
        { src: '/images/geral/rs2.jpg', alt: 'Museu das Missões' },
      ],
    }),
  },
];

async function addLocal(local) {
  const res = await fetch(`${API_URL}/api/locais`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(local),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`HTTP ${res.status}: ${err}`);
  }

  const criado = await res.json();

  const aprovRes = await fetch(`${API_URL}/api/locais/aprovar/${criado.id}`, { method: 'POST' });
  if (!aprovRes.ok) console.warn(`  ⚠ Não foi possível aprovar ID ${criado.id} — aprove pelo painel admin.`);

  return criado;
}

async function main() {
  console.log(`\n🚀 Adicionando ${LOCAIS.length} locais no banco...\n`);

  let ok = 0;
  let erros = 0;

  for (const local of LOCAIS) {
    process.stdout.write(`  → ${local.estado} | ${local.nome} ... `);
    try {
      const criado = await addLocal(local);
      console.log(`✅ ID ${criado.id}`);
      ok++;
    } catch (e) {
      console.log(`❌ ${e.message}`);
      erros++;
    }
  }

  console.log(`\n✅ ${ok} adicionados | ❌ ${erros} erros\n`);
}

main().catch(e => { console.error('Erro fatal:', e.message); process.exit(1); });
