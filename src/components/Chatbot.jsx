import { useState, useRef, useEffect } from 'react'

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions'
const GROQ_KEY = import.meta.env.VITE_GROQ_KEY

const SYSTEM_CONTEXT = `Você é o assistente virtual do GADYS, uma plataforma de turismo brasileiro. Responda de forma simpática e objetiva em português. Seja breve — máximo 2 parágrafos. Se perguntarem sobre funcionalidades do site, oriente o usuário. Se não souber, indique a página de Contato.`

const FAQ = [
  {
    keywords: ['o que é', 'gadys', 'sobre', 'plataforma'],
    answer: 'O GADYS é uma plataforma de turismo brasileiro que apresenta destinos incríveis pelo Brasil. Você pode explorar estados, conhecer pontos turísticos, avaliar lugares e sugerir novos locais.'
  },
  {
    keywords: ['sugerir', 'adicionar', 'novo local', 'sugestão'],
    answer: 'Para sugerir um local, clique em "Dê sugestões" no menu. Preencha o nome, estado, endereço, categoria e uma descrição. Nossa equipe vai analisar e publicar em breve!'
  },
  {
    keywords: ['avaliar', 'avaliação', 'nota', 'estrela'],
    answer: 'Para avaliar um local, acesse a página do destino desejado e use o sistema de estrelas. É necessário estar logado para avaliar.'
  },
  {
    keywords: ['comentar', 'comentário', 'opinião'],
    answer: 'Você pode comentar em qualquer local turístico acessando a página do destino. Basta estar logado, escrever seu comentário e enviar.'
  },
  {
    keywords: ['criar conta', 'cadastro', 'registrar', 'cadastrar'],
    answer: 'Clique em "Entrar" no menu e depois em "Cadastrar". Preencha seu nome, email e senha. Você também pode entrar com sua conta Google!'
  },
  {
    keywords: ['login', 'entrar', 'acessar', 'senha'],
    answer: 'Clique em "Entrar" no menu. Use seu email e senha cadastrados, ou entre com o Google. Esqueceu a senha? Use a opção "Esqueci minha senha" na tela de login.'
  },
  {
    keywords: ['esqueci', 'redefinir senha', 'recuperar senha'],
    answer: 'Na tela de login, clique em "Esqueci minha senha". Informe seu email e enviaremos um link para redefinir sua senha.'
  },
  {
    keywords: ['mapa', 'localização', 'onde fica'],
    answer: 'No menu, clique em "Mapa" para ver todos os destinos no mapa interativo. Você pode clicar em cada marcador para ver detalhes do local.'
  },
  {
    keywords: ['especial', 'conhecer o brasil', 'por que visitar'],
    answer: 'O Brasil é um país de dimensões continentais com uma diversidade incrível! De praias paradisíacas no Nordeste à floresta Amazônica, do barroco histórico de Minas Gerais ao cosmopolitismo de São Paulo. Cada estado tem sua própria cultura, culinária e paisagens únicas que fazem do Brasil um destino inesquecível.'
  },
  {
    keywords: ['estados brasileiros', 'quais estados', 'regiões do brasil'],
    answer: 'O GADYS cobre diversos estados brasileiros como Amazonas, Pará, Ceará, Rio de Janeiro, São Paulo, Minas Gerais, Espírito Santo e mais. Acesse pelo menu "Estados Brasileiros".'
  },
  {
    keywords: ['contato', 'falar', 'suporte', 'problema', 'reclamação', 'ajuda'],
    answer: 'Para entrar em contato com nossa equipe, acesse a página "Contato" no menu. Preencha o formulário e responderemos o mais rápido possível.'
  },
  {
    keywords: ['perfil', 'minha conta', 'editar', 'foto'],
    answer: 'Em "Meu Perfil" você pode editar seu nome, email, foto de perfil e ver suas estatísticas como avaliações e comentários feitos.'
  },
  {
    keywords: ['lugares', 'destinos', 'turismo'],
    answer: 'Na página "Lugares" você encontra todos os destinos cadastrados no GADYS, podendo filtrar por categoria como monumentos, praias, restaurantes e costumes culturais.'
  },
]

const FALLBACK = 'Não encontrei uma resposta para isso. Para mais informações, acesse a página de Contato e fale diretamente com nossa equipe!'

function getAnswer(input) {
  const text = input.toLowerCase()
  for (const item of FAQ) {
    if (item.keywords.some(k => text.includes(k))) {
      return item.answer
    }
  }
  return FALLBACK
}

const SUGGESTIONS = [
  'O que é o GADYS?',
  'Como sugerir um local?',
  'Como avaliar um lugar?',
  'Como criar uma conta?',
  'O que tem de especial em conhecer o Brasil?',
]

