<script lang="ts" setup>
import { Volumes } from "../../../types/types";
import { NDynamicInput } from "naive-ui";
const value = defineModel<Volumes>();
const onCreate = () => ({
  volume: undefined,
  chapter: undefined,
});
</script>

<template>
  <NDynamicInput v-model:value="value" :on-create="onCreate">
    <template #create-button-default> Volume </template>
    <template #default="{ value }">
      <div class="flex gap-1.5">
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
