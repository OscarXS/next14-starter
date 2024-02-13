import Image from 'next/image'
import styles from './about.module.css'

const page = () => {
  return (
    <div>
      <div className={styles.image}></div>
      <Image src="/about.png" alt='' />
    </div>
  )
}

export default page