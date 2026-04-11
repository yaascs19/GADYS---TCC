import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './SobrePage.css'; // Usará uma nova folha de estilos (v4)

function SobrePage() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const teamMembers = [
    { name: 'Ana Silva', role: 'CEO & Fundadora', photo: '/images/team/member1.jpg' },
    { name: 'Carlos Santos', role: 'CTO', photo: '/images/team/member2.jpg' },
    { name: 'Mariana Oliveira', role: 'Designer Chefe UX/UI', photo: '/images/team/member3.jpg' },
    { name: 'João Costa', role: 'Engenheiro Front-End', photo: '/images/team/member4.jpg' },
    { name: 'Lúcia Ferreira', role: 'Marketing', photo: '/images/team/member5.jpg' },
    { name: 'Pedro Almeida', role: 'Conteudista', photo: '/images/team/member6.jpg' }
  ];

  return (
    <div className={`sobre-page-modern ${darkMode ? 'dark' : ''}`}>
      <div className="modern-container">
        <header ref={el => sectionsRef.current[0] = el} className="modern-hero fade-in-section">
          <span className="hero-subheading">Nossa História</span>
          <h1>Mais que um guia, uma janela para a alma do Brasil.</h1>
        </header>

        <main>
          <section ref={el => sectionsRef.current[1] = el} className="modern-section fade-in-section">
            <div className="modern-content-block text-first">
              <div className="modern-text">
                <h2>O Ponto de Partida</h2>
                <p>O GADYS nasceu de uma inquietação: como podemos ir além do turismo superficial? Impulsionados pela paixão por descobrir e pela vontade de compartilhar, criamos uma plataforma que não apenas aponta destinos, mas conta as histórias, celebra as culturas e revela a verdadeira essência de cada lugar.</p>
              </div>
              <div className="modern-image">
                <img src="/images/geral/sobre-modern-1.jpg" alt="Mapa antigo sobre uma mesa de madeira" />
              </div>
            </div>
          </section>

          <section ref={el => sectionsRef.current[2] = el} className="modern-section fade-in-section">
            <div className="modern-content-block image-first">
              <div className="modern-text">
                <h2>Nossa Filosofia</h2>
                <p>Acreditamos no poder do turismo consciente. Para nós, viajar é uma oportunidade de crescimento, conexão e respeito. Por isso, nosso foco está em promover experiências autênticas que beneficiem tanto os viajantes quanto as comunidades locais, incentivando a sustentabilidade e a preservação do nosso imenso patrimônio.</p>
              </div>
              <div className="modern-image">
                <img src="/images/geral/sobre-modern-2.jpg" alt="Pessoas caminhando em uma trilha na natureza" />
              </div>
            </div>
          </section>

          <section ref={el => sectionsRef.current[3] = el} className="modern-team-section fade-in-section">
            <h2>Nossa Equipe</h2>
            <p className="team-subtitle">Os rostos por trás da jornada.</p>
            <div className="modern-team-grid">
              {teamMembers.map(member => (
                <div key={member.name} className="modern-team-member">
                  <img src={member.photo} alt={member.name} />
                  <h3>{member.name}</h3>
                  <span>{member.role}</span>
                </div>
              ))}
            </div>
          </section>

          <section ref={el => sectionsRef.current[4] = el} className="modern-cta-section fade-in-section">
            <h2>Sua jornada começa agora.</h2>
            <Link to="/lugares" className="modern-cta-button">Explorar Destinos</Link>
          </section>
        </main>
      </div>
    </div>
  );
}

export default SobrePage;
