import { handleGithubLogin } from '@/lib/actions';

const LoginPage = async () => {
  
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