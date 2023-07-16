<script lang="ts" setup>
import { Password } from "../../../types/authentication";
const password = defineModel<Password>();
</script>

<template>
  <div>
    <label for="password">Password:</label>
    <PrimitiveText
      v-model="password"
      type="password"
      placeholder="Password"
      class="px-0 py-2"
      id="password"
    />
  </div>
</template>

<style scoped></style>
