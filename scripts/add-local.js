#!/usr/bin/env node
/**
 * Uso: node scripts/add-local.js
 * Edite o objeto LOCAL abaixo com os dados do novo local e rode o script.
 */

const API_URL = 'https://gadys-backend.onrender.com'

const LOCAL = {
  nome: 'Parque Zoobotânico de Rio Branco',
  descricao: 'Um dos maiores parques urbanos da Amazônia, com zoológico, trilhas ecológicas e jardim botânico no campus da UFAC.',
  categoria: 'lugares-visitar',
  subcategoria: 'lugares-paradisiacos',
  cidade: 'Rio Branco',
  estado: 'AC',
  endereco: 'Rodovia BR-364, km 04, Campus UFAC, Rio Branco - AC',
  coordenadas: '-9.9574,-67.8731',
  horarioFuncionamento: 'Ter a Dom, 8h às 17h',
  preco: 'Entrada gratuita para estudantes e crianças até 12 anos',
  imagemUrl: '/images/geral/ac-parquezoo.jpg',
  rotaFrontend: '/acre/parque-zoobotanico',
  status: 'ATIVO',
  enviadoPor: 'GADYS',
  informacoesAdicionais: JSON.stringify({
    carouselImages: ['/images/geral/ac-parquezoo.jpg', '/images/geral/amazonas1.avif'],
    galleryImages: [
      { src: '/images/geral/ac-parquezoo.jpg' },
      { src: '/images/geral/amazonas1.avif' },
      { src: '/images/geral/amazonas2.jpg' },
      { src: '/images/geral/amazonas3.1.jpg' },
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
