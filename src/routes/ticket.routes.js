import { Router } from "express";
import { getTickets, createNewTicket } from "../controllers/ticket.controller.js";

const router = Router();

router.get("/", getTickets);
router.post("/", createNewTicket);

export default router