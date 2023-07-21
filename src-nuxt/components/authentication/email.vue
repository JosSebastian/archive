<script lang="ts" setup>
const credentials = useCredentials();
</script>

<template>
  <div>
    <label for="email">Email:</label>
    <PrimitiveText
      v-model="credentials.email"
      type="email"
      placeholder="Email"
      class="px-0 py-2"
      id="email"
    />
  </div>
</template>

<style scoped></style>
