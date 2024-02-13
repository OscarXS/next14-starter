import styles from './home.module.css'

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1>Creative Thoughts Agency</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quaerat voluptatum impedit reprehenderit ex sunt at, dolor voluptatibus nam laudantium eos molestiae perspiciatis quibusdam aut, mollitia nulla fuga quidem deserunt.
      Ducimus consequatur accusantium ut architecto eligendi fuga, quibusdam aspernatur voluptatum nobis debitis. Minus sed mollitia laboriosam iste expedita repudiandae quasi placeat, debitis molestias eum animi! Doloremque sequi aliquid nam modi!</p>
    </div>
    <div className={styles.imgContainer}></div>
  </div>;
};

export default Home;