import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, '');

const FIXAS = ['Monumentos', 'Lugar Paradísíaco', 'Restaurantes', 'Costume Cultural'];

export function useCategorias(siglaEstado) {
  const [categorias, setCategorias] = useState(FIXAS);

  useEffect(() => {
    Promise.all([
      fetch(`${API_URL}/api/categorias`).then(r => r.ok ? r.json() : []).catch(() => [])
    ]).then(([todas]) => {
      let filtradas = todas;
      if (siglaEstado) {
        filtradas = todas.filter(c => c.global || (c.estados && c.estados.includes(siglaEstado)));
      }
      const nomes = [...new Set(filtradas.map(c => c.nome))];
      const extras = nomes.filter(n => !FIXAS.includes(n));
      setCategorias([...FIXAS, ...extras]);
    });
  }, [siglaEstado]);

  return categorias;
}

export function useTodasCategorias() {
  const [categorias, setCategorias] = useState(FIXAS);

  useEffect(() => {
    fetch(`${API_URL}/api/categorias`).then(r => r.ok ? r.json() : []).catch(() => [])
      .then(todas => {
        const nomes = [...new Set(todas.map(c => c.nome))];
        const extras = nomes.filter(n => !FIXAS.includes(n));
        setCategorias([...FIXAS, ...extras]);
      });
  }, []);

  return categorias;
}
