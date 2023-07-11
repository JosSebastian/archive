<script lang="ts" setup></script>

<template>
  <div
    class="fixed w-screen h-screen m-0 p-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 flex flex-row gap-1"
  >
    <BarSide />
    <div
      class="w-full h-full m-0 p-1.5 rounded-md border border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-800 flex flex-col justify-between gap-1"
    >
      <BarTop />
      <div class="w-full h-full rounded-lg outline outline-0 overflow-auto">
        <slot />
      </div>
      <BarBottom />
    </div>
  </div>
</template>
