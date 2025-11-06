import mongoose from "mongoose";
import { getEnvVar } from '../utils/getEnvVar.js';

export const initMongoConnection = async () => {
    try {
        const password = getEnvVar('DB_PASSWORD');
        await mongoose.connect(`mongodb+srv://Nikolay:${password}@cluster0.dtqps.mongodb.net/my-movies?appName=Cluster0`)
        console.log('Connection successfully to mongoDB');
    } catch (error) {
        console.log(error);
        throw error;
    }
};  