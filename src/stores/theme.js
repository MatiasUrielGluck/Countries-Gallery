import { defineStore } from "pinia";
import general from "../themes/general";
import light from "../themes/light";
import dark from "../themes/dark";

export const useThemeStore = defineStore({
  id: "theme",
  state: () => ({
    general: general,
    theme: light,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    setGlobalStyles() {
      document.body.style.background = this.theme.background;
      document.body.style.color = this.theme.text;
    },

    changeTheme() {
      if (this.theme.name === "Light") {
        this.theme = dark;
        this.setGlobalStyles();
      } else {
        this.theme = light;
        this.setGlobalStyles();
      }
    },
  },
});
