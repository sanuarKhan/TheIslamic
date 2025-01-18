import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target:
          mode === "production"
            ? "https://theislamic.onrender.com"
            : "http://localhost:5050",
        changeOrigin: true,
        secure: false,
      },
    },
  },
}));
