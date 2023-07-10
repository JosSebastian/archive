<script lang="ts" setup></script>

<template>
  <div
    class="fixed w-screen h-screen m-0 p-1 bg-neutral-100 flex flex-row gap-1"
  >
    <BarSide />
    <div
      class="w-full h-full m-0 p-1.5 border-2 rounded-md border-neutral-200/50 bg-neutral-100 flex flex-col"
    >
      <BarTop />
      <slot />
      <BarBottom />
    </div>
  </div>
</template>
