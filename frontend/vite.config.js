import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://the-islamic-backend.vercel.app/", // Backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
