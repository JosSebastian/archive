<script lang="ts" setup>
const input = defineModel<string>();
const { type = "text" } = defineProps<{
  type?: string;
}>();
</script>

<template>
  <NInput
    v-model:value="input"
    :type="type"
    placeholder=""
    class="rounded border border-neutral-400 dark:border-neutral-500 bg-neutral-100 dark:bg-neutral-800 focus:ring-neutral-200 dark:focus:ring-neutral-700 focus:ring-2 focus:outline-none dark:focus:outline-none transition"
  />
</template>

<style scoped></style>
