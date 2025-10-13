import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations('home.hero');
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary to-trust text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1400&q=80')] opacity-20" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-24">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">{t('title')}</h1>
        <p className="max-w-2xl text-lg text-blue-100">{t('subtitle')}</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/book" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-500">
            {t('bookCta')}
          </Link>
          <Link href="#reviews" className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-white hover:text-primary">
            {t('reviewsCta')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
