'use client';

import { I18nextProvider } from 'react-i18next';
import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { getOptions } from '../i18n';
import { ReactNode, useEffect, useState } from 'react';
import { RTLProvider } from './contexts/RTLContext';
import { Provider } from 'react-redux';
import { store } from '@/store';

let i18n: ReturnType<typeof createInstance>;

function createI18nInstance(locale: string, ns: string[]) {
  if (!i18n) {
    i18n = createInstance();
    i18n.use(initReactI18next);
    i18n.use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`/locales/${language}/${namespace}.json`)
      )
    );
    i18n.init(getOptions(locale, ns));
  }
  return i18n;
}

export default function Providers({
  children,
  locale,
  namespaces = ['Home'],
}: {
  children: ReactNode;
  locale: string;
  namespaces?: string[];
}) {
  const [instance, setInstance] = useState<ReturnType<
    typeof createInstance
  > | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const i18nInstance = createI18nInstance(locale, namespaces);
    setInstance(i18nInstance);
  }, [locale, namespaces]);

  if (!isClient || !instance) {
    return (
      <Provider store={store}>
        <div suppressHydrationWarning>{children}</div>
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <I18nextProvider i18n={instance}>
        <RTLProvider locale={locale}>{children}</RTLProvider>
      </I18nextProvider>
    </Provider>
  );
}
