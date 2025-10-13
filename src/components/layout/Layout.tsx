import Head from 'next/head';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';
import LanguageSwitcher from '@/components/sections/LanguageSwitcher';
import SocialLinks from '@/components/sections/SocialLinks';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const t = useTranslations('layout');

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>{t('metaTitle')}</title>
        <meta name="description" content={t('metaDescription')} />
        <meta name="keywords" content={t('keywords')} />
      </Head>
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            {t('brand')}
          </Link>
          <nav className="hidden gap-6 text-sm font-semibold text-slate-700 md:flex">
            <Link href="/services/engine-repair" className="hover:text-primary">
              {t('nav.engine')}
            </Link>
            <Link href="/services/body-shop" className="hover:text-primary">
              {t('nav.body')}
            </Link>
            <Link href="/services/diagnostics" className="hover:text-primary">
              {t('nav.diagnostics')}
            </Link>
            <Link href="/services/custom-wraps" className="hover:text-primary">
              {t('nav.wraps')}
            </Link>
            <Link href="/services/painting" className="hover:text-primary">
              {t('nav.painting')}
            </Link>
            <Link href="/blog" className="hover:text-primary">
              {t('nav.blog')}
            </Link>
            <Link href="/contact" className="hover:text-primary">
              {t('nav.contact')}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              href="/book"
              className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:scale-105 hover:bg-orange-500"
            >
              {t('bookNow')}
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-slate-50">{children}</main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-primary">{t('footer.aboutTitle')}</h3>
            <p className="mt-2 text-sm text-slate-600">{t('footer.about')}</p>
            <Link href="https://maps.google.com" className="mt-2 block text-sm text-primary">
              {t('footer.directions')}
            </Link>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">{t('footer.contactTitle')}</h3>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li>{t('footer.address')}</li>
              <li>{t('footer.phone')}</li>
              <li>{t('footer.hours')}</li>
              <li>
                <Link href="/contact" className="text-primary">
                  {t('footer.contactLink')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">{t('footer.socialTitle')}</h3>
            <p className="mt-2 text-sm text-slate-600">{t('footer.socialCopy')}</p>
            <SocialLinks />
          </div>
        </div>
        <div className="border-t border-slate-200 bg-slate-100 py-4 text-center text-xs text-slate-500">
          {t('footer.legal')}
        </div>
      </footer>
    </div>
  );
};

export default Layout;
