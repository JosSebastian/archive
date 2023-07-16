<script lang="ts" setup>
import { Rating } from "../../../types/types";
const value = defineModel<Rating>();
</script>

<template>
  <PrimitiveNumber
    v-model="value"
    :precision="1"
    :step="0.5"
    clearable
    min="0"
    max="10"
    placeholder="Rating"
  />
</template>

<style scoped></style>
