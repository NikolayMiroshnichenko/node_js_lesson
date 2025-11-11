import e from "express";
import MovieCollection from "../db/models/Movie.js";

export const getMovies = () => MovieCollection.find();
export const getMoviesById = (id) => MovieCollection.findOne({ _id: id });
// export const getMoviesById = (id) => MovieCollection.findById(id);

export const addMovies = (payload) => MovieCollection.create(payload);

export const updateMovies = async (id, payload, options = {}) => {
    const { upsert = false } = options;
    const resultData = await MovieCollection.findOneAndUpdate({ _id: id }, payload, {
        new: true,
        upsert,
        includeResultMetadata: true
    });

    // 3 аргумент налаштувань
    // new - щоб поверталося з бази оновленний обʼєкт, якщо не передати база оновлюється, але приходить старий обʼєкт
    // upsert - це коли не знайдено створює новий
    // includeResultMetadata - повний або скорочений варіант відповіді

    if (!resultData || !resultData.value) return null;

    return {
        data: resultData.value,
        isNew: Boolean(resultData.lastErrorObject.upserted)
    };
};

export const deleteMovieById = (id) => MovieCollection.findOneAndDelete({ _id: id });


