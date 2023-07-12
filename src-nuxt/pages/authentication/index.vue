<script lang="ts" setup>
type Credentials = {
  email: string;
  password: string;
};
const credentials = ref<Credentials>({
  email: "",
  password: "",
});
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
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <span class="bg-neutral-100 dark:bg-neutral-800">
      Page: /Authentication
    </span>
    <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
      <div class="flex flex-col gap-1.5">
        <div class="flex flex-col">
          <label for="email">Email:</label>
          <PrimitiveInput
            v-model="credentials.email"
            id="email"
            type="email"
            class="w-72 h-fit"
          />
        </div>
        <div class="flex flex-col">
          <label for="password">Password:</label>
          <PrimitiveInput
            v-model="credentials.password"
            id="password"
            type="password"
            class="w-72 h-fit"
          />
        </div>
      </div>
      <div class="flex flex-col items-end">
        <PrimitiveButton
          v-on:click="sign"
          class="w-72 h-fit outline justify-center items-center"
        >
          <p v-if="route.query.action === 'sign-on'" class="p-0.5">Sign On</p>
          <p v-if="route.query.action === 'sign-in'" class="p-0.5">Sign In</p>
        </PrimitiveButton>
        <div
          v-on:click="navigate"
          class="opacity-50 text-sm underline cursor-pointer"
        >
          <p v-if="route.query.action === 'sign-on'" class="p-0.5">Sign In?</p>
          <p v-if="route.query.action === 'sign-in'" class="p-0.5">Sign On?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
