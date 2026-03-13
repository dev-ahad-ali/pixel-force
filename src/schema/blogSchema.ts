import { z } from "astro/zod";

export const blogSchema = z.object({
    title: z.string(),
    slug: z.string(),
    excerpt: z.string(),
    author: z.string(),
    authorRole: z.string(),
    authorImage: z.string(),
    coverImage: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    readingTime: z.number(),
    publishedAt: z.date(),
    featured: z.boolean().default(false),
});
