import { revalidatePath } from "next/cache";
import { connectToDb } from "./utils";
import { Post } from "./models";

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

        await newPost.save();
        console.log("saved to db");
        revalidatePath('/blog')
    } catch (error) {
        
    }
}

export const deletePost = async (formData) => {
    "use server"

    const { id } = Object.fromEntries(formData);
    
    try {
        connectToDb();

        await Post.findB();
        console.log("saved to db");
        revalidatePath('/blog')
    } catch (error) {
        
    }
}