<script lang="ts" setup>
const record = useArchiveRecord();
const mediums = [
  {
    label: "WebComic",
    value: "WebComic",
  },
  {
    label: "WebNovel",
    value: "WebNovel",
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
