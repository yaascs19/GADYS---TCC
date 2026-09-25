#!/usr/bin/env node

const API_URL = 'https://gadys-backend.onrender.com';

const LOCAIS = [
  {
    nome: 'Serra da Capivara',
    descricao: 'Patrimônio da UNESCO — maior acervo de arte rupestre das Américas com pinturas de até 50 mil anos no sertão piauiense.',
    categoria: 'lugares-visitar',
    subcategoria: 'monumentos',
    cidade: 'São Raimundo Nonato',
    estado: 'PI',
    endereco: 'Parque Nacional Serra da Capivara, São Raimundo Nonato - PI',
    coordenadas: '-8.8333,-42.5833',
    horarioFuncionamento: 'Ter a Dom, 8h às 17h',
    preco: 'R$ 25 (adulto)',
    imagemUrl: '/images/geral/pi-capivara.jpg',
    rotaFrontend: '/pi/serra-da-capivara',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/pi-capivara.jpg', '/images/geral/pi1.jpg'],
      galeriaImages: [
        { src: '/images/geral/pi-capivara.jpg', alt: 'Serra da Capivara' },
        { src: '/images/geral/pi1.jpg', alt: 'Pinturas rupestres' },
        { src: '/images/geral/pi2.jpg', alt: 'Formações rochosas' },
      ],
    }),
  },
  {
    nome: 'Delta do Parnaíba',
    descricao: 'O único delta em mar aberto das Américas — 70 ilhas, igarapés e biodiversidade única na divisa do Piauí com o Maranhão.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Parnaíba',
    estado: 'PI',
    endereco: 'Porto das Barcas, Parnaíba - PI',
    coordenadas: '-2.9000,-41.7667',
    horarioFuncionamento: 'Diariamente, passeios às 8h e 13h',
    preco: 'Passeio a partir de R$ 70',
    imagemUrl: '/images/geral/pi-delta.jpg',
    rotaFrontend: '/pi/delta-do-parnaiba',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/pi-delta.jpg', '/images/geral/pi2.jpg'],
      galeriaImages: [
        { src: '/images/geral/pi-delta.jpg', alt: 'Delta do Parnaíba' },
        { src: '/images/geral/pi2.jpg', alt: 'Igarapés do Delta' },
        { src: '/images/geral/pi3.jpg', alt: 'Pôr do sol no Delta' },
      ],
    }),
  },
  {
    nome: 'Parque Nacional Sete Cidades',
    descricao: 'Formações rochosas milenares que parecem cidades abandonadas, com inscrições rupestres de 6 mil anos no norte do Piauí.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Piracuruca',
    estado: 'PI',
    endereco: 'Parque Nacional de Sete Cidades, Piracuruca - PI',
    coordenadas: '-4.1000,-41.7000',
    horarioFuncionamento: 'Diariamente, 8h às 17h',
    preco: 'R$ 20 (adulto)',
    imagemUrl: '/images/geral/pi-setecidades.jpg',
    rotaFrontend: '/pi/sete-cidades',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/pi-setecidades.jpg', '/images/geral/pi3.jpg'],
      galeriaImages: [
        { src: '/images/geral/pi-setecidades.jpg', alt: 'Sete Cidades' },
        { src: '/images/geral/pi3.jpg', alt: 'Formações rochosas' },
        { src: '/images/geral/pi4.jpg', alt: 'Trilha em Sete Cidades' },
      ],
    }),
  },
  {
    nome: 'Luís Correia',
    descricao: 'O litoral selvagem do Piauí — Praia do Atalaia com piscinas naturais, dunas de Carnaubinha e a Lagoa do Portinho.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Luís Correia',
    estado: 'PI',
    endereco: 'Praia do Atalaia, Luís Correia - PI',
    coordenadas: '-2.8833,-41.6667',
    horarioFuncionamento: 'Aberto o ano todo',
    preco: 'Gratuito (praias públicas)',
    imagemUrl: '/images/geral/pi-luiscorreia.jpg',
    rotaFrontend: '/pi/luis-correia',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/pi-luiscorreia.jpg', '/images/geral/pi4.jpg'],
      galeriaImages: [
        { src: '/images/geral/pi-luiscorreia.jpg', alt: 'Luís Correia' },
        { src: '/images/geral/pi4.jpg', alt: 'Praia de Luís Correia' },
        { src: '/images/geral/pi1.jpg', alt: 'Dunas de Luís Correia' },
      ],
    }),
  },
  {
    nome: 'Pedra do Castelo',
    descricao: 'Fortaleza natural de pedra no sertão piauiense — escalada em paredes verticais e vistas panorâmicas da caatinga.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Queimada Nova',
    estado: 'PI',
    endereco: 'Pedra do Castelo, Queimada Nova - PI',
    coordenadas: '-8.5667,-41.4167',
    horarioFuncionamento: 'Aberto o ano todo (com guia)',
    preco: 'Guia a partir de R$ 80',
    imagemUrl: '/images/geral/pi-pedracastelo.jpg',
    rotaFrontend: '/pi/pedra-do-castelo',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/pi-pedracastelo.jpg', '/images/geral/pi2.jpg'],
      galeriaImages: [
        { src: '/images/geral/pi-pedracastelo.jpg', alt: 'Pedra do Castelo' },
        { src: '/images/geral/pi2.jpg', alt: 'Vista da Pedra do Castelo' },
        { src: '/images/geral/pi3.jpg', alt: 'Escalada na Pedra do Castelo' },
      ],
    }),
  },
  {
    nome: 'Centro Histórico de Teresina',
    descricao: 'A única capital brasileira planejada no Império — Museu do Piauí, Encontro dos Rios Parnaíba e Poti e rico patrimônio histórico.',
    categoria: 'lugares-visitar',
    subcategoria: 'monumentos',
    cidade: 'Teresina',
    estado: 'PI',
    endereco: 'Centro Histórico, Teresina - PI',
    coordenadas: '-5.0892,-42.8019',
    horarioFuncionamento: 'Aberto o ano todo',
    preco: 'Gratuito (cidade)',
    imagemUrl: '/images/geral/pi-teresina.jpg',
    rotaFrontend: '/pi/teresina-centro',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/pi-teresina.jpg', '/images/geral/pi4.jpg'],
      galeriaImages: [
        { src: '/images/geral/pi-teresina.jpg', alt: 'Centro Histórico de Teresina' },
        { src: '/images/geral/pi4.jpg', alt: 'Rio Parnaíba em Teresina' },
        { src: '/images/geral/pi1.jpg', alt: 'Museu do Piauí' },
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
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`);
  const criado = await res.json();
  const aprov = await fetch(`${API_URL}/api/locais/aprovar/${criado.id}`, { method: 'POST' });
  if (!aprov.ok) console.warn(`  ⚠ Aprovar ID ${criado.id} manualmente no painel admin.`);
  return criado;
}

async function main() {
  console.log(`\n🚀 Adicionando ${LOCAIS.length} locais do PI no banco...\n`);
  let ok = 0, erros = 0;
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
