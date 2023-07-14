export const useSystem = () => {
  return useState("system", () => {
    return window.__TAURI__ ? true : false;
  });
};
