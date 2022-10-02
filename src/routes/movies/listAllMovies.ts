import { RequestHandler, Request, Response } from "express";

const movie = require("../../database/schemas/movie");

const listAllMovies: RequestHandler = async (req: Request, res: Response) => {
  try {
    res.send(await movie.find()).status(200);
  } catch (error) {
    console.log(error);
  }
};

export default listAllMovies;
