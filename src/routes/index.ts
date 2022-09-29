import { Router } from "express";
import addMovie from "./addMovie";

const router = Router();

router.post("/addMovie", addMovie);

export default router;
