import { lightTheme, darkTheme } from "naive-ui";

export const useColor = () => {
  return useColorMode();
};

const useColorThemes = () => {
  return useState("themes", () => {
    const themes = {
      light: lightTheme,
      dark: darkTheme,
    };
    return themes;
  });
};

export const useColorTheme = () => {
  const color = useColor();
  const themes = useColorThemes();
  const theme = computed(() => {
    if (color.value === "light") {
      return themes.value.light;
    } else if (color.value === "dark") {
      return themes.value.dark;
    }
  });
  return theme;
};
