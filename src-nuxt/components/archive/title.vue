<script lang="ts" setup>
const value = defineModel<string>();
</script>

<template>
  <PrimitiveText v-model="value" clearable placeholder="Title" />
</template>

<style scoped></style>
