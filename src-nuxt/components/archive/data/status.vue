<script lang="ts" setup>
const record = useArchiveRecord();
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
    v-model="record.status"
    :options="statuses"
    filterable
    clearable
    placeholder="Status"
  />
</template>

<style scoped></style>
