import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LugaresPage.css'; // Importa a nova estilização

function LugaresPage() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  // Dados dos lugares
  const lugares = [
    {
      id: 'cristo-redentor',
      nome: 'Cristo Redentor',
      cidade: 'Rio de Janeiro - RJ',
      descricao: 'Uma das Sete Maravilhas do Mundo Moderno, com uma vista panorâmica inesquecível da cidade.',
      imagem: '/cristo.jpg'
    },
    {
      id: 'pao-de-acucar',
      nome: 'Pão de Açúcar',
      cidade: 'Rio de Janeiro - RJ',
      descricao: 'Um icônico complexo de morros que oferece vistas deslumbrantes através de um passeio de teleférico.',
      imagem: '/pao.jpg'
    },
    {
      id: 'cataratas-iguacu',
      nome: 'Cataratas do Iguaçu',
      cidade: 'Foz do Iguaçu - PR',
      descricao: 'Um complexo impressionante com centenas de quedas d\'água, considerado uma das maiores do mundo.',
      imagem: '/cata.jpg'
    },
    {
      id: 'pelourinho',
      nome: 'Pelourinho',
      cidade: 'Salvador - BA',
      descricao: 'O vibrante centro histórico de Salvador, repleto de arquitetura colonial colorida, cultura e música.',
      imagem: '/pelo.jpg'
    },
    {
      id: 'fernando-noronha',
      nome: 'Fernando de Noronha',
      cidade: 'Pernambuco - PE',
      descricao: 'Um paraíso ecológico com praias de areia branca, águas cristalinas e vida marinha abundante.',
      imagem: '/fer.jpg'
    },
    {
      id: 'pantanal',
      nome: 'Pantanal',
      cidade: 'Mato Grosso - MT',
      descricao: 'A maior planície inundável do planeta, um santuário de vida selvagem com biodiversidade incomparável.',
      imagem: '/pan.jpg'
    }
  ];

  return (
    <div className={`lugares-visual-container ${darkMode ? 'dark' : ''}`}>

      <header className="lugares-header-visual">
        <img src="/images/geral/mapa-br.jpg" alt="Mapa do Brasil" className="header-bg-image" />
        <Link to="/" className="back-button-visual">← Voltar</Link>
        <div className="header-content">
          <h1>Explore o Brasil</h1>
          <p>Descubra alguns dos destinos mais incríveis que nosso país tem a oferecer.</p>
        </div>
      </header>

      <main className="page-content-wrapper">
        <div className="lugares-grid-visual">
          {lugares.map((lugar) => (
            <div key={lugar.id} className="lugar-card-visual">
              <div className="card-image-container">
                <img src={lugar.imagem} alt={lugar.nome} />
              </div>
              <div className="card-content-visual">
                <h3>{lugar.nome}</h3>
                <p className="city">{lugar.cidade}</p>
                <p className="description">{lugar.descricao}</p>
                <Link to={`/${lugar.id}`} className="card-link-visual">
                  Saber Mais
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* O botão de tema pode ser integrado ao header principal do App, se houver um, ou mantido aqui */}
      <button
        onClick={toggleTheme}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          background: darkMode ? '#f0f2f5' : '#2c2c2c',
          color: darkMode ? '#2c2c2c' : '#f0f2f5',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

    </div>
  );
}

export default LugaresPage;
