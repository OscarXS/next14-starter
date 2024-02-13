import { connectToDb } from "./utils";

export const getPosts = async () => {
    try {
        connectToDb()
        const posts = await Post.find()
        return posts
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch posts: " + error)
    }
    return posts
}

export const getPost = async (slug) => {
    try {
        connectToDb()
        const posts = await Post.find()
        return posts
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch posts: " + error)
    }
    return posts
}

export const getUser = async (id) => {
    return users.find((user) => user.id === parseInt(id))
}