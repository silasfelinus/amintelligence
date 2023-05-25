import { defineStore } from 'pinia';

export const useThemeStore = defineStore({
  id: 'theme',
  state: () => ({
    open: false,
    themes: [
      "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", 
      "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", 
      "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", 
      "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", 
      "night", "coffee", "winter"
    ],
    currentTheme: 'emerald',
  }),
  actions: {
    toggleOpen() {
      this.open = !this.open;
    },
    setCurrentTheme(theme: string) {
      try {
        if (!this.themes.includes(theme)) throw new Error("Theme not found");

        this.currentTheme = theme;
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
      } catch (error) {
        console.error(error);
        // Handle error or notify user
      }
    },
    init() {
      try {
        const savedTheme = localStorage.getItem("theme");
        const defaultTheme = savedTheme ? savedTheme : "emerald";
        this.setCurrentTheme(defaultTheme);
      } catch (error) {
        console.error(error);
        // Handle error or notify user
      }
    },
  },
});
