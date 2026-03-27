import Link from 'next/link';
import type { Metadata } from 'next';
import { lawnProblems } from '@/data/lawn-problems';

export const metadata: Metadata = {
  title: 'Common Lawn Problems — Identify & Fix Lawn Issues',
  description:
    'Browse the most common lawn problems in the US: brown patches, fungus, weeds, yellow grass, bare spots, and grub damage. Get expert diagnosis and treatment advice.',
  alternates: { canonical: '/lawn-problems' },
};

const severityBadge = {
  low: 'bg-green-100 text-green-800',
  moderate: 'bg-yellow-100 text-yellow-800',
  severe: 'bg-red-100 text-red-800',
};

export default function LawnProblemsIndex() {
  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Common Lawn Problems
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Identify what&apos;s wrong with your lawn. Browse common issues, learn the causes, and find proven treatments.
          </p>
          <Link
            href="/"
            className="inline-block mt-4 text-lawn-green hover:text-lawn-dark font-medium transition-colors"
          >
            Or upload a photo for instant AI diagnosis &rarr;
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {lawnProblems.map((problem) => (
            <Link
              key={problem.slug}
              href={`/lawn-problems/${problem.slug}`}
              className="group block bg-white rounded-2xl shadow-sm border border-green-100 p-6 hover:shadow-md hover:border-green-300 transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{problem.icon}</span>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-bold text-gray-800 group-hover:text-lawn-green transition-colors">
                    {problem.shortTitle}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {problem.description}
                  </p>
                  <span
                    className={`inline-block mt-3 text-xs font-semibold px-2.5 py-0.5 rounded-full ${severityBadge[problem.severity]}`}
                  >
                    {problem.severity.charAt(0).toUpperCase() + problem.severity.slice(1)} severity
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
