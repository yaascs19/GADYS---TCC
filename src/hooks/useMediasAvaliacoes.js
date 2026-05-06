import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, '');

const rotaMap = {
  1: '/encontro-aguas',
  2: '/teatro-amazonas',
  3: '/amazonico-peixaria',
  4: '/arquipelago-anavilhanas',
  5: '/bumbodromo',
  6: '/cachoeira-santuario',
  7: '/coreto-peixaria',
  8: '/ponte-rio-negro',
};

export function useMediasAvaliacoes() {
  const [medias, setMedias] = useState({});

  useEffect(() => {
    if (!API_URL) return;

    const rotas = Object.values(rotaMap);

    Promise.all(
      rotas.map(rota =>
        fetch(`${API_URL}/api/locais/rota?rota=${encodeURIComponent(rota)}`)
          .then(r => r.ok ? r.json() : null)
          .then(local => {
            if (!local?.id) return null;
            return fetch(`${API_URL}/api/avaliacoes/local/${local.id}/media`)
              .then(r => r.ok ? r.json() : null)
              .then(media => ({ rota, media: media || 0 }));
          })
          .catch(() => null)
      )
    ).then(results => {
      const map = {};
      results.forEach(r => { if (r) map[r.rota] = r.media; });
      setMedias(map);
    });
  }, []);

  return medias;
}
