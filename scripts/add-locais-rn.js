#!/usr/bin/env node

const API_URL = 'https://gadys-backend.onrender.com';

const LOCAIS = [
  {
    nome: 'Dunas de Genipabu',
    descricao: 'O deserto à beira-mar — dunas gigantes, lagoas de água doce e o famoso passeio de dromedário a 25 km de Natal.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Extremoz',
    estado: 'RN',
    endereco: 'Parque Estadual das Dunas de Genipabu, Extremoz - RN',
    coordenadas: '-5.6333,-35.2167',
    horarioFuncionamento: 'Diariamente, 8h às 17h',
    preco: 'Buggy a partir de R$ 150',
    imagemUrl: '/images/geral/rn-genipabu.jpg',
    rotaFrontend: '/rn/genipabu',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/rn-genipabu.jpg', '/images/geral/rn1.jpg'],
      galeriaImages: [
        { src: '/images/geral/rn-genipabu.jpg', alt: 'Dunas de Genipabu' },
        { src: '/images/geral/rn1.jpg', alt: 'Lagoa de Genipabu' },
        { src: '/images/geral/rn2.jpg', alt: 'Passeio de buggy em Genipabu' },
      ],
    }),
  },
  {
    nome: 'Praia de Pipa',
    descricao: 'Falésias avermelhadas, Baía dos Golfinhos e a vila mais charmosa do Nordeste, a 85 km de Natal.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Tibau do Sul',
    estado: 'RN',
    endereco: 'Praia de Pipa, Tibau do Sul - RN',
    coordenadas: '-6.2289,-35.0508',
    horarioFuncionamento: 'Aberto o ano todo',
    preco: 'Gratuito (praia pública)',
    imagemUrl: '/images/geral/rn-pipa.jpg',
    rotaFrontend: '/rn/pipa',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/rn-pipa.jpg', '/images/geral/rn2.jpg'],
      galeriaImages: [
        { src: '/images/geral/rn-pipa.jpg', alt: 'Praia de Pipa' },
        { src: '/images/geral/rn2.jpg', alt: 'Falésias de Pipa' },
        { src: '/images/geral/rn3.jpg', alt: 'Golfinhos em Pipa' },
      ],
    }),
  },
  {
    nome: 'Maracajaú',
    descricao: 'Os parrachos mais bonitos do Brasil — piscinas naturais de corais a 7 km do litoral com visibilidade de até 10 metros.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Maxaranguape',
    estado: 'RN',
    endereco: 'Porto de Maracajaú, Maxaranguape - RN',
    coordenadas: '-5.5167,-35.2833',
    horarioFuncionamento: 'Diariamente (depende da maré)',
    preco: 'Passeio a partir de R$ 80',
    imagemUrl: '/images/geral/rn-maracajau.jpg',
    rotaFrontend: '/rn/maracajau',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/rn-maracajau.jpg', '/images/geral/rn3.jpg'],
      galeriaImages: [
        { src: '/images/geral/rn-maracajau.jpg', alt: 'Maracajaú' },
        { src: '/images/geral/rn3.jpg', alt: 'Parrachos de Maracajaú' },
        { src: '/images/geral/rn4.jpg', alt: 'Mergulho em Maracajaú' },
      ],
    }),
  },
  {
    nome: 'Parque das Dunas',
    descricao: 'A maior reserva de Mata Atlântica urbana do Brasil — 1.172 hectares com trilhas ecológicas no coração de Natal.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Natal',
    estado: 'RN',
    endereco: 'Av. Alexandrino de Alencar, 1920, Tirol, Natal - RN',
    coordenadas: '-5.8333,-35.2000',
    horarioFuncionamento: 'Ter a Dom, 8h às 17h',
    preco: 'Entrada gratuita',
    imagemUrl: '/images/geral/rn-parquedunas.jpg',
    rotaFrontend: '/rn/parque-das-dunas',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/rn-parquedunas.jpg', '/images/geral/rn4.jpg'],
      galeriaImages: [
        { src: '/images/geral/rn-parquedunas.jpg', alt: 'Parque das Dunas' },
        { src: '/images/geral/rn4.jpg', alt: 'Trilha no Parque das Dunas' },
        { src: '/images/geral/rn1.jpg', alt: 'Fauna do Parque das Dunas' },
      ],
    }),
  },
  {
    nome: 'Forte dos Reis Magos',
    descricao: 'O símbolo de Natal — fortaleza portuguesa em estrela do século XVI onde o Rio Potengi encontra o Atlântico.',
    categoria: 'lugares-visitar',
    subcategoria: 'monumentos',
    cidade: 'Natal',
    estado: 'RN',
    endereco: 'Via Costeira, Praia do Forte, Natal - RN',
    coordenadas: '-5.7608,-35.1983',
    horarioFuncionamento: 'Ter a Dom, 8h às 16h30',
    preco: 'R$ 10 (adulto)',
    imagemUrl: '/images/geral/rn-forte.jpg',
    rotaFrontend: '/rn/forte-dos-reis-magos',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/rn-forte.jpg', '/images/geral/rn2.jpg'],
      galeriaImages: [
        { src: '/images/geral/rn-forte.jpg', alt: 'Forte dos Reis Magos' },
        { src: '/images/geral/rn2.jpg', alt: 'Vista aérea do Forte' },
        { src: '/images/geral/rn3.jpg', alt: 'Interior do Forte dos Reis Magos' },
      ],
    }),
  },
  {
    nome: 'Baía Formosa',
    descricao: 'Praias selvagens com 14 km de extensão, falésias coloridas e piscinas naturais no litoral sul potiguar.',
    categoria: 'lugares-visitar',
    subcategoria: 'lugares-paradisiacos',
    cidade: 'Baía Formosa',
    estado: 'RN',
    endereco: 'Praia de Baía Formosa, Baía Formosa - RN',
    coordenadas: '-6.3667,-35.0000',
    horarioFuncionamento: 'Aberto o ano todo',
    preco: 'Gratuito (praia pública)',
    imagemUrl: '/images/geral/rn-baiaformosa.jpg',
    rotaFrontend: '/rn/baia-formosa',
    status: 'ATIVO',
    enviadoPor: 'GADYS',
    informacoesAdicionais: JSON.stringify({
      carouselImages: ['/images/geral/rn-baiaformosa.jpg', '/images/geral/rn4.jpg'],
      galeriaImages: [
        { src: '/images/geral/rn-baiaformosa.jpg', alt: 'Baía Formosa' },
        { src: '/images/geral/rn4.jpg', alt: 'Praia de Baía Formosa' },
        { src: '/images/geral/rn1.jpg', alt: 'Falésias de Baía Formosa' },
      ],
    }),
  },
];

async function addLocal(local) {
  const res = await fetch(`${API_URL}/api/locais`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(local),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`);
  const criado = await res.json();
  const aprov = await fetch(`${API_URL}/api/locais/aprovar/${criado.id}`, { method: 'POST' });
  if (!aprov.ok) console.warn(`  ⚠ Aprovar ID ${criado.id} manualmente no painel admin.`);
  return criado;
}

async function main() {
  console.log(`\n🚀 Adicionando ${LOCAIS.length} locais do RN no banco...\n`);
  let ok = 0, erros = 0;
  for (const local of LOCAIS) {
    process.stdout.write(`  → ${local.estado} | ${local.nome} ... `);
    try {
      const criado = await addLocal(local);
      console.log(`✅ ID ${criado.id}`);
      ok++;
    } catch (e) {
      console.log(`❌ ${e.message}`);
      erros++;
    }
  }
  console.log(`\n✅ ${ok} adicionados | ❌ ${erros} erros\n`);
}

main().catch(e => { console.error('Erro fatal:', e.message); process.exit(1); });
