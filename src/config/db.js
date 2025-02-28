import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const mongoConnect = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB connected: ${mongoConnect.connection.host}`);

    } catch (error) {
        console.log("MongoDB connection error:", error);
    }
};