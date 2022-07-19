import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  base: "./",
  build: {
    outDir: "../dist",
  },
  preview: {
    host: "0.0.0.0",
  },
});
