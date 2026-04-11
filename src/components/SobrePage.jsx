import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SobrePage.css'; // Carrega a nova folha de estilos v2

function SobrePage() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  const teamMembers = [
    { name: 'Ana Silva', role: 'CEO & Fundadora', photo: '/images/team/member1.jpg' },
    { name: 'Carlos Santos', role: 'CTO', photo: '/images/team/member2.jpg' },
    { name: 'Mariana Oliveira', role: 'Designer Chefe UX/UI', photo: '/images/team/member3.jpg' },
    { name: 'João Costa', role: 'Engenheiro Front-End', photo: '/images/team/member4.jpg' },
    { name: 'Lúcia Ferreira', role: 'Marketing', photo: '/images/team/member5.jpg' },
    { name: 'Pedro Almeida', role: 'Conteudista', photo: '/images/team/member6.jpg' }
  ];

  return (
    <div className={`sobre-page-v2 ${darkMode ? 'dark' : ''}`}>
      {/* --- Seção Hero com Layout Dividido --- */}
      <header className="sobre-hero-split">
        <div className="hero-split-content">
          <h1>Desvendando o Brasil, uma história de cada vez.</h1>
          <p className="subtitle">
            A GADYS é mais que um guia. É um convite para mergulhar na alma do Brasil, conectando pessoas a lugares e culturas de forma autêntica e significativa.
          </p>
        </div>
        <div className="hero-split-image"></div>
      </header>

      <main>
        {/* --- Nossa Missão --- */}
        <section id="mission" className="sobre-section">
          <h2 className="section-title-v2">Nossa Missão</h2>
          <p className="section-subtitle-v2">
            Fomentar um turismo mais consciente, curioso e conectado.
          </p>
          <div className="mission-grid-v2">
            <div className="mission-card-v2">
              <div className="icon">🧭</div>
              <h3>Explorar com Profundidade</h3>
              <p>Vamos além do óbvio, revelando a riqueza que se esconde em cada destino e incentivando a descoberta genuína.</p>
            </div>
            <div className="mission-card-v2">
              <div className="icon">🤝</div>
              <h3>Conectar Culturas</h3>
              <p>Criamos pontes entre viajantes e comunidades, valorizando o conhecimento local e as trocas verdadeiras.</p>
            </div>
            <div className="mission-card-v2">
              <div className="icon">🌱</div>
              <h3>Inspirar a Preservação</h3>
              <p>Acreditamos que conhecer é o primeiro passo para proteger. Promovemos o respeito e o cuidado com nosso patrimônio.</p>
            </div>
          </div>
        </section>

        {/* --- Nossa Equipe --- */}
        <section id="team" className="sobre-section">
          <h2 className="section-title-v2">Nossa Tribo</h2>
          <p className="section-subtitle-v2">
            Somos um grupo diverso de viajantes, criativos e tecnólogos apaixonados pelo Brasil.
          </p>
          <div className="team-grid-v2">
            {teamMembers.map(member => (
              <div key={member.name} className="team-member-v2">
                <img src={member.photo} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Seção de CTA Final --- */}
        <section className="cta-section-v2">
          <h2>Junte-se a nós nesta jornada.</h2>
          <p>O seu próximo destino inesquecível está a um clique de distância.</p>
          <Link to="/lugares" className="cta-button-v2">Começar a Explorar</Link>
        </section>
      </main>
    </div>
  );
}

export default SobrePage;
