import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, '');

const FIXAS = ['Monumentos', 'Lugar Paradísíaco', 'Restaurantes', 'Costume Cultural'];

export function useCategorias(siglaEstado) {
  const [categorias, setCategorias] = useState(FIXAS);

  useEffect(() => {
    Promise.all([
      fetch(`${API_URL}/api/categorias/globais`).then(r => r.ok ? r.json() : []).catch(() => []),
      siglaEstado ? fetch(`${API_URL}/api/categorias/estado/${siglaEstado}`).then(r => r.ok ? r.json() : []).catch(() => []) : Promise.resolve([])
    ]).then(([globais, locais]) => {
      const extras = [...new Set([...globais, ...locais].map(c => c.nome))].filter(n => !FIXAS.includes(n));
      setCategorias([...FIXAS, ...extras]);
    });
  }, [siglaEstado]);

  return categorias;
}
