#!/usr/bin/env node
// node scripts/add-locais-pr.js

const API_URL = 'https://gadys-backend.onrender.com';

const LOCAIS = [
  {
    nome: 'Cataratas do Iguaçu',
    descricao: 'Uma das maiores quedas d\'água do mundo, Patrimônio Natural da Humanidade pela UNESCO e uma das Sete Maravilhas da Natureza.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Foz do Iguaçu',
    estado: 'PR',
    endereco: 'Parque Nacional do Iguaçu, Foz do Iguaçu - PR',
    coordenadas: '-25.6953,-54.4367',
    horarioFuncionamento: 'Ter a Dom: 9h às 17h',
    preco: 'A partir de R$ 96,00',
    imagemUrl: '/images/geral/cata-xx.jpg',
    rotaFrontend: '/pr/cataratas-do-iguacu',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/cata-xx.jpg', '/images/geral/cata.jpg'],
      galleryImages: [{ src: '/images/geral/cata-xx.jpg' }, { src: '/images/geral/cata.jpg' }],
    }),
  },
  {
    nome: 'Centro Histórico de Curitiba',
    descricao: 'Capital modelo em urbanismo, com o Largo da Ordem, Museu Oscar Niemeyer e o Jardim Botânico.',
    categoria: 'lugares-visitar',
    subcategoria: 'monumentos',
    cidade: 'Curitiba',
    estado: 'PR',
    endereco: 'Largo da Ordem, Centro Histórico, Curitiba - PR',
    coordenadas: '-25.4284,-49.2733',
    horarioFuncionamento: 'Aberto todos os dias',
    preco: 'Gratuito (museus a partir de R$ 10,00)',
    imagemUrl: '/images/geral/cord.jpg',
    rotaFrontend: '/pr/curitiba-centro',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/cord.jpg', '/images/geral/pan.jpg'],
      galleryImages: [{ src: '/images/geral/cord.jpg' }, { src: '/images/geral/pan.jpg' }],
    }),
  },
  {
    nome: 'Ilha do Mel',
    descricao: 'Ilha paradisíaca sem carros, com praias selvagens, trilhas pela Mata Atlântica e o histórico Farol das Conchas.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Paranaguá',
    estado: 'PR',
    endereco: 'Ilha do Mel, Baía de Paranaguá - PR',
    coordenadas: '-25.5167,-48.3167',
    horarioFuncionamento: 'Aberto todos os dias',
    preco: 'Taxa de embarque + barco a partir de R$ 40,00',
    imagemUrl: '/images/geral/sc-natureza.jpg',
    rotaFrontend: '/pr/ilha-do-mel',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/sc-natureza.jpg', '/images/geral/rs-natureza.jpg'],
      galleryImages: [{ src: '/images/geral/sc-natureza.jpg' }, { src: '/images/geral/rs-natureza.jpg' }],
    }),
  },
  {
    nome: 'Parque Estadual de Vila Velha',
    descricao: 'Formações rochosas esculpidas pela erosão há 300 milhões de anos, com furnas e lagoas de tirar o fôlego.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Ponta Grossa',
    estado: 'PR',
    endereco: 'PR-151, Km 513, Ponta Grossa - PR',
    coordenadas: '-25.2333,-50.0167',
    horarioFuncionamento: 'Ter a Dom: 8h às 17h',
    preco: 'A partir de R$ 30,00',
    imagemUrl: '/images/geral/pant-xx.webp',
    rotaFrontend: '/pr/vila-velha',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/pant-xx.webp', '/images/geral/sc-natureza.jpg'],
      galleryImages: [{ src: '/images/geral/pant-xx.webp' }, { src: '/images/geral/sc-natureza.jpg' }],
    }),
  },
  {
    nome: 'Foz do Iguaçu',
    descricao: 'Cidade na tríplice fronteira com Argentina e Paraguai, porta de entrada para as Cataratas e o Parque das Aves.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Foz do Iguaçu',
    estado: 'PR',
    endereco: 'Centro de Foz do Iguaçu - PR',
    coordenadas: '-25.5478,-54.5882',
    horarioFuncionamento: 'Aberto todos os dias',
    preco: 'Gratuito (atrações individuais cobram ingresso)',
    imagemUrl: '/images/geral/cata.jpg',
    rotaFrontend: '/pr/foz-do-iguacu',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/cata.jpg', '/images/geral/cata-xx.jpg'],
      galleryImages: [{ src: '/images/geral/cata.jpg' }, { src: '/images/geral/cata-xx.jpg' }],
    }),
  },
  {
    nome: 'Guaratuba',
    descricao: 'Balneário com a maior baía do litoral paranaense, praias tranquilas e rica gastronomia de frutos do mar.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Guaratuba',
    estado: 'PR',
    endereco: 'Praia Central de Guaratuba - PR',
    coordenadas: '-25.8833,-48.5833',
    horarioFuncionamento: 'Aberto todos os dias',
    preco: 'Gratuito',
    imagemUrl: '/images/geral/rs-natureza.jpg',
    rotaFrontend: '/pr/guaratuba',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/rs-natureza.jpg', '/images/geral/sc-natureza.jpg'],
      galleryImages: [{ src: '/images/geral/rs-natureza.jpg' }, { src: '/images/geral/sc-natureza.jpg' }],
    }),
  },
];

async function addLocal(local) {
  const res = await fetch(`${API_URL}/api/locais`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(local),
  });
  if (!res.ok) throw new Error(`Erro ${res.status}: ${await res.text()}`);
  const criado = await res.json();
  const aprovRes = await fetch(`${API_URL}/api/locais/aprovar/${criado.id}`, { method: 'POST' });
  if (!aprovRes.ok) console.warn(`  ⚠ Não foi possível aprovar automaticamente o ID ${criado.id}.`);
  return criado;
}

async function main() {
  console.log(`\nAdicionando ${LOCAIS.length} locais do Paraná...\n`);
  for (const local of LOCAIS) {
    try {
      const criado = await addLocal(local);
      console.log(`✓ ${criado.nome} | ID: ${criado.id} | Rota: ${criado.rotaFrontend}`);
    } catch (e) {
      console.error(`✗ ${local.nome}: ${e.message}`);
    }
  }
  console.log('\nConcluído.');
}

main().catch(e => { console.error('Erro:', e.message); process.exit(1); });
