import './globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Navigation from '@/component/navigation/Navigation';

const myFont = localFont({
  src: [
    {
      path: '../public/fonts/telma/Telma-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../public/fonts/telma/Telma-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/telma/Telma-Light.woff2',
      weight: '300',
      style: 'light',
    },
    {
      path: '../public/fonts/telma/Telma-Medium.woff2',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../public/fonts/bonny/Bonny-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../public/fonts/bonny/Bonny-Regular.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/bonny/Bonny-Light.woff2',
      weight: '400',
      style: 'light',
    },
    {
      path: '../public/fonts/bonny/Bonny-Medium.woff2',
      weight: '600',
      style: 'medium',
    },
    {
      path: '../public/fonts/bonny/Bonny-Thin.woff2',
      weight: '300',
      style: 'thin',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Jessy weds Inyene',
  description: 'The wedding of Jessica and Inyeneobong 2023 December 02',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
