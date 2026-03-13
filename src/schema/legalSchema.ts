import { z } from "astro/zod";

export const legalSchema = z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    lastUpdated: z.date(),
});
