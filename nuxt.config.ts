// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/ui"],

  css: ["~/assets/css/global.css"],
  components: {
    dirs: ["~/components", "~/components/pages", "~/components/ui"],
  },
  imports: {
    autoImport: false,
  },
  colorMode: {
    preference: "dark",
  },
});
