<script lang="ts" setup>
type Password = string;
const password = defineModel<Password>();
</script>

<template>
  <PrimitiveText
    v-model="password"
    type="password"
    placeholder="Password"
    class="px-0 py-2"
  />
</template>

<style scoped></style>
