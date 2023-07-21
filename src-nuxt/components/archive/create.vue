<script lang="ts" setup>
const record = useArchiveRecord();
const cancel = () => {
  record.value = {};
  navigateTo("/");
};
const create = async () => {
  await useArchiveCreate();
  record.value = {};
};
</script>

<template>
  <div class="w-full flex justify-center gap-1.5">
    <PrimitiveButton v-on:click="cancel" class="w-36 p-1 rounded-l">
      <Icon name="material-symbols:close-rounded" size="1.5rem" />
    </PrimitiveButton>
    <PrimitiveButton v-on:click="create" class="w-36 p-1 rounded-lg">
      <Icon name="material-symbols:check-small-rounded" size="1.5rem" />
    </PrimitiveButton>
  </div>
</template>

<style scoped></style>
