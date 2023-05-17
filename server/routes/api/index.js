import { Router } from "express";
import aicRoutes from "./aic.js";
import metRoutes from "./met.js";

const router = Router();

router.use("/aic", aicRoutes);
router.use("/met", metRoutes);

export default router;
