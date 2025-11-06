import express from 'express';
import cors from 'cors';
import { getEnvVar } from './utils/getEnvVar.js';
import { getMovies, getMoviesById } from './services/movies.js';

export const startServer = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.get('/', (req, res) => {
        res.json({
            message: 'Server start successfully'
        })
    });

    app.get('/api/movies', async (req, res) => {
        const data = await getMovies();

        res.json({
            status: 200,
            data
        })
    });

    app.get('/api/movies/:id', async (req, res) => {
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
    });

    app.use((req, res) => {
        res.status(404).json({
            message: `${req.url} not found`
        })
    });

    app.use((error, req, res, next) => {
        res.status(500).json({ message: error.message })
    });

    const PORT = Number(getEnvVar('PORT'));

    app.listen(PORT, () => console.log(`Start server on ${PORT} port`));
};