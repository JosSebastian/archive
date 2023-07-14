import { create, NConfigProvider, NButton, NInput } from "naive-ui";

const naive = create({
  components: [NConfigProvider, NButton, NInput],
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(naive);
});
