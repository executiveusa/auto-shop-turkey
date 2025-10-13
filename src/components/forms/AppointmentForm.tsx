import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  serviceType: z.string(),
  preferredDate: z.string(),
  notes: z.string().optional()
});

type AppointmentPayload = z.infer<typeof schema>;

const AppointmentForm = () => {
  const t = useTranslations('forms.appointment');
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<AppointmentPayload>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: AppointmentPayload) => {
    setSubmitted(false);
    const response = await fetch('/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customerName: data.name,
        email: data.email,
        phone: data.phone,
        serviceType: data.serviceType,
        preferredDate: data.preferredDate,
        notes: data.notes
      })
    });

    if (response.ok) {
      setSubmitted(true);
      reset();
    } else {
      console.error('Appointment submission failed', await response.text());
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
          {t('preferredDate')}
          <input type="date" {...register('preferredDate')} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" />
          {errors.preferredDate && <span className="text-xs text-red-500">{t('errors.preferredDate')}</span>}
        </label>
      </div>
      <label className="text-sm font-semibold text-slate-700">
        {t('serviceType')}
        <select {...register('serviceType')} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:outline-none">
          <option value="engine">{t('serviceOptions.engine')}</option>
          <option value="body">{t('serviceOptions.body')}</option>
          <option value="diagnostics">{t('serviceOptions.diagnostics')}</option>
          <option value="wraps">{t('serviceOptions.wraps')}</option>
          <option value="painting">{t('serviceOptions.painting')}</option>
        </select>
      </label>
      <label className="text-sm font-semibold text-slate-700">
        {t('notes')}
        <textarea {...register('notes')} rows={4} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" />
      </label>
      <button type="submit" disabled={isSubmitting} className="w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-70">
        {isSubmitting ? t('submitting') : t('cta')}
      </button>
      {submitted && <p className="text-xs font-semibold text-success">{t('success')}</p>}
    </form>
  );
};

export default AppointmentForm;
