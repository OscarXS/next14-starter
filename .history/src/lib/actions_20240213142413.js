"use server"

import { revalidatePath } from "next/cache";
import { connectToDb } from "./utils";
import { Post } from "./models";
import { signIn, signOut } from "./auth";

export const addPost = async (formData) => {
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
        console.log(error);
    }
}

export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData);
    
    try {
        connectToDb();

        await Post.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath('/blog')
    } catch (error) {
        console.log(error);
    }
}

export const handleGithubLogin = async () => {
    "use server"
    await signIn("github")
}

export const handleGithubLogout = async () => {
    "use server"
    await signOut("github")
}

export const register = async (formData) => {
    const { username, email, password, passwordRepeat } = Object.fromEntries(formData);

    if(password !== passwordRepeat) {
        return "Password does not match"
    }
    
    try {
        connectToDb();

        co

        const newUser = new User({
            username,
            email,
            password
        });

        await newUser.save();
        console.log("saved to db");
    } catch (error) {
        console.log(error);
        return {error: "Something went wrong"}
    }
}