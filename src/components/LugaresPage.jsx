import { Link, useNavigate } from 'react-router-dom';
import './LugaresPage.css';

const lugares = [
  { id: 'cristo-redentor', nome: 'Cristo Redentor', cidade: 'Rio de Janeiro - RJ', categoria: 'Monumento', descricao: 'Uma das Sete Maravilhas do Mundo Moderno, símbolo do Brasil e ponto mais visitado do país.', imagem: '/cristo.jpg' },
  { id: 'pao-de-acucar', nome: 'Pão de Açúcar', cidade: 'Rio de Janeiro - RJ', categoria: 'Lugar Paradisíaco', descricao: 'Complexo de morros com vista panorâmica deslumbrante acessado por teleférico histórico.', imagem: '/pao.jpg' },
  { id: 'cataratas-iguacu', nome: 'Cataratas do Iguaçu', cidade: 'Foz do Iguaçu - PR', categoria: 'Natureza', descricao: 'Considerada uma das maiores quedas d\'água do mundo, Patrimônio Natural da Humanidade pela UNESCO.', imagem: '/cata.jpg' },
  { id: 'pelourinho', nome: 'Pelourinho', cidade: 'Salvador - BA', categoria: 'Cultura', descricao: 'Centro histórico de Salvador com arquitetura colonial colorida, berço da cultura afro-brasileira.', imagem: '/pelo.jpg' },
  { id: 'fernando-noronha', nome: 'Fernando de Noronha', cidade: 'Pernambuco - PE', categoria: 'Lugar Paradisíaco', descricao: 'Arquipélago paradisíaco com praias eleitas as mais belas do mundo e rica vida marinha.', imagem: '/fer.jpg' },
  { id: 'pantanal', nome: 'Pantanal', cidade: 'Mato Grosso - MT', categoria: 'Natureza', descricao: 'Maior planície inundável do planeta e santuário de biodiversidade reconhecido mundialmente.', imagem: '/pan.jpg' },
];

function LugaresPage() {
  const navigate = useNavigate();

  return (
    <div className="lp-page">

      <header className="lp-header">
        <Link to="/" className="lp-back-btn">← Voltar</Link>
        <h1>Destinos em Destaque</h1>
        <p>Os lugares mais visitados e admirados do Brasil pelos usuários do GADYS.</p>
      </header>

      <div className="lp-ranking-banner">
        <span>🏆</span>
        <p>Ranking atualizado com base nas visitas e avaliações dos usuários</p>
      </div>

      <main className="lp-grid">
        {lugares.map((lugar, i) => (
          <div key={lugar.id} className="lp-card" style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="lp-card-image-container">
              <span className="lp-rank-badge">#{i + 1}</span>
              <img src={lugar.imagem} alt={lugar.nome} className="lp-card-image" />
            </div>
            <div className="lp-card-content">
              <h2 className="lp-card-title">{lugar.nome}</h2>
              <p className="lp-card-category">{lugar.categoria} • {lugar.cidade}</p>
              <p className="lp-card-description">{lugar.descricao}</p>
              <button className="lp-btn" onClick={() => navigate(`/${lugar.id}`)}>Saiba mais</button>
            </div>
          </div>
        ))}
      </main>

      <footer className="lp-footer">
        <p>&copy; 2025 GADYS. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}

export default LugaresPage;
