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

// /api/aic/marcel-duchamp
router.get("/marcel-duchamp", async (req, res) => {
	const aicURL = `https://api.artic.edu/api/v1/artworks/search?q=marcel%20duchamp&limit=20&fields=id,title,image_id,artist_title,date_display,thumbnail`;
	const headers = {
		"AIC-User-Agent": "dada-museum-project (elias.spector.zabusky@gmail.com)",
	};
	const response = await fetch(aicURL, { headers });
	const data = await response.json();
	res.json(data);
});

// /api/aic/man-ray &limit=20&fields=id,title,image_id,artist_title,date_display,thumbnail
// router.get("/man-ray", async (req, res) => {
// 	const aicURL = `https://api.artic.edu/api/v1/artworks/search?q=man%20ray`;
// 	const headers = {
// 		"AIC-User-Agent": "dada-museum-project (elias.spector.zabusky@gmail.com)",
// 	};
// 	const response = await fetch(aicURL, { headers });
// 	const data = await response.json();
// 	res.json(data);
// });

export default router;
