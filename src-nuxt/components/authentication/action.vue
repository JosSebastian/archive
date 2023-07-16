<script lang="ts" setup>
type Credentials = {
  email: string;
  password: string;
};
const credentials = defineModel<Credentials>();

const route = useRoute();
const router = useRouter();
const navigate = () => {
  if (route.query.action == "sign-on") {
    router.push({ path: "/authentication", query: { action: "sign-in" } });
  } else if (route.query.action == "sign-in") {
    router.push({ path: "/authentication", query: { action: "sign-on" } });
  }
};

const client = useSupabaseClient();
const sign = async () => {
  if (credentials.value == undefined) {
    return;
  } else if (
    credentials.value.email == undefined ||
    credentials.value.email == ""
  ) {
    return;
  } else if (
    credentials.value.password == undefined ||
    credentials.value.password == ""
  ) {
    return;
  }

  if (route.query.action == "sign-on") {
    const { data, error } = await client.auth.signUp({
      email: credentials.value.email,
      password: credentials.value.password,
    });
    if (error) {
      console.log(error);
    } else {
      navigate();
    }
  } else if (route.query.action == "sign-in") {
    const { data, error } = await client.auth.signInWithPassword({
      email: credentials.value.email,
      password: credentials.value.password,
    });
    if (error) {
      console.log(error);
    } else {
      navigateTo("/");
    }
  }
};
defineExpose({ sign });
</script>

<template>
  <div class="w-full flex flex-col items-end">
    <PrimitiveButton v-on:click="sign" class="w-full h-12">
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
