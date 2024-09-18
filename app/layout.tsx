import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { Footer, Header } from '@/components';

import './globals.css';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vintage Stock Coffee dashboard',
  description: 'Vintage Stock Coffee dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${openSans.className}`}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
