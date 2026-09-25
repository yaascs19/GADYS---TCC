#!/usr/bin/env node
// Uso: node scripts/add-bahia-df.js

const API_URL = 'https://gadys-backend.onrender.com'

const LOCAIS = [
  {
    nome: 'Pelourinho',
    descricao: 'Centro histórico de Salvador, Patrimônio Mundial da UNESCO, com arquitetura colonial colorida, igrejas barrocas e a mais viva expressão da cultura afro-brasileira.',
    categoria: 'lugares-visitar',
    subcategoria: 'monumentos',
    cidade: 'Salvador',
    estado: 'BA',
    endereco: 'Largo do Pelourinho, Salvador - BA',
    coordenadas: '-12.9714,-38.5102',
    horarioFuncionamento: 'Aberto todos os dias',
    preco: 'Entrada gratuita',
    imagemUrl: '/images/geral/pelo-xx.jpg',
    rotaFrontend: '/ba/pelourinho',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/pelo-xx.jpg', '/images/geral/pelo.jpg', '/images/geral/pelo3.jpg'],
      galleryImages: [
        { src: '/images/geral/pelo-xx.jpg' },
        { src: '/images/geral/pelo.jpg' },
        { src: '/images/geral/pelo3.jpg' },
        { src: '/images/geral/pelou1.jpg' },
        { src: '/images/geral/pelou2.jpg' },
      ],
    }),
  },
  {
    nome: 'Chapada Diamantina',
    descricao: 'Parque Nacional com cachoeiras, grutas, serras e trilhas deslumbrantes no coração da Bahia. Destino obrigatório para ecoturismo e aventura.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Lençóis',
    estado: 'BA',
    endereco: 'Parque Nacional da Chapada Diamantina, Lençóis - BA',
    coordenadas: '-12.4622,-41.4431',
    horarioFuncionamento: 'Aberto todos os dias',
    preco: 'Entrada gratuita (trilhas guiadas têm custo)',
    imagemUrl: '/images/natureza/chapada.jpeg',
    rotaFrontend: '/ba/chapada-diamantina',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/natureza/chapada.jpeg', '/images/natureza/lencois.jpeg'],
      galleryImages: [
        { src: '/images/natureza/chapada.jpeg' },
        { src: '/images/natureza/lencois.jpeg' },
        { src: '/images/natureza/veadeiros.jpeg' },
      ],
    }),
  },
  {
    nome: 'Porto Seguro',
    descricao: 'Cidade histórica onde o Brasil foi descoberto em 1500. Combina praias paradisíacas, centro histórico tombado e agitada vida noturna.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Porto Seguro',
    estado: 'BA',
    endereco: 'Centro Histórico, Porto Seguro - BA',
    coordenadas: '-16.4497,-39.0647',
    horarioFuncionamento: 'Aberto todos os dias',
    preco: 'Entrada gratuita',
    imagemUrl: '/images/geral/pelo.jpg',
    rotaFrontend: '/ba/porto-seguro',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/pelo.jpg', '/images/natureza/noronha.jpeg'],
      galleryImages: [
        { src: '/images/geral/pelo.jpg' },
        { src: '/images/natureza/noronha.jpeg' },
      ],
    }),
  },
  {
    nome: 'Morro de São Paulo',
    descricao: 'Ilha paradisíaca sem carros, com praias de águas cristalinas numeradas, vida noturna animada e acesso apenas por barco ou avião.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Cairu',
    estado: 'BA',
    endereco: 'Morro de São Paulo, Cairu - BA',
    coordenadas: '-13.3764,-38.9131',
    horarioFuncionamento: 'Aberto todos os dias',
    preco: 'Taxa de preservação ambiental',
    imagemUrl: '/images/natureza/noronha.jpeg',
    rotaFrontend: '/ba/morro-de-sao-paulo',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/natureza/noronha.jpeg', '/images/natureza/bonito.jpeg'],
      galleryImages: [
        { src: '/images/natureza/noronha.jpeg' },
        { src: '/images/natureza/bonito.jpeg' },
      ],
    }),
  },
  {
    nome: 'Elevador Lacerda',
    descricao: 'Cartão-postal de Salvador inaugurado em 1873, conecta a Cidade Alta à Cidade Baixa com vista panorâmica da Baía de Todos os Santos.',
    categoria: 'lugares-visitar',
    subcategoria: 'monumentos',
    cidade: 'Salvador',
    estado: 'BA',
    endereco: 'Praça Cayru, s/n, Comércio, Salvador - BA',
    coordenadas: '-12.9741,-38.5143',
    horarioFuncionamento: 'Seg a Sex: 7h–21h | Sáb, Dom e Feriados: 7h–21h',
    preco: 'R$ 0,15',
    imagemUrl: '/images/monumentos/pelourinho.jpg',
    rotaFrontend: '/ba/elevador-lacerda',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/monumentos/pelourinho.jpg', '/images/geral/pelo-xx.jpg'],
      galleryImages: [
        { src: '/images/monumentos/pelourinho.jpg' },
        { src: '/images/geral/pelo-xx.jpg' },
      ],
    }),
  },
  {
    nome: 'Lençóis Baianos',
    descricao: 'Vila histórica charmosa na Chapada Diamantina, ponto de partida para trilhas e cachoeiras, com casarões coloniais e rios de águas coloridas.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Lençóis',
    estado: 'BA',
    endereco: 'Centro, Lençóis - BA',
    coordenadas: '-12.5597,-41.3897',
    horarioFuncionamento: 'Aberto todos os dias',
    preco: 'Entrada gratuita',
    imagemUrl: '/images/natureza/lencois.jpeg',
    rotaFrontend: '/ba/lencois',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/natureza/lencois.jpeg', '/images/natureza/chapada.jpeg'],
      galleryImages: [
        { src: '/images/natureza/lencois.jpeg' },
        { src: '/images/natureza/chapada.jpeg' },
      ],
    }),
  },
  {
    nome: 'Congresso Nacional',
    descricao: 'Sede do Poder Legislativo brasileiro, projetado por Oscar Niemeyer. Suas cúpulas invertidas são símbolo da arquitetura modernista de Brasília.',
    categoria: 'lugares-visitar',
    subcategoria: 'monumentos',
    cidade: 'Brasília',
    estado: 'DF',
    endereco: 'Praça dos Três Poderes, Brasília - DF',
    coordenadas: '-15.7998,-47.8645',
    horarioFuncionamento: 'Seg a Sex: 9h–17h | Sáb e Dom: 9h–13h',
    preco: 'Entrada gratuita',
    imagemUrl: '/images/monumentos/pala.jpeg',
    rotaFrontend: '/df/congresso-nacional',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/monumentos/pala.jpeg', '/images/monumentos/jus.jpeg'],
      galleryImages: [
        { src: '/images/monumentos/pala.jpeg' },
        { src: '/images/monumentos/jus.jpeg' },
        { src: '/images/monumentos/zero.jpeg' },
      ],
    }),
  },
  {
    nome: 'Catedral de Brasília',
    descricao: 'Obra-prima de Oscar Niemeyer inaugurada em 1970, com estrutura de 16 colunas curvas que simbolizam mãos erguidas ao céu e vitrais coloridos.',
    categoria: 'lugares-visitar',
    subcategoria: 'monumentos',
    cidade: 'Brasília',
    estado: 'DF',
    endereco: 'Esplanada dos Ministérios, Brasília - DF',
    coordenadas: '-15.7986,-47.8756',
    horarioFuncionamento: 'Ter a Dom: 8h–18h',
    preco: 'Entrada gratuita',
    imagemUrl: '/images/monumentos/Catedral_Sé.jpg',
    rotaFrontend: '/df/catedral-de-brasilia',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/monumentos/Catedral_Sé.jpg', '/images/monumentos/pala.jpeg'],
      galleryImages: [
        { src: '/images/monumentos/Catedral_Sé.jpg' },
        { src: '/images/monumentos/pala.jpeg' },
      ],
    }),
  },
  {
    nome: 'Palácio do Planalto',
    descricao: 'Sede do governo federal brasileiro, projetado por Niemeyer e inaugurado em 1960. A troca da guarda é um dos espetáculos mais visitados de Brasília.',
    categoria: 'lugares-visitar',
    subcategoria: 'monumentos',
    cidade: 'Brasília',
    estado: 'DF',
    endereco: 'Praça dos Três Poderes, Brasília - DF',
    coordenadas: '-15.7997,-47.8608',
    horarioFuncionamento: 'Dom: 9h30–14h (visitação pública)',
    preco: 'Entrada gratuita',
    imagemUrl: '/images/monumentos/pala.jpeg',
    rotaFrontend: '/df/palacio-do-planalto',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/monumentos/pala.jpeg', '/images/monumentos/jus.jpeg'],
      galleryImages: [
        { src: '/images/monumentos/pala.jpeg' },
        { src: '/images/monumentos/jus.jpeg' },
      ],
    }),
  },
  {
    nome: 'Chapada dos Veadeiros',
    descricao: 'Parque Nacional Patrimônio Mundial da UNESCO com cachoeiras, cânions, trilhas e uma das maiores biodiversidades do Cerrado brasileiro.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Alto Paraíso de Goiás',
    estado: 'DF',
    endereco: 'Parque Nacional Chapada dos Veadeiros, Alto Paraíso - GO',
    coordenadas: '-14.1333,-47.6833',
    horarioFuncionamento: 'Ter a Dom: 8h–17h',
    preco: 'R$ 19,00 (meia para estudantes)',
    imagemUrl: '/images/natureza/veadeiros.jpeg',
    rotaFrontend: '/df/chapada-dos-veadeiros',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/natureza/veadeiros.jpeg', '/images/natureza/chapada.jpeg'],
      galleryImages: [
        { src: '/images/natureza/veadeiros.jpeg' },
        { src: '/images/natureza/chapada.jpeg' },
      ],
    }),
  },
  {
    nome: 'Lago Paranoá',
    descricao: 'Lago artificial de 40 km² criado para equilibrar a umidade de Brasília. Hoje é polo de lazer, esportes náuticos, restaurantes e bares à beira d\'água.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Brasília',
    estado: 'DF',
    endereco: 'Lago Paranoá, Brasília - DF',
    coordenadas: '-15.7833,-47.8167',
    horarioFuncionamento: 'Aberto todos os dias',
    preco: 'Entrada gratuita',
    imagemUrl: '/images/monumentos/zero.jpeg',
    rotaFrontend: '/df/lago-paranoa',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/monumentos/zero.jpeg', '/images/monumentos/pala.jpeg'],
      galleryImages: [
        { src: '/images/monumentos/zero.jpeg' },
        { src: '/images/monumentos/pala.jpeg' },
      ],
    }),
  },
]

async function addLocal(local) {
  const res = await fetch(`${API_URL}/api/locais`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(local),
  })
  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Erro ${res.status}: ${err}`)
  }
  const created = await res.json()
  await fetch(`${API_URL}/api/locais/aprovar/${created.id}`, { method: 'POST' })
  return created
}

async function main() {
  console.log(`\nAdicionando ${LOCAIS.length} locais (Bahia + DF)...\n`)
  for (const local of LOCAIS) {
    try {
      const created = await addLocal(local)
      console.log(`✓ ${created.nome} | ID: ${created.id} | ${created.rotaFrontend}`)
    } catch (e) {
      console.error(`✗ ${local.nome}: ${e.message}`)
    }
  }
  console.log('\nConcluído!')
}

main().catch(e => { console.error('Erro:', e.message); process.exit(1) })
