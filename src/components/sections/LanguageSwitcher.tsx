import { useRouter } from 'next/router';
import { useTransition } from 'react';
import Image from 'next/image';

const locales = [
  { code: 'en', label: 'English', flag: '/locales/en/flag.svg' },
  { code: 'es', label: 'Español', flag: '/locales/es/flag.svg' },
  { code: 'tr', label: 'Türkçe', flag: '/locales/tr/flag.svg' },
  { code: 'uk', label: 'Українська', flag: '/locales/uk/flag.svg' }
];

const LanguageSwitcher = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleChange = (locale: string) => {
    startTransition(() => {
      router.push(router.asPath, router.asPath, { locale });
    });
  };

  return (
    <div className="flex items-center gap-1 rounded-full bg-slate-100 p-1 shadow-inner">
      {locales.map((locale) => (
        <button
          key={locale.code}
          type="button"
          onClick={() => handleChange(locale.code)}
          className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold transition hover:bg-white ${
            router.locale === locale.code ? 'bg-white text-primary shadow-sm' : 'text-slate-600'
          }`}
          aria-label={`Switch language to ${locale.label}`}
          disabled={isPending && router.locale === locale.code}
        >
          <Image src={locale.flag} alt={locale.label} width={16} height={16} className="rounded-full" />
          {locale.code.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
