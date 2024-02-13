import { auth, signIn } from '@/lib/auth'
import React from 'react'

const LoginPage = async () => {
  const session = await auth();
  
  console.log(session);

  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with GitHub</button>
      </form>
    </div>
  )
}

export default LoginPage