<script lang="ts" setup>
import { NDynamicInput } from "naive-ui";
const record = useArchiveRecord();
const create = () => ({
  volume: {
    volume: undefined,
    chapter: undefined,
  },
  note: undefined,
});
</script>

<template>
  <NDynamicInput
    v-model:value="record.notes"
    :on-create="create"
    :class="record.notes?.length > 2 ? 'pr-1.5' : ''"
  >
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
