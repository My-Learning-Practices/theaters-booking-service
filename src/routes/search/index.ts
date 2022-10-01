import { RequestHandler, Response, Request } from "express";
import findMovies from "./findMovies";
import findTheaters from "./findTheater";

const search: RequestHandler = async (req: Request, res: Response) => {
  const searchString = req.query?.searchString;
  const searchCategory = req.query?.searchIn;

  console.log(`Search: ${searchString} && searchCategory: ${searchCategory}`);

  if (searchCategory === "Movie") res.send(await findMovies(searchString));
  else if (searchCategory === "Theater")
    res.send(await findTheaters(searchString));
  else res.status(403).json({ message: "Wrong Category selected" });
};

export default search;
