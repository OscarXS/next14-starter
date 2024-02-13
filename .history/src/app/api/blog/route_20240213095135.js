import { Post } from "@/lib/models"
import { connectToDb } from "@/lib/utils"

export const getRequest = async (request) => {
    try {
        connectToDb()

        const posts = await Post.find()
        return Next
    } catch (error) {
        
    }
}