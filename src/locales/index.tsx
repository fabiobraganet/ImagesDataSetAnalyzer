import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enUS from './enUS.json';
import ptBR from './ptBR.json';

const languageDetector = new LanguageDetector();

languageDetector.init({
  caches: ['localStorage'],
});

i18n
  .use(languageDetector) // Detecta automaticamente o idioma do navegador
  .use(initReactI18next) // Passa a instância do i18next para o react-i18next
  .init({
    resources: {
      enUS: {
        translation: enUS,
      },
      ptBR: {
        translation: ptBR,
      },
    },
    lng: localStorage.getItem('i18nextLng') || navigator.language || 'enUS', // Define o idioma inicial a partir do localStorage, navegador ou padrão
    fallbackLng: 'enUS', // Idioma padrão caso o detectado não esteja disponível
    debug: true,
    interpolation: {
      escapeValue: false, // React já escapa automaticamente o HTML
    },
  });

export default i18n;
