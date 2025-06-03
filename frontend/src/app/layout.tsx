import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import TopNav from '@/components/TopNav';

export const metadata: Metadata = {
  title: 'Lou Vang | Portfolio',
  description: 'Front-end developer with design capabilities.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/won7smw.css" />
      </head>
      <body className={`antialiased`}>
        <header className="layout-header w-full px-20">
          <div className="py-7 flex justify-between items-center border-b">
            <Link href="/" className="logo font-serif text-4xl">
              Lou Vang
            </Link>
            <nav className="top-nav">
              <TopNav />
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="layout-footer w-full">
          <div className="px-20 py-10 flex justify-between items-center text-lg">
            <div className="copyright-line">
              &copy; 2025 Lou Vang. All rights reserved.
            </div>
            <nav className="bottom-nav">
              <ul className="list-none flex justify-between w-[280px]">
                <li className="bottom-nav-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="bottom-nav-item">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="bottom-nav-item">
                  <Link href="/rss">RSS</Link>
                </li>
                <li className="bottom-nav-item">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
