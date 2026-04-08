import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './LocalDetalhe.css';
import './EditarLocal.css';

const API_URL = import.meta.env.VITE_API_URL;
const CLOUD_NAME = 'dybpie9aa';
const UPLOAD_PRESET = 'gadys_tcc';

function EditarLocal() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [local, setLocal] = useState(null);
  const [imagens, setImagens] = useState([]);
  const [aba, setAba] = useState('sobre');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingIndex, setUploadingIndex] = useState(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/api/locais/${id}`)
      .then(r => r.json())
      .then(data => {
        setLocal(data);
        const imgs = data.imagemUrl ? data.imagemUrl.split(',').map(u => u.trim()).filter(Boolean) : [];
        setImagens(Array(5).fill('').map((_, i) => imgs[i] || ''));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleField = (field, value) => setLocal(prev => ({ ...prev, [field]: value }));

  const handleImageUpload = async (e, index) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploadingIndex(index);
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', UPLOAD_PRESET);
    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, { method: 'POST', body: data });
      const json = await res.json();
      setImagens(prev => { const n = [...prev]; n[index] = json.secure_url; return n; });
    } catch { alert('Erro ao fazer upload da imagem.'); }
    finally { setUploadingIndex(null); }
  };

  const handleSave = async (aprovar = false) => {
    setSaving(true);
    try {
      const body = { ...local, imagemUrl: imagens.filter(Boolean).join(',') };
      const res = await fetch(`${API_URL}/api/locais/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error();
      if (aprovar) {
        await fetch(`${API_URL}/api/locais/aprovar/${id}`, { method: 'POST' });
        alert('Local salvo e aprovado!');
        navigate('/painel-adm');
      } else {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      }
    } catch { alert('Erro ao salvar.'); }
    finally { setSaving(false); }
  };

  if (loading) return <div className="local-loading">Carregando...</div>;
  if (!local) return <div className="local-loading">Local não encontrado.</div>;

  const carrossel = imagens.slice(0, 2).filter(Boolean);
  const imagemSobre = imagens[2] || imagens[0];
  const imagensVisite = imagens.slice(3, 5).filter(Boolean);

  return (
    <div className="local-detalhe-container" style={{ position: 'relative' }}>

      {/* Barra flutuante de edição */}
      <div className="editor-toolbar">
        <span className="editor-toolbar-label">✏️ Modo Edição</span>
        <div className="editor-toolbar-actions">
          <button className="editor-btn-save" onClick={() => handleSave(false)} disabled={saving}>
            {saved ? '✓ Salvo!' : saving ? 'Salvando...' : 'Salvar Rascunho'}
          </button>
          <button className="editor-btn-approve" onClick={() => handleSave(true)} disabled={saving}>
            {saving ? '...' : '✓ Salvar e Aprovar'}
          </button>
          <button className="editor-btn-cancel" onClick={() => navigate('/painel-adm')}>
            Cancelar
          </button>
        </div>
      </div>

      {/* Header com carrossel editável */}
      <header className="local-detalhe-header">
        {(carrossel.length > 0 ? carrossel : ['']).map((img, i) => (
          <img key={i} src={img} alt="" className={`local-header-carousel-image ${i === 0 ? 'active' : ''}`} />
        ))}
        <div className="local-header-text" style={{ zIndex: 10, width: '100%', padding: '0 2rem' }}>
          <input
            className="editor-inline-title"
            value={local.nome || ''}
            onChange={e => handleField('nome', e.target.value)}
            placeholder="Nome do local"
          />
          <input
            className="editor-inline-subtitle"
            value={`${local.cidade || ''}, ${local.estado || ''}`}
            onChange={e => {
              const parts = e.target.value.split(',');
              handleField('cidade', parts[0]?.trim() || '');
              handleField('estado', parts[1]?.trim() || '');
            }}
            placeholder="Cidade, Estado"
          />
        </div>
        <div className="editor-image-strip">
          {imagens.slice(0, 2).map((img, i) => (
            <label key={i} className="editor-image-thumb" style={{ backgroundImage: img ? `url(${img})` : 'none' }}>
              {uploadingIndex === i ? <span>⏳</span> : <span>{img ? '🔄' : `+ Foto ${i + 1}`}</span>}
              <input type="file" accept="image/*" onChange={e => handleImageUpload(e, i)} />
            </label>
          ))}
        </div>
      </header>

      <div className="local-page-wrapper">
        <nav className="local-nav">
          {['sobre', 'visite', 'fotos'].map(a => (
            <button key={a} onClick={() => setAba(a)} className={aba === a ? 'active' : ''}>
              {a === 'sobre' ? 'Sobre' : a === 'visite' ? 'Visite' : 'Fotos'}
            </button>
          ))}
        </nav>

        <main className="local-main-content">

          {/* ABA SOBRE */}
          {aba === 'sobre' && (
            <section className="local-section">
              <div className="local-text-image-split">
                <div className="local-text">
                  <h2>Sobre o Local</h2>
                  <textarea
                    className="editor-inline-textarea"
                    value={local.descricao || ''}
                    onChange={e => handleField('descricao', e.target.value)}
                    placeholder="Descrição do local..."
                    rows={6}
                  />
                  <textarea
                    className="editor-inline-textarea"
                    value={local.informacoesAdicionais || ''}
                    onChange={e => handleField('informacoesAdicionais', e.target.value)}
                    placeholder="Informações adicionais (opcional)..."
                    rows={3}
                  />
                </div>
                <div className="local-image-wrapper">
                  <label className="editor-image-thumb editor-image-large" style={{ backgroundImage: imagemSobre ? `url(${imagemSobre})` : 'none' }}>
                    {uploadingIndex === 2 ? <span>⏳</span> : <span>{imagemSobre ? '🔄 Trocar foto' : '+ Foto Sobre'}</span>}
                    <input type="file" accept="image/*" onChange={e => handleImageUpload(e, 2)} />
                  </label>
                </div>
              </div>
            </section>
          )}

          {/* ABA VISITE */}
          {aba === 'visite' && (
            <section className="local-section">
              <div className="local-text-image-split">
                <div className="local-text">
                  <h2>Informações Práticas</h2>
                  <div className="local-info-cards">
                    <div className="local-info-card">
                      <input className="editor-inline-input editor-inline-card-title" value={local.labelEndereco || '📍 Endereço'} onChange={e => handleField('labelEndereco', e.target.value)} placeholder="Título do campo" />
                      <input className="editor-inline-input" value={local.endereco || ''} onChange={e => handleField('endereco', e.target.value)} placeholder="Valor..." />
                    </div>
                    <div className="local-info-card">
                      <input className="editor-inline-input editor-inline-card-title" value={local.labelHorario || '🕐 Horário de Funcionamento'} onChange={e => handleField('labelHorario', e.target.value)} placeholder="Título do campo" />
                      <input className="editor-inline-input" value={local.horarioFuncionamento || ''} onChange={e => handleField('horarioFuncionamento', e.target.value)} placeholder="Valor..." />
                    </div>
                    <div className="local-info-card">
                      <input className="editor-inline-input editor-inline-card-title" value={local.labelPreco || '💰 Preço'} onChange={e => handleField('labelPreco', e.target.value)} placeholder="Título do campo" />
                      <input className="editor-inline-input" value={local.preco || ''} onChange={e => handleField('preco', e.target.value)} placeholder="Valor..." />
                    </div>
                    <div className="local-info-card">
                      <input className="editor-inline-input editor-inline-card-title" value={local.labelCoordenadas || '🗺️ Coordenadas'} onChange={e => handleField('labelCoordenadas', e.target.value)} placeholder="Título do campo" />
                      <input className="editor-inline-input" value={local.coordenadas || ''} onChange={e => handleField('coordenadas', e.target.value)} placeholder="Valor..." />
                    </div>
                  </div>
                </div>
                <div className="local-image-wrapper">
                  {[3, 4].map(i => (
                    <label key={i} className="editor-image-thumb editor-image-large" style={{ backgroundImage: imagens[i] ? `url(${imagens[i]})` : 'none', marginBottom: '1rem' }}>
                      {uploadingIndex === i ? <span>⏳</span> : <span>{imagens[i] ? '🔄 Trocar foto' : `+ Foto Visite ${i - 2}`}</span>}
                      <input type="file" accept="image/*" onChange={e => handleImageUpload(e, i)} />
                    </label>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ABA FOTOS */}
          {aba === 'fotos' && (
            <div className="local-galeria-container">
              <h2>Galeria de Fotos</h2>
              <div className="local-galeria-grid">
                {imagens.map((img, i) => (
                  <label key={i} className="editor-galeria-item" style={{ backgroundImage: img ? `url(${img})` : 'none' }}>
                    {uploadingIndex === i ? <span className="editor-galeria-overlay">⏳</span> : (
                      <span className="editor-galeria-overlay">{img ? '🔄' : `+ Foto ${i + 1}`}</span>
                    )}
                    <input type="file" accept="image/*" onChange={e => handleImageUpload(e, i)} />
                  </label>
                ))}
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

export default EditarLocal;
