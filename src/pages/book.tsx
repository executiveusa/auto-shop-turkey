import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import AppointmentForm from '@/components/forms/AppointmentForm';

const BookPage = () => {
  const t = useTranslations('book');

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">{t('eyebrow')}</p>
      <h1 className="text-4xl font-bold text-slate-900">{t('title')}</h1>
      <p className="mt-4 max-w-3xl text-slate-600">{t('description')}</p>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <AppointmentForm />
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-primary">{t('why.title')}</h2>
          <p className="text-sm text-slate-600">{t('why.copy')}</p>
          <ul className="space-y-2 text-sm text-slate-600">
            {t.raw('why.bullets').map((bullet: string) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-success" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = (await import(`../../public/locales/${locale}/common.json`)).default;
  return {
    props: {
      messages,
      locale
    }
  };
};

export default BookPage;
