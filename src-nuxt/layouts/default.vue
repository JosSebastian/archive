<script lang="ts" setup>
const user = useSupabaseUser();
</script>

<template>
  <PrimitiveContainer
    class="fixed w-screen h-screen m-0 p-1 flex flex-row gap-1"
  >
    <BarSide v-if="user" />
    <PrimitiveContainer
      class="w-full h-full m-0 p-1.5 rounded-md border flex flex-col justify-between gap-1"
    >
      <BarTop v-if="user" />
      <div class="overflow-hidden w-full h-full rounded-lg outline outline-0">
        <slot />
      </div>
      <BarBottom v-if="user" />
    </PrimitiveContainer>
  </PrimitiveContainer>
</template>
