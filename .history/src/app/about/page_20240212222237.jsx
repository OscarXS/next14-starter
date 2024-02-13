import Image from 'next/image'
import styles from './about.module.css'

const About = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2>About Agency</h2>
          <h1>We create digital ideas that are bigger, bolder, braver and better</h1>
          <p></p>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default About