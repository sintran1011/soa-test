import { getRequestConfig } from 'next-intl/server';

const SUPPORT_LOCALES = ['en', 'vi'];

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
  if (!locale) {
    locale = 'en';
  } else if (locale && !SUPPORT_LOCALES.includes(locale)) {
    locale = 'en';
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
