import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')

  if(!res.ok) {
    throw new Error('Error with data')
  }

  return res.json
}

const BlogPage = async () => {

  // FETCH DATA WITH AN API
  const posts = await getData()
  console.log(posts);
  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      
    </div>
  );
};

export default BlogPage;