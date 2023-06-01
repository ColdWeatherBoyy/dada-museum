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
	const aicURL = `https://api.artic.edu/api/v1/artworks/search?q=marcel%20duchamp&limit=100&fields=id,title,image_id,artist_title,date_display,date_end,thumbnail`;
	const headers = {
		"AIC-User-Agent": "dada-museum-project (elias.spector.zabusky@gmail.com)",
	};
	const response = await fetch(aicURL, { headers });
	const data = await response.json();
	res.json(data);
});

// /api/aic/man-ray
router.get("/man-ray", async (req, res) => {
	const aicURL = `https://api.artic.edu/api/v1/artworks/search?q=emmanuel%20radnitzky&limit=100&fields=id,title,image_id,artist_title,date_display,date_end,thumbnail`;
	const headers = {
		"AIC-User-Agent": "dada-museum-project (elias.spector.zabusky@gmail.com)",
	};
	const response = await fetch(aicURL, { headers });
	const data = await response.json();
	res.json(data);
});

// /api/aic/francis-picabia
router.get("/francis-picabia", async (req, res) => {
	const aicURL = `https://api.artic.edu/api/v1/artworks/search?q=francis%20picabia&limit=100&fields=id,title,image_id,artist_title,date_display,date_end,thumbnail`;
	const headers = {
		"AIC-User-Agent": "dada-museum-project (elias.spector.zabusky@gmail.com)",
	};
	const response = await fetch(aicURL, { headers });
	const data = await response.json();
	res.json(data);
});

// /api/aic/kurt-schwitters
router.get("/kurt-schwitters", async (req, res) => {
	const aicURL = `https://api.artic.edu/api/v1/artworks/search?q=kurt%20schwitters&limit=100&fields=id,title,image_id,artist_title,date_display,date_end,thumbnail`;
	const headers = {
		"AIC-User-Agent": "dada-museum-project (elias.spector.zabusky@gmail.com)",
	};
	const response = await fetch(aicURL, { headers });
	const data = await response.json();
	res.json(data);
});

// /api/aic/jean-arp
router.get("/jean-arp", async (req, res) => {
	const aicURL = `https://api.artic.edu/api/v1/artworks/search?q=jean%20arp&limit=100&fields=id,title,image_id,artist_title,date_display,date_end,thumbnail`;
	const headers = {
		"AIC-User-Agent": "dada-museum-project (elias.spector.zabusky@gmail.com)",
	};
	const response = await fetch(aicURL, { headers });
	const data = await response.json();
	res.json(data);
});

// /api/aic/max-ernst
router.get("/max-ernst", async (req, res) => {
	const aicURL = `https://api.artic.edu/api/v1/artworks/search?q=max%20ernst&limit=100&fields=id,title,image_id,artist_title,date_display,date_end,thumbnail`;
	const headers = {
		"AIC-User-Agent": "dada-museum-project (elias.spector.zabusky@gmail.com)",
	};
	const response = await fetch(aicURL, { headers });
	const data = await response.json();
	res.json(data);
});

export default router;
