---
titulo: La Grid orbital
resumen: Miles de satélites reales girando alrededor de una Tierra de cuadrícula estilo Tron, calculados en tiempo real en el navegador.
fecha: 2026-09-27
categoria: web
tecnologias: [Three.js, satellite.js, JavaScript, Vite]
destacado: true
demo: https://grid-orbital.vercel.app
codigo: https://github.com/michelxzs10-oss/grid-orbital
imagen: ./proyectos/grid-orbital.png
# imagenAlt: Globo de cuadrícula cian con la ISS dejando una estela naranja
---

## Qué es

Un visualizador 3D de satélites reales. Muestra estaciones espaciales, satélites meteorológicos, de radioaficionados, GPS y Starlink, cada grupo con su color. La Estación Espacial Internacional deja una estela de luz que se desvanece, como las motos de Tron, y el sitio calcula cuándo pasará sobre mi ciudad.

## Cómo funciona

- Las órbitas se descargan de CelesTrak en formato TLE y se guardan en el navegador por dos horas, que es cada cuánto se actualizan.
- La posición de cada satélite se calcula con el modelo SGP4 y se convierte de coordenadas espaciales a coordenadas fijas a la Tierra, para que coincida con la cuadrícula.
- Al publicarlo, CelesTrak bloqueaba las peticiones que salían de los servidores compartidos de Vercel. Lo resolví haciendo que el sitio publique su propia copia de las órbitas, actualizada por una tarea automática de GitHub Actions, y dejando la descarga directa como primera opción.
- Para que funcione en una laptop de 2012, los satélites se actualizan por bloques en cada cuadro en lugar de todos a la vez.
- La predicción de pasos revisa la elevación de la ISS cada 30 segundos durante las siguientes 24 horas.

## Lo que aprendí

- Gráficos 3D en el navegador. Construí la escena con Three.js: cámara, controles, geometrías y materiales para lograr la estética de cuadrícula neón inspirada en Tron, además de una estela de luz que sigue la trayectoria de la ISS.

- Rendimiento con miles de objetos. Dibujar miles de satélites y actualizarlos en cada cuadro me obligó a pensar en eficiencia: agrupar geometrías, actualizar solo lo necesario y separar el cálculo orbital del ciclo de dibujo.

- Consumo de datos públicos. Integré una fuente de datos real y en vivo, manejando la descarga, el procesamiento del formato y los posibles errores cuando la información no está disponible.

- Flujo de desarrollo moderno. Organicé el proyecto con Vite, desde el servidor de desarrollo hasta la compilación para publicarlo.
