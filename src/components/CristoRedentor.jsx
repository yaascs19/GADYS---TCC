import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CristoRedentor.css';

const CristoRedentor = () => {
  const navigate = useNavigate();

  // A rota correta para a página de listagem é /rio-de-janeiro/pontos
  // No entanto, como o App.jsx ainda não foi atualizado para refletir isso,
  // usaremos uma rota genérica por enquanto.
  const handleBackClick = () => {
    navigate(-1); // Volta para a página anterior no histórico
  };

  return (
    <div className="ponto-turistico-page">
      <header className="ponto-header" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/Cristo-rj.jpg')` }}>
        <button onClick={handleBackClick} className="back-button">← Voltar</button>
        <h1 className="ponto-title">Cristo Redentor</h1>
      </header>
      
      <main className="ponto-content">
        <div className="ponto-main-info">
          <p className="ponto-description">
            O Cristo Redentor é uma estátua art déco que retrata Jesus Cristo, localizada no topo do morro do Corcovado, a 709 metros acima do nível do mar, no Parque Nacional da Tijuca. Inaugurado em 1931, o monumento é um símbolo do cristianismo brasileiro e se tornou um dos ícones mais conhecidos do Rio de Janeiro e do Brasil.
          </p>
        </div>

        <div className="info-cards-container">
            <div className="info-card">
                <h3>📍 Localização</h3>
                <p>Parque Nacional da Tijuca<br/>
                   Morro do Corcovado<br/>
                   Rio de Janeiro - RJ<br/>
                   Vista panorâmica da cidade</p>
            </div>
            
            <div className="info-card">
                <h3>🚆 Acesso</h3>
                <p><strong>Trem do Corcovado:</strong> A forma mais tradicional, partindo do Cosme Velho.<br/>
                   <strong>Vans Oficiais:</strong> Saídas de Copacabana, Largo do Machado e Paineiras.<br/>
                   <strong>Trilha:</strong> Para os mais aventureiros, uma caminhada íngreme pelo Parque Lage.</p>
            </div>
            
            <div className="info-card">
                <h3>🎫 Informações</h3>
                <p><strong>Horário:</strong> 8h às 19h (último embarque).<br/>
                   <strong>Ingresso (Trem):</strong> A partir de R$ 93,50 (varia com a temporada).<br/>
                   <strong>Dica:</strong> Compre online com antecedência para evitar filas e garanta seu lugar.</p>
            </div>
        </div>
      </main>

      <footer className="ponto-footer">
        <p>&copy; 2025 GADYS. Uma experiência nas alturas.</p>
      </footer>
    </div>
  );
};

export default CristoRedentor;
