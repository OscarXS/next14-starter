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
        min: 6
    },
    img: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},{ timestamps: true })

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    img: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},{ timestamps: true })