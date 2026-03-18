import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Feel the Fit by MaLisa | Personal Training & Fitness Studio | Hamilton, NJ',
  description: 'Transform your body and life with personalized fitness training at Feel the Fit by MaLisa in Hamilton, NJ. One-on-one training, nutrition coaching, and group fitness classes.',
  keywords: ['personal trainer Hamilton NJ', 'fitness studio', 'personal training', 'nutrition coaching', 'group fitness', 'weight loss', 'Hamilton New Jersey'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}