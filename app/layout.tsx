import type { Metadata } from 'next';
import { ReactCompilerOptions } from 'next/dist/server/config-shared';

export const metadata: Metadata = {
  title: 'WINONA',
  description: 'Personal site of @winneon.',
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}