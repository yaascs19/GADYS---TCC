#!/usr/bin/env node
// node scripts/add-locais-pb.js

const API_URL = 'https://gadys-backend.onrender.com';

const LOCAIS = [
  {
    nome: 'Farol do Cabo Branco',
    descricao: 'O ponto mais oriental das Américas, com farol histórico e vista privilegiada do Atlântico.',
    categoria: 'lugares-visitar',
    subcategoria: 'monumentos',
    cidade: 'João Pessoa',
    estado: 'PB',
    endereco: 'Ponta do Cabo Branco, João Pessoa - PB',
    coordenadas: '-7.1497,-34.7936',
    horarioFuncionamento: 'Aberto todos os dias',
    preco: 'Gratuito',
    imagemUrl: '/images/geral/rn-forte.jpg',
    rotaFrontend: '/pb/cabo-branco',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/rn-forte.jpg', '/images/geral/rn-natureza.jpg'],
      galleryImages: [{ src: '/images/geral/rn-forte.jpg' }, { src: '/images/geral/rn-natureza.jpg' }],
    }),
  },
  {
    nome: 'Praia de Tambaba',
    descricao: 'Falésias avermelhadas, piscinas naturais e uma das praias mais belas do litoral nordestino.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Conde',
    estado: 'PB',
    endereco: 'Praia de Tambaba, Conde - PB',
    coordenadas: '-7.4167,-34.8333',
    horarioFuncionamento: 'Aberto todos os dias',
    preco: 'Gratuito',
    imagemUrl: '/images/geral/rn-pipa.jpg',
    rotaFrontend: '/pb/praia-de-tambaba',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/rn-pipa.jpg', '/images/geral/rn-baiaformosa.jpg'],
      galleryImages: [{ src: '/images/geral/rn-pipa.jpg' }, { src: '/images/geral/rn-baiaformosa.jpg' }],
    }),
  },
  {
    nome: 'Praia de Coqueirinho',
    descricao: 'Piscinas naturais entre falésias coloridas, considerada uma das praias mais bonitas da Paraíba.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Conde',
    estado: 'PB',
    endereco: 'Praia de Coqueirinho, Conde - PB',
    coordenadas: '-7.4500,-34.8167',
    horarioFuncionamento: 'Aberto todos os dias',
    preco: 'Gratuito',
    imagemUrl: '/images/geral/rn-baiaformosa.jpg',
    rotaFrontend: '/pb/praia-de-coqueirinho',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/rn-baiaformosa.jpg', '/images/geral/rn-pipa.jpg'],
      galleryImages: [{ src: '/images/geral/rn-baiaformosa.jpg' }, { src: '/images/geral/rn-pipa.jpg' }],
    }),
  },
  {
    nome: 'Centro Histórico de João Pessoa',
    descricao: 'Uma das cidades mais verdes do mundo, com igrejas barrocas, casarões coloniais e o Parque Solon de Lucena.',
    categoria: 'lugares-visitar',
    subcategoria: 'monumentos',
    cidade: 'João Pessoa',
    estado: 'PB',
    endereco: 'Centro Histórico, João Pessoa - PB',
    coordenadas: '-7.1195,-34.8450',
    horarioFuncionamento: 'Aberto todos os dias',
    preco: 'Gratuito',
    imagemUrl: '/images/geral/pelo.jpg',
    rotaFrontend: '/pb/centro-historico-joao-pessoa',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/pelo.jpg', '/images/geral/pelo-xx.jpg'],
      galleryImages: [{ src: '/images/geral/pelo.jpg' }, { src: '/images/geral/pelo-xx.jpg' }],
    }),
  },
  {
    nome: 'Lagoa de Guaribas',
    descricao: 'Lagoa de águas calmas cercada de coqueiros, ideal para esportes aquáticos e passeios de caiaque.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Cabedelo',
    estado: 'PB',
    endereco: 'Lagoa de Guaribas, Cabedelo - PB',
    coordenadas: '-6.9833,-34.8333',
    horarioFuncionamento: 'Aberto todos os dias',
    preco: 'Gratuito (aluguel de equipamentos à parte)',
    imagemUrl: '/images/geral/rn-maracajau.jpg',
    rotaFrontend: '/pb/lagoa-de-guaribas',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/rn-maracajau.jpg', '/images/geral/rn-natureza.jpg'],
      galleryImages: [{ src: '/images/geral/rn-maracajau.jpg' }, { src: '/images/geral/rn-natureza.jpg' }],
    }),
  },
  {
    nome: 'Areia e o Brejo Paraibano',
    descricao: 'Cidade histórica no Brejo Paraibano, com casarões coloniais, museus e a famosa cachaça artesanal.',
    categoria: 'lugares-visitar',
    subcategoria: 'monumentos',
    cidade: 'Areia',
    estado: 'PB',
    endereco: 'Centro Histórico de Areia - PB',
    coordenadas: '-6.9667,-35.7000',
    horarioFuncionamento: 'Aberto todos os dias',
    preco: 'Gratuito',
    imagemUrl: '/images/geral/rn-cultura.jpg',
    rotaFrontend: '/pb/areia-centro',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/rn-cultura.jpg', '/images/geral/pelo.jpg'],
      galleryImages: [{ src: '/images/geral/rn-cultura.jpg' }, { src: '/images/geral/pelo.jpg' }],
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
  console.log(`\nAdicionando ${LOCAIS.length} locais da Paraíba...\n`);
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
