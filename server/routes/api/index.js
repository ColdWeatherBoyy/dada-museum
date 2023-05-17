import { Router } from "express";
import testRoutes from "./test.js";

const router = Router();

router.use("/tests", testRoutes);

export default router;