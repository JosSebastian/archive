<script lang="ts" setup>
const open = ref(false);
</script>

<template>
  <div
    v-bind:class="{
      'w-72': open,
      'w-fit': !open,
    }"
    class="w-72 h-full hidden sm:flex flex-col gap-1"
  >
    <div
      class="m-0 p-1.5 rounded-md border border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-800 flex flex-col gap-1"
    >
      <PrimitiveButton v-on:click="navigateTo('/')" class="p-1 rounded">
        <IconHome />
        <p v-if="open">Home</p>
      </PrimitiveButton>
      <PrimitiveButton class="p-1 rounded">
        <IconSearch />
        <p v-if="open">Search</p>
      </PrimitiveButton>
    </div>
    <div
      class="m-0 p-1.5 rounded-md border border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-800 flex flex-col justify-between grow"
    >
      <div class="flex flex-col gap-1">
        <PrimitiveButton
          v-on:click="navigateTo('/archive/create')"
          class="p-1 rounded"
        >
          <IconAdd />
          <p v-if="open">Create</p>
        </PrimitiveButton>
      </div>
      <div class="flex justify-start">
        <PrimitiveButton v-on:click="open = !open" class="p-1 rounded">
          <IconRight v-if="!open" />
          <IconLeft v-if="open" />
        </PrimitiveButton>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
