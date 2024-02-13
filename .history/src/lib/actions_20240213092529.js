import { connectToDb } from "./utils";

export const addPost = async (formData) => {
    "use server"

    const { title, desc, slug, userId } = Object.fromEntries(formData);

    connectToDb)_
}