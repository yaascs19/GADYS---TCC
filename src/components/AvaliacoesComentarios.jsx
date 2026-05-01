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
  const [minhaAvaliacao, setMinhaAvaliacao] = useState(0);
  const [hoverStar, setHoverStar] = useState(0);
  const [comentarios, setComentarios] = useState([]);
  const [novoComentario, setNovoComentario] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [toast, setToast] = useState(null);

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
          const minha = avs.find(a => String(a.usuario?.id) === String(usuarioId));
          if (minha) setMinhaAvaliacao(minha.nota);
        }
      }).catch(() => {});
  };

  const loadComentarios = () => {
    fetch(`${API_URL}/api/comentarios/local/${resolvedId}`)
      .then(r => r.json())
      .then(data => setComentarios(Array.isArray(data) ? data : []))
      .catch(() => {});
  };

  useEffect(() => {
    if (resolvedId) { loadAvaliacoes(); loadComentarios(); }
  }, [resolvedId]);

  if (!resolvedId) return <div style={{ color: '#A9B4C2', textAlign: 'center', padding: '3rem' }}>Carregando...</div>;

  const handleAvaliar = async (nota) => {
    if (!isLoggedIn) { showToast('Faça login para avaliar.', 'info'); return; }
    try {
      await fetch(`${API_URL}/api/avaliacoes?localId=${resolvedId}&usuarioId=${usuarioId}&nota=${nota}`, { method: 'POST' });
      setMinhaAvaliacao(nota);
      loadAvaliacoes();
      showToast('Avaliação salva!', 'success');
    } catch { showToast('Erro ao salvar avaliação.'); }
  };

  const handleComentar = async () => {
    if (!isLoggedIn) { showToast('Faça login para comentar.', 'info'); return; }
    if (!novoComentario.trim()) return;
    setEnviando(true);
    const texto = novoComentario.trim();
    try {
      const res = await fetch(
        `${API_URL}/api/comentarios?localId=${resolvedId}&usuarioId=${usuarioId}&texto=${encodeURIComponent(texto)}`,
        { method: 'POST' }
      );
      if (res.ok) {
        const novoLocal = {
          id: Date.now(),
          texto,
          dataComentario: new Date().toISOString(),
          usuarioId,
          nomeUsuario: localStorage.getItem('usuarioNome') || 'Você',
          nota: minhaAvaliacao || null,
        };
        setComentarios(prev => [novoLocal, ...prev]);
        setNovoComentario('');
        showToast('Comentário enviado!', 'success');
      } else {
        showToast('Erro ao enviar comentário.');
      }
    } catch { showToast('Erro ao enviar comentário.'); }
    finally { setEnviando(false); }
  };

  const handleExcluir = async (comentarioId) => {
    try {
      await fetch(`${API_URL}/api/comentarios/${comentarioId}?usuarioId=${usuarioId}`, { method: 'DELETE' });
      loadComentarios();
    } catch { showToast('Erro ao excluir comentário.'); }
  };

  const Estrelas = ({ valor, interativo = false, tamanho = '1.4rem' }) => (
    <div style={{ display: 'flex', gap: '2px' }}>
      {[1,2,3,4,5].map(n => (
        <span
          key={n}
          onClick={() => interativo && handleAvaliar(n)}
          onMouseEnter={() => interativo && setHoverStar(n)}
          onMouseLeave={() => interativo && setHoverStar(0)}
          style={{
            fontSize: tamanho,
            cursor: interativo ? 'pointer' : 'default',
            color: n <= (interativo ? (hoverStar || minhaAvaliacao) : valor) ? '#f59e0b' : '#4b5563',
            transition: 'color 0.15s'
          }}
        >★</span>
      ))}
    </div>
  );

  return (
    <div className="ac-container">
      {toast && (
        <div className={`ac-toast ac-toast--${toast.type}`}>{toast.msg}</div>
      )}

      {/* Média */}
      <div className="ac-rating-summary">
        <span className="ac-rating-number">{Number(media).toFixed(1)}</span>
        <div>
          <Estrelas valor={media} tamanho="1.6rem" />
          <span className="ac-rating-total">{totalAvaliacoes} avaliações</span>
        </div>
      </div>

      {/* Avaliar */}
      <div className="ac-avaliar-box">
        <p>{isLoggedIn ? 'Sua avaliação:' : 'Faça login para avaliar'}</p>
        {isLoggedIn && <Estrelas valor={minhaAvaliacao} interativo tamanho="2rem" />}
      </div>

      {/* Comentários */}
      <div className="ac-comentarios">
        <h3>Comentários</h3>

        {isLoggedIn && (
          <div className="ac-form">
            <textarea
              value={novoComentario}
              onChange={e => setNovoComentario(e.target.value)}
              placeholder="Escreva seu comentário..."
              rows={3}
            />
            <button onClick={handleComentar} disabled={enviando || !novoComentario.trim()}>
              {enviando ? 'Enviando...' : 'Enviar'}
            </button>
          </div>
        )}

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
              <p className="ac-comentario-texto">{c.texto}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AvaliacoesComentarios;
