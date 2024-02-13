const { default: mongoose } = require("mongoose")

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env);
    } catch (error) {
        handleError(error);
    }
}