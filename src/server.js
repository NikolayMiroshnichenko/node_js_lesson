import express from 'express';
import cors from 'cors';
import { getEnvVar } from './utils/getEnvVar.js';

export const startServer = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.get('/', (req, res) => {
        res.json({
            message: 'Server start successfully'
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