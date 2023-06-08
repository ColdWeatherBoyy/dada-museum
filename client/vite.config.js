import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	root: "./client",
	plugins: [react()],
	server: {
		proxy: {
			"/api/": {
				target: "http://localhost:3001",
				changeOrigin: true,
			},
		},
		watch: {
			usePolling: true,
		},
	},
});
