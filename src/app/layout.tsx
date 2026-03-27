import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lawn Doctor AI - Smart Lawn Diagnosis',
  description: 'Upload a photo of your lawn and get an instant AI-powered diagnosis with treatment recommendations.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
