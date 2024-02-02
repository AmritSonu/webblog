import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/blogposts": "https://webblog-blond.vercel.app/",
    },
  },
  plugins: [react()],
});
