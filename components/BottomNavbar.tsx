'use client'

import { Calendar, Book, Brain, User, Home } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
    { icon: Home, label: 'Home', href: '/home' },
    { icon: Calendar, label: 'Calendar', href: '/calendar' },
    { icon: Book, label: 'Resources', href: '/resources' },
    { icon: Brain, label: 'Assessment', href: '/assessment' },
    { icon: User, label: 'Account', href: '/account' },
]

const BottomNavbar: React.FC = () => {
    const pathname = usePathname()

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
            <div className="flex justify-around">
                {navItems.map(({ icon: Icon, label, href }) => (
                    <Link
                        key={href}
                        href={href}
                        className={`flex flex-col items-center p-2 ${pathname === href ? 'text-blue-600' : 'text-gray-600'
                            }`}
                    >
                        <Icon className="w-6 h-6" />
                        <span className="text-xs mt-1">{label}</span>
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default BottomNavbar

