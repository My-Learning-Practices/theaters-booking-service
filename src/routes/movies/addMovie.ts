import { RequestHandler, Request, Response } from "express";

const movie = require("../../database/schemas/movie");

const addMovie: RequestHandler = async (req: Request, res: Response) => {
  const movieDetails = req.body?.movieDetails;
  try {
    const newMovie = await movie.create(movieDetails);
    console.log(newMovie);
    return res.status(200).json(newMovie);
  } catch (error) {
    console.log(error);
    res.status(501).end("Database Error occured");
  }
};

export default addMovie;
