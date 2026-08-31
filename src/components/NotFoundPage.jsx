import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function NotFoundPage() {
  const navigate = useNavigate()
  const [darkMode] = useState(() => localStorage.getItem('darkMode') === 'true')

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      background: darkMode ? 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)' : 'linear-gradient(135deg,#f5f7fa,#c3cfe2)',
      color: darkMode ? '#E0E1DD' : '#2c3e50', padding: '2rem'
    }}>
      <div style={{ fontSize: '6rem', marginBottom: '1rem' }}>🗺️</div>
      <h1 style={{ fontSize: '5rem', fontWeight: 700, margin: 0, color: '#38BDF8' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 400, margin: '0.5rem 0 1rem' }}>Página não encontrada</h2>
      <p style={{ opacity: 0.7, maxWidth: '400px', marginBottom: '2rem' }}>
        Parece que esse destino não existe no mapa. Que tal explorar outros lugares?
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button onClick={() => navigate('/')} style={{
          padding: '0.75rem 2rem', borderRadius: '50px', border: 'none',
          background: '#38BDF8', color: '#0d1117', fontWeight: 700, cursor: 'pointer', fontSize: '1rem'
        }}>Ir para Home</button>
        <button onClick={() => navigate(-1)} style={{
          padding: '0.75rem 2rem', borderRadius: '50px',
          border: '1px solid rgba(56,189,248,0.4)', background: 'transparent',
          color: '#38BDF8', fontWeight: 700, cursor: 'pointer', fontSize: '1rem'
        }}>Voltar</button>
      </div>
    </div>
  )
}

export default NotFoundPage
