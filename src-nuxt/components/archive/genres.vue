<script lang="ts" setup>
const content = useContent();
const genres = [
  {
    label: "Action",
    value: "Action",
  },
  {
    label: "Adventure",
    value: "Adventure",
  },
  {
    label: "Comedy",
    value: "Comedy",
  },
  {
    label: "Drama",
    value: "Drama",
  },
  {
    label: "Fantasy",
    value: "Fantasy",
  },
  {
    label: "Horror",
    value: "Horror",
  },
  {
    label: "Mystery",
    value: "Mystery",
  },
  {
    label: "Psychological",
    value: "Psychological",
  },
  {
    label: "Romance",
    value: "Romance",
  },
  {
    label: "Science Fiction",
    value: "Science Fiction",
  },
  {
    label: "Slice of Life",
    value: "Slice of Life",
  },
  {
    label: "Thriller",
    value: "Thriller",
  },
  {
    label: "Tragedy",
    value: "Tragedy",
  },
  {
    label: "Other",
    value: "Other",
  },
];
</script>

<template>
  <PrimitiveSelect
    v-model="content.genres"
    :options="genres"
    multiple
    filterable
    clearable
    placeholder="Genre"
  />
</template>

<style scoped></style>
