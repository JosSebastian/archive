<script lang="ts" setup>
const value = defineModel<number>();
</script>

<template>
  <NInputNumber
    v-model:value="value"
    clearable
    :precision="1"
    :step="0.5"
    min="0"
    max="10"
    placeholder="Rating"
  />
</template>

<style scoped></style>
