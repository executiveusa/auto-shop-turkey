import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const BlogPage = () => {
  const t = useTranslations('blog');
  const posts = t.raw('posts') as Array<{ slug: string; title: string; excerpt: string; date: string }>;

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">{t('eyebrow')}</p>
      <h1 className="text-4xl font-bold text-slate-900">{t('title')}</h1>
      <p className="mt-4 max-w-3xl text-slate-600">{t('description')}</p>
      <div className="mt-10 space-y-6">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-primary">{post.date}</p>
            <h2 className="text-2xl font-semibold text-primary">{post.title}</h2>
            <p className="mt-3 text-sm text-slate-600">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex items-center text-sm font-semibold text-accent">
              {t('cta')} →
            </Link>
          </article>
        ))}
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

export default BlogPage;
