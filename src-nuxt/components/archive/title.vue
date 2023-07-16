<script lang="ts" setup>
import { Title } from '../../../types/types';
const value = defineModel<Title>();
</script>

<template>
  <PrimitiveText v-model="value" clearable placeholder="Title" />
</template>

<style scoped></style>
