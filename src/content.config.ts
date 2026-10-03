import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Cada proyecto es un archivo .md dentro de src/content/proyectos
const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    titulo: z.string(),
    resumen: z.string(),
    fecha: z.coerce.date(),
    categoria: z.enum(['seguridad', 'web', 'software', 'electronica']),
    tecnologias: z.array(z.string()).default([]),
    demo: z.string().url().optional(),      // Enlace a la versión en vivo
    codigo: z.string().url().optional(),    // Enlace a GitHub
    imagen: z.string().optional(),          // Ruta dentro de /public, ej. /proyectos/grid.png
    imagenAlt: z.string().optional(),
    cliente: z.string().optional(),         // Para trabajos freelance
    destacado: z.boolean().default(false),  // Aparece en la página de inicio
    borrador: z.boolean().default(false),   // true = no se publica todavía
  }),
});

export const collections = { proyectos };
