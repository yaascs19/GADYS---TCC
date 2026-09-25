#!/usr/bin/env node
// node scripts/add-local-cristo-redentor.js

const API_URL = 'https://gadys-backend.onrender.com';

const LOCAL = {
  nome: 'Cristo Redentor',
  descricao: 'Uma das Sete Maravilhas do Mundo Moderno, o Cristo Redentor é o símbolo do Brasil. Localizado no topo do Morro do Corcovado, oferece vista panorâmica de 360° do Rio de Janeiro.',
  categoria: 'lugares-visitar',
  subcategoria: 'monumentos',
  cidade: 'Rio de Janeiro',
  estado: 'RJ',
  endereco: 'Parque Nacional da Tijuca, Morro do Corcovado, Rio de Janeiro - RJ',
  coordenadas: '-22.9519,-43.2105',
  horarioFuncionamento: 'Diariamente: 8h às 19h',
  preco: 'A partir de R$ 79,00',
  imagemUrl: '/images/geral/cr-rj.webp',
  rotaFrontend: '/cristo-redentor',
  status: 'ATIVO',
  enviadoPor: 'GADYS',
  informacoesAdicionais: JSON.stringify({
    carouselImages: ['/images/geral/cr-rj.webp', '/images/monumentos/cristo.webp', '/rj.jpeg'],
    galleryImages: [
      { src: '/images/geral/cr-rj.webp' },
      { src: '/images/monumentos/cristo.webp' },
      { src: '/rj.jpeg' },
    ],
  }),
};

async function main() {
  console.log('\nAdicionando Cristo Redentor...\n');
  const res = await fetch(`${API_URL}/api/locais`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(LOCAL),
  });
  if (!res.ok) throw new Error(`Erro ${res.status}: ${await res.text()}`);
  const criado = await res.json();
  console.log(`✓ ${criado.nome} | ID: ${criado.id} | Rota: ${criado.rotaFrontend}`);

  const aprovRes = await fetch(`${API_URL}/api/locais/aprovar/${criado.id}`, { method: 'POST' });
  if (!aprovRes.ok) console.warn(`⚠ Não foi possível aprovar automaticamente o ID ${criado.id}.`);
  else console.log(`✓ Aprovado com sucesso.`);

  console.log('\nConcluído.');
}

main().catch(e => { console.error('Erro:', e.message); process.exit(1); });
