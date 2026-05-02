import { useState, useEffect, useRef } from 'react';
import './AvaliacoesComentarios.css';

const API_URL = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');

function AvaliacoesComentarios({ localId }) {
  const idRef = useRef(localId);
  const [resolvedId, setResolvedId] = useState(localId);

  useEffect(() => {
    if (localId && localId !== idRef.current) {
      idRef.current = localId;
      setResolvedId(localId);
    } else if (localId && !resolvedId) {
      idRef.current = localId;
      setResolvedId(localId);
    }
  }, [localId]);

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const usuarioId = localStorage.getItem('usuarioId');

  const [media, setMedia] = useState(0);
  const [totalAvaliacoes, setTotalAvaliacoes] = useState(0);
  const [comentarios, setComentarios] = useState([]);
  const [toast, setToast] = useState(null);

  // bloco de avaliação/comentário do usuário
  const [minhaAvaliacao, setMinhaAvaliacao] = useState(0);
  const [meuComentarioId, setMeuComentarioId] = useState(null);
  const [hoverStar, setHoverStar] = useState(0);
  const [notaSelecionada, setNotaSelecionada] = useState(0);
  const [blocoAberto, setBlocoAberto] = useState(false);
  const [textoBloco, setTextoBloco] = useState('');
  const [enviando, setEnviando] = useState(false);

  // edição de outros comentários (admin)
  const [editandoId, setEditandoId] = useState(null);
  const [textoEditado, setTextoEditado] = useState('');
  const [salvandoEdicao, setSalvandoEdicao] = useState(false);

  const showToast = (msg, type = 'error') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  const loadAvaliacoes = () => {
    fetch(`${API_URL}/api/avaliacoes/local/${resolvedId}/media`)
      .then(r => r.json()).then(m => setMedia(m)).catch(() => {});
    fetch(`${API_URL}/api/avaliacoes/local/${resolvedId}`)
      .then(r => r.json())
      .then(avs => {
        if (!Array.isArray(avs)) return;
        setTotalAvaliacoes(avs.length);
        if (usuarioId) {
          const minha = avs.find(a => String(a.usuarioId) === String(usuarioId));
          if (minha) setMinhaAvaliacao(minha.nota);
        }
      }).catch(() => {});
  };

  const loadComentarios = () => {
    fetch(`${API_URL}/api/comentarios/local/${resolvedId}`)
      .then(r => r.json())
      .then(data => {
        if (!Array.isArray(data)) return;
        setComentarios(data);
        if (usuarioId) {
          const meu = data.find(c => String(c.usuarioId) === String(usuarioId));
          if (meu) { setMeuComentarioId(meu.id); setTextoBloco(meu.texto); }
        }
      }).catch(() => {});
  };

  useEffect(() => {
    if (resolvedId) { loadAvaliacoes(); loadComentarios(); }
  }, [resolvedId]);

  if (!resolvedId) return <div style={{ color: '#A9B4C2', textAlign: 'center', padding: '3rem' }}>Carregando...</div>;

  const handleClickEstrela = (n) => {
    if (!isLoggedIn) { showToast('Faça login para avaliar.', 'info'); return; }
    setNotaSelecionada(n);
    setBlocoAberto(true);
  };

  const handleEnviar = async () => {
    if (!notaSelecionada && !minhaAvaliacao) return;
    setEnviando(true);
    const nota = notaSelecionada || minhaAvaliacao;
    try {
      // salva avaliação
      await fetch(`${API_URL}/api/avaliacoes?localId=${resolvedId}&usuarioId=${usuarioId}&nota=${nota}`, { method: 'POST' });

      const jaAvaliou = minhaAvaliacao > 0;
      const novoTotal = jaAvaliou ? totalAvaliacoes : totalAvaliacoes + 1;
      const novaSoma = (media * totalAvaliacoes) - (jaAvaliou ? minhaAvaliacao : 0) + nota;
      setMinhaAvaliacao(nota);
      if (!jaAvaliou) setTotalAvaliacoes(novoTotal);
      setMedia(novaSoma / novoTotal);

      // salva comentário se preenchido
      if (textoBloco.trim()) {
        if (meuComentarioId) {
          // edita comentário existente
          await fetch(
            `${API_URL}/api/comentarios/${meuComentarioId}?usuarioId=${usuarioId}&texto=${encodeURIComponent(textoBloco.trim())}`,
            { method: 'PUT' }
          );
          setComentarios(prev => prev.map(c =>
            c.id === meuComentarioId ? { ...c, texto: textoBloco.trim(), nota } : c
          ));
        } else {
          // cria novo comentário
          const res = await fetch(
            `${API_URL}/api/comentarios?localId=${resolvedId}&usuarioId=${usuarioId}&texto=${encodeURIComponent(textoBloco.trim())}`,
            { method: 'POST' }
          );
          if (res.ok) {
            const novoC = {
              id: Date.now(),
              texto: textoBloco.trim(),
              dataComentario: new Date().toISOString(),
              usuarioId,
              nomeUsuario: localStorage.getItem('usuarioNome') || 'Você',
              nota,
            };
            setMeuComentarioId(novoC.id);
            setComentarios(prev => [novoC, ...prev]);
          }
        }
      }

      setBlocoAberto(false);
      setNotaSelecionada(0);
      showToast('Avaliação salva!', 'success');
    } catch { showToast('Erro ao salvar.'); }
    finally { setEnviando(false); }
  };

  const handleExcluir = async (comentarioId) => {
    try {
      await fetch(`${API_URL}/api/comentarios/${comentarioId}?usuarioId=${usuarioId}`, { method: 'DELETE' });
      setComentarios(prev => prev.filter(c => c.id !== comentarioId));
      if (comentarioId === meuComentarioId) { setMeuComentarioId(null); setTextoBloco(''); }
    } catch { showToast('Erro ao excluir comentário.'); }
  };

  const handleEditar = (c) => { setEditandoId(c.id); setTextoEditado(c.texto); };

  const handleSalvarEdicao = async (comentarioId) => {
    if (!textoEditado.trim()) return;
    setSalvandoEdicao(true);
    try {
      const res = await fetch(
        `${API_URL}/api/comentarios/${comentarioId}?usuarioId=${usuarioId}&texto=${encodeURIComponent(textoEditado.trim())}`,
        { method: 'PUT' }
      );
      if (res.ok) {
        setComentarios(prev => prev.map(c => c.id === comentarioId ? { ...c, texto: textoEditado.trim() } : c));
        setEditandoId(null);
        showToast('Comentário editado!', 'success');
      }
    } catch { showToast('Erro ao editar comentário.'); }
    finally { setSalvandoEdicao(false); }
  };

  const Estrelas = ({ valor, interativo = false, tamanho = '1.4rem', onSelect }) => (
    <div style={{ display: 'flex', gap: '2px' }}>
      {[1,2,3,4,5].map(n => (
        <span
          key={n}
          onClick={() => onSelect ? onSelect(n) : interativo && handleClickEstrela(n)}
          onMouseEnter={() => interativo && setHoverStar(n)}
          onMouseLeave={() => interativo && setHoverStar(0)}
          style={{
            fontSize: tamanho,
            cursor: interativo ? 'pointer' : 'default',
            color: n <= (interativo ? (hoverStar || notaSelecionada || minhaAvaliacao) : valor) ? '#f59e0b' : '#4b5563',
            transition: 'color 0.15s'
          }}
        >★</span>
      ))}
    </div>
  );

  const notaExibida = notaSelecionada || minhaAvaliacao;

  return (
    <div className="ac-container">
      {toast && <div className={`ac-toast ac-toast--${toast.type}`}>{toast.msg}</div>}

      {/* Média */}
      <div className="ac-rating-summary">
        <span className="ac-rating-number">{Number(media).toFixed(1)}</span>
        <div>
          <Estrelas valor={media} tamanho="1.6rem" />
          <span className="ac-rating-total">{totalAvaliacoes} avaliações</span>
        </div>
      </div>

      {/* Bloco avaliação + comentário */}
      {isLoggedIn && (
        <div className="ac-bloco-avaliar">
          <p className="ac-bloco-label">
            {minhaAvaliacao > 0 ? 'Sua avaliação (clique para editar):' : 'Avalie este local:'}
          </p>
          <Estrelas valor={notaExibida} interativo tamanho="2rem" />

          {blocoAberto && (
            <>
              <textarea
                value={textoBloco}
                onChange={e => setTextoBloco(e.target.value)}
                placeholder="Deixe um comentário (opcional)..."
                rows={3}
                className="ac-bloco-textarea"
              />
              <div className="ac-bloco-actions">
                <button className="ac-cancelar" onClick={() => { setBlocoAberto(false); setNotaSelecionada(0); }}>
                  Cancelar
                </button>
                <button className="ac-enviar" onClick={handleEnviar} disabled={enviando}>
                  {enviando ? 'Salvando...' : 'Salvar'}
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Comentários */}
      <div className="ac-comentarios">
        <h3>Comentários</h3>

        {comentarios.length === 0 ? (
          <p className="ac-sem-comentarios">Nenhum comentário ainda. Seja o primeiro!</p>
        ) : (
          comentarios.map(c => (
            <div key={c.id} className="ac-comentario">
              <div className="ac-comentario-header">
                <span className="ac-comentario-autor">{c.nomeUsuario || 'Usuário'}</span>
                {c.nota && <Estrelas valor={c.nota} tamanho="1rem" />}
                <span className="ac-comentario-data">
                  {new Date(c.dataComentario).toLocaleDateString('pt-BR')}
                </span>
                {String(c.usuarioId) === String(usuarioId) && (
                  <button className="ac-excluir" onClick={() => handleExcluir(c.id)}>Excluir</button>
                )}
              </div>
              {editandoId === c.id ? (
                <div className="ac-form ac-form--edicao">
                  <textarea value={textoEditado} onChange={e => setTextoEditado(e.target.value)} rows={3} />
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button onClick={() => handleSalvarEdicao(c.id)} disabled={salvandoEdicao || !textoEditado.trim()}>
                      {salvandoEdicao ? 'Salvando...' : 'Salvar'}
                    </button>
                    <button className="ac-cancelar" onClick={() => setEditandoId(null)}>Cancelar</button>
                  </div>
                </div>
              ) : (
                <p className="ac-comentario-texto">{c.texto}</p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AvaliacoesComentarios;
