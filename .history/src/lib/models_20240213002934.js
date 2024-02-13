import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min: 50
    },
    password: {
        type: String,
        required: true,
        unique: true,
        min: 6
    }
})