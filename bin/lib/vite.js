import fs from 'fs';
import path from 'path';

export function registerViteHelper(hbs) {
  hbs.registerHelper('vite', function () {
    const isDev = process.env.NODE_ENV !== 'production';

    if (isDev) {
      return new hbs.SafeString(`
        <script type="module" src="http://localhost:5173/@vite/client"></script>
        <script type="module" src="http://localhost:5173/src/main.js"></script>
      `);
    } else {
      try {
        const manifestPath = path.resolve(process.cwd(), 'public/dist/.vite/manifest.json');
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        const entry = manifest['src/main.js'];

        let tags = `<script type="module" src="/dist/${entry.file}"></script>`;
        if (entry.css) {
          entry.css.forEach(cssFile => {
            tags += `<link rel="stylesheet" href="/dist/${cssFile}">`;
          });
        }
        return new hbs.SafeString(tags);
      } catch (e) {
        return new hbs.SafeString('<!-- Vite manifest not found -->');
      }
    }
  });
}