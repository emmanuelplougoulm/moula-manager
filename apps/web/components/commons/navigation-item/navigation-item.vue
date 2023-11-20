<script setup lang="ts">
defineProps({
  title: {
    type: String
  },
  link: {
    type: String,
    required: true
  }
});
</script>

<template>
  <NuxtLink class="navigation-item" :to="link">{{ title }}</NuxtLink>
</template>

<style scoped>
.navigation-item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.375rem 0.75rem;
  background-color: var(--color-bg-darker);
  color: var(--color-text-light);
  cursor: pointer;
  border-radius: var(--border-radius-base);
}

a,
a:active,
a:hover,
a:visited {
  color: inherit;
  text-decoration: none;
}
</style>
