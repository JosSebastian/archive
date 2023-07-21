<script lang="ts" setup>
const record = useArchiveRecord();
</script>

<template>
  <PrimitiveNumber
    v-model="record.rating"
    :precision="1"
    :step="0.5"
    clearable
    min="0"
    max="10"
    placeholder="Rating"
  />
</template>

<style scoped></style>
