import { MetadataRoute } from 'next';
import { lawnProblems } from '@/data/lawn-problems';
import { blogPosts } from '@/data/blog-posts';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://lawn-doctor-ai-production.up.railway.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const problemPages = lawnProblems.map((p) => ({
    url: `${siteUrl}/lawn-problems/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/lawn-problems`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...problemPages,
    ...blogPages,
  ];
}
