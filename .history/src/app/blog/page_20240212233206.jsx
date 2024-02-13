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
  const posts

  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;