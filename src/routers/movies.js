import { Router } from "express";
import { getMoviesController, getMoviesByIdController } from "../controllers/movies.js";

const moviesRouter = Router();

moviesRouter.get('/', getMoviesController);
moviesRouter.get('/:id', getMoviesByIdController);

export default moviesRouter;