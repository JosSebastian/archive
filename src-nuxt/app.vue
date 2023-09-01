<script lang="ts" setup>
import { NConfigProvider, NThemeEditor } from "naive-ui";
const theme = useColorTheme();

onMounted(() => {
  useArchive();
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
