import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  // Eliminamos la configuración innecesaria de Vite
  content: {
    // opcional: podes poner collections acá si querés importar
    // collections: import('./src/content/config.ts')
  },
  server: {
    host: true, // bind to 0.0.0.0 so v0 preview can reach the dev server
    port: 4321,
  },
  vite: {
    server: {
      allowedHosts: 'all',
    }
  }
});
