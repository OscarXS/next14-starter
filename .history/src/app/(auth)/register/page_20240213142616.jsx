import React from 'react'

const RegisterPage = () => {
  return (
    <div>
      <form action={re}>
        <input type="text" name="username" placeholder="username" />
        <input type="text" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <input type="password" name="password again" placeholder="passwordRepeat" />
        <button>Register</button>
      </form>
    </div>
  )
}

export default RegisterPage