<script lang="ts" setup>
import { darkTheme } from "naive-ui";

const color = useColorMode();
const theme = computed(() => {
  return color.value === "dark" ? darkTheme : undefined;
});
</script>

<template>
  <div>
    <div>
      {{ color.value }}
      <select
        v-model="color.preference as string"
        class="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700"
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
    <NConfigProvider :theme="theme">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </NConfigProvider>
  </div>
</template>
