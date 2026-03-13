import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { projectSchema } from "./schema/projectSchema";
import { blogSchema } from "./schema/blogSchema";
import { legalSchema } from "./schema/legalSchema";

const projects = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/data/projects",
    }),
    schema: projectSchema,
});

const blog = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/data/blog",
    }),
    schema: blogSchema,
});

const legal = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/data/legal",
    }),
    schema: legalSchema,
});

export const collections = {
    projects,
    blog,
    legal,
};
