# Portafolio

Portafolio personal con estética Tron, hecho con Astro y Tailwind CSS.

## Ejecutar

```bash
npm install
npm run dev
```

Abre http://localhost:4321

## Dónde editar

- `src/config.ts`: tu nombre, rol, correo, GitHub y LinkedIn.
- `src/content/proyectos/`: un archivo `.md` por proyecto.
- `src/pages/sobre-mi.astro`: tu presentación y herramientas.
- `src/styles/global.css`: colores y fuentes.

## Agregar un proyecto

1. Copia uno de los archivos de `src/content/proyectos/` y cambia el nombre (el nombre del archivo será la dirección, por ejemplo `mi-robot.md` → `/proyectos/mi-robot/`).
2. Llena los datos del inicio: título, resumen, fecha, categoría (`web`, `electronica` o `software`) y tecnologías.
3. `destacado: true` lo muestra en la página de inicio.
4. `borrador: true` lo oculta hasta que esté listo.
5. Las imágenes van en `public/proyectos/` y se enlazan como `/proyectos/archivo.png`.

## Publicar

```bash
npm run build
```

Sube la carpeta `dist` a Netlify, Vercel o Cloudflare Pages, o conecta el repositorio de GitHub para que se publique solo con cada cambio. Recuerda actualizar `site` en `astro.config.mjs` con tu dominio.
