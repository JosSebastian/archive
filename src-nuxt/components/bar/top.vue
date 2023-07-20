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
  <div class="flex flex-row justify-between items-center">
    <div class="flex flex-row gap-1.5">
      <PrimitiveButton v-on:click="back()" class="hidden sm:flex rounded-full">
        <Icon name="material-symbols:arrow-left-rounded" size="1.5rem" />
      </PrimitiveButton>
      <PrimitiveButton
        v-on:click="forward()"
        class="hidden sm:flex rounded-full"
      >
        <Icon name="material-symbols:arrow-right-rounded" size="1.5rem" />
      </PrimitiveButton>
      <PrimitiveButton
        v-on:click="navigateTo('/')"
        class="p-1 flex sm:hidden rounded-full"
      >
        <Icon name="material-symbols:home-outline-rounded" size="1.5rem" />
      </PrimitiveButton>
      <PrimitiveButton class="p-1 flex sm:hidden rounded-full">
        <Icon name="material-symbols:search-rounded" size="1.5rem" />
      </PrimitiveButton>
    </div>
    <PrimitiveButton v-on:click="sign" class="p-1 rounded-full">
      <Icon name="material-symbols:person-outline-rounded" size="1.5rem" />
    </PrimitiveButton>
  </div>
</template>

<style scoped></style>
