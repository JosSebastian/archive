<script lang="ts" setup>
import { NConfigProvider, NThemeEditor } from "naive-ui";
defineComponent({
  components: {
    NThemeEditor,
  },
});
const colors = useColorMode();
const themes = useThemes();
const theme = computed(() => {
  if (colors.value === "light") {
    return themes.value.light;
  } else if (colors.value === "dark") {
    return themes.value.dark;
  }
});
</script>

<template>
  <div>
    <NConfigProvider :theme="theme">
      <NThemeEditor>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </NThemeEditor>
    </NConfigProvider>
  </div>
</template>
