import { Router } from "express";
import addMovie from "./addMovie";
import listAllMovies from "./listAllMovies";

const router = Router();

router.post("/addMovie", addMovie);
router.get("/all", listAllMovies);

export default router;
