import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "vitepress-plugin-mermaid-xyxsw/Mermaid.vue": path.join(
        __dirname,
        "../dist/Mermaid.vue"
      ),
    },
  },
  server: {
    fs: {
      allow: ["../../"],
    },
  },
});
