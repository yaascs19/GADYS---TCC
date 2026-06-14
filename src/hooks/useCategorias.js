import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, '');

export function useCategorias(siglaEstado) {
  const [categorias, setCategorias] = useState(['Todos']);

  useEffect(() => {
    Promise.all([
      fetch(`${API_URL}/api/categorias/globais`).then(r => r.ok ? r.json() : []).catch(() => []),
      siglaEstado ? fetch(`${API_URL}/api/categorias/${siglaEstado}`).then(r => r.ok ? r.json() : []).catch(() => []) : Promise.resolve([])
    ]).then(([globais, locais]) => {
      const nomes = [...new Set([...globais, ...locais].map(c => c.nome))]
      setCategorias(['Todos', ...nomes])
    })
  }, [siglaEstado]);

  return categorias;
}
