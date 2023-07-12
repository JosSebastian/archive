<script lang="ts" setup>
// __________________ Types __________________ \\
type PrimitiveInputProps = {
  type?: HTMLInputElement["type"];
};
// __________________ Models __________________ \\
const input = defineModel();
// __________________ Props __________________ \\
const { type } = defineProps<PrimitiveInputProps>();
</script>

<template>
  <input
    v-model="input"
    v-bind:type="type"
    class="m-0 p-1.5 rounded border border-neutral-400 dark:border-neutral-500 bg-neutral-100 dark:bg-neutral-800 focus:ring-neutral-200 dark:focus:ring-neutral-700 focus:ring-2 focus:outline-none dark:focus:outline-none transition"
  />
</template>

<style scoped></style>
