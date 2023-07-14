<script lang="ts" setup>
const back = () => {
  window.history.back();
};
const forward = () => {
  window.history.forward();
};
const client = useSupabaseClient();
const sign = async () => {
  const { error } = await client.auth.signOut();
  if (error) {
    console.error(error);
  } else {
    navigateTo({
      path: "/authentication",
      query: { action: "sign-in" },
    });
  }
};
</script>

<template>
  <div class="p-1 flex flex-row justify-between items-center">
    <div class="flex sm:hidden flex-row gap-1.5">
      <PrimitiveButton
        v-on:click="navigateTo('/')"
        class="p-1 rounded-full"
      >
        <IconHome size="1.25rem" />
      </PrimitiveButton>
      <PrimitiveButton class="p-1 rounded-full ">
        <IconSearch size="1.25rem" />
      </PrimitiveButton>
    </div>
    <div class="hidden sm:flex flex-row gap-1.5">
      <PrimitiveButton
        v-on:click="back()"
        class="rounded-full"
      >
        <IconLeft />
      </PrimitiveButton>
      <PrimitiveButton
        v-on:click="forward()"
        class="rounded-full"
      >
        <IconRight />
      </PrimitiveButton>
    </div>
    <PrimitiveButton
      v-on:click="sign"
      class="p-1 rounded-full"
    >
      <IconAccount size="1rem" />
    </PrimitiveButton>
  </div>
</template>

<style scoped></style>
