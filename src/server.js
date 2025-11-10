import express from 'express';
import cors from 'cors';
import { getEnvVar } from './utils/getEnvVar.js';
import { notFound } from './middlewares/notFound.js';
import { errorHandler } from './middlewares/errorHandler.js';
import moviesRouter from './routers/movies.js';

export const startServer = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.get('/', (req, res) => {
        res.json({
            message: 'Server start successfully'
        })
    });

    app.use('/api/movies', moviesRouter);

    app.use(notFound);
    app.use(errorHandler);

    const PORT = Number(getEnvVar('PORT'));

    app.listen(PORT, () => console.log(`Start server on ${PORT} port`));
};

// 35хв вебінар