import { Router } from "express";

const router = Router();

// /api/aic/
router.get("/", async (req, res) => {
	const aicURL = `https://api.artic.edu/api/v1/artists?page=2&limit=10`;
	const headers = {
		"AIC-User-Agent": "dada-museum-project (elias.spector.zabusky@gmail.com)",
	};
	const response = await fetch(aicURL, { headers });
	const data = await response.json();
	res.json(data);
});

export default router;
