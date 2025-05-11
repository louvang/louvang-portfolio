import type { Metadata } from 'next';
import './globals.css';

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
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
