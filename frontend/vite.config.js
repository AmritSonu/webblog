import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/blogposts": "webblog-blond.vercel.app",
    },
  },
  plugins: [react()],
});
