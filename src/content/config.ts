import { defineCollection, z } from "astro:content";

const noticias = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(), 
    image: z.string().optional(),
    body: z.string().optional()
  }),
});

export const collections = {
  noticias,
};
