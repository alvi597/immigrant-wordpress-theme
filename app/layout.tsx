import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'immigrant | Dashboard',
  description: 'Created by Hasnain',
  generator: 'Hasnain',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
