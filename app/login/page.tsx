import type { NextPage } from 'next'
import SignupForm from "@/components/signup-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const LoginPage: NextPage = () => {
  return (
    <div className="relative flex h-[calc(100vh-3rem)]">
      {/* Left */}
      <section className="relative hidden h-full w-1/2 bg-zinc-900 p-8 lg:block">
        {/* Some image here */}
      </section>
      
      {/* Right */}
      <section className="flex w-full items-center justify-center p-16 lg:w-1/2">
        <Card className="flex w-[32rem] flex-col justify-center space-y-6">
          <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>
              Enter your username, email, and password to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SignupForm />
          </CardContent>
          <CardFooter>
            <p className="w-full px-8 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="underline underline-offset-4 hover:text-primary"
              >
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </section>
    </div>
  )
}

export default LoginPage

