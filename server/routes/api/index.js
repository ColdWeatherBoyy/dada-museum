import { Router } from "express";
import aicRoutes from "./aic.js";

const router = Router();

router.use("/aic", aicRoutes);

export default router;
