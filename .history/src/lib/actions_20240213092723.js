import { connectToDb } from "./utils";

export const addPost = async (formData) => {
    "use server"

    const { title, desc, slug, userId } = Object.fromEntries(formData);
    
    try {
        connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        });

        await newPost.
    } catch (error) {
        
    }
}