import i18n from 'i18next';
import {
  initReactI18next,
  useTranslation as i18tanslation,
} from 'react-i18next';

import en from '@/translates/en/en.json';
import es from '@/translates/es/es.json';
import ko from '@/translates/ko/ko.json';

export const getUserLanguage = () => {
  const userLanguage = navigator.language || 'en';

  return userLanguage;
};

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: es,
    },
    en: {
      translation: en,
    },
    ko: {
      translation: ko,
    },
  },
  lng: getUserLanguage(), // 기본 언어 설정 (영어)
  fallbackLng: 'en', // 번역이 없는 경우의 기본 언어 = 영어
  debug: true,
  interpolation: {
    escapeValue: false, // React 컴포넌트와의 통합을 위해 false로 설정
  },
});

export const changeLanguage = (newLanguage: string) => {
  i18n.changeLanguage(newLanguage);
};

export const translate = (key: string) => {
  const { t } = i18tanslation();
  return t(key);
};

export default i18n;
