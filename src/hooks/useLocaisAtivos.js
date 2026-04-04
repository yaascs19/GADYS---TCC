import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, '');

export function useLocaisAtivos(estado, pontosTuristicos) {
  const [pontosAtivos, setPontosAtivos] = useState(pontosTuristicos);

  useEffect(() => {
    fetch(`${API_URL}/api/locais/estado/${encodeURIComponent(estado)}`)
      .then(r => r.json())
      .then(locaisBD => {
        const inativosBD = new Set(
          locaisBD
            .filter(l => l.status !== 'ATIVO')
            .map(l => l.nome.toLowerCase().trim())
        );
        setPontosAtivos(pontosTuristicos.filter(p => {
          const nomePonto = (p.nome || p.name || '').toLowerCase().trim();
          return !inativosBD.has(nomePonto);
        }));
      })
      .catch(() => setPontosAtivos(pontosTuristicos));
  }, [estado]);

  return pontosAtivos;
}
