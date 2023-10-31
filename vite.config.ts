import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/quiz_app",
  server: {
    host: "localhost",
    port: 3035,
  },
  plugins: [react()],
});
