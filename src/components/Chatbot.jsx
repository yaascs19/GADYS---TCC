import { useState, useRef, useEffect } from 'react'

const GEMINI_KEY = import.meta.env.VITE_GEMINI_KEY
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`

const SYSTEM_CONTEXT = `Você é o assistente virtual do GADYS, um site de turismo brasileiro. 
Responda dúvidas e reclamações dos usuários de forma simpática e objetiva em português.
O GADYS é uma plataforma que apresenta destinos turísticos do Brasil, permite avaliações, comentários e sugestões de novos locais.
Se não souber responder algo específico, oriente o usuário a entrar em contato pelo formulário de contato do site.
Seja breve nas respostas — máximo 3 parágrafos.`

export default function Chatbot({ darkMode }) {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Olá! Sou o assistente do GADYS. Como posso ajudar?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || loading) return
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text }])
    setLoading(true)
    try {
      const res = await fetch(GEMINI_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            { role: 'user', parts: [{ text: SYSTEM_CONTEXT + '\n\nUsuário: ' + text }] }
          ]
        })
      })
      const data = await res.json()
      console.log('Gemini response:', JSON.stringify(data))
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Desculpe, não consegui responder. Tente novamente.'
      setMessages(prev => [...prev, { role: 'bot', text: reply }])
    } catch (err) {
      console.error('Gemini error:', err)
      setMessages(prev => [...prev, { role: 'bot', text: 'Erro ao conectar. Tente novamente.' }])
    } finally {
      setLoading(false)
    }
  }

  const bg = darkMode ? '#1e1e2e' : '#ffffff'
  const headerBg = 'linear-gradient(135deg, #667eea, #764ba2)'
  const userBubble = 'linear-gradient(135deg, #667eea, #764ba2)'
  const botBubble = darkMode ? '#2a2a3e' : '#f0f0f0'
  const textColor = darkMode ? '#e0e0e0' : '#333'
  const inputBg = darkMode ? '#2a2a3e' : '#f5f5f5'

  return (
    <div style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 9999 }}>
      {open && (
        <div style={{
          width: '340px', height: '480px', background: bg, borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column',
          marginBottom: '0.75rem', overflow: 'hidden'
        }}>
          <div style={{ background: headerBg, padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img src="/images/logos/logo.png" alt="GADYS" style={{ height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', padding: '4px' }} />
              <span style={{ color: 'white', fontWeight: '700', fontSize: '0.95rem' }}>Assistente GADYS</span>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '80%', padding: '0.6rem 0.9rem', borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  background: msg.role === 'user' ? userBubble : botBubble,
                  color: msg.role === 'user' ? 'white' : textColor,
                  fontSize: '0.88rem', lineHeight: 1.5
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ background: botBubble, color: textColor, padding: '0.6rem 0.9rem', borderRadius: '16px 16px 16px 4px', fontSize: '0.88rem' }}>
                  Digitando...
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div style={{ padding: '0.75rem', borderTop: darkMode ? '1px solid #333' : '1px solid #eee', display: 'flex', gap: '0.5rem' }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Digite sua mensagem..."
              style={{
                flex: 1, padding: '0.6rem 0.9rem', borderRadius: '20px', border: 'none',
                background: inputBg, color: textColor, fontSize: '0.88rem', outline: 'none'
              }}
            />
            <button onClick={sendMessage} disabled={loading} style={{
              background: headerBg, border: 'none', borderRadius: '50%', width: '36px', height: '36px',
              cursor: 'pointer', color: 'white', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>➤</button>
          </div>
        </div>
      )}

      <button onClick={() => setOpen(!open)} style={{
        width: '56px', height: '56px', borderRadius: '50%', background: headerBg,
        border: 'none', cursor: 'pointer', boxShadow: '0 4px 16px rgba(102,126,234,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
        marginLeft: 'auto'
      }}>
        {open ? '✕' : '💬'}
      </button>
    </div>
  )
}
