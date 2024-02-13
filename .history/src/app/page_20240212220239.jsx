import styles from './home.module.css'

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1>Creative Thoughts Agency</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aliquam perferendis quasi fugit temporibus, totam blanditiis sequi.</p>
      <div className={styles.buttons}></div>
    </div>
    <div className={styles.imgContainer}></div>
  </div>;
};

export default Home;