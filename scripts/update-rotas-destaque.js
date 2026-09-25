#!/usr/bin/env node
// node scripts/update-rotas-destaque.js

const API_URL = 'https://gadys-backend.onrender.com';

const UPDATES = [
  { id: 478, rotaFrontend: '/pao-de-acucar' },
  { id: 479, rotaFrontend: '/cataratas-iguacu' },
  { id: 480, rotaFrontend: '/pelourinho' },
  { id: 481, rotaFrontend: '/fernando-noronha' },
  { id: 482, rotaFrontend: '/pantanal' },
];

async function updateRota({ id, rotaFrontend }) {
  // 1. busca o local completo
  const getRes = await fetch(`${API_URL}/api/locais/${id}`);
  if (!getRes.ok) throw new Error(`GET falhou: ${getRes.status}`);
  const local = await getRes.json();

  // 2. envia de volta com a rota corrigida
  const putRes = await fetch(`${API_URL}/api/locais/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...local, rotaFrontend }),
  });
  if (!putRes.ok) throw new Error(`PUT falhou: ${putRes.status} — ${await putRes.text()}`);
  return putRes.json();
}

async function main() {
  console.log('\nAcordando o servidor...');
  try { await fetch(`${API_URL}/api/locais`); } catch { /* ignora */ }
  await new Promise(r => setTimeout(r, 3000));

  console.log('\nAtualizando rotaFrontend dos Destinos em Destaque...\n');
  for (const item of UPDATES) {
    try {
      const updated = await updateRota(item);
      console.log(`✓ ID ${item.id} | rotaFrontend: ${updated.rotaFrontend}`);
    } catch (e) {
      console.error(`✗ ID ${item.id}: ${e.message}`);
    }
  }
  console.log('\nConcluído.');
}

main().catch(e => { console.error('Erro:', e.message); process.exit(1); });
