import styles from './home.module.css'

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1>Creative Thoughts Agency</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aliquam perferendis quasi fugit temporibus, totam blanditiis sequi.</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
    </div>
    <div className={styles.brands}>
      <Image src='./'
    </div>
    <div className={styles.imgContainer}></div>
  </div>;
};

export default Home;