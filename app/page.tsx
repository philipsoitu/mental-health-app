import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">McGill Mental Health Support</h1>
      <div className="grid gap-4">
        <Link href="/crisis-support">
          <Button className="w-full py-6 text-lg">Crisis Support & Resources</Button>
        </Link>
        <Link href="/self-assessment">
          <Button className="w-full py-6 text-lg">Self-Assessment Tool</Button>
        </Link>
        <Link href="/account">
          <Button className="w-full py-6 text-lg">My Account</Button>
        </Link>
      </div>
    </div>
  )
}

