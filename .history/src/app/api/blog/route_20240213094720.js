import { Post } from "@/lib/models"
import { connectToDb } from "@/lib/utils"

export const getRequest = async (request) => {
    try {
        connectToDb()

c   onst posts = await Post().find()    
    } catch (error) {
        
    }
}