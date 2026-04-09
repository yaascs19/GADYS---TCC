import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './LocalDetalhe.css';
import './EditarLocal.css';

const API_URL = import.meta.env.VITE_API_URL;
const CLOUD_NAME = 'dybpie9aa';
const UPLOAD_PRESET = 'gadys_tcc';

let _id = 0;
const uid = () => ++_id;
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
      {canRemove && <button type="button" className="editor-slot-remove" onClick={() => onRemove(slot.id)}>×</button>}
    </div>
  );
};

const AddButton = ({ secao, onAdd }) => (
  <button type="button" className="editor-slot-add-bottom" onClick={() => onAdd(secao)}>+</button>
);

// --- Editor para locais com JSON rico (tipo EncontroAguas) ---
function EditorRico({ dadosRicos, onChange }) {
  const { secoes } = dadosRicos;

  const updateSecao = (key, field, value) => {
    onChange({ ...dadosRicos, secoes: { ...secoes, [key]: { ...secoes[key], [field]: value } } });
  };

  const updateSubsecao = (secaoKey, idx, field, value) => {
    const novas = [...(secoes[secaoKey].subsecoes || [])];
    novas[idx] = { ...novas[idx], [field]: value };
    updateSecao(secaoKey, 'subsecoes', novas);
  };

  const updateRecomendacao = (secaoKey, recIdx, field, value) => {
    const novas = [...(secoes[secaoKey].recomendacoes || [])];
    novas[recIdx] = { ...novas[recIdx], [field]: value };
    updateSecao(secaoKey, 'recomendacoes', novas);
  };

  const updateItem = (secaoKey, recIdx, itemIdx, field, value) => {
    const novas = [...(secoes[secaoKey].recomendacoes || [])];
    const itens = [...novas[recIdx].itens];
    itens[itemIdx] = { ...itens[itemIdx], [field]: value };
    novas[recIdx] = { ...novas[recIdx], itens };
    updateSecao(secaoKey, 'recomendacoes', novas);
  };

  const addItem = (secaoKey, recIdx) => {
    const novas = [...(secoes[secaoKey].recomendacoes || [])];
    novas[recIdx] = { ...novas[recIdx], itens: [...novas[recIdx].itens, { nome: '', nota: 5, contato: '', site: '' }] };
    updateSecao(secaoKey, 'recomendacoes', novas);
  };

  const removeItem = (secaoKey, recIdx, itemIdx) => {
    const novas = [...(secoes[secaoKey].recomendacoes || [])];
    novas[recIdx] = { ...novas[recIdx], itens: novas[recIdx].itens.filter((_, i) => i !== itemIdx) };
    updateSecao(secaoKey, 'recomendacoes', novas);
  };

  const addSubsecao = (secaoKey) => {
    const novas = [...(secoes[secaoKey].subsecoes || []), { titulo: '', texto: '' }];
    updateSecao(secaoKey, 'subsecoes', novas);
  };

  const removeSubsecao = (secaoKey, idx) => {
    updateSecao(secaoKey, 'subsecoes', secoes[secaoKey].subsecoes.filter((_, i) => i !== idx));
  };

  const addRecomendacao = (secaoKey) => {
    const novas = [...(secoes[secaoKey].recomendacoes || []), { titulo: '', itens: [] }];
    updateSecao(secaoKey, 'recomendacoes', novas);
  };

  const removeRecomendacao = (secaoKey, recIdx) => {
    updateSecao(secaoKey, 'recomendacoes', secoes[secaoKey].recomendacoes.filter((_, i) => i !== recIdx));
  };

  return (
    <div>
      {Object.entries(secoes).map(([key, secao]) => {
        if (key === 'fotos') return null;
        return (
          <div key={key} style={{ marginBottom: '2.5rem', background: 'rgba(255,255,255,0.04)', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(56,189,248,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <span style={{ color: '#38BDF8', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: 1 }}>Aba:</span>
              <input className="editor-inline-input" style={{ fontWeight: 700, color: '#38BDF8' }} value={secao.label || ''} onChange={e => updateSecao(key, 'label', e.target.value)} placeholder="Nome da aba" />
            </div>

            <input className="editor-inline-input" style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff', marginBottom: '0.75rem' }} value={secao.titulo || ''} onChange={e => updateSecao(key, 'titulo', e.target.value)} placeholder="Título da seção" />

            <textarea className="editor-inline-textarea" value={secao.texto || ''} onChange={e => updateSecao(key, 'texto', e.target.value)} placeholder="Texto principal..." rows={4} />

            {/* Lista de fatos */}
            {secao.lista && (
              <div style={{ marginTop: '1rem' }}>
                <p style={{ color: '#38BDF8', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>LISTA DE FATOS</p>
                {secao.lista.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <input className="editor-inline-input" value={item} onChange={e => { const n = [...secao.lista]; n[i] = e.target.value; updateSecao(key, 'lista', n); }} placeholder="Item da lista" />
                    <button type="button" className="editor-slot-remove" onClick={() => updateSecao(key, 'lista', secao.lista.filter((_, j) => j !== i))}>×</button>
                  </div>
                ))}
                <button type="button" className="editor-slot-add-bottom" onClick={() => updateSecao(key, 'lista', [...secao.lista, ''])}>+ item</button>
              </div>
            )}

            {/* Imagem da seção */}
            <div style={{ marginTop: '1rem' }}>
              <p style={{ color: '#38BDF8', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>IMAGEM DA SEÇÃO</p>
              <input className="editor-inline-input" value={secao.imagem || ''} onChange={e => updateSecao(key, 'imagem', e.target.value)} placeholder="URL da imagem" />
            </div>

            {/* Subsecoes */}
            {secao.subsecoes !== undefined && (
              <div style={{ marginTop: '1.5rem' }}>
                <p style={{ color: '#38BDF8', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.75rem' }}>SUBSEÇÕES</p>
                {secao.subsecoes.map((sub, i) => (
                  <div key={i} style={{ background: 'rgba(56,104,58,0.3)', borderRadius: '8px', padding: '1rem', marginBottom: '0.75rem', borderLeft: '3px solid #38BDF8' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <input className="editor-inline-input" style={{ fontWeight: 600 }} value={sub.titulo} onChange={e => updateSubsecao(key, i, 'titulo', e.target.value)} placeholder="Título da subseção" />
                      <button type="button" className="editor-slot-remove" onClick={() => removeSubsecao(key, i)}>×</button>
                    </div>
                    <textarea className="editor-inline-textarea" value={sub.texto} onChange={e => updateSubsecao(key, i, 'texto', e.target.value)} placeholder="Texto..." rows={3} />
                  </div>
                ))}
                <button type="button" className="editor-slot-add-bottom" onClick={() => addSubsecao(key)}>+ subseção</button>
              </div>
            )}

            {/* Recomendações */}
            {secao.recomendacoes !== undefined && (
              <div style={{ marginTop: '1.5rem' }}>
                <p style={{ color: '#38BDF8', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.75rem' }}>RECOMENDAÇÕES</p>
                {secao.recomendacoes.map((rec, ri) => (
                  <div key={ri} style={{ background: 'rgba(56,104,58,0.3)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <input className="editor-inline-input" style={{ fontWeight: 600 }} value={rec.titulo} onChange={e => updateRecomendacao(key, ri, 'titulo', e.target.value)} placeholder="Título do grupo" />
                      <button type="button" className="editor-slot-remove" onClick={() => removeRecomendacao(key, ri)}>×</button>
                    </div>
                    {rec.itens.map((item, ii) => (
                      <div key={ii} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 2fr auto', gap: '0.5rem', marginBottom: '0.5rem', alignItems: 'center' }}>
                        <input className="editor-inline-input" value={item.nome} onChange={e => updateItem(key, ri, ii, 'nome', e.target.value)} placeholder="Nome" />
                        <input className="editor-inline-input" type="number" min="1" max="5" step="0.1" value={item.nota} onChange={e => updateItem(key, ri, ii, 'nota', parseFloat(e.target.value))} placeholder="Nota" />
                        <input className="editor-inline-input" value={item.contato} onChange={e => updateItem(key, ri, ii, 'contato', e.target.value)} placeholder="Contato" />
                        <input className="editor-inline-input" value={item.site} onChange={e => updateItem(key, ri, ii, 'site', e.target.value)} placeholder="Site" />
                        <button type="button" className="editor-slot-remove" onClick={() => removeItem(key, ri, ii)}>×</button>
                      </div>
                    ))}
                    <button type="button" className="editor-slot-add-bottom" onClick={() => addItem(key, ri)}>+ item</button>
                  </div>
                ))}
                <button type="button" className="editor-slot-add-bottom" onClick={() => addRecomendacao(key)}>+ grupo de recomendações</button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function EditarLocal() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [local, setLocal] = useState(null);
  const [slots, setSlots] = useState([]);
  const [dadosRicos, setDadosRicos] = useState(null);
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
        // detectar se tem JSON rico
        try {
          const parsed = JSON.parse(data.informacoesAdicionais);
          if (parsed?.secoes) setDadosRicos(parsed);
        } catch { /* local simples */ }

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
      const ordered = [
        ...slots.filter(s => s.secao === 'carrossel'),
        ...slots.filter(s => s.secao === 'sobre'),
        ...slots.filter(s => s.secao === 'visite'),
        ...slots.filter(s => s.secao === 'extra'),
      ];
      const body = {
        ...local,
        imagemUrl: ordered.map(s => s.url).filter(Boolean).join(','),
        informacoesAdicionais: dadosRicos ? JSON.stringify(dadosRicos) : local.informacoesAdicionais,
      };
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
    <ImageSlot key={slot.id} slot={slot} index={i} large={large}
      uploading={uploadingId === slot.id} onUpload={handleImageUpload}
      onRemove={handleRemoveSlot} canRemove={slots.filter(s => s.secao === secao).length > 1} />
  );

  return (
    <div className="local-detalhe-container" style={{ position: 'relative' }}>

      <div className="editor-toolbar">
        <span className="editor-toolbar-label">✏️ Modo Edição {dadosRicos && <span style={{ fontSize: '0.7rem', opacity: 0.7 }}>— página rica</span>}</span>
        <div className="editor-toolbar-actions">
          <button className="editor-btn-save" onClick={() => handleSave(false)} disabled={saving}>
            {saved ? '✓ Salvo!' : saving ? 'Salvando...' : 'Salvar Rascunho'}
          </button>
          <button className="editor-btn-approve" onClick={() => handleSave(true)} disabled={saving}>
            {saving ? '...' : '✓ Salvar e Aprovar'}
          </button>
          <button className="editor-btn-cancel" onClick={() => navigate('/painel-adm')}>Cancelar</button>
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
          {dadosRicos
            ? Object.keys(dadosRicos.secoes).map(key => (
                <button key={key} onClick={() => setAba(key)} className={aba === key ? 'active' : ''}>
                  {dadosRicos.secoes[key].label}
                </button>
              ))
            : ['sobre', 'visite', 'fotos'].map(a => (
                <button key={a} onClick={() => setAba(a)} className={aba === a ? 'active' : ''}>
                  {a === 'sobre' ? 'Sobre' : a === 'visite' ? 'Visite' : 'Fotos'}
                </button>
              ))
          }
          <button onClick={() => setAba('__fotos__')} className={aba === '__fotos__' ? 'active' : ''}>Fotos</button>
        </nav>

        <main className="local-main-content">

          {/* EDITOR RICO */}
          {dadosRicos && aba !== '__fotos__' && aba !== 'fotos' && (
            <EditorRico dadosRicos={dadosRicos} onChange={setDadosRicos} />
          )}

          {/* EDITOR SIMPLES — aba sobre */}
          {!dadosRicos && aba === 'sobre' && (
            <section className="local-section">
              <div className="local-text-image-split">
                <div className="local-text">
                  <h2>Sobre o Local</h2>
                  <textarea className="editor-inline-textarea" value={local.descricao || ''} onChange={e => handleField('descricao', e.target.value)} placeholder="Descrição do local..." rows={6} />
                </div>
                <div className="local-image-wrapper">
                  {sobreSlots.map((slot, i) => SP(slot, i, 'sobre', true))}
                  <AddButton secao="sobre" onAdd={handleAddSlot} />
                </div>
              </div>
            </section>
          )}

          {/* EDITOR SIMPLES — aba visite */}
          {!dadosRicos && aba === 'visite' && (
            <section className="local-section">
              <div className="local-text-image-split">
                <div className="local-text">
                  <h2>Informações Práticas</h2>
                  <div className="local-info-cards">
                    {[
                      { label: 'labelEndereco', default: '📍 Endereço', field: 'endereco' },
                      { label: 'labelHorario', default: '🕐 Horário de Funcionamento', field: 'horarioFuncionamento' },
                      { label: 'labelPreco', default: '💰 Preço', field: 'preco' },
                      { label: 'labelCoordenadas', default: '🗺️ Coordenadas', field: 'coordenadas' },
                    ].map(({ label, default: def, field }) => (
                      <div key={field} className="local-info-card">
                        <input className="editor-inline-input editor-inline-card-title" value={local[label] || def} onChange={e => handleField(label, e.target.value)} />
                        <input className="editor-inline-input" value={local[field] || ''} onChange={e => handleField(field, e.target.value)} placeholder="Valor..." />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="local-image-wrapper">
                  {visiteSlots.map((slot, i) => <div key={slot.id} style={{ marginBottom: '1rem' }}>{SP(slot, i, 'visite', true)}</div>)}
                  <AddButton secao="visite" onAdd={handleAddSlot} />
                </div>
              </div>
            </section>
          )}

          {/* FOTOS */}
          {(aba === '__fotos__' || (!dadosRicos && aba === 'fotos')) && (
            <div className="local-galeria-container">
              <h2>Galeria de Fotos</h2>
              <p style={{ color: '#A9B4C2', fontSize: '0.85rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                Clique na imagem para trocar • + para adicionar • × para remover
              </p>
              <div className="local-galeria-grid">
                {todosSlots.map((slot, i) => (
                  <ImageSlot key={slot.id} slot={slot} index={i}
                    uploading={uploadingId === slot.id} onUpload={handleImageUpload}
                    onRemove={handleRemoveSlot} canRemove={todosSlots.length > 1} />
                ))}
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
