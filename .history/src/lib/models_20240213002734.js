import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: stringify,
        required: true,
        unique: true,
        
    }
})