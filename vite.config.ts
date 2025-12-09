import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,woff2}"]
      },
      manifest: {
        name: "Cipherhub - Cifrados Clásicos",
        short_name: "Cipherhub",
        description:
          "Una aplicación de cifrados clásicos modular y escalable.",
        theme_color: "#06ea4a",
        background_color: "#0f2315",
        display: "standalone",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "/favicon/cipherhub-logo.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "any maskable"
          }
        ]
      }
    })
  ],
  build: {
    outDir: "dist"
  }
});
