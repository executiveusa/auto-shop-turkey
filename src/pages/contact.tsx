import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import ServiceInquiryForm from '@/components/forms/ServiceInquiryForm';

const ContactPage = () => {
  const t = useTranslations('contact');

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">{t('eyebrow')}</p>
      <h1 className="text-4xl font-bold text-slate-900">{t('title')}</h1>
      <p className="mt-4 max-w-3xl text-slate-600">{t('description')}</p>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <ServiceInquiryForm serviceKey="general" />
        <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-primary">{t('visit.title')}</h2>
          <p className="text-sm text-slate-600">{t('visit.copy')}</p>
          <div className="space-y-2 text-sm text-slate-600">
            <p>{t('address')}</p>
            <p>{t('phone')}</p>
            <p>{t('hours')}</p>
            <a href="https://maps.google.com" className="text-primary underline">{t('directions')}</a>
          </div>
          <iframe
            title="Everett Auto Shop"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2683.338!2d-122.21429!3d47.911764"
            className="h-64 w-full rounded-xl border border-slate-200"
            loading="lazy"
          />
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

export default ContactPage;
