<script lang="ts" setup>
const contents = await useArchive();
</script>

<template>
  <div class="w-full h-full m-0 p-1 flex flex-col">
    <span class="w-96 h-fit"> Page: / </span>
    <div class="overflow-auto">
      {{ contents }}
    </div>
  </div>
</template>

<style scoped></style>
