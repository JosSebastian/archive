<script lang="ts" setup></script>

<template>
  <div class="w-96 h-full flex flex-col gap-1">
    <div
      class="m-0 p-1.5 rounded-md border border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-800 flex flex-col gap-1"
    >
      <PrimitiveButton v-on:click="navigateTo('/')"> Home </PrimitiveButton>
      <PrimitiveButton v-on:click="navigateTo('/search')">
        Search
      </PrimitiveButton>
    </div>
    <div
      class="m-0 p-1.5 rounded-md border border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-800 flex flex-col justify-end grow"
    >
      <PrimitiveButton v-on:click="navigateTo('/settings')">
        Settings
      </PrimitiveButton>
    </div>
  </div>
</template>

<style scoped></style>
