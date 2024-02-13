const { default: mongoose } = require("mongoose")

const connectToDb = async () => {
    try {
        await mongoose.connect(process.e);
    } catch (error) {
        handleError(error);
    }
}