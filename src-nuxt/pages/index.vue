<script lang="ts" setup>
const archive = await useArchiveRecords();
</script>

<template>
  <div class="w-full h-full m-0 p-1 flex flex-col gap-3">
    <span class="w-96 h-fit"> Page: / </span>
    <div class="w-full flex flex-col gap-1 overflow-auto">
      {{ archive }}
      <!-- <ArchiveRecord
        v-for="content in archive"
        :key="content.id"
        :content="content"
      /> -->
    </div>
  </div>
</template>

<style scoped></style>
