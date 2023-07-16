<script lang="ts" setup>
const value = defineModel<string>();
const mediums = [
  {
    label: "Text",
    value: "Text",
  },
  {
    label: "Image",
    value: "Image",
  },
  {
    label: "Video",
    value: "Video",
  },
];
</script>

<template>
  <PrimitiveSelect
    v-model="value"
    :options="mediums"
    filterable
    clearable
    placeholder="Medium"
  />
</template>

<style scoped></style>
