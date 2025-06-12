import RouteLoading from '@/components/RouteLoading';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NProgressLoader from '@/components/NProgressLoader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ISP Management System',
  description: 'manage your ISP operations efficiently',
  keywords: ['ISP', 'Management', 'System', 'Dashboard', 'Admin'],
  authors: [
    {
      name: 'Nyan Win Htet',
      url: 'w2w',
    },
  ],
  creator: 'Nyan Win Htet',
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NProgressLoader />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
