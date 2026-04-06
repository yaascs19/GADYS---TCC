import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './AdicionarLocal.css'

function AdicionarLocal() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })
  
  const [formData, setFormData] = useState({
    nome: '',
    subcategoria: '',
    cidade: '',
    estado: '',
    endereco: '',
    descricao: '',
    coordenadas: '',
    horario: '',
    preco: '',
    infoAdicional: ''
  })
  const [imagens, setImagens] = useState(['', '', '', '', ''])
  const [uploadingIndex, setUploadingIndex] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const CLOUD_NAME = 'dybpie9a'
  const UPLOAD_PRESET = 'gadys_tcc'

  const handleImageUpload = async (e, index) => {
    const file = e.target.files[0]
    if (!file) return
    setUploadingIndex(index)
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', UPLOAD_PRESET)
    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, { method: 'POST', body: data })
      const json = await res.json()
      const novas = [...imagens]
      novas[index] = json.secure_url
      setImagens(novas)
    } catch {
      alert('Erro ao fazer upload da imagem')
    } finally {
      setUploadingIndex(null)
    }
  }

  const toggleTheme = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
  }

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      .nav-links.active {
        right: 0 !important;
      }
      .nav-overlay.active {
        opacity: 1 !important;
        visibility: visible !important;
      }
      .nav-links li:hover .dropdown-content {
        display: block !important;
      }
    `
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const API_URL = import.meta.env.VITE_API_URL || 'https://gadys-backend.onrender.com'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const usuarioId = localStorage.getItem('usuarioId')
      const userName = localStorage.getItem('userName') || 'Usuário Anônimo'
      
      const localData = {
        nome: formData.nome,
        descricao: formData.descricao,
        categoria: 'lugares-visitar',
        subcategoria: formData.subcategoria,
        cidade: formData.cidade,
        estado: formData.estado,
        coordenadas: formData.coordenadas,
        endereco: formData.endereco,
        horarioFuncionamento: formData.horario,
        preco: formData.preco,
        imagemUrl: imagens.filter(Boolean).join(','),
        informacoesAdicionais: formData.infoAdicional,
        enviadoPor: userName
      }
      
      const url = usuarioId
        ? `${API_URL}/api/locais?usuarioId=${usuarioId}`
        : `${API_URL}/api/locais`

      await axios.post(url, localData)
      
      setShowSuccess(true)
      setFormData({
        nome: '', subcategoria: '', cidade: '', estado: '', endereco: '',
        descricao: '', coordenadas: '', horario: '', preco: '', infoAdicional: ''
      })
      setImagens(['', '', '', '', ''])
      setTimeout(() => setShowSuccess(false), 5000)
    } catch (error) {
      alert(error.response?.data?.mensagem || 'Erro de conexão com o servidor')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={`adicionar-local-page ${darkMode ? 'dark' : ''}`}>
      <header className="adicionar-local-header">
        <div className="adicionar-local-logo-container">
          <img 
            src="/images/logos/logo.png" 
            alt="GADYS" 
            className="adicionar-local-logo"
          />
          <span className="adicionar-local-title">GADYS</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            onClick={toggleTheme}
            style={{
              background: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
              border: darkMode ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(0,0,0,0.2)',
              color: darkMode ? 'white' : '#2c3e50',
              fontSize: '1.2rem',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '10px',
              transition: 'all 0.3s'
            }}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
              zIndex: 1002
            }}
            onClick={() => document.querySelector('.nav-links').classList.toggle('active')}
          >
            <span style={{ width: '25px', height: '3px', background: 'white', margin: '3px 0', transition: '0.3s' }} />
            <span style={{ width: '25px', height: '3px', background: 'white', margin: '3px 0', transition: '0.3s' }} />
            <span style={{ width: '25px', height: '3px', background: 'white', margin: '3px 0', transition: '0.3s' }} />
          </div>
        </div>
        <div 
          className="nav-overlay"
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0, 0, 0, 0.5)', zIndex: 1000, opacity: 0, visibility: 'hidden', transition: 'all 0.3s ease' }}
          onClick={() => document.querySelector('.nav-links').classList.remove('active')}
        />
        <ul 
          className="nav-links"
          style={{ position: 'fixed', top: 0, right: '-100%', width: '300px', height: '100vh', background: darkMode ? '#1a237e' : '#1a237e', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '2rem', margin: 0, padding: '4rem 0', listStyle: 'none', transition: 'right 0.3s ease', zIndex: 1001, overflowY: 'scroll', boxShadow: '-5px 0 15px rgba(0,0,0,0.1)' }}
        >
          <li><Link to="/" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem' }}>Início</Link></li>
          <li><Link to="/lugares" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem' }}>Lugares</Link></li>
          <li><Link to="/mapa" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem' }}>Mapa</Link></li>
          <li><a href="#" style={{ color: '#ccc', textDecoration: 'none', padding: '0.5rem 1rem', cursor: 'not-allowed' }}>Adicionar Local (atual)</a></li>
          <li><Link to="/perfil" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem' }}>Meu Perfil</Link></li>
          <li><Link to="/sobre" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem' }}>Sobre</Link></li>
          <li><Link to="/contato" onClick={() => document.querySelector('.nav-links').classList.remove('active')} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem' }}>Contato</Link></li>
        </ul>
      </header>

      <main className="adicionar-local-main">
        <section className="adicionar-local-hero">
          <h1 className="adicionar-local-h1">Adicionar Novo Local</h1>
          <p className="adicionar-local-p">Compartilhe lugares incríveis do Brasil<br /><span className="adicionar-local-span">Ajude outros viajantes a descobrir novos destinos</span></p>
        </section>

        <section className="adicionar-local-form-section">
          {showSuccess && <div className="success-message">Local enviado com sucesso! Aguarde a aprovação.</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Nome do Local:</label>
              <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} required className="form-input" />
            </div>

            <div className="form-group">
              <label className="form-label">Tipo de Local:</label>
              <select name="subcategoria" value={formData.subcategoria} onChange={handleInputChange} required className="form-select">
                <option value="">Selecione o tipo</option>
                <option value="Monumentos">Monumentos</option>
                <option value="Lugar Paradísíaco">Lugar Paradísíaco</option>
                <option value="Restaurantes">Restaurantes</option>
                <option value="Costume Cultural">Costume Cultural</option>
              </select>
            </div>

            <div className="form-grid">
              <div>
                <label className="form-label">Cidade:</label>
                <input type="text" name="cidade" value={formData.cidade} onChange={handleInputChange} required className="form-input" />
              </div>
              <div>
                <label className="form-label">Estado:</label>
                <input type="text" name="estado" value={formData.estado} onChange={handleInputChange} required className="form-input" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Endereço:</label>
              <input type="text" name="endereco" value={formData.endereco} onChange={handleInputChange} placeholder="Ex: Rua das Flores, 123 - Centro" className="form-input" />
            </div>

            <div className="form-group">
              <label className="form-label">Descrição:</label>
              <textarea name="descricao" value={formData.descricao} onChange={handleInputChange} required rows="4" placeholder="Descreva o local, suas características e o que o torna especial..." className="form-textarea" />
            </div>

            <div className="form-group">
              <label className="form-label">Fotos do Local (até 5 imagens):</label>
              <p style={{ fontSize: '0.85rem', opacity: 0.7, marginBottom: '1rem' }}>Foto 1 e 2: carrossel do topo | Foto 3: seção Sobre | Fotos 4 e 5: seção Visite</p>
              {imagens.map((url, index) => (
                <div key={index} style={{ marginBottom: '1rem' }}>
                  <label className="image-upload-label">Foto {index + 1} {index < 2 ? '(carrossel)' : index === 2 ? '(sobre)' : '(visite)'}</label>
                  <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, index)} className="image-upload-input" />
                  {uploadingIndex === index && <p style={{ color: '#667eea', fontSize: '0.85rem', marginTop: '0.3rem' }}>Enviando...</p>}
                  {url && <p style={{ color: '#4caf50', fontSize: '0.85rem', marginTop: '0.3rem' }}>✓ Imagem enviada</p>}
                </div>
              ))}
            </div>

            <div className="form-grid">
              <div>
                <label className="form-label">Horário:</label>
                <input type="text" name="horario" value={formData.horario} onChange={handleInputChange} placeholder="Ex: 8h às 18h" className="form-input" />
              </div>
              <div>
                <label className="form-label">Preço:</label>
                <input type="text" name="preco" value={formData.preco} onChange={handleInputChange} placeholder="Ex: Gratuito, R$ 10,00" className="form-input" />
              </div>
            </div>

            <button type="submit" disabled={loading} className="submit-button">{loading ? 'Adicionando...' : 'Adicionar Local'}</button>
          </form>
        </section>

        <section className="back-link-section">
          <Link to="/" className="back-link">Voltar ao Início</Link>
        </section>
      </main>

      <footer className="adicionar-local-footer">
        <p style={{ opacity: 0.7, fontSize: '1rem' }}>&copy; 2025 GADYS. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default AdicionarLocal
