import type { NextPage } from 'next'

const LoginPage: NextPage = () => {
  return (
    <div>
      <h1>
          Log in
      </h1>
      <form>
        <label>
          Email
          <input type="email" />
        </label>
        <label>
          Password
          <input type="password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default LoginPage

