import { Router } from "express";
import addMovie from "./addMovie";
import addtheater from "./addTheater";
import addShow from "./addShow";
import ticketRouter from "./tickets";

const router = Router();

router.post("/addMovie", addMovie);
router.post("/addShow", addShow);
router.post("/addTheater", addtheater);
router.use("/ticket", ticketRouter);

export default router;
