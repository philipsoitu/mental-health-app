'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const PWARedirect: React.FC = () => {
    const router = useRouter()

    useEffect(() => {
        const isPWA = window.matchMedia('(display-mode: standalone)').matches
        if (isPWA && window.location.pathname === '/') {
            router.push('/home')
        }
    }, [router])

    return null
}

export default PWARedirect

