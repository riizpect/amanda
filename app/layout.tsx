import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EuroHorse 2026 - Din Julklapp',
  description: 'En speciell present till Amanda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  )
}

