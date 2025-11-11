import { Schema, model } from "mongoose";

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, { versionKey: false, timestamps: true });

const MovieCollection = model('movie', movieSchema);
export default MovieCollection;