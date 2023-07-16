<script lang="ts" setup>
type Credentials = {
  email: string;
  password: string;
};
const credentials = ref<Credentials>({
  email: "",
  password: "",
});

const action = ref(null);
const sign = () => {
  action.value.sign();
};
</script>

<template>
  <div class="w-full h-full m-0 p-1 flex flex-col">
    <span class="w-96 h-fit"> Page: /Authentication </span>
    {{ credentials }}
    <div class="w-full h-full flex justify-center items-center">
      <div v-on:keyup.enter="sign" class="w-80 flex flex-col gap-4">
        <div class="w-full flex flex-col gap-2">
          <!-- Authentication Email  -->
          <div>
            <label for="email">Email:</label>
            <AuthenticationEmail v-model="credentials.email" id="email" />
          </div>
          <!-- Authentication Password  -->
          <div>
            <label for="password">Password:</label>
            <AuthenticationPassword
              v-model="credentials.password"
              id="password"
            />
          </div>
        </div>
        <!-- Authentication Action  -->
        <div>
          <AuthenticationAction v-model="credentials" ref="action" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
