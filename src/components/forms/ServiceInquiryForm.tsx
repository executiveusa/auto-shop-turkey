import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const schema = z.object({
  vehicle: z.string().min(2),
  year: z.string().min(4),
  make: z.string().min(2),
  model: z.string().min(2),
  description: z.string().min(10)
});

type ServiceInquiryPayload = z.infer<typeof schema>;

interface ServiceInquiryFormProps {
  serviceKey: string;
}

const ServiceInquiryForm = ({ serviceKey }: ServiceInquiryFormProps) => {
  const t = useTranslations('forms.serviceInquiry');
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ServiceInquiryPayload>({ resolver: zodResolver(schema) });

  const onSubmit = async (payload: ServiceInquiryPayload) => {
    setSubmitted(false);
    const response = await fetch('/api/inquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, serviceKey })
    });

    if (response.ok) {
      setSubmitted(true);
      reset();
    } else {
      console.error('Inquiry submission failed', await response.text());
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-primary">{t('title')}</h3>
      <p className="text-sm text-slate-600">{t('description')}</p>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-semibold text-slate-700">
          {t('vehicle')}
          <input {...register('vehicle')} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" />
          {errors.vehicle && <span className="text-xs text-red-500">{t('errors.vehicle')}</span>}
        </label>
        <label className="text-sm font-semibold text-slate-700">
          {t('year')}
          <input {...register('year')} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" />
          {errors.year && <span className="text-xs text-red-500">{t('errors.year')}</span>}
        </label>
        <label className="text-sm font-semibold text-slate-700">
          {t('make')}
          <input {...register('make')} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" />
          {errors.make && <span className="text-xs text-red-500">{t('errors.make')}</span>}
        </label>
        <label className="text-sm font-semibold text-slate-700">
          {t('model')}
          <input {...register('model')} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" />
          {errors.model && <span className="text-xs text-red-500">{t('errors.model')}</span>}
        </label>
      </div>
      <label className="text-sm font-semibold text-slate-700">
        {t('descriptionField')}
        <textarea {...register('description')} rows={4} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" />
        {errors.description && <span className="text-xs text-red-500">{t('errors.description')}</span>}
      </label>
      <button type="submit" disabled={isSubmitting} className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70">
        {isSubmitting ? t('submitting') : t('cta')}
      </button>
      {submitted && <p className="text-xs font-semibold text-success">{t('success')}</p>}
    </form>
  );
};

export default ServiceInquiryForm;
