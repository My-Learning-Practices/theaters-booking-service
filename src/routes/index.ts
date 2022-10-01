import { Router } from "express";
import addMovie from "./addMovie";
import addtheater from "./addTheater";
import addShow from "./addShow";
import ticketRouter from "./tickets";
import search from "./search";

const router = Router();

router.post("/addMovie", addMovie);
router.post("/addShow", addShow);
router.post("/addTheater", addtheater);

router.get("/search", search);

router.use("/ticket", ticketRouter);

export default router;
