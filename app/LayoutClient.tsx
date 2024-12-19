'use client'

import React from 'react'
import BottomNavbar from '../components/BottomNavbar'
import PWARedirect from '../components/PWARedirect'

export default function LayoutClient({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col min-h-screen">
            <PWARedirect />
            <main className="flex-grow overflow-auto">
                {children}
            </main>
            <BottomNavbar />
        </div>
    )
}

