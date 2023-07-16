<script lang="ts" setup>
const value = defineModel<string>();
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
    v-model="value"
    :options="statuses"
    filterable
    clearable
    placeholder="Status"
  />
</template>

<style scoped></style>
