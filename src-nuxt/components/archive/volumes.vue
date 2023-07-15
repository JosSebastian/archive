<script lang="ts" setup>
const value = defineModel<
  {
    volume?: number;
    chapter?: number;
  }[]
>();
const volume = defineModel<number>("volume");
const chapter = defineModel<number>("chapter");
const onCreate = () => ({
  volume: undefined,
  chapter: undefined,
});
</script>

<template>
  <NDynamicInput v-model:value="value" :on-create="onCreate">
    <template #create-button-default> Volume </template>
    <template #default="{ value }">
      <div class="flex gap-1.5">
        <NInputNumber v-model:value="value.volume" placeholder="Volume" />
        <NInputNumber v-model:value="value.chapter" placeholder="Chapter" />
      </div>
    </template>
  </NDynamicInput>
</template>
