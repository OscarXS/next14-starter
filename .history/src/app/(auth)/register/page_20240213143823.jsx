import styles from "./register.module.css";
import RegisterForm from "@/components/registerForm/registerForm";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper} style={{ width: '500px'; }}>
        <RegisterForm/>
      </div>
    </div>
  );
};

export default RegisterPage;