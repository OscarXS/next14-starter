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
        const post = await Post.find({slug})
        return post
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch post: " + error)
    }
    return posts
}

export const getUser = async (id) => {
    try {
        connectToDb()
        const user = await User.findById(id)
        return user
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch user: " + error)
    }
    return posts
}

export const getUser = async (id) => {
    try {
        connectToDb()
        const user = await User.findById(id)
        return user
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch user: " + error)
    }
    return posts
}

export const getUser = async (id) => {
    try {
        connectToDb()
        const user = await User.findById(id)
        return user
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch user: " + error)
    }
    return posts
}