import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  damagePhotos: z.string().optional(),
  insuranceProvider: z.string().optional(),
  message: z.string().min(10)
});

type QuotePayload = z.infer<typeof schema>;

const QuoteForm = () => {
  const t = useTranslations('forms.quote');
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<QuotePayload>({ resolver: zodResolver(schema) });

  const onSubmit = async (payload: QuotePayload) => {
    setSubmitted(false);
    const response = await fetch('/api/quotes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      setSubmitted(true);
      reset();
    } else {
      console.error('Quote request failed', await response.text());
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-semibold text-slate-700">
          {t('name')}
          <input {...register('name')} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" />
          {errors.name && <span className="text-xs text-red-500">{t('errors.name')}</span>}
        </label>
        <label className="text-sm font-semibold text-slate-700">
          {t('email')}
          <input {...register('email')} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" />
          {errors.email && <span className="text-xs text-red-500">{t('errors.email')}</span>}
        </label>
        <label className="text-sm font-semibold text-slate-700">
          {t('phone')}
          <input {...register('phone')} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" />
          {errors.phone && <span className="text-xs text-red-500">{t('errors.phone')}</span>}
        </label>
        <label className="text-sm font-semibold text-slate-700">
          {t('insuranceProvider')}
          <input {...register('insuranceProvider')} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" />
        </label>
      </div>
      <label className="text-sm font-semibold text-slate-700">
        {t('damagePhotos')}
        <input {...register('damagePhotos')} placeholder="https://" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" />
      </label>
      <label className="text-sm font-semibold text-slate-700">
        {t('message')}
        <textarea {...register('message')} rows={4} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" />
        {errors.message && <span className="text-xs text-red-500">{t('errors.message')}</span>}
      </label>
      <button type="submit" disabled={isSubmitting} className="w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-70">
        {isSubmitting ? t('submitting') : t('cta')}
      </button>
      {submitted && <p className="text-xs font-semibold text-success">{t('success')}</p>}
    </form>
  );
};

export default QuoteForm;
