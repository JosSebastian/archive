<script lang="ts" setup>
const content = useArchiveContent();
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <span class="w-full h-fit flex justify-between">
      <p>Page: /Archive/Create</p>
      <!-- <ArchiveCreate /> -->
    </span>
    <div
      class="h-full my-1 py-3 flex justify-center lg:items-center overflow-auto lg:overflow-hidden transition"
    >
      <div class="flex flex-col lg:flex-row gap-2.5">
        <div class="w-96 h-fit flex flex-col gap-2.5 transition">
          <ArchiveMedium />
          <ArchiveTitle />
          <ArchiveDescription />
          <ArchiveGenres />
          <ArchiveStatus />
          <ArchiveRating />
        </div>
        <div class="w-96 h-fit flex flex-col gap-2.5 transition">
          <div class="lg:max-h-[122px] overflow-auto">
            <ArchiveVolumes />
          </div>
          <ArchiveNote />
          <div class="lg:max-h-[166px] overflow-auto">
            <ArchiveNotes />
          </div>
        </div>
      </div>
    </div>
    <ArchiveCreate />
  </div>
</template>

<style scoped></style>
