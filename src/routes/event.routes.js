import { Router } from "express";
import { createNewEvent, getEvents, getOneEvent } from "../controllers/event.controller.js";

const router = Router();

router.get("/", getEvents);
router.get("/:id", getOneEvent);
router.post("/", createNewEvent)

export default router;  