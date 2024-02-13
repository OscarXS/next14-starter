import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>oscar blog project</div>
      <div className={styles.text}>NextJS  &copy; 2024 - All rights reserved</div>
    </div>
  )
}

export default Footer