import Link from 'next/link';

const problems = [
  { title: 'Brown Patches', slug: 'brown-patches' },
  { title: 'Lawn Fungus', slug: 'lawn-fungus' },
  { title: 'Crabgrass & Weeds', slug: 'crabgrass-weeds' },
  { title: 'Yellow Grass', slug: 'yellow-grass' },
  { title: 'Bare Spots', slug: 'bare-spots' },
  { title: 'Grub Damage', slug: 'grub-damage' },
];

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p className="text-white font-bold text-lg mb-2">
            Lawn Doctor <span className="text-lawn-green">AI</span>
          </p>
          <p className="text-sm leading-relaxed">
            Free AI-powered lawn diagnosis for US homeowners. Upload a photo and get instant treatment recommendations.
          </p>
        </div>

        {/* Common Problems */}
        <div>
          <p className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Common Problems</p>
          <ul className="space-y-2 text-sm">
            {problems.map((p) => (
              <li key={p.slug}>
                <Link href={`/lawn-problems/${p.slug}`} className="hover:text-lawn-light transition-colors">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <p className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Resources</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/lawn-problems" className="hover:text-lawn-light transition-colors">
                All Lawn Problems
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-lawn-light transition-colors">
                Lawn Care Blog
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-lawn-light transition-colors">
                AI Diagnosis Tool
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-xs gap-2">
          <p>&copy; {new Date().getFullYear()} Lawn Doctor AI. For informational purposes only.</p>
          <p>Consult a lawn care professional for severe issues.</p>
        </div>
      </div>
    </footer>
  );
}
