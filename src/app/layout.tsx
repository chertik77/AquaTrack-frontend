import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import { Poppins } from 'next/font/google'

import './globals.css'

import { cn } from '@/utils'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'AquaTrack',
  description:
    'AquaTrack is a smart water tracking app that helps you stay hydrated by setting personalized goals, providing smart reminders, and offering insightful progress tracking. Start your journey to better hydration today!',
  icons: { icon: '/logo.svg' }
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body
        className={cn(
          poppins.className,
          'container my-4 text-base font-bold tablet:my-8 tablet:text-md'
        )}>
        {children}
      </body>
    </html>
  )
}
