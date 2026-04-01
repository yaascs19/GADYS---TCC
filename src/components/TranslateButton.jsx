import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const getTextNodes = () => {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) => {
        const tag = node.parentElement?.tagName;
        if (['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(tag)) return NodeFilter.FILTER_REJECT;
        if (node.parentElement?.closest('[data-translate-btn]')) return NodeFilter.FILTER_REJECT;
        if (node.textContent.trim() === '') return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );
  const nodes = [];
  let node;
  while ((node = walker.nextNode())) nodes.push(node);
  return nodes;
};

const buildChunksByCharLimit = (nodes, limit = 4500) => {
  const chunks = []; // [{nodes, texts}]
  let currentNodes = [];
  let currentTexts = [];
  let currentLen = 0;

  nodes.forEach(node => {
    const text = node.textContent.trim();
    const addition = text.length + 5; // 5 = ' ||| '
    if (currentLen + addition > limit && currentNodes.length > 0) {
      chunks.push({ nodes: currentNodes, texts: currentTexts });
      currentNodes = [];
      currentTexts = [];
      currentLen = 0;
    }
    // Texto individual maior que o limite: trunca para não quebrar a API
    currentNodes.push(node);
    currentTexts.push(text.slice(0, limit));
    currentLen += addition;
  });

  if (currentNodes.length > 0) chunks.push({ nodes: currentNodes, texts: currentTexts });
  return chunks;
};

const translateChunk = async (texts) => {
  const joined = texts.join(' ||| ');
  const res = await fetch(
    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(joined)}&langpair=pt|en&de=gadys@gmail.com`
  );
  const data = await res.json();
  return data.responseData.translatedText.split(' ||| ');
};

const applyTranslation = async (setIsTranslating, originalTexts) => {
  setIsTranslating(true);
  const nodes = getTextNodes();
  originalTexts.current.clear();
  nodes.forEach(node => originalTexts.current.set(node, node.textContent));

  const chunks = buildChunksByCharLimit(nodes);

  for (const chunk of chunks) {
    try {
      const translated = await translateChunk(chunk.texts);
      chunk.nodes.forEach((node, j) => {
        if (translated[j]) node.textContent = translated[j];
      });
    } catch (e) {
      console.error('Erro ao traduzir chunk:', e);
    }
  }
  setIsTranslating(false);
};

const TranslateButton = () => {
  const { isEnglish, setLanguage } = useLanguage();
  const [isTranslating, setIsTranslating] = useState(false);
  const originalTexts = useRef(new Map());
  const location = useLocation();

  // Ao navegar para nova página, aplica tradução automaticamente se estiver em inglês
  useEffect(() => {
    if (isEnglish) {
      // Aguarda o DOM da nova página renderizar completamente
      const timer = setTimeout(() => {
        applyTranslation(setIsTranslating, originalTexts);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  const handleTranslate = async () => {
    if (isTranslating) return;

    if (!isEnglish) {
      setLanguage('en');
      await applyTranslation(setIsTranslating, originalTexts);
    } else {
      originalTexts.current.forEach((original, node) => {
        node.textContent = original;
      });
      originalTexts.current.clear();
      setLanguage('pt');
    }
  };

  return (
    <button
      data-translate-btn="true"
      onClick={handleTranslate}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999,
        background: isEnglish
          ? 'linear-gradient(45deg, #1a237e, #283593)'
          : 'linear-gradient(45deg, #1565C0, #1E88E5)',
        color: 'white',
        border: 'none',
        borderRadius: '50px',
        padding: '0.75rem 1.4rem',
        fontSize: '0.9rem',
        fontWeight: '700',
        cursor: isTranslating ? 'wait' : 'pointer',
        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
        transition: 'transform 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontFamily: 'sans-serif',
        opacity: isTranslating ? 0.8 : 1,
      }}
      onMouseOver={(e) => { if (!isTranslating) e.currentTarget.style.transform = 'scale(1.07)'; }}
      onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
    >
      {isTranslating ? '⏳ Traduzindo...' : isEnglish ? '🇧🇷 Português' : '🇺🇸 English'}
    </button>
  );
};

export default TranslateButton;
