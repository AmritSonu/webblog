import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/blogposts": {
        target: "webblog-blond.vercel.app", // Replace with your actual backend URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/blogposts/, ""),
      },
    },
  },
  plugins: [react()],
});
