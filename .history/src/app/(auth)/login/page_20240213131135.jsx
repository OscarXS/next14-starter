import React from 'react'

const LoginPage = () => {
  const handleGithubLogin = async () => {
    "use server"

    
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