import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from "@/components/Navbar"
import {Footer} from '@/components/Footer';

const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400', '500', '600', '700'],
   variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'Eventura',
  description: 'Event management website',
  icons: {
    icon: '/public/vercel.svg' //kenapa gamau????
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        
      </body>
    </html>
  );
}
