import { defineCollection, z } from "astro:content";

const noticias = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(), // o `z.date()` si usás formato ISO real
    image: z.string().optional(),
    buttons: z.array(
      z.object({
        label: z.string(),
        url: z.string(),
      })
    ).optional(),
    body: z.string().optional()
  }),
});

export const collections = {
  noticias,
};
