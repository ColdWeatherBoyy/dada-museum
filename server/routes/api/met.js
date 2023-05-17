import { Router } from "express";

const router = Router();

// /api/met/
router.get("/", async (req, res) => {
	const metURL = `https://collectionapi.metmuseum.org/public/collection/v1/objects/899217`;
	const response = await fetch(metURL);
	const data = await response.json();
	res.json(data);
});

export default router;
