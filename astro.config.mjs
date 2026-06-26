import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://www.salonmillennium.com',
  output: 'static',
  adapter: cloudflare()
});