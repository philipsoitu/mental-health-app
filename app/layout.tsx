import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'McGill Mental Health PWA',
  description: 'Mental Health support for McGill nurses',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-100">
          {children}
        </div>
      </body>
    </html>
  )
}

