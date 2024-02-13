import { connectToDb } from "@/lib/utils"

export const getRequest = async (request) => {
    try {
        connectToDb()

    } catch (error) {
        
    }
}