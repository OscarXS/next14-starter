import styles from './home.module.css'

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1>Creative Thoughts Agency</h1>
      <p>lorem*2</p>
    </div>
    <div className={styles.imgContainer}></div>
  </div>;
};

export default Home;