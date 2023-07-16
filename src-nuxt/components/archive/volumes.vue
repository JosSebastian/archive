<script lang="ts" setup>
import { NDynamicInput } from "naive-ui";
type Volume = {
  volume?: number;
  chapter?: number;
};
const value = defineModel<Volume[]>();
const volume = defineModel<number>("volume");
const chapter = defineModel<number>("chapter");
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
        <PrimitiveNumber v-model="value.volume" placeholder="Volume" />
        <PrimitiveNumber v-model="value.chapter" placeholder="Chapter" />
      </div>
    </template>
  </NDynamicInput>
</template>
