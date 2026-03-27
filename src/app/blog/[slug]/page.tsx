import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { blogPosts, getPostBySlug } from '@/data/blog-posts';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Lawn Doctor AI' },
    publisher: { '@type': 'Organization', name: 'Lawn Doctor AI' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="min-h-screen">
        <article className="max-w-3xl mx-auto px-4 py-10">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-lawn-green">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-lawn-green">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700 truncate">{post.title}</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
              <span className="bg-green-100 text-lawn-dark px-2.5 py-0.5 rounded-full text-xs font-medium">
                {post.category}
              </span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              {post.title}
            </h1>
            <p className="text-gray-600 text-lg mt-3">{post.description}</p>
          </header>

          {/* Content */}
          <div
            className="prose prose-green max-w-none prose-headings:text-gray-800 prose-p:text-gray-700 prose-a:text-lawn-green prose-li:text-gray-700 prose-strong:text-gray-800"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-12 bg-green-50 border border-green-200 rounded-xl p-6 text-center">
            <p className="font-bold text-gray-800 text-lg mb-2">Got a lawn problem?</p>
            <p className="text-gray-600 mb-4">
              Upload a photo and our AI will diagnose it in seconds — no signup required.
            </p>
            <Link href="/" className="btn-primary inline-block">
              Try Lawn Doctor AI Free
            </Link>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-gray-200">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </article>

        {/* More Posts */}
        {otherPosts.length > 0 && (
          <section className="max-w-3xl mx-auto px-4 pb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Keep Reading</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="block bg-white rounded-xl border border-green-100 p-5 hover:shadow-md hover:border-green-300 transition-all"
                >
                  <p className="text-xs text-gray-500 mb-1">{p.category}</p>
                  <p className="font-semibold text-gray-800">{p.title}</p>
                  <p className="text-xs text-gray-500 mt-2 line-clamp-2">{p.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
