<script lang="ts" setup>
const record = useArchiveRecord();
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
    v-model="record.medium"
    :options="mediums"
    filterable
    clearable
    placeholder="Medium"
  />
</template>

<style scoped></style>
