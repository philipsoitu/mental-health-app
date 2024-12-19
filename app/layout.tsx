import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import BottomNavbar from '../components/BottomNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mental Health PWA',
  description: 'A Progressive Web App for mental health tracking and resources',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <main className="flex-grow overflow-auto">
          {children}
        </main>
        {/* Render BottomNavbar on all pages except the landing page */}
        {typeof window !== 'undefined' && window.location.pathname !== '/' && <BottomNavbar />}
      </body>
    </html>
  )
}

