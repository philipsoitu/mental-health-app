'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function Account() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    // Explicitly type the event parameter as FormEvent for form submission
    const handleLogin = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        // Here you would typically validate the credentials against a backend
        // For this example, we'll just set isLoggedIn to true
        setIsLoggedIn(true)
    }

    const handleLogout = (): void => {
        setIsLoggedIn(false)
        setEmail('')
        setPassword('')
    }

    if (isLoggedIn) {
        return (
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">My Account</h1>
                <Card>
                    <CardHeader>
                        <CardTitle>Welcome, {email}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>You are logged in.</p>
                        <Button onClick={handleLogout} className="mt-4">Logout</Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Login</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Account Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <Input
                                type="email"
                                id="email"
                                value={email}
                                // Explicitly type the event parameter as ChangeEvent for input changes
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <Input
                                type="password"
                                id="password"
                                value={password}
                                // Explicitly type the event parameter as ChangeEvent for input changes
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <Button type="submit">Login</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
