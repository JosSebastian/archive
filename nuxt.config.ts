// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ["@nuxtjs/supabase", "@nuxtjs/tailwindcss"],
  srcDir: "src-nuxt",
  devtools: { enabled: true },
  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },
});
