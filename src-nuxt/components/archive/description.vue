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
    class="h-[122px]"
  />
</template>

<style scoped></style>
