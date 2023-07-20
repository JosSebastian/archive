<script lang="ts" setup>
import { NDynamicInput } from "naive-ui";
const content = useContent();
const onCreate = () => ({
  volume: undefined,
  chapter: undefined,
});
</script>

<template>
  <NDynamicInput v-model:value="content.volumes" :on-create="onCreate">
    <template #create-button-default> Volume </template>
    <template #default="{ value }">
      <div class="flex gap-2.5">
        <PrimitiveNumber
          v-model="value.volume"
          :precision="0"
          clearable
          min="0"
          placeholder="Volume"
        />
        <PrimitiveNumber
          v-model="value.chapter"
          :precision="0"
          clearable
          min="0"
          placeholder="Chapter"
        />
      </div>
    </template>
  </NDynamicInput>
</template>
