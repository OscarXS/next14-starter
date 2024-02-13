import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>oscar blog project</div>
      <div className={styles.text}>Copywrite </div>
    </div>
  )
}

export default Footer