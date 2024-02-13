import Image from 'next/image'
import styles from 'ab'

const page = () => {
  return (
    <div>
      <div className={styles.imageContainer}></div>
      <Image src="/about.png" alt='' />
    </div>
  )
}

export default page