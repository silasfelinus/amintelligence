<template>
  <div class="container mx-auto px-4">
    <header class="py-4">
      <ThemeChange />
    </header>
    <NuxtErrorBoundary>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <SocialMediaPostGenerator />
      </div>
      <template #error="{ error }">
        <div class="text-center">
          <p class="text-4xl pt-10">⚠️ A fatal error has occurred:</p>
          <p>{{ error }}</p>
        </div>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<script setup lang="ts">
import { useBreakpoints } from './composables/useBreakpoints';

// Use the breakpoints composable
const { isSmallScreen } = useBreakpoints();
</script>
