import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://matipolit.ovh",
  trailingSlash: "never",
  build: {
    assets: "_assets",
    inlineStylesheets: "auto",
  },
  image: {
    service: { entrypoint: "astro/assets/services/sharp" },
  },
});
