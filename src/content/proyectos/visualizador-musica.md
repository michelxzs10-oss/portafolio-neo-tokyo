---
titulo: Visualizador de música Tron / Matrix
resumen: Programa en Python que escucha la música de la computadora y la convierte en barras de neón, un anillo giratorio o lluvia de código.
fecha: 2026-09-27
categoria: software
tecnologias: [Python, Pygame, NumPy, Linux]
imagen: ./proyectos/visualizador.png
# codigo: https://github.com/tu-usuario/visualizador
---



## Qué hace

Captura el audio del sistema en Linux, lo analiza con la transformada rápida de Fourier y lo muestra en tres modos: barras sobre un piso de cuadrícula estilo Tron, un espectro circular con estelas y lluvia de código estilo Matrix donde cada columna reacciona a una frecuencia.

## Un problema real

Al principio la música se escuchaba entrecortada con el visualizador abierto. El programa pedía al servidor de audio bloques muy pequeños, lo que forzaba a todo el sistema a trabajar en baja latencia. Se resolvió usando la frecuencia de muestreo del sistema, bloques más grandes, latencia alta y menos cuadros por segundo.
