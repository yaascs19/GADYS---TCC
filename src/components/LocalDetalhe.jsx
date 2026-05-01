import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './LocalDetalhe.css';

const API_URL = import.meta.env.VITE_API_URL;

const HeaderCarousel = ({ images, nome, cidade, estado }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIndex(i => (i + 1) % images.length), 5000);
    return () => clearTimeout(timer);
  }, [index, images.length]);

  return (
    <header className="local-detalhe-header">
      {images.map((img, i) => (
        <img key={i} src={img} alt={nome} className={`local-header-carousel-image ${i === index ? 'active' : ''}`} />
      ))}
      <div className="local-header-text">
        <h1>{nome}</h1>
        <p>{cidade}, {estado}</p>
      </div>
    </header>
  );
};

const AbaGaleria = ({ images }) => (
  <div className="local-galeria-container">
    <h2>Galeria de Fotos</h2>
    <div className="local-galeria-grid">
      {images.map((img, i) => (
        <div key={i} className="local-galeria-item">
          <img src={img} alt={`Foto ${i + 1}`} />
        </div>
      ))}
    </div>
  </div>
);

const AbaSobre = ({ local, imagemSobre }) => (
  <section className="local-section">
    <div className="local-text-image-split">
      <div className="local-text">
        <h2>Sobre o Local</h2>
        <p>{local.descricao}</p>
        {local.informacoesAdicionais && <p>{local.informacoesAdicionais}</p>}
      </div>
      <div className="local-image-wrapper">
        {imagemSobre && <img src={imagemSobre} alt={local.nome} className="local-image" />}
      </div>
    </div>
  </section>
);

const AbaVisite = ({ local, imagensVisite }) => (
  <section className="local-section">
    <div className="local-text-image-split">
      <div className="local-text">
        <h2>Informações Práticas</h2>
        <div className="local-info-cards">
          {local.endereco && (
            <div className="local-info-card">
              <h3>📍 Endereço</h3>
              <p>{local.endereco}</p>
            </div>
          )}
          {local.horarioFuncionamento && (
            <div className="local-info-card">
              <h3>🕐 Horário de Funcionamento</h3>
              <p>{local.horarioFuncionamento}</p>
            </div>
          )}
          {local.preco && (
            <div className="local-info-card">
              <h3>💰 Preço</h3>
              <p>{local.preco}</p>
            </div>
          )}
          {local.coordenadas && (
            <div className="local-info-card">
              <h3>🗺️ Coordenadas</h3>
              <p>{local.coordenadas}</p>
            </div>
          )}
        </div>
      </div>
      <div className="local-image-wrapper">
        {imagensVisite.map((img, i) => (
          <img key={i} src={img} alt={`Visite ${i + 1}`} className="local-image" />
        ))}
      </div>
    </div>
  </section>
);

function LocalDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [local, setLocal] = useState(null);
  const [aba, setAba] = useState('sobre');
  const [loading, setLoading] = useState(true);

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const usuarioId = localStorage.getItem('usuarioId');
  const userName = localStorage.getItem('userName') || 'Usuário';

  const [media, setMedia] = useState(0);
  const [totalAvaliacoes, setTotalAvaliacoes] = useState(0);
  const [minhaAvaliacao, setMinhaAvaliacao] = useState(0);
  const [hoverStar, setHoverStar] = useState(0);

  const [comentarios, setComentarios] = useState([]);
  const [novoComentario, setNovoComentario] = useState('');
  const [enviandoComentario, setEnviandoComentario] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = 'error') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  const loadAvaliacoes = () => {
    fetch(`${API_URL}/api/avaliacoes/local/${id}/media`)
      .then(r => r.json())
      .then(m => setMedia(m))
      .catch(() => {});
    fetch(`${API_URL}/api/avaliacoes/local/${id}`)
      .then(r => r.json())
      .then(avs => {
        setTotalAvaliacoes(avs.length);
        if (usuarioId) {
          const minha = avs.find(a => String(a.usuarioId) === String(usuarioId) || String(a.usuario?.id) === String(usuarioId));
          if (minha) setMinhaAvaliacao(minha.nota);
        }
      })
      .catch(() => {});
  };

  const loadComentarios = () => {
    fetch(`${API_URL}/api/comentarios/local/${id}`)
      .then(r => r.json())
      .then(data => setComentarios(Array.isArray(data) ? data : []))
      .catch(() => {});
  };

  const handleAvaliar = async (nota) => {
    if (!isLoggedIn) { showToast('Faça login para avaliar.', 'info'); return; }
    setMinhaAvaliacao(nota);
    try {
      await fetch(`${API_URL}/api/avaliacoes?localId=${id}&usuarioId=${usuarioId}&nota=${nota}`, { method: 'POST' });
      loadAvaliacoes();
      showToast('Avaliação salva!', 'success');
    } catch { showToast('Erro ao salvar avaliação.'); }
  };

  const handleComentar = async () => {
    if (!isLoggedIn) { showToast('Faça login para comentar.', 'info'); return; }
    if (!novoComentario.trim()) return;
    setEnviandoComentario(true);
    try {
      const res = await fetch(`${API_URL}/api/comentarios?localId=${id}&usuarioId=${usuarioId}&texto=${encodeURIComponent(novoComentario.trim())}`, { method: 'POST' });
      if (res.ok) {
        setNovoComentario('');
        loadComentarios();
        showToast('Comentário enviado!', 'success');
      }
    } catch { showToast('Erro ao enviar comentário.'); }
    finally { setEnviandoComentario(false); }
  };

  const handleExcluirComentario = async (comentarioId) => {
    try {
      await fetch(`${API_URL}/api/comentarios/${comentarioId}?usuarioId=${usuarioId}`, { method: 'DELETE' });
      loadComentarios();
    } catch { showToast('Erro ao excluir comentário.'); }
  };

  useEffect(() => {
    fetch(`${API_URL}/api/locais/${id}`)
      .then(r => r.json())
      .then(data => { setLocal(data); setLoading(false); })
      .catch(() => setLoading(false));
    loadAvaliacoes();
    loadComentarios();
  }, [id]);

  if (loading) return <div className="local-loading">Carregando...</div>;
  if (!local) return <div className="local-loading">Local não encontrado.</div>;

  const imagens = local.imagemUrl ? local.imagemUrl.split(',').map(u => u.trim()).filter(Boolean) : [];
  const carrossel = imagens.slice(0, 2);
  const imagemSobre = imagens[2] || imagens[0];
  const imagensVisite = imagens.slice(3, 5);
  const imagensGaleria = imagens;

  const abas = ['sobre', 'visite', 'fotos', 'avaliacoes'];

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
            color: n <= (interativo ? (hoverStar || minhaAvaliacao) : valor) ? '#f59e0b' : '#d1d5db',
            transition: 'color 0.15s'
          }}
        >★</span>
      ))}
    </div>
  );

  return (
    <div className="local-detalhe-container">
      {toast && (
        <div style={{
          position: 'fixed', top: '1.5rem', left: '50%', transform: 'translateX(-50%)',
          padding: '0.9rem 1.5rem', borderRadius: '12px', zIndex: 9999,
          background: toast.type === 'success' ? '#1a2d1e' : toast.type === 'info' ? '#1a1f2d' : '#2d1a1a',
          border: `1px solid ${toast.type === 'success' ? 'rgba(16,185,129,0.4)' : toast.type === 'info' ? 'rgba(59,130,246,0.4)' : 'rgba(244,63,94,0.4)'}`,
          color: toast.type === 'success' ? '#6ee7b7' : toast.type === 'info' ? '#93c5fd' : '#fca5a5',
          fontWeight: 500, fontSize: '0.95rem', boxShadow: '0 8px 30px rgba(0,0,0,0.3)'
        }}>{toast.msg}</div>
      )}
      <div style={{ position: 'relative' }}>
        <HeaderCarousel images={carrossel.length > 0 ? carrossel : [imagens[0]]} nome={local.nome} cidade={local.cidade} estado={local.estado} />
        <button
          onClick={() => navigate(-1)}
          style={{
            position: 'absolute', top: '2rem', left: '2rem', zIndex: 10,
            background: 'rgba(255,255,255,0.2)', border: '2px solid white',
            color: 'white', padding: '0.7rem 1.5rem', borderRadius: '50px',
            cursor: 'pointer', fontWeight: '600', fontSize: '0.95rem'
          }}
        >
          ← Voltar
        </button>
      </div>

      <div className="local-page-wrapper">
        <nav className="local-nav">
          {abas.map(a => (
            <button key={a} onClick={() => setAba(a)} className={aba === a ? 'active' : ''}>
              {a === 'sobre' ? 'Sobre' : a === 'visite' ? 'Visite' : a === 'fotos' ? 'Fotos' : `Avaliações (${totalAvaliacoes})`}
            </button>
          ))}
        </nav>

        <main className="local-main-content">
          {aba === 'sobre' && <AbaSobre local={local} imagemSobre={imagemSobre} />}
          {aba === 'visite' && <AbaVisite local={local} imagensVisite={imagensVisite} />}
          {aba === 'fotos' && <AbaGaleria images={imagensGaleria.length > 0 ? imagensGaleria : imagens} />}
          {aba === 'avaliacoes' && (
            <section className="local-section">
              {/* — Média — */}
              <div className="ld-rating-summary">
                <span className="ld-rating-number">{media.toFixed(1)}</span>
                <div>
                  <Estrelas valor={media} tamanho="1.6rem" />
                  <span className="ld-rating-total">{totalAvaliacoes} avaliações</span>
                </div>
              </div>

              {/* — Avaliar — */}
              <div className="ld-avaliar-box">
                <p>{isLoggedIn ? 'Sua avaliação:' : 'Faça login para avaliar'}</p>
                {isLoggedIn && <Estrelas valor={minhaAvaliacao} interativo tamanho="2rem" />}
              </div>

              {/* — Comentários — */}
              <div className="ld-comentarios">
                <h2>Comentários</h2>

                {isLoggedIn && (
                  <div className="ld-comentario-form">
                    <textarea
                      value={novoComentario}
                      onChange={e => setNovoComentario(e.target.value)}
                      placeholder="Escreva seu comentário..."
                      rows={3}
                    />
                    <button onClick={handleComentar} disabled={enviandoComentario || !novoComentario.trim()}>
                      {enviandoComentario ? 'Enviando...' : 'Enviar'}
                    </button>
                  </div>
                )}

                {comentarios.length === 0 ? (
                  <p className="ld-sem-comentarios">Nenhum comentário ainda. Seja o primeiro!</p>
                ) : (
                  comentarios.map(c => (
                    <div key={c.id} className="ld-comentario-item">
                      <div className="ld-comentario-header">
                        <span className="ld-comentario-autor">{c.usuario?.nome || c.nomeUsuario || 'Usuário'}</span>
                        <span className="ld-comentario-data">{new Date(c.dataComentario || c.data).toLocaleDateString('pt-BR')}</span>
                        {String(c.usuario?.id) === String(usuarioId) && (
                          <button className="ld-comentario-excluir" onClick={() => handleExcluirComentario(c.id)}>Excluir</button>
                        )}
                      </div>
                      <p className="ld-comentario-texto">{c.texto}</p>
                    </div>
                  ))
                )}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default LocalDetalhe;
