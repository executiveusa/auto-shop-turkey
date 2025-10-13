import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import ServiceInquiryForm from '@/components/forms/ServiceInquiryForm';

const DiagnosticsPage = () => {
  const t = useTranslations('servicePages.diagnostics');

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">{t('eyebrow')}</p>
      <h1 className="text-4xl font-bold text-slate-900">{t('title')}</h1>
      <p className="mt-4 max-w-3xl text-slate-600">{t('description')}</p>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
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
        <ServiceInquiryForm serviceKey="diagnostics" />
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

export default DiagnosticsPage;
