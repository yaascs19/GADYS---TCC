import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './LocalDetalhe.css';
import './EditarLocal.css';

const API_URL = import.meta.env.VITE_API_URL;
const CLOUD_NAME = 'dybpie9aa';
const UPLOAD_PRESET = 'gadys_tcc';

let _id = 0;
const uid = () => ++_id;

// seções: carrossel(0-1), sobre(2), visite(3-4), extras(5+)
const SECOES = ['carrossel', 'sobre', 'visite'];
const secaoDeIndice = (i) => {
  if (i <= 1) return 'carrossel';
  if (i === 2) return 'sobre';
  if (i <= 4) return 'visite';
  return 'extra';
};

const ImageSlot = ({ slot, index, uploading, large, onUpload, onRemove, canRemove }) => {
  const fileRef = React.useRef();
  return (
    <div className="editor-slot-wrapper">
      <div
        className={`editor-image-thumb ${large ? 'editor-image-large' : ''}`}
        style={{ backgroundImage: slot.url ? `url(${slot.url})` : 'none', cursor: 'pointer' }}
        onClick={() => fileRef.current.click()}
      >
        {uploading ? <span>⏳</span> : <span>{slot.url ? '🔄' : `+ Foto ${index + 1}`}</span>}
        <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={e => onUpload(e, slot.id)} />
      </div>
      {canRemove && (
        <button type="button" className="editor-slot-remove" onClick={() => onRemove(slot.id)}>×</button>
      )}
    </div>
  );
};

const AddButton = ({ secao, onAdd }) => (
  <button type="button" className="editor-slot-add-bottom" onClick={() => onAdd(secao)}>+</button>
);

function EditarLocal() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [local, setLocal] = useState(null);
  const [slots, setSlots] = useState([]);
  const [aba, setAba] = useState('sobre');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingId, setUploadingId] = useState(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/api/locais/${id}`)
      .then(r => r.json())
      .then(data => {
        setLocal(data);
        const imgs = data.imagemUrl ? data.imagemUrl.split(',').map(u => u.trim()).filter(Boolean) : [];
        const base = imgs.length >= 5 ? imgs : [...imgs, ...Array(5 - imgs.length).fill('')];
        setSlots(base.map((url, i) => ({ id: uid(), url, secao: secaoDeIndice(i) })));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleField = (field, value) => setLocal(prev => ({ ...prev, [field]: value }));

  const handleImageUpload = useCallback(async (e, slotId) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploadingId(slotId);
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', UPLOAD_PRESET);
    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, { method: 'POST', body: data });
      const json = await res.json();
      setSlots(prev => prev.map(s => s.id === slotId ? { ...s, url: json.secure_url } : s));
    } catch { alert('Erro ao fazer upload da imagem.'); }
    finally { setUploadingId(null); }
  }, []);

  const handleAddSlot = useCallback((secao) => {
    setSlots(prev => [...prev, { id: uid(), url: '', secao }]);
  }, []);

  const handleRemoveSlot = useCallback((slotId) => {
    setSlots(prev => prev.filter(s => s.id !== slotId));
  }, []);

  const handleSave = async (aprovar = false) => {
    setSaving(true);
    try {
      // ordem: carrossel, sobre, visite, extra
      const ordered = [
        ...slots.filter(s => s.secao === 'carrossel'),
        ...slots.filter(s => s.secao === 'sobre'),
        ...slots.filter(s => s.secao === 'visite'),
        ...slots.filter(s => s.secao === 'extra'),
      ];
      const body = { ...local, imagemUrl: ordered.map(s => s.url).filter(Boolean).join(',') };
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

  const carrosselSlots = slots.filter(s => s.secao === 'carrossel');
  const sobreSlots = slots.filter(s => s.secao === 'sobre');
  const visiteSlots = slots.filter(s => s.secao === 'visite');
  const todosSlots = slots;

  const carrossel = carrosselSlots.map(s => s.url).filter(Boolean);

  const SP = (slot, i, secao, large = false) => (
    <ImageSlot
      key={slot.id}
      slot={slot}
      index={i}
      large={large}
      uploading={uploadingId === slot.id}
      onUpload={handleImageUpload}
      onRemove={handleRemoveSlot}
      canRemove={slots.filter(s => s.secao === secao).length > 1}
    />
  );

  return (
    <div className="local-detalhe-container" style={{ position: 'relative' }}>

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

      <header className="local-detalhe-header">
        {(carrossel.length > 0 ? carrossel : ['']).map((img, i) => (
          <img key={i} src={img} alt="" className={`local-header-carousel-image ${i === 0 ? 'active' : ''}`} />
        ))}
        <div className="local-header-text" style={{ zIndex: 10, width: '100%', padding: '0 2rem' }}>
          <input className="editor-inline-title" value={local.nome || ''} onChange={e => handleField('nome', e.target.value)} placeholder="Nome do local" />
          <input className="editor-inline-subtitle"
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
          {carrosselSlots.map((slot, i) => SP(slot, i, 'carrossel'))}
          <AddButton secao="carrossel" onAdd={handleAddSlot} />
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

          {aba === 'sobre' && (
            <section className="local-section">
              <div className="local-text-image-split">
                <div className="local-text">
                  <h2>Sobre o Local</h2>
                  <textarea className="editor-inline-textarea" value={local.descricao || ''} onChange={e => handleField('descricao', e.target.value)} placeholder="Descrição do local..." rows={6} />
                  <textarea className="editor-inline-textarea" value={local.informacoesAdicionais || ''} onChange={e => handleField('informacoesAdicionais', e.target.value)} placeholder="Informações adicionais (opcional)..." rows={3} />
                </div>
                <div className="local-image-wrapper">
                  {sobreSlots.map((slot, i) => SP(slot, i, 'sobre', true))}
                  <AddButton secao="sobre" onAdd={handleAddSlot} />
                </div>
              </div>
            </section>
          )}

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
                  {visiteSlots.map((slot, i) => (
                    <div key={slot.id} style={{ marginBottom: '1rem' }}>
                      {SP(slot, i, 'visite', true)}
                    </div>
                  ))}
                  <AddButton secao="visite" onAdd={handleAddSlot} />
                </div>
              </div>
            </section>
          )}

          {aba === 'fotos' && (
            <div className="local-galeria-container">
              <h2>Galeria de Fotos</h2>
              <p style={{ color: '#A9B4C2', fontSize: '0.85rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                Clique na imagem para trocar • + para adicionar • × para remover
              </p>
              <div className="local-galeria-grid">
                {todosSlots.map((slot, i) => SP(slot, i, slot.secao))}
              </div>
              <AddButton secao="extra" onAdd={handleAddSlot} />
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

export default EditarLocal;
