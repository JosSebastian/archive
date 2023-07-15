import {
  create,
  NConfigProvider,
  NButton,
  NInput,
  NInputNumber,
  NDynamicInput,
  NSelect,
} from "naive-ui";

const naive = create({
  components: [
    NConfigProvider,
    NButton,
    NInput,
    NInputNumber,
    NDynamicInput,
    NSelect,
  ],
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(naive);
});
