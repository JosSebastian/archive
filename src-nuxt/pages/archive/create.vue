<script lang="ts" setup>
const record = useArchiveRecord();
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <span class="w-full h-fit flex justify-between">
      <p>Page: /Archive/Create</p>
    </span>
    <div
      class="h-full flex justify-center lg:items-center overflow-auto lg:overflow-hidden transition"
    >
      <div class="flex flex-col lg:flex-row gap-2.5">
        <div class="w-96 h-fit flex flex-col gap-2.5 transition">
          <ArchiveDataMedium />
          <ArchiveDataTitle />
          <ArchiveDataDescription />
          <ArchiveDataGenres />
          <ArchiveDataStatus />
          <ArchiveDataRating />
        </div>
        <div class="w-96 h-fit flex flex-col gap-2.5 transition">
          <div class="lg:max-h-[122px] overflow-auto">
            <ArchiveDataVolumes />
          </div>
          <ArchiveDataNote />
          <div class="lg:max-h-[166px] overflow-auto">
            <ArchiveDataNotes />
          </div>
        </div>
      </div>
    </div>
    <ArchiveCreate />
  </div>
</template>

<style scoped></style>
