import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Divanshu Raghav — Computer Science Student & Aspiring Software Engineer',
  description:
    'Portfolio of Divanshu Raghav, a B.Tech Computer Science student building strong foundations in programming, data structures and algorithms, and software development.',
  generator: 'v0.app',
  authors: [{ name: 'Divanshu Raghav' }],
  keywords: ['Divanshu Raghav', 'portfolio', 'B.Tech', 'Computer Science', 'software engineer', 'student'],
  openGraph: {
    title: 'Divanshu Raghav — Portfolio',
    description: 'B.Tech Computer Science student and aspiring software engineer.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1222' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
