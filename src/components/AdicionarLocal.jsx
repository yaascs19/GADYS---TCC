import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './AdicionarLocal.css' // Import the new stylesheet

function AdicionarLocal() {
  // State management remains the same
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true')
  const [formData, setFormData] = useState({
    nome: '', subcategoria: '', cidade: '', estado: '', endereco: '', 
    descricao: '', horario: '', preco: ''
  })
  const [imagens, setImagens] = useState(Array(5).fill(null))
  const [uploadingIndex, setUploadingIndex] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const CLOUD_NAME = 'dybpie9a'
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
        imagemUrl: imagens.filter(Boolean).join(','),
        enviadoPor: localStorage.getItem('userName') || 'Usuário Anônimo',
        categoria: 'lugares-visitar',
      }
      const API_URL = import.meta.env.VITE_API_URL || 'https://gadys-backend.onrender.com'
      const url = `${API_URL}/api/locais?usuarioId=${localStorage.getItem('usuarioId') || ''}`
      await axios.post(url, localData)
      
      setShowSuccess(true)
      setFormData({ nome: '', subcategoria: '', cidade: '', estado: '', endereco: '', descricao: '', horario: '', preco: '' })
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
                <input type="text" name="estado" value={formData.estado} onChange={handleInputChange} required className="form-input" placeholder="Ex: SP" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Endereço Completo</label>
              <input type="text" name="endereco" value={formData.endereco} onChange={handleInputChange} className="form-input" placeholder="Ex: Av. Pedro Álvares Cabral, s/n" />
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
                <option value="Monumento">Monumento</option>
                <option value="Natureza">Natureza e Parques</option>
                <option value="Restaurante">Gastronomia</option>
                <option value="Cultural">Ponto Cultural</option>
                 <option value="Praia">Praia</option>
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
