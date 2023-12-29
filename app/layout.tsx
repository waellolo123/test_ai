import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import {ClerkProvider} from "@clerk/nextjs";
import { ModalProvider } from '@/components/model-provider';
import TosterProvider from '@/components/TosterProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rumble',
  description: 'AI platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ModalProvider />
          <TosterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}

  