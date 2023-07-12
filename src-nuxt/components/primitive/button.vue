<script lang="ts" setup>
// __________________ Types __________________ \\
type PrimitiveButtonProps = {
  type?: HTMLButtonElement["type"];
};
// __________________ Props __________________ \\
const { type = "button" } = defineProps<PrimitiveButtonProps>();
</script>

<template>
  <button
    v-bind:type="type"
    class="m-0 px-2 py-1 rounded hover:outline outline-1 outline-neutral-300 dark:outline-neutral-600 focus:outline-neutral-400 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition flex flex-row gap-1"
  >
    <slot />
  </button>
</template>

<style scoped></style>
