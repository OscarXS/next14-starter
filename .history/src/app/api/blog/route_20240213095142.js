import { Post } from "@/lib/models"
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"

export const getRequest = async (request) => {
    try {
        connectToDb()

        const posts = await Post.find()
        return NextResponse()
    } catch (error) {
        
    }
}