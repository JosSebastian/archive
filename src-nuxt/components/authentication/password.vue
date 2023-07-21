<script lang="ts" setup>
const credentials = useCredentials();
</script>

<template>
  <div>
    <label for="password">Password:</label>
    <PrimitiveText
      v-model="credentials.password"
      type="password"
      placeholder="Password"
      class="px-0 py-2"
      id="password"
    />
  </div>
</template>

<style scoped></style>
