// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // site: "https://example.com"
  // Replace with your actual site URL
  site: 'https://your-site.com',

  integrations: [preact()]
});