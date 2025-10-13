import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import ServiceInquiryForm from '@/components/forms/ServiceInquiryForm';
import QuoteForm from '@/components/forms/QuoteForm';

const BodyShopPage = () => {
  const t = useTranslations('servicePages.body');

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">{t('eyebrow')}</p>
      <h1 className="text-4xl font-bold text-slate-900">{t('title')}</h1>
      <p className="mt-4 max-w-3xl text-slate-600">{t('description')}</p>
      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {t.raw('sections').map((section: { title: string; copy: string; bulletPoints: string[] }) => (
            <section key={section.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-primary">{section.title}</h2>
              <p className="mt-3 text-sm text-slate-600">{section.copy}</p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-xs text-slate-500">
                {section.bulletPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <div className="space-y-6">
          <ServiceInquiryForm serviceKey="body" />
          <QuoteForm />
        </div>
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

export default BodyShopPage;
