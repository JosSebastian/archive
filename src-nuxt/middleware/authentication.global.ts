export default defineNuxtRouteMiddleware((to, from) => {
  
  const user = useSupabaseUser();
  const system = window.__TAURI__ ? true : false;

  if (to.path === "/authentication") {
    // If Action is Not Defined, Navigate to Home
    if (to.query.action === undefined) {
      return navigateTo("/");
    }
    // If User is Signed In, Navigate to Home
    if (user.value) {
      return navigateTo("/");
    }
  }

  if (to.path !== "/authentication") {
    if (user.value) {
    }
    // If User is Not Signed In
    else {
      // If System, Navigate to Authentication
      if (system) {
        return navigateTo({
          path: "/authentication",
          query: { action: "sign-in" },
        });
      }
    }
  }
});
