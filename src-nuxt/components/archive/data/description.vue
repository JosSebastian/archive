<script lang="ts" setup>
const record = useArchiveRecord();
</script>

<template>
  <PrimitiveText
    v-model="record.description"
    clearable
    type="textarea"
    placeholder="Description"
    class="h-[122px]"
  />
</template>

<style scoped></style>
