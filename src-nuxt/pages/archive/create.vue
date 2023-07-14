<script lang="ts" setup>
const content = ref({
  title: "Create",
  description: "Create a new archive.",
  icon: "operator/add",
  path: "/archive/create",
});
</script>

<template>
  <div class="w-full h-full m-0 p-1 flex flex-col">
    <span class="w-96 h-fit"> Page: /Archive/Create </span>
    <div class="overflow-auto">
      {{ content }}
    </div>
  </div>
</template>

<style scoped></style>
