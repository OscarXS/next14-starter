import { Post } from "@/lib/models"
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"

export const getRequest = async (request, { params }) => {
    const { slug } = params
    try {
        connectToDb()

        const posts = await Post.findOne({slug})
        return NextResponse.json(posts)
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch posts")
    }
}