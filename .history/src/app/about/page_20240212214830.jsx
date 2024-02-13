import Image from 'next/image'
import styles from './about.module.css'

const page = () => {
  return (
    <div>
      <div className={styles.ima}></div>
      <Image src="/about.png" alt='' />
    </div>
  )
}

export default page