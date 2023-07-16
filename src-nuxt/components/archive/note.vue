<script lang="ts" setup>
const value = defineModel<string>();
</script>

<template>
  <PrimitiveText v-model="value" clearable placeholder="Note" />
</template>

<style scoped></style>
