import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './LocalDetalhe.css';
import AvaliacoesComentarios from './AvaliacoesComentarios';

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

// --- Renderizador de seção rica (igual ao EncontroAguas) ---
const SecaoRica = ({ secao }) => (
  <section className="local-section">
    <div className="local-text-image-split">
      <div className="local-text">
        <h2>{secao.titulo}</h2>
        {secao.texto && <p>{secao.texto}</p>}
        {secao.lista && (
          <ul style={{ paddingLeft: '1.2rem', lineHeight: 1.8 }}>
            {secao.lista.map((item, i) => (
              <li key={i}><strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>
            ))}
          </ul>
        )}
        {secao.subsecoes && secao.subsecoes.map((sub, i) => (
          <div key={i} style={{ marginTop: '1.5rem', background: 'rgba(56,189,248,0.06)', border: '1px solid rgba(56,189,248,0.2)', borderRadius: '8px', padding: '1.25rem' }}>
            <h3 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '0.5rem' }}>{sub.titulo}</h3>
            <p style={{ fontWeight: 300, lineHeight: 1.7, margin: 0 }}>{sub.texto}</p>
          </div>
        ))}
      </div>
      <div className="local-image-wrapper">
        {secao.imagem && <img src={secao.imagem} alt={secao.titulo} className="local-image" />}
      </div>
    </div>
    {secao.recomendacoes && secao.recomendacoes.length > 0 && (
      <div style={{ marginTop: '2.5rem', borderTop: '1px solid #2d2d4e', paddingTop: '2.5rem' }}>
        {secao.recomendacoes.map((rec, i) => (
          <div key={i} style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid #2d2d4e' }}>{rec.titulo}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1rem' }}>
              {rec.itens.map((item, j) => (
                <div key={j} style={{ background: '#2d2d4e', borderRadius: '8px', padding: '1.25rem', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <a href={item.site} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, color: '#fff', textDecoration: 'none' }}>{item.nome}</a>
                    <span style={{ color: '#FFD700', fontWeight: 700 }}>{item.nota} ★</span>
                  </div>
                  <span style={{ fontFamily: 'monospace', background: '#1a1a2e', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.82rem', color: '#E0E1DD', display: 'block' }}>{item.contato}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )}
  </section>
);

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
          {local.endereco && <div className="local-info-card"><h3>📍 Endereço</h3><p>{local.endereco}</p></div>}
          {local.horarioFuncionamento && <div className="local-info-card"><h3>🕐 Horário de Funcionamento</h3><p>{local.horarioFuncionamento}</p></div>}
          {local.preco && <div className="local-info-card"><h3>💰 Preço</h3><p>{local.preco}</p></div>}
          {local.coordenadas && <div className="local-info-card"><h3>🗺️ Coordenadas</h3><p>{local.coordenadas}</p></div>}
        </div>
      </div>
      <div className="local-image-wrapper">
        {imagensVisite.map((img, i) => <img key={i} src={img} alt={`Visite ${i + 1}`} className="local-image" />)}
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
  const [toast, setToast] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/locais/${id}`)
      .then(r => r.json())
      .then(data => { setLocal(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="local-loading">Carregando...</div>;
  if (!local) return <div className="local-loading">Local não encontrado.</div>;

  const imagens = local.imagemUrl ? local.imagemUrl.split(',').map(u => u.trim()).filter(Boolean) : [];

  // detectar JSON rico
  let dadosRicos = null;
  try {
    const parsed = JSON.parse(local.informacoesAdicionais);
    if (parsed?.secoes) dadosRicos = parsed;
  } catch { /* local simples */ }

  const carrossel = imagens.slice(0, 2).length > 0 ? imagens.slice(0, 2) : imagens.slice(0, 1);
  const imagemSobre = imagens[2] || imagens[0];
  const imagensVisite = imagens.slice(3, 5);

  // abas: se rico usa as seções do JSON, senão usa abas padrão
  const abasPadrao = ['sobre', 'visite', 'fotos', 'avaliacoes'];
  const abasRicas = dadosRicos ? Object.keys(dadosRicos.secoes) : null;

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
        {imagens.length > 0
          ? <HeaderCarousel images={carrossel.length > 0 ? carrossel : [imagens[0]]} nome={local.nome} cidade={local.cidade} estado={local.estado} />
          : (
            <header className="local-detalhe-header" style={{ background: 'linear-gradient(135deg,#1a237e,#4a148c)', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="local-header-text"><h1>{local.nome}</h1><p>{local.cidade}, {local.estado}</p></div>
            </header>
          )
        }
        <button onClick={() => navigate(-1)} style={{
          position: 'absolute', top: '2rem', left: '2rem', zIndex: 10,
          background: 'rgba(255,255,255,0.2)', border: '2px solid white',
          color: 'white', padding: '0.7rem 1.5rem', borderRadius: '50px',
          cursor: 'pointer', fontWeight: '600', fontSize: '0.95rem'
        }}>← Voltar</button>
      </div>

      <div className="local-page-wrapper">
        <nav className="local-nav">
          {(dadosRicos ? abasRicas : abasPadrao).map(a => {
            const label = dadosRicos
              ? (a === 'avaliacoes' ? 'Avaliações' : dadosRicos.secoes[a]?.label || a)
              : (a === 'sobre' ? 'Sobre' : a === 'visite' ? 'Visite' : a === 'fotos' ? 'Fotos' : 'Avaliações');
            return <button key={a} onClick={() => setAba(a)} className={aba === a ? 'active' : ''}>{label}</button>;
          })}
        </nav>

        <main className="local-main-content">
          {/* MODO RICO */}
          {dadosRicos && aba !== 'fotos' && aba !== 'avaliacoes' && (
            <SecaoRica secao={dadosRicos.secoes[aba]} />
          )}

          {/* MODO SIMPLES */}
          {!dadosRicos && aba === 'sobre' && <AbaSobre local={local} imagemSobre={imagemSobre} />}
          {!dadosRicos && aba === 'visite' && <AbaVisite local={local} imagensVisite={imagensVisite} />}

          {/* FOTOS */}
          {(aba === 'fotos') && <AbaGaleria images={imagens} />}

          {/* AVALIAÇÕES */}
          {aba === 'avaliacoes' && (
            <AvaliacoesComentarios localId={id} />
          )}
        </main>
      </div>
    </div>
  );
}

export default LocalDetalhe;
