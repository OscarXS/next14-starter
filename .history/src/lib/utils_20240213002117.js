const { default: mongoose } = require("mongoose")

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
    } catch (error) {
        gl
    }
}