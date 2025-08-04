import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  tr: {
    translation: {
      leagues: "Ligler",
      changeLang: "Dili Değiştir",
      loading: "Yükleniyor...",
    },
  },
  en: {
    translation: {
      leagues: "Leagues",
      changeLang: "Change Language",
      loading: "Loading...",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'tr',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;