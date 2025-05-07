import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

export default defineConfig({
  // Genera archivos HTML estáticos
  output: 'static',

  integrations: [preact()]
});