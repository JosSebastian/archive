<script lang="ts" setup>
import { NInputNumber } from "naive-ui";
const value = defineModel<number>();
</script>

<template>
  <NInputNumber v-model:value="value" />
</template>

<style scoped></style>
