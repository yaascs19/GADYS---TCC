import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import NavbarShared from './NavbarShared'

const API_URL = import.meta.env.VITE_API_URL

function BuscarPage() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true')
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [resultados, setResultados] = useState([])
  const [loading, setLoading] = useState(false)
  const [buscou, setBuscou] = useState(false)

  const toggleDarkMode = () => { const n = !darkMode; setDarkMode(n); localStorage.setItem('darkMode', n) }

  const buscar = async (termo) => {
    if (!termo.trim()) return
    setLoading(true)
    setBuscou(true)
    setSearchParams({ q: termo })
    try {
      const res = await fetch(`${API_URL}/api/locais`)
      const data = res.ok ? await res.json() : []
      const lower = termo.toLowerCase()
      const filtrados = data.filter(l =>
        l.status === 'ATIVO' && (
          l.nome?.toLowerCase().includes(lower) ||
          l.estado?.toLowerCase().includes(lower) ||
          l.cidade?.toLowerCase().includes(lower) ||
          l.descricao?.toLowerCase().includes(lower) ||
          l.subcategoria?.toLowerCase().includes(lower)
        )
      )
      setResultados(filtrados)
    } catch { setResultados([]) }
    finally { setLoading(false) }
  }

  useEffect(() => {
    const q = searchParams.get('q')
    if (q) buscar(q)
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      background: darkMode ? 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)' : 'linear-gradient(135deg,#f5f7fa,#c3cfe2)',
      color: darkMode ? '#E0E1DD' : '#2c3e50'
    }}>
      <NavbarShared darkMode={darkMode} toggleDarkMode={toggleDarkMode} paginaAtual="/buscar" />

      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 1rem' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>🔍 Buscar Destinos</h1>

        <form onSubmit={e => { e.preventDefault(); buscar(query) }} style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem' }}>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Busque por nome, estado, cidade ou categoria..."
            style={{
              flex: 1, padding: '0.85rem 1.25rem', borderRadius: '50px',
              border: '1px solid rgba(56,189,248,0.4)', fontSize: '1rem',
              background: darkMode ? 'rgba(255,255,255,0.06)' : 'white',
              color: darkMode ? '#E0E1DD' : '#2c3e50', outline: 'none'
            }}
          />
          <button type="submit" style={{
            padding: '0.85rem 2rem', borderRadius: '50px', border: 'none',
            background: '#38BDF8', color: '#0d1117', fontWeight: 700, cursor: 'pointer', fontSize: '1rem'
          }}>Buscar</button>
        </form>

        {loading && <p style={{ textAlign: 'center', opacity: 0.7 }}>Buscando...</p>}

        {!loading && buscou && resultados.length === 0 && (
          <div style={{ textAlign: 'center', opacity: 0.7, padding: '3rem 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>😕</div>
            <p>Nenhum resultado para "<strong>{query}</strong>"</p>
          </div>
        )}

        {!loading && resultados.length > 0 && (
          <>
            <p style={{ opacity: 0.6, marginBottom: '1.5rem' }}>{resultados.length} resultado(s) para "<strong>{query}</strong>"</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {resultados.map(local => (
                <div key={local.id} onClick={() => navigate(`/local/${local.id}`)} style={{
                  display: 'flex', gap: '1rem', alignItems: 'center',
                  background: darkMode ? 'rgba(255,255,255,0.05)' : 'white',
                  borderRadius: '12px', padding: '1rem', cursor: 'pointer',
                  border: '1px solid rgba(56,189,248,0.15)',
                  transition: 'border-color 0.2s'
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(56,189,248,0.5)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(56,189,248,0.15)'}
                >
                  {local.imagemUrl
                    ? <img src={local.imagemUrl.split(',')[0]} alt={local.nome} style={{ width: '80px', height: '60px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                    : <div style={{ width: '80px', height: '60px', borderRadius: '8px', background: 'linear-gradient(135deg,#667eea,#764ba2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>🗺️</div>
                  }
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ margin: '0 0 0.25rem', fontSize: '1rem' }}>{local.nome}</h3>
                    <p style={{ margin: '0 0 0.5rem', fontSize: '0.85rem', opacity: 0.6 }}>{local.cidade ? `${local.cidade}, ` : ''}{local.estado}</p>
                    <span style={{ background: 'rgba(56,189,248,0.15)', color: '#38BDF8', padding: '2px 10px', borderRadius: '50px', fontSize: '0.75rem' }}>{local.subcategoria}</span>
                  </div>
                  <span style={{ color: '#38BDF8', fontSize: '1.2rem', flexShrink: 0 }}>→</span>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  )
}

export default BuscarPage
