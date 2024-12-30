import type { NextPage } from 'next'

const LoginPage: NextPage = () => {
  return (
    <div className="relative flex h-[calc(100vh-3rem)]">
      {/* Left */}
      <section className="relative hidden h-full w-1/2 bg-zinc-900 p-8 lg:block">
        {/* Image */}
      </section>
      
      {/* Right */}
      <section className="flex w-full items-center justify-center p-16 lg:w-1/2">
        <h1>Form here</h1>
      </section>
    </div>
  )
}

export default LoginPage

