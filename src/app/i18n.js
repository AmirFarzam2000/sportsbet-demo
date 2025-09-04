import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

export function getOptions(locale = 'en', ns = ['Home']) {
  return {
    debug: false,
    supportedLngs: ['en', 'fa'],
    fallbackLng: 'en',
    lng: locale,
    fallbackNS: 'Home',
    defaultNS: 'Home',
    ns,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  };
}

export function createI18nInstance(locale, ns) {
  const i18nInstance = createInstance();
  i18nInstance.use(initReactI18next);
  i18nInstance.use(
    resourcesToBackend(
      (language, namespace) => import(`/locales/${language}/${namespace}.json`)
    )
  );
  i18nInstance.init(getOptions(locale, ns));
  return i18nInstance;
}
