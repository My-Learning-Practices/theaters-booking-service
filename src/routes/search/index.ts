import { RequestHandler, Response, Request } from "express";
import findMovies from "./findMovies";
import findTheaters from "./findTheater";

export const search: RequestHandler = async (req: Request, res: Response) => {
  const searchString = req.query?.searchString;
  const searchCategory = req.query?.searchIn;

  if (searchCategory === "Movies") res.send(await findMovies(searchString));
  else if (searchCategory === "Theaters")
    return res.send(await findTheaters(searchString));
  else return res.status(403).json({ message: "Wrong Category selected" });
};
