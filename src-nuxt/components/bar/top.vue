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
    <div class="flex flex-row gap-1.5">
      <PrimitiveButton
        v-on:click="back()"
        class="rounded-full opacity-75 hover:opacity-100"
      >
        <IconArrowLeft />
      </PrimitiveButton>
      <PrimitiveButton
        v-on:click="forward()"
        class="rounded-full opacity-75 hover:opacity-100"
      >
        <IconArrowRight />
      </PrimitiveButton>
    </div>
    <PrimitiveButton
      v-on:click="sign"
      class="p-1 rounded-full opacity-75 hover:opacity-100"
    >
      <IconAccount size="1rem" />
    </PrimitiveButton>
  </div>
</template>

<style scoped></style>
