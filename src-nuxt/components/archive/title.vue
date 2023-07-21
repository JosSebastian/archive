<script lang="ts" setup>
const record = useArchiveRecord();
</script>

<template>
  <PrimitiveText v-model="record.title" clearable placeholder="Title" />
</template>

<style scoped></style>
