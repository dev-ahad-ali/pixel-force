import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { projectSchema } from "./schema/projectSchema";
import { blogSchema } from "./schema/blogSchema";

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

export const collections = {
    projects,
    blog,
};
