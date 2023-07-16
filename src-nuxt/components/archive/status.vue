<script lang="ts" setup>
import { Status } from "../../../types/types";
const value = defineModel<Status>();
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
