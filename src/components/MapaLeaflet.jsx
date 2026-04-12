import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './ContatoPage.css'

function MapaLeaflet() {
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true')
  const [menuOpen, setMenuOpen] = useState(false)
  const [categoria, setCategoria] = useState('todas')
  const [preco, setPreco] = useState('todos')
  const [distancia, setDistancia] = useState(3000)
  const [userLocation, setUserLocation] = useState(null)
  const [lugaresVisiveis, setLugaresVisiveis] = useState([])
  const isAdmin = (localStorage.getItem('userType') || '').toUpperCase() === 'ADM'
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

  const toggleTheme = () => {
    const n = !darkMode
    setDarkMode(n)
    localStorage.setItem('darkMode', n.toString())
  }

  const calcularDistancia = (lat1, lng1, lat2, lng2) => {
    const R = 6371
    const dLat = (lat2 - lat1) * Math.PI / 180
    const dLng = (lng2 - lng1) * Math.PI / 180
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2)
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  }

  const getMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude
          const lng = position.coords.longitude
          setUserLocation({ lat, lng })
          fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&limit=1`)
            .then(r => r.json())
            .then(data => {
              const searchInput = document.getElementById('searchInput')
              if (searchInput && data?.display_name) searchInput.value = data.display_name
            }).catch(() => {})
          if (window.currentMap) window.currentMap.setView([lat, lng], 10)
        },
        (error) => alert('Erro ao obter localização: ' + error.message)
      )
    } else {
      alert('Geolocalização não é suportada neste navegador.')
    }
  }

  const lugares = [
    { nome: 'Teatro Amazonas', lat: -3.1302, lng: -60.0231, cor: '#4caf50', cidade: 'Manaus - AM', categoria: 'Monumentos', preco: 'pago' },
    { nome: 'Encontro das Águas', lat: -3.1190, lng: -59.9050, cor: '#8bc34a', cidade: 'Manaus - AM', categoria: 'Lugar Paradísíaco', preco: 'gratuito' },
    { nome: 'Arquipélago de Anavilhanas', lat: -2.6833, lng: -60.9500, cor: '#2e7d32', cidade: 'Novo Airão - AM', categoria: 'Lugar Paradísíaco', preco: 'gratuito' },
    { nome: 'Amazônico Peixaria Regional', lat: -3.1316, lng: -60.0233, cor: '#ff9800', cidade: 'Manaus - AM', categoria: 'Restaurantes', preco: 'pago' },
    { nome: 'Bumbódromo', lat: -2.6278, lng: -56.7358, cor: '#e91e63', cidade: 'Parintins - AM', categoria: 'Costume Cultural', preco: 'pago' },
    { nome: 'Cachoeira do Santuário', lat: -2.0167, lng: -60.0333, cor: '#00bcd4', cidade: 'Presidente Figueiredo - AM', categoria: 'Lugar Paradísíaco', preco: 'gratuito' },
    { nome: 'Coreto Peixaria', lat: -3.1290, lng: -60.0220, cor: '#ff5722', cidade: 'Manaus - AM', categoria: 'Restaurantes', preco: 'pago' },
    { nome: 'Ponte Rio Negro', lat: -3.2167, lng: -60.0500, cor: '#607d8b', cidade: 'Manaus - AM', categoria: 'Monumentos', preco: 'gratuito' },
    { nome: 'Cristo Redentor', lat: -22.9519, lng: -43.2105, cor: '#e74c3c', cidade: 'Rio de Janeiro - RJ', categoria: 'Monumentos', preco: 'pago' },
    { nome: 'Pão de Açúcar', lat: -22.9487, lng: -43.1566, cor: '#3498db', cidade: 'Rio de Janeiro - RJ', categoria: 'Lugar Paradísíaco', preco: 'pago' },
    { nome: 'Theatro Municipal RJ', lat: -22.9103, lng: -43.1761, cor: '#9c27b0', cidade: 'Rio de Janeiro - RJ', categoria: 'Monumentos', preco: 'pago' },
    { nome: 'Escadaria Selarón', lat: -22.9147, lng: -43.1794, cor: '#f39c12', cidade: 'Rio de Janeiro - RJ', categoria: 'Costume Cultural', preco: 'gratuito' },
    { nome: 'Arcos da Lapa', lat: -22.9122, lng: -43.1800, cor: '#795548', cidade: 'Rio de Janeiro - RJ', categoria: 'Monumentos', preco: 'gratuito' },
    { nome: 'Museu do Amanhã', lat: -22.8944, lng: -43.1731, cor: '#00bcd4', cidade: 'Rio de Janeiro - RJ', categoria: 'Costume Cultural', preco: 'pago' },
    { nome: 'Praia de Copacabana', lat: -22.9711, lng: -43.1822, cor: '#1976d2', cidade: 'Rio de Janeiro - RJ', categoria: 'Lugar Paradísíaco', preco: 'gratuito' },
    { nome: 'Praia de Ipanema', lat: -22.9868, lng: -43.2044, cor: '#0288d1', cidade: 'Rio de Janeiro - RJ', categoria: 'Lugar Paradísíaco', preco: 'gratuito' },
    { nome: 'MASP', lat: -23.5614, lng: -46.6558, cor: '#e74c3c', cidade: 'São Paulo - SP', categoria: 'Costume Cultural', preco: 'pago' },
    { nome: 'Teatro Municipal SP', lat: -23.5454, lng: -46.6388, cor: '#9c27b0', cidade: 'São Paulo - SP', categoria: 'Monumentos', preco: 'pago' },
    { nome: 'Mercadão', lat: -23.5418, lng: -46.6292, cor: '#ff9800', cidade: 'São Paulo - SP', categoria: 'Restaurantes', preco: 'gratuito' },
    { nome: 'Edifício Copan', lat: -23.5455, lng: -46.6437, cor: '#607d8b', cidade: 'São Paulo - SP', categoria: 'Monumentos', preco: 'gratuito' },
    { nome: 'Parque Ibirapuera', lat: -23.5874, lng: -46.6576, cor: '#4caf50', cidade: 'São Paulo - SP', categoria: 'Lugar Paradísíaco', preco: 'gratuito' },
    { nome: 'Beco do Batman', lat: -23.5558, lng: -46.6897, cor: '#f39c12', cidade: 'São Paulo - SP', categoria: 'Costume Cultural', preco: 'gratuito' },
    { nome: 'Jericoacoara', lat: -2.7975, lng: -40.5137, cor: '#00bcd4', cidade: 'Jijoca - CE', categoria: 'Lugar Paradísíaco', preco: 'gratuito' },
    { nome: 'Canoa Quebrada', lat: -4.5167, lng: -37.6667, cor: '#ff9800', cidade: 'Aracati - CE', categoria: 'Lugar Paradísíaco', preco: 'gratuito' },
    { nome: 'Centro Dragão do Mar', lat: -3.7197, lng: -38.5069, cor: '#e91e63', cidade: 'Fortaleza - CE', categoria: 'Costume Cultural', preco: 'pago' },
    { nome: 'Beach Park', lat: -3.8333, lng: -38.3833, cor: '#1976d2', cidade: 'Aquiraz - CE', categoria: 'Lugar Paradísíaco', preco: 'pago' },
    { nome: 'Praia do Futuro', lat: -3.7667, lng: -38.4500, cor: '#0288d1', cidade: 'Fortaleza - CE', categoria: 'Lugar Paradísíaco', preco: 'gratuito' },
    { nome: 'Serra de Baturité', lat: -4.3333, lng: -38.8833, cor: '#4caf50', cidade: 'Baturité - CE', categoria: 'Lugar Paradísíaco', preco: 'gratuito' },
    { nome: 'Chapada do Araripe', lat: -7.2167, lng: -39.4167, cor: '#8bc34a', cidade: 'Crato - CE', categoria: 'Lugar Paradísíaco', preco: 'gratuito' },
    { nome: 'Centro Histórico de Fortaleza', lat: -3.7275, lng: -38.5275, cor: '#795548', cidade: 'Fortaleza - CE', categoria: 'Monumentos', preco: 'gratuito' },
    { nome: 'Alter do Chão', lat: -2.5167, lng: -54.9500, cor: '#00bcd4', cidade: 'Santarém - PA', categoria: 'Lugar Paradísíaco', preco: 'gratuito' },
    { nome: 'Mercado Ver-o-Peso', lat: -1.4558, lng: -48.5044, cor: '#ff9800', cidade: 'Belém - PA', categoria: 'Costume Cultural', preco: 'gratuito' },
    { nome: 'Feliz Lusitânia', lat: -1.4561, lng: -48.5022, cor: '#795548', cidade: 'Belém - PA', categoria: 'Monumentos', preco: 'gratuito' },
    { nome: 'Ilha de Marajó', lat: -1.0000, lng: -49.5000, cor: '#4caf50', cidade: 'Marajó - PA', categoria: 'Lugar Paradísíaco', preco: 'gratuito' },
    { nome: 'Mangal das Garças', lat: -1.4667, lng: -48.5000, cor: '#8bc34a', cidade: 'Belém - PA', categoria: 'Lugar Paradísíaco', preco: 'pago' },
    { nome: 'Parque Estadual Chandless', lat: -9.3333, lng: -70.6667, cor: '#2e7d32', cidade: 'Santa Rosa do Purus - AC', categoria: 'Lugar Paradísíaco', preco: 'gratuito' },
    { nome: 'Centro Histórico de Rio Branco', lat: -9.9753, lng: -67.8249, cor: '#795548', cidade: 'Rio Branco - AC', categoria: 'Monumentos', preco: 'gratuito' },
    { nome: 'Fortaleza de São José', lat: 0.0389, lng: -51.0664, cor: '#607d8b', cidade: 'Macapá - AP', categoria: 'Monumentos', preco: 'pago' },
    { nome: 'Ferrovia Madeira-Mamoré', lat: -8.7619, lng: -63.9039, cor: '#ff5722', cidade: 'Porto Velho - RO', categoria: 'Monumentos', preco: 'pago' },
    { nome: 'Monte Roraima', lat: 5.1439, lng: -60.7619, cor: '#9c27b0', cidade: 'Uiramutã - RR', categoria: 'Lugar Paradísíaco', preco: 'pago' },
    { nome: 'Jalapão', lat: -10.3500, lng: -46.6167, cor: '#f39c12', cidade: 'Mateiros - TO', categoria: 'Lugar Paradísíaco', preco: 'pago' },
    { nome: 'Ouro Preto', lat: -20.3856, lng: -43.5036, cor: '#795548', cidade: 'Ouro Preto - MG', categoria: 'Monumentos', preco: 'gratuito' },
    { nome: 'Instituto Inhotim', lat: -20.1281, lng: -44.1986, cor: '#4caf50', cidade: 'Brumadinho - MG', categoria: 'Costume Cultural', preco: 'pago' },
    { nome: 'Pedra Azul', lat: -20.4167, lng: -41.0167, cor: '#1976d2', cidade: 'Domingos Martins - ES', categoria: 'Lugar Paradísíaco', preco: 'pago' },
    { nome: 'Guarapari', lat: -20.6719, lng: -40.4994, cor: '#00bcd4', cidade: 'Guarapari - ES', categoria: 'Lugar Paradísíaco', preco: 'gratuito' },
  ]

  const adicionarMarcadores = (lista, map) => {
    if (!window.L || !map) return
    if (window.mapMarkers) window.mapMarkers.forEach(m => map.removeLayer(m))
    window.mapMarkers = []
    lista.forEach(lugar => {
      try {
        const marker = window.L.circleMarker([lugar.lat, lugar.lng], {
          radius: 12, fillColor: lugar.cor, color: 'white', weight: 3, opacity: 1, fillOpacity: 0.9
        }).addTo(map)
        marker.bindPopup(`
          <div style="padding:12px;font-family:Arial;min-width:180px;">
            <h3 style="margin:0 0 6px;color:#333;font-size:15px;">${lugar.nome}</h3>
            <p style="margin:0 0 8px;color:#666;font-size:12px;">${lugar.cidade}</p>
            <div style="display:flex;gap:4px;margin-bottom:10px;">
              <span style="background:#3c6e71;color:white;padding:2px 7px;border-radius:10px;font-size:10px;">${lugar.categoria}</span>
              <span style="background:${lugar.preco === 'gratuito' ? '#2ecc71' : '#e74c3c'};color:white;padding:2px 7px;border-radius:10px;font-size:10px;">${lugar.preco}</span>
            </div>
            <button onclick="window.location.href='/lugares'"
              style="background:#3c6e71;color:white;border:none;padding:8px 16px;border-radius:20px;cursor:pointer;font-size:12px;font-weight:600;width:100%;">
              Ver Detalhes
            </button>
          </div>
        `)
        window.mapMarkers.push(marker)
      } catch (e) {}
    })
  }

  useEffect(() => {
    setLugaresVisiveis(lugares)
    setTimeout(() => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
      document.head.appendChild(link)
      const script = document.createElement('script')
      script.src = `https://unpkg.com/leaflet@1.9.4/dist/leaflet.js?v=${Date.now()}`
      script.onload = () => {
        setTimeout(() => {
          if (window.L && document.getElementById('map')) {
            const map = window.L.map('map').setView([-14.2350, -51.9253], 4)
            window.L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
              attribution: '© Google Maps', maxZoom: 20
            }).addTo(map)
            window.currentMap = map
            adicionarMarcadores(lugares, map)
          }
        }, 500)
      }
      document.head.appendChild(script)
    }, 100)
  }, [])

  const aplicarFiltros = () => {
    let filtrados = lugares
    if (categoria !== 'todas') filtrados = filtrados.filter(l => l.categoria === categoria)
    if (preco !== 'todos') filtrados = filtrados.filter(l => l.preco === preco)
    if (userLocation) {
      filtrados = filtrados.filter(l =>
        calcularDistancia(userLocation.lat, userLocation.lng, l.lat, l.lng) <= distancia
      )
    }
    setLugaresVisiveis(filtrados)
    if (window.currentMap) adicionarMarcadores(filtrados, window.currentMap)
    const searchInput = document.getElementById('searchInput')
    if (searchInput?.value.trim()) {
      fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchInput.value)}&limit=1`)
        .then(r => r.json())
        .then(data => {
          if (data.length > 0) {
            const lat = parseFloat(data[0].lat), lng = parseFloat(data[0].lon)
            if (window.currentMap) window.currentMap.setView([lat, lng], 10)
          }
        }).catch(() => {})
    }
  }

  return (
    <div className={`contato-page${darkMode ? ' dark' : ''}`}>

      <header style={{
        background: darkMode ? 'rgba(15,12,41,0.95)' : '#1a237e',
        padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', position: 'sticky', top: 0, zIndex: 100,
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src="/images/logos/logo.png" alt="GADYS" style={{ height: '40px', background: 'linear-gradient(135deg, #667eea, #764ba2)', borderRadius: '50%', padding: '8px' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white' }}>GADYS</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={toggleTheme} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}>
            {darkMode ? '☀️' : '🌙'}
          </button>
          <div style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer', zIndex: 1002 }} onClick={() => setMenuOpen(!menuOpen)}>
            <span style={{ width: '25px', height: '3px', background: 'white', margin: '3px 0' }} />
            <span style={{ width: '25px', height: '3px', background: 'white', margin: '3px 0' }} />
            <span style={{ width: '25px', height: '3px', background: 'white', margin: '3px 0' }} />
          </div>
        </div>
        {menuOpen && <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000 }} onClick={() => setMenuOpen(false)} />}
        <ul style={{
          position: 'fixed', top: 0, right: menuOpen ? 0 : '-100%', width: '300px', height: '100vh',
          background: darkMode ? 'rgba(15,12,41,0.95)' : '#1a237e',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', justifyContent: 'flex-start',
          margin: 0, padding: '2rem 0', listStyle: 'none', transition: 'right 0.3s ease', zIndex: 1001, overflowY: 'auto'
        }}>
          {[
            { label: 'Início', path: '/' },
            { label: 'Lugares', path: '/lugares' },
            { label: 'Adicionar Local', path: '/adicionar-local' },
            { label: isLoggedIn ? 'Meu Perfil' : 'Entrar', path: isLoggedIn ? '/perfil' : '/login' },
            { label: 'Sobre', path: '/sobre' },
            { label: 'Contato', path: '/contato' },
          ].map(({ label, path }) => (
            <li key={path}>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate(path); setMenuOpen(false) }}
                style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '5px', display: 'block' }}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}
              style={{ color: '#ccc', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '5px', display: 'block', cursor: 'default' }}>
              Mapa (atual)
            </a>
          </li>
          {isAdmin && (
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/painel-adm'); setMenuOpen(false) }}
                style={{ color: '#ffd700', textDecoration: 'none', padding: '0.5rem 1rem', fontWeight: '700', borderRadius: '5px', display: 'block' }}>
                Painel Admin
              </a>
            </li>
          )}
        </ul>
      </header>

      <header className="contato-hero">
        <h1>Mapa Interativo</h1>
        <p>Explore pontos turísticos pelo Brasil e descubra destinos incríveis.</p>
      </header>

      <main className="contato-main">

        <div className="contato-info-grid" style={{ marginBottom: '2rem' }}>
          <div className="contato-info-card" style={{ textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Categoria</label>
            <select value={categoria} onChange={e => setCategoria(e.target.value)}
              style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid var(--modern-border)', background: darkMode ? '#2d3748' : '#f7f7f7', color: darkMode ? '#e2e8f0' : '#333', fontSize: '0.95rem' }}>
              <option value="todas">Todas</option>
              <option value="Monumentos">Monumentos</option>
              <option value="Lugar Paradísíaco">Lugar Paradísíaco</option>
              <option value="Restaurantes">Restaurantes</option>
              <option value="Costume Cultural">Costume Cultural</option>
            </select>
          </div>
          <div className="contato-info-card" style={{ textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Preço</label>
            <select value={preco} onChange={e => setPreco(e.target.value)}
              style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid var(--modern-border)', background: darkMode ? '#2d3748' : '#f7f7f7', color: darkMode ? '#e2e8f0' : '#333', fontSize: '0.95rem' }}>
              <option value="todos">Todos</option>
              <option value="gratuito">Gratuito</option>
              <option value="pago">Pago</option>
            </select>
          </div>
          <div className="contato-info-card" style={{ textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Distância: {distancia}km</label>
            <input type="range" min="1" max="3000" value={distancia} onChange={e => setDistancia(parseInt(e.target.value))}
              style={{ width: '100%' }} />
          </div>
          <div className="contato-info-card" style={{ textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Localização</label>
            <input id="searchInput" type="text" placeholder="Buscar local..."
              style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: '6px', border: '1px solid var(--modern-border)', background: darkMode ? '#2d3748' : '#f7f7f7', color: darkMode ? '#e2e8f0' : '#333', marginBottom: '0.5rem', boxSizing: 'border-box' }} />
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button onClick={getMyLocation} className="contato-submit-btn" style={{ flex: 1, padding: '0.6rem', fontSize: '0.85rem' }}>
                Minha Loc.
              </button>
              <button onClick={() => { if (window.currentMap) window.currentMap.setView([-14.2350, -51.9253], 4); setUserLocation(null) }}
                className="contato-submit-btn" style={{ flex: 1, padding: '0.6rem', fontSize: '0.85rem', background: 'var(--modern-headings)' }}>
                Brasil
              </button>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <button onClick={aplicarFiltros} className="contato-submit-btn" style={{ width: 'auto', padding: '0.9rem 3rem' }}>
            Aplicar Filtros
          </button>
        </div>

        <div style={{
          background: darkMode ? 'var(--modern-surface-dark)' : 'var(--modern-surface)',
          border: '1px solid var(--modern-border)',
          borderRadius: '8px', padding: '1rem', marginBottom: '3rem'
        }}>
          <div id="map" style={{ width: '100%', height: '560px', borderRadius: '6px' }} />
        </div>

        <h2 style={{ fontFamily: 'Lora, serif', fontSize: '1.8rem', marginBottom: '1.5rem', color: darkMode ? '#e2e8f0' : 'var(--modern-headings)' }}>
          Pontos no Mapa
        </h2>
        <div className="contato-info-grid">
          {lugaresVisiveis.map((ponto, i) => (
            <div key={i} className="contato-info-card" style={{ textAlign: 'left' }}>
              <h3 style={{ margin: '0 0 0.25rem', color: 'var(--modern-primary)', fontSize: '1rem' }}>{ponto.nome}</h3>
              <p style={{ margin: '0 0 0.75rem', fontSize: '0.85rem', opacity: 0.7 }}>{ponto.cidade}</p>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                <span style={{ background: 'var(--modern-primary)', color: 'white', padding: '2px 8px', borderRadius: '10px', fontSize: '0.75rem' }}>{ponto.categoria}</span>
                <span style={{ background: ponto.preco === 'gratuito' ? '#2ecc71' : '#e74c3c', color: 'white', padding: '2px 8px', borderRadius: '10px', fontSize: '0.75rem' }}>{ponto.preco}</span>
              </div>
            </div>
          ))}
        </div>

      </main>

      <footer className="contato-footer">
        <p>&copy; {new Date().getFullYear()} GADYS. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default MapaLeaflet
