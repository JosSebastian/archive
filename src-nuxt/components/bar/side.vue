<script lang="ts" setup></script>

<template>
  <div class="w-96 h-full flex flex-col gap-1">
    <div
      class="m-0 p-1.5 rounded-md border border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-800 flex flex-col gap-1"
    >
      <PrimitiveButton v-on:click="navigateTo('/')">
        <IconHome />
        <p>Home</p>
      </PrimitiveButton>
      <PrimitiveButton v-on:click="navigateTo('/search')">
        <IconSearch />
        <p>Search</p>
      </PrimitiveButton>
    </div>
    <div
      class="m-0 p-1.5 rounded-md border border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-800 flex flex-col grow"
    >
      Component: SideBar
    </div>
  </div>
</template>

<style scoped></style>
