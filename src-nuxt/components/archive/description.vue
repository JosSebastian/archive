<script lang="ts" setup>
const content = useContent();
</script>

<template>
  <PrimitiveText
    v-model="content.description"
    clearable
    type="textarea"
    placeholder="Description"
    class="h-[122px]"
  />
</template>

<style scoped></style>
