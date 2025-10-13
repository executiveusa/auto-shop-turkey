import { GetStaticPaths, GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';

interface BlogPostProps {
  slug: string;
}

const BlogPostPage = ({ slug }: BlogPostProps) => {
  const t = useTranslations('blogDetail');
  const post = (t.raw('posts') as Record<string, { title: string; content: string; date: string }>)[slug];

  if (!post) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-bold text-slate-900">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <p className="text-xs uppercase tracking-wide text-primary">{post.date}</p>
      <h1 className="text-4xl font-bold text-slate-900">{post.title}</h1>
      <div className="prose prose-slate mt-6 max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const locales = ['en', 'es', 'tr', 'uk'];
  const posts = ['spring-wheel-alignment', 'winter-battery-check', 'summer-ac-maintenance'];
  const paths = locales.flatMap((locale) => posts.map((slug) => ({ params: { slug }, locale })));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const messages = (await import(`../../../public/locales/${locale}/common.json`)).default;
  return {
    props: {
      messages,
      locale,
      slug: params?.slug
    }
  };
};

export default BlogPostPage;
