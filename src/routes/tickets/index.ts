import { Router } from "express";
import bookTicket from "./bookTicket";
import rescheduleTicket from "./rescheduleticket";

const router = Router();

router.post("/booTikect", bookTicket);
router.post("/rescheduleTicket", rescheduleTicket);

export default router;
