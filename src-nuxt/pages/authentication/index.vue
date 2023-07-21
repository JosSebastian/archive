<script lang="ts" setup>
const route = useRoute();
const sign = async () => {
  if (route.query.action == "sign-on") {
    await useSignOn();
  } else if (route.query.action == "sign-in") {
    await useSignIn();
  }
};
</script>

<template>
  <div class="w-full h-full m-0 p-1 flex flex-col">
    <span class="w-96 h-fit"> Page: /Authentication </span>
    <div class="w-full h-full flex justify-center items-center">
      <div v-on:keyup.enter="sign" class="w-80 flex flex-col gap-4">
        <div class="w-full flex flex-col gap-2">
          <AuthenticationEmail />
          <AuthenticationPassword />
        </div>
        <AuthenticationAction v-on:sign="sign" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
