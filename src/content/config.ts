import { defineCollection, z } from "astro:content";

// Función para generar slug sin tildes ni caracteres especiales
function generarSlugDesdeTitulo(title: string): string {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ñ/g, "n")
    .replace(/Ñ/g, "N")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

const noticias = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    galeria: z.array(z.string()),
    image2: z.string(),
    video: z.string().optional()
  }),
  slug: ({ data }) => {
    const slug = generarSlugDesdeTitulo(data.title);
    console.log(`[Slug generado]:`, slug);
    return slug;
  },
  
});

export const collections = {
  noticias,
};
