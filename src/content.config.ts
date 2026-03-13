import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { projectSchema } from "./schema/projectSchema";

const projects = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/data/projects",
    }),
    schema: projectSchema,
});

export const collections = {
    projects,
};
