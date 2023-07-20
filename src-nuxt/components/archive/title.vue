<script lang="ts" setup>
const content = useContent();
</script>

<template>
  <PrimitiveText v-model="content.title" clearable placeholder="Title" />
</template>

<style scoped></style>
