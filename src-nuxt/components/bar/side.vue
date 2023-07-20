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
    <PrimitiveContainer class="m-0 p-1.5 rounded-md border flex flex-col gap-1">
      <PrimitiveButton v-on:click="navigateTo('/')" class="p-1 rounded">
        <Icon name="material-symbols:home-outline-rounded" size="1.5rem" />
        <p v-if="open">Home</p>
      </PrimitiveButton>
      <PrimitiveButton class="p-1 rounded">
        <Icon name="material-symbols:search-rounded" size="1.5rem" />
        <p v-if="open">Search</p>
      </PrimitiveButton>
    </PrimitiveContainer>
    <PrimitiveContainer
      class="m-0 p-1.5 rounded-md border flex flex-col justify-between grow"
    >
      <div class="flex flex-col gap-1">
        <PrimitiveButton
          v-on:click="navigateTo('/archive/create')"
          class="p-1 rounded"
        >
          <Icon name="material-symbols:add-rounded" size="1.5rem" />
          <p v-if="open">Create</p>
        </PrimitiveButton>
      </div>
      <div class="flex justify-start">
        <PrimitiveButton v-on:click="open = !open" class="p-1 rounded">
          <Icon
            v-if="!open"
            name="material-symbols:arrow-right-rounded"
            size="1.5rem"
          />
          <Icon
            v-if="open"
            name="material-symbols:arrow-left-rounded"
            size="1.5rem"
          />
        </PrimitiveButton>
      </div>
    </PrimitiveContainer>
  </div>
</template>

<style scoped></style>
