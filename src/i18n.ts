import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en.json';
import esTranslation from './locales/es.json';
import frTranslation from './locales/fr.json';
import zhTranslation from './locales/zh.json';
import ruTranslation from './locales/ru.json';
import ptTranslation from './locales/pt.json';
import deTranslation from './locales/de.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
        en: { translation: enTranslation },
        es: { translation: esTranslation },
        fr: { translation: frTranslation },
        zh: { translation: zhTranslation },
        ru: { translation: ruTranslation },
        pt: { translation: ptTranslation },
        de: { translation: deTranslation }
        },
        fallbackLng: 'en',
        interpolation: { escapeValue: false }
    });

export default i18n;