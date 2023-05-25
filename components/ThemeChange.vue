<script setup lang="ts">
import { ref, onMounted, watch, reactive } from "vue";

const state = reactive({
  open: false,
  themes: [
      "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", 
      "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", 
      "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", 
      "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", 
      "night", "coffee", "winter"
    ],
  currentTheme: 'emerald'
});

const toggleMenu = () => {
  state.open = !state.open;
};

const changeTheme = (theme: string) => {
  state.open = false;
  state.currentTheme = theme;
};

// Save the current theme to localStorage whenever it changes
watch(() => state.currentTheme, (newTheme) => {
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  const defaultTheme = savedTheme ? savedTheme : "emerald";
  changeTheme(defaultTheme);
});
</script>
