const { default: mongoose } = require("mongoose");

const connection = {}

export const connectToDb = async () => {
    try {
        if(connection.isConnected) {
            console.log("Using existing connection");
            return
        }

        await mongoose.connect(process.env.MONGO);
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}