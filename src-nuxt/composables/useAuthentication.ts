export type Email = string;
export type Password = string;
export interface Credentials {
  email: Email;
  password: Email;
}

export const useCredentials = () => {
  const credentials = useState(
    "credentials",
    (): Credentials => ({
      email: "",
      password: "",
    })
  );
  return credentials;
};

export const useSignOn = async () => {
  const client = useSupabaseClient();

  const credentials = useCredentials();

  if (
    credentials.value.email === null ||
    credentials.value.email === undefined ||
    credentials.value.email === ""
  ) {
    console.log("Email is Null or Undefined or Empty");
    return false;
  }
  if (
    credentials.value.password === null ||
    credentials.value.password === undefined ||
    credentials.value.password === ""
  ) {
    console.log("Password is Null or Undefined or Empty");
    return false;
  }

  const { data, error } = await client.auth.signUp(credentials.value);

  if (error) {
    console.log(error);
    credentials.value.password = "";
  } else {
    credentials.value.email = "";
    credentials.value.password = "";
    navigateTo("/");
  }
};

export const useSignIn = async () => {
  const client = useSupabaseClient();

  const credentials = useCredentials();

  if (
    credentials.value.email === null ||
    credentials.value.email === undefined ||
    credentials.value.email === ""
  ) {
    console.log("Email is Null or Undefined or Empty");
    return false;
  }
  if (
    credentials.value.password === null ||
    credentials.value.password === undefined ||
    credentials.value.password === ""
  ) {
    console.log("Password is Null or Undefined or Empty");
    return false;
  }

  const { data, error } = await client.auth.signInWithPassword(
    credentials.value
  );

  if (error) {
    console.log(error);
    credentials.value.password = "";
  } else {
    credentials.value.email = "";
    credentials.value.password = "";
    navigateTo("/");
  }
};

export const useSignOut = async () => {
  const client = useSupabaseClient();

  const { error } = await client.auth.signOut();

  if (error) {
    console.log(error);
  } else {
    navigateTo("/");
  }
};
