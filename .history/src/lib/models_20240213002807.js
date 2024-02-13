import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: stringify,
        required: true,
        unique: true,
        min: 3,
        max: 20
    },
    email
})