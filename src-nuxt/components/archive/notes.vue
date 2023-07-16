<script lang="ts" setup>
import { NDynamicInput } from "naive-ui";
const value = defineModel<{}[]>();
const onCreate = () => ({
  volume: undefined,
  chapter: undefined,
  note: undefined,
});
</script>

<template>
  <n-dynamic-input v-model:value="value" :on-create="onCreate">
    <template #create-button-default> Note </template>
    <template #default="{ value }">
      <div class="flex flex-col gap-1.5">
        <div class="flex gap-1.5">
          <PrimitiveNumber v-model="value.volume" placeholder="Volume" />
          <PrimitiveNumber v-model="value.chapter" placeholder="Chapter" />
        </div>
        <PrimitiveText v-model="value.note" placeholder="Note" />
      </div>
    </template>
  </n-dynamic-input>
</template>
