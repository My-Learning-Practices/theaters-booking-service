import { Router } from "express";
import movieRouter from "./movies";
import addtheater from "./theater";
import addShow from "./show";
import ticketRouter from "./tickets";
import search from "./search";

const router = Router();

router.post("/show/addShow", addShow);
router.post("/theater/addTheater", addtheater);

router.get("/search", search);

router.use("/movies", movieRouter);
router.use("/ticket", ticketRouter);

export default router;
