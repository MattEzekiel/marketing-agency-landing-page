import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://gconsulting.agency',
  base: 'https://github.com/MattEzekiel/marketing-agency-landing-page.github.io',
  integrations: [tailwind(), sitemap()]
});
