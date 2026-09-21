#!/usr/bin/env node
/**
 * Uso: node scripts/add-local.js
 * Edite o objeto LOCAL abaixo com os dados do novo local e rode o script.
 */

const API_URL = 'https://gadys-backend.onrender.com'

const LOCAL = {
  nome: 'Memorial Chico Mendes',
  descricao: 'Casa preservada onde viveu e foi assassinado o seringueiro e ambientalista Chico Mendes em 1988, símbolo mundial da luta pela Amazônia.',
  categoria: 'lugares-visitar',
  subcategoria: 'monumentos',
  cidade: 'Xapuri',
  estado: 'AC',
  endereco: 'Rua Euclides Fernandes, s/n, Xapuri - AC',
  coordenadas: '-10.6519,-68.5022',
  horarioFuncionamento: 'Seg a Sex, 8h às 12h e 14h às 17h',
  preco: 'Entrada gratuita',
  imagemUrl: '/images/geral/ac-memorial.jpg',
  rotaFrontend: '/acre/memorial-chico-mendes',
  status: 'ATIVO',
  enviadoPor: 'GADYS',
  informacoesAdicionais: JSON.stringify({
    carouselImages: ['/images/geral/ac-memorial.jpg', '/images/geral/ac-reserva.jpg'],
    galleryImages: [
      { src: '/images/geral/ac-memorial.jpg' },
      { src: '/images/geral/ac-reserva.jpg' },
      { src: '/images/geral/amazonas1.avif' },
      { src: '/images/geral/ac-chan1.jpg' },
    ],
  }),
}

async function main() {
  console.log(`\nAdicionando "${LOCAL.nome}" no banco...`)

  const res = await fetch(`${API_URL}/api/locais`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(LOCAL),
  })

  if (!res.ok) {
    const err = await res.text()
    console.error(`Erro ${res.status}:`, err)
    process.exit(1)
  }

  const local = await res.json()

  const aprovRes = await fetch(`${API_URL}/api/locais/aprovar/${local.id}`, { method: 'POST' })
  if (!aprovRes.ok) console.warn('Nao foi possivel aprovar automaticamente. Aprove pelo painel admin.')

  console.log(`Local criado! ID: ${local.id} | Rota: ${local.rotaFrontend} | Status: ${local.status}`)
}

main().catch(e => { console.error('Erro:', e.message); process.exit(1) })
