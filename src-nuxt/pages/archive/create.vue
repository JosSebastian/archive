<script lang="ts" setup>
import { Content } from "../../../types/types";
const content = ref<Content>({
  id: undefined,

  medium: undefined,
  title: undefined,
  description: undefined,
  genres: undefined,
  status: undefined,
  rating: undefined,

  volumes: undefined,

  note: undefined,
  notes: undefined,

  time: undefined,
});
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <span class="w-96 h-fit">
      <p>Page: /Archive/Create</p>
    </span>
    <div
      class="h-full my-1 py-3 flex flex-col justify-start items-center gap-3 overflow-auto transition"
    >
      <div class="border-none flex flex-col items-center gap-2.5">
        <div class="w-96 h-fit flex flex-col gap-2.5 transition">
          <ArchiveMedium v-model="content.medium" />
          <ArchiveTitle v-model="content.title" />
          <ArchiveDescription v-model="content.description" />
          <ArchiveGenres v-model="content.genres" />
          <ArchiveStatus v-model="content.status" />
          <ArchiveRating v-model="content.rating" />
        </div>
        <div class="w-96 h-fit flex flex-col gap-2.5 transition">
          <ArchiveVolumes v-model="content.volumes" />
          <ArchiveNote v-model="content.note" />
          <ArchiveNotes v-model="content.notes" />
        </div>
        <ArchiveCreate />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
