import { Router } from "express";
import { getHealthInfo } from "../controllers/health.controller";

const router = Router();

router.get("/", getHealthInfo);

export default router;