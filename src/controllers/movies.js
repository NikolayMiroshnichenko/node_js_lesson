import createHttpError from 'http-errors';
import { getMovies, getMoviesById, addMovies, updateMovies, deleteMovieById } from '../services/movies.js';

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
};

export const addMoviesController = async (req, res) => {
    const data = await addMovies(req.body);

    res.status(201).json({
        status: 201,
        data: data
    });
}

export const upsertMoviesController = async (req, res) => {
    const { id } = req.params;
    const { data, isNew } = await updateMovies(id, req.body, { upsert: true });

    if (!data) {
        throw createHttpError(404, `Movie with id=${id} not found`);
    };

    const status = isNew ? 201 : 200;

    res.status(status).json({
        status: status,
        data
    })
}

export const patchMoviesController = async (req, res) => {
    const { id } = req.params;
    const result = await updateMovies(id, req.body);

    if (!result) {
        throw createHttpError(404, `Movie with id=${id} not found`);
    };

    res.json({
        status: 200,
        data: result.data
    })
};

export const deleteMoviesController = async (req, res) => {
    const { id } = req.params;
    const data = await deleteMovieById(id);

    if (!data) {
        throw createHttpError(404, `Movie with id=${id} not found`);
    };

    res.status(204).send();
}