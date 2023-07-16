<script lang="ts" setup>
const value = defineModel<string>();
</script>

<template>
  <PrimitiveText
    v-model="value"
    clearable
    type="textarea"
    placeholder="Description"
  />
</template>

<style scoped></style>
