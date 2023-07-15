import { lightTheme, darkTheme } from "naive-ui";

export const useThemes = () => {
  return useState("themes", () => {
    const themes = {
      light: lightTheme,
      dark: darkTheme,
    };
    return themes;
  });
};
