import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SobrePage.css'; // Usará a mesma folha de estilos, que será reescrita

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
    // A classe principal será alterada para um novo padrão, mais limpo.
    <div className={`sobre-page-clean ${darkMode ? 'dark' : ''}`}>
      
      <header className="sobre-header-clean">
        <div className="container">
          <h1 className="main-title">Sobre o GADYS</h1>
          <p className="subtitle">
            Conectando você aos lugares mais incríveis do Brasil. Nossa missão é fomentar um turismo mais consciente, curioso e conectado.
          </p>
        </div>
      </header>

      <main className="container">
        <section className="sobre-section-clean">
          <h2 className="section-title-clean">O Projeto</h2>
          <div className="text-content">
            <p>O GADYS (Guia de Atrativos e Destinos Turísticos) nasceu de uma paixão compartilhada pelo Brasil. Somos mais do que um simples guia; somos uma plataforma dedicada a desvendar a alma do país, revelando as histórias que cada destino tem para contar. Da vastidão da Amazônia às praias paradisíacas do Nordeste, nosso objetivo é ser a ponte entre o viajante e a experiência autêntica.</p>
            <p>Nós acreditamos que viajar é uma forma de aprendizado e transformação. Por isso, valorizamos o turismo sustentável, que respeita a cultura local e o meio ambiente. Cada local em nossa plataforma é cuidadosamente selecionado, garantindo que sua jornada seja rica, segura e inesquecível.</p>
          </div>
        </section>

        <section className="sobre-section-clean">
          <h2 className="section-title-clean">Nossa Equipe</h2>
          <div className="team-grid-clean">
            {teamMembers.map(member => (
              <div key={member.name} className="team-member-clean">
                <img src={member.photo} alt={member.name} className="team-photo" />
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sobre-section-clean cta-section-clean">
            <h2>Pronto para sua próxima aventura?</h2>
            <Link to="/lugares" className="cta-button-clean">Explore os Destinos</Link>
        </section>

      </main>
    </div>
  );
}

export default SobrePage;
