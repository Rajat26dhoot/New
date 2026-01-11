import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SafeDep - Open Source Software Supply Chain Security',
  description: 'Analysis and insights for open source packages',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen text-gray-900`} style={{ backgroundColor: '#F1F5F9' }}>

        <main>{children}</main>

       
      </body>
    </html>
  );
}
