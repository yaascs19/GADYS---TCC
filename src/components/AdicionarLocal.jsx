import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './AdicionarLocal.css'

function AdicionarLocal() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true')
  const navigate = useNavigate()
  const isAdmin = (localStorage.getItem('userType') || '').toUpperCase() === 'ADM'
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    nome: '', subcategoria: '', cidade: '', estado: '', endereco: '', 
    descricao: '', horario: '', preco: '', coordenadas: ''
  })
  const [imagens, setImagens] = useState(Array(5).fill(null))
  const [uploadingIndex, setUploadingIndex] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [geocoding, setGeocoding] = useState(false)
  const [geocodeStatus, setGeocodeStatus] = useState(null)
  const [estadoDetectado, setEstadoDetectado] = useState(null)

  // mapa nome completo do estado -> sigla
  const ESTADO_SIGLAS = {
    'acre': 'AC', 'alagoas': 'AL', 'amapá': 'AP', 'amazonas': 'AM', 'bahia': 'BA',
    'ceará': 'CE', 'distrito federal': 'DF', 'espírito santo': 'ES', 'goiás': 'GO',
    'maranhão': 'MA', 'mato grosso': 'MT', 'mato grosso do sul': 'MS', 'minas gerais': 'MG',
    'pará': 'PA', 'paraíba': 'PB', 'paraná': 'PR', 'pernambuco': 'PE', 'piauí': 'PI',
    'rio de janeiro': 'RJ', 'rio grande do norte': 'RN', 'rio grande do sul': 'RS',
    'rondônia': 'RO', 'roraima': 'RR', 'santa catarina': 'SC', 'são paulo': 'SP',
    'sergipe': 'SE', 'tocantins': 'TO'
  }

  const CLOUD_NAME = 'dybpie9aa'
  const UPLOAD_PRESET = 'gadys_tcc'

  // Functions remain the same
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
    } catch(err) {
      alert('Erro ao fazer upload da imagem.')
    } finally {
      setUploadingIndex(null)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleGeocode = async () => {
    const query = [formData.endereco, formData.cidade, formData.estado, 'Brasil'].filter(Boolean).join(', ')
    if (!query.trim()) { alert('Preencha o endereço ou cidade antes de buscar.'); return }
    setGeocoding(true)
    setGeocodeStatus(null)
    setEstadoDetectado(null)
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1&addressdetails=1`, {
        headers: { 'Accept-Language': 'pt-BR' }
      })
      const data = await res.json()
      if (data.length > 0) {
        const coords = `${parseFloat(data[0].lat).toFixed(6)}, ${parseFloat(data[0].lon).toFixed(6)}`
        // detectar estado pelo address retornado
        const stateRaw = (data[0].address?.state || '').toLowerCase().trim()
        const siglaDectada = ESTADO_SIGLAS[stateRaw] || null
        setEstadoDetectado(siglaDectada)
        setFormData(prev => ({ ...prev, coordenadas: coords }))
        setGeocodeStatus(siglaDectada && siglaDectada !== formData.estado ? 'mismatch' : 'ok')
      } else {
        setGeocodeStatus('notfound')
      }
    } catch { setGeocodeStatus('error') }
    finally { setGeocoding(false) }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (imagens.every(img => img === null)) {
      alert('Por favor, adicione pelo menos uma imagem.');
      return;
    }
    setLoading(true)
    try {
      const localData = {
        ...formData,
        coordenadas: formData.coordenadas || null,
        imagemUrl: imagens.filter(Boolean).join(','),
        enviadoPor: localStorage.getItem('userName') || 'Usuário Anônimo',
        categoria: 'lugares-visitar',
        informacoesAdicionais: estadoDetectado && estadoDetectado !== formData.estado
          ? `[geo_estado:${estadoDetectado}]${formData.informacoesAdicionais || ''}`
          : (formData.informacoesAdicionais || null)
      }
      const API_URL = import.meta.env.VITE_API_URL || 'https://gadys-backend.onrender.com'
      const url = `${API_URL}/api/locais?usuarioId=${localStorage.getItem('usuarioId') || ''}`
      await axios.post(url, localData)
      
      setShowSuccess(true)
      setFormData({ nome: '', subcategoria: '', cidade: '', estado: '', endereco: '', descricao: '', horario: '', preco: '', coordenadas: '' })
      setImagens(Array(5).fill(null))
      setTimeout(() => setShowSuccess(false), 5000)
      window.scrollTo(0, 0)
    } catch (error) {
      alert(error.response?.data?.mensagem || 'Erro ao enviar o local.')
    } finally {
      setLoading(false)
    }
  }

  const ImageUploader = ({ index }) => (
    <label 
      className={`image-upload-placeholder ${imagens[index] ? 'has-image' : ''}`}
      style={{ backgroundImage: `url(${imagens[index]})` }}
    >
      {uploadingIndex === index && <div className="uploading-overlay">Enviando...</div>}
      {!imagens[index] && uploadingIndex !== index && <span className="upload-text">Foto {index + 1}</span>}
      <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, index)} />
    </label>
  )

  // Return statement with new structure
  return (
    <div className={`adicionar-local-page ${darkMode ? 'dark' : ''}`}>
      <header style={{
        background: darkMode ? 'rgba(15,12,41,0.95)' : '#1a237e',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src="/images/logos/logo.png" alt="GADYS" style={{ height: '40px', background: 'linear-gradient(135deg, #667eea, #764ba2)', borderRadius: '50%', padding: '8px' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white' }}>GADYS</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={() => { const n = !darkMode; setDarkMode(n); localStorage.setItem('darkMode', n) }} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}>
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
          {[{ label: 'Início', path: '/' }, { label: 'Lugares', path: '/lugares' }, { label: 'Mapa', path: '/mapa' }, { label: 'Meu Perfil', path: '/perfil' }, { label: 'Sobre', path: '/sobre' }, { label: 'Contato', path: '/contato' }].map(({ label, path }) => (
            <li key={path}>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate(path); setMenuOpen(false) }}
                style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '5px', display: 'block' }}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); setMenuOpen(false) }}
              style={{ color: '#ccc', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '5px', display: 'block', cursor: 'default' }}>
              ✏️ Adicionar Local (atual)
            </a>
          </li>
          {isAdmin && (
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/painel-adm'); setMenuOpen(false) }}
                style={{ color: '#ffd700', textDecoration: 'none', padding: '0.5rem 1rem', fontWeight: '700', borderRadius: '5px', display: 'block' }}>
                ⚙️ Painel Admin
              </a>
            </li>
          )}
        </ul>
      </header>
      <main className="adicionar-local-main">
        
        {/* --- Coluna Principal (Formulário) --- */}
        <div className="form-column-main">
          <h1>Adicionar um Novo Local</h1>
          <p className="form-intro">Compartilhe um lugar incrível e ajude outros viajantes a descobrirem o Brasil.</p>

          {showSuccess && (
            <div className="success-message">Local enviado com sucesso para aprovação! Obrigado por contribuir.</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Nome do Local</label>
              <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} required className="form-input" placeholder="Ex: Parque do Ibirapuera" />
            </div>

            <div className="form-group">
              <label className="form-label">Descrição</label>
              <textarea name="descricao" value={formData.descricao} onChange={handleInputChange} required className="form-textarea" placeholder="Conte o que torna esse lugar especial..." />
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Cidade</label>
                <input type="text" name="cidade" value={formData.cidade} onChange={handleInputChange} required className="form-input" placeholder="Ex: São Paulo" />
              </div>
              <div className="form-group">
                <label className="form-label">Estado</label>
                <select name="estado" value={formData.estado} onChange={handleInputChange} required className="form-select">
                  <option value="">Selecione o estado</option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Endereço Completo</label>
              <input type="text" name="endereco" value={formData.endereco} onChange={handleInputChange} className="form-input" placeholder="Ex: Av. Pedro Álvares Cabral, s/n" />
            </div>

            <div className="form-group">
              <label className="form-label">Localização no Mapa</label>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <input
                  type="text"
                  name="coordenadas"
                  value={formData.coordenadas}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Lat, Lon (preenchido automaticamente)"
                  readOnly
                  style={{ flex: 1, opacity: formData.coordenadas ? 1 : 0.6 }}
                />
                <button
                  type="button"
                  onClick={handleGeocode}
                  disabled={geocoding}
                  className="submit-button"
                  style={{ width: 'auto', padding: '0.9rem 1.2rem', marginTop: 0, whiteSpace: 'nowrap', fontSize: '0.85rem' }}
                >
                  {geocoding ? '⏳ Buscando...' : 'Buscar no mapa'}
                </button>
              </div>
              {geocodeStatus === 'ok' && <small style={{ color: '#10b981', marginTop: '0.3rem', display: 'block' }}>✓ Localização encontrada!</small>}
              {geocodeStatus === 'mismatch' && <small style={{ color: '#f59e0b', marginTop: '0.3rem', display: 'block' }}>⚠️ Atenção: as coordenadas apontam para <strong>{estadoDetectado}</strong>, mas você selecionou <strong>{formData.estado}</strong>. O admin será avisado.</small>}
              {geocodeStatus === 'notfound' && <small style={{ color: '#f43f5e', marginTop: '0.3rem', display: 'block' }}>Endereço não encontrado. Tente ser mais específico.</small>}
              {geocodeStatus === 'error' && <small style={{ color: '#f43f5e', marginTop: '0.3rem', display: 'block' }}>Erro ao buscar. Tente novamente.</small>}
            </div>

            <button type="submit" disabled={loading} className="submit-button">
              {loading ? 'Enviando...' : 'Enviar Local para Análise'}
            </button>
             <Link to="/" style={{ display: 'block', textAlign: 'center', marginTop: '1.5rem', color: darkMode ? '#aaa' : '#666', textDecoration:'none' }}>
                Voltar para a Home
            </Link>
          </form>
        </div>

        {/* --- Coluna Lateral (Imagens e Detalhes) --- */}
        <aside className="form-column-aside">
          <div className="image-upload-section">
            <h2>Fotos do Local</h2>
            <div className="image-upload-grid">
              {Array(5).fill(0).map((_, i) => <ImageUploader key={i} index={i} />)}
            </div>
            <small style={{textAlign: 'center', display: 'block', marginTop: '1rem', color: '#999'}}>Adicione até 5 fotos.</small>
          </div>

          <div className="details-section">
            <h2>Detalhes Adicionais</h2>
            <div className="form-group">
              <label className="form-label">Categoria</label>
              <select name="subcategoria" value={formData.subcategoria} onChange={handleInputChange} required className="form-select">
                <option value="">Selecione uma categoria</option>
                <option value="Monumentos">Monumentos</option>
                <option value="Lugar Paradísíaco">Lugar Paradísíaco</option>
                <option value="Restaurantes">Restaurantes</option>
                <option value="Costume Cultural">Costume Cultural</option>
              </select>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Horários</label>
                <input type="text" name="horario" value={formData.horario} onChange={handleInputChange} className="form-input" placeholder="Ex: 08h - 18h"/>
              </div>
              <div className="form-group">
                <label className="form-label">Preço</label>
                <input type="text" name="preco" value={formData.preco} onChange={handleInputChange} className="form-input" placeholder="Ex: Gratuito"/>
              </div>
            </div>
          </div>
        </aside>

      </main>
    </div>
  )
}

export default AdicionarLocal
