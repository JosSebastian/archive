<script lang="ts" setup>

const route = useRoute();
const navigate = () => {
  if (route.query.action == "sign-on") {
    navigateTo({
      path: "/authentication",
      query: { action: "sign-in" },
    });
  } else if (route.query.action == "sign-in") {
    navigateTo({
      path: "/authentication",
      query: { action: "sign-on" },
    });
  }
};

const emits = defineEmits(["sign"]);
</script>

<template>
  <div class="w-full flex flex-col items-end">
    <PrimitiveButton v-on:click="emits('sign')" class="w-full h-12">
      <p v-if="route.query.action === 'sign-on'">Sign On</p>
      <p v-if="route.query.action === 'sign-in'">Sign In</p>
    </PrimitiveButton>
    <div
      v-on:click="navigate"
      class="opacity-50 text-sm underline cursor-pointer"
    >
      <p v-if="route.query.action === 'sign-on'" class="p-0.5">Sign In?</p>
      <p v-if="route.query.action === 'sign-in'" class="p-0.5">Sign On?</p>
    </div>
  </div>
</template>

<style scoped></style>
