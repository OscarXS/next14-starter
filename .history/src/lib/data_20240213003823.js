export const getPosts = async () => {
    try {
        connec
        const posts = await Post.find()

        return
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch posts: " + error)
    }
    return posts
}

export const getPost = async () => {
    const post = posts.find((post) => post.id === parseInt(id))
    return post
}

export const getUser = async () => {
    return users.find((user) => user.id === parseInt(id))
}