<script lang="ts" setup>
const value = defineModel<string>();
</script>

<template>
  <NInput v-model:value="value" clearable placeholder="Note" />
</template>

<style scoped></style>
