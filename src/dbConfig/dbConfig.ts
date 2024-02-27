//connect to mongodb via mongoose
import mongoose from 'mongoose';


// mongoose.set('strictQuery', false);
const MONGO_URI = process.env.MONGO_URI;
export async function connectDB() {
    try {
        mongoose.connect(MONGO_URI!);
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log(`MongoDB Connected!`);
        })
        connection.on('error', (err) => {
            console.log('MongoDB connection error: ', err);
            process.exit();
        })
    } catch (error) {
        console.error('Error connecting to Mongo: ', error);
    }
}

