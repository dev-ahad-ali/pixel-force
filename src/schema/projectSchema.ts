import { z } from "astro/zod";

export const projectSchema = z.object({
    title: z.string(),
    overview: z.string(),
    client: z.string(),
    image: z.string(),
    thumbnail: z.string(),
    category: z.string(),
    services: z.array(z.string()),
    technologies: z.array(z.string()),
    keyResults: z.array(
        z.object({
            metric: z.string(),
            value: z.string(),
            description: z.string(),
        }),
    ),
    featured: z.boolean().default(false),
    publishedAt: z.date(),
});
