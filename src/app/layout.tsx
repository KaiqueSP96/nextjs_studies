import type { Metadata } from 'next';
import './globals.css';
import Menu from '@/app/components/menu';

export const metadata: Metadata = {
  title: 'NextJS Studies',
  description: 'Studies NextJS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
