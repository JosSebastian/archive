<script lang="ts" setup>
type Email = string;
const email = defineModel<Email>();
</script>

<template>
  <PrimitiveText
    v-model="email"
    type="email"
    placeholder="Email"
    class="px-0 py-2"
  />
</template>

<style scoped></style>
