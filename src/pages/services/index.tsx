import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const ServicesLanding = () => {
  const t = useTranslations('services');
  const serviceKeys = ['engine', 'body', 'diagnostics', 'wraps', 'painting'];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">{t('eyebrow')}</p>
      <h1 className="text-4xl font-bold text-slate-900">{t('title')}</h1>
      <p className="mt-4 max-w-3xl text-slate-600">{t('description')}</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {serviceKeys.map((key) => (
          <Link key={key} href={`/services/${t(`items.${key}.slug`)}`} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
            <h2 className="text-2xl font-semibold text-primary">{t(`items.${key}.title`)}</h2>
            <p className="mt-3 text-sm text-slate-600">{t(`items.${key}.summary`)}</p>
            <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent group-hover:translate-x-1">
              {t('cta')} →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = (await import(`../../../public/locales/${locale}/common.json`)).default;
  return {
    props: {
      messages,
      locale
    }
  };
};

export default ServicesLanding;
