import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import Hero from '@/components/sections/Hero';
import ServiceGrid from '@/components/sections/ServiceGrid';
import TrustSignals from '@/components/sections/TrustSignals';
import SeasonalCampaigns from '@/components/sections/SeasonalCampaigns';
import AppointmentForm from '@/components/forms/AppointmentForm';

export default function HomePage() {
  const t = useTranslations('home.appointment');

  return (
    <>
      <Hero />
      <ServiceGrid />
      <TrustSignals />
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">{t('eyebrow')}</p>
            <h2 className="text-3xl font-bold text-slate-900">{t('title')}</h2>
            <p className="mt-4 text-slate-600">{t('description')}</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              {t.raw('bullets').map((bullet: string) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-success" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
          <AppointmentForm />
        </div>
      </section>
      <SeasonalCampaigns />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = (await import(`../../public/locales/${locale}/common.json`)).default;

  return {
    props: {
      messages,
      locale
    }
  };
};
