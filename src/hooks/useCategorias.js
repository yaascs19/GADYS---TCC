import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, '');

const BASE_CATEGORIES = ['Todos', 'Lugar Paradísíaco', 'Restaurantes', 'Costume Cultural', 'Monumentos'];

export function useCategorias(siglaEstado) {
  const [categorias, setCategorias] = useState(BASE_CATEGORIES);

  useEffect(() => {
    if (!siglaEstado) return;
    fetch(`${API_URL}/api/categorias/${siglaEstado}`)
      .then(r => r.ok ? r.json() : [])
      .then(data => {
        const extras = data.map(c => c.nome).filter(n => !BASE_CATEGORIES.includes(n));
        if (extras.length > 0) setCategorias([...BASE_CATEGORIES, ...extras]);
      })
      .catch(() => {});
  }, [siglaEstado]);

  return categorias;
}
