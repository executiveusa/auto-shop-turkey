import type { AppProps } from 'next/app';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@/styles/globals.css';
import { useState } from 'react';
import Layout from '@/components/layout/Layout';

export default function AutoShopApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const { messages, locale } = pageProps;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </QueryClientProvider>
    </NextIntlClientProvider>
  );
}
