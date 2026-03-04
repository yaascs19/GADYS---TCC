
import React, { useEffect } from 'react';

const ParaPitu = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/styles/pitu-inspired-design.css';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="pitu-body">
      {/* Section 1: Cultura */}
      <section className="pitu-section">
        <div className="pitu-background" style={{ backgroundImage: "url('/images/geral/ceramica - pará.jpg')" }}></div>
        <div className="pitu-overlay"></div>
        <div className="pitu-content">
          <h1 className="pitu-h1">Herança que Pulsa</h1>
          <p className="pitu-p">A cultura paraense é uma força que pulsa nas veias da Amazônia. É a fé no Círio de Nazaré, o ritmo do Carimbó que celebra a vida, e a herança ancestral da cerâmica Marajoara, com seus desenhos milenares. Aqui, a tradição não é uma memória; é o ar que se respira.</p>
        </div>
        <img src="/images/geral/tacaca.jpg" alt="Floating tacaca" className="pitu-floating-element top-left" />
      </section>

      {/* Section 2: Sabores */}
      <section className="pitu-section">
        <div className="pitu-background" style={{ backgroundImage: "url('/images/geral/tacaca.jpg')" }}></div>
        <div className="pitu-overlay"></div>
        <div className="pitu-content">
          <h1 className="pitu-h1">O Sabor da Floresta</h1>
          <p className="pitu-p">A culinária do Pará é uma expedição sensorial. Do Mercado Ver-o-Peso ao tremor do jambu no tacacá, da potência do açaí à complexidade do Pato no Tucupi, cada garfada é uma descoberta que alimenta corpo e alma.</p>
        </div>
        <img src="/images/natureza/alter-do-chao.jpg" alt="Floating beach" className="pitu-floating-element bottom-right" />
      </section>

      {/* Section 3: Natureza */}
      <section className="pitu-section">
        <div className="pitu-background" style={{ backgroundImage: "url('/images/natureza/alter-do-chao.jpg')" }}></div>
        <div className="pitu-overlay"></div>
        <div className="pitu-content">
          <h1 className="pitu-h1">Santuário Monumental</h1>
          <p className="pitu-p">No Pará, a natureza é a protagonista. Da imensidão da Ilha de Marajó, com seus búfalos, às praias de Alter do Chão, os rios serpenteiam por uma floresta que respira e abriga uma biodiversidade estonteante.</p>
        </div>
      </section>
    </div>
  );
};

export default ParaPitu;
