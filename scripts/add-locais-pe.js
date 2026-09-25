#!/usr/bin/env node
// node scripts/add-locais-pe.js

const API_URL = 'https://gadys-backend.onrender.com';

const LOCAIS = [
  {
    nome: 'Fernando de Noronha',
    descricao: 'Arquipélago paradisíaco com praias eleitas as mais belas do mundo e rica vida marinha.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Fernando de Noronha',
    estado: 'PE',
    endereco: 'Arquipélago de Fernando de Noronha, PE',
    coordenadas: '-3.8547,-32.4231',
    horarioFuncionamento: 'Aberto todos os dias',
    preco: 'Taxa de Preservação Ambiental (TPA) diária obrigatória',
    imagemUrl: '/images/geral/fe-pe.jpg',
    rotaFrontend: '/pe/fernando-de-noronha',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/fe-pe.jpg', '/images/geral/fe-pe.jpg'],
      galleryImages: [{ src: '/images/geral/fe-pe.jpg' }],
    }),
  },
  {
    nome: 'Porto de Galinhas',
    descricao: 'Piscinas naturais entre recifes de corais com peixes coloridos, eleita a praia mais bonita do Brasil.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Ipojuca',
    estado: 'PE',
    endereco: 'Praia de Porto de Galinhas, Ipojuca - PE',
    coordenadas: '-8.5000,-35.0000',
    horarioFuncionamento: 'Aberto todos os dias',
    preco: 'Passeio de jangada a partir de R$ 30,00',
    imagemUrl: '/images/geral/fe-pe.jpg',
    rotaFrontend: '/pe/porto-de-galinhas',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/fe-pe.jpg', '/images/geral/fe-pe.jpg'],
      galleryImages: [{ src: '/images/geral/fe-pe.jpg' }],
    }),
  },
  {
    nome: 'Recife Antigo',
    descricao: 'O coração histórico da Veneza Brasileira, com o Marco Zero e a vibrante cena cultural do Recife.',
    categoria: 'lugares-visitar',
    subcategoria: 'monumentos',
    cidade: 'Recife',
    estado: 'PE',
    endereco: 'Bairro do Recife Antigo, Recife - PE',
    coordenadas: '-8.0631,-34.8711',
    horarioFuncionamento: 'Aberto todos os dias',
    preco: 'Gratuito',
    imagemUrl: '/images/geral/pelo.jpg',
    rotaFrontend: '/pe/recife-antigo',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/pelo.jpg', '/images/geral/pelo-xx.jpg'],
      galleryImages: [{ src: '/images/geral/pelo.jpg' }, { src: '/images/geral/pelo-xx.jpg' }],
    }),
  },
  {
    nome: 'Olinda',
    descricao: 'Patrimônio Cultural da Humanidade pela UNESCO, com igrejas barrocas e o Carnaval mais autêntico do Brasil.',
    categoria: 'lugares-visitar',
    subcategoria: 'monumentos',
    cidade: 'Olinda',
    estado: 'PE',
    endereco: 'Centro Histórico de Olinda - PE',
    coordenadas: '-8.0089,-34.8553',
    horarioFuncionamento: 'Aberto todos os dias',
    preco: 'Gratuito',
    imagemUrl: '/images/geral/pelo-xx.jpg',
    rotaFrontend: '/pe/olinda',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/pelo.jpg', '/images/geral/pelo-xx.jpg'],
      galleryImages: [{ src: '/images/geral/pelo-xx.jpg' }, { src: '/images/geral/pelo.jpg' }],
    }),
  },
  {
    nome: 'Vale do Catimbau',
    descricao: 'Parque nacional com mais de 2.000 sítios arqueológicos e pinturas rupestres de até 6.000 anos.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Buíque',
    estado: 'PE',
    endereco: 'Parque Nacional do Vale do Catimbau, Buíque - PE',
    coordenadas: '-8.6167,-37.1833',
    horarioFuncionamento: 'Ter a Dom: 8h às 17h',
    preco: 'Entrada gratuita, guia obrigatório',
    imagemUrl: '/images/geral/pi-capivara.jpg',
    rotaFrontend: '/pe/vale-do-catimbau',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/pi-capivara.jpg', '/images/geral/pi-natureza.jpg'],
      galleryImages: [{ src: '/images/geral/pi-capivara.jpg' }, { src: '/images/geral/pi-natureza.jpg' }],
    }),
  },
  {
    nome: 'Caruaru',
    descricao: 'Capital do forró e sede do maior São João do mundo, com o famoso Alto do Moura e a Feira de Caruaru.',
    categoria: 'lugares-visitar',
    subcategoria: 'monumentos',
    cidade: 'Caruaru',
    estado: 'PE',
    endereco: 'Centro de Caruaru - PE',
    coordenadas: '-8.2760,-35.9753',
    horarioFuncionamento: 'Feira: Qua, Sex e Sáb',
    preco: 'Gratuito',
    imagemUrl: '/images/geral/pi-cultura.jpg',
    rotaFrontend: '/pe/caruaru',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/pi-cultura.jpg', '/images/geral/pi-teresina.jpg'],
      galleryImages: [{ src: '/images/geral/pi-cultura.jpg' }, { src: '/images/geral/pi-teresina.jpg' }],
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
    throw new Error(`Erro ${res.status}: ${err}`);
  }

  const criado = await res.json();

  const aprovRes = await fetch(`${API_URL}/api/locais/aprovar/${criado.id}`, { method: 'POST' });
  if (!aprovRes.ok) console.warn(`  ⚠ Não foi possível aprovar automaticamente o ID ${criado.id}.`);

  return criado;
}

async function main() {
  console.log(`\nAdicionando ${LOCAIS.length} locais de Pernambuco...\n`);
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
