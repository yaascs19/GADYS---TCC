import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LugaresPage.css'; // Importa a nova estilização

function LugaresPage() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  // O botão de tema foi movido para um local mais apropriado, como o menu principal.
  // A lógica é mantida aqui caso seja necessário no futuro.
  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  const lugares = [
    {
      nome: 'Cristo Redentor',
      cidade: 'Rio de Janeiro - RJ',
      descricao: 'Uma das Sete Maravilhas do Mundo Moderno.',
      imagem: '/cristo.jpg',
      link: '/cristo-redentor'
    },
    {
      nome: 'Pão de Açúcar',
      cidade: 'Rio de Janeiro - RJ',
      descricao: 'Cartão postal icônico da Cidade Maravilhosa.',
      imagem: '/pao.jpg',
      link: '/pao-de-acucar'
    },
    {
      nome: 'Cataratas do Iguaçu',
      cidade: 'Foz do Iguaçu - PR',
      descricao: "Uma das maiores e mais impressionantes quedas d'água do mundo.",
      imagem: '/cata.jpg',
      link: '/cataratas-iguacu'
    },
    {
      nome: 'Pelourinho',
      cidade: 'Salvador - BA',
      descricao: 'O coração histórico e cultural de Salvador, cheio de cor e vida.',
      imagem: '/pelo.jpg',
      link: '/pelourinho'
    },
    {
      nome: 'Fernando de Noronha',
      cidade: 'Pernambuco - PE',
      descricao: 'Um arquipélago paradisíaco e santuário ecológico brasileiro.',
      imagem: '/fer.jpg',
      link: '/fernando-noronha'
    },
    {
      nome: 'Pantanal',
      cidade: 'Mato Grosso - MT',
      descricao: 'A maior planície inundável do planeta, um paraíso da vida selvagem.',
      imagem: '/pan.jpg',
      link: '/pantanal'
    }
  ];

  return (
    <div className={`lugares-page-container ${darkMode ? 'dark' : ''}`}>
      <header className="lugares-header-styled">
        <h1>Lugares Para Conhecer</h1>
        <p>Uma seleção dos destinos mais fascinantes e visitados do Brasil.</p>
      </header>

      <main className="lugares-grid-styled">
        {lugares.map((lugar, index) => (
          <div key={index} className="lugar-card-styled">
            <div className="lugar-card-image-container">
              <img src={lugar.imagem} alt={lugar.nome} className="lugar-card-image" />
            </div>
            <div className="lugar-card-content">
              <h2 className="lugar-card-title">{lugar.nome}</h2>
              <p className="lugar-card-city">{lugar.cidade}</p>
              <p className="lugar-card-description">{lugar.descricao}</p>
              <Link to={lugar.link} className="lugar-card-link">Visitar</Link>
            </div>
          </div>
        ))}
      </main>

      <footer className="lugares-footer-styled">
        <p>&copy; 2025 GADYS. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default LugaresPage;
