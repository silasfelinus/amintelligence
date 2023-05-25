<script setup lang="ts">
import { useUserStore } from './stores/user';
import { useThemeStore } from './stores/theme';

const user = useUserStore();
const themeStore = useThemeStore();
themeStore.init();
</script>
<template>
  <div>
      <p>User: {{ user.name }}</p>
      <p>Is authenticated: {{ user.authenticated }}</p>
      <p>Theme: {{ themeStore.currentTheme }}</p>
      <ButterflyGroup />
      </div>
</template>