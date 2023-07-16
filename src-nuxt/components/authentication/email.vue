<script lang="ts" setup>
import { Email } from "../../../types/authentication";
const email = defineModel<Email>();
</script>

<template>
  <div>
    <label for="email">Email:</label>
    <PrimitiveText
      v-model="email"
      type="email"
      placeholder="Email"
      class="px-0 py-2"
      id="email"
    />
  </div>
</template>

<style scoped></style>
