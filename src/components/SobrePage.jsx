import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SobrePage.css'; // Importa o CSS exclusivo

function SobrePage() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  // Dados da equipe
  const teamMembers = [
    { name: 'Ana Silva', role: 'CEO & Fundadora', photo: '/images/team/member1.jpg' },
    { name: 'Carlos Santos', role: 'CTO & Arquiteto de Software', photo: '/images/team/member2.jpg' },
    { name: 'Mariana Oliveira', role: 'Designer Chefe UX/UI', photo: '/images/team/member3.jpg' },
    { name: 'João Costa', role: 'Engenheiro Front-End Sênior', photo: '/images/team/member4.jpg' },
    { name: 'Lúcia Ferreira', role: 'Estrategista de Marketing Digital', photo: '/images/team/member5.jpg' }
  ];

  // O componente do Header principal e o menu de navegação devem ser unificados no App.jsx
  // para evitar duplicação. Por enquanto, a página assume que eles existem.
  return (
    <div className={`sobre-page-container ${darkMode ? 'dark' : ''}`}>
      <section className="sobre-hero">
        <div className="sobre-hero-content">
          <h1>A Alma do Brasil, Mapeada.</h1>
          <p>Somos a GADYS. Nascemos da paixão por descobrir e compartilhar as histórias que cada canto do Brasil tem para contar.</p>
        </div>
      </section>

      <div className="sobre-content-wrapper">
        <section className="mission-section">
          <div className="mission-card">
            <div className="icon">🧭</div>
            <h2>Explorar</h2>
            <p>Mapeamos desde os destinos mais icônicos até as joias escondidas, oferecendo um guia curado e autêntico.</p>
          </div>
          <div className="mission-card">
            <div className="icon">🤝</div>
            <h2>Conectar</h2>
            <p>Criamos pontes entre viajantes e comunidades locais, promovendo um turismo mais rico e humano.</p>
          </div>
          <div className="mission-card">
            <div className="icon">🌱</div>
            <h2>Preservar</h2>
            <p>Incentivamos um turismo consciente e sustentável, que valoriza e protege nosso patrimônio natural e cultural.</p>
          </div>
        </section>

        <section className="team-section">
          <h2 className="section-title">Nossa Tribo</h2>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.name} className="team-member">
                <img src={member.photo} alt={member.name} className="team-member-photo" />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="values-section">
          <h2 className="section-title" style={{ color: 'white' }}>Nossos Princípios</h2>
          <ul className="values-list">
            <li><h3>Curiosidade sem fim:</h3> <p>Acreditamos que sempre há algo novo para descobrir.</p></li>
            <li><h3>Autenticidade acima de tudo:</h3> <p>Celebramos o que torna cada lugar e cada cultura única.</p></li>
            <li><h3>Paixão pelo Brasil:</h3> <p>Somos movidos pelo amor à diversidade e riqueza do nosso país.</p></li>
            <li><h3>Impacto Positivo:</h3> <p>Nosso objetivo é deixar cada lugar um pouco melhor do que o encontramos.</p></li>
          </ul>
        </section>

        <section className="cta-section">
          <h2 className="section-title">Pronto para a Aventura?</h2>
          <Link to="/lugares" className="cta-button">Comece a Explorar</Link>
        </section>
      </div>
    </div>
  );
}

export default SobrePage;
