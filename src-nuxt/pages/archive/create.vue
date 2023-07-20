<script lang="ts" setup>
const content = useContent();
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
          <ArchiveMedium />
          <ArchiveTitle />
          <ArchiveDescription />
          <ArchiveGenres />
          <ArchiveStatus />
          <ArchiveRating />
        </div>
        <div class="w-96 h-fit flex flex-col gap-2.5 transition">
          <ArchiveVolumes />
          <ArchiveNote />
          <ArchiveNotes />
        </div>
        <ArchiveCreate v-on:click="useCreateContent()" />
      </div>
    </div>
    {{ content }}
  </div>
</template>

<style scoped></style>
