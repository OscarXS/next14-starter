const { default: mongoose } = require("mongoose")

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MON);
    } catch (error) {
        handleError(error);
    }
}