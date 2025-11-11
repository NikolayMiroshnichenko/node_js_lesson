import createHttpError from 'http-errors';
import { getMovies, getMoviesById } from '../services/movies.js';

export const getMoviesController = async (req, res) => {
    const data = await getMovies();

    res.json({
        status: 200,
        data
    });
};

export const getMoviesByIdController = async (req, res) => {
    const { id } = req.params;
    const data = await getMoviesById(id);

    if (!data) {
        throw createHttpError(404, `Movie with id=${id} not found`);
    };

    res.json({
        status: 200, data
    });

}