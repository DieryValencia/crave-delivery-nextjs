import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Crave & Co - Food Delivery',
  description: 'Order your favorite meals from Crave & Co - Fast delivery, fresh food',
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-body-lg text-on-background antialiased overflow-x-hidden bg-surface">
        {children}
      </body>
    </html>
  )
}
