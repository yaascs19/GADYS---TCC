#!/usr/bin/env node
// node scripts/add-locais-destaque.js

const API_URL = 'https://gadys-backend.onrender.com';

const LOCAIS = [
  {
    nome: 'Pão de Açúcar',
    descricao: 'Complexo de morros com vista panorâmica deslumbrante acessado por teleférico histórico inaugurado em 1912.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Rio de Janeiro',
    estado: 'RJ',
    endereco: 'Praia Vermelha, Urca, Rio de Janeiro - RJ',
    coordenadas: '-22.9489,-43.1576',
    horarioFuncionamento: 'Diariamente: 8h às 21h',
    preco: 'A partir de R$ 130,00',
    imagemUrl: '/images/geral/pao-rj.jpg',
    rotaFrontend: '/pao-de-acucar',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/pao-rj.jpg', '/images/geral/cr-rj.webp'],
      galleryImages: [{ src: '/images/geral/pao-rj.jpg' }, { src: '/images/geral/cr-rj.webp' }],
    }),
  },
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
    rotaFrontend: '/cataratas-iguacu',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/cata-xx.jpg', '/images/geral/cata.jpg'],
      galleryImages: [{ src: '/images/geral/cata-xx.jpg' }, { src: '/images/geral/cata.jpg' }],
    }),
  },
  {
    nome: 'Pelourinho',
    descricao: 'Centro histórico de Salvador com arquitetura colonial colorida, berço da cultura afro-brasileira. Patrimônio UNESCO desde 1985.',
    categoria: 'lugares-visitar',
    subcategoria: 'monumentos',
    cidade: 'Salvador',
    estado: 'BA',
    endereco: 'Centro Histórico de Salvador, Bahia',
    coordenadas: '-12.9714,-38.5124',
    horarioFuncionamento: 'Aberto todos os dias',
    preco: 'Gratuito',
    imagemUrl: '/images/geral/pelo-xx.jpg',
    rotaFrontend: '/pelourinho',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/pelo-xx.jpg', '/images/geral/pelo.jpg'],
      galleryImages: [{ src: '/images/geral/pelo-xx.jpg' }, { src: '/images/geral/pelo.jpg' }],
    }),
  },
  {
    nome: 'Fernando de Noronha',
    descricao: 'Arquipélago paradisíaco com praias eleitas as mais belas do mundo e rica vida marinha. Patrimônio Natural da Humanidade pela UNESCO.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Fernando de Noronha',
    estado: 'PE',
    endereco: 'Arquipélago de Fernando de Noronha, PE',
    coordenadas: '-3.8547,-32.4231',
    horarioFuncionamento: 'Aberto todos os dias',
    preco: 'Taxa de Preservação Ambiental (TPA) diária obrigatória',
    imagemUrl: '/images/geral/fe-pe.jpg',
    rotaFrontend: '/fernando-noronha',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/fe-pe.jpg', '/images/natureza/noronha.jpeg'],
      galleryImages: [{ src: '/images/geral/fe-pe.jpg' }, { src: '/images/natureza/noronha.jpeg' }],
    }),
  },
  {
    nome: 'Pantanal',
    descricao: 'Maior planície inundável do planeta e santuário de biodiversidade reconhecido mundialmente. Patrimônio Natural da Humanidade pela UNESCO.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Corumbá',
    estado: 'MS',
    endereco: 'Pantanal Sul-Mato-Grossense, MS',
    coordenadas: '-19.0000,-57.0000',
    horarioFuncionamento: 'Aberto todos os dias',
    preco: 'Pacotes a partir de R$ 500,00/dia',
    imagemUrl: '/images/geral/pant-xx.webp',
    rotaFrontend: '/pantanal',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/pant-xx.webp', '/images/natureza/pantanal.jpeg'],
      galleryImages: [{ src: '/images/geral/pant-xx.webp' }, { src: '/images/natureza/pantanal.jpeg' }],
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
  console.log(`\nAdicionando ${LOCAIS.length} Destinos em Destaque...\n`);
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
