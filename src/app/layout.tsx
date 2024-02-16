import { roboto } from '@/fonts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Instagram',
    default: 'Instagram'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
