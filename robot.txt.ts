import type { APIRoute } from "astro";

// enabling indexing based on .env
const isIndexingEnable = import.meta.env.ENABLE_INDEXING === "true";

// Astro exposes the `site` value from astro.config.mjs as SITE
const siteUrl = import.meta.env.SITE ?? import.meta.env.SITE_URL;

const blocked = `\
User-agent: *
Disallowed: /
`;

const allowed = `\
User-agent: *
Disallowed:

User-agent: *
Disallowed: /legal/


Sitemap: ${siteUrl}/sitemap-index.xml
`;

export const GET: APIRoute = () => {
    return new Response(isIndexingEnable ? allowed : blocked, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            // Prevent CDN / edge caching of this file
            "Cache-Control": "no-store",
        },
    });
};
