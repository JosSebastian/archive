<script lang="ts" setup>
const content = useArchiveContent();
const statuses = [
  {
    label: "Start",
    value: "Start",
  },
  {
    label: "Middle",
    value: "Middle",
  },
  {
    label: "End",
    value: "End",
  },
];
</script>

<template>
  <PrimitiveSelect
    v-model="content.status"
    :options="statuses"
    filterable
    clearable
    placeholder="Status"
  />
</template>

<style scoped></style>
