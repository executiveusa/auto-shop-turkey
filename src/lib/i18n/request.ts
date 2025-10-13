import { getRequestConfig } from 'next-intl/server';

type Locale = 'en' | 'es' | 'tr' | 'uk';

export default getRequestConfig(async ({ locale }) => {
  const supported = ['en', 'es', 'tr', 'uk'];
  const activeLocale = supported.includes(locale as string) ? (locale as Locale) : 'en';

  return {
    locale: activeLocale,
    messages: (await import(`../../../public/locales/${activeLocale}/common.json`)).default
  };
});
