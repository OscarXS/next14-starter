import { register } from '@/lib/actions'
import styles from './register.module.css'

const RegisterPage = () => {
  return (
    <div>
      <form className={styles.} action={register}>
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