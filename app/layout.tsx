import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const font = Roboto({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'BCLabs',
  description: 'BCLabs Assessment',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={cn(
          'h-screen bg-black text-white md:ml-24 md:mr-24 2xl:ml-56 2xl:mr-56 bg-no-repeat bg-cover bg-center bg-[url("/bg_home.jpeg")] ',
        )}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
