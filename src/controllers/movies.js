import { getMovies, getMoviesById } from '../services/movies.js';

export const getMoviesController = async (req, res) => {
    const data = await getMovies();

    res.json({
        status: 200,
        data
    })
};

export const getMoviesByIdController = async (req, res) => {
    const { id } = req.params;
    const data = await getMoviesById(id);

    if (!data) {
        return res.status(404).json({
            status: 404,
            message: `Movie with id=${id} not found`
        });
    };

    res.json({
        status: 200,
        data
    })
}