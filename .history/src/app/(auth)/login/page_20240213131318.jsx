import { signIn } from '@/lib/auth'
import React from 'react'

const LoginPage = () => {
  const session = async () => {
    
  }

  const handleGithubLogin = async () => {
    "use server"

    await signIn("github")
  }
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with GitHub</button>
      </form>
    </div>
  )
}

export default LoginPage