import { Router } from "express";
import {
    getMoviesController,
    getMoviesByIdController,
    addMoviesController,
    upsertMoviesController,
    patchMoviesController,
    deleteMoviesController
} from "../controllers/movies.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const moviesRouter = Router();

moviesRouter.get('/', ctrlWrapper(getMoviesController));
moviesRouter.get('/:id', ctrlWrapper(getMoviesByIdController));

moviesRouter.post('/', ctrlWrapper(addMoviesController));
moviesRouter.put('/:id', ctrlWrapper(upsertMoviesController));
moviesRouter.patch('/:id', ctrlWrapper(patchMoviesController));

moviesRouter.delete('/:id', ctrlWrapper(deleteMoviesController));

export default moviesRouter;