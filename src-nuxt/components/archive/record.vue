<script lang="ts" setup>
import { Record } from "../../../types/types";

const { record } = defineProps<{
  record: Record;
}>();
</script>

<template>
  <PrimitiveContainer class="m-1 p-2.5 rounded border flex flex-col gap-0.5">
    <div class="flex flex-row justify-between items-start">
      <div class="flex flex-col">
        <p class="text-sm font-bold">{{ record.title }}</p>
        <div class="flex gap-1">
          <PrimitiveContainer
            v-for="(genre, i) in record.genres?.slice(0, 3)"
            :key="genre"
            class="px-1 rounded border"
          >
            {{ genre }}
          </PrimitiveContainer>
        </div>
      </div>
      <div class="flex gap-1">
        <div class="flex items-center">
          <p>{{ record.rating }}</p>
          <Icon name="material-symbols:star-outline-rounded" size="1.25rem" />
        </div>
        <PrimitiveContainer class="px-1 rounded border">{{
          record.status
        }}</PrimitiveContainer>
      </div>
    </div>
    <div class="flex gap-1 text-xs">
      <div class="flex gap-1">
        <p class="font-semibold">Volume:</p>
        <p>{{ record.volumes?.at(-1)?.volume }},</p>
      </div>
      <div class="flex gap-1">
        <p>Chapter:</p>
        <p>{{ record.volumes?.at(-1)?.chapter }}</p>
      </div>
    </div>
    <div>{{ record.description }}</div>
  </PrimitiveContainer>
</template>

<style scoped></style>
