import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AquaTrack',
  description:
    'AquaTrack is a smart water tracking app that helps you stay hydrated by setting personalized goals, providing smart reminders, and offering insightful progress tracking. Start your journey to better hydration today!',
  icons: { icon: '/logo.svg' }
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
