<script lang="ts" setup>
import { Notes } from "../../../types/types";
import { NDynamicInput } from "naive-ui";
const value = defineModel<Notes>();
const create = () => ({
  volume: {
    volume: undefined,
    chapter: undefined,
  },
  note: undefined,
});
</script>

<template>
  <NDynamicInput v-model:value="value" :on-create="create">
    <template #create-button-default> Note </template>
    <template #default="{ value }">
      <div class="flex flex-col gap-2.5">
        <div class="flex gap-2.5">
          <PrimitiveNumber
            v-model="value.volume.volume"
            :precision="0"
            clearable
            min="0"
            placeholder="Volume"
          />
          <PrimitiveNumber
            v-model="value.volume.chapter"
            :precision="0"
            clearable
            min="0"
            placeholder="Chapter"
          />
        </div>
        <PrimitiveText v-model="value.note" placeholder="Note" />
      </div>
    </template>
  </NDynamicInput>
</template>
