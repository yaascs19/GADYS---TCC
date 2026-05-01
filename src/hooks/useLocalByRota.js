import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, '');

/**
 * Busca um local do BD pela rota_frontend.
 * Retorna { bdLocal, bdId } onde bdLocal sobrepõe campos do config estático.
 * Fallback silencioso se o endpoint não existir.
 */
export function useLocalByRota(rota) {
  const [bdLocal, setBdLocal] = useState(null);
  const [bdId, setBdId] = useState(null);
  const carregado = useState(false);

  useEffect(() => {
    if (!API_URL || !rota || carregado[0]) return;
    fetch(`${API_URL}/api/locais/rota?rota=${encodeURIComponent(rota)}`)
      .then(r => {
        if (!r.ok) return null;
        return r.json();
      })
      .then(data => {
        if (data && data.id) {
          setBdLocal(data);
          setBdId(data.id);
          carregado[1](true);
        }
      })
      .catch(() => {});
  }, [rota]);

  return { bdLocal, bdId };
}
