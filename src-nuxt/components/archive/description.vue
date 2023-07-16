<script lang="ts" setup>
import { Description } from "../../../types/types";
const value = defineModel<Description>();
</script>

<template>
  <PrimitiveText
    v-model="value"
    clearable
    type="textarea"
    placeholder="Description"
  />
</template>

<style scoped></style>
