const { default: mongoose } = require("mongoose");

const connection = {}

export const connectToDb = async () => {
    try {
        if(connection.isConnected) {
            console.log("Using existing connection");
            return
        }
        const db = await mongoose.connect(process.env.MONGO);
        con
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}