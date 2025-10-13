import { useTranslations } from 'next-intl';

const SeasonalCampaigns = () => {
  const t = useTranslations('home.campaigns');
  const campaigns = ['winter', 'summer', 'allSeasons'];

  return (
    <section className="bg-gradient-to-br from-white via-slate-50 to-slate-100 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-slate-900">{t('title')}</h2>
        <p className="mt-2 text-sm text-slate-600">{t('description')}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {campaigns.map((campaign) => (
            <div key={campaign} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-primary">{t(`items.${campaign}.title`)}</h3>
              <p className="mt-3 text-sm text-slate-600">{t(`items.${campaign}.copy`)}</p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-xs text-slate-500">
                {t.raw(`items.${campaign}.tips`).map((tip: string) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonalCampaigns;
