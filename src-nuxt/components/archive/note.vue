<script lang="ts" setup>
import { Note } from "../../../types/types";
const value = defineModel<Note>();
</script>

<template>
  <PrimitiveText v-model="value" clearable placeholder="Note" />
</template>

<style scoped></style>
