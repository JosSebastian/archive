<script lang="ts" setup>
import { Content } from "../../../types";
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
  <div class="w-full h-full m-0 p-1 flex flex-col">
    <span class="w-96 h-fit"> Page: /Archive/Create </span>
    <div class="w-full h-full p-3 flex justify-center items-start overflow-auto">
      <div
        class="w-96 h-fit flex flex-col justify-center items-stretch gap-2.5 transition"
      >
        <ArchiveMedium v-model="content.medium" />
        <ArchiveTitle v-model="content.title" />
        <ArchiveDescription v-model="content.description" />
        <ArchiveGenres v-model="content.genres" />
        <ArchiveStatus v-model="content.status" />
        <ArchiveRating v-model="content.rating" />
        <ArchiveVolumes v-model="content.volumes" />
        <ArchiveNote v-model="content.note" />
        <ArchiveNotes v-model="content.notes" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
