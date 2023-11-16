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
  width: 112px;
  background-color: var(--color-bg-darker);
  color: var(--color-text-light);
  cursor: pointer;
  border-radius: 4px;
}

a,
a:active,
a:hover,
a:visited {
  color: inherit;
  text-decoration: none;
}
</style>
