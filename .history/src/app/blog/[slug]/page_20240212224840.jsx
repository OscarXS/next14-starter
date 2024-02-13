import styles from './singlePost.module.css'

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}></div>
      <div className={styles.textContainer}></div>
    </div>
  )
}

export default page