import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {},
  es: {}
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'es',
  keySeparator: '.',
  interpolation: {
    escapeValue: false
  }
});

export default i18next;
