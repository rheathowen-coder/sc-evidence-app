import type { Metadata, Viewport } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SC Rules of Evidence',
  description: 'Mobile-friendly South Carolina Rules of Evidence reference app.',
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    title: 'SC Evidence',
    statusBarStyle: 'black-translucent'
  }
};

export const viewport: Viewport = {
  themeColor: '#071433'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="header-inner">
            <Link className="header-title" href="/">SC Evidence</Link>
            <div className="spacer" />
            <Link className="nav-link" href="/rules">Rules</Link>
            <Link className="nav-link" href="/articles">Articles</Link>
            <Link className="nav-link" href="/issues">Issues</Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
