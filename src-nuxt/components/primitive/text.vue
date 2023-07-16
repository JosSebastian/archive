<script lang="ts" setup>
import { NInput } from "naive-ui";
const value = defineModel<string>();
</script>

<template>
  <!-- class="rounded border border-neutral-400 dark:border-neutral-500 bg-neutral-100 dark:bg-neutral-800 focus:ring-neutral-200 dark:focus:ring-neutral-700 focus:ring-2 focus:outline-none dark:focus:outline-none transition" -->
  <NInput v-model:value="value" />
</template>

<style scoped></style>
