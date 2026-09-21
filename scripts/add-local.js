#!/usr/bin/env node
/**
 * Uso: node scripts/add-local.js
 * Edite o objeto LOCAL abaixo com os dados do novo local e rode o script.
 */

const API_URL = 'https://gadys-backend.onrender.com'

const LOCAL = {
  nome: 'Nome do Local',
  descricao: 'Descrição curta do local.',
  categoria: 'lugares-visitar',
  subcategoria: 'monumentos', // monumentos | lugares-paradisiacos | restaurantes
  cidade: 'Cidade',
  estado: 'UF',
  endereco: 'Endereço completo',
  coordenadas: '-00.0000,-00.0000',
  horarioFuncionamento: 'Seg a Dom, 8h às 18h',
  preco: 'Gratuito',
  imagemUrl: '/images/geral/foto1.jpg',
  rotaFrontend: '/rota-do-componente', // deve bater exatamente com a rota no Router.jsx
  status: 'ATIVO',
  enviadoPor: 'GADYS',
  informacoesAdicionais: JSON.stringify({
    carouselImages: ['/images/geral/foto1.jpg', '/images/geral/foto2.jpg'],
    galleryImages: [
      { src: '/images/geral/foto3.jpg' },
      { src: '/images/geral/foto4.jpg' },
    ],
    secoes: {
      sobre: {
        label: 'Sobre',
        titulo: 'Título da seção sobre',
        texto: 'Texto descritivo do local...',
        imagem: '/images/geral/foto1.jpg',
      },
      visite: {
        label: 'Visite',
        titulo: 'Informações Práticas',
        texto: '',
        subsecoes: [
          { titulo: 'Como Chegar', texto: 'Instruções de como chegar...' },
        ],
      },
      fotos: { label: 'Fotos' },
      avaliacoes: { label: 'Avaliações' },
    },
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
