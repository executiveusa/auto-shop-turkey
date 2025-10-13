import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/lib/i18n/request.ts');

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true
  },
  i18n: {
    locales: ['en', 'es', 'tr', 'uk'],
    defaultLocale: 'en'
  }
};

export default withNextIntl(nextConfig);
