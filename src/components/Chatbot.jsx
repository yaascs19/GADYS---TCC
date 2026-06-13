import { useState, useRef, useEffect } from 'react'

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
    keywords: ['estados', 'regiões', 'brasil'],
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
  'Esqueci minha senha',
]

export default function Chatbot({ darkMode }) {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Olá! Sou o assistente do GADYS. Como posso ajudar? 😊' }
  ])
  const [input, setInput] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(true)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = (text) => {
    const msg = (text || input).trim()
    if (!msg) return
    setInput('')
    setShowSuggestions(false)
    setMessages(prev => [...prev, { role: 'user', text: msg }])
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: getAnswer(msg) }])
    }, 400)
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
          width: '340px', height: '500px', background: bg, borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column',
          marginBottom: '0.75rem', overflow: 'hidden'
        }}>
          <div style={{ background: headerBg, padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img src="/images/logos/logo.png" alt="GADYS" style={{ height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', padding: '4px' }} />
              <div>
                <div style={{ color: 'white', fontWeight: '700', fontSize: '0.95rem' }}>Assistente GADYS</div>
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem' }}>Perguntas frequentes</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '80%', padding: '0.6rem 0.9rem',
                  borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  background: msg.role === 'user' ? userBubble : botBubble,
                  color: msg.role === 'user' ? 'white' : textColor,
                  fontSize: '0.88rem', lineHeight: 1.5
                }}>
                  {msg.text}
                </div>
              </div>
            ))}

            {showSuggestions && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.5rem' }}>
                {SUGGESTIONS.map(s => (
                  <button key={s} onClick={() => sendMessage(s)} style={{
                    background: 'none', border: `1px solid ${darkMode ? '#667eea' : '#764ba2'}`,
                    borderRadius: '20px', padding: '0.4rem 0.8rem', cursor: 'pointer',
                    color: darkMode ? '#667eea' : '#764ba2', fontSize: '0.82rem', textAlign: 'left',
                    transition: 'all 0.2s'
                  }}>
                    {s}
                  </button>
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div style={{ padding: '0.75rem', borderTop: darkMode ? '1px solid #333' : '1px solid #eee', display: 'flex', gap: '0.5rem' }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Digite sua dúvida..."
              style={{
                flex: 1, padding: '0.6rem 0.9rem', borderRadius: '20px', border: 'none',
                background: inputBg, color: textColor, fontSize: '0.88rem', outline: 'none'
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
