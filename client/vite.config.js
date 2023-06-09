import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// Proxy set up for development server to connect to backend
export default defineConfig({
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
