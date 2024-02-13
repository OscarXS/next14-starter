export const getPosts = async () => {
    try {
        
    } catch (error) {
        console.log(error);
        throw new Error
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