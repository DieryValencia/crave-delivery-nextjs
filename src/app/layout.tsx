import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Crave & Co - Food Delivery',
  description: 'Order your favorite meals from Crave & Co - Fast delivery, fresh food',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className="font-body-lg text-on-background antialiased overflow-x-hidden bg-surface">
        {children}
      </body>
    </html>
  )
}
