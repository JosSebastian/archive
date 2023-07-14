<script lang="ts" setup>
import { Content } from "../../../types";
const content = ref<Content>({
  id: 0,

  medium: "",
  title: "",
  description: "",
  genre: [],
  status: "",
  rating: 0,

  volume: 0,
  chapter: 0,
  volumes: [],

  note: "",
  notes: [],

  time: {
    first: "",
    last: "",
  },
});
</script>

<template>
  <div class="w-full h-full m-0 p-1 flex flex-col">
    <span class="w-96 h-fit"> Page: /Archive/Create </span>
    <div
      class="overflow-auto w-full h-full flex flex-col justify-center items-center"
    ></div>
    {{ content }}
  </div>
</template>

<style scoped></style>
