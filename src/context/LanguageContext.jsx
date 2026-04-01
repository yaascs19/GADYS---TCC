import { createContext, useContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState(
    () => localStorage.getItem('gadys_lang') === 'en'
  );

  const setLanguage = (lang) => {
    localStorage.setItem('gadys_lang', lang);
    setIsEnglish(lang === 'en');
  };

  return (
    <LanguageContext.Provider value={{ isEnglish, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
