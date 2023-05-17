import { Router } from "express";

const router = Router();

// /api/tests/
router.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
});

export default router;