export default function Chatbot({ darkMode }) {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Olá! Sou o assistente do GADYS. Como posso ajudar? 😊' }
  ])
  const [input, setInput] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(true)
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async (text) => {
    const msg = (text || input).trim()
    if (!msg || loading) return
    setInput('')
    setShowSuggestions(false)
    setMessages(prev => [...prev, { role: 'user', text: msg }])

    const faqAnswer = getAnswer(msg)
    if (faqAnswer !== FALLBACK) {
      setTimeout(() => setMessages(prev => [...prev, { role: 'bot', text: faqAnswer }]), 400)
      return
    }

    setLoading(true)
    try {
      const res = await fetch(GROQ_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${GROQ_KEY}` },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: SYSTEM_CONTEXT },
            { role: 'user', content: msg }
          ]
        })
      })
      const data = await res.json()
      console.log('Groq response:', JSON.stringify(data))
      const reply = data?.choices?.[0]?.message?.content || 'Não consegui responder agora. Tente a página de Contato!'
      setMessages(prev => [...prev, { role: 'bot', text: reply }])
    } catch {
      setMessages(prev => [...prev, { role: 'bot', text: 'Não consegui responder agora. Tente a página de Contato!' }])
    } finally {
      setLoading(false)
    }
  }

  const bg = darkMode ? 'linear-gradient(160deg, #0f0c29, #1a1a2e)' : '#ffffff'
  const headerBg = 'linear-gradient(135deg, #667eea, #764ba2)'
  const userBubble = 'linear-gradient(135deg, #667eea, #764ba2)'
  const botBubble = darkMode ? 'rgba(102,126,234,0.12)' : '#f0f2ff'
  const botBubbleBorder = darkMode ? '1px solid rgba(102,126,234,0.25)' : '1px solid #e0e4ff'
  const textColor = darkMode ? '#e0e0ff' : '#333'
  const inputBg = darkMode ? 'rgba(255,255,255,0.07)' : '#f5f5f5'
  const inputBorder = darkMode ? '1px solid rgba(102,126,234,0.3)' : '1px solid #ddd'
  const suggBorder = darkMode ? 'rgba(102,126,234,0.5)' : '#764ba2'
  const suggColor = darkMode ? '#a78bfa' : '#764ba2'
  const suggHoverBg = darkMode ? 'rgba(102,126,234,0.15)' : '#f0f0ff'

  return (
    <div style={{ position: 'fixed', bottom: '1.5rem', left: '1.5rem', zIndex: 9999 }}>
      {open && (
        <div style={{
          width: '340px', height: '500px',
          background: bg,
          borderRadius: '20px',
          boxShadow: darkMode ? '0 8px 40px rgba(102,126,234,0.25), 0 2px 8px rgba(0,0,0,0.5)' : '0 8px 32px rgba(0,0,0,0.15)',
          display: 'flex', flexDirection: 'column',
          marginBottom: '0.75rem', overflow: 'hidden',
          border: darkMode ? '1px solid rgba(102,126,234,0.2)' : 'none'
        }}>
          <div style={{ background: headerBg, padding: '1rem 1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 12px rgba(102,126,234,0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img src="/images/logos/logo.png" alt="GADYS" style={{ height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', padding: '4px' }} />
              <div>
                <div style={{ color: 'white', fontWeight: '700', fontSize: '0.95rem', letterSpacing: '0.3px' }}>Assistente GADYS</div>
                <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.72rem', marginTop: '1px' }}>● Online agora</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', scrollbarWidth: 'thin', scrollbarColor: darkMode ? '#667eea #0f0c29' : '#ccc #fff' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '80%', padding: '0.65rem 1rem',
                  borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  background: msg.role === 'user' ? userBubble : botBubble,
                  border: msg.role === 'user' ? 'none' : botBubbleBorder,
                  color: msg.role === 'user' ? 'white' : textColor,
                  fontSize: '0.88rem', lineHeight: 1.6,
                  boxShadow: msg.role === 'user' ? '0 2px 8px rgba(102,126,234,0.3)' : 'none'
                }}>
                  {msg.text}
                </div>
              </div>
            ))}

            {showSuggestions && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.5rem' }}>
                {SUGGESTIONS.map(s => (
                  <button key={s} onClick={() => sendMessage(s)} style={{
                    background: darkMode ? 'rgba(102,126,234,0.08)' : 'white',
                    border: `1px solid ${suggBorder}`,
                    borderRadius: '20px', padding: '0.45rem 0.9rem', cursor: 'pointer',
                    color: suggColor, fontSize: '0.82rem', textAlign: 'left',
                    transition: 'all 0.2s', fontWeight: '500'
                  }}
                  onMouseOver={e => e.currentTarget.style.background = suggHoverBg}
                  onMouseOut={e => e.currentTarget.style.background = darkMode ? 'rgba(102,126,234,0.08)' : 'white'}>
                    {s}
                  </button>
                ))}
              </div>
            )}
            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ padding: '0.65rem 1rem', borderRadius: '18px 18px 18px 4px', background: botBubble, border: botBubbleBorder, color: textColor, fontSize: '0.88rem' }}>
                  Digitando...
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div style={{ padding: '0.75rem 1rem', borderTop: darkMode ? '1px solid rgba(102,126,234,0.2)' : '1px solid #eee', display: 'flex', gap: '0.5rem', background: darkMode ? 'rgba(0,0,0,0.2)' : '#fafafa' }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Digite sua dúvida..."
              style={{
                flex: 1, padding: '0.6rem 1rem', borderRadius: '20px',
                border: inputBorder, background: inputBg,
                color: textColor, fontSize: '0.88rem', outline: 'none',
                transition: 'border 0.2s'
              }}
            />
            <button onClick={() => sendMessage()} style={{
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
