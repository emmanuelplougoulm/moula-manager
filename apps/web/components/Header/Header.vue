<script setup lang="ts">
import NavigationItem from '@/components/navigation-item/navigation-item.vue';

const colorMode = useColorMode();

console.log(colorMode.preference);
</script>

<template>
  <div class="header-container">
    <select v-model="$colorMode.preference">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
    <NavigationItem :link="'/dashboard'" :title="'Dashboard'" />
    <NavigationItem :link="'/wallet'" :title="'Wallet'" />
  </div>
</template>

<style scoped>
.header-container {
  border-bottom: 2px var(--color-border-lighter) solid;
  height: var(--app-header-height);
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  padding: 10px;
}
</style>
