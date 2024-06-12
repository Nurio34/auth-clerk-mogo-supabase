import mongoose from "mongoose";

async function connectDB() {
    mongoose
        .connect(process.env.MONGO_URL!)
        .then(() => console.log("Connected to DB"))
        .catch((e) =>
            console.log("Unexpected error while 'Connecting to DB'", e),
        );
}

export default connectDB;
