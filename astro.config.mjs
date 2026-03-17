// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: import.meta.env.SITE_URL,
    integrations: [sitemap()],
    vite: {
        plugins: [tailwindcss()],
    },
});
