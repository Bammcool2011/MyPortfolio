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
    fallback: "dark",
  },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "icon", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      meta: [{ name: "theme-color", content: "#ffffff" }],
    },
  },
});
