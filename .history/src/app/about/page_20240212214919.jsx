import Image from 'next/image'
import styles from './about.module.css'

const page = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt='' fill />
      </div>
    </div>
  )
}

export default page