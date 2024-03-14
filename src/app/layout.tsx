import NavBar from '@/global/NavBar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
        <title>una community</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <NavBar />
        <section>{children}</section>
        <div
          dangerouslySetInnerHTML={{
            __html: `'<!-- !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->'`,
          }}
        />
      </body>
    </html>
  )
}
