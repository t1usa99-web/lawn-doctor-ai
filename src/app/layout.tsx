import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lawn-doctor-ai-production.up.railway.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Lawn Doctor AI — Free AI Lawn Diagnosis Tool',
    template: '%s | Lawn Doctor AI',
  },
  description:
    'Upload a photo of your lawn and get a free, instant AI diagnosis with treatment recommendations. Identify brown patches, fungus, weeds, and more.',
  keywords: [
    'lawn diagnosis',
    'lawn problems',
    'lawn disease identifier',
    'brown patches on lawn',
    'lawn fungus',
    'grass disease',
    'lawn care tips',
    'AI lawn analysis',
    'lawn health',
    'yard problems',
  ],
  authors: [{ name: 'Lawn Doctor AI' }],
  creator: 'Lawn Doctor AI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Lawn Doctor AI',
    title: 'Lawn Doctor AI — Free AI Lawn Diagnosis Tool',
    description:
      'Upload a photo of your lawn and get a free, instant AI diagnosis with treatment recommendations.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lawn Doctor AI — Free AI Lawn Diagnosis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lawn Doctor AI — Free AI Lawn Diagnosis Tool',
    description:
      'Upload a photo of your lawn and get a free, instant AI diagnosis with treatment recommendations.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Lawn Doctor AI',
    description:
      'Free AI-powered lawn diagnosis tool. Upload a photo and get instant treatment recommendations.',
    url: siteUrl,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '120',
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
