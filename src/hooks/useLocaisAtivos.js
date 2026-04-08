import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, '');

export function useLocaisAtivos(siglaEstado, pontosTuristicos) {
  const [pontosAtivos, setPontosAtivos] = useState(pontosTuristicos);

  useEffect(() => {
    fetch(`${API_URL}/api/locais/estado/${encodeURIComponent(siglaEstado)}`)
      .then(r => r.json())
      .then(locaisBD => {
        const ativos = locaisBD.filter(l => l.status === 'ATIVO');
        const inativosBD = new Set(
          locaisBD.filter(l => l.status !== 'ATIVO').map(l => l.nome.toLowerCase().trim())
        );
        const estaticosAtivos = pontosTuristicos.filter(p => {
          const nomePonto = (p.nome || p.name || '').toLowerCase().trim();
          return !inativosBD.has(nomePonto);
        });
        const nomesEstaticos = new Set(estaticosAtivos.map(p => (p.nome || p.name || '').toLowerCase().trim()));
        const novosDoBD = ativos
          .filter(l => !nomesEstaticos.has(l.nome.toLowerCase().trim()))
          .map(l => ({
            id: `bd-${l.id}`,
            bdId: l.id,
            nome: l.nome,
            cidade: l.cidade,
            categoria: l.subcategoria,
            descricao: l.descricao,
            imagem: l.imagemUrl ? l.imagemUrl.split(',')[0] : '',
          }));
        setPontosAtivos([...estaticosAtivos, ...novosDoBD]);
      })
      .catch(() => setPontosAtivos(pontosTuristicos));
  }, [siglaEstado]);

  return pontosAtivos;
}
