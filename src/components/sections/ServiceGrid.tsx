import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Wrench, Paintbrush, Gauge, Car } from 'lucide-react';

const services = [
  { href: '/services/engine-repair', icon: Wrench, key: 'engine' },
  { href: '/services/body-shop', icon: Car, key: 'body' },
  { href: '/services/diagnostics', icon: Gauge, key: 'diagnostics' },
  { href: '/services/custom-wraps', icon: Paintbrush, key: 'wraps' },
  { href: '/services/painting', icon: Paintbrush, key: 'painting' }
];

const ServiceGrid = () => {
  const t = useTranslations('home.services');
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">{t('eyebrow')}</p>
          <h2 className="text-3xl font-bold text-slate-900">{t('title')}</h2>
        </div>
        <Link href="/services" className="text-sm font-semibold text-primary hover:underline">
          {t('allServices')}
        </Link>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ href, icon: Icon, key }) => (
          <Link
            key={href}
            href={href}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
          >
            <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-trust to-accent transition group-hover:scale-y-150" />
            <Icon className="h-10 w-10 text-primary transition group-hover:scale-110" />
            <h3 className="mt-4 text-xl font-semibold text-slate-900">{t(`items.${key}.title`)}</h3>
            <p className="mt-2 text-sm text-slate-600">{t(`items.${key}.description`)}</p>
            <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent group-hover:translate-x-1">
              {t('cta')} →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServiceGrid;
