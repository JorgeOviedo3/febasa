// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      watch: {
        ignored: ["**/.claude/**"],
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
});
