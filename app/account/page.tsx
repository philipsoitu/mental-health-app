'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function Account() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // Here you would typically validate the credentials against a backend
    // For this example, we'll just set isLoggedIn to true
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
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
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

