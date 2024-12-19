import type { NextPage } from 'next'
import Link from 'next/link'

const LandingPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the McGill Mental Health</h1>
      <p className="mb-8">For the best experience, please add this app to your home screen.</p>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">How to add to home screen:</h2>
        <div className="text-left">
          <h3 className="font-semibold">On iOS:</h3>
          <ol className="list-decimal list-inside">
            <li>Tap the share button</li>
            <li>Scroll down and tap &quot;Add to Home Screen&quot;</li>
          </ol>
        </div>
        <div className="text-left">
          <h3 className="font-semibold">On Android:</h3>
          <ol className="list-decimal list-inside">
            <li>Tap the menu button</li>
            <li>Tap &quot;Add to Home Screen&quot;</li>
          </ol>
        </div>
      </div>

      <Link href="/home" className="mt-8 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
        Continue to App
      </Link>
    </div>
  )
}

export default LandingPage

