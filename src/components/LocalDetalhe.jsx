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

  useEffect(() => {
    fetch(`${API_URL}/api/locais/${id}`)
      .then(r => r.json())
      .then(data => { setLocal(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="local-loading">Carregando...</div>;
  if (!local) return <div className="local-loading">Local não encontrado.</div>;

  const imagens = local.imagemUrl ? local.imagemUrl.split(',').map(u => u.trim()).filter(Boolean) : [];
  const carrossel = imagens.slice(0, 2);
  const imagemSobre = imagens[2] || imagens[0];
  const imagensVisite = imagens.slice(3, 5);
  const imagensGaleria = imagens;

  const abas = ['sobre', 'visite', 'fotos'];

  return (
    <div className="local-detalhe-container">
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
              {a === 'sobre' ? 'Sobre' : a === 'visite' ? 'Visite' : 'Fotos'}
            </button>
          ))}
        </nav>

        <main className="local-main-content">
          {aba === 'sobre' && <AbaSobre local={local} imagemSobre={imagemSobre} />}
          {aba === 'visite' && <AbaVisite local={local} imagensVisite={imagensVisite} />}
          {aba === 'fotos' && <AbaGaleria images={imagensGaleria.length > 0 ? imagensGaleria : imagens} />}
        </main>
      </div>
    </div>
  );
}

export default LocalDetalhe;
