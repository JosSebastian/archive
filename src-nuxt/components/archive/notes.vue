<script lang="ts" setup>
const value = defineModel<{}[]>();
const onCreate = () => ({
  volume: undefined,
  chapter: undefined,
  note: undefined,
});
</script>

<template>
  <n-dynamic-input v-model:value="value" :on-create="onCreate">
    <template #create-button-default> Note </template>
    <template #default="{ value }">
      <div class="flex flex-col gap-1.5">
        <div class="flex gap-1.5">
          <NInputNumber v-model:value="value.volume" placeholder="Volume" />
          <NInputNumber v-model:value="value.chapter" placeholder="Chapter" />
        </div>
        <NInput v-model:value="value.note" placeholder="Note" />
      </div>
    </template>
  </n-dynamic-input>
</template>
