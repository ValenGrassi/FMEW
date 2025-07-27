import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import md from 'vite-plugin-md';
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  vite: {
    plugins: [md()],
  },
  content: {
    // opcional: podes poner collections acá si querés importar
    // collections: import('./src/content/config.ts')
  },
});
