import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { lawnProblems, getProblemBySlug } from '@/data/lawn-problems';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return lawnProblems.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const problem = getProblemBySlug(params.slug);
  if (!problem) return {};

  return {
    title: problem.title,
    description: problem.metaDescription,
    alternates: { canonical: `/lawn-problems/${problem.slug}` },
    openGraph: {
      title: problem.title,
      description: problem.metaDescription,
      type: 'article',
    },
  };
}

const severityColor = {
  low: 'bg-green-100 text-green-800 border-green-200',
  moderate: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  severe: 'bg-red-100 text-red-800 border-red-200',
};

export default function LawnProblemPage({ params }: Props) {
  const problem = getProblemBySlug(params.slug);
  if (!problem) notFound();

  const otherProblems = lawnProblems.filter((p) => p.slug !== problem.slug).slice(0, 3);

  // Structured data for this problem page
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: problem.title,
    description: problem.metaDescription,
    author: { '@type': 'Organization', name: 'Lawn Doctor AI' },
    publisher: { '@type': 'Organization', name: 'Lawn Doctor AI' },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What causes ${problem.shortTitle.toLowerCase()} in lawns?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: problem.causes.join('. '),
        },
      },
      {
        '@type': 'Question',
        name: `How do I fix ${problem.shortTitle.toLowerCase()} in my lawn?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: problem.treatments.join('. '),
        },
      },
      {
        '@type': 'Question',
        name: `When should I call a professional for ${problem.shortTitle.toLowerCase()}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: problem.whenToSeeAPro,
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="min-h-screen">
        <div className="max-w-3xl mx-auto px-4 py-10">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-lawn-green">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/lawn-problems" className="hover:text-lawn-green">Lawn Problems</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{problem.shortTitle}</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">{problem.icon}</span>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${severityColor[problem.severity]}`}>
                {problem.severity.charAt(0).toUpperCase() + problem.severity.slice(1)} severity
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              {problem.title}
            </h1>
            <p className="text-gray-600 text-lg mt-3">{problem.description}</p>
          </div>

          {/* CTA Banner */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-10 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1">
              <p className="font-semibold text-gray-800">Not sure this is your problem?</p>
              <p className="text-sm text-gray-600">Upload a photo and our AI will diagnose it instantly.</p>
            </div>
            <Link href="/" className="btn-primary whitespace-nowrap text-sm">
              Try AI Diagnosis
            </Link>
          </div>

          {/* Symptoms */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Symptoms to Look For</h2>
            <ul className="space-y-3">
              {problem.symptoms.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 w-2 h-2 bg-lawn-green rounded-full shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </section>

          {/* Causes */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Common Causes</h2>
            <ul className="space-y-3">
              {problem.causes.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 w-2 h-2 bg-yellow-400 rounded-full shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </section>

          {/* Long-form content */}
          <section
            className="mb-10 prose prose-green max-w-none prose-headings:text-gray-800 prose-p:text-gray-700 prose-a:text-lawn-green"
            dangerouslySetInnerHTML={{ __html: problem.content }}
          />

          {/* Treatments */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Treat It</h2>
            <ol className="space-y-3">
              {problem.treatments.map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-lawn-green rounded-full flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  {t}
                </li>
              ))}
            </ol>
          </section>

          {/* Prevention */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Prevention Tips</h2>
            <ul className="space-y-3">
              {problem.preventionTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-lawn-green mt-0.5 shrink-0">&#10003;</span>
                  {tip}
                </li>
              ))}
            </ul>
          </section>

          {/* Seasonal Info */}
          <section className="mb-10 bg-blue-50 border border-blue-200 rounded-xl p-5">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Seasonal Timing</h2>
            <p className="text-gray-700">{problem.seasonalInfo}</p>
          </section>

          {/* When to See a Pro */}
          <section className="mb-10 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h2 className="text-lg font-bold text-gray-800 mb-2">When to Call a Professional</h2>
            <p className="text-gray-700">{problem.whenToSeeAPro}</p>
          </section>

          {/* Related Problems */}
          <section className="mt-14 pt-10 border-t border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Other Common Lawn Problems</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {otherProblems.map((p) => (
                <Link
                  key={p.slug}
                  href={`/lawn-problems/${p.slug}`}
                  className="block bg-white rounded-xl border border-green-100 p-4 hover:shadow-md hover:border-green-300 transition-all"
                >
                  <span className="text-2xl">{p.icon}</span>
                  <p className="font-semibold text-gray-800 mt-2">{p.shortTitle}</p>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{p.description}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
