import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: string,
        required: true,
        unique: true,
        min: 3,
        max: 20
    },
    email: {
        type: string,
        
    }
})