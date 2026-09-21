#!/usr/bin/env node
/**
 * Uso: node scripts/add-local.js
 * Edite o objeto LOCAL abaixo com os dados do novo local e rode o script.
 */

const API_URL = 'https://gadys-backend.onrender.com'

const LOCAL = {
  nome: 'Reserva Extrativista Chico Mendes',
  descricao: 'Criada em 1990, a reserva protege cerca de 970 mil hectares de floresta amazônica e comunidades tradicionais de seringueiros no sudoeste do Acre.',
  categoria: 'lugares-visitar',
  subcategoria: 'lugares-paradisiacos',
  cidade: 'Xapuri',
  estado: 'AC',
  endereco: 'Sede: Rua Euclides Fernandes, Xapuri - AC',
  coordenadas: '-10.4833,-68.5000',
  horarioFuncionamento: 'Visitas mediante agendamento prévio',
  preco: 'Entrada gratuita',
  imagemUrl: '/images/geral/ac-reserva.jpg',
  rotaFrontend: '/acre/reserva-extrativista-chico-mendes',
  status: 'ATIVO',
  enviadoPor: 'GADYS',
  informacoesAdicionais: JSON.stringify({
    carouselImages: ['/images/geral/ac-reserva.jpg', '/images/geral/ac-chan1.jpg'],
    galleryImages: [
      { src: '/images/geral/ac-reserva.jpg' },
      { src: '/images/geral/ac-chan1.jpg' },
      { src: '/images/geral/amazonas1.avif' },
      { src: '/images/geral/ac-memorial.jpg' },
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
