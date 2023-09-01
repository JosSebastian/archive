<script lang="ts" setup>
const record = useArchiveRecord();
</script>

<template>
  <PrimitiveText v-model="record.note" clearable placeholder="Note" />
</template>

<style scoped></style>
