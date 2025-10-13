import { useTranslations } from 'next-intl';

const TrustSignals = () => {
  const t = useTranslations('home.trust');
  const badges = ['ASE Certified', 'BBB Accredited', 'Shopmonkey Partner', 'EV Service Ready'];

  return (
    <section className="bg-white py-16" id="reviews">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">{t('eyebrow')}</p>
            <h2 className="text-3xl font-bold text-slate-900">{t('title')}</h2>
            <p className="mt-4 text-slate-600">{t('description')}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span key={badge} className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4 rounded-2xl bg-slate-100 p-6 shadow-inner">
            <iframe
              title="Google Reviews"
              src="https://www.google.com/maps/embed?pb=!1m2!1s0x0:0x0!2zNDcuOTExNzY0LC0xMjIuMjE0Mjk5"
              className="h-64 w-full rounded-xl border border-slate-200"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <p className="text-xs text-slate-500">{t('disclaimer')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
