// Biblioteca File System
import fs from 'node:fs';
// Biblioteca de rutas
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import hbs from 'hbs'; // Requerido para SafeString

// Creando las variables de rutas
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/*
  Helper para Handlebars que genera las etiquetas de Vite
  EN DESARROLLO: Conecta al servidor de desarrollo de Vite
  EN PRODUCCIÓN: Usa los compilados de Vite
*/
export function viteAssets() {
  // Obtener modo de ejecución
  const isDev = process.env.NODE_ENV !== 'production';
  
  // Rescatando la URL del servidor de desarrollo
  const viteDevServer = process.env.VITE_DEV_SERVER || 'http://localhost:5173';

  // Si estamos en modo de desarrollo
  if (isDev) {
    // Retornamos las etiquetas script encerradas en template literals (backticks)
    // y envueltas en hbs.SafeString para evitar que Handlebars escape el HTML
    return new hbs.SafeString(`
      <script type="module" src="${viteDevServer}/@vite/client"></script>
      <script type="module" src="${viteDevServer}/src/main.js"></script>
    `);
  }

  // En producción leemos el manifest y generamos las etiquetas finales
  const manifestPath = path.join(__dirname, '..', '..', 'dist', '.vite', 'manifest.json');

  // Si no existe el manifest
  if (!fs.existsSync(manifestPath)) {
    console.warn("Vite manifest not found. Run 'npm run build'");
    return '';
  }
}