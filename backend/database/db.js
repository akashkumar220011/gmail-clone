import mongoose from "mongoose";

// Function to establish connection with the MongoDB database
const Connection = async () => {
    try {
        // Connecting to the MongoDB database
        await mongoose.connect("mongodb://localhost:27017/gmailClone", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to the database successfully!");
    } catch (error) {
        // Handling connection errors
        console.log('Error while connecting to the database', error.message);
    }
};

export default Connection;
