import Link from 'next/link';
import type { Metadata } from 'next';
import { blogPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Lawn Care Blog — Tips, Guides & Seasonal Advice',
  description:
    'Expert lawn care tips, seasonal maintenance guides, and grass type advice for US homeowners. Keep your lawn healthy year-round.',
  alternates: { canonical: '/blog' },
};

export default function BlogIndex() {
  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Lawn Care Blog
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Expert guides, seasonal tips, and practical advice to help you grow the healthiest lawn on the block.
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl shadow-sm border border-green-100 p-6 hover:shadow-md hover:border-green-300 transition-all"
              >
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
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
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-lawn-green transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 line-clamp-2">{post.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
