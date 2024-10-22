import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

const connectionString = process.env.mongoURI;
const connectDB = async ()=>{
    try {
        await mongoose.connect(connectionString);
        console.log('MongoDB connected...')
    } catch (error) {
       console.error(error)
       process.exit(1) 
    }
}

export default connectDB;