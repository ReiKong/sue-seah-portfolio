import type { Metadata } from 'next'
import { Manrope } from '@next/font/google'
import './globals.css'

const manrope = Manrope({ 
  weight: ['600', '700', '800'],
  variable: '--font-manrope',
  style: ['normal'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Sue Seah',
  description: 'Architect',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${manrope.variable} font-manrope`}>
      <body>{children}</body>
    </html>
  )
}
