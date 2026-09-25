#!/usr/bin/env node
// node scripts/delete-reserva-chico-mendes.js

const API_URL = 'https://gadys-backend.onrender.com';

async function main() {
  const res = await fetch(`${API_URL}/api/locais`);
  if (!res.ok) throw new Error(`Erro ao buscar locais: ${res.status}`);
  const locais = await res.json();

  const alvo = locais.find(l => l.nome === 'Reserva Extrativista Chico Mendes');
  if (!alvo) return console.log('Local não encontrado no banco.');

  console.log(`Encontrado: ID ${alvo.id} | ${alvo.nome}`);

  const del = await fetch(`${API_URL}/api/locais/${alvo.id}`, { method: 'DELETE' });
  if (!del.ok) throw new Error(`Erro ao deletar: ${del.status}`);
  console.log(`✓ Deletado com sucesso.`);
}

main().catch(e => { console.error('Erro:', e.message); process.exit(1); });
