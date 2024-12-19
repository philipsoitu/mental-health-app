import type { NextPage } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'

const HomePage: NextPage = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Welcome to Your Mental Health Companion</h1>
            <p className="mb-4">This app is designed to help you track your mental health, access resources, and perform self-assessments.</p>
            <div className="space-y-2">
                <Link href="/calendar" className="block text-blue-600 hover:underline">View Calendar</Link>
                <Link href="/resources" className="block text-blue-600 hover:underline">Access Resources</Link>
                <Link href="/assessment" className="block text-blue-600 hover:underline">Take Self-Assessment</Link>
                <Link href="/account" className="block text-blue-600 hover:underline">Manage Account</Link>
            </div>
        </div>
    )
}

export default HomePage

