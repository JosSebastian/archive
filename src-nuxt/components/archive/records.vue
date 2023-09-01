<script lang="ts" setup>
const records = await useArchiveRecords();
</script>

<template>
  <div>
    <ArchiveRecord
      v-for="record in records"
      v-bind:key="record.id"
      v-bind:record="record"
    />
  </div>
</template>

<style scoped></style>
