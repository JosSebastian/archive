<script lang="ts" setup>
const content = useContent();
</script>

<template>
  <PrimitiveText v-model="content.note" clearable placeholder="Note" />
</template>

<style scoped></style>
