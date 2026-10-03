import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({

  site: 'https://portafolio-three-zeta-65.vercel.app/',
  vite: {
    plugins: [tailwindcss()],
  },
});
