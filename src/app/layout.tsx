import React from 'react';
import Layout from '@/components/Layout';
import '@/styles/globals.scss';
import { JetBrains_Mono } from 'next/font/google';

export const metadata = {
  title: "Işınsu Atay's Portfolio",
  description: "Creative full-stack developer portfolio with animation, Next.js, and modern UI/UX design.",
};

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-jetbrains',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className={jetbrainsMono.className} suppressHydrationWarning={true}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}